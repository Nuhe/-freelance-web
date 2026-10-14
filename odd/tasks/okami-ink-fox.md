# Feature: okami-ink-fox

## Objective
Replace the cartoon fox with a sumi-e / ukiyo-e inspired ink fox in the visual language of Ōkami (PS2), restoring professional credibility while keeping the fox as the brand protagonist.

## Problem / Why
User feedback (2026-10-13): the cartoon fox is too childish. It mixes a serious design with a caricature, and the page lost seriousness and professional credibility.

What caused it:
- googly round eyes
- squash/stretch hop
- "¿Hablamos?" speech bubble
- a marker-style brush font (Caveat Brush)
- a playful mascot tone borrowed from b-egg.farm

## Direction (from the user)
Ōkami style: sumi-e, traditional Japanese ink and brush painting, plus ukiyo-e woodblock prints in the manner of Hokusai, imitating a scroll or watercolor in motion.

Design decisions:
- Keep the dark brand site. The fox is painted in cream/off-white "ink" with confident tapered brush strokes, and the brand orange/vermilion is used as the sacred markings, in the way Amaterasu has red markings.
- A subtle washi paper texture, ink bleed, and a dry-brush edge.
- Hokusai-style wave and cloud motifs (seigaiha / swirl clouds) replace the cartoon orange wave.
- A red hanko seal as the signature accent.
- Expression: calm, noble, alert. No cartoon eyes or mouth.
- Motion is slow and dignified:
  - the fox is "painted" in with brush strokes on load (stroke reveal plus ink spread), in about 1.6s or less, with the headline visible immediately
  - idle: wind and ink flow in the tail and the markings, and drifting clouds or petals
  - removed: pupil tracking, the hop, and the speech bubble
- Typography: drop Caveat Brush. Keep Space Grotesk headings and DM Sans body. Make the aside line restrained and editorial (a brush calligraphy stroke as decoration, not a marker font).
- Copy: keep the headline "Webs con colmillo." unless it reads childish in the new style. Make the aside more serious.

## Scope
- The hero fox, the Casos cameo, the footer cameo, the FoxMark logo, the favicon, and the LinkedIn avatar (`design/avatar/`, untracked) all move to the ink style.
- Remove cartoon-only code: the speech bubble, the hop, and the pupil tracking in `useFoxLife`.
- Fix the open review advisories along the way:
  - media-query change subscriptions
  - the stuck hop state (it disappears with the hop)
  - cameo idle loops not pausing when off screen

## Constraints
- No new npm deps. React 19 + Vite 8 + CSS + inline SVG. Only Google Fonts for any new font.
- `prefers-reduced-motion`: the painted fox shows fully, static.
- The LCP headline is visible immediately.
- No overflow at 375px.
- The logo is legible at 30–36px and the favicon at 16px.

## Tasks
- [x] T1 — Ink fox artwork (hero) with brush stroke paths and markings (route: delegated writer). Commit a2a485f.
- [x] T2 — Hero restyle: Hokusai wave/clouds, hanko seal, typography and copy, paint-in entrance, idle ink motion; remove cartoon interactions (route: delegated, same writer). Commit e0e8f11.
- [x] T3 — Cameos, logo, and favicon in ink style (route: delegated, same writer). Commit 88a85d8.
- [x] T4 — LinkedIn avatar regenerated in ink style (route: delegated, same writer). Files in `design/avatar/` (untracked, not committed).
- [x] T5 — Verify, parent visual review, native review if due, push main (route: parent).

## Acceptance criteria
- Screenshots read as sumi-e/ukiyo-e ink art, serious and premium, with no cartoon features.
- Lint and build pass. No overflow at 1440/1024/375. Reduced motion is static.

## Checks
- Test-first exception: no test runner. Checks are lint, build, and headless Chromium captures.

## Delivery
- User preference: push directly to main after verification. The native review runs if the assessment says it is due.

## Progress / Evidence
- Branch `feat/okami-ink-fox` created from main at 0b716e4.

### Direction update (2026-10-13, from the user's Ōkami references)
- The fox is cream-filled with bold, uneven sumi contours inset inside a ragged cream rim (dark ink alone would vanish on the dark page).
- Saturated markings: crimson streaks on the face and body, spiral fur curls (shoulder, haunch, chest, cheek, tail), and crimson/orange/gold flame plumes from the back.
- Kumo clouds with spiral ends, a brushed red sun disc, and a vermilion seal reading 狐 (glyph outline from Droid Sans Fallback; no Ōkami/Capcom text or Amaterasu marking layout).
- Pose: a seated guardian (Inari) fox, alert and noble, chosen after leaping drafts read as stiff.

### Iteration log (T1)
- Leaping drafts v1–v5: rejected (tube body, noodle legs, ink lost on the dark edge).
- Seated drafts s1–s4: contours inset inside the silhouette, legs as tapered limb masses, pointed tail with a curl.
- Compositions c1–c11: brushed sun with dry streaks at the rim, scalloped kumo, Hokusai crest with claw foam, seigaiha, seal, washi grain; a jaw hook and a "lip-like" cheek mark were removed after zoomed review.

### Evidence (writer, 2026-10-13)
- `npm run lint`: pass. `npm run build`: pass (JS 307.02 kB, gzip 88.12 kB; the ink path data is about 81 kB raw).
- Each intermediate commit (a2a485f, e0e8f11) was checked in a temporary worktree: lint and build pass.
- Headless Chromium against `vite preview --port 4183`, `verify.mjs`: 18/18 checks pass.
  - No horizontal overflow at 1440, 1024 and 375, including reduced motion and after scrolling at 375.
  - The headline is visible at the first frame (opacity 1, no animation). LCP is the headline at about 224 ms.
  - The last one-shot paint-in animation ends at 1560 ms.
  - Idle loops run (tail, plumes, cloud drift, embers). They pause when off screen, for the hero and the footer cameo.
  - Reduced motion: no running animations, and the painting is complete.
  - The fox is `aria-hidden`. There is no button, no bubble and no Caveat font.
- Frame pacing during paint-in (headless software raster): average 23 ms, worst 117 ms. This is not GPU-representative.
- Captures are in `scratchpad/verify-okami/final/`:
  - the hero at 1440, 1024 and 375
  - paint-in frames at 0, 400, 800, 1200 and 1800 ms
  - reduced motion at 1440 and 375
  - the Casos and footer cameos at 1440 and 375
  - the header logo at x1 and x4
  - a favicon sheet at 16, 32 and 64 px on dark and light tabs
- Avatar: `design/avatar/foxops-avatar.svg`, the 1080 and 400 PNGs, and `preview-circle.png` (circle preview at 400, 96 and 48).
- Engram mirror: synced by the parent.
- Route: delegated writer for T1–T4 (multi-file art plus site work; mapping and writer triggers fired).

### Parent review and delivery
- Parent spot check: lint and build pass. Hero captures at 1440 and 375 inspected; they read as an ukiyo-e ink print with no cartoon features.
- RDD assessment (base 4aa8d2c, committed-only, untracked excluded): medium, 1058 changed lines, review due (slice_budget_reached).
- Native review lineage review-a3a7bff72494a49c: consent granted by the user, one reliability lens, **approved** and acknowledged. Reviewed boundary advances to this branch head.
- Advisory finding (non-blocking): R3-verify-script-uncommitted. The behavior checks live only in a scratchpad script, so there is no committed test runner.

## Next step
- Follow-ups: refine the footer cameo, check the Casos seal crop on the ear tips, check paint-in smoothness on a real mobile device.

