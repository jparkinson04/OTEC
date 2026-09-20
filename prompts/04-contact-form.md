# 04 Contact form

## Context
`ContactForm.astro` has the final markup and styling but posts nowhere. The client wants
submissions to land in their email inbox. The site is static on Vercel.

## Decision to confirm with Alfie before building
- **Option A, form backend service** (keeps the site fully static): the form posts to a hosted
  form endpoint that forwards to OTEC's inbox. Quickest, no server code, access key in an env var.
- **Option B, own endpoint:** add `@astrojs/vercel`, an Astro Action or API route, and send through
  a transactional email API. More control and branding, needs a verified sending domain, which
  means adding DNS records on otecltd.com (records only, never nameservers).

Pick whichever Alfie confirms. Default to A if there is no answer.

## Tasks
1. Wire up submission with progressive enhancement: the form must work as a normal POST without
   JavaScript, and submit via `fetch` with inline status when JavaScript is available.
2. States: idle, sending (button disabled, label "Sending"), success (form replaced with a short
   thank-you and an expected reply time placeholder `[REPLY TIME]`), error (message with the phone
   number and email as a fallback). Use the existing `[data-form-status]` live region.
3. Validation: native constraint validation first, then friendly inline messages per field,
   linked with `aria-describedby`. Validate again on the server side if option B.
4. Spam: honour the existing honeypot field, add a minimum time-to-submit check, and add a
   privacy-friendly challenge only if spam becomes a problem (leave a comment, do not add one now).
5. Put secrets in `.env`, document them in `.env.example`, and list the variables that need
   adding in the Vercel dashboard in your summary.
6. Add a one-line privacy note under the button with a placeholder link `[PRIVACY POLICY]`.

## Acceptance
- A test submission arrives at the address Alfie provides, with a clear subject line
  ("New enquiry from the OTEC website") and reply-to set to the sender.
- Works with JavaScript disabled.
- No secrets committed. `npm run build` passes.
