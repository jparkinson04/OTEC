# 03 Project profile pages

## Context
`src/pages/projects/[slug].astro` has a working basic layout: header, cover, write-up, services
list, two-column gallery. The client wants each profile to show **all** the project's photos plus
a short write-up.

## Tasks
1. Gallery: keep the responsive grid, and add a lightweight lightbox written in plain TypeScript
   (no dependency). Requirements: opens on click or Enter, arrow keys and swipe to move, Escape to
   close, focus trapped while open and returned to the thumbnail on close, image counter in Plex
   Mono ("03 / 12"), full-size image lazy-loaded. Use the native `<dialog>` element.
2. Let the grid handle mixed orientations gracefully. Portrait photos must not be cropped to
   nonsense: use `object-fit: cover` on thumbnails only, show the full image in the lightbox.
3. Add optional `alt` text support for gallery images. Change the schema so `gallery` accepts
   either a plain image path or `{ src, alt }`, and update `_TEMPLATE.md` to show both.
4. Add a small locator to the profile: a static mini map or simply the location with a "See on the
   project map" link that opens `/projects/` focused on this pin (`/projects/?focus=<id>`), and
   make the map honour that query parameter.
5. Add previous / next project links at the bottom, ordered by date, styled as two wide link
   blocks with the trace-and-node motif pointing left and right.
6. Add `JSON-LD` for each project (`CreativeWork` or `Article`, whichever fits) with name,
   description, image and location.

## Acceptance
- A project with 1 photo and a project with 30 photos both look intentional.
- Lightbox passes a keyboard-only and a screen-reader sanity check.
- Adding a project is still: one markdown file plus one folder of photos.
- `npm run build` passes.
