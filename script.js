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
    "slides.1.title":"Geleneğin <em>en zarif</em> hali.",
    "slides.1.meta":"Hilal Kolye · Tören Koleksiyonu",
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
    "col.lede":"Beğendiğiniz parça için WhatsApp üzerinden bilgi alabilirsiniz.",
    "col.ask":"WhatsApp ile sor →",
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
    "slides.1.title":"Tradition, at its <em>most refined</em>.",
    "slides.1.meta":"Crescent Necklace · Ceremonial",
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
    "col.lede":"Found one you love? Ask us about it on WhatsApp.",
    "col.ask":"Ask on WhatsApp →",
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

    // Original raymarcher, with the final fragColor remapped from luminance into a
    // cream → mid-gold → champagne palette so the geometry reads as molten gold on cream.
    const fs = `#version 300 es
      precision highp float;
      out vec4 fragColor;
      uniform vec2 resolution;
      uniform float time;
      #define T time
      #define S smoothstep

      mat3 rotY(float a){ float c=cos(a),s=sin(a); return mat3(vec3(c,0,s),vec3(0,1,0),vec3(-s,0,c)); }
      float smin(float a,float b,float k){ float h=clamp(.5+.5*(b-a)/k,.0,1.); return mix(b,a,h)-k*h*(1.-h); }
      float box(vec3 p,vec3 s,float r){ p=abs(p)-s; return length(max(vec3(0),p))+min(max(max(p.x,p.y),p.z),.0)-r; }
      float oct(vec3 p,float s){ p=abs(p); return (p.x+p.y+p.z-s)*(1./sqrt(3.)); }
      float rnd(float a){ return fract(sin(a*711.599)*756.839); }
      float curve(float a,float b){ a/=b; return mix(rnd(floor(a)),rnd(floor(a)+1.),pow(S(.0,1.,fract(a)),10.)); }
      float tick(float t,float e){ return floor(t)+pow(S(.0,1.,fract(t)),e); }
      float map(vec3 p){ return smin(box(p,vec3(1),.125), oct(p, 1.8+.25*sin(curve(T,.5))), .125); }
      vec3 dir(vec2 uv,vec3 ro,vec3 target,float zoom){
        vec3 up=vec3(0,1,0), f=normalize(target-ro), r=normalize(cross(up,f)), u=cross(f,r);
        return normalize(f*zoom + uv.x*r + uv.y*u);
      }
      vec3 norm(vec3 p){
        vec2 e=vec2(1e-3,0); float d=map(p);
        return normalize(d - vec3(map(p-e.xyy), map(p-e.yxy), map(p-e.yyx)));
      }

      void main(){
        vec2 uv = (gl_FragCoord.xy - .5*resolution.xy) / min(resolution.x, resolution.y);
        vec3 col = vec3(0);
        vec3 ro = vec3(0, 2.*sin(T*.5)*curve(T*.2,.2), -4);
        ro *= rotY(acos(0.)*sin(tick(T,4.))*(-1.+2.*curve(10.*sin(T)*curve(rnd(uv.y/uv.x)*5.*sin(T),5.),4.)));

        vec3 rd = dir(uv, ro, vec3(0), 1.);
        vec3 p = ro;
        float i = .0, side = 1., at = .0;
        for(; i<50.; i++){
          float d = map(p)*side;
          if(d < 1e-2){
            vec3 n = norm(p)*side;
            vec3 l = normalize(ro - vec3(sin(T), cos(T), 0));
            vec3 r = reflect(rd, n);
            if(dot(l,n) < .0) l = -l;
            vec3 h = normalize(l - r);
            float fres = pow(1.-max(.0, dot(-r, n)), 5.);
            float diff = pow(max(.0, dot(l, n)), 4.);
            float fog  = S(.2, .8, i/80.);
            col += fog + mix(vec3(1,.5+.5*sin(tick(T,5.)),0), vec3(1,1,0), fog*fres)
                        * diff * fres * (.8*pow(max(.0,dot(h,n)),12.) + .6*pow(max(.0,dot(r,n)),28.));
            side = -side;
            vec3 rdo = refract(rd, n, 1.+.45*side);
            if(dot(rdo,rdo) == .0) rdo = reflect(r, n);
            rd = rdo;
            d = 2e-1;
          }
          if(d > 20.) break;
          p += rd*d;
          at += .01*(.01/d);
        }
        col += pow(S(.0,1.,at), 3.);
        col += S(.5, .85, max(.01, i/80.));

        // ---- Re-skin: luminance → cream / mid-gold / champagne ----
        float lum = clamp(dot(col, vec3(.299,.587,.114)), 0., 1.);
        vec3 cream     = vec3(0.985, 0.952, 0.860);
        vec3 midGold   = vec3(0.780, 0.560, 0.180);
        vec3 deepGold  = vec3(0.420, 0.280, 0.060);
        vec3 champagne = vec3(1.000, 0.910, 0.600);

        vec3 c = mix(cream,    midGold,   S(0.00, 0.35, lum));
              c = mix(c,       deepGold,  S(0.20, 0.55, lum));
              c = mix(c,       champagne, S(0.65, 1.00, lum));

        fragColor = vec4(c, 1.);
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
