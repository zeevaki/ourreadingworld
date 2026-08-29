# Decision Log: Proficiency-Tiered ESL Scaffolds

**Date:** 2026-08-29
**Feature:** Tiering the Daily Lesson page's ESL scaffold guidance by student English-proficiency level, instead of one fixed scaffold per pillar.

This log exists for one purpose: so the reasoning behind this feature survives past the moment it was built. Read this before a PM interview where this feature comes up — it's written to be the answer, not just a summary of what the code does.

---

## The problem

OurReadingWorld's Daily Lesson page had one ESL scaffold per reading pillar (phonemic awareness, phonics, fluency, vocabulary, comprehension), shown identically to every teacher regardless of which students they're currently working with. In practice, a single classroom has students at very different English proficiency levels in the same hour — a teacher differentiating through small-group rotation needs different scaffolding advice depending on which group she's sitting with, not one generic strategy for everyone.

## Decision 1 — Simplify WIDA's 6 proficiency levels to 3 practical tiers (Emerging / Developing / Bridging)

WIDA's official framework defines 6 levels of English proficiency, and its "Can-Do Descriptors" are the real-world tool teachers use to match instruction to a student's level. Building 6 full tiers of scaffold content for a first version would have been over-engineering — most classroom-practical frameworks already collapse WIDA's 6 levels into 3 usable bands for exactly this reason.

**Why this belongs in an interview answer:** this is a product-scoping decision, not a technical one — deliberately trading precision for usability, and being able to say *why* (nobody uses all 6 levels moment-to-moment in a live classroom) is a stronger signal than blindly cloning the source framework's full complexity.

## Decision 2 — Scope to 2 of 5 pillars first (Vocabulary, Comprehension), not all 5

Same discipline used in the OurMathWorld adaptive-difficulty case study: prove the mechanism on real, fully-built content rather than thinly covering everything. Vocabulary and Comprehension had the richest existing scaffold text to build outward from. The other three pillars (phonemic awareness, phonics, fluency) currently repeat their original single-tier text across all three tiers — this is a known, explicit content-authoring gap, not a bug. See `data/eslScaffolds.ts` for the inline comment marking this.

**Why this belongs in an interview answer:** distinguishing "the mechanism is built and works" from "the content is fully rolled out" is exactly the kind of scope precision a PM needs — the same distinction came up when comparing this app's language coverage (English/Spanish/Urdu) against expanding to more languages: the code is usually the cheap part, the content is the expensive, ongoing part.

## Decision 3 — Manual tier selection by the teacher, not automatic detection

There's no student login or diagnostic data system in this app — it's a stateless, public site. Rather than fake a personalization system it can't actually support, the tier is a simple toggle the teacher sets herself, based on which small group she's about to sit with in her station rotation.

**Why this belongs in an interview answer:** this is a deliberate "don't build what the data can't support" call. It also directly mirrors real classroom workflow discussed alongside this build — a teacher already knows in the moment which group she's working with; the tool should match that lived reality, not simulate a diagnostic engine it doesn't have data for.

## Decision 4 — The existing scaffold text becomes the "Developing" (middle) tier

No prior work was thrown away. "Emerging" (heavier support — e.g., leading with direct translation before any cognate reasoning) and "Bridging" (lighter support — e.g., prompting the student to find the cognate connection themselves) were written as the new tiers above and below the existing text.

---

## What's still open (for a future session)

- Phonemic awareness, phonics, and fluency pillars still need real tiered content — currently placeholder-duplicated.
- No verification yet on whether 3 tiers is the right number for teachers actually using this day to day — that would need real classroom feedback, not just design reasoning.
- The tier selector is global to the whole Daily Lesson page (one setting for all 5 pillars at once). Worth considering later whether a teacher would ever want a different tier per pillar in the same sitting.

## Verification

Type-checked clean (`tsc --noEmit`). Verified live with an automated browser test (Playwright): toggled all three tiers on `/daily/2`, confirmed the scaffold text actually changes for the Vocabulary and Comprehension sections and reverts correctly, zero console errors.
