# Joyce Bessis Portfolio — v1.3.11 — 2026-09-29

Professional portfolio pass across all pages.

## What changed
- Home kept visually intact, but the Shami block is simplified and less repetitive.
- Home step 01 is now **Structured + unstructured intake** to reflect fields + free text.
- Projects page now separates flagship, building-next projects, and roadmap honestly.
- Experience page is redesigned around a cleaner senior-engineering narrative.
- Skills page clearly separates current capabilities from skills being built next.
- Creative Lab is simplified and polished; music remains data-driven with optional cover art per track.
- Planned project pages now use a consistent build-target / evidence / status format.
- Shami is redesigned as a product/engineering case study: customer flow, AI layer, operations dashboard, architecture, optional AI capabilities and engineering rationale.
- Optional Shami future extensions are explicitly labeled as **not part of the current scope**.

## Add a song
1. Put the audio file in `assets/audio/`.
2. Put the cover image in `assets/covers/`.
3. Add one item to `music-data.js`:

```js
{
  title: "Two Shadows",
  file: "assets/audio/two-shadows.mp3",
  cover: "assets/covers/two-shadows.jpg",
  description: "Original composition · AI-assisted production",
  tags: ["Songwriting", "AI Music"]
}
```

The Creative Lab page renders the cover and audio player automatically.

## Language strategy
English only while the site is still evolving. French and Hebrew should be added once the English information architecture and copy are stable.

## Publishing
The site remains `noindex` while under review.


## v1.3.11 — restrained professional pass
- Reduced headline scale across the entire site.
- Reduced decorative glow, borders, shadows and card density.
- Tightened navigation, spacing and typography for a more senior / editorial engineering portfolio feel.
- Kept the site structure and content intact.
- Shami remains the flagship case study, with the dashboard and optional AI capabilities retained.


## v1.3.13 — 2026-09-30
- Reworked only the Shami operations dashboard into a portfolio-grade multi-case cockpit.
- Added overview KPIs, active incidents table, completeness, document counts, review status, ownership and a priority queue.
- All other pages and sections remain unchanged from v1.3.11.


## v1.3.13 — Shami simplification
- Simplified Shami to the essentials: one conversation preview, three-step workflow, one operations dashboard and three concise proof cards.
- Added the conversation step: “What is your name?” after “Now I will collect your details.”
- Removed the overlapping case-draft card and the longer secondary sections.
- Kept the rest of the portfolio unchanged.
