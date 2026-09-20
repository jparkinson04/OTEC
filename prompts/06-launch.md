# 06 SEO and launch

## Tasks
1. **Placeholders.** Search the repo for `[` placeholders. List every one still open. Do not invent
   values. Stop and ask Alfie for anything missing.
2. **Metadata.** Unique title and description per page. Create a 1200x630 Open Graph image in the
   site style (dark ground, logo, traces) at `public/og.png` and reference it in `BaseLayout`.
   Add `twitter:card`.
3. **Structured data.** `Electrician` / `LocalBusiness` JSON-LD on the home page using `site.ts`
   (name, url, telephone, email, address, areaServed "United Kingdom", the nine services as
   `hasOfferCatalog`).
4. **Redirects.** The old WordPress site has `/gallery/` and `/contact-us/`. Add `vercel.json`
   redirects: `/gallery/` to `/projects/`, `/contact-us/` to `/contact/`, both permanent. Check the
   old sitemap for any other indexed URLs and redirect those too.
5. **robots.txt** pointing at the sitemap. Confirm `site` in `astro.config.mjs` is the final domain.
6. **Performance.** Lighthouse mobile 95+ across the board on home, projects and a project profile.
   Check font loading (preload the Archivo latin subset if it helps), image sizes and that the
   map code is isolated to the projects page.
7. **Analytics.** Only if Alfie confirms. Prefer a cookieless option so no banner is needed.
8. **Docs.** Write `docs/adding-a-project.md`: a plain-English, step-by-step guide for the monthly
   update (add photos folder, copy the template, fill in the fields, find coordinates, preview,
   push). This is the maintenance runbook.

## Launch checklist (output this in your summary for Alfie, do not action DNS yourself)
- Vercel project sits in the client's own account, production branch set, env vars added.
- Domain added in Vercel. **Edit A and CNAME records only. Do not change nameservers**, the
  client's email runs on the same domain. Leave MX, SPF, DKIM and DMARC records untouched.
- Lower DNS TTL a day before the switch. Keep the old WordPress hosting alive for a week after.
- After go-live: test the form on the live domain, submit the sitemap in Search Console,
  spot-check the redirects, check the site on a real phone.
