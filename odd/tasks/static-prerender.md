# Feature: static-prerender

## Objective
Deliver the landing content in initial production HTML while preserving React interactions and static hosting.

## Scope and constraints
User authorized prerendering with safe no-JavaScript navigation/contact behavior. Preserve the existing approved About section, portrait, unrelated untracked assets, and static dist deployment. No new dependencies, remote operations, API submissions, SEO-score promises, or unrelated SEO changes.

## Work unit
- [ ] T1 — Add build-time rendering, matching hydration, deterministic initial values, safe no-JavaScript navigation/contact, regression checks, and build documentation.
  - Route: delegated direct; multi-file logic and build/runtime boundary require a bounded writer.
  - Acceptance: generated HTML contains primary content; valid assets; no-JS content/navigation/email usable; form cannot submit personal fields via GET; hydration matches; existing enhanced interactions preserved.
  - Checks: observed RED → GREEN deterministic tests, production build, focused check-only lint, git diff --check, browser checks if an existing supported runtime is available.
  - Commit: pending; exclude previously uncommitted About/portrait work and unrelated assets.

## Delivery
Forecast: approximately 350 authored lines, generated files excluded; heuristic only, not a size cap. Strategy: ask-on-risk; no push or PR authorized. One coherent work-unit commit on the current feature branch. Do not commit pre-existing changes.

## Progress
Implementation complete; prerender-only source delta is 182 authored lines, before this task document. No new dependencies or hosting changes.

Verification observed:
- RED: the original Vite build failed three generated-HTML acceptance checks.
- GREEN: npm test passed 4/4; the parent reran it successfully.
- Final npm run build, npm run lint, focused ESLint, and git diff --check passed. Final dist uses build year 2026.
- Generated HTML includes primary sections, About, native navigation and email; no active form. Hashed client assets exist and server intermediates are excluded.
- Existing Chromium DOM inspection showed hydrated controls and stable SVG IDs/year, without logged hydration errors. No controls were clicked or submissions exercised.
- No-JavaScript browser attempts produced no usable output. Native menu interaction, reduced-motion behavior and mocked submission branches remain unverified; structural checks passed.

Receipt-driven development is on. Selective work-unit commit and native committed-range assessment pending; preserve previous About/portrait changes outside the commit.

## Next step
Form the prerender-only commit, assess its native review applicability, and record the outcome. No publication authorized.
