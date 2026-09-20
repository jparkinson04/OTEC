# 01 Home page QA

## Context
The home page scaffold already implements the approved concept. This pass is quality control,
not redesign.

## Tasks
1. Run the dev server and review the home page at 390, 768, 1024, 1440 and 1920px.
   Fix any overflow, awkward wrapping, orphaned words in headings, or uneven card heights.
2. Hero: between 760px and 1100px the traces sit behind the copy at low opacity. Check the
   headline stays fully legible. Adjust opacity or hide the traces below a breakpoint if needed.
3. Header: confirm the sticky header, the mobile menu (open, close, Escape key closes it,
   focus moves sensibly) and the `aria-current` state on each page.
4. Keyboard pass: tab through the whole page. Every interactive element needs a visible focus
   ring and a sensible order. Skip link works.
5. Run Lighthouse (mobile) on the built site. Note scores in your summary. Fix anything under
   95 for accessibility or best practices.
6. Logo: `public/images/otec-logo.png` is a low-res PNG. If a file named `otec-logo.svg` exists in
   `public/images/`, switch Header and Footer to it. If not, leave as is and flag it.

## Do not
- Change the palette, fonts, copy or section order.
- Add dependencies.

## Acceptance
- No horizontal scroll at any width from 320px up.
- `npm run build` passes with no warnings.
- Summary lists every change and any placeholder still open.
