/* WeLux — backend real, botones, idiomas y regreso (2026-11-08).
 *
 * Formularios -> Worker de Cloudflare + D1: https://weluxhub-api.yucolaguilar.workers.dev/api/lead
 * (codigo del Worker en worker/, despliegue paso a paso en worker/README.md).
 * Este script sustituye al mock handleFormSubmission de Careers: envia de
 * verdad, guarda el dato en D1 (tablas candidaturas, contactos y leads) y
 * el Worker avisa por correo a info@weluxhub.com y a stayarista@gmail.com.
 * El Worker ya esta desplegado en weluxhub-api.yucolaguilar.workers.dev; si no responde, el formulario muestra el error real
 * y no finge un envio.
 *
 * Tambien: un solo boton flotante de idiomas (se quitan las barras antiguas
 * y el flotante apunta a la misma pagina en el otro idioma), el texto
 * "Volver a WeLux Hub" / "Back to WeLuxHub" pasa a ser un icono SVG de casa fijo
 * abajo a la izquierda hacia la home, los botones de tarjetas sin destino
 * en Studio/Gear llevan al formulario, y Careers estrena foto de fondo en
 * el hero y una tira de fotos reales. Se carga desde welux-v2.js.
 */
(function () {
  'use strict';
  try {
    var API_URL = 'https://weluxhub-api.yucolaguilar.workers.dev/api/lead';
    var LANGS = ['en', 'fr', 'de', 'pt', 'lu'];
    /* Estilos que necesitan estas correcciones (sin tocar la paleta). */
    var css = document.createElement('style');
    css.textContent = '.welux-form-toast{position:fixed;left:50%;top:24px;transform:translateX(-50%);z-index:99999;max-width:min(92vw,560px);padding:12px 18px;border-radius:12px;background:#16232e;color:#fff;font-size:15px;line-height:1.45;box-shadow:0 12px 32px rgba(0,0,0,.35)}' +
      '.welux-form-toast--error{background:#7a1f2b}' +
      '.welux-home-fab{position:fixed;left:16px;bottom:16px;z-index:9998;width:52px;height:52px;border-radius:50%;background:#fff;border:1px solid rgba(0,0,0,.12);box-shadow:0 8px 24px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;font-size:26px;text-decoration:none}' +
      '.welux-home-link{font-size:22px;text-decoration:none}' + '.welux-hero-button{height:auto!important;min-height:44px!important;white-space:normal!important;overflow:visible!important;line-height:1.25!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;text-align:center!important}' + '.welux-hero-button span{white-space:normal!important;overflow:visible!important}' +
      '.welux-careers-hero{background-image:linear-gradient(rgba(8,18,32,.62),rgba(8,18,32,.45)),url(\'/assets/images/luxemburgo-header.jpg\');background-size:cover;background-position:center;color:#fff}' +
      '.welux-careers-hero h1,.welux-careers-hero h2,.welux-careers-hero p,.welux-careers-hero span{color:#fff}' +
      '.welux-careers-galeria{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:24px 0}' +
      '.welux-careers-galeria figure{margin:0;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.12)}' +
      '.welux-careers-galeria img{width:100%;height:180px;object-fit:cover;display:block}' +
      '.welux-careers-galeria figcaption{padding:10px 12px;font-size:14px;background:#fff}' +
      '@media (max-width:640px){.welux-careers-galeria{grid-template-columns:1fr}.welux-home-fab{width:46px;height:46px;font-size:22px}}'+'.welux-dato-puerta{display:inline-block;max-width:560px;padding:14px 16px;border:1px solid rgba(0,0,0,.15);border-radius:12px;background:#fff}.welux-dato-oculto{letter-spacing:2px;font-weight:700}.welux-dato-form{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.welux-dato-form input{flex:1 1 160px;padding:8px 10px;border:1px solid rgba(0,0,0,.25);border-radius:8px;font:inherit}.welux-dato-form button{padding:8px 14px;border:0;border-radius:8px;background:#16232e;color:#fff;font:inherit;cursor:pointer}.welux-dato-privacidad{display:block;font-size:12px;opacity:.75;margin:8px 0 0}.welux-dato-mensaje{display:block;font-size:13px;margin:8px 0 0}.welux-dato-valor{font-weight:700}'+'footer,.welux-footer-v2{background-color:#d8d5ce!important;background-image:none!important}'+'footer *,.welux-footer-v2 *{color:#16232e!important}'+'footer [class*="bg-"],.welux-footer-v2 [class*="bg-"]{background-color:#d8d5ce!important;background-image:none!important}'+'footer [class*="text-"],.welux-footer-v2 [class*="text-"]{color:#16232e!important}'+'footer a,.welux-footer-v2 a{color:#16232e!important}'+'footer a:hover,.welux-footer-v2 a:hover{color:#7a5a1f!important}'+'footer [class*="border"],.welux-footer-v2 [class*="border"]{border-color:rgba(22,35,46,.25)!important}'+'a[class*="ffb95f"],button[class*="ffb95f"],a[class*="f59e0b"],button[class*="f59e0b"]{color:#16232e!important;font-weight:800!important;white-space:normal!important;overflow:visible!important;line-height:1.3!important}'+'.welux-hero-button--primary{color:#fff!important;text-shadow:0 1px 2px rgba(0,0,0,.45)!important}'+'[class*="marquee"]{background-color:#d8d5ce!important;background-image:none!important;padding:.6rem 0!important;line-height:1.5!important}'+'[class*="marquee"] *{color:#16232e!important}'+'.welux-home-fab svg,.welux-home-link svg{display:block}';
    document.head.appendChild(css);/* Quinta vuelta: guarda responsive para móvil y tablet, y tarjetas clicables en toda su superficie. */(function(){'use strict';var st=document.createElement('style');st.textContent='html,body{overflow-x:hidden}img,video,iframe{max-width:100%;height:auto}input,select,textarea{max-width:100%}@media(max-width:768px){.welux-cta-grid,.welux-resena-grid{grid-template-columns:1fr!important}.welux-wa-float{bottom:calc(1rem + env(safe-area-inset-bottom))!important}table{display:block;overflow-x:auto;max-width:100%}}@media(min-width:769px) and (max-width:1024px){.welux-cta-grid{grid-template-columns:1fr 1fr!important}}';document.head.appendChild(st);function activar(){document.querySelectorAll('.welux-card').forEach(function(c){if(c.dataset.qvTarjeta)return;c.dataset.qvTarjeta='1';c.addEventListener('click',function(e){if(e.target.closest('a,button'))return;var t=c.querySelector('a,button');if(t)t.click();});});}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',activar);activar();setTimeout(activar,900);})(); try { var _tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null); var _tn; while (_tn = _tw.nextNode()) { if (_tn.nodeValue.indexOf('24.000') > -1 || _tn.nodeValue.indexOf('24,000') > -1) _tn.nodeValue = _tn.nodeValue.replace(/24\.000 FPS/g, '24 FPS').replace(/24,000 FPS/g, '24 FPS'); } document.querySelectorAll('span, div, strong, b, p').forEach(function (el) { var _t = el.textContent.trim(); if (_t === 'DISPONIBLE' || _t.indexOf('FilmGen5') === 0 || _t.indexOf('REC [RAW') === 0 || _t.indexOf('Seguro de cine incluido') === 0 || _t.indexOf('Calibración') === 0) el.style.whiteSpace = 'nowrap'; }); } catch (e) {}
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
    /* Puerta de seguridad del dato de empresa (2026-11-08): el RCS solo se revela a quien deja nombre y correo; el envio se guarda como lead en el Worker + D1 y avisa al equipo. Sin envio correcto, no se revela. */var DATOS_EMPRESA={rcs:'RCS B313430'};var PUERTA_TXT={es:{intro:'Para ver este dato, dinos quién eres:',nombre:'Tu nombre',correo:'Tu correo electrónico',ver:'Ver datos',priv:'Tu nombre y tu correo solo se usan para registrar tu solicitud y no se comparten con terceros.',enviando:'Enviando…',error:'El servicio de envío no responde todavía. Inténtalo de nuevo o escríbenos a info@weluxhub.com.',revelado:'Dato verificado:'},en:{intro:'To view this detail, tell us who you are:',nombre:'Your name',correo:'Your email',ver:'View details',priv:'Your name and email are only used to register your request and are not shared with third parties.',enviando:'Sending…',error:'The sending service is not responding yet. Please try again or write to info@weluxhub.com.',revelado:'Verified detail:'},fr:{intro:'Pour voir cette donnée, dites-nous qui vous êtes :',nombre:'Votre nom',correo:'Votre e-mail',ver:'Voir les données',priv:'Votre nom et votre e-mail servent uniquement à enregistrer votre demande et ne sont pas partagés avec des tiers.',enviando:'Envoi…',error:'Le service d’envoi ne répond pas encore. Réessayez ou écrivez à info@weluxhub.com.',revelado:'Donnée vérifiée :'},de:{intro:'Um diese Angabe zu sehen, sagen Sie uns, wer Sie sind:',nombre:'Ihr Name',correo:'Ihre E-Mail-Adresse',ver:'Daten ansehen',priv:'Ihr Name und Ihre E-Mail-Adresse werden nur zur Erfassung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.',enviando:'Wird gesendet…',error:'Der Versanddienst antwortet noch nicht. Bitte versuchen Sie es erneut oder schreiben Sie an info@weluxhub.com.',revelado:'Geprüfte Angabe:'},pt:{intro:'Para ver este dado, diga-nos quem é:',nombre:'O seu nome',correo:'O seu e-mail',ver:'Ver dados',priv:'O seu nome e o seu e-mail servem apenas para registar o seu pedido e não são partilhados com terceiros.',enviando:'A enviar…',error:'O serviço de envio ainda não responde. Tente novamente ou escreva para info@weluxhub.com.',revelado:'Dado verificado:'},lu:{intro:'Fir dës Donnée ze gesinn, sot eis, wien Dir sidd:',nombre:'Ären Numm',correo:'Är E-Mail-Adress',ver:'Donnéeë weisen',priv:'Ären Numm an Är E-Mail-Adress ginn nëmme benotzt fir Är Ufro ze registréieren a ginn net un Drëtter weiderginn.',enviando:'Gëtt geschéckt…',error:'De Versandservice äntwert nach net. Probéiert et nach eng Kéier oder schreift un info@weluxhub.com.',revelado:'Verifizéiert Donnée:'}};function idiomaPuerta(){var l=(document.documentElement.lang||'').slice(0,2).toLowerCase();if(l==='es'||LANGS.indexOf(l)>=0)return l;var p=langPrefix();return p?p.slice(1):'es';}function puertaDatos(){var lang=idiomaPuerta();var T=PUERTA_TXT[lang]||PUERTA_TXT.es;document.querySelectorAll('[data-welux-dato]').forEach(function(marcador){if(marcador.getAttribute('data-welux-puerta'))return;marcador.setAttribute('data-welux-puerta','1');var valor=DATOS_EMPRESA[marcador.getAttribute('data-welux-dato')];if(!valor)return;var caja=document.createElement('span');caja.className='welux-dato-puerta';var titulo=document.createElement('span');titulo.textContent=T.intro+' ';var oculto=document.createElement('span');oculto.className='welux-dato-oculto';oculto.textContent='••••••';caja.appendChild(titulo);caja.appendChild(oculto);var fila=document.createElement('span');fila.className='welux-dato-form';var nombre=document.createElement('input');nombre.type='text';nombre.required=true;nombre.placeholder=T.nombre;nombre.setAttribute('aria-label',T.nombre);nombre.autocomplete='name';var correo=document.createElement('input');correo.type='email';correo.required=true;correo.placeholder=T.correo;correo.setAttribute('aria-label',T.correo);correo.autocomplete='email';var boton=document.createElement('button');boton.type='button';boton.textContent=T.ver;fila.appendChild(nombre);fila.appendChild(correo);fila.appendChild(boton);caja.appendChild(fila);var priv=document.createElement('span');priv.className='welux-dato-privacidad';priv.textContent=T.priv;caja.appendChild(priv);var msg=document.createElement('span');msg.className='welux-dato-mensaje';msg.setAttribute('role','status');caja.appendChild(msg);function enviar(){if(!nombre.value.trim()){nombre.reportValidity();return;}if(!correo.value.trim()||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo.value.trim())){correo.reportValidity();return;}boton.disabled=true;boton.textContent=T.enviando;msg.textContent='';fetch(API_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({tipo:'lead',nombre:nombre.value.trim(),email:correo.value.trim(),telefono:'',origen:'puerta-datos-empresa',mensaje:'Solicita ver los datos de empresa (RCS)',pagina:location.pathname,idioma:lang})}).then(function(r){return r.json().then(function(d){return{ok:r.ok,d:d};});}).then(function(res){if(res.ok&&res.d&&res.d.ok){titulo.textContent=T.revelado+' ';var revelado=document.createElement('span');revelado.className='welux-dato-valor';revelado.textContent=valor;caja.replaceChild(revelado,oculto);fila.remove();priv.remove();msg.textContent='';}else{msg.textContent=T.error;boton.disabled=false;boton.textContent=T.ver;}}).catch(function(){msg.textContent=T.error;boton.disabled=false;boton.textContent=T.ver;});}boton.addEventListener('click',enviar);[nombre,correo].forEach(function(inp){inp.addEventListener('keydown',function(ev){if(ev.key==='Enter'){ev.preventDefault();enviar();}});});marcador.replaceWith(caja);});}puertaDatos();setTimeout(puertaDatos,1500);function showToast(msg, ok) {
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
      form.querySelectorAll('input, select, textarea').forEach(function (el) { var k = el.name || el.id || ''; if (!k) { var _lb = el.closest('div') ? el.closest('div').querySelector('label') : null; var _lt = _lb ? _lb.textContent.trim().toLowerCase().replace(/[áàäâ]/g, 'a').replace(/[éèëê]/g, 'e').replace(/[íìïî]/g, 'i').replace(/[óòöô]/g, 'o').replace(/[úùüû]/g, 'u').replace(/ñ/g, 'n').replace(/ç/g, 'c').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '') : ''; k = _lt || (el.getAttribute('placeholder') || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '_'); if (!k) return; } if (el.type === 'checkbox' || el.type === 'radio') { if (el.checked) raw[k] = el.value || 'sí'; return; } if (raw[k] === undefined) raw[k] = el.value; else raw[k] = raw[k] + ', ' + el.value; });
      var tipo = form.getAttribute('data-welux-tipo') || '';
      var id = (form.id || '') + ' ' + (form.getAttribute('name') || '');
      if (!tipo) { if (/booking|reserva/i.test(id + ' ' + (form.getAttribute('onsubmit') || '')) || form.querySelector('#booking-success')) tipo = 'reserva'; else if (/candidat|career|formulario|solicitud-alta/i.test(id)) tipo = 'candidatura'; else if (/contact/i.test(id)) tipo = 'contacto'; else tipo = 'lead'; }
      return {
        tipo: tipo, origen: tipo === 'reserva' ? 'reserva' : undefined,
        nombre: pick(raw, ['nombre', 'name', 'fullName', 'form-name', 'nombre_y_apellidos', 'nombre_completo', 'full_name', 'nom_complet', 'nome_completo', 'vollstandiger_name']),
        email: pick(raw, ['email', 'correo', 'form-email', 'email_de_contacto', 'contact_email', 'adresse_e_mail']),
        telefono: pick(raw, ['telefono', 'phone', 'tel', 'form-phone', 'telefono_movil', 'mobile_phone', 'telephone', 'telefon']),
        sector: pick(raw, ['sector', 'form-sector']),
        idiomas: pick(raw, ['idiomas', 'languages', 'form-languages']),
        oferta: pick(raw, ['oferta', 'posicion', 'position']),
        cv_url: pick(raw, ['cv_url', 'cv', 'enlace_cv', 'form-cv']),
        mensaje: pick(raw, ['mensaje', 'message', 'notas', 'notes', 'form-message']), servicio: pick(raw, ['servicio', 'service', 'servicio_requerido', 'required_service']), hub: pick(raw, ['hub', 'hub_de_retira_o_destino', 'hub_de_recogida', 'pickup_hub']), fecha_inicio: pick(raw, ['fecha_inicio', 'fecha_de_inicio', 'start_date', 'date_de_debut', 'startdatum']), fecha_fin: pick(raw, ['fecha_fin', 'fecha_de_fin', 'end_date', 'date_de_fin', 'enddatum']), empresa: pick(raw, ['empresa', 'productora', 'productora_agencia_proyecto', 'agencia', 'company']),
        pagina: location.href,
        idioma: currentLang(),
        honeypot: pick(raw, ['website', 'url']), datos: raw
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
          if (json && json.ok) { form.reset(); feedback(data.tipo === 'reserva' ? 'Reserva enviada. Te confirmamos por email en menos de 24 horas.' : data.tipo === 'candidatura' ? 'Candidatura enviada. La hemos recibido y el equipo te escribirá pronto.' : 'Mensaje enviado. Gracias, te escribiremos pronto.', true); if (data.tipo === 'reserva') { var _sb = form.querySelector('#booking-success'); if (_sb) { _sb.classList.remove('hidden'); _sb.style.display = 'block'; setTimeout(function () { _sb.classList.add('hidden'); _sb.style.display = 'none'; }, 7000); } } }
          else { feedback('No se pudo enviar. Inténtalo de nuevo o escríbenos a info@weluxhub.com.', false); }
        })
        .catch(function () {
          form.removeAttribute('data-welux-enviando');
          if (btn) { btn.disabled = false; if (btn.tagName === 'BUTTON') btn.textContent = btnTxt; }
          feedback('El servicio de envío no responde todavía. Inténtalo de nuevo o escríbenos a info@weluxhub.com.', false);
        });
      return false;
    }
    window.handleFormSubmission = enviarFormulario; window.handleBookingSubmit = function (ev) { if (ev && ev.preventDefault) ev.preventDefault(); var f = ev && ev.target && ev.target.tagName === 'FORM' ? ev.target : document.querySelector('form[onsubmit*="handleBookingSubmit"]'); if (f) enviarFormulario({ target: f, currentTarget: f, preventDefault: function () {} }); };
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
      else { a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/></svg>'; a.setAttribute('aria-label', 'Inicio — WeLux Hub'); a.setAttribute('title', 'Inicio — WeLux Hub'); a.classList.add('welux-home-link'); }
    });
    if (!isHomePage() && !document.querySelector('.welux-home-fab')) {
      var home = document.createElement('a');
      home.className = 'welux-home-fab'; home.href = homeHref();
      home.setAttribute('aria-label', 'Inicio — WeLux Hub'); home.title = 'Inicio — WeLux Hub';
      home.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/></svg>'; document.body.appendChild(home);
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
    /* Contraste de botones y enlaces con fondo propio: el barrido de paleta fija el texto oscuro en linea y lo deja ilegible sobre fondos oscuros (p. ej. la CTA de la cabecera). Se repasa 1,3 s despues porque el barrido vuelve a fijar colores a los 800 ms. */ function contrasteBoton(el) { var c = getComputedStyle(el).backgroundColor; if (!c || c.indexOf('rgba(0, 0, 0, 0)') === 0 || c === 'transparent') return; var m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/); var s = m ? (+m[1]) + (+m[2]) + (+m[3]) : 0; var col = s >= 500 ? '#16232e' : '#fff'; el.style.setProperty('color', col, 'important'); el.querySelectorAll('span, em, strong, i, b').forEach(function (x) { x.style.setProperty('color', col, 'important'); }); } document.querySelectorAll('a, button').forEach(contrasteBoton); setTimeout(function () { document.querySelectorAll('a, button').forEach(contrasteBoton); }, 1300); /* Contraste de los textos: si el color del texto se confunde con su fondo (p. ej. etiquetas blancas sobre tarjetas claras), se pone oscuro o blanco segun el fondo. Sobre fotos no se toca. Se repasa 1,3 s despues por el barrido de paleta. */ function contrasteTexto(el) { var n = el, bg = null; while (n) { var st = getComputedStyle(n); var bi = st.backgroundImage || ''; if (bi.indexOf('url(') >= 0) return; /* Foto de fondo: no se toca. */ if (bi.indexOf('gradient(') >= 0) { var g = bi.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/); if (g) { bg = 'rgb(' + g[1] + ',' + g[2] + ',' + g[3] + ')'; break; } } var c = st.backgroundColor; if (c && c.indexOf('rgba(0, 0, 0, 0)') !== 0 && c !== 'transparent') { bg = c; break; } n = n.parentElement; } if (!bg) return; var m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/); if (!m) return; var sb = (+m[1]) + (+m[2]) + (+m[3]); var mt = getComputedStyle(el).color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/); if (!mt) return; var sx = (+mt[1]) + (+mt[2]) + (+mt[3]); if (Math.abs(sx - sb) < 300) el.style.setProperty('color', sb >= 384 ? '#16232e' : '#fff', 'important'); } function repasarContraste() { document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6, a, button, li, label, strong, em, figcaption').forEach(contrasteTexto); /* div: las etiquetas de la home son texto suelto dentro de divs, sin elemento p/span que las cubra. */ } repasarContraste(); setTimeout(repasarContraste, 1300); setTimeout(repasarContraste, 2500); setTimeout(repasarContraste, 4000); /* Repasos repetidos: el barrido de paleta y el CDN de Tailwind vuelven a fijar estilos despues de la carga. */ function repasarTrasCarga() { repasarContraste(); setTimeout(repasarContraste, 600); } if (document.readyState === 'complete') repasarTrasCarga(); else window.addEventListener('load', repasarTrasCarga); /* En la carga completa (window.load) welux-v2.js vuelve a aplicar el barrido de paleta en la home; este repaso se registra despues, asi que corre despues de el. */ /* Si el barrido vuelve a fijar colores despues (p. ej. al cambiar de paleta), el repaso vuelve a correr. */ if (typeof MutationObserver === 'function') { var _obsT = null; var _obs = new MutationObserver(function () { if (_obsT) return; _obsT = setTimeout(function () { _obsT = null; repasarContraste(); }, 400); }); _obs.observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ['style', 'class'] }); } if (isCareers()) {
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
