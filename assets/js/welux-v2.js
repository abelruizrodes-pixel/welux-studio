/* WeLux Hub — rediseño v2: efectos, parallax, vídeo del hero, botón único de
   idiomas, sección de invitaciones digitales y footer completo. Sin dependencias. */
(function () {
  'use strict';
  var lang = (document.documentElement.lang || 'es').slice(0, 2).toLowerCase();
  var T = {
    es: { inv: 'Invitaciones', invTitle: 'Invitaciones digitales', invText: 'Landing pages como invitación digital para tus eventos: bodas, cumpleaños y otras celebraciones. También para ocasiones no festivas: con respeto y sobriedad, te ayudamos a compartir la información con tus seres queridos.', invCta: 'Crear mi invitación con ConCompás', legal: 'Aviso legal', priv: 'Privacidad', terms: 'Términos', cook: 'Cookies', contact: 'Contacto', follow: 'Síguenos', rights: 'Todos los derechos reservados.' },
    en: { inv: 'Invitations', invTitle: 'Digital invitations', invText: 'Landing pages as a digital invitation for your events: weddings, birthdays and other celebrations. Also for non-festive occasions: with respect and restraint, we help you share the information with your loved ones.', invCta: 'Create my invitation with ConCompás', legal: 'Legal notice', priv: 'Privacy', terms: 'Terms', cook: 'Cookies', contact: 'Contact', follow: 'Follow us', rights: 'All rights reserved.' },
    fr: { inv: 'Invitations', invTitle: 'Invitations numériques', invText: 'Des landing pages comme invitation numérique pour vos événements : mariages, anniversaires et autres célébrations. Aussi pour les occasions non festives : avec respect et sobriété, nous vous aidons à partager les informations avec vos proches.', invCta: 'Créer mon invitation avec ConCompás', legal: 'Mentions légales', priv: 'Confidentialité', terms: 'Conditions', cook: 'Cookies', contact: 'Contact', follow: 'Suivez-nous', rights: 'Tous droits réservés.' },
    de: { inv: 'Einladungen', invTitle: 'Digitale Einladungen', invText: 'Landingpages als digitale Einladung für Ihre Veranstaltungen: Hochzeiten, Geburtstage und andere Feiern. Auch für nicht festliche Anlässe: mit Respekt und Zurückhaltung helfen wir Ihnen, die Informationen mit Ihren Liebsten zu teilen.', invCta: 'Meine Einladung mit ConCompás erstellen', legal: 'Impressum', priv: 'Datenschutz', terms: 'AGB', cook: 'Cookies', contact: 'Kontakt', follow: 'Folgen Sie uns', rights: 'Alle Rechte vorbehalten.' },
    pt: { inv: 'Convites', invTitle: 'Convites digitais', invText: 'Landing pages como convite digital para os seus eventos: casamentos, aniversários e outras celebrações. Também para ocasiões não festivas: com respeito e sobriedade, ajudamos a partilhar a informação com os seus entes queridos.', invCta: 'Criar o meu convite com a ConCompás', legal: 'Aviso legal', priv: 'Privacidade', terms: 'Termos', cook: 'Cookies', contact: 'Contacto', follow: 'Siga-nos', rights: 'Todos os direitos reservados.' },
    lu: { inv: 'Invitatiounen', invTitle: 'Digital Invitatiounen', invText: 'Landing Pages als digital Invitatioun fir Är Evenementer: Hochzäiten, Gebuertsdagen an aner Feieren. Och fir net-festlech Geleeënheeten: mat Respekt a Bescheidenheet hëllefe mir Iech, d\'Informatiounen mat Äre Léifsten ze deelen.', invCta: 'Meng Invitatioun mat ConCompás erstellen', legal: 'Impressum', priv: 'Privatsphär', terms: 'Bedingungen', cook: 'Cookies', contact: 'Kontakt', follow: 'Follegt eis', rights: 'All Rechter vorbehalen.' }
  };
  var t = T[lang] || T.es;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.remove('dark');
  /* Header con sombra al hacer scroll */
  var header = document.querySelector('header');
  function onScroll() {
    if (header) header.classList.toggle('welux-scrolled', window.scrollY > 24);
    if (!reduceMotion) parallax();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  /* Parallax ligero del vídeo / imagen del hero */
  var heroMedia = document.querySelector('.welux-hero-video, .welux-video, header video, header img');
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
  /* Arreglar enlaces legales con href="#" del footer heredado */
  var legalMap = [[/aviso|legal notice|mentions|impressum/i, '/legal/aviso-legal.html'], [/privac|privacy|confidentialit|datenschutz|privatsph/i, '/legal/privacidad.html'], [/t.rminos|terms|conditions|agb|termos|bedingung/i, '/legal/terminos.html'], [/cookies/i, '/legal/cookies.html']];
  document.querySelectorAll('footer a[href="#"]').forEach(function (a) {
    legalMap.forEach(function (pair) { if (pair[0].test(a.textContent)) a.setAttribute('href', pair[1]); });
  }
  onScroll();
})();
