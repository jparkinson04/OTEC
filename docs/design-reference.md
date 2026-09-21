# Design reference

The approved home page concept lives on the Claude design canvas:
https://claude.ai/artifact/DTJFptH58wKqdBiRDGr1cC

The scaffold in this repo already implements that concept. This file records the intent so
future changes stay consistent.

## The idea

OTEC's logo is a set of circuit traces ending in round nodes. The site turns that into its whole
visual language instead of relying on stock imagery (the old site's lightning photo):

- **Hero:** eight traces run in from the right edge, three bright (3px, filled nodes) and
  five dim (1.5px, 40% opacity, ring nodes), over the ambient glow (`.ambient`), a soft
  brand-blue light rising from the top right. The glow replaced the original 48px blueprint
  grid at the client's request (September 2026) and is also used on page headers and the map panel.
- **About:** the Design, Installation, Commissioning, Maintenance process is drawn as one trace
  with four nodes. The last segment is grey: maintenance is ongoing. On mobile the rail turns vertical.
- **Contact band:** small trace brackets enter from each side and point at the call to action.
- **Favicon:** the OTEC logo centred on a dark square (`public/favicon.png`, 32px, and
  `public/apple-touch-icon.png`, 180px), rendered from the supplied PNG. Regenerate from the
  vector logo once the client sends it.

## Palette

| Token | Hex | Use |
| --- | --- | --- |
| `--blue` | `#33B8E5` | Logo blue. Only accent. |
| `--blue-ink` | `#04121A` | Text on blue |
| `--bg` | `#080D12` | Page ground |
| `--bg-alt` | `#0B1219` | Alternate bands |
| `--surface` | `#0F1821` | Cards, inputs |
| `--line` / `--line-card` / `--line-strong` | `#16212B` / `#1B2833` / `#2A3A47` | Hairlines |
| `--text-strong` / `--text` | `#F4F8FA` / `#E8EEF2` | Headings / default |
| `--text-muted` / `--text-dim` | `#A9B8C4` / `#8496A4` | Body / labels |

## Type

- Display: Archivo Variable, width 125%, weight 600, tight tracking. Echoes the wide OTEC lettering.
- Body: IBM Plex Sans 400/500/600.
- Labels: IBM Plex Mono, uppercase, 0.14em tracking. Used for section labels, card numbers,
  metadata and placeholders.

## Page rhythm (home)

Header 88px, hero, about (with performance stats), services (alt ground), projects,
contact band (alt ground), footer. Grounds alternate so sections separate without boxes.
Desktop gutter 96px, section padding 120px, both fluid down to 20px / 72px.

## Still needed from the client

- Vector logo (SVG/AI/EPS). The supplied PNG is only 251px wide.
- Phone, email, address, company number.
- First batch of projects: name, location, sector, services, 2 to 4 sentence write-up, photos.
- Any accreditations they hold (NICEIC, etc.) and permission to show the badges.
