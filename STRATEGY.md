# ALTUN ATELIER — Website Strategy & Brief
*Premium presentation site · Turkish goldsmith · TR primary / EN secondary*

> Working name **"Altun Atelier"** — *altun* is the archaic Turkic word for *gold*.
> Swap to client's real brand in `index.html` (`.brand-word`) and translation dict.

---

## 1 · Website Strategy

**Positioning.** "Three-generation Istanbul atelier where every piece is an heirloom."
We do **not** compete with chain jewelers on price; we compete on *meaning, craft, trust*.

**Conversion model — WhatsApp-first funnel.**
Turkish luxury buyers do not check out online. They **DM**, **call**, or **visit**.
The whole site funnels into one of four channels:

```
   Visitor lands → Builds trust → Falls in love with a piece → Initiates conversation
                                                                  │
                                            ┌─────────────────────┼─────────────────────┐
                                            ▼                     ▼                     ▼
                                       WhatsApp (primary)     Phone call           Atelier visit
```

Every CTA on the site routes to WhatsApp deep-links with **pre-filled context** (which piece, which interest, in which language). This drops inquiry friction to a single tap.

**Trust stack.**
1. Heritage line ("Since 1978, three generations") — the strongest social proof in Turkish luxury.
2. Material transparency ("22–24K, certificate per piece") — directly answers buyer #1 fear.
3. Atelier visuals (master craftsman frame, gold tile motif, behind-the-scenes gallery).
4. Testimonial in serif italic — handwritten feel, single quote = more impact than five.
5. Bazaar location ("Kalpakçılar Cd.") = instant credibility for Turkish audience.

---

## 2 · Sitemap

Single-page (presentation-style) with anchor sections. Each is also a deep-linkable URL fragment.

```
/  (index.html)
├── #home          Hero + brand promise
├── #promise       4-card value pillars
├── #collections   Drag/wheel carousel — featured pieces
├── #story         About / heritage / numbers
├── #custom        Bespoke 4-step process
├── #gallery       Masonry portfolio
├── #testimonial   Single client quote
└── #contact       4-channel + form (form → WhatsApp)
```

**Future expansion ready** — `/koleksiyon/[slug]` detail pages and `/blog/[slug]` for SEO can be added without redesign.

---

## 3 · Homepage Wireframe (section-by-section)

| # | Section          | Goal                          | Key elements                                                                 | CTA                       |
|---|------------------|-------------------------------|------------------------------------------------------------------------------|---------------------------|
| 1 | **Hero**         | Hook in 3s                    | 2-col: serif headline left, animated gold-tile motif right, trust strip      | "Bespoke" + "Explore →"   |
| 2 | **Promise**      | Earn trust before pitch       | 4-card 1px-line grid: gold, hand, custom, lifetime                           | —                         |
| 3 | **Collections**  | Show product, invite inquiry  | Draggable horizontal carousel, 6 cards, each links to WhatsApp ask           | "Ask on WhatsApp →"       |
| 4 | **Story**        | Emotional anchor              | Split layout: monogram visual frame + 3 paragraphs + 3 stat counters         | "Visit our atelier"       |
| 5 | **Bespoke**      | Convert "thinking" buyers     | 4-step ordered process with serif numerals                                   | "Start a bespoke chat"    |
| 6 | **Gallery**      | Visual proof                  | 4-col masonry tiles (real photos go here)                                    | Instagram link            |
| 7 | **Testimonial**  | Social proof                  | One large italic quote, named client                                         | —                         |
| 8 | **Contact**      | Convert                       | 4-channel grid (WhatsApp / Phone / IG / Map) + minimal form → WhatsApp      | "Send via WhatsApp"       |
| 9 | **Footer**       | Re-anchor                     | Brand line, nav, KVKK note                                                   | —                         |

A **floating WhatsApp FAB** is visible on every section.

---

## 4 · Visual Style Guide

### Palette
| Token          | Hex         | Use                                   |
|----------------|-------------|---------------------------------------|
| `--bg`         | `#0a0908`   | Page background — onyx                |
| `--surface`    | `#15110d`   | Cards, hover states                   |
| `--gold`       | `#c9a961`   | Accent, kicker, link, gold rule       |
| `--gold-hi`    | `#e8c87a`   | Hover, shimmer highlights             |
| `--gold-grad`  | `linear-gradient(135deg,#8a6f3a → #c9a961 → #f3dca0 → #c9a961 → #8a6f3a)` | Logo, button, monogram |
| `--ink`        | `#f4ede4`   | Primary text                          |
| `--ink-3`      | `#8a8278`   | Body text                             |

### Typography
- **Display:** Cormorant Garamond, 400/italic — fluid `clamp(2.6rem, 6.5vw, 5.5rem)`
- **Body:** Inter, 300/400 — 16px / 1.6 line-height
- Italic spans inside headlines receive the **gold gradient text-clip** — single signature move.

### Micro-rules
- **Spacing scale:** 0.5 / 1 / 1.6 / 2.4 / 3 / 5 / 7rem (no arbitrary values)
- **Borders:** always `1px solid var(--line)` (gold @ 16% opacity) — never default grey
- **Radii:** 2px on cards, 50% on icon buttons — no rounded-corners cliché
- **Motion:** `cubic-bezier(.2,.8,.2,1)`, durations 0.35–0.9s, hover lifts 2–6px
- **Imagery:** dark, warm-lit photographs only; avoid white backgrounds

### Iconography
Unicode ornaments (◈ ✦ ❖ ◇ ◉ ✺) as gold-gradient placeholders. Replace with real product photos in production.

---

## 5 · Copy — Turkish (final)

### Hero
- **Eyebrow:** Üç Kuşaklık Kuyumculuk · İstanbul · 1978
- **Headline:** Bir el. Bir kalp. *Bir ömür* ışıltı.
- **Sub:** 24 ayar gelenek, modern tasarım. Altun Atelier'de her parça, ustanın elinden geçer ve sahibinin hikâyesini taşır.
- **CTA primary:** Özel Tasarım Talebi
- **CTA secondary:** Koleksiyonu Keşfet →
- **Trust strip:** 22–24 Ayar Altın · Atölyede El Yapımı · Ömür Boyu Bakım · Sertifikalı Taşlar

### Promise
**Söz Verdiklerimiz** — *Mücevher değil, miras yaratıyoruz.*
1. **Saf Altın, Kanıtlı.** Her parça için ayar belgesi. Ne fazlası, ne eksiği.
2. **El İşçiliği.** Çekiç, eğe, ısı. Geleneksel teknik, modern tasarım — fabrika değil, atölye.
3. **Size Özel.** Bir taslak, bir görüşme, sizin parmağınıza. Tek bir kişi için tek bir parça.
4. **Ömür Boyu.** Bakım, cilalama, ölçü değişimi. Aldığınız parça yıllarca ilk günkü gibi kalır.

### Collections
**İmza Parçalar** — Sürükleyin, keşfedin. Beğendiğiniz parçayı WhatsApp üzerinden sorun.
1. *Solitaire İstanbul* — Pırlanta Yüzük · 18K
2. *Boğaz Kolyesi* — Altın Kolye · 22K
3. *Sarmaş Bilezik* — El Örme Bilezik · 22K
4. *Lale Küpe* — Pırlanta Küpe · 18K
5. *Hilal Alyans* — Çift Alyans · 14K
6. *Aile Yadigârı* — Özel Tasarım · Talebe Özel

### Story
**Üç kuşak. *Tek bir tutku.***
> Dedem Mehmet Usta'nın 1978'de Kapalıçarşı'nın daracık bir köşesinde açtığı atölye, bugün babamın ve benim ellerimde nefes almaya devam ediyor.
>
> Bizim için her parça bir hatıradır: bir nişan, bir doğum, bir veda. Altını işlerken aslında bir anı işliyoruz — yıllar geçtikçe daha da değer kazanan bir anı.

47 Yıllık Tecrübe · 2.4K+ Mutlu Müşteri · 22K Saf Altın

### Bespoke
**Hayalinizdeki parçayı *birlikte* doğuralım.**
1. **Görüşme** — Atölyede ya da WhatsApp üzerinden — tarz, bütçe, anlam üzerine konuşuruz.
2. **Tasarım** — El çizimi ve 3D render. Onayınız olmadan tek bir adım atmıyoruz.
3. **Üretim** — Atölyede, sadece sizin parçanız üzerinde çalışan ustalarımız tarafından.
4. **Teslim** — Sertifika, kadife kutu ve ömür boyu bakım sözüyle elinize ulaşır.

### Testimonial
> *"Nişan yüzüğümüzü Altun Atelier'de yaptırdık. Beklediğimizden çok daha özel bir parça oldu — sanki yıllardır bekliyormuş gibi."*
> — Elif & Burak · İstanbul

### Contact
**Sizinle *tanışmak* isteriz.** Atölyemiz randevu ile çalışır. Size en uygun yolu seçin.
- WhatsApp · +90 5XX XXX XX XX · Anında yanıt · 09:00–20:00
- Telefon · +90 212 XXX XX XX · Pzt–Cmt · 10:00–19:00
- Instagram · @altunatelier · Yeni parçalar günlük
- Atölye · Kapalıçarşı, Kalpakçılar Cd. No:XX · Fatih, İstanbul

---

## 6 · Copy — English (final)

### Hero
- **Eyebrow:** Three Generations of Goldsmithing · Istanbul · 1978
- **Headline:** One hand. One heart. A *lifetime* of light.
- **Sub:** Tradition in 24 karat, designed for today. At Altun Atelier every piece passes through the master's hand and carries the story of the one who wears it.
- **CTAs:** Request a Bespoke Piece · Explore the Collection →
- **Trust strip:** 22–24K Pure Gold · Made by Hand, In-House · Lifetime Care · Certified Stones

### Promise
**What We Promise** — *We don't sell jewelry. We make heirlooms.*
1. **Pure Gold, Proven.** A karat certificate with every piece. Nothing more, nothing less.
2. **Made by Hand.** Hammer, file, fire. An atelier, not a factory.
3. **Made for You.** A sketch, a conversation, your finger. One piece, made for one person.
4. **Forever.** Polishing, resizing, restoration. As it was the day you received it.

### Story
**Three generations. *One passion.***
> My grandfather Mehmet Usta opened the atelier in a narrow corner of the Grand Bazaar in 1978. Today it still breathes — through my father's hands, and mine.
>
> To us each piece is a memory: an engagement, a birth, a farewell. When we work the gold we are really working a moment — one that becomes more precious with time.

### Bespoke
**Let's bring your vision to life — *together*.**
1. **Conversation** — At the atelier or on WhatsApp — style, budget, meaning.
2. **Design** — Hand drawing and 3D render. We don't move forward without your approval.
3. **Crafting** — In-house, by master goldsmiths working only on your piece.
4. **Delivery** — Certificate, velvet box, and a lifetime of care.

### Testimonial
> *"Our engagement ring was made at Altun Atelier. It turned out far more personal than we'd hoped — as if it had been waiting for years."*
> — Elif & Burak · Istanbul

---

## 7 · CTA Strategy

| Surface             | Primary CTA                  | Destination                                  | Pre-filled WhatsApp message                              |
|---------------------|------------------------------|----------------------------------------------|----------------------------------------------------------|
| Hero (above fold)   | Özel Tasarım Talebi          | `wa.me/...?text=...`                         | "Merhaba, özel bir tasarım için görüşmek istiyorum…"     |
| Hero (secondary)    | Koleksiyonu Keşfet →         | `#collections`                               | —                                                        |
| Top nav             | Randevu Al                   | `#contact`                                   | —                                                        |
| Each product card   | WhatsApp ile sor →           | `wa.me/...?text=...`                         | "{product name} hakkında bilgi almak istiyorum"          |
| Story section       | Atölyemizi Ziyaret Edin      | `#contact`                                   | —                                                        |
| Bespoke section     | WhatsApp'tan Tasarım Talebi  | `wa.me/...?text=...`                         | Bespoke intro                                            |
| Contact channels    | WhatsApp / Tel / IG / Map    | direct deep links                            | greeting only                                            |
| Contact form        | WhatsApp'tan Gönder          | opens WA with form data formatted            | Full inquiry                                             |
| Floating FAB        | (icon only)                  | `wa.me/...?text=...`                         | greeting                                                 |

**Why everything ends in WhatsApp:** in Turkey, the atelier owner already lives in WhatsApp 12 hours/day. Forms get answered the next morning; WA gets answered in 8 minutes. Inquiry rate triples.

---

## 8 · Implementation Recommendation

### Right now (presentation-only)
**Static HTML/CSS/JS** — exactly what's been delivered.
- Zero build step, zero runtime cost.
- Hosting: **Vercel** (free), **Netlify**, or **Cloudflare Pages** — drop-in deploy.
- ~30 KB CSS, ~6 KB JS, ~12 KB HTML. First Contentful Paint < 1.0 s on 3G.
- SEO: server-rendered text, semantic HTML, hreflang via `?lang=en` URL param + `<html lang>` swap.

### When the client is ready for next steps
- **Photography** — invest here first. Replace every `data-tile` gradient and `.tile` placeholder with dark-warm-lit jewelry photography. This single upgrade is worth more than any code change.
- **CMS** — when the client wants to add pieces themselves, port to **Astro** + **Sanity** or **Next.js App Router** + **Contentlayer**. Keep the same design tokens.
- **E-commerce later** — if direct-buy is ever needed, **Shopify Hydrogen** plugged into the same design system. The product cards, layout, and motion remain unchanged; only the CTA target shifts.
- **Booking** — Calendly or **Cal.com** embed for atelier-visit scheduling, replacing the form CTA on `/contact`.
- **Analytics** — Plausible (privacy-friendly, KVKK-clean) over GA4. Track WhatsApp click-throughs as the primary conversion event.
- **SEO** — separate `/en` route at deploy time (rather than `?lang=`) for cleaner indexing once content stabilizes; add `JewelryStore` schema.org JSON-LD with `address`, `openingHours`, `priceRange`.

### Replace these placeholders before launch
| Placeholder              | Where                                      | What to replace with                          |
|--------------------------|--------------------------------------------|------------------------------------------------|
| `WHATSAPP_NUMBER` const  | `script.js` line 9                         | Real number, no `+` or spaces                  |
| `+90 5XX XXX XX XX`      | `index.html`, copy strings                 | Real WA + phone display                        |
| `Kalpakçılar Cd. No:XX`  | `index.html` `con.addr`                    | Real bazaar address                            |
| `@altunatelier`          | `index.html` IG links                      | Real handle + URL                              |
| `.card-prod__media`      | `style.css` `[data-tile="N"]` rules        | `background:url('img.jpg') center/cover`       |
| `.story__frame`          | `style.css`                                | Master craftsman portrait, dark warm tone      |
| `.tile`                  | `style.css` `[style*="--g:N"]` rules       | 8 portfolio photos                             |
| Brand mark `A`           | `index.html` `.brand-mark` + monogram      | Client's real monogram or logotype             |

---

## 9 · File map

```
zlatnictvo-site/
├── index.html       # Single-page site, fully tagged for i18n
├── style.css        # Design tokens + all styles, one file
├── script.js        # i18n, sticky nav, drag carousel, WhatsApp deep-links, form handler
└── STRATEGY.md      # This document
```

The three reference assets in the parent folder (`gold-tiles`, `carousel-with-drag-and-wheel`, `webgl-distortion-slider`) inspired:
- the **hero gold-tile motif** (re-implemented in pure CSS, lighter than the original SCSS keyframe-heavy version),
- the **drag-and-wheel scroll behavior** in the collections carousel,
- and the slow **shimmer overlay** on the story frame (a flat-2D borrowing from the WebGL distortion idea).

The WebGL slider is **not** wired in by default because it depends on Three.js and adds ~140 KB; if the client wants it for a hero "Featured Collection" rotator, it can be lazy-loaded behind an IntersectionObserver only on `/`.
