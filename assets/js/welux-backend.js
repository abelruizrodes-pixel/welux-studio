/* WeLux — backend real, botones, idiomas y regreso (2026-11-08).
 *
 * Formularios -> Worker de Cloudflare + D1: https://api.weluxhub.com/api/lead
 * (codigo del Worker en worker/, despliegue paso a paso en worker/README.md).
 * Este script sustituye al mock handleFormSubmission de Careers: envia de
 * verdad, guarda el dato en D1 (tablas candidaturas, contactos y leads) y
 * el Worker avisa por correo a info@weluxhub.com y a stayarista@gmail.com.
 * Mientras el Worker no este desplegado, el formulario muestra el error real
 * y no finge un envio.
 *
 * Tambien: un solo boton flotante de idiomas (se quitan las barras antiguas
 * y el flotante apunta a la misma pagina en el otro idioma), el texto
 * "Volver a WeLux Hub" / "Back to WeLuxHub" pasa a ser una casita fija
 * abajo a la izquierda hacia la home, los botones de tarjetas sin destino
 * en Studio/Gear llevan al formulario, y Careers estrena foto de fondo en
 * el hero y una tira de fotos reales. Se carga desde welux-v2.js.
 */
(function () {
  'use strict';
  try {
    var API_URL = 'https://api.weluxhub.com/api/lead';
    var LANGS = ['en', 'fr', 'de', 'pt', 'lu'];
    /* Estilos que necesitan estas correcciones (sin tocar la paleta). */
    var css = document.createElement('style');
    css.textContent = '.welux-form-toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:99999;max-width:min(92vw,560px);padding:12px 18px;border-radius:12px;background:#16232e;color:#fff;font-size:15px;line-height:1.45;box-shadow:0 12px 32px rgba(0,0,0,.35)}' +
      '.welux-form-toast--error{background:#7a1f2b}' +
      '.welux-home-fab{position:fixed;left:16px;bottom:16px;z-index:9998;width:52px;height:52px;border-radius:50%;background:#fff;border:1px solid rgba(0,0,0,.12);box-shadow:0 8px 24px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;font-size:26px;text-decoration:none}' +
      '.welux-home-link{font-size:22px;text-decoration:none}' +
      '.welux-careers-hero{background-image:linear-gradient(rgba(8,18,32,.62),rgba(8,18,32,.45)),url(\'/assets/images/luxemburgo-header.jpg\');background-size:cover;background-position:center;color:#fff}' +
      '.welux-careers-hero h1,.welux-careers-hero h2,.welux-careers-hero p,.welux-careers-hero span{color:#fff}' +
      '.welux-careers-galeria{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:24px 0}' +
      '.welux-careers-galeria figure{margin:0;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.12)}' +
      '.welux-careers-galeria img{width:100%;height:180px;object-fit:cover;display:block}' +
      '.welux-careers-galeria figcaption{padding:10px 12px;font-size:14px;background:#fff}' +
      '@media (max-width:640px){.welux-careers-galeria{grid-template-columns:1fr}.welux-home-fab{width:46px;height:46px;font-size:22px}}';
    document.head.appendChild(css);
    function langPrefix() { var p = location.pathname; for (var i = 0; i < LANGS.length; i++) { if (p === '/' + LANGS[i] || p.indexOf('/' + LANGS[i] + '/') === 0) return '/' + LANGS[i]; } return ''; }
    function currentLang() { var p = langPrefix(); return p ? p.slice(1) : 'es'; }
    function homeHref() { return langPrefix() + '/'; }
    function samePageHref(code) {
      var rest = location.pathname;
      for (var i = 0; i < LANGS.length; i++) { if (rest === '/' + LANGS[i]) rest = '/'; else if (rest.indexOf('/' + LANGS[i] + '/') === 0) rest = rest.slice(3); }
      if (code === 'es') return rest || '/';
      return '/' + code + (rest === '/' ? '/' : rest);
    }
    function isCareers() { var p = location.pathname.replace(/\/+$/, ''); return p === '/careers' || p === '/careers.html' || /^\/(en|fr|de|pt|lu)\/careers(\.html)?$/.test(p); }
    function isHomePage() { var p = location.pathname.replace(/\/+$/, ''); return p === '' || LANGS.indexOf(p.slice(1)) >= 0; }
    function showToast(msg, ok) {
      var t = document.createElement('div');
      t.className = 'welux-form-toast' + (ok ? ' welux-form-toast--ok' : ' welux-form-toast--error');
      t.setAttribute('role', 'status');
      t.textContent = msg;
      document.body.appendChild(t);
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 8000);
    }
    function feedback(msg, ok) {
      var fb = document.getElementById('form-feedback');
      if (fb) { fb.hidden = false; fb.style.display = 'block'; fb.textContent = msg; fb.setAttribute('role', 'status'); }
      showToast(msg, ok);
    }
    function pick(obj, keys) { for (var i = 0; i < keys.length; i++) { if (obj[keys[i]] !== undefined && obj[keys[i]] !== null && String(obj[keys[i]]).trim() !== '') return String(obj[keys[i]]).trim(); } return ''; }
    function collect(form) {
      var raw = {}; /* Se lee por id o por name: los formularios del sitio usan id (form-name...) y no siempre name, y FormData ignora los campos sin name. */
      form.querySelectorAll('input, select, textarea').forEach(function (el) { var k = el.name || el.id || ''; if (!k) return; if (el.type === 'checkbox' || el.type === 'radio') { if (el.checked) raw[k] = el.value || 'sí'; return; } if (raw[k] === undefined) raw[k] = el.value; else raw[k] = raw[k] + ', ' + el.value; });
      var tipo = form.getAttribute('data-welux-tipo') || '';
      var id = (form.id || '') + ' ' + (form.getAttribute('name') || '');
      if (!tipo) { if (/candidat|career|formulario/i.test(id)) tipo = 'candidatura'; else if (/contact/i.test(id)) tipo = 'contacto'; else tipo = 'lead'; }
      return {
        tipo: tipo,
        nombre: pick(raw, ['nombre', 'name', 'fullName', 'form-name']),
        email: pick(raw, ['email', 'correo', 'form-email']),
        telefono: pick(raw, ['telefono', 'phone', 'tel', 'form-phone']),
        sector: pick(raw, ['sector', 'form-sector']),
        idiomas: pick(raw, ['idiomas', 'languages', 'form-languages']),
        oferta: pick(raw, ['oferta', 'posicion', 'position']),
        cv_url: pick(raw, ['cv_url', 'cv', 'enlace_cv', 'form-cv']),
        mensaje: pick(raw, ['mensaje', 'message', 'notas', 'notes', 'form-message']),
        pagina: location.href,
        idioma: currentLang(),
        honeypot: pick(raw, ['website', 'url'])
      };
    }
    function enviarFormulario(event) {
      if (event) event.preventDefault();
      var form = event ? (event.target && event.target.tagName === 'FORM' ? event.target : event.currentTarget) : null;
      if (!form) return false;
      if (form.getAttribute('data-welux-enviando') === '1') return false;
      if (typeof form.reportValidity === 'function' && !form.reportValidity()) return false;
      var data = collect(form);
      if (data.honeypot) { feedback('Candidatura recibida. Te escribiremos pronto.', true); form.reset(); return false; }
      if (!data.nombre || !data.email || data.email.indexOf('@') < 0) { feedback('Revisa el nombre y el correo antes de enviar.', false); return false; }
      var btn = form.querySelector('button[type="submit"], input[type="submit"]');
      var btnTxt = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; if (btn.tagName === 'BUTTON') btn.textContent = 'Enviando…'; }
      form.setAttribute('data-welux-enviando', '1');
      fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        .then(function (res) { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json(); })
        .then(function (json) {
          form.removeAttribute('data-welux-enviando');
          if (btn) { btn.disabled = false; if (btn.tagName === 'BUTTON') btn.textContent = btnTxt; }
          if (json && json.ok) { form.reset(); feedback(data.tipo === 'candidatura' ? 'Candidatura enviada. La hemos recibido y el equipo te escribirá pronto.' : 'Mensaje enviado. Gracias, te escribiremos pronto.', true); }
          else { feedback('No se pudo enviar. Inténtalo de nuevo o escríbenos a info@weluxhub.com.', false); }
        })
        .catch(function () {
          form.removeAttribute('data-welux-enviando');
          if (btn) { btn.disabled = false; if (btn.tagName === 'BUTTON') btn.textContent = btnTxt; }
          feedback('El servicio de envío no responde todavía (Worker pendiente de desplegar). Inténtalo de nuevo o escríbenos a info@weluxhub.com.', false);
        });
      return false;
    }
    window.handleFormSubmission = enviarFormulario;
    document.querySelectorAll('form').forEach(function (form) {
      if (form.getAttribute('data-welux-wired')) return;
      form.setAttribute('data-welux-wired', '1');
      form.addEventListener('submit', enviarFormulario);
    });
    document.querySelectorAll('.welux-lang-bar').forEach(function (el) { el.remove(); });
    document.querySelectorAll('.welux-lang-btn').forEach(function (el) { el.remove(); });
    var fabs = document.querySelectorAll('.welux-idioma-flotante');
    fabs.forEach(function (fab, i) { if (i > 0) fab.remove(); });
    var fab = document.querySelector('.welux-idioma-flotante');
    if (fab) {
      fab.querySelectorAll('.welux-idioma-menu a').forEach(function (a) {
        var code = (a.getAttribute('data-lang') || a.textContent || '').trim().toLowerCase();
        var href = a.getAttribute('href') || '';
        var m = href.match(/^\/(en|fr|de|pt|lu)(\/|$)/);
        if (m) code = m[1];
        if (LANGS.indexOf(code) >= 0 || code === 'es') { a.setAttribute('href', samePageHref(code)); a.setAttribute('data-lang', code); }
        if (code === currentLang()) a.setAttribute('aria-current', 'page');
      });
    }
    var oldBack = [];
    document.querySelectorAll('a').forEach(function (a) {
      var t = (a.textContent || '').replace(/\s+/g, ' ').trim();
      if (/volver a welux|back to weluxhub|\u2190\s*WeLux Hub/i.test(t)) oldBack.push(a);
    });
    oldBack.forEach(function (a) {
      var fixedParent = a.closest('div');
      var isFloating = fixedParent && /fixed/.test((fixedParent.getAttribute('style') || '') + ' ' + (fixedParent.className || ''));
      if (isFloating) { if (fixedParent && fixedParent.parentElement) fixedParent.remove(); else a.remove(); }
      else { a.textContent = '\uD83C\uDFE0'; a.setAttribute('aria-label', 'Inicio — WeLux Hub'); a.setAttribute('title', 'Inicio — WeLux Hub'); a.classList.add('welux-home-link'); }
    });
    if (!isHomePage() && !document.querySelector('.welux-home-fab')) {
      var home = document.createElement('a');
      home.className = 'welux-home-fab'; home.href = homeHref();
      home.setAttribute('aria-label', 'Inicio — WeLux Hub'); home.title = 'Inicio — WeLux Hub';
      home.textContent = '\uD83C\uDFE0'; document.body.appendChild(home);
    }
    document.querySelectorAll('#welux-cards .welux-card button').forEach(function (b) {
      b.addEventListener('click', function () {
        setTimeout(function () {
          if (document.querySelector('.welux-detail-open')) return;
          var f = document.querySelector('main form') || document.querySelector('form');
          if (f) { f.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
          else { location.href = homeHref() + 'studio/'; }
        }, 350);
      });
    });
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === '#') { a.setAttribute('href', homeHref()); return; }
      var id = href.slice(1);
      if (id && !document.getElementById(id)) {
        var f = document.querySelector('main form');
        if (f && f.id) a.setAttribute('href', '#' + f.id);
        else a.setAttribute('href', homeHref());
      }
    });
    document.querySelectorAll('button[onclick]').forEach(function (b) {
      var fn = (b.getAttribute('onclick') || '').match(/^([A-Za-z_$][A-Za-z0-9_$]*)\s*\(/);
      if (fn && typeof window[fn[1]] !== 'function') { b.removeAttribute('onclick'); b.setAttribute('data-welux-sin-destino', '1'); }
    });
    /* Contraste de botones y enlaces con fondo propio: el barrido de paleta fija el texto oscuro en linea y lo deja ilegible sobre fondos oscuros (p. ej. la CTA de la cabecera). Se repasa 1,3 s despues porque el barrido vuelve a fijar colores a los 800 ms. */ function contrasteBoton(el) { var c = getComputedStyle(el).backgroundColor; if (!c || c.indexOf('rgba(0, 0, 0, 0)') === 0 || c === 'transparent') return; var m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/); var s = m ? (+m[1]) + (+m[2]) + (+m[3]) : 0; var col = s >= 500 ? '#16232e' : '#fff'; el.style.setProperty('color', col, 'important'); el.querySelectorAll('span, em, strong, i, b').forEach(function (x) { x.style.setProperty('color', col, 'important'); }); } document.querySelectorAll('a, button').forEach(contrasteBoton); setTimeout(function () { document.querySelectorAll('a, button').forEach(contrasteBoton); }, 1300); /* Contraste de los textos: si el color del texto se confunde con su fondo (p. ej. etiquetas blancas sobre tarjetas claras), se pone oscuro o blanco segun el fondo. Sobre fotos no se toca. Se repasa 1,3 s despues por el barrido de paleta. */ function contrasteTexto(el) { var n = el, bg = null; while (n) { var st = getComputedStyle(n); if (st.backgroundImage && st.backgroundImage !== 'none') return; var c = st.backgroundColor; if (c && c.indexOf('rgba(0, 0, 0, 0)') !== 0 && c !== 'transparent') { bg = c; break; } n = n.parentElement; } if (!bg) return; var m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/); if (!m) return; var sb = (+m[1]) + (+m[2]) + (+m[3]); var mt = getComputedStyle(el).color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/); if (!mt) return; var sx = (+mt[1]) + (+mt[2]) + (+mt[3]); if (Math.abs(sx - sb) < 300) el.style.setProperty('color', sb >= 384 ? '#16232e' : '#fff', 'important'); } function repasarContraste() { document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a, button, li, label, strong, em').forEach(contrasteTexto); } repasarContraste(); setTimeout(repasarContraste, 1300); if (isCareers()) {
      var h1 = document.querySelector('main h1');
      var hero = h1 ? (h1.closest('header, section') || h1.parentElement) : null;
      if (hero) {
        hero.classList.add('welux-careers-hero');
        hero.setAttribute('data-welux-media', '1'); /* Contraste de los botones del hero: el barrido de paleta fija el color en linea y lo deja ilegible sobre la foto; se corrige segun la luminosidad del fondo de cada boton. */ hero.querySelectorAll('a').forEach(function (a) { var c = getComputedStyle(a).backgroundColor; if (c.indexOf('rgba(0, 0, 0, 0)') === 0) return; var m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/); var s = m ? (+m[1]) + (+m[2]) + (+m[3]) : 0; a.style.setProperty('color', s >= 500 ? '#16232e' : '#fff', 'important'); }); /* Letras de los textos del hero segun su fondo: las tarjetas claras de estadisticas tenian los numeros blancos sobre blanco. Se repasa 1,3 s despues porque el barrido de paleta vuelve a fijar colores a los 800 ms. */ function textoHero(el) { var n = el, bg = null; while (n && n !== hero) { var c2 = getComputedStyle(n).backgroundColor; if (c2 && c2.indexOf('rgba(0, 0, 0, 0)') !== 0 && c2 !== 'transparent') { bg = c2; break; } n = n.parentElement; } if (!bg) { el.style.setProperty('color', '#fff', 'important'); return; } var m2 = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/); var s2 = m2 ? (+m2[1]) + (+m2[2]) + (+m2[3]) : 0; el.style.setProperty('color', s2 >= 500 ? '#16232e' : '#fff', 'important'); } hero.querySelectorAll('p, span').forEach(textoHero); setTimeout(function () { hero.querySelectorAll('a, p, span').forEach(textoHero); }, 1300);
        document.querySelectorAll('main section').forEach(function (s) { if (s.style.display === 'none' && s.querySelector('form')) s.style.display = ''; });
      }
      var main = document.querySelector('main');
      if (main && hero && !document.querySelector('.welux-careers-galeria')) {
        var gal = document.createElement('section');
        gal.className = 'welux-careers-galeria';
        gal.setAttribute('aria-label', 'WeLux en Luxemburgo');
        gal.innerHTML = '<figure><img src="/assets/images/luxemburgo-header.jpg" alt="Casco antiguo de Luxemburgo al atardecer" loading="lazy"><figcaption>Luxemburgo, nuestro terreno de juego</figcaption></figure>' +
          '<figure><img src="/assets/images/art_director_onset.jpg" alt="Equipo de WeLux trabajando en un rodaje" loading="lazy"><figcaption>En el set, con el equipo</figcaption></figure>' +
          '<figure><img src="/assets/images/social_growth_matrix.jpg" alt="Crecimiento y comunicación en redes" loading="lazy"><figcaption>Crecer también es comunicar</figcaption></figure>';
        hero.parentNode.insertBefore(gal, hero.nextSibling);
      }
    }
  } catch (e) { /* Sin romper la pagina si algo falla */ }
})();
