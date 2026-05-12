# Altun Atelier — Admin Panel + Build Setup

Admin panel umožňuje majiteľom uploadovať fotografie do galérie webu bez technických znalostí. Toto je jednorazový setup (cca 5 minút) ktorý urobíte v Vercel dashboarde.

## Build proces (Vercel deploy)

Web má jednoduchý build krok ktorý kompiluje Tailwind do statického CSS súboru.

```
npm install              # raz, pri prvom checkoute
npm run build            # → tailwind.dist.css (~17 KB minified)
npm run build:watch      # auto-rebuild pri zmene HTML/JS, pre lokálny vývoj
npm run optimize:images  # konvertuje PNG → WebP (raz, alebo po pridaní novej fotky)
npm run stamp:dims       # pridá width/height na <img> tagy z manifestu (idempotentné)
```

Vercel pri každom deploy spustí `npm run build` automaticky (definované v `vercel.json` ako `buildCommand`). Lokálne ti stačí `npm run build:watch` počas práce na HTML.

### Pridanie novej statickej fotky do `images/`
1. Hoď PNG/JPG do `zlatnictvo-site/images/`
2. `npm run optimize:images` — vyrobí `.webp` verziu (94 % menšiu) a aktualizuje `manifest.json`
3. V HTML referencuj `images/tvoja-fotka.webp`
4. `npm run stamp:dims` — pridá `width`/`height` atribúty (zero CLS)
5. Commit + push → Vercel deploy

(Pre fotky uploadované cez admin panel toto nie je potrebné — admin panel ich ukladá do Vercel Blob a zobrazuje priamo URL.)

---

## Čo potrebujete

- Prístup k Vercel projektu (https://vercel.com → tvoj projekt)
- Heslo ktoré chceš ako admin password (zvoľ silné, min 12 znakov)

## Krok 1 — Vytvor Blob storage

1. Otvor Vercel dashboard → projekt **zlatnictvo** (alebo ako sa volá)
2. Klikni na záložku **Storage** v hornom menu
3. Klikni **Create Database**
4. Vyber **Blob** → **Continue**
5. Pomenuj store napr. `altun-photos` → **Create**
6. Vercel automaticky pripojí storage k projektu a vytvorí env var `BLOB_READ_WRITE_TOKEN`

## Krok 2 — Nastav admin password

1. V projekte choď na **Settings** → **Environment Variables**
2. Klikni **Add New**
3. Name: `ADMIN_PASSWORD`
4. Value: tvoje heslo (napr. `Altun-2025-Atelier!`)
5. Environments: zaškrtni všetky tri (**Production**, **Preview**, **Development**)
6. Klikni **Save**

## Krok 3 — Re-deploy

Po pridaní env vars je potrebný nový deployment aby sa zmeny aplikovali:

1. Choď na **Deployments**
2. Pri najnovšom deployment klikni **⋯** → **Redeploy**
3. Potvrď **Redeploy**

Hotovo! Po cca 1 minúte je admin panel funkčný.

## Ako používať

1. Otvor `https://tvoj-web.vercel.app/admin`
2. Zadaj heslo ktoré si nastavil v Kroku 2
3. **Vyber bölüm (sekciu)** kde chceš fotku zobraziť:
   - **Galeri** — pridá sa do galérie ako lifestyle/atelier fotka
   - **Koleksiyonlar** — pridá sa ako produktová karta (vyžaduje aj **Başlık** = názov parče)
4. Drag & drop fotku alebo klikni "Fotoğraf seçin"
5. Fotka sa automaticky objaví na webe v zvolenej sekcii
6. **Mevcut Fotoğraflar** — zoznam všetkých uploadnutých rozdelený na Galeri / Koleksiyonlar — môžeš ich mazať klikom na X

## Bezpečnosť

- **Heslo nikdy nie je v kóde** — ostáva len ako Vercel env var
- **HTTPS-only** — všetka komunikácia je šifrovaná
- **Session sa stratí pri zatvorení tabu** — automatický logout
- **Admin URL** (`/admin`) má `noindex` header — Google ho neindexuje
- **File validation** — povolené iba JPG, PNG, WebP
- **Veľkostný limit** — max 4 MB na fotku

## Limitácie

- Max 4 MB na fotku (Vercel Functions limit). Veľké fotky komprimuj predtým.
- Statické "curated" fotky v galérii (gallery-1.png až gallery-3.png a ďalšie) sa zobrazujú vždy a NIE SÚ editovateľné z admin — ostávajú ako brand defaults. Iba uploadnuté fotky sa pridávajú navrch.

## Riešenie problémov

**"Server not configured" pri prihlasovaní**
→ `ADMIN_PASSWORD` env var nie je nastavená alebo nebol vykonaný redeploy. Choď na Settings → Environment Variables a skontroluj.

**"Blob storage not configured" pri uploade**
→ Nevytvoril si Blob store v Storage tab. Pozri Krok 1.

**Fotky sa neobjavujú na webe**
→ Skús hard-refresh (Cmd/Ctrl+Shift+R). Ak stále nie, otvor `/api/photos` v prehliadači — ak vidíš `{"photos":[]}` aj keď si uploadol, niečo sa nepodarilo.

**Zabudol som heslo**
→ V Vercel dashboarde zmeň `ADMIN_PASSWORD` env var na nové, urobiť redeploy.
