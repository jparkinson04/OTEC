# 05 Motion

## Context
The design is deliberately still and technical. Motion should feel like a system powering up:
precise, quick, never bouncy. All of it is optional polish and must vanish under
`prefers-reduced-motion: reduce`.

## Tasks
1. **Hero traces draw on.** On load, each path in `CircuitTraces` (hero variant) draws from the
   right edge towards its node using `stroke-dasharray` / `stroke-dashoffset`, staggered by about
   80ms, 900ms each, `--ease`. Each node fades and scales in as its line arrives. CSS only if
   possible; path lengths can be set via `pathLength="1"`.
2. **Bright-trace pulse.** After the draw-on, a small highlight travels along one bright trace
   every 6 to 8 seconds. Subtle. Pause when the hero is off screen.
3. **Hero copy.** Eyebrow, headline, lead and buttons rise 12px and fade in, staggered, under
   700ms total.
4. **Scroll reveals.** One small `IntersectionObserver` utility adding `.is-visible`. Apply to
   section headings, service cards (stagger by column) and project cards. Reveal once, never on
   scroll up.
5. **Process rail.** When the about section enters view, the rail fills left to right and each
   node lights as the line reaches it. Vertical on mobile.
6. **Contact band.** The two bracket traces draw inward when the band enters view.
7. **Micro-interactions.** Service card icon nudges on hover, arrow links already slide, buttons
   get a 1px press offset on `:active`.
8. Use View Transitions for page changes only if it works cleanly with the map page. Otherwise skip.

## Do not
- Add a motion library, smooth-scroll hijacking, custom cursors or parallax.
- Animate layout properties. Transform and opacity only (plus stroke-dashoffset).

## Acceptance
- With reduced motion enabled, everything appears instantly in its final state.
- No layout shift from any animation (CLS stays at 0).
- Total added JS under 2kb gzipped. `npm run build` passes.
