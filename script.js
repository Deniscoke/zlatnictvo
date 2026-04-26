/* ============================================================
   ALTUN ATELIER — interactions
   - Bilingual TR/EN
   - Sticky nav, mobile menu
   - WhatsApp deep-links (per product, custom, FAB, form)
   - Reveal-on-scroll
============================================================ */

const WHATSAPP_NUMBER = '905000000000'; // TODO: replace, no '+' or spaces

/* ---------- i18n ---------- */
const i18n = {
  tr: {
    "meta.title": "Altun Atelier — El Yapımı Altın Mücevher | İstanbul",
    "meta.desc":  "1978'den bu yana üç kuşağın ustalığıyla tasarlanan, el yapımı altın mücevherler.",

    "nav.collections":"Koleksiyonlar","nav.story":"Hikâye","nav.custom":"Özel Sipariş",
    "nav.gallery":"Galeri","nav.contact":"İletişim","nav.cta":"Randevu Al",

    "hero.eyebrow":"Üç Kuşaklık Kuyumculuk · İstanbul · 1978",
    "hero.title":"Bir el. Bir kalp.<br><em>Bir ömür</em> ışıltı.",
    "hero.sub":"24 ayar gelenek, modern tasarım. Altun Atelier'de her parça, ustanın elinden geçer ve sahibinin hikâyesini taşır.",
    "hero.cta1":"Özel Tasarım Talebi","hero.cta2":"Koleksiyonu Keşfet →",
    "hero.t1":"22–24 Ayar Altın","hero.t2":"Atölyede El Yapımı",
    "hero.t3":"Ömür Boyu Bakım","hero.t4":"Sertifikalı Taşlar","hero.scroll":"Keşfet",

    "slides.0.title":"Bir el. Bir kalp.<br><em>Bir ömür</em> ışıltı.",
    "slides.0.meta":"İmza Koleksiyonu",
    "slides.1.title":"Altının <em>doğduğu</em> yer.",
    "slides.1.meta":"Atölyemiz · 1978",
    "slides.2.title":"Fabrika değil. <em>Atölye.</em>",
    "slides.2.meta":"El Yapımı · 22 Ayar",
    "slides.3.title":"Anılarınız <em>altın</em> olur.",
    "slides.3.meta":"Aşk Hikâyeleri · Özel Tasarım",

    "promise.kicker":"Söz Verdiklerimiz","promise.title":"Mücevher değil, <em>miras</em> yaratıyoruz.",
    "promise.c1.t":"Saf Altın, Kanıtlı","promise.c1.b":"Her parça için ayar belgesi. Ne fazlası, ne eksiği.",
    "promise.c2.t":"El İşçiliği","promise.c2.b":"Çekiç, eğe, ısı. Geleneksel teknik, modern tasarım — fabrika değil, atölye.",
    "promise.c3.t":"Size Özel","promise.c3.b":"Bir taslak, bir görüşme, sizin parmağınıza. Tek bir kişi için tek bir parça.",
    "promise.c4.t":"Ömür Boyu","promise.c4.b":"Bakım, cilalama, ölçü değişimi. Aldığınız parça yıllarca ilk günkü gibi kalır.",

    "col.kicker":"Koleksiyonlar","col.title":"İmza Parçalar",
    "col.lede":"Beğendiğiniz parçaya tıklayın — detayları büyütülmüş olarak inceleyin.",
    "col.ask":"Detayları Gör →",
    "col.p1.t":"Hilal Kolye","col.p1.c":"Tören Kolyesi · 22K",
    "col.p2.t":"Solitaire İstanbul","col.p2.c":"Pırlanta Yüzük · 18K",
    "col.p3.t":"Sarmaş Bilezik","col.p3.c":"El Örme Bilezik · 22K",
    "col.p4.t":"Mermer Kolye","col.p4.c":"Halka Kolye · 18K",
    "col.p5.t":"Klasik Alyans","col.p5.c":"Çift Alyans · 14K",
    "col.p6.t":"Sertifikalı Pırlanta","col.p6.c":"Tek Taş · Talebe Özel",

    "story.kicker":"Bizim Hikâyemiz","story.title":"Üç kuşak. <em>Tek bir tutku.</em>",
    "story.p1":"Dedem Mehmet Usta'nın 1978'de Kapalıçarşı'nın daracık bir köşesinde açtığı atölye, bugün babamın ve benim ellerimde nefes almaya devam ediyor.",
    "story.p2":"Bizim için her parça bir hatıradır: bir nişan, bir doğum, bir veda. Altını işlerken aslında bir anı işliyoruz.",
    "story.s1":"Yıllık Tecrübe","story.s2":"Mutlu Müşteri","story.s3":"Saf Altın",
    "story.cta":"Atölyemizi Ziyaret Edin",

    "cus.kicker":"Özel Sipariş","cus.title":"Hayalinizdeki parçayı <em>birlikte</em> doğuralım.",
    "cus.lede":"Bir taslak, bir kelime, hatta bir duygu — hepsi bir başlangıç. Süreç dört kısa adımdan oluşur.",
    "cus.s1.t":"Görüşme","cus.s1.b":"Atölyede ya da WhatsApp üzerinden — tarz, bütçe, anlam üzerine konuşuruz.",
    "cus.s2.t":"Tasarım","cus.s2.b":"El çizimi ve 3D render. Onayınız olmadan tek bir adım atmıyoruz.",
    "cus.s3.t":"Üretim","cus.s3.b":"Sadece sizin parçanız üzerinde çalışan ustalarımız tarafından.",
    "cus.s4.t":"Teslim","cus.s4.b":"Sertifika, kadife kutu ve ömür boyu bakım sözüyle elinize ulaşır.",
    "cus.cta":"WhatsApp'tan Tasarım Talebi",
    "cus.note":"Yanıt süresi: ortalama 30 dakika · 09:00–20:00",

    "trust.kicker":"Atölye Deneyimi","trust.title":"İlk adımdan <em>son</em> kutu kapağına.",
    "trust.c1.t":"Atölye","trust.c1.b":"Kapalıçarşı'nın kalbinde, randevu ile ziyaret.",
    "trust.c2.t":"Birebir Danışma","trust.c2.b":"Acelesiz seçim, samimi rehberlik.",
    "trust.c3.t":"İmzalı Kutu","trust.c3.b":"Her parça, marka kutusunda ve sertifikalı.",

    "gal.kicker":"Galeri","gal.title":"Atölyeden Kareler",
    "gal.cap":"Daha fazlası için",

    "quote.body":"\u201CNişan yüzüğümüzü Altun Atelier'de yaptırdık. Beklediğimizden çok daha özel bir parça oldu — sanki yıllardır bekliyormuş gibi.\u201D",
    "quote.who":"Müşteri · İstanbul",

    "con.kicker":"İletişim","con.title":"Sizinle <em>tanışmak</em> isteriz.",
    "con.lede":"Atölyemiz randevu ile çalışır. Size en uygun yolu seçin.",
    "con.wa":"+90 5XX XXX XX XX","con.waNote":"Anında yanıt · 09:00–20:00",
    "con.tel":"Telefon","con.telNote":"Pzt–Cmt · 10:00–19:00",
    "con.igNote":"Yeni parçalar günlük",
    "con.loc":"Atölye","con.addr":"Kapalıçarşı, Kalpakçılar Cd. No:XX",

    "form.title":"Ya da kısa bir not bırakın",
    "form.name":"İsim","form.phone":"Telefon / WhatsApp","form.interest":"İlgilendiğiniz",
    "form.i1":"Özel Tasarım","form.i2":"Nişan / Alyans",
    "form.i3":"Koleksiyondan Bir Parça","form.i4":"Bakım / Onarım",
    "form.msg":"Notunuz","form.send":"WhatsApp'tan Gönder",
    "form.note":"Form gönderildiğinde bilgileriniz WhatsApp üzerinden bize iletilir.",

    "foot.tag":"El yapımı altın mücevher · İstanbul · 1978",
    "foot.legal":"Her parça benzersizdir · KVKK uyumlu",
    "lb.cta":"Randevu Al →",
  },

  en: {
    "meta.title":"Altun Atelier — Handcrafted Gold Jewelry | Istanbul",
    "meta.desc":"Three generations of Turkish goldsmithing since 1978. Bespoke pieces, engagement rings and signature collections — each one made by hand.",

    "nav.collections":"Collections","nav.story":"Story","nav.custom":"Bespoke",
    "nav.gallery":"Gallery","nav.contact":"Contact","nav.cta":"Book a Visit",

    "hero.eyebrow":"Three Generations of Goldsmithing · Istanbul · 1978",
    "hero.title":"One hand. One heart.<br>A <em>lifetime</em> of light.",
    "hero.sub":"Tradition in 24 karat, designed for today. At Altun Atelier every piece passes through the master's hand and carries the story of the one who wears it.",
    "hero.cta1":"Request a Bespoke Piece","hero.cta2":"Explore the Collection →",
    "hero.t1":"22–24K Pure Gold","hero.t2":"Made by Hand, In-House",
    "hero.t3":"Lifetime Care","hero.t4":"Certified Stones","hero.scroll":"Discover",

    "slides.0.title":"One hand. One heart.<br>A <em>lifetime</em> of light.",
    "slides.0.meta":"Signature Collection",
    "slides.1.title":"Where gold is <em>born</em>.",
    "slides.1.meta":"Our Atelier · 1978",
    "slides.2.title":"Not a factory. <em>An atelier.</em>",
    "slides.2.meta":"Made by Hand · 22K",
    "slides.3.title":"Your moments, in <em>gold</em>.",
    "slides.3.meta":"Love Stories · Bespoke",

    "promise.kicker":"What We Promise","promise.title":"We don't sell jewelry. We make <em>heirlooms</em>.",
    "promise.c1.t":"Pure Gold, Proven","promise.c1.b":"A karat certificate with every piece. Nothing more, nothing less.",
    "promise.c2.t":"Made by Hand","promise.c2.b":"Hammer, file, fire. An atelier, not a factory.",
    "promise.c3.t":"Made for You","promise.c3.b":"A sketch, a conversation, your finger. One piece, made for one person.",
    "promise.c4.t":"Forever","promise.c4.b":"Polishing, resizing, restoration. As it was the day you received it.",

    "col.kicker":"Collections","col.title":"Signature Pieces",
    "col.lede":"Click any piece to see it larger and explore details.",
    "col.ask":"View details →",
    "col.p1.t":"Crescent Necklace","col.p1.c":"Ceremonial Necklace · 22K",
    "col.p2.t":"Solitaire Istanbul","col.p2.c":"Diamond Ring · 18K",
    "col.p3.t":"Sarmaş Bracelet","col.p3.c":"Hand-woven Bracelet · 22K",
    "col.p4.t":"Marble Pendant","col.p4.c":"Halo Pendant · 18K",
    "col.p5.t":"Classic Band","col.p5.c":"Couple's Wedding Bands · 14K",
    "col.p6.t":"Certified Diamond","col.p6.c":"Solitaire · On Request",

    "story.kicker":"Our Story","story.title":"Three generations. <em>One passion.</em>",
    "story.p1":"My grandfather Mehmet Usta opened the atelier in a narrow corner of the Grand Bazaar in 1978. Today it still breathes — through my father's hands, and mine.",
    "story.p2":"To us each piece is a memory: an engagement, a birth, a farewell. When we work the gold we are really working a moment.",
    "story.s1":"Years of craft","story.s2":"Happy clients","story.s3":"Pure gold",
    "story.cta":"Visit Our Atelier",

    "cus.kicker":"Bespoke","cus.title":"Let's bring your vision to life — <em>together</em>.",
    "cus.lede":"A sketch, a word, even a feeling — anything is a beginning. The process takes four short steps.",
    "cus.s1.t":"Conversation","cus.s1.b":"At the atelier or on WhatsApp — style, budget, meaning.",
    "cus.s2.t":"Design","cus.s2.b":"Hand drawing and 3D render. We don't move forward without your approval.",
    "cus.s3.t":"Crafting","cus.s3.b":"By master goldsmiths working only on your piece.",
    "cus.s4.t":"Delivery","cus.s4.b":"Certificate, velvet box, and a lifetime of care.",
    "cus.cta":"Start a Bespoke Conversation",
    "cus.note":"Average response: 30 minutes · 9 am – 8 pm",

    "trust.kicker":"The Atelier Experience","trust.title":"From first step to <em>final</em> velvet box.",
    "trust.c1.t":"The Atelier","trust.c1.b":"In the heart of the Grand Bazaar — by appointment.",
    "trust.c2.t":"One-to-One","trust.c2.b":"Unhurried selection, warm guidance.",
    "trust.c3.t":"Signed Box","trust.c3.b":"Every piece in our signature box, with certificate.",

    "gal.kicker":"Gallery","gal.title":"From the Atelier",
    "gal.cap":"More on",

    "quote.body":"\u201COur engagement ring was made at Altun Atelier. It turned out far more personal than we'd hoped — as if it had been waiting for years.\u201D",
    "quote.who":"Client · Istanbul",

    "con.kicker":"Contact","con.title":"We'd love to <em>meet</em> you.",
    "con.lede":"The atelier is by appointment. Choose the way that suits you best.",
    "con.wa":"+90 5XX XXX XX XX","con.waNote":"Instant reply · 9 am – 8 pm",
    "con.tel":"Phone","con.telNote":"Mon–Sat · 10 am – 7 pm",
    "con.igNote":"New pieces, daily",
    "con.loc":"Atelier","con.addr":"Grand Bazaar, Kalpakçılar St. No:XX",

    "form.title":"Or leave us a short note",
    "form.name":"Name","form.phone":"Phone / WhatsApp","form.interest":"I'm interested in",
    "form.i1":"Bespoke Design","form.i2":"Engagement / Wedding",
    "form.i3":"A Piece from the Collection","form.i4":"Repair / Restoration",
    "form.msg":"Your note","form.send":"Send via WhatsApp",
    "form.note":"Submitting will open WhatsApp with your message pre-filled.",

    "foot.tag":"Handcrafted gold jewelry · Istanbul · 1978",
    "foot.legal":"Each piece is unique · GDPR / KVKK compliant",
    "lb.cta":"Book a Visit →",
  }
};

/* ---------- LANG ---------- */
const langKey = 'altun.lang';
function setLang(lang){
  const dict = i18n[lang]; if(!dict) return;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = dict[el.dataset.i18n];
    if(v != null) el.innerHTML = v;
  });
  const t = dict["meta.title"]; if(t) document.title = t;
  const md = document.querySelector('meta[name="description"]');
  if(md) md.setAttribute('content', dict["meta.desc"]);
  document.querySelectorAll('.lang-btn').forEach(b=>{
    const active = b.dataset.lang === lang;
    b.classList.toggle('is-active', active);
    b.setAttribute('aria-pressed', active);
  });
  try{ localStorage.setItem(langKey, lang); }catch{}
  rewireWhatsApp(lang);
}
document.querySelectorAll('.lang-btn').forEach(b=>{
  b.addEventListener('click', ()=> setLang(b.dataset.lang));
});

/* ---------- WHATSAPP DEEP LINKS ---------- */
function waLink(text){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
function rewireWhatsApp(lang){
  const dict = i18n[lang] || i18n.tr;
  const greet = lang === 'en'
    ? "Hello Altun Atelier, I'd like to ask about: "
    : "Merhaba Altun Atelier, sormak istediğim: ";

  document.getElementById('fabWa').href    = waLink(greet);
  document.getElementById('waMain').href   = waLink(greet);
  document.getElementById('waCustom').href = waLink(
    lang === 'en'
      ? "Hello, I'd like to start a bespoke piece. Here's what I have in mind: "
      : "Merhaba, özel bir tasarım için görüşmek istiyorum. Aklımdaki şu: "
  );

  document.querySelectorAll('[data-wa-msg]').forEach(a=>{
    const titleKey = a.dataset.waMsg;
    const title = dict[titleKey] || '';
    const msg = lang === 'en'
      ? `Hello, I'd like more information about "${title}".`
      : `Merhaba, "${title}" parçası hakkında bilgi almak istiyorum.`;
    a.href = waLink(msg);
    a.target = '_blank';
    a.rel = 'noopener';
  });
}

/* ---------- NAV STICKY ---------- */
const nav = document.getElementById('nav');
const onScroll = ()=> nav.classList.toggle('is-stuck', window.scrollY > 30);
addEventListener('scroll', onScroll, {passive:true}); onScroll();

/* ---------- BURGER ---------- */
const burger = document.querySelector('.burger');
burger?.addEventListener('click', ()=>{
  const open = nav.classList.toggle('menu-open');
  burger.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click', ()=> nav.classList.remove('menu-open'));
});

/* ---------- REVEAL ON SCROLL ---------- */
const revealEls = document.querySelectorAll(
  '.card, .card-prod, .step-li, .tile, .channel, .trust-card, header.max-w-xl, header.max-w-2xl, header.flex, .form-input, blockquote'
);
revealEls.forEach(el => el.setAttribute('data-reveal',''));
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e => e.isIntersecting && (e.target.classList.add('is-in'), io.unobserve(e.target)));
},{threshold:.1, rootMargin:'0px 0px -6% 0px'});
revealEls.forEach(el => io.observe(el));

/* ---------- FORM → WHATSAPP ---------- */
document.getElementById('contactForm')?.addEventListener('submit', e=>{
  e.preventDefault();
  const f = e.currentTarget;
  const lang = document.documentElement.lang || 'tr';
  const labels = lang === 'en'
    ? {n:'Name', p:'Phone', i:'Interest', m:'Message', open:"Hello Altun Atelier, here's my inquiry:"}
    : {n:'İsim', p:'Telefon', i:'İlgi alanı', m:'Mesaj', open:'Merhaba Altun Atelier, talebim:'};
  const text =
`${labels.open}

${labels.n}: ${f.name.value}
${labels.p}: ${f.phone.value}
${labels.i}: ${f.interest.value}
${labels.m}: ${f.message.value}`;
  window.open(waLink(text), '_blank');
});

/* ---------- INIT ---------- */
let initial = 'tr';
try{ initial = localStorage.getItem(langKey) || 'tr'; }catch{}
const url = new URL(location.href);
if(url.searchParams.get('lang') === 'en') initial = 'en';
setLang(initial);

document.getElementById('year').textContent = new Date().getFullYear();


/* ============================================================
   WebGL DISTORTION SLIDER (hero)
   Adapted from /webgl-distortion-slider — fitted to a parent
   container (not viewport), modernized to GSAP 3, with auto-
   advance, pause-on-hover, and i18n-aware slide text.
============================================================ */

/**
 * Boot the hero slider once Three.js, GSAP, imagesLoaded and the
 * source images are all available. Falls back gracefully if any
 * dependency is missing (the first <img> stays visible as a static hero).
 */
function bootHeroSlider(){
  const root = document.getElementById('hero-slider');
  if(!root) return;
  if(typeof THREE === 'undefined' || typeof gsap === 'undefined' || typeof imagesLoaded === 'undefined'){
    return; // libraries not ready / blocked — keep the fallback img visible
  }
  // Respect reduced motion: keep the static hero, skip WebGL entirely.
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const imgs = Array.from(root.querySelectorAll('img.slider-src'));
  if(imgs.length < 2) return;

  imagesLoaded(imgs, ()=>{
    const vertex = `
      varying vec2 vUv;
      void main(){
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`;
    const fragment = `
      varying vec2 vUv;
      uniform sampler2D currentImage;
      uniform sampler2D nextImage;
      uniform float dispFactor;
      void main(){
        vec2 uv = vUv;
        float intensity = 0.35;
        vec4 orig1 = texture2D(currentImage, uv);
        vec4 orig2 = texture2D(nextImage, uv);
        vec4 _curr = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2.r * intensity)));
        vec4 _next = texture2D(nextImage,    vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1.r * intensity)));
        gl_FragColor = mix(_curr, _next, dispFactor);
      }`;

    const renderer = new THREE.WebGLRenderer({ antialias:false, alpha:false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0908, 1);
    renderer.setSize(root.offsetWidth, root.offsetHeight);
    root.appendChild(renderer.domElement);

    // Load textures from the existing <img> tags (works with local files)
    const loader = new THREE.TextureLoader();
    const textures = imgs.map(img => {
      const tex = loader.load(img.getAttribute('src'));
      tex.magFilter = tex.minFilter = THREE.LinearFilter;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return tex;
    });

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0908);

    const camera = new THREE.OrthographicCamera(
      root.offsetWidth / -2, root.offsetWidth / 2,
      root.offsetHeight / 2, root.offsetHeight / -2,
      1, 1000
    );
    camera.position.z = 1;

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        dispFactor:   { value: 0.0 },
        currentImage: { value: textures[0] },
        nextImage:    { value: textures[1] },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
    });

    const geometry = new THREE.PlaneBufferGeometry(root.offsetWidth, root.offsetHeight, 1);
    const mesh = new THREE.Mesh(geometry, mat);
    scene.add(mesh);

    // Hide the source <img>s now that textures are uploaded
    root.classList.add('is-ready');

    // ----- transitions -----
    let current = 0;
    let isAnimating = false;
    const total = imgs.length;
    const titleEl = document.getElementById('slideTitle');
    const metaEl  = document.getElementById('slideMeta');
    const idxEl   = document.getElementById('slideIdx');
    const dots    = Array.from(document.querySelectorAll('.hpag'));

    function go(targetIdx){
      if(isAnimating || targetIdx === current) return;
      isAnimating = true;

      mat.uniforms.nextImage.value = textures[targetIdx];
      mat.uniforms.nextImage.needsUpdate = true;

      gsap.to(mat.uniforms.dispFactor, {
        value: 1, duration: 1.1, ease: 'expo.inOut',
        onComplete(){
          mat.uniforms.currentImage.value = textures[targetIdx];
          mat.uniforms.currentImage.needsUpdate = true;
          mat.uniforms.dispFactor.value = 0;
          current = targetIdx;
          isAnimating = false;
        }
      });

      // Swap text using current i18n dictionary
      const lang = document.documentElement.lang || 'tr';
      const dict = i18n[lang] || i18n.tr;
      const newTitle = dict[`slides.${targetIdx}.title`] || '';
      const newMeta  = dict[`slides.${targetIdx}.meta`]  || '';

      gsap.fromTo(titleEl, {autoAlpha:1, y:0}, {
        autoAlpha:0, y:20, duration:.45, ease:'expo.in',
        onComplete(){
          titleEl.innerHTML = newTitle;
          gsap.to(titleEl, {autoAlpha:1, y:0, duration:.55, ease:'expo.out'});
        }
      });
      gsap.fromTo(metaEl, {autoAlpha:1, y:0}, {
        autoAlpha:0, y:20, duration:.45, ease:'expo.in',
        onComplete(){
          metaEl.innerHTML = newMeta;
          gsap.to(metaEl, {autoAlpha:1, y:0, duration:.55, ease:'expo.out', delay:.05});
        }
      });

      // pagination + counter
      dots.forEach(d => d.classList.toggle('is-active', +d.dataset.slide === targetIdx));
      if(idxEl) idxEl.textContent = String(targetIdx + 1).padStart(2,'0');
    }

    dots.forEach(b => b.addEventListener('click', ()=> go(+b.dataset.slide)));

    // Touch swipe (mobile) — horizontal swipe > 50px triggers next/prev
    let tsX = 0, tsY = 0;
    root.addEventListener('touchstart', e=>{
      tsX = e.touches[0].clientX;
      tsY = e.touches[0].clientY;
    },{passive:true});
    root.addEventListener('touchend', e=>{
      const dx = e.changedTouches[0].clientX - tsX;
      const dy = e.changedTouches[0].clientY - tsY;
      // Only trigger if horizontal swipe dominates and is wide enough
      if(Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50){
        go(dx < 0 ? (current+1)%total : (current-1+total)%total);
      }
    },{passive:true});

    // Auto-advance with pause-on-hover / pause-when-tab-hidden
    let timer = null;
    const INTERVAL = 6000;
    const start = ()=>{ stop(); timer = setInterval(()=> go((current + 1) % total), INTERVAL); };
    const stop  = ()=>{ if(timer){ clearInterval(timer); timer = null; } };
    start();
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    document.addEventListener('visibilitychange', ()=> document.hidden ? stop() : start());

    // Resize: keep canvas + camera in sync with parent
    let resizeTimer;
    window.addEventListener('resize', ()=>{
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(()=>{
        const w = root.offsetWidth, h = root.offsetHeight;
        renderer.setSize(w, h);
        camera.left = w / -2; camera.right = w / 2;
        camera.top  = h / 2;  camera.bottom = h / -2;
        camera.updateProjectionMatrix();
        mesh.geometry.dispose();
        mesh.geometry = new THREE.PlaneBufferGeometry(w, h, 1);
      }, 120);
    });

    // Render loop
    const tick = ()=>{ renderer.render(scene, camera); requestAnimationFrame(tick); };
    tick();
  });
}

// Three.js / GSAP / imagesLoaded are synchronous scripts loaded just before this file,
// so they are already available. Call immediately, or fall back to window.load as a
// safety net in case the browser hasn't executed the preceding scripts yet.
if(typeof THREE !== 'undefined' && typeof gsap !== 'undefined' && typeof imagesLoaded !== 'undefined'){
  bootHeroSlider();
}else{
  window.addEventListener('load', bootHeroSlider);
}

/* ===================== INTRO OVERLAY (WebGL gold raymarcher) ===================== */
// Backdrop: a morphing box↔octahedron raymarcher (after Matthias Hurrle / @atzedent),
// re-skinned via luminance->palette mapping to render gold-on-cream instead of orange-on-black.
// Choreography: shader + wordmark reveal ~3.5s, then fade-out (.85s).
// Click / key / Enter dismiss early. Body scroll-lock prevents hero canvas grabbing gestures.
(function bootIntro(){
  const intro = document.getElementById('intro');
  if(!intro) return;

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let dismissed = false;
  let rafId = 0;

  document.body.style.overflow = 'hidden';

  // ----- WebGL setup (skipped under reduced-motion or if context unavailable) -----
  const canvas = document.getElementById('intro-canvas');
  const gl = canvas && !REDUCED ? canvas.getContext('webgl2') : null;
  let glProgram = null, uTime = null, uRes = null;

  if(gl){
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const vs = `#version 300 es
      in vec2 position;
      void main(){ gl_Position = vec4(position, 0., 1.); }`;

    // Gold-dust cosmos: pure 2D shader, no raymarcher. Multi-layer cell-based
    // star-field gives drifting gold particles with depth parallax. Thin
    // sin-wave filaments cross the field for "gold thread in void" elegance.
    const fs = `#version 300 es
      precision highp float;
      out vec4 fragColor;
      uniform vec2 resolution;
      uniform float time;
      #define T (time*0.35)

      vec2 hash2(vec2 p){
        p = vec2(dot(p, vec2(127.1, 311.7)),
                 dot(p, vec2(269.5, 183.3)));
        return fract(sin(p) * 43758.5453);
      }

      // One layer of drifting gold dust. Each cell of an N×N grid holds one
      // particle whose brightness/size comes from its hash, so most are dim
      // and a few are bright (natural star distribution).
      float dust(vec2 uv, float scale, float radius){
        vec2 g  = uv * scale;
        vec2 c  = floor(g);
        vec2 f  = fract(g) - 0.5;
        vec2 h  = hash2(c);
        // Slow drift per-cell with phase from hash
        vec2 drift = vec2(
          sin(T + h.x * 6.2831) * 0.18,
          cos(T * 0.83 + h.y * 6.2831) * 0.18
        );
        vec2 pos = (h - 0.5) * 0.7 + drift;
        float d  = length(f - pos);
        // Power weighting: most particles dim, rare bright sparks
        float bright  = pow(h.x * h.y, 3.5);
        // Twinkle modulation
        float twinkle = 0.6 + 0.4 * sin(T * 1.7 + (h.x + h.y) * 12.0);
        return smoothstep(radius * (0.4 + bright), 0.0, d) * bright * twinkle;
      }

      // One thin sin-wave filament — like a gold thread floating across
      float filament(vec2 uv, float yOff, float freq, float phase, float thick){
        float y = sin(uv.x * freq + T * phase) * 0.22 + yOff;
        // Soft falloff envelope so threads fade at screen edges
        float env = smoothstep(1.05, 0.4, abs(uv.x));
        return smoothstep(thick, 0.0, abs(uv.y - y)) * env;
      }

      void main(){
        // Normalize so y is -0.5..0.5, x scales with aspect
        vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / resolution.y;

        // Background: very deep onyx with a faint warm bloom toward center
        float bg = smoothstep(1.1, 0.0, length(uv * 1.3));
        vec3 col = mix(vec3(0.006, 0.005, 0.004), vec3(0.045, 0.030, 0.012), bg);

        // Three dust layers at different scales for parallax depth
        float dustSum = 0.0;
        dustSum += dust(uv,                40.0, 0.025) * 0.55;  // distant fine
        dustSum += dust(uv + vec2(13.7, 9.1), 22.0, 0.038) * 0.85;  // mid
        dustSum += dust(uv + vec2(4.3, 21.6), 12.0, 0.060) * 1.30;  // close bright

        // A handful of delicate filaments, varied in frequency / phase / Y
        float threadSum = 0.0;
        threadSum += filament(uv,  0.18,  1.6,  0.40, 0.0035) * 0.55;
        threadSum += filament(uv, -0.12,  2.3, -0.30, 0.0028) * 0.45;
        threadSum += filament(uv,  0.32,  1.0,  0.55, 0.0042) * 0.40;
        threadSum += filament(uv, -0.28,  1.9,  0.35, 0.0030) * 0.50;
        threadSum += filament(uv,  0.05,  3.1, -0.45, 0.0022) * 0.35;

        // Gold + champagne tints
        vec3 gold  = vec3(1.00, 0.78, 0.35);
        vec3 champ = vec3(1.00, 0.92, 0.65);

        col += gold  * dustSum;
        col += champ * threadSum * 0.75;

        // Soft vignette
        col *= 1.0 - 0.30 * pow(length(uv * 1.1), 1.8);

        // Gentle gamma lift
        col = pow(col, vec3(0.92));

        fragColor = vec4(col, 1.0);
      }`;

    const compile = (type, src)=>{
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src); gl.compileShader(sh);
      if(!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(sh));
      return sh;
    };

    glProgram = gl.createProgram();
    gl.attachShader(glProgram, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(glProgram, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(glProgram);

    const verts = new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(glProgram, 'position');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
    uTime = gl.getUniformLocation(glProgram, 'time');
    uRes  = gl.getUniformLocation(glProgram, 'resolution');

    const resize = ()=>{
      const w = window.innerWidth, h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const start = performance.now();
    const tick = (now)=>{
      if(dismissed) return;
      gl.useProgram(glProgram);
      gl.uniform1f(uTime, (now - start) * 0.001);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
  }

  // ----- Dismiss flow -----
  const dismiss = ()=>{
    if(dismissed) return;
    dismissed = true;
    cancelAnimationFrame(rafId);
    intro.classList.add('is-leaving');
    document.body.style.overflow = '';
    setTimeout(()=>{ intro.remove(); }, 900);
  };

  const skipBtn = intro.querySelector('.intro-skip');
  if(skipBtn) skipBtn.addEventListener('click', e=>{ e.stopPropagation(); dismiss(); });
  intro.addEventListener('click', dismiss);
  const onKey = ()=>{ dismiss(); document.removeEventListener('keydown', onKey); };
  document.addEventListener('keydown', onKey);

  setTimeout(dismiss, REDUCED ? 600 : 3700);
})();

/* ===================== LIGHTBOX (product viewer) ===================== */
// Replaces the old WhatsApp redirect on product cards with an in-place zoom
// viewer. Click any product → fullscreen overlay with the photo, title, and
// a soft "Book a Visit" CTA. Arrow keys / swipe / nav buttons cycle through
// the collection. Esc / close button / backdrop click closes.
(function bootLightbox(){
  const lb = document.getElementById('lightbox');
  if(!lb) return;

  const cards = Array.from(document.querySelectorAll('[data-lightbox]'));
  if(!cards.length) return;

  const imgEl   = lb.querySelector('.lb-img');
  const numEl   = lb.querySelector('.lb-num');
  const titleEl = lb.querySelector('.lb-title');
  const catEl   = lb.querySelector('.lb-cat');
  const closeBtn = lb.querySelector('.lb-close');
  const prevBtn  = lb.querySelector('.lb-prev');
  const nextBtn  = lb.querySelector('.lb-next');

  let currentIdx = 0;

  const render = (idx)=>{
    currentIdx = (idx + cards.length) % cards.length;
    const card = cards[currentIdx];
    const lang = document.documentElement.lang || 'tr';
    const dict = (typeof i18n !== 'undefined' && i18n[lang]) || {};

    imgEl.classList.remove('is-loaded');
    imgEl.src = card.dataset.img || '';
    imgEl.alt = dict[card.dataset.i18nTitle] || '';
    imgEl.onload = ()=> imgEl.classList.add('is-loaded');

    numEl.textContent   = `N°${String(currentIdx + 1).padStart(2,'0')}`;
    titleEl.textContent = dict[card.dataset.i18nTitle] || '';
    catEl.textContent   = dict[card.dataset.i18nCat]   || '';
  };

  const open = (idx)=>{
    render(idx);
    lb.hidden = false;
    // next frame so the [hidden]→display:flex transition can animate
    requestAnimationFrame(()=> lb.classList.add('is-open'));
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = ()=>{
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(()=>{ lb.hidden = true; imgEl.src = ''; }, 350);
  };

  const next = ()=> render(currentIdx + 1);
  const prev = ()=> render(currentIdx - 1);

  // Wire product cards
  cards.forEach((card, i)=>{
    card.addEventListener('click', e=>{
      e.preventDefault();
      open(i);
    });
  });

  // Controls
  closeBtn.addEventListener('click', close);
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  // Backdrop click (but not stage clicks)
  lb.addEventListener('click', e=>{
    if(e.target === lb) close();
  });

  // CTA scrolls to contact and closes
  lb.querySelector('.lb-cta')?.addEventListener('click', ()=> close());

  // Keyboard
  document.addEventListener('keydown', e=>{
    if(lb.hidden) return;
    if(e.key === 'Escape') close();
    else if(e.key === 'ArrowRight') next();
    else if(e.key === 'ArrowLeft')  prev();
  });

  // Touch swipe
  let tsX = 0;
  lb.addEventListener('touchstart', e=>{ tsX = e.touches[0].clientX; }, {passive:true});
  lb.addEventListener('touchend', e=>{
    const dx = e.changedTouches[0].clientX - tsX;
    if(Math.abs(dx) > 50) (dx < 0 ? next : prev)();
  }, {passive:true});
})();

/* ===================== NAV TRANSITION (gold displacement wipe) ===================== */
// Click any in-page nav link → fullscreen displacement shader runs between two
// procedural gold textures while the page smooth-scrolls underneath. Same
// shader formula as the webgl-distortion-slider source, just with synthetic
// canvas2d textures instead of photo files.
(function bootNavTransition(){
  const canvas = document.getElementById('nav-transition');
  if(!canvas || typeof THREE === 'undefined') return;

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const links = Array.from(document.querySelectorAll('a[href^="#"]'))
    .filter(a => {
      const id = a.getAttribute('href').slice(1);
      return id && document.getElementById(id);
    });
  if(!links.length) return;

  // ----- Procedural gold textures (4 patterns, picked in pairs per click) -----
  // Generated once on the main thread (cheap canvas2d) so transitions are
  // instant; no per-click texture work.
  const makeTexture = (drawFn)=>{
    const c = document.createElement('canvas');
    c.width = c.height = 512;
    const ctx = c.getContext('2d');
    drawFn(ctx, 512);
    const tex = new THREE.Texture(c);
    tex.minFilter = tex.magFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
    return tex;
  };

  const palette = {
    onyx:'#0a0908', deepGold:'#6b4a14', midGold:'#a8801f',
    champagne:'#d4af54', bright:'#f4e0a8'
  };

  // ---- Helpers for the four "delicate gold elements in space" patterns ----
  const fillOnyx = (ctx, s)=>{ ctx.fillStyle = palette.onyx; ctx.fillRect(0,0,s,s); };
  const seededRand = (seed)=>{
    // Tiny LCG so each pattern is deterministic per page-load
    let x = seed;
    return ()=>{ x = (x*9301 + 49297) % 233280; return x/233280; };
  };

  const patterns = [
    // 1 — Radial gold rays from center (thin filaments, dark void)
    (ctx, s)=>{
      fillOnyx(ctx, s);
      const cx = s/2, cy = s/2;
      const rng = seededRand(11);
      ctx.lineCap = 'round';
      for(let i=0; i<48; i++){
        const a = (i / 48) * Math.PI * 2 + rng()*0.04;
        const len = s*0.42 * (0.4 + rng()*0.6);
        const grad = ctx.createLinearGradient(cx, cy, cx + Math.cos(a)*len, cy + Math.sin(a)*len);
        grad.addColorStop(0,   'rgba(244,224,168,0)');
        grad.addColorStop(0.3, 'rgba(212,175,84,0.35)');
        grad.addColorStop(1,   'rgba(168,128,31,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth   = 0.8 + rng()*1.2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a)*len, cy + Math.sin(a)*len);
        ctx.stroke();
      }
    },

    // 2 — Diagonal gold filaments + dust particles
    (ctx, s)=>{
      fillOnyx(ctx, s);
      const rng = seededRand(23);
      // Thin diagonal threads
      ctx.lineCap = 'round';
      for(let i=0; i<14; i++){
        const y0 = rng()*s;
        const y1 = y0 + (rng()-0.5)*s*0.4;
        const grad = ctx.createLinearGradient(0, y0, s, y1);
        grad.addColorStop(0,   'rgba(212,175,84,0)');
        grad.addColorStop(0.5, 'rgba(244,224,168,0.55)');
        grad.addColorStop(1,   'rgba(212,175,84,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth   = 0.6 + rng()*1.4;
        ctx.beginPath();
        ctx.moveTo(0, y0);
        ctx.bezierCurveTo(s*0.33, y0 + (rng()-0.5)*30, s*0.66, y1 + (rng()-0.5)*30, s, y1);
        ctx.stroke();
      }
      // Dust
      for(let i=0; i<160; i++){
        const r = rng()*1.4 + 0.3;
        ctx.fillStyle = `rgba(244,224,168,${0.2 + rng()*0.5})`;
        ctx.beginPath();
        ctx.arc(rng()*s, rng()*s, r, 0, Math.PI*2);
        ctx.fill();
      }
    },

    // 3 — Crossed sin-wave filaments (kintsugi-inspired)
    (ctx, s)=>{
      fillOnyx(ctx, s);
      const rng = seededRand(37);
      ctx.lineCap = 'round';
      for(let i=0; i<8; i++){
        const yOff   = (i/7) * s;
        const amp    = 20 + rng()*60;
        const period = 1.5 + rng()*2.5;
        const phase  = rng() * Math.PI * 2;
        const grad = ctx.createLinearGradient(0, 0, s, 0);
        grad.addColorStop(0,   'rgba(212,175,84,0)');
        grad.addColorStop(0.5, `rgba(244,224,168,${0.35 + rng()*0.3})`);
        grad.addColorStop(1,   'rgba(212,175,84,0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth   = 0.7 + rng()*1.0;
        ctx.beginPath();
        for(let x=0; x<=s; x+=4){
          const y = yOff + Math.sin(x/s * Math.PI * 2 * period + phase) * amp;
          if(x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      // Sparkle accents at filament intersections
      for(let i=0; i<40; i++){
        ctx.fillStyle = `rgba(253,250,242,${0.4 + rng()*0.5})`;
        ctx.beginPath();
        ctx.arc(rng()*s, rng()*s, 0.6 + rng()*1.0, 0, Math.PI*2);
        ctx.fill();
      }
    },

    // 4 — Pure gold dust field (constellation-like)
    (ctx, s)=>{
      fillOnyx(ctx, s);
      const rng = seededRand(53);
      // Very faint warm bloom in center
      const bloom = ctx.createRadialGradient(s/2, s/2, 0, s/2, s/2, s*0.55);
      bloom.addColorStop(0, 'rgba(168,128,31,0.18)');
      bloom.addColorStop(1, 'rgba(168,128,31,0)');
      ctx.fillStyle = bloom; ctx.fillRect(0,0,s,s);
      // Three particle layers (faint big, mid, sharp tiny)
      for(let layer=0; layer<3; layer++){
        const count   = [60, 110, 220][layer];
        const maxR    = [2.4, 1.4, 0.7][layer];
        const opacity = [0.35, 0.55, 0.80][layer];
        for(let i=0; i<count; i++){
          const r = 0.2 + rng()*maxR;
          ctx.fillStyle = `rgba(244,224,168,${opacity * (0.3 + rng()*0.7)})`;
          ctx.beginPath();
          ctx.arc(rng()*s, rng()*s, r, 0, Math.PI*2);
          ctx.fill();
        }
      }
    },
  ];

  const textures = patterns.map(p => makeTexture(p));

  // ----- Three.js setup (orthographic, full-bleed plane) -----
  let renderer, scene, camera, mesh, mat;
  const initThree = ()=>{
    renderer = new THREE.WebGLRenderer({ canvas, antialias:false, alpha:true });
    renderer.setPixelRatio(Math.min(1.5, window.devicePixelRatio || 1));
    sizeRenderer();

    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    mat = new THREE.ShaderMaterial({
      uniforms: {
        dispFactor:   { value: 0.0 },
        currentImage: { value: textures[0] },
        nextImage:    { value: textures[1] },
      },
      vertexShader: `
        varying vec2 vUv;
        void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
      `,
      // Same displacement formula as the webgl-distortion-slider source
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D currentImage;
        uniform sampler2D nextImage;
        uniform float dispFactor;
        void main(){
          vec2 uv = vUv;
          float intensity = 0.35;
          vec4 orig1 = texture2D(currentImage, uv);
          vec4 orig2 = texture2D(nextImage, uv);
          vec4 cur  = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2.r * intensity)));
          vec4 nxt  = texture2D(nextImage,    vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1.r * intensity)));
          gl_FragColor = mix(cur, nxt, dispFactor);
        }
      `,
      transparent: true,
    });

    mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), mat);
    scene.add(mesh);
  };

  const sizeRenderer = ()=>{
    if(!renderer) return;
    renderer.setSize(window.innerWidth, window.innerHeight, false);
  };
  window.addEventListener('resize', sizeRenderer);

  // ----- Transition runner -----
  let running = false;

  const runTransition = (targetEl)=>{
    if(running) return;
    running = true;

    if(!renderer) initThree();

    // Pick two distinct random patterns
    const a = Math.floor(Math.random() * textures.length);
    let b = Math.floor(Math.random() * textures.length);
    if(b === a) b = (b + 1) % textures.length;
    mat.uniforms.currentImage.value = textures[a];
    mat.uniforms.nextImage.value    = textures[b];
    mat.uniforms.dispFactor.value   = 0;

    canvas.classList.add('is-running');

    // Smooth-scroll the page underneath while the wipe covers the viewport
    targetEl.scrollIntoView({ behavior:'smooth', block:'start' });

    // Tween dispFactor 0 → 1 over 750ms with easeInOutExpo
    const dur = 750;
    const start = performance.now();
    const easeInOutExpo = t => t === 0 ? 0 : t === 1 ? 1
      : t < 0.5 ? Math.pow(2, 20*t - 10) / 2
      :          (2 - Math.pow(2, -20*t + 10)) / 2;

    const tick = (now)=>{
      const t = Math.min(1, (now - start) / dur);
      mat.uniforms.dispFactor.value = easeInOutExpo(t);
      renderer.render(scene, camera);
      if(t < 1){
        requestAnimationFrame(tick);
      } else {
        // Hold one frame at full state, then fade out the canvas
        setTimeout(()=>{
          canvas.classList.remove('is-running');
          // CSS opacity transition is .25s — release lock just after
          setTimeout(()=>{ running = false; }, 260);
        }, 80);
      }
    };
    requestAnimationFrame(tick);
  };

  // ----- Wire nav links -----
  links.forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if(!target) return;
      // Skip transition for reduced-motion or while another wipe is running
      if(REDUCED){
        // Native smooth-scroll, no shader
        e.preventDefault();
        target.scrollIntoView({ behavior:'smooth', block:'start' });
        return;
      }
      e.preventDefault();
      // Close mobile menu if open (nav burger logic toggles .menu-open)
      document.getElementById('nav')?.classList.remove('menu-open');
      runTransition(target);
    });
  });
})();

/* ==================== PARALLAX BACKGROUND ==================== */
(function(){
  const bg = document.getElementById('kintsugi-bg');
  if(!bg) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;

  function update(){
    /* Positive offset = image shifts down = top of image stays visible longer
       = background appears to move downward with the scroll */
    const offset = window.scrollY * 0.18;
    bg.style.backgroundPositionY = 'calc(50% + ' + offset + 'px)';
    ticking = false;
  }

  window.addEventListener('scroll', function(){
    if(!ticking){
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();

