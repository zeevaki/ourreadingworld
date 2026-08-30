# Decision Log: High-Frequency Words Pillar

**Date:** 2026-08-30
**Feature:** A sixth reading pillar, High-Frequency Words, added to OurReadingWorld — one real unit built for Grade 2.

This log exists so the reasoning survives past the moment it was built. Read this before an interview where this feature comes up.

---

## The gap

i-Ready's reading diagnostic covers 5 domains: Phonological Awareness, Phonics, High-Frequency Words, Vocabulary, and Comprehension. OurReadingWorld had 5 pillars too, but a different 5 — Phonemic Awareness, Phonics, Fluency, Vocabulary, Comprehension — with no equivalent to High-Frequency Words at all. i-Ready treats sight-word recognition as its own domain, separate from phonics, because it's genuinely different work: phonics is sounding words out, sight words are memorized as whole shapes because many of them (would, could, which) don't sound out reliably.

## Decision 1 — Extend the `ReadingPillar` union type, and let TypeScript force the rest

Adding `"high-frequency-words"` to the type was one line. But `eslScaffolds.ts` is typed as `Record<ReadingPillar, EslScaffold>` — an exhaustive map — so the compiler refused to build until every pillar had a real entry. That's a deliberate advantage of typing it this way: it's structurally impossible to add a pillar and forget its ESL scaffold, the way it would be easy to forget a plain content file.

**Why this belongs in an interview answer:** this is a case where the type system did real product-quality enforcement, not just bug-prevention — it guaranteed a whole class of "shipped a new section without its accessibility/ESL support" mistakes couldn't happen silently.

## Decision 2 — One real unit, Grade 2, not five thin ones

Same discipline as every other build this week: prove the pillar works on real, fully-built content in one place before rolling it out. Grade 2 specifically because it's the grade she's directly teaching — the content (because, could, their, would, which, were) is drawn from real Dolch/Fry 2nd-grade sight-word lists, not invented examples.

**Known, explicit gap:** Grades 1, 3, 4, and 5 have no High-Frequency Words unit yet. This is a content-authoring task, not a code task — the pillar and its UI are fully generic and grade-agnostic already (see Decision 4).

## Decision 3 — The ESL scaffold here is a genuinely different insight, not a reused one

Every other pillar's scaffold leans on some form of cross-linguistic bridging — cognates, contrastive phonics, sound comparisons. High-frequency words are the wrong place for that: words like "would" and "which" often have no clean one-word Spanish or Urdu equivalent at all. Translating them one-to-one can create confusion rather than remove it. The scaffold written for this pillar says exactly that, and redirects to what actually works for sight words — whole-word recognition through repetition in real sentences, not translation.

**Why this belongs in an interview answer:** it demonstrates the scaffold strategy wasn't templated and copy-pasted across pillars — each one reflects what's actually true about that specific skill.

## Decision 4 — No new UI was built at all

The existing unit page (`app/student/[grade]/[unit]/page.tsx`) already renders any unit generically off its `pillar` and `pillarLabel` fields — it has no pillar-specific logic anywhere. Same for the grade overview page, which just needed a color and emoji added to two lookup maps. This whole feature is 95% content authoring inside an architecture that was already built to support a 6th pillar without knowing it yet — a sign the earlier architecture decisions were sound.

## What's still open (for a future session)

- Units for Grades 1, 3, 4, 5.
- This pillar is **not yet wired into the Daily Lesson page** (`app/daily/[grade]/page.tsx`) — that page has its own hardcoded 5-block flow with time allocations. Adding a 6th block means deciding where it fits in the 55-minute day and how many minutes to give it. Deliberately deferred as a separate decision, not part of this build.
- Not tiered by proficiency level the way Vocabulary and Comprehension are (see `proficiency-tiered-scaffolds.md`) — could be a natural next extension given sight-word instruction genuinely does vary by proficiency level (heavier repetition/modeling for Emerging, faster exposure-based practice for Bridging).

## Verification

Type-checked clean (`tsc --noEmit`). Verified live with Playwright against the running dev server: confirmed the new pillar heading renders (in the active language), navigated into the unit, confirmed the Vocabulary tab renders all 6 words with translations and audio buttons, confirmed the Lesson and TEKS tabs render, confirmed the quiz's submit button correctly enables after both questions are answered. Zero console/page errors.
