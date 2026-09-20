# OTEC website

New three-page site for OTEC Services Ltd, built by Seam Digital Studio with Astro.

## Getting started

Requires Node 22.12 or newer.

    npm install
    npm run dev

Open http://localhost:4321.

## Working with Claude Code in VS Code

1. Open this folder in VS Code and accept the recommended extensions (Astro, Claude Code).
2. Open the Claude Code panel. It reads `CLAUDE.md` automatically for project rules.
3. Work through the briefs in `prompts/` in order. See `prompts/00-how-to-use.md`.

## What is already here

- Home page built to the approved concept, fully responsive.
- Projects index with a placeholder where the interactive map goes, plus project profile pages,
  all driven by markdown files in `src/content/projects/`.
- Contact page with a styled form (not yet sending).
- Design tokens in `src/styles/global.css`.

## Adding a project

1. Put the photos in `src/assets/projects/<slug>/`.
2. Copy `src/content/projects/_TEMPLATE.md` to `src/content/projects/<slug>.md` and fill it in.
3. `npm run dev` to check it, then commit and push. Vercel deploys automatically.

## Before launch

Replace the bracketed placeholders in `src/data/site.ts`, delete the three
`placeholder-project-*.md` files, and run `prompts/06-launch.md`.
