# OTEC website

Rebuild of https://otecltd.com for OTEC Services Ltd (electrical engineering, UK wide).
Built by Seam Digital Studio. Client contact: Paul Owen.

## Scope (agreed with the client)

Three pages, dark theme:

1. **Home** (`/`): hero, about + stats + process, nine services, featured projects, contact band.
2. **Projects** (`/projects/`): interactive map. Hover a pin to preview a project, click into a
   project profile (`/projects/<slug>/`) with all the photos and a short write-up.
3. **Contact** (`/contact/`): form wired to email, plus contact details.

Out of scope: team section, blog, booking, reviews widgets.
Ongoing: Seam adds new projects month by month, so **adding a project must stay a one-file job**
(one markdown file + a folder of photos). Protect that at all costs.

## Stack

- Astro 7, static output, TypeScript strict. Node 22.12+.
- No UI framework, no Tailwind. Plain `.astro` components with scoped `<style>`.
- Fonts self-hosted via Fontsource (Archivo Variable, IBM Plex Sans, IBM Plex Mono).
- Deployed on Vercel. The client owns the hosting account and the domain.
- DNS: the client has email on otecltd.com. **Never suggest nameserver changes.** A and CNAME records only.

## Commands

    npm install
    npm run dev       # http://localhost:4321
    npm run build     # must pass before any task is called done
    npm run preview

## Structure

    src/
      styles/global.css        all design tokens + base styles (single source of truth)
      layouts/BaseLayout.astro head, fonts, header, footer
      components/              one component per section, scoped styles
      data/site.ts             name, phone, email, address, nav
      data/services.ts         the nine services
      content.config.ts        projects collection schema
      content/projects/*.md    one file per project (files starting "_" are ignored)
      assets/projects/<slug>/  project photos, optimised by Astro at build
      pages/                   index, projects/index, projects/[slug], contact, 404
    prompts/                   build briefs, run in order
    docs/design-reference.md   the approved look, in words

## Design rules

The look is "technical schematic": blue-black grounds, hairline borders, and the circuit traces
from the OTEC logo used as the recurring motif (`CircuitTraces.astro`, the process rail in `About.astro`).

- **Brand blue is `#33B8E5`, sampled from the logo. It is the only accent colour. Never alter it
  and never introduce a second accent.**
- Use the CSS variables in `global.css`. No raw hex values in components. If a new token is
  genuinely needed, add it to `global.css` with a comment.
- Headings: Archivo Variable at `font-stretch: 125%`, weight 600 (use the `.display` class).
  Body: IBM Plex Sans. Small technical labels: IBM Plex Mono, uppercase, tracked (`.label`).
- Corners are sharp: 2px on buttons and inputs, 4px on cards. No pills, no large radii.
- No drop shadows, glassmorphism or emoji. The only gradient or glow allowed is the single
  ambient glow defined as `.ambient` in `global.css` (brand blue at low alpha over the ground),
  used on the hero, page headers and the map panel. Depth otherwise comes from the three ground
  colours and hairlines.
- Icons are inline stroke SVGs via `Icon.astro` (24px grid, 1.6 stroke). No icon fonts.
- Dark text (`--blue-ink`) on blue fills. Body text must pass 4.5:1. `--text-dim` is the
  lightest grey allowed for text.
- Touch targets at least 44px. Visible `:focus-visible` states everywhere. Respect
  `prefers-reduced-motion`.
- Real semantic elements (`<a>`, `<button>`, `<label>`). Never click handlers on divs.

## Content rules

- UK English. Warm and plain, no agency-speak.
- **No em dashes anywhere in site copy.** Use commas, full stops or "to".
- No invented facts, stats, accreditations or testimonials. Performance stats on the home page
  come from `src/data/stats.ts` and are client-supplied. Never change the values or add new
  stats without confirmation from Alfie. If a fact is missing, use a bracketed placeholder like
  `[PHONE NUMBER]` and list it in the task summary.
- Service copy is condensed from the current live site. Keep the meaning if you edit it.

## Working method

- Briefs live in `prompts/` and are run one at a time, in order. Do only what the brief asks.
- Keep the component-split architecture: a new section is a new component, not more markup in a page.
- Before finishing any task: `npm run build` passes, check 390px / 768px / 1440px widths,
  then summarise what changed and list any open placeholders or decisions for Alfie.
- Ask before adding a dependency. Prefer zero-JS solutions; ship client JS only where the
  brief needs it (mobile nav, map, form, motion).
