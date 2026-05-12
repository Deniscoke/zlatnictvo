# KLIENT-OTAZKY.md
*Zoznam otázok pre zákazníka — pripravené na vloženie do Google Form.*

> **Ako použiť tento dokument:**
>
> 1. Vytvor nový Google Form
> 2. Sekcia po sekcii skopíruj otázky — preklad **v turečtine** (`TR:`) je pripravený pre zákazníka, **slovenský text** (`SK:`) je iba pre teba ako vývojára (vysvetlenie, prečo to potrebujeme a kde v kóde to ide)
> 3. Pri každej otázke je odporúčaný **typ poľa** v Google Forms (krátka odpoveď / dlhá odpoveď / výber / nahranie súboru)
> 4. Otázky označené **\[NUTNÉ\]** sú blokery — bez nich nemôžeme spustiť produkčný web. **\[VOLITEĽNÉ\]** môžu prísť neskôr
> 5. Po prijatí odpovedí prelož ich do `index.html` (placeholdery `__REPLACE_*__`), `script.js` (i18n dictionary) a JSON-LD bloku
>
> **Tip:** Daj formulár otestovať najprv niekomu druhému, či sú otázky zrozumiteľné v turečtine.

---

## SEKCIA 1 · Marka a logo

### Otázka 1.1 — Skutočný názov značky **\[NUTNÉ\]**
**TR:** Markanızın gerçek adı nedir? (Web sitesindeki "Altun Atelier" geçici bir isimdir, kendi marka adınızı yazın.)
**SK:** Aktuálne v kóde je placeholder *"Altun Atelier"*. Klient má buď tento názov alebo iný — toto je primárny brand string, mení sa na ~12 miestach v `index.html`, `script.js` (i18n), `og:title`, `og:site_name`, JSON-LD `name`.
**Typ:** Krátka odpoveď

### Otázka 1.2 — Tagline / podtitul značky **\[VOLITEĽNÉ\]**
**TR:** Markanızı tek bir cümle ile tanımlayın. (Örn: "Üç kuşaklık İstanbul kuyumcusu — 1978'den beri.")
**SK:** Pôjde do `<meta name="description">`, og:description, footer tagline. Ovplyvňuje SEO snippet v Google.
**Typ:** Krátka odpoveď

### Otázka 1.3 — Logo / monogram **\[NUTNÉ\]**
**TR:** Logonuzu veya marka simgenizi (monogramınızı) yükleyin. SVG veya yüksek çözünürlüklü PNG tercih edilir. Eğer henüz logonuz yoksa, lütfen istediğiniz harf veya sembolü yazın (Şu an "A" harfi kullanılıyor).
**SK:** Nahradí sa `favicon.svg` (kruh s "A") + `.brand-mark` v navigácii a footri. Ak klient nemá logo, môžeme pre teraz nechať `A` ako monogram, alebo navrhnúť dizajn (mám na to skill `design-system`/`logo-generator`).
**Typ:** Nahranie súboru + krátka odpoveď (pre prípad že nemá logo)

### Otázka 1.4 — Rok založenia ateliéru **\[NUTNÉ\]**
**TR:** Atölyeniz hangi yılda kuruldu?
**SK:** V kóde je `1978` na 6 miestach (hero eyebrow, story, footer, JSON-LD `foundingDate`). Ak je to skutočný rok, super; ak nie, zmeniť všade.
**Typ:** Krátka odpoveď (číslo)

### Otázka 1.5 — Generačný príbeh **\[NUTNÉ\]**
**TR:** Kuyumculuk geleneğiniz kaç kuşak sürüyor? (Şu an web sitesi "üç kuşak" diyor — bu doğru mu, yoksa farklı mı?)
**SK:** "Three generations" je trust hook v hero a story sekcii. Ak je to skutočne 3, OK; ak je to 1 alebo 2, treba upraviť (úprimnosť > marketing v luxury).
**Typ:** Výber (1 kuşak / 2 kuşak / 3 kuşak / 4+ kuşak / Aile değil — bireysel atölye)

---

## SEKCIA 2 · Kontaktné údaje

### Otázka 2.1 — Hlavné telefónne číslo **\[NUTNÉ\]**
**TR:** Atölyenizin ana telefon numarası nedir? (Müşteri arayabileceği numara — uluslararası formatta yazın: +90 ...)
**SK:** Aktuálne placeholder `+90 212 XXX XX XX`. Pôjde do JSON-LD `telephone`, prípadne contact sekcie.
**Typ:** Krátka odpoveď

### Otázka 2.2 — WhatsApp číslo (ak je iné) **\[VOLITEĽNÉ\]**
**TR:** WhatsApp için ayrı bir numara mı kullanıyorsunuz, yoksa aynı mı? (Ayrıysa lütfen yazın.)
**SK:** Súvisí s otázkou v sekcii **Stratégia komunikácie** nižšie. Ak budú WA aj telefón rovnaké, zjednoduší sa CTA logika.
**Typ:** Krátka odpoveď

### Otázka 2.3 — E-mailová adresa **\[NUTNÉ\]**
**TR:** Hangi e-posta adresine kontak formundan gelen mesajların ulaşmasını istiyorsunuz?
**SK:** Aktuálne form ide cez Web3Forms na `e1fcbd15-787e-4066-b2c6-f9329a1e069a` access key — neviem komu sa to doručuje. Klient potrebuje vlastný Web3Forms účet alebo nech mi dá email a ja prevezmem.
**Typ:** Krátka odpoveď

### Otázka 2.4 — Instagram používateľské meno **\[NUTNÉ\]**
**TR:** Instagram hesabınızın kullanıcı adı nedir? (Örn: @altunatelier — sadece kullanıcı adı, URL değil)
**SK:** V kóde je `@altunatelier` placeholder + odkaz `https://instagram.com/`. Treba doplniť aj do JSON-LD `sameAs`.
**Typ:** Krátka odpoveď

### Otázka 2.5 — Iné sociálne siete **\[VOLITEĽNÉ\]**
**TR:** Instagram dışında başka hesaplarınız var mı? (Facebook, TikTok, Pinterest, YouTube, X/Twitter — varsa kullanıcı adlarını yazın)
**SK:** Pridajú sa do JSON-LD `sameAs` array a do contact sekcie.
**Typ:** Dlhá odpoveď

### Otázka 2.6 — Web stránka (doména) **\[NUTNÉ\]**
**TR:** Web sitesi için hangi alan adını (domain) kullanmak istiyorsunuz? (Örn: altunatelier.com — eğer hâlâ satın almadıysanız da yazın, biz alabiliriz.)
**SK:** Aktuálne placeholder `https://altunatelier.com`. Treba zmeniť canonical, hreflang, sitemap.xml, robots.txt, og:url. Ak klient nemá doménu, kúpime/odporučíme.
**Typ:** Krátka odpoveď

---

## SEKCIA 3 · Lokácia ateliéru

### Otázka 3.1 — Presná adresa **\[NUTNÉ\]**
**TR:** Atölyenizin tam adresini yazın (sokak, numara, mahalle, ilçe, il).
**SK:** Aktuálne `Kapalıçarşı, Kalpakçılar Cd. No:XX, Fatih, İstanbul`. Číslo dverí je placeholder. Pôjde do JSON-LD `address`, footer, contact sekcia.
**Typ:** Dlhá odpoveď

### Otázka 3.2 — PSČ (postal code) **\[NUTNÉ\]**
**TR:** Posta kodunuz nedir?
**SK:** JSON-LD `postalCode`.
**Typ:** Krátka odpoveď

### Otázka 3.3 — Google Maps odkaz **\[NUTNÉ\]**
**TR:** Atölyenizin Google Maps üzerindeki linkini paylaşın. (Maps'te bulun → Paylaş → Linki kopyala)
**SK:** Z URL vieme vyextrahovať lat/lng pre JSON-LD `geo` (alebo cez geocoder API). Aktuálne v contact sekcii je `https://maps.google.com` (default).
**Typ:** Krátka odpoveď

### Otázka 3.4 — GPS súradnice (ak vie) **\[VOLITEĽNÉ\]**
**TR:** Eğer biliyorsanız enlem ve boylam (lat, lng) — Maps'ten link veriyorsanız bunu atlayabilirsiniz.
**SK:** Ak klient nevie, vyextrahujem z Maps URL.
**Typ:** Krátka odpoveď

### Otázka 3.5 — Otváracie hodiny **\[NUTNÉ\]**
**TR:** Atölyeniz hangi günler ve saatlerde açık? (Örn: Pzt-Cmt 10:00–19:00, Pazar kapalı). Ramazan veya bayram özel saatleri varsa belirtin.
**SK:** Aktuálne v JSON-LD je placeholder Mo-Sa 10:00-19:00. Reálne hodiny ovplyvňujú aj contact sekciu textovo.
**Typ:** Dlhá odpoveď

### Otázka 3.6 — Návšteva ateliéru **\[NUTNÉ\]**
**TR:** Müşteriler atölyeyi sadece randevu ile mi ziyaret edebilir, yoksa randevusuz da gelebilirler mi?
**SK:** Súčasne v kóde "Atölyemiz randevu ile çalışır" — ak prijíma walk-in, treba zmeniť copy.
**Typ:** Výber (Sadece randevu / Randevusuz da olur / Bazı saatler randevu, bazıları walk-in)

---

## SEKCIA 4 · Príbeh značky (Story sekcia)

### Otázka 4.1 — Meno zakladateľa **\[NUTNÉ\]**
**TR:** Atölyeyi kuran kişinin adı nedir? (Şu an "Mehmet Usta" yazıyor — bu doğru mu, yoksa farklı mı?)
**SK:** V `script.js` i18n je `"Dedem Mehmet Usta'nın..."`. Treba zmeniť ak je to iné meno.
**Typ:** Krátka odpoveď

### Otázka 4.2 — Súčasní majitelia **\[NUTNÉ\]**
**TR:** Atölyeyi şu an kim yönetiyor? (Sahibinin / sahiplerinin adlarını yazın — story bölümünde "babamın ve benim ellerimde" yazıyor, ama gerçek isimler eklenebilir.)
**SK:** Ovplyvní story copy (môže ostať "babamın" generic alebo môžeme dať mená pre osobnejší dojem).
**Typ:** Krátka odpoveď

### Otázka 4.3 — Lokácia pôvodného otvorenia **\[VOLITEĽNÉ\]**
**TR:** Atölyenin ilk açıldığı yer Kapalıçarşı mıydı, yoksa farklı bir yerde miydi?
**SK:** Story spomína Kapalıçarşı.
**Typ:** Krátka odpoveď

### Otázka 4.4 — Skutočný príbeh / spomienka **\[VOLITEĽNÉ — ale veľmi výhodné\]**
**TR:** Atölyenizin geçmişinden, sizin için anlamlı bir anı veya hikâye paylaşır mısınız? (Bir, iki cümle yeterli — bu, web sitesinin "Hikâye" bölümünü daha gerçek ve duygusal hâle getirir.)
**SK:** Toto je gold pre conversion. Generic story je OK, ale skutočný príbeh (napr. "moje meno znamená v turečtine zlato, preto sme..." alebo "v 1985 sme spravili svadobné prstene pre prezidenta...") je 10× silnejší trust signal.
**Typ:** Dlhá odpoveď

### Otázka 4.5 — Štatistiky **\[NUTNÉ\]**
**TR:** Şu anki istatistikler ne kadar gerçek?
- Yıllık tecrübe (şu an: 47 yıl)
- Mutlu müşteri sayısı (şu an: 2.4K+)
- Saf altın ayar (şu an: 22K)

Lütfen her birini doğrulayın veya düzeltin.
**SK:** V `index.html` `#story` blok. Treba mať reálne čísla — preháňanie sa pri luxury značke vypomstí.
**Typ:** Dlhá odpoveď

---

## SEKCIA 5 · Kolekcie a produkty

### Otázka 5.1 — Aktuálne kolekcie **\[NUTNÉ\]**
**TR:** Web sitesinde 6 ürün kartı var:
1. Hilal Kolye — Tören Kolyesi · 22K
2. Solitaire İstanbul — Pırlanta Yüzük · 18K
3. Sarmaş Bilezik — El Örme Bilezik · 22K
4. Mermer Kolye — Halka Kolye · 18K
5. Klasik Alyans — Çift Alyans · 14K
6. Sertifikalı Pırlanta — Tek Taş · Talebe Özel

Bu isimler ve kategoriler doğru mu, yoksa hangi ürünleri öne çıkarmak istersiniz? (En fazla 6 ana koleksiyon parçası önerilir.)
**SK:** Toto je core kolekcie list. Klient môže buď schváliť aktuálne, alebo poslať vlastné. Každá karta má **názov + kategória + ayar**.
**Typ:** Dlhá odpoveď

### Otázka 5.2 — Krátky popis pre každú kolekciu **\[VOLITEĽNÉ\]**
**TR:** Her ürün için 1 cümle açıklama yazmak ister misiniz? (Lightbox detayında gösterilir.)
**SK:** Aktuálne lightbox má len názov + kategória. Ak klient pridá popis, môžeme pridať aj `prod-desc` field.
**Typ:** Dlhá odpoveď

### Otázka 5.3 — Cenové rozpätie **\[NUTNÉ\]**
**TR:** Ürünleriniz için fiyat aralığı nedir? Lütfen seçin:
- $ — Erişilebilir lüks (genel halk)
- $$ — Premium (orta-üst sınıf)
- $$$ — Lüks (üst düzey)
- $$$$ — Ultra-lüks (çok özel)
**SK:** JSON-LD `priceRange` (aktuálne `$$$`). Ovplyvňuje aj Google Shopping.
**Typ:** Výber

### Otázka 5.4 — Fotky kolekcií **\[NUTNÉ\]**
**TR:** Mevcut ürün fotoğrafları AI ile oluşturulmuş geçici görsellerdir. Lütfen kendi profesyonel ürün fotoğraflarınızı yükleyin (her ürün için en az 1 fotoğraf, tercihen 4–6, koyu arka planda, sıcak ışıkta, 1024×1024 px veya daha büyük).
**SK:** Aktuálne sú v `/images/` AI-generated placeholdery. Treba reálne foto. Po nahraní → spustiť `npm run optimize:images` → otestovať lokálne.
**Typ:** Nahranie viac súborov (Google Forms umožňuje až 10 ks, väčšie množstvo cez WeTransfer/Drive)

### Otázka 5.5 — Bespoke / Özel sipariş — uskutočňujete? **\[NUTNÉ\]**
**TR:** Özel sipariş (bespoke) hizmeti veriyor musunuz? Eğer evetse, süreç şu an web sitesindeki gibi 4 adımlı mı?
1. Görüşme
2. Tasarım (3D render dahil)
3. Üretim
4. Teslim

Bu doğru mu, yoksa süreciniz farklı mı?
**SK:** Ak nie, treba odstrániť celú custom sekciu. Ak áno ale s inými krokmi, prepísať.
**Typ:** Výber + dlhá odpoveď ak iné

---

## SEKCIA 6 · Konverzná stratégia

### Otázka 6.1 — Komunikačný kanál preferenčný **\[NUTNÉ — kľúčová otázka\]**
**TR:** Müşteriler size en çok hangi kanaldan ulaşmaktan hoşlanıyor? Birden fazla seçebilirsiniz, ama en sık kullanılanı öne koyun:
- WhatsApp (mesaj veya arama)
- E-posta
- Instagram DM
- Telefon araması
- Web sitesi formu
- Atölye ziyareti (randevu)
**SK:** **Toto rozhodne celú architektúru kontaktu.** Pôvodný `STRATEGY.md` predpokladal WhatsApp-first funnel. Aktuálne kód má len IG + Mapy + email form. Po odpovedi prerobíme contact + product CTA podľa preferencie.
**Typ:** Výber (multiple, ranked)

### Otázka 6.2 — WhatsApp deep-linky? **\[NUTNÉ ak vyberie WA v 6.1\]**
**TR:** Eğer WhatsApp önemli ise — ürün kartlarına "WhatsApp ile sor" butonu eklemek ve müşterinin tıklayınca otomatik olarak ürün adıyla mesaj başlatmasını sağlamak ister misiniz? (Şu an böyle bir özellik yok, ekleyebiliriz.)
**SK:** Implementácia: konštanta `WHATSAPP_NUMBER` v `script.js` + helper `waLink()` + floating FAB + product CTA prerouty + form alternative submit.
**Typ:** Áno / Nie / Belki sonra

### Otázka 6.3 — Cieľová akcia na webe **\[NUTNÉ\]**
**TR:** Web sitesi ziyaretçisinin yapmasını en çok istediğiniz şey nedir? (Bir tane seçin — bu, ana CTA'mızı belirler):
- WhatsApp'tan mesaj atması
- Atölyeye randevu alması
- Telefonla araması
- E-posta göndermesi
- Instagram'da takip etmesi
**SK:** Single most important conversion event. Bude to tracking #1 v analytike a primárny CTA.
**Typ:** Výber

---

## SEKCIA 7 · Recenzie a testimoniály

### Otázka 7.1 — Aktuálny testimonial **\[NUTNÉ\]**
**TR:** Şu an web sitesinde şu yorum var:

> *"Nişan yüzüğümüzü Altun Atelier'de yaptırdık. Beklediğimizden çok daha özel bir parça oldu — sanki yıllardır bekliyormuş gibi."*
> — Elif & Burak · İstanbul

Bu gerçek bir müşteri yorumu mu? Eğer hayır, gerçek bir müşteri yorumunuz var mı? (İzin alarak — müşterinin adı + şehri + 1-2 cümlelik yorumu yeterlidir.)
**SK:** Generic testimonial je transparentne fake. Reálny od skutočného zákazníka (s jeho povolením) je 5× silnejší. Ak nemá, môžem nechať generic ale **musím to vedieť pred launch**.
**Typ:** Dlhá odpoveď

### Otázka 7.2 — Google reviews **\[VOLITEĽNÉ\]**
**TR:** Google Maps'te işletmenizin değerlendirmesi var mı? Varsa, kaç yıldız ve kaç değerlendirme?
**SK:** Pre JSON-LD `aggregateRating` (5-hviezdy v rich snippet pri názve v Google search).
**Typ:** Krátka odpoveď

### Otázka 7.3 — Známe osobnosti / referencie **\[VOLITEĽNÉ\]**
**TR:** Tanınmış müşterileriniz veya basın haberleriniz oldu mu? (Bu bilgi web sitesinde "Basında" veya "Referanslar" bölümü olarak eklenebilir — opsiyonel.)
**SK:** Ak má media coverage, môžeme pridať press mentions sekciu.
**Typ:** Dlhá odpoveď

---

## SEKCIA 8 · Jazyky a obsah

### Otázka 8.1 — Aké jazyky chcete **\[NUTNÉ\]**
**TR:** Web sitesi şu an Türkçe ve İngilizce destekliyor. Bu yeterli mi, yoksa başka diller eklemek ister misiniz? (Arapça, Rusça turist akını için sıkça eklenir.)
**SK:** TR/EN je default. Pridanie iného jazyka = i18n dictionary expand + content translation. Ak nepotrebujú EN, môžeme úplne vyhodiť (zníži code complexity o ~40 %).
**Typ:** Výber (multiple)

### Otázka 8.2 — Hlavný jazyk **\[NUTNÉ\]**
**TR:** Ana hedef kitleniz hangi dilde? (Türkiye iç pazarı = TR, turist odaklıysanız EN birincil olabilir)
**SK:** Default landing language. Ovplyvňuje meta tagy, OG locale, hreflang priority.
**Typ:** Výber (TR / EN / Iné)

---

## SEKCIA 9 · Právne / KVKK / Cookies

### Otázka 9.1 — KVKK / Privacy policy **\[NUTNÉ pred launch-om\]**
**TR:** KVKK uyumluluğu için web sitesinde "Gizlilik Politikası" sayfası olması gerekiyor. Sizin için bu metni hazırlayan bir avukatınız var mı, yoksa biz şablon mu hazırlasalım?
**SK:** Aktuálne footer hovorí "KVKK uyumlu" ale žiadna privacy stránka neexistuje. Pre form (zber emailov) musí byť. Buď klient dodá text alebo ja vyrobím šablónu (ale **nie** legal advice — len template).
**Typ:** Výber (Avukatım var / Şablon hazırlayın / Bilmiyorum)

### Otázka 9.2 — Cookie banner? **\[VOLITEĽNÉ\]**
**TR:** Web sitesinde sadece zorunlu çerezler (analytics yok) kullanılıyorsa cookie banner gerekmiyor. Ama Google Analytics veya pazarlama araçları kullanmak isterseniz banner şart.
**SK:** Ak nepoužívajú GA, banner netreba. Ak chcú GA → musíme pridať Cookiebot/Tarteaucitron alebo náš vlastný.
**Typ:** Áno / Nie

---

## SEKCIA 10 · Marketing a SEO

### Otázka 10.1 — Kľúčové slová **\[VOLITEĽNÉ\]**
**TR:** Müşteriler sizi Google'da hangi kelimelerle aramalı? (Örn: "Kapalıçarşı kuyumcu", "el yapımı altın yüzük", "İstanbul nişan yüzüğü", "özel tasarım kolye")
**SK:** Ovplyvní meta description, alt texty, vnútorné copy. Top 5–10 keywords stačí.
**Typ:** Dlhá odpoveď

### Otázka 10.2 — Konkurencia **\[VOLITEĽNÉ\]**
**TR:** Hangi kuyumcuları (Türkiye veya dünya) örnek alıyorsunuz veya sizinle aynı seviyede gördüğünüz markalar var mı?
**SK:** Pomôže s positioning a tonalitou. Napr. ak hovorí "Buccellati style" → vieme target.
**Typ:** Dlhá odpoveď

### Otázka 10.3 — Reklama **\[VOLITEĽNÉ\]**
**TR:** Google Ads, Facebook/Instagram Ads veya başka bir reklam kullanmayı planlıyor musunuz?
**SK:** Ak áno, treba pridať conversion tracking (GA4 + Meta Pixel) + landing page strategy. Bez toho stačí čisté SEO setup.
**Typ:** Áno / Nie / Belki sonra

---

## SEKCIA 11 · Technické / Hosting

### Otázka 11.1 — Vercel účet **\[NUTNÉ\]**
**TR:** Web sitesi Vercel platformunda yayınlanacak. Bunun için bir Vercel hesabı var mı, yoksa biz mi açalım? (Ücretsiz plan, kişisel e-posta ile yeterli.)
**SK:** Ak klient má účet, dá nám collaborator access. Ak nemá, registrujeme my a neskôr transfer-neme. Free tier zvládne všetko.
**Typ:** Výber

### Otázka 11.2 — Doména prevod **\[NUTNÉ\]**
**TR:** Eğer alan adınız (domain) varsa, hangi şirketten aldınız? (GoDaddy, Namecheap, vs.) DNS ayarları için erişim gerekecek.
**SK:** Pre Vercel custom domain potrebujeme upraviť DNS A/CNAME records.
**Typ:** Krátka odpoveď

### Otázka 11.3 — Web3Forms / formular email backend **\[NUTNÉ\]**
**TR:** Şu an form mesajları geçici bir Web3Forms hesabı üzerinden gidiyor. Bunun için yeni bir hesap mı oluşturalım, yoksa kendi e-posta sunucunuz var mı?
**SK:** Aktuálny `access_key` je nemoja. Najlepšie: zaregistrovať Web3Forms na klientov email + dať mu key, alebo Resend/SendGrid + vlastný API endpoint v `api/contact.js`.
**Typ:** Výber (Yeni Web3Forms / E-posta sunucum var / Bilmiyorum)

### Otázka 11.4 — Admin heslo **\[NUTNÉ\]**
**TR:** Admin paneli için kullanmak istediğiniz şifreyi belirleyin. (En az 12 karakter — büyük harf, küçük harf, sayı ve sembol içermeli. Bunu sadece web sayfasında fotoğraf yüklemek için kullanacaksınız.)
**SK:** `ADMIN_PASSWORD` env var. Klient si môže zvoliť vlastné, alebo prevezmeme aktuálne `Hq2sVQo1PPGjlYJ22rFXrr`. Ja v `.env.local` mám test hodnotu.
**Typ:** Krátka odpoveď

### Otázka 11.5 — Analytics **\[VOLITEĽNÉ\]**
**TR:** Web sitesi ziyaretçi istatistiklerini görmek ister misiniz? (Plausible — gizlilik dostu, KVKK uyumlu, ayda ~9 USD; veya Google Analytics — ücretsiz ama cookie banner gerekiyor.)
**SK:** Plausible je pre luxury značku idiomaticky správny (žiadne cookies, KVKK-clean, podporuje aj custom events ako "WhatsApp click"). GA4 zadarmo ale invasive. **Odporúčam Plausible.**
**Typ:** Výber (Plausible / Google Analytics / İstemiyorum)

---

## SEKCIA 12 · Voľný priestor

### Otázka 12.1 — Iné požiadavky **\[VOLITEĽNÉ\]**
**TR:** Yukarıda sorulmamış, web sitesi için önemli bulduğunuz başka bir şey var mı? (Örn: belirli bir özellik, sayfa, bağlantı, yasal uyum, ya da gözden kaçan bir detay)
**SK:** Catch-all. Tu klient povie všetko ostatné — najčastejšie tu zaznejú: "chcem aj rezervačný kalendár", "potrebujem podporu pre kreditné karty", "chcem newsletter signup", "moja sestra fotí pre mňa, treba kreditovať". Spracovať individuálne.
**Typ:** Dlhá odpoveď

### Otázka 12.2 — Termín spustenia **\[NUTNÉ\]**
**TR:** Web sitesini ne zaman yayına almak istiyorsunuz? (Belirli bir tarih veya etkinlik için mi gerekli — örn: yeni koleksiyon lansmanı, fuara katılım, sezon açılışı?)
**SK:** Ovplyvní priority a scope. Ak je 1 týždeň, robíme MVP. Ak 1 mesiac, môžeme dotiahnuť aj nice-to-haves (preview kolekcie, blog).
**Typ:** Krátka odpoveď

---

## Odhad času na vyplnenie pre klienta

- **Rýchle čítanie + odpovede len na NUTNÉ:** ~15–20 minút
- **Dôkladné vyplnenie všetkého vrátane VOLITEĽNÉHO:** ~40–60 minút
- **Plus nahranie fotiek a logu:** záleží od počtu súborov

**Tip pre klienta v úvode formulára:**
> *"Bu formu doldurmak yaklaşık 20 dakika alır. Acelesi yok — istediğiniz zaman kayıt edip daha sonra devam edebilirsiniz. Bilmediğiniz veya emin olmadığınız soruları boş bırakabilirsiniz, sonra konuşuruz."*

---

## Po prijatí odpovedí — checklist pre teba

- [ ] Updatnúť všetky `__REPLACE_*__` placeholdery v `index.html` (JSON-LD)
- [ ] Updatnúť `i18n` dictionary v `script.js` (`con.addr`, `story.p1` mená atď.)
- [ ] Hodiť reálne fotky do `images/`, run `npm run optimize:images` + `npm run stamp:dims`
- [ ] Vymeniť favicon.svg za reálne logo (ak klient dodal)
- [ ] Vytvoriť 1200×630 `og-image.jpg` v `images/`
- [ ] Updatnúť `sitemap.xml` a `robots.txt` s reálnou doménou
- [ ] Updatnúť `og:url`, canonical, hreflang v `index.html` s reálnou doménou
- [ ] Web3Forms: vytvoriť účet na klientov email, vymeniť `access_key`
- [ ] Pridať Plausible (alebo GA4) script ak klient povedal áno
- [ ] Ak WhatsApp = áno: pridať FAB + product CTAs + WA helper v `script.js`
- [ ] Ak GA4 a/alebo cookie banner: pridať Cookiebot/vlastný banner
- [ ] Vyrobiť `gizlilik-politikasi.html` (privacy policy) ak treba
- [ ] Final QA: Lighthouse, mobile, slow 3G, screen reader pass
- [ ] Vercel production deploy + nastaviť custom doménu

---

## Aktuálny stav placeholderov v kóde

Tieto stringy v kóde čakajú na real-data (grep-able):

| Placeholder | Súbor | Význam |
|---|---|---|
| `__REPLACE_PHONE__` | `index.html` JSON-LD | Hlavný telefón |
| `__REPLACE_EMAIL__` | `index.html` JSON-LD | Hlavný e-mail |
| `__REPLACE_STREET_ADDRESS__` | `index.html` JSON-LD | Ulica + č.p. |
| `__REPLACE_POSTAL_CODE__` | `index.html` JSON-LD | PSČ |
| `__REPLACE_LAT__` `__REPLACE_LNG__` | `index.html` JSON-LD | GPS |
| `__REPLACE_IG_HANDLE__` | `index.html` JSON-LD | Instagram username |
| `altunatelier.com` | `sitemap.xml`, `robots.txt`, `index.html` | Reálna doména (canonical, og:url, hreflang) |
| `+90 5XX XXX XX XX`, `+90 212 XXX XX XX` | (zatiaľ nie v kóde, plánované) | Telefón v contact sekcii |
| `Kalpakçılar Cd. No:XX` | `script.js` `con.addr` | Adresa v contact |
| `@altunatelier`, `instagram.com/` | `index.html`, `script.js` | Instagram |
| `Mehmet Usta`, `Elif & Burak` | `script.js` i18n | Mená v story / testimonial |
| `1978`, `47`, `2.4K+`, `22K` | `index.html`, `script.js` | Štatistiky / rok |
| `e1fcbd15-787e-4066-b2c6-f9329a1e069a` | `index.html` form `access_key` | Web3Forms key (vymeniť) |

Po prijatí odpovedí prejsť tento zoznam položku po položke.
