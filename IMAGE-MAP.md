# IMAGE MAP — Altun Atelier
*How each of the 20 images is used and why.*

## Renaming convention applied

```
hero.png                    ← ardnocz_..._neck_...png   (model wearing tennis necklace)
collection-1-collar.png     ← 16.png                    (ornate gold collar, dark)
collection-2-solitaire.png  ← 17.png                    (diamond solitaire)
collection-3-bracelet.png   ← 3.png                     (woven gold bracelet)
collection-4-pendant.png    ← 2.png                     (gold pendant on marble)
collection-5-band.png       ← 8.png                     (gold band on dark fabric)
collection-6-diamond.png    ← 42.png                    (large diamond bokeh)
craft-hands.png             ← 15.png                    (hands holding chain)
craft-forge.png             ← 4.png                     (molten gold sparks)
bespoke-sketches.png        ← 5.png                     (ring on design sketches)
lifestyle-couple.png        ← 6.png                     (candlelit couple)
lifestyle-earring.png       ← 10.png                    (smiling woman, earring)
lifestyle-band.png          ← 18.png                    (hand with band, face)
trust-boutique.png          ← 11.png                    (boutique interior)
trust-service.png           ← 12.png                    (couple at counter)
trust-packaging.png         ← 9.png                     (jewelry box with logo)
gallery-1.png               ← 7.png                     (gem flatlay on marble)
gallery-2.png               ← 19.png                    (rings + pearls flatlay)
gallery-3.png               ← 20.png                    (bracelets flatlay)
texture-waves.png           ← 14.png                    (gold wave texture, decorative)
```

A copy of each image already lives at `zlatnictvo-site/images/<name>.png`.
The original folder `Obrázky/` is untouched.

---

## Placement & reasoning

### 1 · Hero — `hero.png`
Full-bleed, 100svh, with gradient overlay on the left for legibility.
**Why:** the only image in the set that shows a *person wearing the brand*. Editorial, golden-hour, soft skin texture — sets the entire emotional register of the site in 1 second.
Pair: subtle film-grain over the whole page + animated gold-glow blob top-right. Image gently zooms (1.05 → 1.12) over 14s.

### 2 · Promise — *no images*
Pure typography. Putting images here would dilute the trust copy.

### 3 · Collections (asymmetric grid)
- **Card 1 (large, 2×2):** `collection-1-collar.png` — anchors the grid as the "statement piece"
- **Cards 2–6 (square):** solitaire, bracelet, pendant, band, diamond
**Why:** the asymmetric "1 large + 5 small" pattern is the standard luxury-jewelry grid (Cartier, Bvlgari) — guides the eye to a single hero, then lets it browse. Far more elegant than a uniform 3×2 grid.
Each card has a slow 1.2s zoom on hover and a diagonal gold shimmer sweep.

### 4 · Story / Craftsmanship
- **Foreground:** `craft-hands.png` — hands holding a gold chain in sunlight
- **Background:** `craft-forge.png` at 25% opacity, fading to onyx via two stacked gradients
**Why:** the human moment goes foreground (you connect to people, not sparks); the forge becomes mood. Together they tell "made by hand, with fire" without a single word.
Two gold-line corner brackets frame the hand image — a luxury layout cliché that earns its keep.

### 5 · Custom Orders
- **Aside:** `bespoke-sketches.png` (ring on sketches) + `lifestyle-band.png` (hand with band) in a 2-column staggered grid
**Why:** sketches = literal proof of "we draw before we make"; the worn band = proof of the *outcome*. Process + result, side by side.

### 6 · Trust — `trust-boutique` / `trust-service` / `trust-packaging`
3-column grid showing the three credibility moments: **the place** → **the experience** → **the result**.
**Why:** in Turkey, walk-in trust matters as much as Instagram trust. Showing a real boutique closes the "is this a legit shop?" gap.

### 7 · Gallery
Mixed 2-column / 4-column masonry: flatlays (`gallery-1/2/3`) + lifestyle (`lifestyle-earring`, `lifestyle-band`) + product (`collection-3-bracelet`, `collection-6-diamond`).
**Why:** flatlays alone feel commercial; lifestyle alone feels editorial; product alone feels catalog. Mixing all three reads as an *Instagram feed*, which is exactly the visual language Turkish luxury buyers expect.

### 8 · Emotional banner — `lifestyle-couple.png`
80vh full-bleed with the testimonial quote centered.
**Why:** placing the testimonial *over* a candlelit couple converts the quote from "social proof" to "imagine this is you." Massive emotional lift right before the contact section.

### 9 · Contact + Footer — *no images*
After the emotional banner, the eye needs rest before the CTA. Visual silence here is the point.

---

## Why three images aren't used directly in copy
- `texture-waves.png` (14): too literal/abstract; reserved as an optional `<section>` divider if the user wants extra decoration.
- *(All 20 are wired in — the gallery and trust sections were sized to absorb the full set.)*

---

## Performance notes
- Hero is `<link rel="preload">` + `fetchpriority="high"`, others use `loading="lazy"`.
- All images sit in `/images/` next to `index.html` — works on any static host with no path mangling.
- PNGs are 1–1.7 MB each. Before production launch:
  ```
  # one-liner with sharp-cli or squoosh
  npx @squoosh/cli --webp '{"quality":78}' images/*.png
  ```
  Then update `<img src>` from `.png` → `.webp` (or use `<picture>`). Expect ~70% size reduction with no visible quality loss. Hero specifically benefits from `1920w / 1280w / 800w` srcset.
- Aspect ratios are pinned via Tailwind utilities (`aspect-[4/5]`, `aspect-square`, `aspect-[4/3]`) — prevents CLS during load.

---

## Re-shoot priorities if budget allows
1. **Hero alternative crop** — 21:9 banner version of the same shot for desktop, plus a 4:5 crop for mobile, served via `<picture>`.
2. **One vertical workshop photo** of the goldsmith at work to replace `craft-hands.png` as the story hero (more storytelling, less stock-feeling).
3. **One overhead shot** of the workshop bench with tools — this is the single missing register in the current image set.
