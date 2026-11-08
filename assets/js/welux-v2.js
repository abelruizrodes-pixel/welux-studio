/* WeLux Hub — rediseño v2: efectos, parallax, vídeo del hero, botón único de
   idiomas, sección de invitaciones digitales, footer completo y selector de
   paleta provisional (5 paletas, se recuerda en localStorage). Sin dependencias. */
(function () {
  'use strict';
  var lang = (document.documentElement.lang || 'es').slice(0, 2).toLowerCase();
  var T = {
    es: { inv: 'Invitaciones', invTitle: 'Invitaciones digitales', invText: 'Landing pages como invitación digital para tus eventos: bodas, cumpleaños y otras celebraciones. También para ocasiones no festivas: con respeto y sobriedad, te ayudamos a compartir la información con tus seres queridos.', invCta: 'Crear mi invitación con ConCompás', legal: 'Aviso legal', priv: 'Privacidad', terms: 'Términos', cook: 'Cookies', contact: 'Contacto', follow: 'Síguenos', rights: 'Todos los derechos reservados.', palTitle: 'Paleta provisional — prueba una y dinos cuál te gusta', palSub: 'Las 5 propuestas del archivo. Sin aplicar todavía: la paleta actual sigue por defecto. Tu elección se recuerda en este navegador.' },
    en: { inv: 'Invitations', invTitle: 'Digital invitations', invText: 'Landing pages as a digital invitation for your events: weddings, birthdays and other celebrations. Also for non-festive occasions: with respect and restraint, we help you share the information with your loved ones.', invCta: 'Create my invitation with ConCompás', legal: 'Legal notice', priv: 'Privacy', terms: 'Terms', cook: 'Cookies', contact: 'Contact', follow: 'Follow us', rights: 'All rights reserved.', palTitle: 'Provisional palette — try one and tell us which you like', palSub: 'The 5 proposals. Nothing applied yet: the current palette stays by default. Your choice is remembered in this browser.' },
    fr: { inv: 'Invitations', invTitle: 'Invitations numériques', invText: 'Des landing pages comme invitation numérique pour vos événements : mariages, anniversaires et autres célébrations. Aussi pour les occasions non festives : avec respect et sobriété, nous vous aidons à partager les informations avec vos proches.', invCta: 'Créer mon invitation avec ConCompás', legal: 'Mentions légales', priv: 'Confidentialité', terms: 'Conditions', cook: 'Cookies', contact: 'Contact', follow: 'Suivez-nous', rights: 'Tous droits réservés.', palTitle: 'Palette provisoire — essayez-en une et dites-nous laquelle vous préférez', palSub: 'Les 5 propositions. Rien n’est encore appliqué : la palette actuelle reste par défaut. Votre choix est mémorisé dans ce navigateur.' },
    de: { inv: 'Einladungen', invTitle: 'Digitale Einladungen', invText: 'Landingpages als digitale Einladung für Ihre Veranstaltungen: Hochzeiten, Geburtstage und andere Feiern. Auch für nicht festliche Anlässe: mit Respekt und Zurückhaltung helfen wir Ihnen, die Informationen mit Ihren Liebsten zu teilen.', invCta: 'Meine Einladung mit ConCompás erstellen', legal: 'Impressum', priv: 'Datenschutz', terms: 'AGB', cook: 'Cookies', contact: 'Kontakt', follow: 'Folgen Sie uns', rights: 'Alle Rechte vorbehalten.', palTitle: 'Vorläufige Palette — probieren Sie eine aus und sagen Sie uns, welche Ihnen gefällt', palSub: 'Die 5 Vorschläge. Noch nichts angewendet: Die aktuelle Palette bleibt standardmäßig. Ihre Wahl wird in diesem Browser gespeichert.' },
    pt: { inv: 'Convites', invTitle: 'Convites digitais', invText: 'Landing pages como convite digital para os seus eventos: casamentos, aniversários e outras celebrações. Também para ocasiões não festivas: com respeito e sobriedade, ajudamos a partilhar a informação com os seus entes queridos.', invCta: 'Criar o meu convite com a ConCompás', legal: 'Aviso legal', priv: 'Privacidade', terms: 'Termos', cook: 'Cookies', contact: 'Contacto', follow: 'Siga-nos', rights: 'Todos os direitos reservados.', palTitle: 'Paleta provisória — experimente uma e diga-nos de qual gosta', palSub: 'As 5 propostas. Nada aplicado ainda: a paleta atual mantém-se por predefinição. A sua escolha fica guardada neste navegador.' },
    lu: { inv: 'Invitatiounen', invTitle: 'Digital Invitatiounen', invText: 'Landing Pages als digital Invitatioun fir Är Evenementer: Hochzäiten, Gebuertsdagen an aner Feieren. Och fir net-festlech Geleeënheeten: mat Respekt a Bescheidenheet hëllefe mir Iech, d\'Informatiounen mat Äre Léifsten ze deelen.', invCta: 'Meng Invitatioun mat ConCompás erstellen', legal: 'Impressum', priv: 'Privatsphär', terms: 'Bedingungen', cook: 'Cookies', contact: 'Kontakt', follow: 'Follegt eis', rights: 'All Rechter vorbehalen.', palTitle: 'Provisoresch Palett — probéiert eng aus a sot eis, wéi eng Iech gefällt', palSub: 'Déi 5 Virschléi. nach näischt applizéiert: déi aktuell Palett bleift standard. Är Wiel gëtt an dësem Browser gespäichert.' }
  };
  var t = T[lang] || T.es;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.remove('dark');
  /* Selector de paleta provisional */
  var PALETTES = [
    { id: '0', names: { es: 'Actual', en: 'Current', fr: 'Actuelle', de: 'Aktuell', pt: 'Atual', lu: 'Aktuell' }, colors: ['#fdf7ee', '#b98a3c', '#43301f'], bg: '#fdf7ee' },
    { id: '1', names: { es: 'Hueso y dorado', en: 'Bone & gold', fr: 'Os et doré', de: 'Knochen & Gold', pt: 'Osso e dourado', lu: 'Knach a Gold' }, colors: ['#F7F3EB', '#B08D30', '#141414'], bg: '#F7F3EB' },
    { id: '2', names: { es: 'Bosque', en: 'Forest', fr: 'Forêt', de: 'Wald', pt: 'Floresta', lu: 'Bësch' }, colors: ['#F6F1E7', '#1F4D3A', '#B08D30'], bg: '#F6F1E7' },
    { id: '3', names: { es: 'Vino', en: 'Wine', fr: 'Vin', de: 'Wein', pt: 'Vinho', lu: 'Wäin' }, colors: ['#F8F2E9', '#7A1F1F', '#B08D30'], bg: '#F8F2E9' },
    { id: '4', names: { es: 'Azul noche', en: 'Midnight blue', fr: 'Bleu nuit', de: 'Nachtblau', pt: 'Azul-noite', lu: 'Nuechtblo' }, colors: ['#F5F1E8', '#0E1E2E', '#B08D30'], bg: '#F5F1E8' },
    { id: '5', names: { es: 'Ceniza', en: 'Ash', fr: 'Cendre', de: 'Asche', pt: 'Cinza', lu: 'Äschen' }, colors: ['#F7F4EC', '#6E6A66', '#B08D30'], bg: '#F7F4EC' }
  ];
  function applyPalette(id) {
    id = String(id || '0');
    if (id === '0') { document.documentElement.removeAttribute('data-welux-palette'); try { localStorage.removeItem('welux-palette'); } catch (e) {} }
    else { document.documentElement.setAttribute('data-welux-palette', id); try { localStorage.setItem('welux-palette', id); } catch (e) {} }
    var pal = null;
    PALETTES.forEach(function (p) { if (p.id === id) pal = p; });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta && pal) meta.setAttribute('content', pal.bg);
    document.querySelectorAll('.welux-palette-opt').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-palette') === id)); });
  }
  try { var savedPal = localStorage.getItem('welux-palette'); if (savedPal) applyPalette(savedPal); } catch (e) {}
  /* Header con sombra al hacer scroll */
  var header = document.querySelector('header');
  function onScroll() {
    if (header) header.classList.toggle('welux-scrolled', window.scrollY > 24);
    if (!reduceMotion) parallax();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  /* Parallax ligero del vídeo / imagen del hero */
  var heroMedia = document.querySelector('.welux-hero-video, .welux-video, main header video, main header img');
  function parallax() {
    if (!heroMedia || window.innerWidth < 768) return;
    var y = Math.min(window.scrollY * 0.18, 120);
    heroMedia.style.transform = 'translateY(' + y + 'px) scale(1.06)';
  }
  /* Aparición progresiva al hacer scroll */
  var revealEls = document.querySelectorAll('main section, main article, footer, .welux-cinematic-card, .welux-media-card, .welux-deck-card');
  revealEls.forEach(function (el) { el.classList.add('welux-reveal'); });
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else { revealEls.forEach(function (el) { el.classList.add('is-visible'); }); }
  /* Vídeo del hero: si la página no tiene, se inyecta; si no carga, póster de reserva */
  var poster = '/assets/images/master_cinema_studio_gear.jpg';
  var videoSrc = '/assets/videos/welux-hero-estudio.mp4';
  var video = document.getElementById('welux-hero-video') || document.querySelector('.welux-hero-video');
  if (!video && header) {
    video = document.createElement('video');
    video.id = 'welux-hero-video';
    video.className = 'welux-video welux-hero-video';
    video.autoplay = true; video.muted = true; video.loop = true; video.playsInline = true;
    video.preload = 'metadata'; video.poster = poster; video.src = videoSrc;
    header.insertBefore(video, header.firstChild);
  }
  if (video) {
    if (!video.getAttribute('src')) video.setAttribute('src', videoSrc);
    if (!video.getAttribute('poster')) video.setAttribute('poster', poster);
    video.addEventListener('error', function () { video.classList.add('welux-hero-video--error'); if (header) { header.style.backgroundImage = 'linear-gradient(180deg,rgba(43,28,12,.25),rgba(43,28,12,.62)),url(' + poster + ')'; header.style.backgroundSize = 'cover'; header.style.backgroundPosition = 'center'; } });
    var p = video.play && video.play();
    if (p && p.catch) p.catch(function () {});
  }
  /* Un solo botón flotante de idiomas */
  var floats = document.querySelectorAll('.welux-idioma-flotante');
  floats.forEach(function (el, i) { if (i > 0) el.remove(); });
  if (!document.querySelector('.welux-idioma-flotante')) {
    var wrap = document.createElement('div');
    wrap.className = 'welux-idioma-flotante';
    wrap.innerHTML = '<button class="welux-idioma-btn" type="button" aria-label="Idioma / Language" aria-expanded="false">🌐 <span>' + lang.toUpperCase() + '</span></button><div class="welux-idioma-menu" hidden><a href="/">ES</a><a href="/en/">EN</a><a href="/fr/">FR</a><a href="/de/">DE</a><a href="/pt/">PT</a><a href="/lu/">LU</a></div>';
    document.body.appendChild(wrap);
    var btn = wrap.querySelector('.welux-idioma-btn'), menu = wrap.querySelector('.welux-idioma-menu');
    btn.addEventListener('click', function () { var open = menu.hidden; menu.hidden = !open; btn.setAttribute('aria-expanded', String(open)); });
  }
  /* Enlace a Invitaciones en la navegación principal */
  var nav = document.querySelector('header nav');
  if (nav && !nav.querySelector('a[href="#invitaciones"]')) {
    var a = document.createElement('a'); a.href = '#invitaciones'; a.textContent = t.inv;
    a.className = 'hover:text-[#6b4d2a] transition-colors'; nav.appendChild(a);
  }
  /* Sección de invitaciones digitales (antes del footer) */
  if (!document.getElementById('invitaciones')) {
    var sec = document.createElement('section');
    sec.id = 'invitaciones'; sec.className = 'welux-invitations welux-reveal is-visible';
    sec.innerHTML = '<div style="max-width:72rem;margin:0 auto;padding:2.5rem 1.5rem;text-align:center"><p style="letter-spacing:.22em;text-transform:uppercase;font-size:.72rem;color:#9a6f2b;font-weight:800">WeLux · ConCompás</p><h2 class="font-headline" style="font-size:clamp(1.7rem,4vw,2.4rem);margin:.6rem 0">' + t.invTitle + '</h2><p style="max-width:46rem;margin:0 auto;color:#6f5a44;line-height:1.7">' + t.invText + '</p><p style="margin:1.1rem 0"><span class="welux-invite-chip">💍 Bodas</span> <span class="welux-invite-chip">🎂 Cumpleaños</span> <span class="welux-invite-chip">✨ Celebraciones</span> <span class="welux-invite-chip">🕊️ Funerales</span></p><a class="welux-hero-button welux-hero-button--primary" href="https://www.concompas.com/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:.5rem;background:linear-gradient(180deg,#d9a75f,#a9742f);color:#fff;padding:.9rem 1.6rem;font-weight:800">' + t.invCta + ' ↗</a></div>';
    var footer = document.querySelector('footer');
    if (footer && footer.parentNode) footer.parentNode.insertBefore(sec, footer); else document.body.appendChild(sec);
  }
  /* Footer completo: redes, ConCompás, contacto y legales */
  var footerEl = document.querySelector('footer');
  if (footerEl && !document.getElementById('welux-footer-v2')) {
    var div = document.createElement('div');
    div.id = 'welux-footer-v2';
    div.style.cssText = 'max-width:72rem;margin:0 auto;padding:1.6rem 1.5rem 2rem;border-top:1px solid #eadfc8;text-align:center';
    div.innerHTML = '<p style="margin:.4rem 0"><strong>' + t.follow + '</strong> &nbsp;<a class="welux-social-btn" href="https://www.facebook.com/weluxhub" target="_blank" rel="noopener" aria-label="Facebook Welux">f</a> <a class="welux-social-btn" href="https://www.instagram.com/weluxhub" target="_blank" rel="noopener" aria-label="Instagram Welux">◎</a></p><p style="margin:.4rem 0">✉️ <a href="mailto:info@weluxhub.com">info@weluxhub.com</a> · <a href="https://www.concompas.com/" target="_blank" rel="noopener">ConCompás</a> · <a href="#invitaciones">' + t.inv + '</a></p><p style="margin:.4rem 0;font-size:.85rem"><a href="/legal/aviso-legal.html">' + t.legal + '</a> · <a href="/legal/privacidad.html">' + t.priv + '</a> · <a href="/legal/terminos.html">' + t.terms + '</a> · <a href="/legal/cookies.html">' + t.cook + '</a></p><p style="margin:.4rem 0;font-size:.8rem;color:#8a755c">WeLux Digital Services S.à r.l - S · RCS B313430 · Luxemburgo — ' + t.rights + '</p>';
    footerEl.appendChild(div);
  }
  /* Selector de paleta provisional en el footer */
  if (footerEl && !document.getElementById('welux-palette-picker')) {
    var picker = document.createElement('div');
    picker.className = 'welux-palette-picker'; picker.id = 'welux-palette-picker';
    var h = document.createElement('h3'); h.textContent = '🎨 ' + t.palTitle; picker.appendChild(h);
    var sub = document.createElement('p'); sub.textContent = t.palSub; picker.appendChild(sub);
    PALETTES.forEach(function (pal) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'welux-palette-opt'; b.setAttribute('data-palette', pal.id);
      b.setAttribute('aria-pressed', 'false');
      var dots = document.createElement('span'); dots.className = 'welux-palette-dots';
      pal.colors.forEach(function (c) { var i = document.createElement('i'); i.style.background = c; dots.appendChild(i); });
      var nm = document.createElement('span'); nm.className = 'welux-palette-name'; nm.textContent = pal.names[lang] || pal.names.es;
      b.appendChild(dots); b.appendChild(nm);
      b.addEventListener('click', function () { applyPalette(pal.id); });
      picker.appendChild(b);
    });
    footerEl.appendChild(picker);
    try { var cur = localStorage.getItem('welux-palette') || '0'; applyPalette(cur); } catch (e) { applyPalette('0'); }
  }
  /* Arreglar enlaces legales con href="#" del footer heredado */
  var legalMap = [[/aviso|legal notice|mentions|impressum/i, '/legal/aviso-legal.html'], [/privac|privacy|confidentialit|datenschutz|privatsph/i, '/legal/privacidad.html'], [/t.rminos|terms|conditions|agb|termos|bedingung/i, '/legal/terminos.html'], [/cookies/i, '/legal/cookies.html']];
  document.querySelectorAll('footer a[href="#"]').forEach(function (a) {
    legalMap.forEach(function (pair) { if (pair[0].test(a.textContent)) a.setAttribute('href', pair[1]); });
  });
  onScroll();
})();

/* Vídeos de la home: Luxemburgo en el header, estudio en Studio y fotomatón en Gear.
   El bloque del vídeo del hero de este archivo apuntaba al vídeo del estudio; a
   partir de aquí el header usa el sobrevuelo de Luxemburgo al atardecer, con la
   foto del casco antiguo como póster y reserva, y el vídeo del estudio queda como
   pieza principal de la sección Studio. Los tres se reproducen solos, sin sonido
   y en bucle; si un vídeo no carga, se ve su foto (póster). */
(function () {
  var luxPoster = '/assets/images/luxemburgo-header.jpg';
  var luxSrc = '/assets/videos/welux-hero-luxemburgo.mp4';
  var estudioSrc = '/assets/videos/welux-hero-estudio.mp4';
  var boothSrc = '/assets/videos/welux-hero-photobooth.mp4';

  function playVideo(v) {
    if (!v) { return; }
    var p = v.play && v.play();
    if (p && p.catch) { p.catch(function () {}); }
  }

  function makeVideo(src, poster, label) {
    var v = document.createElement('video');
    v.setAttribute('src', src);
    v.setAttribute('poster', poster);
    v.setAttribute('aria-label', label);
    v.autoplay = true;
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.preload = 'metadata';
    return v;
  }

  function swapImgForVideo(img, src, label) {
    if (!img || !img.parentNode) { return null; }
    var holder = img.closest ? (img.closest('picture') || img) : img;
    if (!holder.parentNode) { return null; }
    var v = makeVideo(src, img.currentSrc || img.src, label);
    v.className = 'welux-section-video ' + (holder.className || '') + ' ' + (img.className || '');
    holder.parentNode.replaceChild(v, holder);
    playVideo(v);
    return v;
  }

  function wireSectionVideos() {
    if (!document.querySelector('video[src*="welux-hero-estudio"]')) {
      var studioImg = document.querySelector('img[src*="master_cinema_studio_gear"]');
      if (studioImg) {
        swapImgForVideo(studioImg, estudioSrc, 'Estudio de cine WeLux');
      } else {
        var studioTitle = document.getElementById('welux-studio-b2b');
        if (studioTitle && studioTitle.parentNode && /^H[123]$/.test(studioTitle.tagName)) {
          var sv = makeVideo(estudioSrc, '/assets/images/master_cinema_studio_gear.jpg', 'Estudio de cine WeLux');
          sv.className = 'welux-section-video';
          studioTitle.parentNode.insertBefore(sv, studioTitle.nextSibling);
          playVideo(sv);
        }
      }
    }
    if (!document.querySelector('video[src*="welux-hero-photobooth"]')) {
      var boothImg = document.querySelector('img[src*="photo-camera-transparent"]');
      if (boothImg) {
        swapImgForVideo(boothImg, boothSrc, 'Fotomatón WeLux');
      }
    }
  }

  /* Header: el vídeo de Luxemburgo con la foto del casco antiguo como póster. */
  var heroVideo = document.getElementById('welux-hero-video');
  var heroBox = document.querySelector('.welux-hero-video');
  if (!heroVideo && heroBox) {
    heroVideo = makeVideo(luxSrc, luxPoster, 'Casco antiguo de Luxemburgo al atardecer');
    heroVideo.id = 'welux-hero-video';
    heroVideo.className = 'welux-hero-video';
    heroBox.appendChild(heroVideo);
  }
  if (heroVideo) {
    heroVideo.setAttribute('src', luxSrc);
    heroVideo.setAttribute('poster', luxPoster);
    heroVideo.preload = 'metadata';
    heroVideo.load();
    playVideo(heroVideo);
  }
  if (heroBox && !heroBox.querySelector('img.welux-hero-photo')) {
    var photo = document.createElement('img');
    photo.className = 'welux-hero-photo';
    photo.src = luxPoster;
    photo.alt = '';
    photo.setAttribute('fetchpriority', 'high');
    heroBox.insertBefore(photo, heroBox.firstChild);
  }

  wireSectionVideos();
  window.addEventListener('load', wireSectionVideos);
})();

/* Home ligera y concisa, paletas, botón de idiomas y efectos (2026-11-08).
   - Las paletas se aplican además como variables en línea en <html>, para que
     el cambio se note al instante en toda la página (fondo, títulos, botones,
     cabecera, tarjetas) y se mantenga al recargar (localStorage).
   - La home queda en: hero con vídeo, titular corto, una frase corta, cuatro
     botones concisos y las tarjetas de las divisiones limpias; el FAQ pesado de
     invitaciones, el concierge, las listas de checks, los filtros, los KPIs y
     la pista de desplazamiento quedan fuera de la vista en las homes.
   - El botón flotante de idiomas queda siempre visible abajo a la derecha,
     en todas las páginas que cargan este script.
   - Animación de aparición al hacer scroll (con red de seguridad) y banda
     marquee suave bajo el hero de las homes. */
(function () {
  var VARS = ['--p-bg', '--p-bg2', '--p-card', '--p-ink', '--p-ink-soft', '--p-heading', '--p-accent', '--p-accent-deep', '--p-accent-soft', '--p-gold', '--p-btn-from', '--p-btn-to', '--p-btn-text', '--p-header-bg', '--p-border'];

  function syncPaletteVars() {
    var cs = getComputedStyle(document.documentElement);
    var root = document.documentElement.style;
    VARS.forEach(function (k) { var v = cs.getPropertyValue(k); if (v) root.setProperty(k, v.trim()); });
  }

  function fixPaletteNote() {
    var sec = document.querySelector('.welux-palette-picker');
    if (!sec) return;
    var best = null;
    var nodes = sec.querySelectorAll('p, div, span');
    for (var i = 0; i < nodes.length; i++) {
      var t = nodes[i].textContent || '';
      if (t.indexOf('Sin aplicar') !== -1 && nodes[i].children.length === 0) {
        if (!best || t.length < best.textContent.length) best = nodes[i];
      }
    }
    if (best) best.textContent = 'Se aplica al instante en toda la página y se guarda en este navegador.';
  }

  function isHome() {
    var p = location.pathname.replace(/\/+$/, '');
    return p === '' || p === '/en' || p === '/fr' || p === '/de' || p === '/pt' || p === '/lu';
  }

  function langPrefix() {
    var p = location.pathname;
    if (p.indexOf('/en/') === 0 || p === '/en') return '/en';
    if (p.indexOf('/fr/') === 0 || p === '/fr') return '/fr';
    if (p.indexOf('/de/') === 0 || p === '/de') return '/de';
    if (p.indexOf('/pt/') === 0 || p === '/pt') return '/pt';
    if (p.indexOf('/lu/') === 0 || p === '/lu') return '/lu';
    return '';
  }

  /* Oculta el bloque (sección o contenedor de nivel superior) de un titular. */
  function hideBlock(el) {
    if (!el) return;
    var n = el;
    while (n && n.parentElement) {
      if (n.tagName === 'SECTION' || n.tagName === 'ARTICLE') break;
      var p = n.parentElement;
      if (p.tagName === 'MAIN' || (p.className && String(p.className).indexOf('max-w-7xl') !== -1)) break;
      n = p;
    }
    if (!n || n.tagName === 'MAIN') return;
    if (n.className && String(n.className).indexOf('max-w-7xl') !== -1) return;
    n.style.display = 'none';
  }

  function lightenHome() {
    if (!isHome()) return;
    var hero = document.querySelector('.welux-hero-video');
    var heroHeader = hero && hero.nextElementSibling;
    if (heroHeader && heroHeader.tagName !== 'HEADER') heroHeader = null;
    /* Invitaciones / ConCompás con su FAQ pesado: fuera de la home. */
    var inv = document.getElementById('welux-invitaciones');
    if (inv) inv.style.display = 'none';
    /* Concierge y orientación: fuera de la home. */
    var heads = document.querySelectorAll('h2, h3');
    for (var i = 0; i < heads.length; i++) {
      if (/concierge/i.test(heads[i].textContent)) hideBlock(heads[i]);
    }
    if (heroHeader) {
      /* Sin la cuadrícula de KPIs. */
      var grids = heroHeader.querySelectorAll('.grid');
      for (var g = 0; g < grids.length; g++) {
        if (/Proyect|Project|Projet|Entreg|Event|vén|Fond|Deliver|Livr|Veranstaltung/i.test(grids[g].textContent)) grids[g].style.display = 'none';
      }
      /* Sin la barra de filtros ni sus píldoras. */
      var filterDivs = heroHeader.querySelectorAll('div');
      for (var l = 0; l < filterDivs.length; l++) {
        if (/FILTR|FILTER/i.test(filterDivs[l].textContent) && filterDivs[l].textContent.length < 80) {
          filterDivs[l].style.display = 'none';
          if (filterDivs[l].nextElementSibling) filterDivs[l].nextElementSibling.style.display = 'none';
        }
      }
      /* Sin el párrafo largo: queda la frase corta del titular. */
      var paras = heroHeader.querySelectorAll('p');
      for (var q = 0; q < paras.length; q++) {
        if (paras[q].className.indexOf('text-white/70') !== -1) paras[q].style.display = 'none';
      }
      /* Botones concisos con estilo, justo bajo la frase corta. */
      if (!heroHeader.querySelector('.welux-hero-ctas')) {
        var lang = (document.documentElement.lang || 'es').slice(0, 2).toLowerCase();
        var pre = langPrefix();
        var ctaLabels = {
          es: ['Ver Studio', 'Buscar trabajo', 'Ver equipo', 'Escríbenos'],
          en: ['View Studio', 'Find work', 'See gear', 'Write to us'],
          fr: ['Voir le Studio', 'Trouver un emploi', 'Voir le matériel', 'Écrivez-nous'],
          de: ['Studio ansehen', 'Job finden', 'Ausrüstung ansehen', 'Schreiben Sie uns'],
          pt: ['Ver Studio', 'Procurar trabalho', 'Ver equipamento', 'Escreva-nos'],
          lu: ['Studio kucken', 'Aarbecht sichen', 'Ausrüstung kucken', 'Schreift eis']
        };
        var t = ctaLabels[lang] || ctaLabels.es;
        var hrefs = [pre + '/studio/', pre + '/careers/', pre + '/gear/', 'mailto:info@weluxhub.com'];
        var box = document.createElement('div');
        box.className = 'welux-hero-ctas';
        box.style.cssText = 'display:flex;flex-wrap:wrap;gap:.75rem;justify-content:center;margin-top:1.5rem;position:relative;z-index:2';
        for (var k = 0; k < 4; k++) {
          var a = document.createElement('a');
          a.className = 'welux-hero-button ' + (k === 0 ? 'welux-hero-button--primary' : 'welux-hero-button--secondary');
          a.href = hrefs[k];
          a.textContent = t[k];
          box.appendChild(a);
        }
        var anchor = heroHeader.querySelector('p');
        if (anchor && anchor.nextSibling) heroHeader.insertBefore(box, anchor.nextSibling);
        else heroHeader.appendChild(box);
      }
    }
    /* Sin las filas de checks en las tarjetas de las divisiones. */
    var icons = document.querySelectorAll('main .material-symbols-outlined, main [class*="material"]');
    for (var m = 0; m < icons.length; m++) {
      if (icons[m].textContent.indexOf('check_circle') !== -1) {
        var row = icons[m].parentElement;
        if (row) row.style.display = 'none';
      }
    }
    /* Sin las notas de admisión ni de audiencia en las tarjetas. */
    var cards = document.querySelectorAll('main .welux-deck-card, main .welux-cinematic-card');
    for (var s = 0; s < cards.length; s++) {
      var els = cards[s].querySelectorAll('*');
      for (var e = 0; e < els.length; e++) {
        if (/Admisión selectiva|Admission sélective|AUDIENCIA DIANA|TARGET AUDIENCE/i.test(els[e].textContent) && els[e].children.length === 0) els[e].style.display = 'none';
      }
    }
    /* Sin la pista de desplazamiento bajo el carrusel. */
    var hints = document.querySelectorAll('main div, main p, main span');
    for (var h = 0; h < hints.length; h++) {
      var ht = hints[h].textContent || '';
      if (ht.length < 120 && /Desliza|Swipe|Faites défiler|Wischen|Deslize/i.test(ht) && hints[h].children.length === 0) hints[h].style.display = 'none';
    }
    /* Banda marquee suave bajo el hero (solo una vez). */
    if (heroHeader) { var existingMarquee = document.querySelector('.welux-marquee'); if (existingMarquee) { heroHeader.parentElement.insertBefore(existingMarquee, heroHeader.nextSibling); } else {
      var items = ['Luxembourg', 'Madrid', 'Paris', 'Studio B2B', 'Careers', 'Cine Gear', 'ConCompás', 'Fotomatón'];
      var band = document.createElement('div');
      band.className = 'welux-marquee';
      band.setAttribute('aria-hidden', 'true');
      band.style.cssText = 'padding:.7rem 0;border-top:1px solid var(--p-border);border-bottom:1px solid var(--p-border);color:var(--p-accent-deep);opacity:.75';
      var pista = document.createElement('div');
      pista.className = 'welux-marquee-pista';
      var half = items.map(function (w) { return '<span style="font-family:JetBrains Mono,monospace;font-size:11px;letter-spacing:.25em;text-transform:uppercase">' + w + '</span>'; }).join('<span>·</span>');
      pista.innerHTML = half + '<span>·</span>' + half + '<span>·</span>';
      band.appendChild(pista);
      heroHeader.parentElement.insertBefore(band, heroHeader.nextSibling); }
    }
  }

  function initReveal() {
    var els = document.querySelectorAll('main section, main article, .welux-deck-card, .welux-cinematic-card, .welux-media-card');
    for (var i = 0; i < els.length; i++) if (!els[i].classList.contains('welux-reveal')) els[i].classList.add('welux-reveal');
    function showAll() {
      var r = document.querySelectorAll('.welux-reveal');
      for (var j = 0; j < r.length; j++) r[j].classList.add('is-visible');
    }
    if (!('IntersectionObserver' in window)) { showAll(); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    var rev = document.querySelectorAll('.welux-reveal');
    for (var k = 0; k < rev.length; k++) io.observe(rev[k]);
    setTimeout(showAll, 4000);
  }

  function ensureLangButton() {
    var fab = document.querySelector('.welux-idioma-flotante');
    var lang = ((document.documentElement.lang || 'es').slice(0, 2)).toLowerCase();
    var created = false;
    if (!fab) {
      fab = document.createElement('div');
      fab.className = 'welux-idioma-flotante';
      fab.innerHTML = '<button class="welux-idioma-btn" type="button" aria-label="Idioma / Language" aria-expanded="false">🌐 <span>' + lang.toUpperCase() + '</span></button><div class="welux-idioma-menu" hidden><a href="/">ES</a><a href="/en/">EN</a><a href="/fr/">FR</a><a href="/de/">DE</a><a href="/pt/">PT</a><a href="/lu/">LU</a></div>';
      document.body.appendChild(fab);
      created = true;
    }
    if (fab.parentNode !== document.body) document.body.appendChild(fab);
    fab.style.position = 'fixed'; fab.style.right = '16px'; fab.style.bottom = '16px'; fab.style.zIndex = '99999'; fab.style.display = 'flex'; fab.style.visibility = 'visible'; fab.style.opacity = '1';
    var btn = fab.querySelector('.welux-idioma-btn');
    var menu = fab.querySelector('.welux-idioma-menu');
    if (menu) {
      menu.style.position = 'absolute'; menu.style.bottom = 'calc(100% + 10px)'; menu.style.right = '0'; menu.style.flexDirection = 'column'; menu.style.gap = '4px'; menu.style.background = 'var(--p-card, #fffdf8)'; menu.style.border = '1px solid var(--p-border, #eadfc8)'; menu.style.borderRadius = '14px'; menu.style.padding = '6px'; menu.style.boxShadow = '0 12px 28px rgba(30,28,24,.22)'; menu.style.minWidth = '120px';
      var links = menu.querySelectorAll('a');
      for (var i = 0; i < links.length; i++) { links[i].style.display = 'block'; links[i].style.padding = '8px 12px'; links[i].style.borderRadius = '8px'; links[i].style.color = 'var(--p-ink, #43301f)'; links[i].style.textDecoration = 'none'; }
    }
    /* Solo cablea el botón cuando lo crea este bloque; si el botón ya existe,
       conserva su propio cableado original (no duplicar el toggle). */
    if (created && btn && menu) {
      btn.addEventListener('click', function (ev) { ev.stopPropagation(); var open = menu.hidden; menu.hidden = !open; btn.setAttribute('aria-expanded', String(open)); });
    }
    if (btn && menu && !fab.getAttribute('data-welux-close-wired')) {
      fab.setAttribute('data-welux-close-wired', '1');
      document.addEventListener('click', function (ev) { if (!fab.contains(ev.target)) { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); } });
      document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); } });
    }
    /* Marca el idioma activo dentro del menú. */
    var actLinks = fab.querySelectorAll('.welux-idioma-menu a');
    for (var j = 0; j < actLinks.length; j++) {
      var href = actLinks[j].getAttribute('href');
      if (href === '/' + lang + '/' || (lang === 'es' && href === '/')) actLinks[j].setAttribute('aria-current', 'true');
    }
  }

  /* Limpia el vídeo que el bloque del hero inyecta dentro de la cabecera de
     navegación en las páginas sin hueco de vídeo propio (no debe verse una
     tira de vídeo dentro de la barra de navegación). */
  var stray = document.querySelector('body > header > video');
  if (stray) stray.remove();

  document.querySelectorAll('.welux-palette-opt').forEach(function (b) {
    b.addEventListener('click', function () { setTimeout(syncPaletteVars, 0); });
  });
  fixPaletteNote();
  syncPaletteVars();
  lightenHome();
  initReveal();
  ensureLangButton();
  window.addEventListener('load', function () { syncPaletteVars(); lightenHome(); ensureLangButton(); });
})();

/* Corrección: la sección de invitaciones se llama «invitaciones» (id) /
   «welux-invitations» (clase) en el código original, y la nota del selector
   de paletas lleva su texto por idioma. Se oculta también aquí como red de
   seguridad, por si la id usada en el bloque anterior no coincidía. */
(function () {
  function isHome() {
    var p = location.pathname.replace(/\/+$/, '');
    return p === '' || p === '/en' || p === '/fr' || p === '/de' || p === '/pt' || p === '/lu';
  }
  function hideInvitations() {
    var inv = document.getElementById('welux-invitaciones') || document.getElementById('invitaciones') || document.querySelector('.welux-invitations');
    if (inv) inv.style.display = 'none';
  }
  function fixPaletteNote() {
    var sec = document.querySelector('.welux-palette-picker');
    if (!sec) return;
    var sub = sec.querySelector('p');
    if (!sub) return;
    var NOTE = {
      es: 'Se aplica al instante en toda la página y se guarda en este navegador.',
      en: 'It applies instantly across the whole page and is saved in this browser.',
      fr: 'Elle s’applique instantanément à toute la page et est enregistrée dans ce navigateur.',
      de: 'Sie wird sofort auf der ganzen Seite angewendet und in diesem Browser gespeichert.',
      pt: 'Aplica-se instantaneamente em toda a página e fica guardada neste navegador.',
      lu: 'Si gëtt direkt op der ganzer Säit ugewannt a gëtt an dësem Browser gespäichert.'
    };
    var l = (document.documentElement.lang || 'es').slice(0, 2).toLowerCase();
    sub.textContent = NOTE[l] || NOTE.es;
  }
  if (isHome()) hideInvitations();
  fixPaletteNote();
  window.addEventListener('load', function () { if (isHome()) hideInvitations(); fixPaletteNote(); });
})();

/* Corrección de la home ligera: las etiquetas reales de la plantilla usan
   «Impresiones / Pago / 4.6K RAW / SLA» (no «Proyectos / Entregas»), las
   listas de prestaciones de las tarjetas usan otros iconos además de
   check_circle, y el rótulo de filtros en alemán es «FILTERN». */
(function () {
  function isHome() {
    var p = location.pathname.replace(/\/+$/, '');
    return p === '' || p === '/en' || p === '/fr' || p === '/de' || p === '/pt' || p === '/lu';
  }
  function fix() {
    var hero = document.querySelector('.welux-hero-video');
    var hh = hero && hero.nextElementSibling;
    if (hh && hh.tagName === 'HEADER') {
      var grids = hh.querySelectorAll('.grid');
      for (var g = 0; g < grids.length; g++) grids[g].style.display = 'none';
      var divs = hh.querySelectorAll('div');
      for (var d = 0; d < divs.length; d++) {
        if (/FILT/i.test(divs[d].textContent) && divs[d].textContent.length < 80) {
          divs[d].style.display = 'none';
          if (divs[d].nextElementSibling) divs[d].nextElementSibling.style.display = 'none';
        }
      }
    }
    var uls = document.querySelectorAll('main .portal-card ul, main .welux-deck-card ul, main .welux-cinematic-card ul');
    for (var u = 0; u < uls.length; u++) uls[u].style.display = 'none';
  }
  if (isHome()) fix();
  window.addEventListener('load', function () { if (isHome()) fix(); });
})();

/* Seguro anti-duplicados al conectar este archivo con las plantillas: si la
   plantilla ya trae su propio selector de paletas, quita el que crea el
   primer bloque (solo debe quedar uno); y en las homes, quita de la
   navegación el enlace a Invitaciones, porque esa sección queda fuera de
   la vista en la home ligera. */
(function () {
  var pickers = document.querySelectorAll('.welux-palette-picker');
  for (var i = 1; i < pickers.length; i++) pickers[i].remove();
  function isHome() {
    var p = location.pathname.replace(/\/+$/, '');
    return p === '' || p === '/en' || p === '/fr' || p === '/de' || p === '/pt' || p === '/lu';
  }
  if (isHome()) {
    var a = document.querySelector('header nav a[href="#invitaciones"]');
    if (a) a.remove();
  }
  window.addEventListener('load', function () {
    var pk = document.querySelectorAll('.welux-palette-picker');
    for (var j = 1; j < pk.length; j++) pk[j].remove();
  });
})();

/* Hueco de vídeo del hero cuando la plantilla no lo trae: las homes de
   idioma llevan un fondo WebGL y no tienen .welux-hero-video; en ese caso se
   crea el hueco con el vídeo de Luxemburgo antes de la cabecera del hero,
   para que todas las páginas lleven el mismo header con vídeo. */
(function () {
  function heroHeader() {
    var main = document.querySelector('main');
    if (!main) return null;
    var container = main.querySelector('.max-w-7xl');
    if (!container) return null;
    var header = container.querySelector('header');
    return header || null;
  }
  function ensureHeroVideo() {
    if (document.querySelector('.welux-hero-video')) return;
    var header = heroHeader();
    if (!header || !header.parentElement) return;
    var box = document.createElement('div');
    box.className = 'welux-hero-video';
    box.setAttribute('aria-hidden', 'true');
    var v = document.createElement('video');
    v.id = 'welux-hero-video';
    v.setAttribute('src', '/assets/videos/welux-hero-luxemburgo.mp4');
    v.setAttribute('poster', '/assets/images/luxemburgo-header.jpg');
    v.setAttribute('muted', '');
    v.setAttribute('loop', '');
    v.setAttribute('playsinline', '');
    v.setAttribute('autoplay', '');
    v.setAttribute('preload', 'none');
    v.setAttribute('data-video-fondo', 'hero');
    box.appendChild(v);
    header.parentElement.insertBefore(box, header);
    v.load();
    var pr = v.play();
    if (pr && pr.catch) pr.catch(function () {});
  }
  ensureHeroVideo();
  window.addEventListener('load', function () { ensureHeroVideo(); });
})();

/* Corrección: oculta también la fila «audiencia» completa de las tarjetas
   en los demás idiomas (DE «ZIELGRUPPE», FR «AUDIENCE CIBLE», PT
   «PÚBLICO-ALVO», LU «ZIELGRUPP»), no solo su etiqueta, para no dejar
   huérfano el valor. */
(function () {
  function isHome() {
    var p = location.pathname.replace(/\/+$/, '');
    return p === '' || p === '/en' || p === '/fr' || p === '/de' || p === '/pt' || p === '/lu';
  }
  function fix() {
    var cards = document.querySelectorAll('main .portal-card, main .welux-deck-card, main .welux-cinematic-card');
    for (var s = 0; s < cards.length; s++) {
      var els = cards[s].querySelectorAll('*');
      for (var e = 0; e < els.length; e++) {
        if (/AUDIENCIA DIANA|TARGET AUDIENCE|ZIELGRUPPE|AUDIENCE CIBLE|PÚBLICO-?ALVO|ZIELGRUPP/i.test(els[e].textContent) && els[e].children.length === 0) {
          var row = els[e].parentElement;
          if (row && row.textContent.length < 120) row.style.display = 'none';
          else els[e].style.display = 'none';
        }
      }
    }
  }
  if (isHome()) fix();
  window.addEventListener('load', function () { if (isHome()) fix(); });
})();
/* Guardián del vídeo del hero (2026-11-08): el vídeo de Luxemburgo
   debe reproducirse en la home. Reintenta play() varias veces, oculta
   la foto de reserva cuando el vídeo ya tiene fuente y elimina los
   vídeos duplicados de Luxemburgo fuera del hero. */
(function () {
  var LUX = '/assets/videos/welux-hero-luxemburgo.mp4';
  var POSTER = '/assets/images/luxemburgo-header.jpg';
  function heroVideo() {
    return document.querySelector('.welux-hero-video video, video#welux-hero-video');
  }
  function quitarDuplicados() {
    var principal = heroVideo();
    var todos = document.querySelectorAll('video[src*="welux-hero-luxemburgo"]');
    todos.forEach(function (v) {
      if (v !== principal && v.parentNode) { try { v.pause(); } catch (e) {} v.removeAttribute('src'); try { v.load(); } catch (e2) {} v.parentNode.removeChild(v); }
    });
  }
  function asegurar() {
    var v = heroVideo();
    if (!v) return;
    if (!v.getAttribute('src')) v.setAttribute('src', LUX);
    if (!v.getAttribute('poster')) v.setAttribute('poster', POSTER);
    v.muted = true;
    v.classList.remove('welux-hero-video--error');
    var caja = v.closest ? v.closest('.welux-hero-video') : null;
    if (caja) {
      var foto = caja.querySelector('img.welux-hero-photo');
      if (foto) foto.style.display = 'none';
    }
    if (v.paused || v.readyState < 2) {
      var p = v.play && v.play();
      if (p && p.catch) p.catch(function () {});
    }
  }
  function arrancar() {
    quitarDuplicados();
    asegurar();
    [600, 1500, 3000, 6000].forEach(function (ms) {
      setTimeout(function () { quitarDuplicados(); asegurar(); }, ms);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', arrancar);
  } else { arrancar(); }
  window.addEventListener('load', function () { quitarDuplicados(); asegurar(); });
})();
