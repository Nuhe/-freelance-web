# Feature: fox-protagonist-hero

## Objective
Redesign the FoxOps hero so a hand-drawn-style SVG fox character is the brand protagonist, inspired by how b-egg.farm builds personality around its chicken mascot.

## Problem / Why
The user says the current hero reads as AI-generated. Evidence, from a live screenshot taken 2026-10-13:
- generic headline "Soluciones digitales para avanzar"
- decorative meta-labels that carry no information ("FOX / 01 DISEÑO DIGITAL", "ESTRATEGIA —— EJECUCIÓN", "FOXOPS / OPERACIONES DIGITALES", "DESLIZÁ PARA EXPLORAR")
- a symmetric low-poly network fox that reads as a logo, not a character
- the stock dark + orange glow formula

The user chose the b-egg brand-personality direction and asked that the fox be drawn as SVG by us.

## Reference findings (b-egg.farm, seen in headless captures)
- The mascot is a hand-drawn ink illustration with one oversized expressive eye.
- A separate pupil follows the cursor, and a hand-drawn "Cluck!" speech bubble appears on hover.
- The mascot rises from behind a wavy yolk edge (translateY 75% → 0).
- Three-voice typography: condensed caps for the shout, a dry-brush script aside that overlaps the caps, and mono for the facts.
- The copy is playful and self-aware.
- The mascot recurs across sections in different poses.
- Not transferred: 3D renders, video, Lottie, GSAP, the long preloader, and sound.

## Scope
- New `FoxCharacter` inline-SVG component with an ink-line style, an expressive eye and a posture. It replaces FoxNetwork in the hero.
- Hero layout and copy:
  - Headline: "Webs con colmillo." (default; the user can swap it)
  - Brush-script aside: "astutas para vender"
  - Keep a clear primary CTA.
  - Remove the decorative meta-labels.
- Motion:
  - Entrance: the fox peeks from behind an orange wave, ears first, then the head with overshoot, in under 1.2s, with no blocking preloader. The headline lines rise from masks.
  - Idle loop: blink, ear flick, tail sway.
  - The pupils track the cursor.
  - Hovering the fox or the primary CTA shows a "¿Hablamos?" bubble and an ear perk.
  - Clicking the fox makes it hop with a squash/stretch.
- Recurring motif: a small fox peeking over the Casos section and sleeping in the footer.
- Fonts: add one brush/marker script and one mono from Google Fonts.

## Constraints
- No new npm dependencies. React 19 + Vite 8 + plain CSS + inline SVG.
- `prefers-reduced-motion`: the fox stays static and visible, with no tracking or idle loop. The content is never hidden.
- The LCP headline must be visible right away; the entrance must not delay it noticeably.
- Hover reactions also trigger on `:focus-visible`. The fox is decorative (`aria-hidden`) unless it is interactive; if it is clickable, it becomes a button with an accessible label.
- Cursor tracking runs on pointer-capable devices only and is throttled with rAF.
- No horizontal overflow at 375px. The hero must still look good on mobile.
- UI copy in Spanish.

## Tasks
- [x] T1 — FoxCharacter SVG (ink style, eye/pupil groups, ears, tail as separate animatable groups) (route: delegated writer). Commit `2793bfb`.
- [x] T2 — Hero layout, copy, fonts, entrance choreography; remove decorative labels and FoxNetwork from the hero (route: delegated, same writer). Commit `4615690`.
- [x] T3 — Interactions: idle loop, cursor tracking, hover bubble, click hop, reduced motion (route: delegated, same writer). Commit `2cbc4f4`.
- [x] T4 — Recurring motif: a peeking fox in Casos and a sleeping fox in the footer (route: delegated, same writer). Commit `d9055ce`.
- [ ] T5 — Verify lint and build, plus screenshots at 1440/1024/375, entrance frames, and reduced motion; parent visual review; push to main (route: writer verifies, parent reviews and pushes). Writer verification done (see evidence); parent review + push: pending.

## Acceptance criteria
- In a screenshot, the fox clearly reads as a character with expression, not a geometric logo.
- `npm run lint` and `npm run build` pass.
- No horizontal scroll at 375px.
- Reduced motion shows a static fox and all content.
- The pupils move with the cursor at desktop size.

## Checks
- Test-first exception: no test runner. Checks are lint, build, and headless Chromium frame captures and DOM checks.

## Delivery
- Forecast: about 400–550 authored changed lines, mostly SVG path data and CSS. That exceeds the about-400 heuristic because a hand-drawn SVG character is path-heavy, and splitting the character from its hero would not make a reviewable unit. The user's established practice is direct push to main with no PRs, so the work goes in work-unit commits with a native review on the range before the push.

## Progress / Evidence
- Branch `feat/fox-protagonist-hero` created from `main` at 48f2154.
- Work-unit commits (48f2154..d9055ce: 9 files, +646/-180; most of it is generated SVG path data):
  - `2793bfb` feat(hero): add hand-drawn fox character svg (+307)
  - `4615690` feat(hero): redesign hero around fox protagonist (+87/-175)
  - `2cbc4f4` feat(hero): add fox idle, tracking and reactions (+137/-5)
  - `d9055ce` feat(brand): add recurring fox in cases and footer (+118/-3)
- Art: the fox was iterated six times in headless Chromium before it went into the page. It went from a sitting full body (it read as clip art) to a 3/4 bust. That bust has one oversized near eye, sly half lids, one raised brow, a smirk with a fang, a cowlick, and a tail with a pointed tip. Every line is a tapered filled "brush" shape made from Bezier spines. The shading is a dithered `feTurbulence` stipple, and the ink lines have a displacement wobble (scale 2). The path data is static in `FoxCharacter.jsx`, `FoxWave.jsx` and `FoxSleeping.jsx`. The generator script was throwaway and is not in the repo.
- Wave: deep-orange `#d84a12` with a cream brush rim, so it separates from the fox fur. Its ends taper, so no hard box edge shows.
- Checks (final tree d9055ce):
  - `npm run lint`: exit 0.
  - `npm run build`: exit 0 (CSS 25.47 kB, JS 234.64 kB before gzip).
  - Headless CDP script (`vite preview` on 4181, Chromium with blink-settings hover/fine pointer): 27/27 checks pass. The script checked:
    - no horizontal overflow at 1440, 1024 and 375 (also under reduced motion and after scrolling at 375);
    - the CTA is within 1.3 viewports (bottom at 650/900, 582/768 and 760/812);
    - the LCP is the h1 line span at about 124 ms;
    - the pupils follow the pointer (top-left gives translate(-19.0, -6.8); bottom-right gives (12.4, 17.2); clamped to ±20/±22);
    - CTA hover and focus excite the fox (bubble opacity 1, ear transform) and the bubble hides when the pointer leaves;
    - a click hops the fox and the hop class clears afterwards;
    - the fox is a `button` labelled "Saludar al zorro" with a solid focus outline;
    - blink, tail and ear loops run, and pause when off screen (`data-offscreen`);
    - the Casos head rises when it comes into view, and the footer fox breathes;
    - with reduced motion, no animations run, the fox is static and visible, all copy has opacity 1, there is no tracking, and the bubble still shows on hover;
    - touch at 375 has no tracking.
  - Entrance frames: 0, 300 (ears above the wave), 600 (head rising after the pause), 900 (overshoot) and 1500 ms (settled).
- Pending: parent visual review, the native review on the range 48f2154..d9055ce, and the push to main.

## Next step
Parent: visual review of the screenshots, native review of 48f2154..d9055ce, then push to main (T5).
