# Feature: case-studies-section

## Objective
Add a "03 / Casos" section to the FoxOps landing that showcases real example projects.

## Problem / Why
The site lists services but shows no proof of work. Prospects need concrete examples.

## Scope
- Three cases: Plan Paracaídas (landing), Rossi Almacén (e-commerce demo), INFOLAPLATA (redesign concept).
- Karina (SanCor) excluded until its live placeholders and broken hero image are fixed.
- Animations inspired by ventriloc.ca: IntersectionObserver reveal toggling `.is-inview`, CSS keyframes with stagger, masked title reveal, card hover/focus effects. No new dependencies.

## Constraints
- React 19 + Vite 8 + plain CSS (`src/index.css`), no animation libraries.
- Content visible without JS; hidden initial state only under `prefers-reduced-motion: no-preference` and a JS-ready class.
- `:focus-visible` mirrors every hover effect.
- Use stable URL `https://almacen-rossi.vercel.app/`, never the preview hash URL.
- INFOLAPLATA labelled as a concept/redesign proposal.
- UI copy in Spanish (existing site language).

## Tasks
- [x] T1 — Capture optimized screenshots of the three sites into `public/cases/` (route: delegated, writer trigger with T2). Commit `3c5f9f5`.
- [x] T2 — Cases section: data, component, reveal hook, CSS, nav link, kicker numbering, README (route: delegated, 2+ non-trivial files). Commit `77d40d5`.
- [x] T3 — Visual verification of the local build at desktop and mobile widths, plus reduced motion (route: delegated with T2). Fix applied before commit `77d40d5` (badge moved off the INFOLAPLATA logo).

## Acceptance criteria
- Section `#casos` sits between Approach and Contact, is linked from the nav, and renders 3 case cards with screenshot, tags, description, and external link (`target="_blank" rel="noopener noreferrer"`).
- `npm run lint` and `npm run build` pass.
- No horizontal scroll at 375px; reduced motion shows content without animation.

## Checks
- Test-first exception: the repo has no test runner. Checks are `npm run lint`, `npm run build`, and headless Chromium screenshots of `vite preview`.

## Delivery
- Strategy: ask-on-risk. Forecast: about 250–350 authored changed lines (under budget).

## Progress / Evidence
- Branch `feat/case-studies-section` created from `main` at 51f406a.
- T1: headless Chromium (`--window-size=1440,900 --virtual-time-budget=15000`) captured each hero; images inspected and show real content (no cookie/loading screens). Re-encoded to WebP 1200x750 (q 0.78) via Chromium canvas because no cwebp/ffmpeg webp encoder was available: `plan-paracaidas.webp` 51.8 KB, `rossi-almacen.webp` 62.1 KB, `infolaplata.webp` 76.4 KB.
- T2: `cases` array + `Cases` component in `src/App.jsx`, `src/hooks/useInView.js` (IntersectionObserver, unobserves after first hit, adds `reveal-ready` then `is-inview`), CSS in `src/index.css` (reveal via `translate` + opacity with `--i` stagger, masked title lines, hover/focus-within image scale 1.03, accent border, arrow shift, stretched link). Nav link "Casos" before Contacto; Contact kicker renumbered to 04. INFOLAPLATA carries a "Propuesta de rediseño" badge, the "Concepto" tag and a note that it is not the official site. README section added.
- T3 evidence:
  - `npm run lint` → passed, no output from eslint.
  - `npm run build` → passed (`✓ built in 568ms`, CSS 19.48 kB, JS 212.85 kB).
  - `vite preview --port 4179` + CDP script in headless Chromium: 1440 → 3 columns, scrollWidth 1440 = clientWidth; 1024 → 2 columns, no overflow; 375 → 1 column, scrollWidth 375 = clientWidth; 3 cards, 3 images loaded, all links `_blank|noopener noreferrer`, nav shows Casos. Items start at opacity 0 before scrolling under no-preference and at opacity 1 under emulated `prefers-reduced-motion: reduce`.
  - Screenshots inspected: cards render correctly at 1440, 1024 and 375. Issue found and fixed: the badge covered the INFOLAPLATA logo, so it now sits bottom-left.
  - Preview server stopped after the checks.
- Delivery: 2 work-unit commits, about 134 authored changed lines (under budget). Not pushed.
- Parent spot check: `npm run lint` and `npm run build` re-run and passed; 1440 screenshot inspected.
- RDD assessment (`gentle-ai review assess --base-ref main --committed-only --untracked-scope=exclude`): risk `medium` (binary webp flagged as executable_change), `review_due: false`, reason `under_budget` (185 changed lines). Review stays pending in the slice.

## Next step
User review; push/PR remain the user's decision.
