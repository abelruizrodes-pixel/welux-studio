/* WeLux Hub — rediseño v2: efectos, parallax, vídeo del hero, botón único de
   idiomas, sección de invitaciones digitales, footer completo y selector de
   paleta provisional (5 paletas, se recuerda en localStorage). Sin dependencias. */
(function () {
  'use strict';
  var lang = (document.documentElement.lang || 'es').slice(0, 2).toLowerCase();
  var T = {
    es: { inv: 'Invitaciones', invTitle: 'Invitaciones digitales', invText: 'Landing pages como invitación digital para tus eventos: bodas, cumpleaños y otras celebraciones. También para ocasiones no festivas: con respeto y sobriedad, te ayudamos a compartir la información con tus seres queridos.', invCta: 'Crear mi invitación', legal: 'Aviso legal', priv: 'Privacidad', terms: 'Términos', cook: 'Cookies', contact: 'Contacto', follow: 'Síguenos', rights: 'Todos los derechos reservados.', palTitle: 'Paleta provisional — prueba una y dinos cuál te gusta', palSub: 'Las 5 propuestas del archivo. Sin aplicar todavía: la paleta actual sigue por defecto. Tu elección se recuerda en este navegador.', ccTitle: 'ConCompás', ccText: 'Matching como Tinder para conectar a quien busca con quien ofrece: desliza, haz match y habla.', ccCta: 'Visitar ConCompás' },
    en: { inv: 'Invitations', invTitle: 'Digital invitations', invText: 'Landing pages as a digital invitation for your events: weddings, birthdays and other celebrations. Also for non-festive occasions: with respect and restraint, we help you share the information with your loved ones.', invCta: 'Create my invitation', legal: 'Legal notice', priv: 'Privacy', terms: 'Terms', cook: 'Cookies', contact: 'Contact', follow: 'Follow us', rights: 'All rights reserved.', palTitle: 'Provisional palette — try one and tell us which you like', palSub: 'The 5 proposals. Nothing applied yet: the current palette stays by default. Your choice is remembered in this browser.', ccTitle: 'ConCompás', ccText: 'Matching like Tinder to connect those who seek with those who offer: swipe, match and talk.', ccCta: 'Visit ConCompás' },
    fr: { inv: 'Invitations', invTitle: 'Invitations numériques', invText: 'Des landing pages comme invitation numérique pour vos événements : mariages, anniversaires et autres célébrations. Aussi pour les occasions non festives : avec respect et sobriété, nous vous aidons à partager les informations avec vos proches.', invCta: 'Créer mon invitation', legal: 'Mentions légales', priv: 'Confidentialité', terms: 'Conditions', cook: 'Cookies', contact: 'Contact', follow: 'Suivez-nous', rights: 'Tous droits réservés.', palTitle: 'Palette provisoire — essayez-en une et dites-nous laquelle vous préférez', palSub: 'Les 5 propositions. Rien n’est encore appliqué : la palette actuelle reste par défaut. Votre choix est mémorisé dans ce navigateur.', ccTitle: 'ConCompás', ccText: 'Du matching comme Tinder pour connecter ceux qui cherchent et ceux qui offrent : glissez, matchez et discutez.', ccCta: 'Visiter ConCompás' },
    de: { inv: 'Einladungen', invTitle: 'Digitale Einladungen', invText: 'Landingpages als digitale Einladung für Ihre Veranstaltungen: Hochzeiten, Geburtstage und andere Feiern. Auch für nicht festliche Anlässe: mit Respekt und Zurückhaltung helfen wir Ihnen, die Informationen mit Ihren Liebsten zu teilen.', invCta: 'Meine Einladung erstellen', legal: 'Impressum', priv: 'Datenschutz', terms: 'AGB', cook: 'Cookies', contact: 'Kontakt', follow: 'Folgen Sie uns', rights: 'Alle Rechte vorbehalten.', palTitle: 'Vorläufige Palette — probieren Sie eine aus und sagen Sie uns, welche Ihnen gefällt', palSub: 'Die 5 Vorschläge. Noch nichts angewendet: Die aktuelle Palette bleibt standardmäßig. Ihre Wahl wird in diesem Browser gespeichert.', ccTitle: 'ConCompás', ccText: 'Matching wie bei Tinder, um Suchende mit Anbietern zu verbinden: wischen, matchen, sprechen.', ccCta: 'ConCompás besuchen' },
    pt: { inv: 'Convites', invTitle: 'Convites digitais', invText: 'Landing pages como convite digital para os seus eventos: casamentos, aniversários e outras celebrações. Também para ocasiões não festivas: com respeito e sobriedade, ajudamos a partilhar a informação com os seus entes queridos.', invCta: 'Criar o meu convite', legal: 'Aviso legal', priv: 'Privacidade', terms: 'Termos', cook: 'Cookies', contact: 'Contacto', follow: 'Siga-nos', rights: 'Todos os direitos reservados.', palTitle: 'Paleta provisória — experimente uma e diga-nos de qual gosta', palSub: 'As 5 propostas. Nada aplicado ainda: a paleta atual mantém-se por predefinição. A sua escolha fica guardada neste navegador.', ccTitle: 'ConCompás', ccText: 'Matching como o Tinder para ligar quem procura a quem oferece: deslize, faça match e fale.', ccCta: 'Visitar a ConCompás' },
    lu: { inv: 'Invitatiounen', invTitle: 'Digital Invitatiounen', invText: 'Landing Pages als digital Invitatioun fir Är Evenementer: Hochzäiten, Gebuertsdagen an aner Feieren. Och fir net-festlech Geleeënheeten: mat Respekt a Bescheidenheet hëllefe mir Iech, d\'Informatiounen mat Äre Léifsten ze deelen.', invCta: 'Meng Invitatioun erstellen', legal: 'Impressum', priv: 'Privatsphär', terms: 'Bedingungen', cook: 'Cookies', contact: 'Kontakt', follow: 'Follegt eis', rights: 'All Rechter vorbehalen.', palTitle: 'Provisoresch Palett — probéiert eng aus a sot eis, wéi eng Iech gefällt', palSub: 'Déi 5 Virschléi. nach näischt applizéiert: déi aktuell Palett bleift standard. Är Wiel gëtt an dësem Browser gespäichert.', ccTitle: 'ConCompás', ccText: 'Matching wéi bei Tinder, fir déi, déi sichen, mat deenen, déi ubidden, ze verbannen: swipen, matchen a schwätzen.', ccCta: 'ConCompás besichen' }
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

/* WeLux — simplificación radical: home, Studio, Gear y Careers con textos mínimos.
   Solo en la página principal de cada división y en la home: hero corto + cláusulas
   importantes en frases cortas + tarjetas simples (título, una línea, botón con su
   llamada a la acción). El detalle queda oculto y se muestra al pulsar la tarjeta.
   Servicios empresariales (marketing, redes, web, vídeo, Google Business, chatbot/CRM)
   en la home y en Studio, en los 6 idiomas. Sin teléfono ni WhatsApp. */
(function(){
'use strict';
try{
var path=(location.pathname||'/').replace(/\/+$/,'')||'/';
var parts=path.split('/').filter(function(s){return s;});
var LANGS=['en','fr','de','pt','lu'];
var lang='es';var rest=parts.slice();
if(LANGS.indexOf(parts[0])>=0){lang=parts[0];rest=parts.slice(1);}
var slug=(rest[0]||'').replace(/\.html$/,'');
var isHome=rest.length===0||slug==='index';
var isDiv=['studio','gear'].indexOf(slug)>=0&&rest.length===1; /* Careers queda fuera: su contenido completo (demo, calculadora, formulario, FAQ) debe verse. */
if(!isHome&&!isDiv)return;
var main=document.querySelector('main');if(!main)return;
var DATA={
es:{svcT:'Servicios empresariales',svcL:'Para empresas que quieren crecer en Europa.',ctaP:'Pedir propuesta',ctaW:'Escríbenos',home:{studio:'Ver Studio',careers:'Ver empleo',gear:'Ver Gear'},svc:[['Marketing digital','Campañas claras, medibles y sin humo.'],['Redes sociales','Contenido constante, con tu tono.'],['Diseño web','Webs rápidas, claras y que venden.'],['Vídeo','Vídeo corto que explica y convence.'],['Google Business','Tu ficha de Google, siempre al día.'],['Chatbot y CRM','Respuestas rápidas, clientes ordenados.']],div:{studio:{hero:'Studio',line:'Producción audiovisual para empresas.',cl:['Confidencialidad (NDA)','Producción bajo acuerdo'],cards:[['Producción','Producción audiovisual B2B.','Ver Studio'],['Proyectos','Ideas que se convierten en vídeo.','Ver proyectos'],['Contacto','Cuéntanos tu proyecto.','Escríbenos']]},careers:{hero:'Careers',line:'Trabaja en Europa, sin coste inicial.',cl:['0 € de coste inicial','Pago solo tras cobrar la 1ª nómina'],cards:[['Ofertas','Empleo en Europa, sin intermediarios.','Ver ofertas'],['Aplicar','Tu CV, revisado por personas.','Aplicar'],['Proceso','Transparente, paso a paso.','Cómo funciona']]},gear:{hero:'Gear',line:'Cámaras y ópticas de cine, listas para rodar.',cl:['Alquiler por días','Set completo','Entrega segura'],cards:[['Arsenal','Cámaras y ópticas de cine.','Reservar equipo'],['Sets','Sets completos, listos para rodar.','Ver sets'],['Glam','Imagen y glamour para tu rodaje.','Ver Glam']]}}},
en:{svcT:'Business services',svcL:'For companies growing in Europe.',ctaP:'Request a proposal',ctaW:'Write to us',home:{studio:'View Studio',careers:'See jobs',gear:'View Gear'},svc:[['Digital marketing','Clear, measurable campaigns.'],['Social media','Steady content, in your voice.'],['Web design','Fast, clear websites that sell.'],['Video','Short video that explains and convinces.'],['Google Business','Your Google listing, always up to date.'],['Chatbot & CRM','Fast replies, tidy customers.']],div:{studio:{hero:'Studio',line:'Audiovisual production for companies.',cl:['Confidentiality (NDA)','Production under agreement'],cards:[['Production','Audiovisual production, B2B.','View Studio'],['Projects','Ideas that become video.','View projects'],['Contact','Tell us about your project.','Write to us']]},careers:{hero:'Careers',line:'Work in Europe, with no upfront cost.',cl:['€0 upfront','Pay only after your first salary'],cards:[['Jobs','Jobs in Europe, with no middlemen.','View jobs'],['Apply','Your CV, reviewed by people.','Apply'],['Process','Transparent, step by step.','How it works']]},gear:{hero:'Gear',line:'Cinema cameras and lenses, ready to shoot.',cl:['Daily rental','Complete set','Secure delivery'],cards:[['Arsenal','Cinema cameras and lenses.','Book gear'],['Sets','Complete sets, ready to shoot.','View sets'],['Glam','Image and glamour for your shoot.','View Glam']]}}},
fr:{svcT:'Services aux entreprises',svcL:'Pour les entreprises qui veulent grandir en Europe.',ctaP:'Demander une proposition',ctaW:'Écrivez-nous',home:{studio:'Voir Studio',careers:'Voir les emplois',gear:'Voir Gear'},svc:[['Marketing digital','Des campagnes claires et mesurables.'],['Réseaux sociaux','Du contenu régulier, avec votre ton.'],['Conception web','Des sites rapides, clairs et qui vendent.'],['Vidéo','Des vidéos courtes qui expliquent et convainquent.'],['Fiche Google','Votre fiche Google, toujours à jour.'],['Chatbot et CRM','Des réponses rapides, des clients bien suivis.']],div:{studio:{hero:'Studio',line:'Production audiovisuelle pour entreprises.',cl:['Confidentialité (NDA)','Production sous contrat'],cards:[['Production','Production audiovisuelle B2B.','Voir Studio'],['Projets','Des idées qui deviennent vidéo.','Voir les projets'],['Contact','Parlez-nous de votre projet.','Écrivez-nous']]},careers:{hero:'Careers',line:'Travaillez en Europe, sans frais initiaux.',cl:['0 € de frais initiaux','Paiement après le 1er salaire'],cards:[['Offres','Un emploi en Europe, sans intermédiaire.','Voir les offres'],['Postuler','Votre CV, relu par des humains.','Postuler'],['Processus','Transparent, étape par étape.','Comment ça marche']]},gear:{hero:'Gear',line:'Caméras et optiques cinéma, prêtes à tourner.',cl:['Location par jour','Kit complet','Livraison sécurisée'],cards:[['Arsenal','Caméras et optiques cinéma.','Réserver le matériel'],['Sets','Des sets complets, prêts à tourner.','Voir les sets'],['Glam','Image et glamour pour votre tournage.','Voir Glam']]}}},
de:{svcT:'Services für Unternehmen',svcL:'Für Unternehmen, die in Europa wachsen wollen.',ctaP:'Angebot anfragen',ctaW:'Schreiben Sie uns',home:{studio:'Studio ansehen',careers:'Jobs ansehen',gear:'Gear ansehen'},svc:[['Digitales Marketing','Klare, messbare Kampagnen.'],['Soziale Medien','Regelmässige Inhalte, in Ihrem Ton.'],['Webdesign','Schnelle, klare Websites, die verkaufen.'],['Video','Kurze Videos, die erklären und überzeugen.'],['Google Business','Ihr Google-Profil, immer aktuell.'],['Chatbot & CRM','Schnelle Antworten, geordnete Kunden.']],div:{studio:{hero:'Studio',line:'Audiovisuelle Produktion für Unternehmen.',cl:['Vertraulichkeit (NDA)','Produktion mit Vertrag'],cards:[['Produktion','Audiovisuelle Produktion B2B.','Studio ansehen'],['Projekte','Ideen, die zu Video werden.','Projekte ansehen'],['Kontakt','Erzählen Sie uns von Ihrem Projekt.','Schreiben Sie uns']]},careers:{hero:'Careers',line:'Arbeiten in Europa, ohne Vorkosten.',cl:['0 € Vorkosten','Zahlung erst nach dem 1. Gehalt'],cards:[['Stellen','Jobs in Europa, ohne Zwischenhändler.','Stellen ansehen'],['Bewerben','Ihr Lebenslauf, von Menschen geprüft.','Bewerben'],['Ablauf','Transparent, Schritt für Schritt.','So funktioniert es']]},gear:{hero:'Gear',line:'Kinokameras und Objektive, bereit zum Drehen.',cl:['Tagesmiete','Komplettes Set','Sichere Lieferung'],cards:[['Arsenal','Kinokameras und Objektive.','Ausrüstung buchen'],['Sets','Komplette Sets, bereit zum Drehen.','Sets ansehen'],['Glam','Bild und Glamour für Ihren Dreh.','Glam ansehen']]}}},
pt:{svcT:'Serviços empresariais',svcL:'Para empresas que querem crescer na Europa.',ctaP:'Pedir proposta',ctaW:'Escreva-nos',home:{studio:'Ver Studio',careers:'Ver empregos',gear:'Ver Gear'},svc:[['Marketing digital','Campanhas claras e mensuráveis.'],['Redes sociais','Conteúdo constante, com o seu tom.'],['Design web','Sites rápidos, claros e que vendem.'],['Vídeo','Vídeos curtos que explicam e convencem.'],['Ficha Google','A sua ficha Google, sempre atualizada.'],['Chatbot e CRM','Respostas rápidas, clientes organizados.']],div:{studio:{hero:'Studio',line:'Produção audiovisual para empresas.',cl:['Confidencialidade (NDA)','Produção sob contrato'],cards:[['Produção','Produção audiovisual B2B.','Ver Studio'],['Projetos','Ideias que se tornam vídeo.','Ver projetos'],['Contacto','Conte-nos o seu projeto.','Escreva-nos']]},careers:{hero:'Careers',line:'Trabalhe na Europa, sem custo inicial.',cl:['0 € de custo inicial','Pagamento só após o 1.º salário'],cards:[['Ofertas','Emprego na Europa, sem intermediários.','Ver ofertas'],['Candidatar-se','O seu CV, revisto por pessoas.','Candidatar-se'],['Processo','Transparente, passo a passo.','Como funciona']]},gear:{hero:'Gear',line:'Câmaras e objetivas de cinema, prontas a rodar.',cl:['Aluguer por dia','Kit completo','Entrega segura'],cards:[['Arsenal','Câmaras e objetivas de cinema.','Reservar equipamento'],['Sets','Sets completos, prontos a rodar.','Ver sets'],['Glam','Imagem e glamour para a sua rodagem.','Ver Glam']]}}},
lu:{svcT:'Services fir Entreprisen',svcL:'Fir Entreprisen, déi an Europa wuessen wëllen.',ctaP:'Propositioun ufroen',ctaW:'Schreift eis',home:{studio:'Studio kucken',careers:'Jobs kucken',gear:'Gear kucken'},svc:[['Digital Marketing','Kloer, moossbar Campagnen.'],['Sozial Medien','Reegelméissegen Inhalt, an Ärem Toun.'],['Webdesign','Schnell, kloer Websäiten, déi verkafen.'],['Video','Kuerz Videoen, déi erklären an iwwerzeegen.'],['Google Business','Är Google-Fiche, ëmmer aktuell.'],['Chatbot & CRM','Schnell Äntwerten, uerdentlech Clienten.']],div:{studio:{hero:'Studio',line:'Audiovisuell Produktioun fir Entreprisen.',cl:['Vertraulechkeet (NDA)','Produktioun mat Kontrakt'],cards:[['Produktioun','Audiovisuell Produktioun B2B.','Studio kucken'],['Projeten','Iddien, déi Video ginn.','Projeten kucken'],['Kontakt','Zielt eis Äre Projet.','Schreift eis']]},careers:{hero:'Careers',line:'Schafft an Europa, ouni Virkäschten.',cl:['0 € Virkäschten','Bezuelung eréischt nom 1. Gehalt'],cards:[['Offren','Aarbecht an Europa, ouni Intermédiairen.','Offren kucken'],['Bewerben','Äre CV, vu Mënsche gepréift.','Bewerben'],['Prozess','Transparent, Schrëtt fir Schrëtt.','Wéi et funktionéiert']]},gear:{hero:'Gear',line:'Kino-Kameraen an Objektiver, prett ze dréinen.',cl:['Lount pro Dag','Komplette Set','Sécher Liwwerung'],cards:[['Arsenal','Kino-Kameraen an Objektiver.','Equipement reservéieren'],['Sets','Komplett Sets, prett ze dréinen.','Sets kucken'],['Glam','Bild a Glamour fir Ären Dréi.','Glam kucken']]}}}
};
var KEYS={gear:[['arsenal','camera','cámara','kamera','caméra'],['set','disponib','availab','verfüg'],['glam','imagen','image','bild']],careers:[['oferta','job','offre','angebot','emprego','stelle'],['aplic','apply','postul','bewerb','candidat'],['proceso','roadmap','process','prozess','ablauf']],studio:[['producci','production','produktion'],['proyecto','project','projet','projekt'],['contact','kontakt']]};
var D=DATA[lang]||DATA.es;
var st=document.createElement('style');
st.textContent='.welux-min-hero{padding:88px 24px 56px!important;text-align:center;max-width:1280px;margin:0 auto!important}.welux-min-hero h1{font-size:clamp(34px,5vw,54px)!important;line-height:1.08!important;letter-spacing:-.02em!important;font-weight:600!important;margin:0 0 16px!important}.welux-min-hero p{font-size:18px!important;line-height:1.55!important;color:#5b564e!important;max-width:640px;margin:0 auto 28px!important}.welux-min-hero img,.welux-min-hero video{border-radius:20px}.welux-clauses{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:920px;margin:0 auto 64px;padding:0 24px}.welux-clauses span{border:1px solid #e6e1d8;background:#fff;border-radius:999px;padding:9px 16px;font-size:14px;color:#44413c}.welux-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;max-width:1080px;margin:0 auto 88px;padding:0 24px}@media(max-width:1280px){.welux-cards{grid-template-columns:1fr}}.welux-card{background:#fff;border:1px solid #ece7de;border-radius:20px;padding:28px 26px}.welux-card h3{font-size:19px!important;margin:0 0 8px!important}.welux-card p{font-size:15px!important;line-height:1.55!important;color:#5b564e!important;margin:0 0 22px!important}.welux-card a,.welux-card button{display:inline-block;background:#111;color:#fff!important;border:0;border-radius:999px;padding:11px 22px;font-size:14px;cursor:pointer;text-decoration:none}.welux-services{max-width:1080px;margin:72px auto 96px;padding:0 24px}.welux-services>h2{font-size:30px!important;text-align:center;margin:0 0 10px!important;letter-spacing:-.01em}.welux-services-sub{text-align:center;color:#5b564e;font-size:16px;margin:0 0 36px!important}.welux-detail-open{max-width:960px;margin:0 auto 88px!important;padding:0 24px}';
document.head.appendChild(st);
function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e;}
function prefix(){return lang==='es'?'':'/'+lang;}
function studioUrl(){return prefix()+'/studio/';}
function contactHref(){var f=document.querySelector('main form');if(f&&f.id)return '#'+f.id;var a=document.querySelector('main a[href^="#"]');if(a&&a.getAttribute('href').length>1)return a.getAttribute('href');return studioUrl();}
Array.prototype.slice.call(document.querySelectorAll('a[href^="tel:"],a[href*="wa.me"],a[href*="whatsapp"]')).forEach(function(a){var li=a.closest('li,div,span');if(li)li.style.display='none';else a.style.display='none';});
function buildServices(){
var sec=el('section','welux-services');sec.id='welux-servicios';
sec.appendChild(el('h2',null,D.svcT));
sec.appendChild(el('p','welux-services-sub',D.svcL));
var grid=el('div','welux-cards');
D.svc.forEach(function(c,i){
var card=el('article','welux-card');
card.appendChild(el('h3',null,c[0]));card.appendChild(el('p',null,c[1]));
var a=el('a',null,i===D.svc.length-1?D.ctaW:D.ctaP);
a.href=isHome?studioUrl():contactHref();
card.appendChild(a);grid.appendChild(card);});
sec.appendChild(grid);return sec;}
if(isHome){
document.documentElement.classList.add('welux-home-min');
var map=D.home;
Object.keys(map).forEach(function(k){
var a=main.querySelector('a[href*="/'+k+'"],a[href*="'+k+'.html"]');
if(a)a.textContent=map[k];});
var dlink=main.querySelector('a[href*="/studio"],a[href*="studio.html"]');
var blk=dlink;while(blk&&blk.parentElement!==main)blk=blk.parentElement;
var svc=buildServices();
if(blk&&blk.parentNode)blk.parentNode.insertBefore(svc,blk.nextSibling);else main.appendChild(svc);
return;}
/* Páginas principales de Studio, Careers y Gear */
document.documentElement.classList.add('welux-div-min');
var divD=(D.div&&D.div[slug])||D.div.studio;
var h1=document.querySelector('main h1');if(!h1)return;
var hero=h1;while(hero.parentElement&&hero.parentElement!==main)hero=hero.parentElement;
var inv=document.querySelector('.welux-invitations');if(inv)inv.style.display='none';
Array.prototype.slice.call(document.querySelectorAll('footer ul')).forEach(function(ul){if(ul.classList.contains('welux-palette-grid'))return;if(ul.querySelectorAll('a').length>4)ul.style.display='none';});
Array.prototype.slice.call(hero.querySelectorAll('p')).forEach(function(p,i){if(i>0)p.style.display='none';});
Array.prototype.slice.call(hero.querySelectorAll('ul,ol')).forEach(function(u){u.style.display='none';});
var hlinks=Array.prototype.slice.call(hero.querySelectorAll('a,button'));
hlinks.forEach(function(a,i){if(i>0)a.style.display='none';});
var firstP=hero.querySelector('p');
if(firstP)firstP.textContent=divD.line;else h1.parentNode.insertBefore(el('p',null,divD.line),h1.nextSibling);
h1.textContent=divD.hero;
if(hlinks[0]){hlinks[0].textContent=divD.cards[0][2];if(hlinks[0].tagName==='A')hlinks[0].setAttribute('href','#welux-cards');else hlinks[0].addEventListener('click',function(){var g=document.getElementById('welux-cards');if(g)g.scrollIntoView();});}
hero.classList.add('welux-min-hero');
Array.prototype.slice.call(main.children).forEach(function(ch){if(ch!==hero)ch.style.display='none';});
var clauses=el('div','welux-clauses');
divD.cl.forEach(function(s){clauses.appendChild(el('span',null,s));});
main.appendChild(clauses);
var targets=[];
function findTarget(words){
var kids=Array.prototype.slice.call(main.children);
for(var i=0;i<kids.length;i++){
if(kids[i]===hero||kids[i]===clauses)continue;
var hs=kids[i].querySelectorAll('h1,h2,h3');
for(var j=0;j<hs.length;j++){
var t=(hs[j].textContent||'').toLowerCase();
for(var k=0;k<words.length;k++){if(t.indexOf(words[k])>=0)return kids[i];}}}
return null;}
var grid=el('div','welux-cards');grid.id='welux-cards';
var keys=KEYS[slug]||KEYS.studio;
divD.cards.forEach(function(c,idx){
var card=el('article','welux-card');
card.appendChild(el('h3',null,c[0]));card.appendChild(el('p',null,c[1]));
var target=findTarget(keys[idx]||[]);
if(target){
targets.push(target);
var b=el('button',null,c[2]);b.type='button';
b.addEventListener('click',function(){
var shown=target.style.display==='block';
targets.forEach(function(t2){t2.style.display='none';t2.classList.remove('welux-detail-open');});
if(!shown){target.style.display='block';target.classList.add('welux-detail-open');target.style.scrollMarginTop='90px';(function(_t){var _p=_t.parentElement;while(_p&&_p!==document.body){if(_p.style.display==='none')_p.style.display='block';_p=_p.parentElement;}})(target);target.scrollIntoView({behavior:'smooth',block:'start'});}});
card.appendChild(b);
}else{
var a=el('a',null,c[2]);a.href=studioUrl();card.appendChild(a);}
grid.appendChild(card);});
main.appendChild(grid);
if(slug==='studio')main.appendChild(buildServices());
}catch(e){}
})();
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
    sec.innerHTML = '<div style="max-width:72rem;margin:0 auto;padding:2.5rem 1.5rem;text-align:center"><p style="letter-spacing:.22em;text-transform:uppercase;font-size:.72rem;color:#9a6f2b;font-weight:800">WeLux · Invitaciones digitales</p><h2 class="font-headline" style="font-size:clamp(1.7rem,4vw,2.4rem);margin:.6rem 0">' + t.invTitle + '</h2><p style="max-width:46rem;margin:0 auto;color:#6f5a44;line-height:1.7">' + t.invText + '</p><p style="margin:1.1rem 0"><span class="welux-invite-chip">💍 Bodas</span> <span class="welux-invite-chip">🎂 Cumpleaños</span> <span class="welux-invite-chip">✨ Celebraciones</span> <span class="welux-invite-chip">🕊️ Funerales</span></p><a class="welux-hero-button welux-hero-button--primary" href="' + (lang === 'es' ? '' : '/' + lang) + '/studio/' + '" style="display:inline-flex;align-items:center;gap:.5rem;background:linear-gradient(180deg,#d9a75f,#a9742f);color:#fff;padding:.9rem 1.6rem;font-weight:800">' + t.invCta + '</a></div>';
    var footer = document.querySelector('footer');
    if (footer && footer.parentNode) footer.parentNode.insertBefore(sec, footer); else document.body.appendChild(sec);
  }
  /* ConCompás aparte: su propio producto (matching), sin mezclarse con las invitaciones digitales. */ if (!document.getElementById('concompas')) { var sec2 = document.createElement('section'); sec2.id = 'concompas'; sec2.className = 'welux-concompas welux-reveal is-visible'; sec2.innerHTML = '<div style="max-width:72rem;margin:0 auto;padding:2.5rem 1.5rem;text-align:center"><p style="letter-spacing:.22em;text-transform:uppercase;font-size:.72rem;color:#9a6f2b;font-weight:800">WeLux · ConCompás</p><h2 class="font-headline" style="font-size:clamp(1.7rem,4vw,2.4rem);margin:.6rem 0">' + t.ccTitle + '</h2><p style="max-width:46rem;margin:0 auto;color:#6f5a44;line-height:1.7">' + t.ccText + '</p><p style="margin:1.1rem 0"><a class="welux-hero-button welux-hero-button--primary" href="https://www.concompas.com/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:.5rem;background:linear-gradient(180deg,#d9a75f,#a9742f);color:#fff;padding:.9rem 1.6rem;font-weight:800">' + t.ccCta + ' ↗</a></p></div>'; var footer2 = document.querySelector('footer'); if (footer2 && footer2.parentNode) footer2.parentNode.insertBefore(sec2, footer2); else document.body.appendChild(sec2); } /* Footer completo: redes, ConCompás, contacto y legales */
  var footerEl = document.querySelector('footer');
  if (footerEl && !document.getElementById('welux-footer-v2')) {
    var div = document.createElement('div');
    div.id = 'welux-footer-v2';
    div.style.cssText = 'max-width:72rem;margin:0 auto;padding:1.6rem 1.5rem 2rem;border-top:1px solid #eadfc8;text-align:center';
    div.innerHTML = '<p style="margin:.4rem 0"><strong>' + t.follow + '</strong> &nbsp;<a class="welux-social-btn" href="https://www.facebook.com/weluxhub" target="_blank" rel="noopener" aria-label="Facebook Welux">f</a> <a class="welux-social-btn" href="https://www.instagram.com/weluxhub" target="_blank" rel="noopener" aria-label="Instagram Welux">◎</a></p><p style="margin:.4rem 0">✉️ <a href="mailto:info@weluxhub.com">info@weluxhub.com</a> · <a href="https://www.concompas.com/" target="_blank" rel="noopener">ConCompás</a> · <a href="#invitaciones">' + t.inv + '</a></p><p style="margin:.4rem 0;font-size:.85rem"><a href="/legal/aviso-legal.html">' + t.legal + '</a> · <a href="/legal/privacidad.html">' + t.priv + '</a> · <a href="/legal/terminos.html">' + t.terms + '</a> · <a href="/legal/cookies.html">' + t.cook + '</a></p><p style="margin:.4rem 0;font-size:.8rem;color:#8a755c">WeLux Digital Services S.à r.l - S · Luxemburgo — ' + t.rights + '</p>';
    footerEl.appendChild(div);
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
    v.preload = 'auto';if (v.load) { v.load(); }
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

  wireSectionVideos();[600,1500,3000].forEach(function(t){setTimeout(function(){var v=document.querySelector('video[src*="welux-hero-estudio"]');if(v&&v.paused){playVideo(v);}},t);});
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
    if (sec) sec.remove(); try { var ks=[]; for (var j=0;j<localStorage.length;j++) ks.push(localStorage.key(j)); ks.forEach(function(k){ if(/palet/i.test(k)) localStorage.removeItem(k); }); } catch(e){} document.documentElement.removeAttribute('data-welux-palette'); VARS.forEach(function(k){ document.documentElement.style.removeProperty(k); }); return;
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
          a.textContent = t[k]; a.style.cssText = 'display:inline-flex!important;align-items:center!important;justify-content:center!important;height:auto!important;min-height:44px!important;width:auto!important;max-width:none!important;flex:0 0 auto!important;white-space:normal!important;overflow:visible!important;line-height:1.25!important;text-align:center!important;padding:12px 20px!important;';
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
    if (sec) sec.remove(); try { var ks=[]; for (var j=0;j<localStorage.length;j++) ks.push(localStorage.key(j)); ks.forEach(function(k){ if(/palet/i.test(k)) localStorage.removeItem(k); }); } catch(e){} document.documentElement.removeAttribute('data-welux-palette'); return;
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

/* WeLux — Nuestros productos: chat widget, chatbot de WhatsApp, automatización con IA,
   transición con IA para empresas, CRM dinámicos y HogarGo (en desarrollo). Sección corta, en la home y en Studio,
   en los 6 idiomas. El producto de WhatsApp se describe como producto, sin publicar
   ningún número de teléfono ni enlace wa.me. */
(function(){
'use strict';
try{
var path=(location.pathname||'/').replace(/\/+$/,'')||'/';
var parts=path.split('/').filter(function(s){return s;});
var LANGS=['en','fr','de','pt','lu'];
var lang='es';var rest=parts.slice();
if(LANGS.indexOf(parts[0])>=0){lang=parts[0];rest=parts.slice(1);}
var slug=(rest[0]||'').replace(/\.html$/,'');
var isHome=rest.length===0||slug==='index';
var isStudio=slug==='studio'&&rest.length===1;
if(!isHome&&!isStudio)return;
var main=document.querySelector('main');if(!main)return;
function prefix(){return lang==='es'?'':'/'+lang;}
var P={
es:{t:'Nuestros productos',l:'Productos digitales, listos para usar.',cta:'Pedir propuesta',items:[['Chat widget','Chat en tu web que atiende siempre.'],['Chatbot de WhatsApp','Respuestas automáticas en WhatsApp.'],['Automatización con IA','Tareas repetidas, hechas solas.'],['Transición con IA','Tu empresa, trabajando con IA.'],['CRM dinámicos','Tus clientes, siempre ordenados.'],['HogarGo','En desarrollo: las personas que necesitan un servicio para el hogar encuentran a quien lo ofrece, con un match como en Tinder, el mismo principio que ConCompás.','mailto:info@weluxhub.com?subject=HogarGo','Quiero saber más']]},
en:{t:'Our products',l:'Digital products, ready to use.',cta:'Request a proposal',items:[['Chat widget','Chat on your site, always on.'],['WhatsApp chatbot','Automatic replies on WhatsApp.'],['AI automation','Repetitive tasks, done alone.'],['AI transition','Your company, working with AI.'],['Dynamic CRMs','Your customers, always in order.'],['HogarGo','In development: people who need a service for their home find those who offer it, with a match like on Tinder, the same principle as ConCompás.','mailto:info@weluxhub.com?subject=HogarGo','I want to know more']]},
fr:{t:'Nos produits',l:'Des produits numériques, prêts à l\'emploi.',cta:'Demander une proposition',items:[['Chat widget','Le chat de votre site, toujours actif.'],['Chatbot WhatsApp','Des réponses automatiques sur WhatsApp.'],['Automatisation IA','Les tâches répétées, faites seules.'],['Transition IA','Votre entreprise, au travail avec l\'IA.'],['CRM dynamiques','Vos clients, toujours bien suivis.'],['HogarGo','En développement: les personnes qui ont besoin d\'un service pour leur maison trouvent celles qui le proposent, avec un match comme sur Tinder, le même principe que ConCompás.','mailto:info@weluxhub.com?subject=HogarGo','Je veux en savoir plus']]},
de:{t:'Unsere Produkte',l:'Digitale Produkte, einsatzbereit.',cta:'Angebot anfragen',items:[['Chat-Widget','Chat auf Ihrer Website, immer aktiv.'],['WhatsApp-Chatbot','Automatische Antworten auf WhatsApp.'],['KI-Automatisierung','Wiederkehrende Aufgaben, von selbst erledigt.'],['KI-Übergang','Ihr Unternehmen, mit KI im Einsatz.'],['Dynamische CRMs','Ihre Kunden, immer im Blick.'],['HogarGo','In Entwicklung: Menschen, die einen Service für ihr Zuhause brauchen, finden diejenigen, die ihn anbieten, mit einem Match wie bei Tinder, das gleiche Prinzip wie ConCompás.','mailto:info@weluxhub.com?subject=HogarGo','Ich möchte mehr erfahren']]},
pt:{t:'Os nossos produtos',l:'Produtos digitais, prontos a usar.',cta:'Pedir proposta',items:[['Chat widget','Chat no seu site, sempre ativo.'],['Chatbot de WhatsApp','Respostas automáticas no WhatsApp.'],['Automação com IA','Tarefas repetidas, feitas sozinhas.'],['Transição com IA','A sua empresa, a trabalhar com IA.'],['CRM dinâmicos','Os seus clientes, sempre organizados.'],['HogarGo','Em desenvolvimento: pessoas que precisam de um serviço para a sua casa encontram quem o oferece, com um match como no Tinder, o mesmo princípio que o ConCompás.','mailto:info@weluxhub.com?subject=HogarGo','Quero saber mais']]},
lu:{t:'Eis Produkter',l:'Digital Produkter, prett ze benotzen.',cta:'Propositioun ufroen',items:[['Chat-Widget','Chat op Ärer Websäit, ëmmer aktiv.'],['WhatsApp-Chatbot','Automatesch Äntwerten op WhatsApp.'],['Automatiséierung mat KI','Widderhuelend Aufgaben, eleng gemaach.'],['KI-Transitioun','Är Entreprise, schafft mat KI.'],['Dynamesch CRMen','Är Clienten, ëmmer uerdentlech.'],['HogarGo','An Entwécklung: Leit, déi e Service fir hiert Heem brauchen, fannen déi, déi en ubidden, mat engem Match wéi op Tinder, dat selwecht Prinzip wéi ConCompás.','mailto:info@weluxhub.com?subject=HogarGo','Ech wëll méi wëssen']]}
};
var D=P[lang]||P.es;
function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e;}
var sec=el('section','welux-services');sec.id='welux-productos';
sec.appendChild(el('h2',null,D.t));
sec.appendChild(el('p','welux-services-sub',D.l));
var grid=el('div','welux-cards');
D.items.forEach(function(c){
var card=el('article','welux-card');
card.appendChild(el('h3',null,c[0]));card.appendChild(el('p',null,c[1]));
var a=el('a',null,c[3]||D.cta);a.href=c[2]||prefix()+'/studio/';
card.appendChild(a);grid.appendChild(card);});
sec.appendChild(grid);
var anchor=document.getElementById('welux-servicios');
if(anchor&&anchor.parentNode)anchor.parentNode.insertBefore(sec,anchor.nextSibling);
else main.appendChild(sec);
}catch(e){}
})();

/* WeLux — corrección: ocultar por secciones en las páginas principales de división.
   Gear, Careers y Studio llevan todo el contenido dentro de un contenedor único,
   por eso ocultar los hijos directos de <main> no bastaba. Aquí se ocultan todas
   las <section> de main salvo el hero y las secciones nuevas, las tarjetas muestran
   su sección de detalle al pulsarlas, y se aligeran la navegación y el pie. */
(function(){
'use strict';
try{
var path=(location.pathname||'/').replace(/\/+$/,'')||'/';
var parts=path.split('/').filter(function(s){return s;});
var LANGS=['en','fr','de','pt','lu'];
var lang='es';var rest=parts.slice();
if(LANGS.indexOf(parts[0])>=0){lang=parts[0];rest=parts.slice(1);}
var slug=(rest[0]||'').replace(/\.html$/,'');
if(['studio','gear'].indexOf(slug)<0||rest.length!==1)return; /* Careers queda fuera: su contenido completo debe verse. */
var main=document.querySelector('main');if(!main)return;
var h1=document.querySelector('main h1');if(!h1)return;
var heroSec=h1.closest('section,header')||h1;
var KEYS={gear:[['arsenal','camera','cámara','kamera','caméra'],['set','disponib','availab','verfüg'],['glam','imagen','image','bild']],careers:[['oferta','job','offre','angebot','emprego','stelle'],['aplic','apply','postul','bewerb','candidat'],['proceso','roadmap','process','prozess','ablauf']],studio:[['producci','production','produktion'],['proyecto','project','projet','projekt'],['contact','kontakt']]};
var keys=KEYS[slug]||KEYS.studio;
function isKeep(e){if(!e)return false;if(e===heroSec)return true;if(e.classList&&(e.classList.contains('welux-clauses')||e.classList.contains('welux-services')))return true;if(e.id==='welux-cards'||e.id==='welux-servicios'||e.id==='welux-productos')return true;return false;}
var hidden=[];
Array.prototype.slice.call(main.querySelectorAll('section')).forEach(function(s){
if(isKeep(s)||heroSec.contains(s)||s.contains(h1))return;
if(s.closest('.welux-cards'))return;
s.style.display='none';hidden.push(s);});
Array.prototype.slice.call(main.children).forEach(function(ch){
if(isKeep(ch)||ch===heroSec||ch.contains(heroSec))return;
if(ch.querySelector('section')||ch.querySelector('.welux-cards,.welux-clauses,.welux-services'))return;
if((ch.textContent||'').trim().length>0)ch.style.display='none';});
var shown=null;
function closeAll(){hidden.forEach(function(s){s.style.display='none';s.classList.remove('welux-detail-open');});shown=null;}
function findTarget(words){
for(var i=0;i<hidden.length;i++){
var hs=hidden[i].querySelectorAll('h1,h2,h3');
for(var j=0;j<hs.length;j++){
var t=(hs[j].textContent||'').toLowerCase();
for(var k=0;k<words.length;k++){if(t.indexOf(words[k])>=0)return hidden[i];}}}
return null;}
Array.prototype.slice.call(document.querySelectorAll('#welux-cards .welux-card')).forEach(function(card,idx){
var old=card.querySelector('a,button');if(!old)return;
var label=old.textContent;
var target=findTarget(keys[idx]||[])||hidden[hidden.length-1]||null;
var b=document.createElement('button');b.type='button';b.textContent=label;
b.addEventListener('click',function(){
if(shown===target){closeAll();return;}
closeAll();
if(target){target.style.display='block';target.classList.add('welux-detail-open');shown=target;target.style.scrollMarginTop='90px';(function(_t){var _p=_t.parentElement;while(_p&&_p!==document.body){if(_p.style.display==='none')_p.style.display='block';_p=_p.parentElement;}})(target);target.scrollIntoView({behavior:'smooth',block:'start'});}});
old.parentNode.replaceChild(b,old);});
var nav=document.querySelector('header nav');if(nav)nav.style.display='none';Array.prototype.slice.call(document.querySelectorAll('a[href="#calculadora"],a[href="#reserva"]')).forEach(function(a){a.addEventListener('click',function(ev){var t=document.getElementById(a.getAttribute('href').slice(1));if(!t)return;ev.preventDefault();closeAll();var n=t;while(n&&n!==document.body){if(n.style)n.style.display='block';n=n.parentElement;}t.classList.add('welux-detail-open');shown=t;t.scrollIntoView({behavior:'smooth',block:'start'});});});
Array.prototype.slice.call(document.querySelectorAll('body>section,main+section,footer section')).forEach(function(s){var h=s.querySelector('h1,h2,h3');if(h&&/invitaciones|invitations/i.test(h.textContent))s.style.display='none';});
Array.prototype.slice.call(document.querySelectorAll('footer h4')).forEach(function(h){if(/arsenal|experiencias|talento|talent|invitaciones|invitations|catálogo|catalogue|rodaje|shoot/i.test(h.textContent)){var d=h.closest('div');if(d)d.style.display='none';}});
}catch(e){}
})();

/* WeLux — corrección de contraste: títulos de las tarjetas simples y de las
   secciones nuevas en oscuro, porque las páginas de división usan tema oscuro. */
(function(){'use strict';try{var s=document.createElement('style');s.textContent='.welux-card h3{color:#141310!important}header a[href="#calculadora"]{white-space:nowrap!important;flex-shrink:0!important;max-width:none!important}header nav a{white-space:nowrap!important}header div{flex-wrap:wrap!important;height:auto!important;min-height:3.5rem!important;padding-top:.5rem!important;padding-bottom:.5rem!important}main section a[href="#calculadora"]{background:#fff!important;color:#1a1a1a!important;border-color:#c9a227!important}main section a[href="#calculadora"] span{color:#1a1a1a!important}.welux-services>h2{color:#141310!important}';document.head.appendChild(s);}catch(e){}})();

/* WeLux — cargar el CSS compartido (paleta de la home) en las páginas que no lo enlazan
   y convertir franjas de cifras, tarjetas oscuras y bloques destacados en widgets claros.
   Aplica en todo el sitio (home, Studio, Careers, Gear, Films, legales y todos los idiomas):
   sin el CSS, las páginas de división no tenían las variables --p-* ni las reglas de paleta,
   así que el selector persistente del footer no les afectaba. */
(function(){
'use strict';
try{
if(!document.querySelector('link[href*="welux-v2.css"]')){
var l=document.createElement('link');l.rel='stylesheet';l.href='/assets/css/welux-v2.css';document.head.appendChild(l);
}
function mark(){
var main=document.querySelector('main');if(!main)return;
var h1=main.querySelector('h1');
function isDark(el){var c;try{c=getComputedStyle(el).backgroundColor;}catch(e){return false;}if(!c)return false;var m=c.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)/);if(!m)return false;if(m.length>4&&parseFloat(m[4])<0.5)return false;return (+m[1])+(+m[2])+(+m[3])<380;}
function bigNum(k){var els=[k].concat(Array.prototype.slice.call(k.querySelectorAll('*')));for(var i=0;i<els.length;i++){var fs=parseFloat(getComputedStyle(els[i]).fontSize);if(fs>=18&&/\d/.test(els[i].textContent||''))return true;}return false;}
Array.prototype.slice.call(main.querySelectorAll('div,section')).forEach(function(p){
if(p.classList.contains('welux-widget-row')||p.closest('.welux-cards,.welux-services,.welux-widget-row'))return;
if(p.closest('form'))return;
if(h1&&p.contains(h1))return;
var kids=Array.prototype.slice.call(p.children).filter(function(k){return k.nodeType===1&&!k.querySelector('video');});
if(kids.length<3||kids.length>6)return;
var ok=kids.every(function(k){var t=(k.textContent||'').replace(/\s+/g,' ').trim();return t.length>0&&t.length<=90&&bigNum(k);});
if(!ok)return;
p.classList.add('welux-widget-row');
kids.forEach(function(k){k.classList.add('welux-widget');});
});
Array.prototype.slice.call(main.querySelectorAll('div,section')).forEach(function(el){
if(el.classList.contains('welux-widget')||el.closest('.welux-cards,.welux-services,.welux-widget,.welux-widget-row'))return;
if(el.closest('form')||el.querySelector('video'))return;
if(h1&&el.contains(h1))return;
if(!el.querySelector('h2,h3,h4'))return;
if(isDark(el)){el.classList.add('welux-widget');}
});
}
mark();setTimeout(mark,800);
}catch(e){}
})();

/* WeLux — barrido de paleta: cualquier fondo oscuro que quede en las páginas que no son la home
   (clases propias, estilos en línea, gradientes oscuros) pasa a la paleta clara de la home.
   El texto claro sobre fondo ahora claro pasa a tinta; el texto sobre vídeo o foto se respeta,
   y los botones y el selector de paleta conservan su estilo. */
(function(){
'use strict';
try{
var path=(location.pathname||'/').replace(/\/+$/,'')||'/';
var parts=path.split('/').filter(function(s){return s;});
var LANGS=['en','fr','de','pt','lu'];
var rest=parts.slice();
if(LANGS.indexOf(parts[0])>=0)rest=parts.slice(1);
var slug=(rest[0]||'').replace(/\.html$/,'');
if(rest.length===0||slug==='index'){if(!document.querySelector('script[src*="welux-backend.js"]')){var _wb=document.createElement('script');_wb.src='/assets/js/welux-backend.js';document.head.appendChild(_wb);}return;};
var SKIP='.welux-card,.welux-widget,.welux-clauses,.welux-hero-button,.welux-palette-picker,.welux-palette-grid,.welux-idioma-flotante,#welux-footer-v2';
function lum(c){var m=c.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(?:\D+([\d.]+))?/);if(!m)return null;var a=m[4]===undefined?1:parseFloat(m[4]);return {sum:(+m[1])+(+m[2])+(+m[3]),a:a};}
function sweep(){
Array.prototype.slice.call(document.querySelectorAll('main video,main img')).forEach(function(m){var p=m.closest('div');if(p)p.setAttribute('data-welux-media','1');});
var all=Array.prototype.slice.call(document.body.querySelectorAll('*'));
all.forEach(function(el){
if(el.closest(SKIP))return;
if(el.tagName==='A'||el.tagName==='BUTTON'||el.tagName==='VIDEO'||el.tagName==='IMG')return;
var cs=getComputedStyle(el);
var bg=lum(cs.backgroundColor);
if(bg&&bg.a>0.5&&bg.sum<380){el.style.setProperty('background-color','var(--p-card)','important');}
var bi=cs.backgroundImage;
if(bi&&bi.indexOf('gradient')>=0&&bi.indexOf('url(')<0){el.style.setProperty('background-image','none','important');}
});
all.forEach(function(el){
if(el.closest(SKIP))return;
if(el.closest('[data-welux-media]'))return;
if(el.tagName==='A'||el.tagName==='BUTTON'||el.tagName==='VIDEO'||el.tagName==='IMG')return;
var cs=getComputedStyle(el);
var col=lum(cs.color);
if(col&&col.a>0.5&&col.sum>500){el.style.setProperty('color','var(--p-ink)','important');}
});
}
sweep();setTimeout(sweep,800);var _w=document.createElement('script');_w.src='/assets/js/welux-backend.js';document.head.appendChild(_w); /* Carga welux-backend.js: backend Cloudflare + D1, botones, idiomas y casita (2026-11-08). */
}catch(e){}
})();

/* WeLux — Widgets de reseñas (Google, Editus y Trustpilot) en la home y en Studio, en los 6 idiomas.
Datos verificados el 8 nov 2026: Google Business «Welux Digital Services», 4,9★, 8 reseñas
(citas literales de sus reseñas); Editus, ficha «WeLux Digital Services SARLS» (id 2168458),
sin valoración publicada aquí porque Editus bloquea esta red (DataDome) y no se inventa ninguna
cifra; Trustpilot aún no tiene perfil de WeLux (búsqueda vacía y 404 en /review/weluxhub.com),
así que el perfil hay que crearlo en Trustpilot Business. Google, Editus y Trustpilot NO
comparten reseñas: cada plataforma guarda la suya, así que una misma reseña no se publica sola
en las tres. El formulario propio guarda la reseña en el backend (Worker + D1) y guía al cliente
a publicarla en cada plataforma. */
(function(){
'use strict';
try{
var path=(location.pathname||'/').replace(/\/+$/,'')||'/';
var parts=path.split('/').filter(function(s){return s;});
var LANGS=['en','fr','de','pt','lu'];
var lang='es';var rest=parts.slice();
if(LANGS.indexOf(parts[0])>=0){lang=parts[0];rest=parts.slice(1);}
var slug=(rest[0]||'').replace(/\.html$/,'');
var isHome=rest.length===0||slug==='index';
var isStudio=slug==='studio'&&rest.length===1;
if(!isHome&&!isStudio)return;
if(document.getElementById('resenas'))return;
var GOOGLE_URL='https://www.google.com/maps/search/?api=1&query=Welux+Digital+Services';
var EDITUS_URL='https://www.editus.lu/en/welux-digital-services-sarls-luxembourg-2168458';
var TRUST_URL='https://www.trustpilot.com/search?query=weluxhub';
var RV={
es:{t:'Lo que dicen de WeLux',l:'4,9★ en Google con 8 reseñas. Cada plataforma guarda su propia reseña: una misma opinión no se publica sola en las tres. Déjala aquí y te guiamos a publicarla en cada una.',g:'Google',gN:'4,9★ · 8 reseñas',gQ:'«Hemos hecho la documentación de un evento, fotos y vídeos: un equipo muy profesional, simpático y dinámico.»',gA:'Abel Rhodes Kane · 5★',gQ2:'«Muy buena.»',gA2:'Carlos Mario Rondon · 5★',e:'Editus',eN:'Ficha en el directorio de empresas de Luxemburgo',eB:'Ver ficha y opiniones en Editus',tp:'Trustpilot',tpN:'Aún no estamos en Trustpilot',tpL:'Sé la primera persona en opinar en Trustpilot.',tpB:'Añadir la empresa en Trustpilot',w:'Escribe tu reseña',v:'Ver en Google',fT:'Deja tu reseña',fN:'Tu nombre y tu correo solo se usan para guardar tu reseña y responderte. Sin spam.',nP:'Tu nombre',eP:'Tu correo',mP:'Tu reseña',sL:'Tu valoración',sB:'Guardar mi reseña',okT:'¡Gracias! Ahora publícala en cada plataforma',okL:'Google, Editus y Trustpilot no comparten reseñas entre sí: cada una pide su propia publicación. Tu reseña ya quedó guardada con nosotros.',pG:'Publicar en Google',pE:'Publicar en Editus',pT:'Publicar en Trustpilot'},
en:{t:'What they say about WeLux',l:'4.9★ on Google with 8 reviews. Each platform keeps its own review: one opinion does not publish itself on all three. Leave yours here and we will guide you to post it on each one.',g:'Google',gN:'4.9★ · 8 reviews',gQ:'«Hemos hecho la documentación de un evento, fotos y vídeos: un equipo muy profesional, simpático y dinámico.»',gA:'Abel Rhodes Kane · 5★',gQ2:'«Muy buena.»',gA2:'Carlos Mario Rondon · 5★',e:'Editus',eN:'Listing in Luxembourg’s business directory',eB:'See listing and reviews on Editus',tp:'Trustpilot',tpN:'We are not on Trustpilot yet',tpL:'Be the first person to review us on Trustpilot.',tpB:'Add the company on Trustpilot',w:'Write your review',v:'View on Google',fT:'Leave your review',fN:'Your name and email are only used to save your review and reply to you. No spam.',nP:'Your name',eP:'Your email',mP:'Your review',sL:'Your rating',sB:'Save my review',okT:'Thank you! Now post it on each platform',okL:'Google, Editus and Trustpilot do not share reviews with each other: each one asks for its own post. Your review is already saved with us.',pG:'Post on Google',pE:'Post on Editus',pT:'Post on Trustpilot'},
fr:{t:'Ce qu’on dit de WeLux',l:'4,9★ sur Google avec 8 avis. Chaque plateforme garde son propre avis : un même avis ne se publie pas tout seul sur les trois. Laissez le vôtre ici et nous vous guiderons pour le publier sur chacune.',g:'Google',gN:'4,9★ · 8 avis',gQ:'«Hemos hecho la documentación de un evento, fotos y vídeos: un equipo muy profesional, simpático y dinámico.»',gA:'Abel Rhodes Kane · 5★',gQ2:'«Muy buena.»',gA2:'Carlos Mario Rondon · 5★',e:'Editus',eN:'Fiche dans l’annuaire des entreprises du Luxembourg',eB:'Voir la fiche et les avis sur Editus',tp:'Trustpilot',tpN:'Nous ne sommes pas encore sur Trustpilot',tpL:'Soyez la première personne à donner votre avis sur Trustpilot.',tpB:'Ajouter l’entreprise sur Trustpilot',w:'Écrire un avis',v:'Voir sur Google',fT:'Laissez votre avis',fN:'Votre nom et votre e-mail servent seulement à enregistrer votre avis et à vous répondre. Pas de spam.',nP:'Votre nom',eP:'Votre e-mail',mP:'Votre avis',sL:'Votre note',sB:'Enregistrer mon avis',okT:'Merci ! Publiez-le maintenant sur chaque plateforme',okL:'Google, Editus et Trustpilot ne partagent pas leurs avis entre eux : chacun demande sa propre publication. Votre avis est déjà enregistré chez nous.',pG:'Publier sur Google',pE:'Publier sur Editus',pT:'Publier sur Trustpilot'},
de:{t:'Das sagen andere über WeLux',l:'4,9★ bei Google mit 8 Bewertungen. Jede Plattform hat ihre eigenen Bewertungen: Eine Meinung veröffentlicht sich nicht von allein auf allen dreien. Hinterlassen Sie Ihre hier und wir zeigen Ihnen, wie Sie sie auf jeder veröffentlichen.',g:'Google',gN:'4,9★ · 8 Bewertungen',gQ:'«Hemos hecho la documentación de un evento, fotos y vídeos: un equipo muy profesional, simpático y dinámico.»',gA:'Abel Rhodes Kane · 5★',gQ2:'«Muy buena.»',gA2:'Carlos Mario Rondon · 5★',e:'Editus',eN:'Eintrag im Unternehmensverzeichnis von Luxemburg',eB:'Eintrag und Bewertungen auf Editus ansehen',tp:'Trustpilot',tpN:'Wir sind noch nicht auf Trustpilot',tpL:'Seien Sie die erste Person, die uns auf Trustpilot bewertet.',tpB:'Unternehmen auf Trustpilot hinzufügen',w:'Bewertung schreiben',v:'Auf Google ansehen',fT:'Hinterlassen Sie Ihre Bewertung',fN:'Ihr Name und Ihre E-Mail werden nur verwendet, um Ihre Bewertung zu speichern und Ihnen zu antworten. Kein Spam.',nP:'Ihr Name',eP:'Ihre E-Mail',mP:'Ihre Bewertung',sL:'Ihre Bewertung',sB:'Meine Bewertung speichern',okT:'Danke! Veröffentlichen Sie sie jetzt auf jeder Plattform',okL:'Google, Editus und Trustpilot teilen ihre Bewertungen nicht miteinander: Jede verlangt ihre eigene Veröffentlichung. Ihre Bewertung ist bei uns bereits gespeichert.',pG:'Auf Google veröffentlichen',pE:'Auf Editus veröffentlichen',pT:'Auf Trustpilot veröffentlichen'},
pt:{t:'O que dizem da WeLux',l:'4,9★ no Google com 8 avaliações. Cada plataforma guarda a sua própria avaliação: uma mesma opinião não se publica sozinha nas três. Deixe a sua aqui e guiamos você para a publicar em cada uma.',g:'Google',gN:'4,9★ · 8 avaliações',gQ:'«Hemos hecho la documentación de un evento, fotos y vídeos: un equipo muy profesional, simpático y dinâmico.»',gA:'Abel Rhodes Kane · 5★',gQ2:'«Muy buena.»',gA2:'Carlos Mario Rondon · 5★',e:'Editus',eN:'Ficha no diretório de empresas do Luxemburgo',eB:'Ver ficha e avaliações no Editus',tp:'Trustpilot',tpN:'Ainda não estamos no Trustpilot',tpL:'Seja a primeira pessoa a avaliar-nos no Trustpilot.',tpB:'Adicionar a empresa no Trustpilot',w:'Escrever avaliação',v:'Ver no Google',fT:'Deixe a sua avaliação',fN:'O seu nome e o seu e-mail só servem para guardar a sua avaliação e responder-lhe. Sem spam.',nP:'O seu nome',eP:'O seu e-mail',mP:'A sua avaliação',sL:'A sua classificação',sB:'Guardar a minha avaliação',okT:'Obrigado! Agora publique-a em cada plataforma',okL:'O Google, o Editus e o Trustpilot não partilham avaliações entre si: cada um pede a sua própria publicação. A sua avaliação já ficou guardada connosco.',pG:'Publicar no Google',pE:'Publicar no Editus',pT:'Publicar no Trustpilot'},
lu:{t:'Wat anerer iwwer WeLux soen',l:'4,9★ op Google mat 8 Bewäertungen. Jidd Plattform huet hir eege Bewäertungen: Eng Meenung verëffentlecht sech net vun eleng op allen dräi. Loosst Är hei a mir weisen Iech, wéi Dir se op jiddwer verëffentlecht.',g:'Google',gN:'4,9★ · 8 Bewäertungen',gQ:'«Hemos hecho la documentación de un evento, fotos y vídeos: un equipo muy profesional, simpático y dinámico.»',gA:'Abel Rhodes Kane · 5★',gQ2:'«Muy buena.»',gA2:'Carlos Mario Rondon · 5★',e:'Editus',eN:'Androung am Entrepriseverzeichnis vu Lëtzebuerg',eB:'Androung a Bewäertungen op Editus kucken',tp:'Trustpilot',tpN:'Mir sinn nach net op Trustpilot',tpL:'Sidd déi éischt Persoun, déi eis op Trustpilot bewäert.',tpB:'Entreprise op Trustpilot derbäisetzen',w:'Bewäertung schreiwen',v:'Op Google kucken',fT:'Loosst Är Bewäertung',fN:'Ären Numm an Är E-Mail gi just benotzt, fir Är Bewäertung ze späicheren an Iech ze äntweren. Kee Spam.',nP:'Ären Numm',eP:'Är E-Mail',mP:'Är Bewäertung',sL:'Är Bewäertung',sB:'Meng Bewäertung späicheren',okT:'Merci! Verëffentlecht se elo op jiddwer Plattform',okL:'Google, Editus an Trustpilot deelen hir Bewäertungen net mateneen: Jidd freet hir eege Verëffentlechung. Är Bewäertung ass bei eis scho gespäichert.',pG:'Op Google verëffentlechen',pE:'Op Editus verëffentlechen',pT:'Op Trustpilot verëffentlechen'}
};
var D=RV[lang]||RV.es;
function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e;}
var st=document.createElement('style');
st.textContent='.welux-resenas{max-width:72rem;margin:0 auto;padding:2.5rem 1.5rem;text-align:center}.welux-resenas h2{color:#16232e}.welux-resenas .welux-services-sub{color:#33414e}.welux-resenas .welux-card{text-align:left;background:#fffdf8;border:1px solid rgba(22,35,46,.18);border-radius:14px}.welux-resenas .welux-card h3{color:#16232e}.welux-resenas .welux-card p{color:#33414e}.welux-resena-stars{font-size:1.15rem;color:#c9a227;letter-spacing:.1em}.welux-resena-cita{font-style:italic}.welux-resena-form{max-width:36rem;margin:1.5rem auto 0;text-align:left;background:#fffdf8;border:1px solid rgba(22,35,46,.18);border-radius:14px;padding:1.25rem}.welux-resena-form input,.welux-resena-form textarea{display:block;width:100%;box-sizing:border-box;margin:.5rem 0;padding:.6rem .7rem;border:1px solid rgba(22,35,46,.35);border-radius:8px;font:inherit;color:#16232e;background:#fff}.welux-resena-form textarea{min-height:5rem;resize:vertical}.welux-resena-form button[type=submit]{display:inline-block;margin-top:.5rem;padding:.7rem 1.2rem;border:0;border-radius:999px;background:#d9a441;color:#16232e;font-weight:800;cursor:pointer}.welux-resena-guia{max-width:36rem;margin:1.5rem auto 0;text-align:left;background:#eef3e6;border:1px solid #9db38a;border-radius:14px;padding:1.25rem;color:#16232e}.welux-resena-guia a{display:inline-block;margin:.35rem .5rem .35rem 0;padding:.6rem 1rem;border-radius:999px;background:#16232e;color:#fdf7ee;text-decoration:none;font-weight:700}.welux-resena-priv{font-size:.85rem;color:#5a6b7a}.welux-resena-rate{display:flex;gap:.25rem;align-items:center;margin:.5rem 0}.welux-resena-rate label{font-size:1.7rem;line-height:1;cursor:pointer;color:#c9c2b4}.welux-resena-rate label.on{color:#c9a227}.welux-resena-rate input{position:absolute;opacity:0;pointer-events:none}';
document.head.appendChild(st);
var sec=el('section','welux-services welux-resenas');sec.id='resenas';
sec.appendChild(el('h2',null,D.t));
sec.appendChild(el('p','welux-services-sub',D.l));
var grid=el('div','welux-cards');
var c1=el('article','welux-card');
c1.appendChild(el('h3',null,D.g));
c1.appendChild(el('p','welux-resena-stars','★★★★★'));
c1.appendChild(el('p',null,D.gN));
c1.appendChild(el('p','welux-resena-cita',D.gQ));
c1.appendChild(el('p',null,D.gA));
c1.appendChild(el('p','welux-resena-cita',D.gQ2));
c1.appendChild(el('p',null,D.gA2));
var a1=el('a',null,D.v);a1.href=GOOGLE_URL;a1.target='_blank';a1.rel='noopener';c1.appendChild(a1);
grid.appendChild(c1);
var c2=el('article','welux-card');
c2.appendChild(el('h3',null,D.e));
c2.appendChild(el('p',null,D.eN));
var a2=el('a',null,D.eB);a2.href=EDITUS_URL;a2.target='_blank';a2.rel='noopener';c2.appendChild(a2);
var a2b=el('a',null,D.w);a2b.href=EDITUS_URL;a2b.target='_blank';a2b.rel='noopener';c2.appendChild(a2b);
grid.appendChild(c2);
var c3=el('article','welux-card');
c3.appendChild(el('h3',null,D.tp));
c3.appendChild(el('p',null,D.tpN));
c3.appendChild(el('p',null,D.tpL));
var a3=el('a',null,D.tpB);a3.href=TRUST_URL;a3.target='_blank';a3.rel='noopener';c3.appendChild(a3);
grid.appendChild(c3);
sec.appendChild(grid);
var form=document.createElement('form');
form.id='welux-resena-form';form.className='welux-resena-form';form.method='post';form.action='#resenas';
form.innerHTML='<h3>'+D.fT+'</h3><label>'+D.sL+'</label><div class="welux-resena-rate"><label><input type="radio" name="valoracion" value="5" checked>★</label><label><input type="radio" name="valoracion" value="4">★</label><label><input type="radio" name="valoracion" value="3">★</label><label><input type="radio" name="valoracion" value="2">★</label><label><input type="radio" name="valoracion" value="1">★</label></div><input type="text" name="nombre" required placeholder="'+D.nP+'"><input type="email" name="email" required placeholder="'+D.eP+'"><textarea name="mensaje" required placeholder="'+D.mP+'"></textarea><input type="hidden" name="tipo" value="resena"><input type="hidden" name="origen" value="resena-web"><button type="submit">'+D.sB+'</button><p class="welux-resena-priv">'+D.fN+'</p>';
sec.appendChild(form);
var guia=el('div','welux-resena-guia');guia.hidden=true;
guia.innerHTML='<h3>'+D.okT+'</h3><p>'+D.okL+'</p>';
var g1=el('a',null,D.pG);g1.href=GOOGLE_URL;g1.target='_blank';g1.rel='noopener';guia.appendChild(g1);
var g2=el('a',null,D.pE);g2.href=EDITUS_URL;g2.target='_blank';g2.rel='noopener';guia.appendChild(g2);
var g3=el('a',null,D.pT);g3.href=TRUST_URL;g3.target='_blank';g3.rel='noopener';guia.appendChild(g3);
sec.appendChild(guia);
var footer=document.querySelector('footer');
if(footer&&footer.parentNode)footer.parentNode.insertBefore(sec,footer);else document.body.appendChild(sec);
var labels=form.querySelectorAll('.welux-resena-rate label');
function paint(){labels.forEach(function(lb){var inp=lb.querySelector('input');if(inp.checked){var n=+inp.value;labels.forEach(function(lb2,j){lb2.classList.toggle('on',j<=(5-n));});}});}
labels.forEach(function(lb){lb.addEventListener('click',function(){setTimeout(paint,0);});});
paint();
form.addEventListener('submit',function(){if(!form.checkValidity())return;setTimeout(function(){guia.hidden=false;guia.scrollIntoView({block:'nearest'});},2500);});
}catch(e){}
})();

/* Cuarta vuelta: retira del pie los enlaces rotos (Facebook sin perfil real y HogarGo sin sitio activo). */
(function(){'use strict';function limpiar(){document.querySelectorAll('a[href*="facebook.com/weluxhub"],a[href*="hogargo.pages.dev"]').forEach(function(a){a.remove();});}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',limpiar);}else{limpiar();}setTimeout(limpiar,800);})();

/* Cuarta vuelta: botón flotante de WhatsApp sin número: abre un panel con correo (sin wa.me ni tel:). */
(function(){'use strict';var T={es:['Nuestro WhatsApp llega pronto — escríbenos ahora a info@weluxhub.com','Escribir a info@weluxhub.com','WhatsApp — escríbenos por correo','Cerrar'],en:['Our WhatsApp is coming soon — write to us now at info@weluxhub.com','Write to info@weluxhub.com','WhatsApp — write to us by email','Close'],fr:['Notre WhatsApp arrive bientôt — écrivez-nous dès maintenant à info@weluxhub.com','Écrire à info@weluxhub.com','WhatsApp — écrivez-nous par e-mail','Fermer'],de:['Unser WhatsApp kommt bald — schreiben Sie uns jetzt an info@weluxhub.com','An info@weluxhub.com schreiben','WhatsApp — schreiben Sie uns per E-Mail','Schließen'],pt:['O nosso WhatsApp chega em breve — escreva-nos já para info@weluxhub.com','Escrever para info@weluxhub.com','WhatsApp — escreva-nos por e-mail','Fechar'],lu:['Eise WhatsApp kënnt geschwënn — schreift eis elo un info@weluxhub.com','Un info@weluxhub.com schreiwen','WhatsApp — schreift eis per E-Mail','Zoumaachen']};var lang=(document.documentElement.lang||'es').slice(0,2).toLowerCase();var t=T[lang]||T.es;if(document.getElementById('welux-whatsapp-flotante'))return;var st=document.createElement('style');st.textContent='#welux-whatsapp-flotante{position:fixed;right:16px;bottom:88px;z-index:2147482999}#welux-whatsapp-flotante button{width:56px;height:56px;border-radius:50%;border:0;background:#25d366;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,.25)}#welux-whatsapp-panel{position:fixed;right:16px;bottom:156px;z-index:2147483001;width:min(300px,calc(100vw - 32px));background:#fff;color:#222;border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.25);padding:16px}#welux-whatsapp-panel a{display:inline-block;margin-top:10px;background:#25d366;color:#fff;text-decoration:none;font-weight:700;padding:10px 14px;border-radius:999px}#welux-whatsapp-panel button{float:right;background:none;border:0;font-size:18px;cursor:pointer;color:#666}';document.head.appendChild(st);var wrap=document.createElement('div');wrap.id='welux-whatsapp-flotante';wrap.innerHTML='<button type="button" aria-label="'+t[2]+'" aria-expanded="false" aria-controls="welux-whatsapp-panel"><svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M12 3C6.5 3 2 7.1 2 12.2c0 1.9.6 3.7 1.7 5.1L2 21l3.9-1.6c1.3.7 2.8 1.1 4.1 1.1 5.5 0 10-4.1 10-9.2S17.5 3 12 3zm0 2c4.4 0 8 3.2 8 7.2s-3.6 7.2-8 7.2c-1.3 0-2.6-.3-3.7-.9l-.4-.2-2.4 1 .9-2.3-.3-.4A7.2 7.2 0 0 1 4 12.2C4 8.2 7.6 5 12 5z"/></svg></button>';document.body.appendChild(wrap);var panel=document.createElement('div');panel.id='welux-whatsapp-panel';panel.hidden=true;panel.setAttribute('role','dialog');panel.setAttribute('aria-label',t[2]);panel.innerHTML='<button type="button" aria-label="'+t[3]+'">×</button><p style="margin:0">'+t[0]+'</p><a href="mailto:info@weluxhub.com">'+t[1]+'</a>';document.body.appendChild(panel);var btn=wrap.querySelector('button');function toggle(open){panel.hidden=!open;btn.setAttribute('aria-expanded',String(open));}btn.addEventListener('click',function(){toggle(panel.hidden);});panel.querySelector('button').addEventListener('click',function(){toggle(false);});document.addEventListener('keydown',function(e){if(e.key==='Escape')toggle(false);});document.addEventListener('click',function(e){if(!panel.hidden&&!panel.contains(e.target)&&!wrap.contains(e.target))toggle(false);});})();

/* Cuarta vuelta: desplazamiento suave en los anclajes, margen para que el encabezado fijo no tape el contenido y estado activo en el menú. */
(function(){'use strict';var st=document.createElement('style');st.textContent='html{scroll-behavior:smooth!important}section[id],article[id],div[id],main[id],footer[id],form[id]{scroll-margin-top:110px!important}.welux-nav-activo{font-weight:700;text-decoration:underline;text-underline-offset:4px}@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto!important}}';document.head.appendChild(st);var path=(location.pathname||'/').replace(/\/+$/,'')||'/';document.querySelectorAll('header nav a').forEach(function(a){var h=(a.getAttribute('href')||'').replace(/\/+$/,'')||'/';if(h===path||(h!=='/'&&path.indexOf(h+'/')===0)){a.setAttribute('aria-current','page');a.classList.add('welux-nav-activo');}});document.addEventListener('click',function(e){var a=e.target.closest?e.target.closest('a[href^="#"]'):null;if(!a)return;var id=a.getAttribute('href');if(!id||id.length<2)return;var el=document.getElementById(id.slice(1));if(!el)return;e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});try{history.replaceState(null,'',id);}catch(err){}});})();

/* Cuarta vuelta: las tarjetas de Studio y Gear muestran de verdad su detalle (quedaba oculto dentro de un contenedor también oculto) y vuelve la navegación principal en esas páginas. */
(function(){'use strict';var nav=document.querySelector('header nav');if(nav&&nav.style.display==='none')nav.style.display='';document.addEventListener('click',function(e){var b=e.target&&e.target.closest?e.target.closest('#welux-cards .welux-card button'):null;if(!b)return;setTimeout(function(){var open=document.querySelector('.welux-detail-open');if(open){var n=open;while(n&&n!==document.body){if(n.style&&n.style.display==='none')n.style.display='block';n=n.parentElement;}open.scrollIntoView({behavior:'smooth',block:'start'});}else{var f=document.querySelector('main form')||document.getElementById('resenas');if(f)f.scrollIntoView({behavior:'smooth',block:'start'});}},80);});})();

/* Cuarta vuelta: el desplazamiento (anclas y tarjetas) respeta la altura real del encabezado fijo de cada página, para que nunca tape el contenido. */
(function(){'use strict';function ajustar(){var h=document.querySelector('header');var alto=h?h.offsetHeight:90;document.documentElement.style.scrollPaddingTop=(alto+16)+'px';}ajustar();window.addEventListener('resize',ajustar);window.addEventListener('load',ajustar);setTimeout(ajustar,800);})();

/* Cuarta vuelta: al abrir las tarjetas de Studio y Gear, el desplazamiento se calcula con la altura del encabezado en ese momento (crece al cargar) y se refresca el margen de las anclas. */
(function(){'use strict';function margen(){var h=document.querySelector('header');return (h?h.offsetHeight:90)+32;}function aplicar(){document.documentElement.style.scrollPaddingTop=margen()+'px';}aplicar();window.addEventListener('load',aplicar);window.addEventListener('resize',aplicar);setTimeout(aplicar,2000);document.addEventListener('click',function(e){var b=e.target&&e.target.closest?e.target.closest('#welux-cards .welux-card button'):null;if(!b)return;setTimeout(function(){var open=document.querySelector('.welux-detail-open');if(!open)return;var y=open.getBoundingClientRect().top+window.scrollY-margen();window.scrollTo({top:y,behavior:'smooth'});},180);});})();

/* Cuarta vuelta: las secciones de detalle de Studio y Gear se abren con aire arriba para que el encabezado fijo no corte su título. */
(function(){'use strict';var st=document.createElement('style');st.textContent='.welux-detail-open{padding-top:120px!important}';document.head.appendChild(st);})();

/* Cuarta vuelta: el enlace de Invitaciones del menú lleva a la sección de invitaciones del portal, también desde las páginas de cada división. */
(function(){'use strict';var m=(location.pathname||'/').match(/^\/(en|fr|de|pt|lu)(\/|$)/);var base=m?('/'+m[1]+'/#invitaciones'):'/#invitaciones';var enCasa=location.pathname==='/'||(!!m&&location.pathname==='/'+m[1]+'/');if(!enCasa){document.querySelectorAll('a[href="#invitaciones"]').forEach(function(a){a.setAttribute('href',base);});}})();

/* Quinta vuelta: separa las reseñas en dos cuadros propios, Google y Editus, cada uno con su formulario al Worker y su guía para publicar en esa plataforma. */(function(){'use strict';var HECHO=false;function pintar(f){var ls=f.querySelectorAll('.welux-resena-rate label');function pinta(){ls.forEach(function(lb){var i=lb.querySelector('input');if(i&&i.checked){var n=+i.value;ls.forEach(function(lb2,j){lb2.classList.toggle('on',j<=(5-n));});}});}ls.forEach(function(lb){lb.addEventListener('click',function(){setTimeout(pinta,0);});});f.querySelectorAll('input[name="valoracion"]').forEach(function(r){r.addEventListener('change',pinta);});pinta();}function dividir(){if(HECHO)return;var orig=document.getElementById('welux-resena-form');if(!orig)return;var guia=document.querySelector('.welux-resena-guia');var st=document.createElement('style');st.textContent='.welux-resena-forms{display:grid;grid-template-columns:1fr 1fr;gap:1rem;max-width:72rem;margin:1rem auto 0}@media(max-width:640px){.welux-resena-forms{grid-template-columns:1fr}}.welux-resena-forms .welux-resena-form{max-width:none;margin:0}.welux-resena-forms .welux-resena-guia{max-width:none;margin:1rem 0 0}';document.head.appendChild(st);var wrap=document.createElement('div');wrap.className='welux-resena-forms';orig.parentNode.insertBefore(wrap,orig);var conf=[{id:'welux-resena-form-google',origen:'resena-google',titulo:'Google',link:0},{id:'welux-resena-form-editus',origen:'resena-editus',titulo:'Editus',link:1}];conf.forEach(function(c){var box=document.createElement('div');var f=orig.cloneNode(true);f.id=c.id;var o=f.querySelector('input[name="origen"]');if(o)o.value=c.origen;var t=f.querySelector('h3');if(t)t.textContent=c.titulo+' — '+t.textContent;var g=guia?guia.cloneNode(true):document.createElement('div');g.className='welux-resena-guia';g.hidden=true;var gp=g.querySelector('p');if(gp){var gl=(document.documentElement.lang||'es').slice(0,2);var GT={es:['Ya la tenemos. Para que cuente en Google, publícala en Google con el enlace de abajo: cada plataforma guarda su propia reseña.','Ya la tenemos. Para que cuente en Editus, publícala en Editus con el enlace de abajo: cada plataforma guarda su propia reseña.'],en:['Got it. For it to count on Google, publish it on Google with the link below: each platform keeps its own review.','Got it. For it to count on Editus, publish it on Editus with the link below: each platform keeps its own review.'],fr:['Bien reçu. Pour que votre avis compte sur Google, publiez-le sur Google avec le lien ci-dessous : chaque plateforme garde son propre avis.','Bien reçu. Pour que votre avis compte sur Editus, publiez-le sur Editus avec le lien ci-dessous : chaque plateforme garde son propre avis.'],de:['Danke, wir haben sie erhalten. Damit sie auf Google zählt, veröffentlichen Sie sie auf Google über den Link unten: Jede Plattform speichert ihre eigene Bewertung.','Danke, wir haben sie erhalten. Damit sie auf Editus zählt, veröffentlichen Sie sie auf Editus über den Link unten: Jede Plattform speichert ihre eigene Bewertung.'],pt:['Recebemos. Para que conte no Google, publique-a no Google com o link abaixo: cada plataforma guarda a sua própria avaliação.','Recebemos. Para que conte no Editus, publique-a no Editus com o link abaixo: cada plataforma guarda a sua própria avaliação.'],lu:['Merci, mir hunn se kritt. Fir datt se op Google zielt, publizéiert se op Google mam Link hei drënner: all Plattform späichert hir eege Bewäertung.','Merci, mir hunn se kritt. Fir datt se op Editus zielt, publizéiert se op Editus mam Link hei drënner: all Plattform späichert hir eege Bewäertung.']};var gt=GT[gl]||GT.es;gp.textContent=gt[c.link];}var ls=g.querySelectorAll('a');ls.forEach(function(a,i){if(i!==c.link)a.remove();});box.appendChild(f);box.appendChild(g);pintar(f);f.addEventListener('submit',function(){if(!f.checkValidity())return;setTimeout(function(){g.hidden=false;g.scrollIntoView({block:'nearest'});},2500);});wrap.appendChild(box);});orig.remove();if(guia)guia.remove();HECHO=true;}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',dividir);dividir();setTimeout(dividir,900);})(); /* Cuarta vuelta: al cargar con un ancla en la dirección, desplaza hasta su sección aunque se haya inyectado tarde o estuviera oculta. */
(function(){'use strict';function ir(){var id=(location.hash||'').slice(1);if(!id)return;var el=document.getElementById(id);if(!el)return;var n=el;while(n&&n!==document.body){if(n.style&&n.style.display==='none')n.style.display='block';n=n.parentElement;}el.scrollIntoView({behavior:'smooth',block:'start'});}window.addEventListener('load',function(){setTimeout(ir,400);});setTimeout(ir,1200);})();
