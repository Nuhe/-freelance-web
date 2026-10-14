# Feature: rebel-scroll-hero

**Status:** implementation and independent verification complete; source pushed to `main` through `d8b40b3`. Jenkins/live-site deployment is not verified. This passive closure document awaits the parent's separate commit/push.

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
- [x] T1 — Slender full-stage fox artwork whose lines frame the text (route: delegated writer; implemented and committed in 6cf2899; native review acknowledged).
- [x] T2 — Hero rebuild: washi paper surface, integrated typography and copy, transition to the dark site (route: delegated, same writer; implemented and committed in 6cf2899; native review acknowledged).
- [x] T3 — Ink brush trail canvas following the mouse (route: delegated writer; committed as `d8b40b3`; medium assessment `review_due=false`, `under_budget`).
- [x] T4 — Independent verification and parent visual readback passed; applicable native assessment recorded; source push to `main` succeeded (route: parent).

## Acceptance criteria
- No split layout. The fox spans the stage and the text lives inside its lines.
- No "Webs con colmillo".
- Moving the mouse paints a fading black ink stroke.
- Lint and build pass, there is no overflow, and reduced motion is respected.

## Checks
- Test-first exception: there is no test runner. Checks are lint, build and headless Chromium captures, including a scripted mouse path for the trail.

## Delivery
- Source pushed directly to `main` after verification, using the explicit `exception-ok` delivery strategy. The final passive document is a separate parent-owned commit/push; deployment is not inferred from Git push.

## Progress / Evidence
- Branch `feat/rebel-scroll-hero` created from main at 3c98578.

## Execution plan (historical T1/T2 candidate)
- Route: delegated direct; one bounded writer owns `src/App.jsx`, `src/index.css`, `src/components/FoxInk.jsx`, new `src/components/scrollArt.js`, README and this document. Preparation and multiple non-trivial files trigger delegation.
- Exploration: the existing hero is a two-column grid; the header is absolute and dark. `FoxInkHead.jsx` imports `FOX` and `ENSO` with a fixed crop from `inkArt.js`; preserve those data and the shared ink filters/palette.
- T1/T2 are a coupled artwork/composition work unit; original full-stage fox and editorial negative space must be judged together. T3 remains a separate pointer-trail work unit.
- Forecast: 700–1000 authored changed lines overall; the ~400-line guideline is advisory and will not cause code-golf or artificial splitting.
- Delivery: `exception-ok`, reflecting the explicit direct-to-main/no-PR handoff; no chain will be created. Parent owns review, commits and authorized delivery.
- Test-first exception: package scripts expose lint/build only, with no deterministic test runner. No RED/GREEN claim; use lint, build and native Chromium screenshot inspection.
- Reference inspection: all three supplied JPGs inspected; anatomy, spiral curls, broad dry contours, crimson/orange/gold plumes inform an original fox, not a traced game character.
- Rollback boundary: hero/header changes in App/CSS, FoxInk + scrollArt and their README description; legacy cameo/logo/footer remain untouched.
- T1/T2 proof and parent visual readback completed. The last acknowledged native review boundary remains `6cf2899`; T3/T4 completion is recorded in Final closure below.

## T1/T2 candidate evidence
- Implemented: original airborne fox, pointed ears/slit eye, tapered brush contours from Bezier normals, crimson curls and markings, warm plumes, flowing ribbons, sun, kumo clouds and 狐 seal. Light fibrous paper, integrated serif Spanish headline/copy, single CTA, deckle exit, fixed paper/dark header and mobile menu.
- Preserved: `inkArt.js`, shared toolkit/palette, logo, favicon, Cases cameo, resting footer and all lower sections. Removed dead split-hero underline, entrance, old layer and button-specific CSS. No dependencies added.
- Candidate files: `src/App.jsx`, `src/index.css`, `src/components/FoxInk.jsx`, `src/components/scrollArt.js`, `README.md`, this document. Committed by parent as `6cf2899`; native medium `review-reliability` returned `findings=[]`, exact acknowledgement succeeded and burned authority for lineage `review-af1e883721255f60`. Reviewed boundary is now `6cf2899`.
- Actual authored source/docs delta before this task-document update: approximately 460 lines (additions + deletions; includes the 121-line new artwork module, excludes unrelated untracked assets). The original 700–1000-line forecast was confirmed by the observed 876-line running count; see Final closure.

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
- Parent visual readback, T3 commit/assessment, independent verification and source push are complete; details are recorded in Final closure below.
- Authorized title/description cleanup implemented in `index.html`: title and Open Graph title now say “FoxOps — Diseño y desarrollo web hecho a mano”; descriptions consistently describe handmade web design. Canonical URL, favicon and other metadata preserved.
- No native review, commits, remote operations or push performed by this worker.

## T3 execution plan (historical)
- Reconciled actual task document with full Engram observation #372; both held the same T1/T2 candidate evidence. Applied parent's observed commit/acknowledgement, without inferring blanket future consent.
- Route: delegated direct, same bounded writer; canvas input/render/lifecycle plus App/CSS/README/metadata require multiple non-trivial files. No artwork geometry or lower-page edits.
- Implementation: one dependency-free InkTrail effect owns passive input, bounded retained quadratic brush segments, speed-sensitive tapered width, textured bristles, brief pooling, age-based drying/ghost, DPR/resize and visibility lifecycle.
- Test-first exception remains: no deterministic runner. Browser baseline/behavior and cleanup are measured externally through CDP, without product test instrumentation or invented RED/GREEN.
- Rollback boundary: InkTrail component, its hero import/hint/CSS, README paragraph and narrowly changed title/description. Parent completed the candidate commit/assessment and authorized source push.

## T3 verified candidate
- Implemented dependency-free `InkTrail.jsx` (210 lines), hero canvas and first-stroke hint, narrow metadata cleanup and README documentation. Artwork geometry and unrelated lower-page sources are unchanged.
- Geometry: retained quadratic midpoints rendered as tapered normal-offset polygons, seven separated bristles with speed-dependent gaps, inverse-speed width 2.8–28px, a brief modest pool after pausing, and translucent overlapping ink.
- Lifecycle: at most 1400 retained segments; time-based exponential drying toward a faint ghost for 8s; no RAF while empty or dry; offscreen/hidden state pauses RAF and drying time; resize/DPR changes clear the sheet; DPR capped at 2; all listeners/observers/RAF cleaned on unmount.
- During browser iteration, a short idle reset caused visible gaps under throttled native input. Fixed continuity: pauses taper the old stroke, then resume at the existing endpoint. Re-ran required proof after the fix.
- No deterministic runner; observed baseline had zero canvas and no hint before implementation. This is a browser baseline, not a fabricated RED/GREEN cycle.
- Final required commands: `npm run lint` PASS; `npm run build` PASS (Vite 8.3.0, 27 modules, JS 265.94kB / 83.25kB gzip); `git diff --check` PASS.
- Approximately 240 authored source/README/metadata changed lines for T3 before task-document evidence; no new dependencies, no worker commit, no remote operations and no native review invocation.

### External browser proof
Harness `/tmp/foxops-trail-cdp.mjs` instruments browser APIs externally, not product code. Production preview uses the same Chromium command/flags and port 4184 as T1/T2. Cleanup alone uses an additional local Vite server on 4185 to import the real component and mount/unmount it independently.

| Command / scenario | Observed result |
| --- | --- |
| `node /tmp/foxops-trail-cdp.mjs trail` | Native `Input.dispatchMouseEvent` S-curve, pause and fast flick; pooling/immediate/+3s/+8s images captured and inspected. |
| Initial idle | Canvas alpha sum=0; requested/fired/pending RAF=0/0/0. |
| Passive listeners | Hero pointermove/pointerleave/pointercancel each registered with `passive: true`. |
| Drying | Immediate alpha sum 1,887,353 / max 189; +3s 555,795 / max 57; +8s 218,978 / max 8 (about 12% total alpha, faint ghost). |
| Eventual stop | At +8s RAF requested/fired/pending=147/147/0; after another 400ms alpha sum and clear count unchanged. |
| Hint / CTA | First-stroke hint opacity=0; CTA centre hit resolves `.hero-cta`, never canvas. |
| `node /tmp/foxops-trail-cdp.mjs widths` | Alpha cross-sections measured slow width 24px and rapid-input width 4px. Slow path used native input; rapid width probe dispatched same mouse PointerEvents in one browser task to avoid CDP transport pacing. |
| `node /tmp/foxops-trail-cdp.mjs lifecycle` | Touch, pen, pause/resume, resize/DPR and reduced-motion proof passed. |
| Touch | Pointer event accepted, `defaultPrevented=false`, alpha and RAF remained zero. Native touch swipe scrolled page to y=385 without drawing ink. |
| Pen | Synthetic `pointerType=pen` produced visible alpha (sum 97,645); physical stylus hardware was not available. |
| Offscreen | Alpha sum 33,047 and clear count 22 unchanged across 600ms offscreen; pending RAF=0. Returning resumed drawing/decay with pending RAF=1. |
| Resize / DPR cap | Emulated DPR3 with CSS canvas width1009 produced backing width2018 (2×), cleared alpha and pending RAF=0. |
| Reduced motion | No ink/RAF before user input; user-drawn ink remained allowed (alpha sum712,955). No automatic decorative strokes. |
| `node /tmp/foxops-trail-cdp.mjs capabilities` | Fine pointer + hover: hint block. Touch emulation: coarse=true, fine=false, hover=false, hint none. |
| `node /tmp/foxops-trail-cdp.mjs unmount` | Mounted real component externally: five own listeners, two observers, active RAF. Actual React root unmount: zero listeners, both observers disconnected, canvas removed, pending RAF0; subsequent pointer event requested no frames. |
| `node /tmp/foxops-rebel-cdp.mjs t3 art` | Final normal-motion captures at1440/1024/375; no overflow, header readable, hint subtle. |
| `node /tmp/foxops-rebel-cdp.mjs t3final verify` | Responsive/reduced-motion/header/menu/first-frame/paint proof repeated; scrollWidth==clientWidth at all widths. Overlay-scrollbar emulation reported1440/1440,1024/1024,375/375. Headline first frame opacity1/visible; static finished art under reduce; offscreen idle loops paused. |

### Inspected captures and verification limits
- Parent recommended: `/tmp/foxops-trail-immediate.png`, `/tmp/foxops-trail-3s.png`, `/tmp/foxops-trail-8s.png`, `/tmp/foxops-trail-coarse-mobile.png`.
- Additional trail proof: `/tmp/foxops-trail-pooling.png`, `/tmp/foxops-trail-widths.png`, `/tmp/foxops-trail-pen.png`, `/tmp/foxops-trail-reduced.png`.
- Final normal motion: `/tmp/foxops-t3-{1440,1024,375}.png`; reduced motion and header/menu: `/tmp/foxops-t3final-{1440,1024,375}.png`, `/tmp/foxops-t3final-dark-{1440,1024,375}.png`, `/tmp/foxops-t3final-menu.png`; paint stages `/tmp/foxops-t3final-paint-{early,mid,done}.png`. Every generated screenshot was opened and inspected.
- Proof logs: `/tmp/foxops-trail-proof.log`, `/tmp/foxops-trail-widths.log`, `/tmp/foxops-trail-lifecycle.log`, `/tmp/foxops-trail-capabilities.log`, `/tmp/foxops-trail-unmount.log`.
- Pooling is intentionally understated and the dry ghost remains static until more ink or resize. Input widths/lifecycle are measured, but no physical stylus or broad cross-browser/hardware performance claim is made. Headless CDP pacing is not real pointer hardware; the rapid-width probe isolates that limitation.
- All local preview/dev/browser listeners stopped by actual PIDs from `ss`, with no broad process-pattern kill. Unrelated untracked assets and handoff preserved.
- T3/T4 are closed with the observed evidence below. First-candidate consent was not reused; T3 was assessed natively as medium/under-budget, with no review due.

## Final closure

| Boundary | Observed evidence |
| --- | --- |
| T1/T2 — `6cf2899` | Original fox/washi composition committed. Medium native `review-reliability` returned `findings=[]`; exact acknowledgement burned lineage `review-af1e883721255f60`. |
| T3 — `d8b40b3` | Ink trail, hint and metadata committed. Native assessment against `6cf2899`: medium, 303 authored lines, `review_due=false`, reason `under_budget`; no second review or approval is claimed. |
| T4 independent verification | `hero_final_verify` checked exact commit `d8b40b3`: `npm run lint`, `npm run build`, `git diff --check` and all responsive/trail/lifecycle/cleanup CDP checks PASS. Screenshots inspected; verifier processes stopped and source unchanged. Parent inspected immediate/+3s/+8s/coarse-mobile trail captures and repeated `git diff --check` successfully. |
| Source delivery | Parent ran `git fetch origin && git merge-base --is-ancestor origin/main HEAD && git push origin HEAD:main`: exit0, `3c98578..d8b40b3 HEAD -> main`. This confirms source delivery, not deployment. |
| Running authored count | 573 + 303 = **876** additions/deletions including task-document changes; source/docs approximately **708**. Strategy remains `exception-ok`, explicit direct-to-main/no-PR delivery. |

Independent responsive captures: `/tmp/foxops-independent-{1440,1024,375}.png`, with corresponding menu/dark/paint captures under `/tmp/foxops-independent-`; trail captures remain at the paths listed above.

**Verification limits:** physical stylus unavailable (synthetic pen only); no broad cross-browser/hardware claim; Jenkins and the live site were not checked. This final passive documentation update needs only structural readback and `git diff --check`, not another source lint/build cycle. Its separate commit/push remains parent-owned.
