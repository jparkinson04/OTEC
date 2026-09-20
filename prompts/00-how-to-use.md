# Build briefs

Run these one at a time in Claude Code, in order. Start each session with:

> Read CLAUDE.md and docs/design-reference.md, then carry out prompts/0X-name.md.
> Stop when the brief's acceptance checks pass and summarise what changed.

| # | Brief | Outcome |
| --- | --- | --- |
| 01 | home-qa | Home page checked against the mockup at every width, loose ends tidied |
| 02 | projects-map | Interactive UK map on /projects/ with hover previews |
| 03 | project-profile | Project pages with full gallery + lightbox, prev/next |
| 04 | contact-form | Form sends to OTEC's inbox, with spam protection and states |
| 05 | motion | Trace draw-on, scroll reveals, micro-interactions |
| 06 | launch | SEO, structured data, performance, redirects, Vercel + DNS checklist |

Commit after each brief so any one of them can be rolled back on its own.
