# Feature: rebel-scroll-hero

## Objective
Rebuild the hero as a full-stage sumi-e scroll in which a slender, majestic fox fills the space and its lines carry the text. Moving the mouse paints a black ink brush stroke that leaves a trail, so the visitor feels they are writing their destiny on the page.

## Problem / Why
User feedback (2026-10-13), paraphrased:
- The text-left / fox-right split is still there, and "Webs con colmillo." is an unprofessional way to present the studio.
- Other sites sell products with symbols, icons and marketing, and they have no soul, spirit, humanity, art or feeling.
- FoxOps sells a style: the essence of 90s rebellion, when the rules did not apply to us. The page must not look like an AI product or the output of an automated industry.
- The fox is slender, majestic, beautiful and admirable. It occupies the whole space, and its lines accompany the text.
- Moving the mouse over the hero draws a black ink stroke that leaves a trail. The user should feel they write their destiny on the page.

## Direction
- **Layout:** no two-column split. The fox spans the full hero stage, e.g. a long elegant leap or a stretched stride across the width, with its tail streaming in long calligraphic ribbons. The headline sits inside the negative space of the fox's curve, and the ink lines of the tail and body flow toward the text, underline it, and frame it.
- **Surface:** the hero becomes a light washi/parchment scroll (warm off-white paper, fibres, subtle stains) so black sumi ink reads. It keeps the Ōkami language from the user's references: bold uneven sumi contours, crimson markings, spiral curls, flame plumes, kumo clouds, sun disc and seal. The hero bottom transitions into the dark site with an ink wash or torn paper edge.
- **Copy:** remove "Webs con colmillo." The voice is rebellious and human, not salesy, and has no service list in the headline.
  - Default headline: "Las reglas nunca fueron para nosotros."
  - Short line: "Diseño y desarrollo web hecho a mano. Sin plantillas, sin fábrica."
  - A very subtle hint near the stage: "Mové el cursor. Escribí tu destino."
  - Keep one CTA ("Hablemos").
  - Headline type should be expressive and editorial: Shippori Mincho / serif display weight, and may be set vertically or interlocked with ink lines. Do not use the stock agency grotesk shout.
- **Brush trail:** a canvas layer over the hero paints a black sumi stroke following the mouse.
  - Stroke width varies with speed (slow is thick, fast is thin), with dry-brush bristle texture and ink pooling at pauses.
  - The trail fades slowly, like ink drying or soaking into the paper, over several seconds.
  - Mouse/pen pointer only. Touch must not hijack scrolling (optional: a single tap leaves an ink drop).
  - Pointer events stay passive, the canvas does not block CTA clicks, the canvas is DPR-aware, it pauses when off screen, and resize is handled.
  - Under reduced motion the user-driven trail is allowed, but without auto-animated flourishes.
- Retire the dark-hero-specific pieces that no longer fit (the dark plate and the cream rim tricks) only where the light paper surface makes them unnecessary.

## Scope
- Hero only, plus the paper-to-dark transition below it. Logo, favicon, cameos and avatar stay as they are unless they visibly clash.

## Constraints
- No new npm dependencies; Google Fonts only.
- The LCP headline is visible immediately.
- No horizontal overflow at 375px. On mobile the fox still dominates and the text sits within its lines.
- `prefers-reduced-motion` is respected.

## Tasks
- [ ] T1 — Slender full-stage fox artwork whose lines frame the text (route: delegated writer; implementation and self-verification complete, parent commit pending).
- [ ] T2 — Hero rebuild: washi paper surface, integrated typography and copy, transition to the dark site (route: delegated, same writer; implementation and self-verification complete, parent commit pending).
- [ ] T3 — Ink brush trail canvas following the mouse (route: delegated, same writer).
- [ ] T4 — Verify; parent visual review; native review if due; push to main (route: parent).

## Acceptance criteria
- No split layout. The fox spans the stage and the text lives inside its lines.
- No "Webs con colmillo".
- Moving the mouse paints a fading black ink stroke.
- Lint and build pass, there is no overflow, and reduced motion is respected.

## Checks
- Test-first exception: there is no test runner. Checks are lint, build and headless Chromium captures, including a scripted mouse path for the trail.

## Delivery
- Push directly to main after verification (user preference). The native review runs if the assessment says it is due.

## Progress / Evidence
- Branch `feat/rebel-scroll-hero` created from main at 3c98578.

## Execution plan (T1/T2 candidate)
- Route: delegated direct; one bounded writer owns `src/App.jsx`, `src/index.css`, `src/components/FoxInk.jsx`, new `src/components/scrollArt.js`, README and this document. Preparation and multiple non-trivial files trigger delegation.
- Exploration: the existing hero is a two-column grid; the header is absolute and dark. `FoxInkHead.jsx` imports `FOX` and `ENSO` with a fixed crop from `inkArt.js`; preserve those data and the shared ink filters/palette.
- T1/T2 are a coupled artwork/composition work unit; original full-stage fox and editorial negative space must be judged together. T3 remains a separate pointer-trail work unit.
- Forecast: 700–1000 authored changed lines overall; the ~400-line guideline is advisory and will not cause code-golf or artificial splitting.
- Delivery: `exception-ok`, reflecting the explicit direct-to-main/no-PR handoff; no chain will be created. Parent owns review, commits and authorized delivery.
- Test-first exception: package scripts expose lint/build only, with no deterministic test runner. No RED/GREEN claim; use lint, build and native Chromium screenshot inspection.
- Reference inspection: all three supplied JPGs inspected; anatomy, spiral curls, broad dry contours, crimson/orange/gold plumes inform an original fox, not a traced game character.
- Rollback boundary: hero/header changes in App/CSS, FoxInk + scrollArt and their README description; legacy cameo/logo/footer remain untouched.
- Pending: four art rounds, responsive/reduced-motion/paint-in/header checks; T3 trail proof; parent review and commit identity.

## T1/T2 candidate evidence
- Implemented: original airborne fox, pointed ears/slit eye, tapered brush contours from Bezier normals, crimson curls and markings, warm plumes, flowing ribbons, sun, kumo clouds and 狐 seal. Light fibrous paper, integrated serif Spanish headline/copy, single CTA, deckle exit, fixed paper/dark header and mobile menu.
- Preserved: `inkArt.js`, shared toolkit/palette, logo, favicon, Cases cameo, resting footer and all lower sections. Removed dead split-hero underline, entrance, old layer and button-specific CSS. No dependencies added.
- Candidate files: `src/App.jsx`, `src/index.css`, `src/components/FoxInk.jsx`, `src/components/scrollArt.js`, `README.md`, this document. No commit yet; parent owns the commit/review boundary. Checkboxes remain open until that boundary is recorded.
- Actual authored source/docs delta before this task-document update: approximately 460 lines (additions + deletions; includes the 121-line new artwork module, excludes unrelated untracked assets). Overall feature forecast remains 700–1000 lines, pending T3.

### Four inspected art rounds
All rounds used 1440×900, 1024×900 and 375×900 Chromium captures. Every capture was opened and visually inspected.
1. `/tmp/foxops-r1-{1440,1024,375}.png`: the alpha texture was accidentally interpreted as a luminance mask, hiding contours/markings/plumes and leaving only the bleed; mobile cropped the head. Corrected the mask to alpha and recomposed the portrait gesture.
2. `/tmp/foxops-r2-{1440,1024,375}.png`: solid ink restored; desktop read as a long leaping fox and framed headline. Mobile's steep rotation cut the face and pushed ribbons through the text. Split the ribbon group from anatomy, reduced rotation/scale, textured the sun and articulated paws/plumes.
3. `/tmp/foxops-r3-{1440,1024,375}.png`: face stayed in the mobile frame and sun gained dry-brush grain. Hind legs still touched the title and a top ribbon crossed the supporting line. Shifted the creature left/up, hid only that mobile ribbon, reduced cloud contrast and added tail bristles.
4. `/tmp/foxops-r4-{1440,1024,375}.png`: desktop art/type form one scroll; the mobile portrait crop leaves the headline clear, with flowing lower ribbons. Final cleanup did not change the drawing. Additional short-height capture exposed a ribbon/CTA clash at 1440×740; a height-aware type rule resolved it and was recaptured at `/tmp/foxops-short-desktop.png`.

### Observed checks
- `npm run lint`: PASS (final run, no warnings/errors).
- `npm run build`: PASS (final run, Vite 8.3.0, 26 modules; 262.20 kB JS / 81.45 kB gzip).
- `git diff --check`: PASS.
- `npx --no-install vite preview --port 4184 --strictPort`: PASS; local preview only.
- Browser: `/usr/bin/chromium --headless --no-sandbox --disable-dev-shm-usage --remote-debugging-address=127.0.0.1 --remote-debugging-port=9222 --user-data-dir=/tmp/foxops-rebel-chromium --blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4`.
- Harness: `node /tmp/foxops-rebel-cdp.mjs r1`, `r2`, `r3`, `r4`; final responsive/reduced-motion/header/menu/paint proof: `node /tmp/foxops-rebel-cdp.mjs final2 verify` (PASS); shorter viewports/CTA/menu: `node /tmp/foxops-rebel-cdp.mjs extra extra` (PASS).
- An initial combined proof run lost its CDP page attachment during navigation (`Not attached to an active page`), after responsive captures. No product failure was inferred. The harness was corrected for deterministic paint timestamps, then the full `final2 verify` run completed.
- `scrollWidth == clientWidth`: 1425/1425 at 1440; 1009/1009 at 1024; 360/360 at 375 (15px classic scrollbar). No horizontal overflow.
- Actual first animation frame: headline opacity `1`, visibility `visible`. Controlled paint captures pause real CSS animations at 0ms, 700ms and 1800ms; final drawing completes at 1650ms. Paths: `/tmp/foxops-final2-paint-{early,mid,done}.png`.
- Reduced motion: `.scroll-creature` animation name `none`; finished art visible. Captures `/tmp/foxops-final2-{1440,1024,375}.png`.
- Normal-motion offscreen check: `data-offscreen=true`, plumes/clouds animation play state `paused`.
- Header: `on-paper` at top, `on-dark` after leaving hero. Inspected `/tmp/foxops-final2-dark-{1440,1024,375}.png`. Both menu palettes inspected: `/tmp/foxops-final2-menu.png`, `/tmp/foxops-dark-menu.png`; Escape closes (`aria-expanded=false`).
- CTA hit test at 1440×740: `elementFromPoint` resolves `.hero-cta`, rect y=557.41/bottom=597.41; no illustration blocks it.
- Final shorter mobile: `/tmp/foxops-short-mobile.png` (375×812), inspected with clear headline and CTA.
- Shutdown: preview/browser stopped by actual listener PIDs from `ss`; no broad process-pattern kill.

### Honest assessment and next boundary
The result is a deliberate original scroll composition rather than an agency split template. The elongated silhouette, long neck, angular rear joints and flat tapered paws avoid round mascot anatomy. The portrait crop is intentionally strong: part of the haunch/tail lies outside the mobile viewport. It remains stylized vector ink rather than a densely modeled physical watercolor; human visual acceptance remains the parent's/client's decision.
- Pending: T3 InkTrail and its fine-pointer hint/first-stroke fade, scripted path/drying/DPR/resize/touch proof; T4 independent/parent visual check, native review/consent if due, work-unit commit identities and authorized push.
- The existing document title still says “Webs con colmillo” in `index.html`, outside this phase's allowed surfaces; the removed hero copy no longer does. Parent can authorize the metadata cleanup if desired.
- No native review, commits, remote operations or push performed by this worker.
