/**
 * WeLux Ecosystem - Sovereign 6-Language Real-Time Translation Engine
 * 100% Native Pure JS, Zero External Banners, Synchronized Cross-Page Navigation
 */

window.WELUX_I18N = (function() {
  const languages = ['es', 'en', 'fr', 'de', 'pt', 'lu'];
  const dict = {
  "Todos los Portales": {
    "en": "All Portals",
    "fr": "Tous les Portails",
    "de": "Alle Portale",
    "pt": "Todos os Portais",
    "lu": "All Portaler"
  },
  "Empresas &amp; Real Estate": {
    "en": "Enterprises &amp; Real Estate",
    "fr": "Entreprises &amp; Immobilier",
    "de": "Unternehmen &amp; Immobilien",
    "pt": "Empresas &amp; Imobiliário",
    "lu": "Betriber &amp; Immobilien"
  },
  "Empresas & Real Estate": {
    "en": "Enterprises & Real Estate",
    "fr": "Entreprises & Immobilier",
    "de": "Unternehmen & Immobilien",
    "pt": "Empresas & Imobiliário",
    "lu": "Betriber & Immobilien"
  },
  "Candidatos &amp; Talento": {
    "en": "Candidates &amp; Talent",
    "fr": "Candidats &amp; Talents",
    "de": "Kandidaten &amp; Talente",
    "pt": "Candidatos &amp; Talento",
    "lu": "Kandidaten &amp; Talenter"
  },
  "Candidatos & Talento": {
    "en": "Candidates & Talent",
    "fr": "Candidats & Talents",
    "de": "Kandidaten & Talente",
    "pt": "Candidatos & Talento",
    "lu": "Kandidaten & Talenter"
  },
  "Producción &amp; Eventos": {
    "en": "Production &amp; Events",
    "fr": "Production &amp; Événements",
    "de": "Produktion &amp; Events",
    "pt": "Produção &amp; Eventos",
    "lu": "Produktioun &amp; Evenementer"
  },
  "Producción & Eventos": {
    "en": "Production & Events",
    "fr": "Production & Événements",
    "de": "Produktion & Events",
    "pt": "Produção & Eventos",
    "lu": "Produktioun & Evenementer"
  },
  "Filtrar por Especialidad Operativa": {
    "en": "Filter by Operational Specialization",
    "fr": "Filtrer par Spécialité Opérationnelle",
    "de": "Nach Fachbereich filtern",
    "pt": "Filtrar por Especialidade Operacional",
    "lu": "No Fachberäich filteren"
  },
  "Volver a WeLux Hub": {
    "en": "Return to WeLux Hub",
    "fr": "Retour au WeLux Hub",
    "de": "Zurück zum WeLux Hub",
    "pt": "Voltar ao WeLux Hub",
    "lu": "Zréck op WeLux Hub"
  },
  "Hub Matriz": {
    "en": "Master Hub",
    "fr": "Hub Matrice",
    "de": "Haupt-Hub",
    "pt": "Hub Matriz",
    "lu": "Haapt-Hub"
  },
  "3 Portales Online · Luxembourg · Madrid · Paris": {
    "en": "3 Online Portals · Luxembourg · Madrid · Paris",
    "fr": "3 Portails en ligne · Luxembourg · Madrid · Paris",
    "de": "3 Online-Portale · Luxemburg · Madrid · Paris",
    "pt": "3 Portais Online · Luxemburgo · Madrid · Paris",
    "lu": "3 Online-Portaler · Lëtzebuerg · Madrid · Paräis"
  },
  "All Systems Nominal": {
    "en": "All Systems Nominal",
    "fr": "Systèmes Nominaux",
    "de": "Systeme Nominal",
    "pt": "Sistemas Nominais",
    "lu": "Systemer Nominal"
  },
  "LUXEMBOURG · PARIS · MADRID GATEWAY / v4.8 ACTIVO": {
    "en": "LUXEMBOURG · PARIS · MADRID GATEWAY / v4.8 ACTIVE",
    "fr": "PASSERELLE LUXEMBOURG · PARIS · MADRID / v4.8 ACTIF",
    "de": "GATEWAY LUXEMBURG · PARIS · MADRID / v4.8 AKTIV",
    "pt": "PORTAL LUXEMBURGO · PARIS · MADRID / v4.8 ATIVO",
    "lu": "LUXEMBUERG · PARÄIS · MADRID PORTAL / v4.8 AKTIV"
  },
  "Un Ecosistema. Tres Divisiones de Élite.": {
    "en": "One Ecosystem. Three Elite Divisions.",
    "fr": "Un Écosystème. Trois Divisions d’Élite.",
    "de": "Ein Ökosystem. Drei Elite-Divisionen.",
    "pt": "Um Ecossistema. Três Divisões de Elite.",
    "lu": "Een Ökosystem. Dräi Elite-Divisiounen."
  },
  "De la ingeniería audiovisual en sets de cine a la aceleración ejecutiva en Luxemburgo y el desarrollo web high-end. Elige tu destino corporativo.": {
    "en": "From cinema-grade audiovisual engineering to executive career acceleration in Luxembourg and high-end web development. Select your destination.",
    "fr": "De l’ingénierie audiovisuelle sur plateaux de cinéma à l’accélération exécutive au Luxembourg et au développement web haut de gamme. Choisissez votre destination.",
    "de": "Von Filmset-Technik über die Führungskräfte-Beschleunigung in Luxemburg bis zum High-End-Web-Development. Wählen Sie Ihr Ziel.",
    "pt": "Da engenharia audiovisual em sets de cinema à aceleração executiva no Luxemburgo e desenvolvimento web de alto padrão. Escolha o seu destino corporativo.",
    "lu": "Vun Filmset-Technik iwwer d’Exekutiv-Beschleunegung zu Lëtzebuerg bis zur High-End Webentwécklung. Wielt Äert Zil."
  },
  "Impresiones B2B": {
    "en": "B2B Impressions",
    "fr": "Impressions B2B",
    "de": "B2B-Impressionen",
    "pt": "Impressões B2B",
    "lu": "B2B Impressiounen"
  },
  "0€ RIESGO": {
    "en": "0€ RISK",
    "fr": "0€ RISQUE",
    "de": "0€ RISIKO",
    "pt": "0€ RISCO",
    "lu": "0€ RISIKO"
  },
  "Pago 100% a Éxito": {
    "en": "100% Success-Based Fee",
    "fr": "Paiement 100% au Succès",
    "de": "100% Erfolgsbasiert",
    "pt": "Pagamento 100% por Sucesso",
    "lu": "100% Erfollegs-baséiert"
  },
  "4.6K RAW": {
    "en": "4.6K RAW",
    "fr": "4.6K RAW",
    "de": "4.6K RAW",
    "pt": "4.6K RAW",
    "lu": "4.6K RAW"
  },
  "Super 35 Cine Gear": {
    "en": "Super 35 Cine Gear",
    "fr": "Matériel Cinéma Super 35",
    "de": "Super 35 Kino-Equipment",
    "pt": "Equipamento Cine Super 35",
    "lu": "Super 35 Kino-Material"
  },
  "SLA Respuesta": {
    "en": "Response SLA",
    "fr": "SLA de Réponse",
    "de": "Reaktions-SLA",
    "pt": "SLA de Resposta",
    "lu": "Äntwert-SLA"
  },
  "Entrar a Studio": {
    "en": "Enter Studio",
    "fr": "Accéder à Studio",
    "de": "Studio betreten",
    "pt": "Entrar no Studio",
    "lu": "Gitt an de Studio"
  },
  "Acelerar Mi Empleo": {
    "en": "Accelerate My Career",
    "fr": "Accélérer Ma Carrière",
    "de": "Karriere beschleunigen",
    "pt": "Acelerar Carreira",
    "lu": "Karriär beschleunegen"
  },
  "Explorar Arsenal": {
    "en": "Explore Arsenal",
    "fr": "Explorer l’Arsenal",
    "de": "Arsenal ansehen",
    "pt": "Explorar Arsenal",
    "lu": "Material kucken"
  },
  "Concierge Inteligente de Derivación": {
    "en": "Intelligent Routing Concierge",
    "fr": "Concierge Intelligent d’Orientation",
    "de": "Intelligenter Routing-Concierge",
    "pt": "Concierge Inteligente de Direcionamento",
    "lu": "Intelligente Routing-Concierge"
  },
  "¿No estás seguro de cuál es tu portal óptimo? Selecciona tu perfil y te dirigiremos de inmediato al entorno adecuado.": {
    "en": "Unsure which portal fits your needs? Select your profile and we will instantly direct you to the right division.",
    "fr": "Vous hésitez sur le portail adapté ? Choisissez votre profil et nous vous orienterons immédiatement.",
    "de": "Unsicher, welches Portal das richtige ist? Wählen Sie Ihr Profil für eine sofortige Weiterleitung.",
    "pt": "Não tem a certeza de qual é o portal ideal? Selecione o seu perfil e encaminharemos de imediato.",
    "lu": "Net sécher wat dat richtegt Portal ass? Wielt Äre Profil fir direkt weidergeleet ze ginn."
  },
  "Empresa o Marca": {
    "en": "Enterprise or Brand",
    "fr": "Entreprise ou Marque",
    "de": "Unternehmen oder Marke",
    "pt": "Empresa ou Marca",
    "lu": "Betrib oder Mark"
  },
  "Busco vídeo comercial, gemelos virtuales o portal web.": {
    "en": "Looking for cinema production, digital twins or web platform.",
    "fr": "Je recherche production vidéo, jumeaux virtuels ou site web.",
    "de": "Suche Werbefilm, digitale Zwillinge oder Web-Portal.",
    "pt": "Procuro vídeo comercial, gémeos virtuais ou portal web.",
    "lu": "Sichen no Reklammfilm, digitale Zwillingen oder Websäit."
  },
  "Candidato / Expat": {
    "en": "Candidate / Expat",
    "fr": "Candidat / Expatrié",
    "de": "Kandidat / Expat",
    "pt": "Candidato / Expat",
    "lu": "Kandidat / Expat"
  },
  "Deseo trabajar en Luxemburgo a 0€ de riesgo inicial.": {
    "en": "I want to accelerate my career in Luxembourg at zero initial risk.",
    "fr": "Je souhaite travailler au Luxembourg à 0€ de risque initial.",
    "de": "Möchte in Luxemburg mit 0€ Anfangsrisiko arbeiten.",
    "pt": "Desejo trabalhar no Luxemburgo a 0€ de risco inicial.",
    "lu": "Wëll zu Lëtzebuerg mat 0€ Ufanksrisiko schaffen."
  },
  "Audiovisual o Talento": {
    "en": "Audiovisual or Talent",
    "fr": "Audiovisuel ou Talent",
    "de": "Audiovisuell oder Talent",
    "pt": "Audiovisual ou Talento",
    "lu": "Audiovisuell oder Talent"
  },
  "Alquiler de cámaras, fotomatón o videobook actor.": {
    "en": "Cinema gear rental, glam photobooth or actor videobook.",
    "fr": "Location de caméras, photobooth ou videobook comédien.",
    "de": "Kameraverleih, Fotobox oder Schauspieler-Videobook.",
    "pt": "Aluguer de câmaras, fotomatão ou videobook de ator.",
    "lu": "Kamera-Locatioun, Fotobox oder Schauspiller-Videobook."
  },
  "Portal Recomendado": {
    "en": "Recommended Portal",
    "fr": "Portail Recommandé",
    "de": "Empfohlenes Portal",
    "pt": "Portal Recomendado",
    "lu": "Recommandéiert Portal"
  },
  "Acceder Ahora ➔": {
    "en": "Access Now ➔",
    "fr": "Accéder Maintenant ➔",
    "de": "Jetzt öffnen ➔",
    "pt": "Aceder Agora ➔",
    "lu": "Elo opmaachen ➔"
  },
  "AUDITORÍA Y SOBERANÍA JURÍDICA: Todos los contratos, acuerdos de éxito y filmaciones se gestionan bajo las directivas del Gran Ducado de Luxemburgo.": {
    "en": "AUDIT & LEGAL SOVEREIGNTY: All contracts, success agreements, and film productions operate under the legal directives of the Grand Duchy of Luxembourg.",
    "fr": "AUDIT & SOUVERAINETÉ JURIDIQUE: Tous les contrats, accords de succès et tournages sont régis selon les directives du Grand-Duché de Luxembourg.",
    "de": "AUDIT & RECHTLICHE SOUVERÄNITÄT: Alle Verträge, Erfolgsvereinbarungen und Produktionen unterliegen den Richtlinien des Großherzogtums Luxemburg.",
    "pt": "AUDITORIA E SOBERANIA JURÍDICA: Todos os contratos, acordos de sucesso e filmagens são geridos sob as diretrizes do Grão-Ducado do Luxemburgo.",
    "lu": "AUDIT & JURIDISCH SOUVERÄNITÉIT: All Verträg, Erfollegsaccorden a Filmproduktioune ginn ënner de Richtlinne vum Groussherzogtum Lëtzebuerg geréiert."
  },
  "100% CONFIDENCIALIDAD NDA": {
    "en": "100% BILATERAL NDA",
    "fr": "100% CONFIDENTIALITÉ NDA",
    "de": "100% NDA-VERTRAULICHKEIT",
    "pt": "100% CONFIDENCIALIDADE NDA",
    "lu": "100% NDA-VERTRAULECHKEET"
  },
  "EMPRESA HOLDING REGISTRADA": {
    "en": "REGISTERED HOLDING ENTITY",
    "fr": "SOCIÉTÉ HOLDING ENREGISTRÉE",
    "de": "EINGETRAGENE HOLDING-GESELLSCHAFT",
    "pt": "EMPRESA HOLDING REGISTADA",
    "lu": "AGEDROEEN HOLDING-GESELLSCHAFT"
  },
  "STATUS ACTIVO // AUDITORÍA PRIVADA Q1/Q2": {
    "en": "ACTIVE STATUS // PRIVATE AUDIT Q1/Q2",
    "fr": "STATUT ACTIF // AUDIT PRIVÉ Q1/Q2",
    "de": "STATUS AKTIV // PRIVATE AUDIT Q1/Q2",
    "pt": "ESTADO ATIVO // AUDITORIA PRIVADA Q1/Q2",
    "lu": "STATUS AKTIV // PRIVAT AUDIT Q1/Q2"
  },
  "CUPO LIMITADO A 4 MARCAS / TRIMESTRE": {
    "en": "LIMITED TO 4 BRANDS / QUARTER",
    "fr": "LIMITÉ À 4 MARQUES / TRIMESTRE",
    "de": "LIMITIERT AUF 4 MARKEN / QUARTAL",
    "pt": "LIMITADO A 4 MARCAS / TRIMESTRE",
    "lu": "LIMITÉIERT OP 4 MARKEN / TRIMESTER"
  },
  "Servicios B2B": {
    "en": "B2B Services",
    "fr": "Services B2B",
    "de": "B2B-Services",
    "pt": "Serviços B2B",
    "lu": "B2B Déngschtleeschtungen"
  },
  "Casos de Estudio": {
    "en": "Case Studies",
    "fr": "Études de Cas",
    "de": "Fallstudien",
    "pt": "Casos de Estudo",
    "lu": "Fallstudien"
  },
  "Garantías": {
    "en": "Guarantees",
    "fr": "Garanties",
    "de": "Garantien",
    "pt": "Garantias",
    "lu": "Garantien"
  },
  "Consultoría Privada": {
    "en": "Private Consultation",
    "fr": "Consultation Privée",
    "de": "Private Beratung",
    "pt": "Consultoria Privada",
    "lu": "Privat Berodung"
  },
  "Tu CV Web Interactivo &amp; Gestión Integral de Postulaciones Diarias en Luxemburgo.": {
    "en": "Your Interactive Web CV &amp; Full Daily Application Management in Luxembourg.",
    "fr": "Votre CV Web Interactif &amp; Gestion Complète des Candidatures Quotidiennes au Luxembourg.",
    "de": "Ihr interaktiver Web-Lebenslauf &amp; Tägliches Bewerbungsmanagement in Luxemburg.",
    "pt": "O seu CV Web Interativo &amp; Gestão Integral de Candidaturas Diárias no Luxemburgo.",
    "lu": "Ären interaktiven Web-CV &amp; Deeglecht Bewerbungsmanagement zu Lëtzebuerg."
  },
  "0 € por Adelantado": {
    "en": "€0 Upfront",
    "fr": "0 € d'Avance",
    "de": "0 € Vorschuss",
    "pt": "0 € Adiantado",
    "lu": "0 € Virkouschten"
  },
  "Solicitar Acceso al Programa (0 € por Adelantado)": {
    "en": "Apply for Program Access (€0 Upfront)",
    "fr": "Demander l'Accès au Programme (0 € d'Avance)",
    "de": "Programm-Zugang beantragen (0 € Vorschuss)",
    "pt": "Solicitar Acesso ao Programa (0 € Adiantado)",
    "lu": "Programm-Zougang ufroen (0 € Virkouschten)"
  },
  "Ver Demo Interactiva en Vivo ↓": {
    "en": "View Live Interactive Demo ↓",
    "fr": "Voir la Démo Interactive en Direct ↓",
    "de": "Live Interaktive Demo ansehen ↓",
    "pt": "Ver Demo Interativa em Direto ↓",
    "lu": "Live Interaktiv Demo kucken ↓"
  },
  "Arsenal de Cine de Alta Gama": {
    "en": "High-End Cinema Arsenal",
    "fr": "Arsenal Cinéma Haut de Gamme",
    "de": "High-End Kino-Arsenal",
    "pt": "Arsenal de Cinema de Alta Gama",
    "lu": "High-End Kino-Arsenal"
  },
  "Arsenal Técnico Cine": {
    "en": "Cinema Technical Arsenal",
    "fr": "Arsenal Technique Cinéma",
    "de": "Kino-Technik-Arsenal",
    "pt": "Arsenal Técnico de Cinema",
    "lu": "Kino-Technik-Arsenal"
  },
  "Fotomatón Glam &amp; Escenografías": {
    "en": "Glam Photobooth &amp; Sets",
    "fr": "Photobooth Glam &amp; Décors",
    "de": "Glam Fotobox &amp; Kulissen",
    "pt": "Fotomatão Glam &amp; Cenários",
    "lu": "Glam Fotobox &amp; Kulissen"
  },
  "Talent Lab (Videobooks)": {
    "en": "Talent Lab (Videobooks)",
    "fr": "Talent Lab (Videobooks)",
    "de": "Talent Lab (Videobooks)",
    "pt": "Talent Lab (Videobooks)",
    "lu": "Talent Lab (Videobooks)"
  },
  "Condiciones &amp; Seguros": {
    "en": "Terms &amp; Insurance",
    "fr": "Conditions &amp; Assurances",
    "de": "Bedingungen &amp; Versicherung",
    "pt": "Condições &amp; Seguros",
    "lu": "Konditiounen &amp; Versécherung"
  },
  "Calculadora de Alquiler": {
    "en": "Rental Calculator",
    "fr": "Calculateur de Location",
    "de": "Mietpreis-Rechner",
    "pt": "Calculadora de Aluguer",
    "lu": "Locatiouns-Rechner"
  },
  "Reservar Material / Rodaje": {
    "en": "Book Equipment / Shoot",
    "fr": "Réserver Matériel / Tournage",
    "de": "Ausrüstung reservieren",
    "pt": "Reservar Material / Rodagem",
    "lu": "Material reservéieren"
  }
};

  let origMap = [];

  function updateLinkParameters(lang) {
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      if (href.endsWith('.html') || href.includes('.html?') || href === 'index.html' || href === '/') {
        const parts = href.split('?');
        const basePath = parts[0];
        const params = new URLSearchParams(parts[1] || '');
        params.set('lang', lang);
        a.setAttribute('href', basePath + '?' + params.toString());
      }
    });
  }

  function walkAndReplace(lang) {
    if (origMap.length === 0) {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
      let n;
      while (n = walker.nextNode()) {
        origMap.push({ node: n, originalText: n.nodeValue });
      }
    }

    origMap.forEach(item => {
      if (lang === 'es') {
        item.node.nodeValue = item.originalText;
      } else {
        let val = item.originalText;
        for (const [phrase, trans] of Object.entries(dict)) {
          if (trans[lang] && val.includes(phrase)) {
            val = val.replaceAll(phrase, trans[lang]);
          }
        }
        item.node.nodeValue = val;
      }
    });

    rebindAll(lang);
  }

  function rebindAll(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('welux_lang', lang);
    document.cookie = 'welux_lang=' + lang + '; path=/; max-age=31536000;';

    // Highlight active language button
    document.querySelectorAll('.welux-lang-btn').forEach(btn => {
      const bLang = btn.getAttribute('data-lang');
      if (bLang === lang) {
        btn.classList.add('bg-white/30', 'text-white', 'font-bold', 'border-white/50');
        btn.classList.remove('text-white/70', 'border-transparent');
      } else {
        btn.classList.remove('bg-white/30', 'text-white', 'font-bold', 'border-white/50');
        btn.classList.add('text-white/70', 'border-transparent');
      }
    });

    updateLinkParameters(lang);
  }

  function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const savedLang = localStorage.getItem('welux_lang');

    let target = 'es';
    if (urlLang && languages.includes(urlLang.toLowerCase())) {
      target = urlLang.toLowerCase();
    } else if (savedLang && languages.includes(savedLang.toLowerCase())) {
      target = savedLang.toLowerCase();
    } else {
      const bLang = (navigator.language || 'es').substring(0, 2).toLowerCase();
      if (languages.includes(bLang)) target = bLang;
    }

    walkAndReplace(target);
  }

  return {
    setLanguage: function(lang) {
      walkAndReplace(lang);
    },
    init: init
  };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.WELUX_I18N.init());
} else {
  window.WELUX_I18N.init();
}
