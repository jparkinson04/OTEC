# 02 Projects map

## Context
The client's headline request: the projects page is an interactive map of the UK. Hover a pin to
see a preview, click to open that project's profile page. They have a lot of projects and Seam
will add more every month, so the map must read everything from the `projects` content collection.
No project data is ever hard-coded in the map component.

## Decision to confirm with Alfie before building
Map engine. Recommended: **Leaflet** (npm package, no API key) with a dark raster basemap, plus
`leaflet.markercluster` if pins overlap. Check the chosen tile provider's terms allow a commercial
site and include its attribution. If Alfie prefers no third-party tiles, the fallback is an inline
SVG outline of the UK with pins projected from lat/lng (lighter and fully on-brand, but no zoom).

## Tasks
1. Create `src/components/ProjectMap.astro`. At build time, serialise the non-draft projects into a
   small JSON payload: id, title, location, sector, summary, lat, lng, url, and an optimised cover
   thumbnail URL (use `getImage` from `astro:assets`, about 480px wide).
2. Replace the `.map-slot` placeholder in `src/pages/projects/index.astro` with the component.
   Load the map script only on this page and only on the client.
3. Pins: custom markers in the brand style. A filled `--blue` node with a ring, like the trace
   nodes in the hero. Active / hovered pin scales up slightly and gains a second ring.
4. Hover (and keyboard focus) on a pin opens a preview card anchored to it: cover thumbnail,
   `sector / location` mono label, title, one-line summary, "View project" link. Style it with
   the existing tokens (`--surface`, `--line-card`, 4px radius). Restyle the library's default
   popup chrome so nothing looks stock.
5. Click or Enter on a pin goes to `/projects/<id>/`.
6. Touch devices have no hover: first tap opens the preview, tapping the preview follows the link.
7. Initial view fits all pins with padding. Disable scroll-wheel zoom until the map is clicked
   so the page does not trap scrolling. Provide zoom buttons styled to match.
8. Keep the project grid beneath the map. It is the accessible and no-JS fallback. Hovering a grid
   card should highlight its pin, and vice versa.
9. Add a sector filter (All / Industrial / Commercial / Domestic / Public sector) as a row of
   toggle buttons above the map. It filters both pins and grid. Only show sectors that exist.

## Acceptance
- Adding a new markdown file with lat/lng makes a new pin appear with no other code change.
- Works with 3 projects and with 80 (test by temporarily duplicating placeholders, then remove them).
- Pins reachable by keyboard, previews announced sensibly to screen readers.
- Map JS and CSS are not loaded on the home or contact pages.
- `npm run build` passes.
