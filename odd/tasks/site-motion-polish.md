# Feature: site-motion-polish

## Objective
Apply the remaining recommendations from the b-egg.farm / ventriloc.ca analysis to the FoxOps landing.

## Problem / Why
Only the Casos section has reveal motion, and the case cards carry a one-line description. The user asked to apply the rest of the suggested recommendations and push to main.

## Scope
- Reuse the existing `useInView` reveal (ventriloc-style) in Hero copy (only if it does not hurt first paint), Solutions, Approach, and Contact.
- Case detail per case: Challenge → Solution → Result → Stack, using a native `<details>`/`<summary>`.
- A CSS-only marquee strip of technologies and tools.
- Out of scope: the Karina landing. It lives in another repo and needs real advisor data.

## Constraints
- No new dependencies. React 19 + Vite 8 + plain CSS.
- Content stays visible when IntersectionObserver is unavailable; the hidden state applies only under `.reveal-ready` and `prefers-reduced-motion: no-preference`.
- The marquee pauses on hover/focus, stops under reduced motion, duplicates are `aria-hidden`, and nothing overflows horizontally.
- Case detail copy must reflect only what the sites actually show. No invented metrics or client claims.
- UI copy in Spanish.

## Tasks
- [x] T1 — Extend the reveal to Solutions, Approach, and Contact (route: delegated writer, 2+ non-trivial files). Commit 9599bb6. Hero left unanimated to keep the LCP instant.
- [x] T2 — Case details with native `<details>` (route: delegated, same writer). Commit 77e3a4a.
- [x] T3 — Tech marquee strip (route: delegated, same writer). Commits edbff43, 8d5e9b0.
- [x] T4 — Verify lint, build, and screenshots at 1440/1024/375 plus reduced motion (route: writer verifies). Push: pending parent.

## Acceptance criteria
- `npm run lint` and `npm run build` pass.
- No horizontal scroll at 375px with the marquee present.
- `<details>` works by keyboard and without JS.
- Reduced motion shows all content static.

## Checks
- Test-first exception: no test runner. Checks are lint, build, and headless Chromium inspection.

## Delivery
- Strategy: ask-on-risk. Forecast ~200–300 authored changed lines. The user explicitly authorized pushing to main.

## Progress / Evidence
- Branch `feat/site-motion-polish` created from `main` at 3c0d124.
- 9599bb6 `feat(motion): extend scroll reveal to all sections`: useInView plus the existing `reveal-item`/`reveal-mask` classes on Solutions (the grid is now `ul > li` so the reveal `translate` and the hover `transform` live on separate elements), Approach and Contact.
- 77e3a4a `feat(cases): add case detail disclosure`: a `<details>` "Ver detalle" with Desafío/Solución/Resultado/Stack. `.case-detail` is `position: relative; z-index: 1`, so it sits above the stretched `.case-link::after`. The open animation is CSS-only and gated by reduced motion. The copy describes only features visible on the sites.
- edbff43 `feat(stack): add technology marquee` and 8d5e9b0 `fix(stack): drop dangling separators in static tech list`: a strip between Solutions and Approach. The first list is the accessible one, the duplicate is `aria-hidden`, and the region is focusable so it can pause on focus-within. Under reduced motion it is a static wrapped list.
- `npm run lint`: passes with no warnings. `npm run build`: passes (built in about 0.6s).
- Headless Chromium CDP script (scratchpad `verify2/verify.mjs`) with `vite preview --port 4180`: 52/52 checks passed, three consecutive runs after removing a test-side smooth-scroll flake. At 1440, 1024 and 375 it confirmed: scrollWidth == clientWidth; below-fold reveals start hidden and are 19/19 visible after scrolling; details open by mouse click, Enter and Space; summary tabIndex 0; "Ver sitio" opens the case URL in a new tab; the card media still hit-tests to the link; the marquee moves and pauses on hover and focus; the duplicate is aria-hidden. Under reduced motion: all reveals are visible on load, the marquee has animation `none`, the duplicate is hidden, the list wraps with no overflow, and details open with no animation.
- Screenshots were inspected: full-*, details-open-*, marquee-*, marquee-reduced-*, full-reduced-* at 1440/1024/375.
- Caveat: this is a client-rendered SPA, so with no JS nothing renders at all. "Works without JS" therefore holds only for the disclosure behaviour, which is native `<details>` with no JS handlers.

## Next step
The parent reviews and pushes (push: pending parent).

## Follow-up
- [x] F1 — Opening one case detail stretched sibling cards in the same grid row. Fixed with `align-items: start` on `.case-grid` (route: inline, one mechanical CSS line). Lint passes, build passes, headless check 52/52, and the 1440 details-open screenshot shows each card keeping its own height.
- Native review (lineage review-3932e26c9bde9d64, base 51f406a..77d9236, committed-only, untracked excluded): risk medium, consent granted by the user, one reliability lens. Outcome **approved** and acknowledged. Reviewed boundary advances to 77d9236.
- Advisory findings (non-blocking, follow-up work):
  - R3-reveal-flash (WARNING, src/hooks/useInView.js:12): `reveal-ready` is added after first paint, so elements already in the viewport may flicker.
  - R3-detail-required (src/App.jsx:153-160): unguarded `detail.stack`.
  - R3-readme-nojs-claim (README.md:16): the no-JS claim is inaccurate.
  - R3-no-automated-coverage: no committed tests for useInView.
- [x] F2 — Review advisories fixed (route: inline, three small edits). R3-reveal-flash: `useInView` now uses `useLayoutEffect`. R3-detail-required: `detail` is optional and `stack` defaults to `[]`. R3-readme-nojs-claim: README corrected. Lint passes, build passes, headless check 52/52. R3-no-automated-coverage is left as follow-up because the repo has no test runner.
