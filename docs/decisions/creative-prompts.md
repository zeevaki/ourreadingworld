# Decision Log: Creative Response Prompts (the "A" in STEAM)

**Date:** 2026-08-30
**Feature:** An optional creative-response prompt at the end of a unit's lesson — one real example built, Grade 2 Comprehension unit "Story Sequencing" (TEKS 2.9D).

Companion build to the same feature in OurMathWorld — see that repo's `docs/decisions/creative-prompts.md` for the shared reasoning (written prompt vs. in-app canvas, why one unit not a system-wide rollout, why appended to the Lesson tab rather than a new tab). This log covers what's specific to the reading side.

## Why this unit specifically

"Story Sequencing" teaches beginning/middle/end structure. The creative prompt — write your own short story using the same first/then/in the end signal words the lesson already teaches — isn't a bolted-on art activity, it's the same skill practiced through creation instead of only analysis. Genuinely tighter fit than a generic "draw a picture" prompt would have been.

## Note: no artist-style pairing here

Unlike the math side's Picasso/shapes pairing, reading doesn't have an equally natural "artist style" hook for this unit — sequencing isn't a visual-art concept the way geometry is. Rather than force one, this prompt stayed a straightforward writing prompt. An illustration-style pairing (matching a story's mood to a visual style) is a more natural fit for a different unit — worth exploring in a future session, not forced here.

## Verification

Type-checked clean. Verified live via Playwright: navigated to the Story Sequencing unit, confirmed the Lesson tab renders the "Write Your Own Story" / "Escribe tu Propio Cuento" box with both English and Spanish text, speaker button working, zero console errors, screenshot confirms visual match to the site's design system.
