/**
 * WeLux Ecosystem - Sovereign 6-Language Real-Time Translation Engine
 * 100% Native Pure JS, Zero External Banners, Synchronized Cross-Page Navigation
 */

window.WELUX_I18N = (function() {
  const languages = ['es', 'en', 'fr', 'de', 'pt', 'lu'];
  const dict = {
  "Diseñamos la": {
    "en": "We Engineer",
    "fr": "Nous Concevons l’",
    "de": "Wir gestalten die",
    "pt": "Desenhamos a",
    "lu": "Mir gestalten d’"
  },
  "Autoridad Digital": {
    "en": "Digital Authority",
    "fr": "Autorité Digitale",
    "de": "Digitale Autorität",
    "pt": "Autoridade Digital",
    "lu": "Digital Autoritéit"
  },
  "& el Estatus Visual de Marcas de Élite.": {
    "en": "& the Visual Status of Elite Brands.",
    "fr": "& le Statut Visuel des Marques d’Élite.",
    "de": "& den visuellen Status von Elite-Marken.",
    "pt": "& o Estatuto Visual de Marcas de Elite.",
    "lu": "& de visuelle Status vun Elite-Marken."
  },
  "&amp; el Estatus Visual de Marcas de Élite.": {
    "en": "&amp; the Visual Status of Elite Brands.",
    "fr": "&amp; le Statut Visuel des Marques d’Élite.",
    "de": "&amp; den visuellen Status von Elite-Marken.",
    "pt": "&amp; o Estatuto Visual de Marcas de Elite.",
    "lu": "&amp; de visuelle Status vun Elite-Marken."
  },
  "Combinamos ciencia algorítmica de retención, cinematografía de autor con sensor Super 35 y gemelos digitales LiDAR Matterport Pro3 para fondos de inversión, promotoras prime y firmas de prestigio global.": {
    "en": "We fuse retention algorithmic science, Super 35 auteur cinematography, and Matterport Pro3 LiDAR digital twins for investment funds, prime real estate developers, and global prestige firms.",
    "fr": "Nous combinons science algorithmique de rétention, cinématographie d’auteur Super 35 et jumeaux numériques LiDAR Matterport Pro3 pour fonds d’investissement, promoteurs prime et firmes de prestige mondial.",
    "de": "Wir verbinden algorithmische Retentions-Wissenschaft, Super 35 Autoren-Kinematographie und Matterport Pro3 LiDAR-Zwillinge für Investmentfonds, Prime-Bauträger und renommierte Unternehmen.",
    "pt": "Combinamos ciência algorítmica de retenção, cinematografia de autor com sensor Super 35 e gémeos digitais LiDAR Matterport Pro3 para fundos de investimento, promotoras prime e marcas de prestígio.",
    "lu": "Mir verbannen algorithmesch Retentiouns-Wëssenschaft, Super 35 Autoren-Kino a Matterport Pro3 LiDAR-Zwillinge fir Investitiounsfongen, Prime-Bauträger a renomméiert Entreprisen."
  },
  "SOLICITAR DIAGNÓSTICO PRIVADO": {
    "en": "REQUEST PRIVATE DIAGNOSTIC",
    "fr": "DEMANDER UN DIAGNOSTIC PRIVÉ",
    "de": "PRIVATE DIAGNOSE ANFORDERN",
    "pt": "SOLICITAR DIAGNÓSTICO PRIVADO",
    "lu": "PRIVAT DIAGNOSTIK UFROEN"
  },
  "EXPLORAR SHOWREEL & METODOLOGÍA": {
    "en": "EXPLORE SHOWREEL & METHODOLOGY",
    "fr": "EXPLORER LE SHOWREEL & MÉTHODOLOGIE",
    "de": "SHOWREEL & METHODIK ENTDECKEN",
    "pt": "EXPLORAR SHOWREEL & METODOLOGIA",
    "lu": "SHOWREEL & METHODIK ENTDECKEN"
  },
  "EXPLORAR SHOWREEL &amp; METODOLOGÍA": {
    "en": "EXPLORE SHOWREEL &amp; METHODOLOGY",
    "fr": "EXPLORER LE SHOWREEL &amp; MÉTHODOLOGIE",
    "de": "SHOWREEL &amp; METHODIK ENTDECKEN",
    "pt": "EXPLORAR SHOWREEL &amp; METODOLOGIA",
    "lu": "SHOWREEL &amp; METHODIK ENTDECKEN"
  },
  "ACUERDO NDA PREVIO Y GARANTIZADO": {
    "en": "GUARANTEED PRIOR NDA AGREEMENT",
    "fr": "ACCORD NDA PRÉALABLE & GARANTI",
    "de": "GARANTIERTE VORHERIGE NDA-VEREINBARUNG",
    "pt": "ACORDO NDA PRÉVIO E GARANTIDO",
    "lu": "GARANTÉIERT VIRSCHRËFTLECH NDA-VEREINBARUNG"
  },
  "AUDIENCIA DIRECTIVA": {
    "en": "EXECUTIVE AUDIENCE",
    "fr": "AUDIENCE DE DIRECTION",
    "de": "FÜHRUNGSAUDIENZ",
    "pt": "AUDIÊNCIA DIRETIVA",
    "lu": "DIREKTIOUNSAUDIENZ"
  },
  "Impresiones cualificadas generadas en directivos y family offices.": {
    "en": "Qualified impressions generated among C-level executives and family offices.",
    "fr": "Impressions qualifiées générées auprès des dirigeants et family offices.",
    "de": "Qualifizierte Impressionen bei Führungskräften und Family Offices.",
    "pt": "Impressões qualificadas geradas em executivos e family offices.",
    "lu": "Qualifizéiert Impressiounen bei Direkteren a Family Offices."
  },
  "ROAS medio auditado en captación de tickets de inversión prime.": {
    "en": "Average audited ROAS in prime investment ticket acquisition.",
    "fr": "ROAS moyen audité dans l’acquisition de tickets d’investissement prime.",
    "de": "Durchschnittlich geprüfter ROAS bei der Akquise von Prime-Investitionen.",
    "pt": "ROAS médio auditado na captação de tickets de investimento prime.",
    "lu": "Duerchschnëttlech gepréiften ROAS bei der Akquisitioun vu Prime-Investitiounen."
  },
  "Tolerancia métrica milimétrica con sensor Matterport Pro3.": {
    "en": "Millimetric metric tolerance with Matterport Pro3 sensor.",
    "fr": "Tolérance métrique millimétrique avec capteur Matterport Pro3.",
    "de": "Millimetergenaue Toleranz mit Matterport Pro3 Sensor.",
    "pt": "Tolerância métrica milimétrica com sensor Matterport Pro3.",
    "lu": "Millimetergenau Toleranz mat Matterport Pro3 Sensor."
  },
  "Google PageSpeed score y renderizado de activos en <1.2s.": {
    "en": "Google PageSpeed score and asset rendering in <1.2s.",
    "fr": "Score Google PageSpeed et rendu des actifs en <1.2s.",
    "de": "Google PageSpeed Score und Asset-Rendering in <1.2s.",
    "pt": "Pontuação Google PageSpeed e renderização de ativos em <1.2s.",
    "lu": "Google PageSpeed Score an Asset-Rendering an <1.2s."
  },
  "Google PageSpeed score y renderizado de activos en &lt;1.2s.": {
    "en": "Google PageSpeed score and asset rendering in &lt;1.2s.",
    "fr": "Score Google PageSpeed et rendu des actifs en &lt;1.2s.",
    "de": "Google PageSpeed Score und Asset-Rendering in &lt;1.2s.",
    "pt": "Pontuação Google PageSpeed e renderização de ativos em &lt;1.2s.",
    "lu": "Google PageSpeed Score an Asset-Rendering an &lt;1.2s."
  },
  "FILOSOFÍA": {
    "en": "PHILOSOPHY",
    "fr": "PHILOSOPHIE",
    "de": "PHILOSOPHIE",
    "pt": "FILOSOFIA",
    "lu": "PHILOSOPHIE"
  },
  "SERVICIOS TRONCALES": {
    "en": "CORE SERVICES",
    "fr": "SERVICES FONDAMENTAUX",
    "de": "KERNLEISTUNGEN",
    "pt": "SERVIÇOS PRINCIPAIS",
    "lu": "KERNLEESCHTUNGEN"
  },
  "ÉTUDES DE CAS": {
    "en": "CASE STUDIES",
    "fr": "ÉTUDES DE CAS",
    "de": "FALLSTUDIEN",
    "pt": "CASOS DE ESTUDO",
    "lu": "FALLSTUDIEN"
  },
  "MATTERPORT LIDAR 3D": {
    "en": "MATTERPORT LIDAR 3D",
    "fr": "MATTERPORT LIDAR 3D",
    "de": "MATTERPORT LIDAR 3D",
    "pt": "MATTERPORT LIDAR 3D",
    "lu": "MATTERPORT LIDAR 3D"
  },
  "PRIVATE OFFICE": {
    "en": "PRIVATE OFFICE",
    "fr": "PRIVATE OFFICE",
    "de": "PRIVATE OFFICE",
    "pt": "PRIVATE OFFICE",
    "lu": "PRIVATE OFFICE"
  },
  "AGENDAR DIAGNÓSTICO PRIVADO": {
    "en": "SCHEDULE PRIVATE DIAGNOSTIC",
    "fr": "RÉSERVER DIAGNOSTIC PRIVÉ",
    "de": "PRIVATE BERATUNG BUCHEN",
    "pt": "AGENDAR DIAGNÓSTICO PRIVADO",
    "lu": "PRIVAT BERODUNG BUCHEN"
  },
  "Tu CV Web Interactivo & Gestión Integral de Postulaciones Diarias en Luxemburgo.": {
    "en": "Your Interactive Web CV & Full Daily Job Application Management in Luxembourg.",
    "fr": "Votre CV Web Interactif & Gestion Complète des Candidatures Quotidiennes au Luxembourg.",
    "de": "Ihr interaktiver Web-Lebenslauf & Tägliches Bewerbungsmanagement in Luxemburg.",
    "pt": "O seu CV Web Interativo & Gestão Integral de Candidaturas Diárias no Luxemburgo.",
    "lu": "Ären interaktiven Web-CV & Deeglecht Bewerbungsmanagement zu Lëtzebuerg."
  },
  "Tu CV Web Interactivo &amp; Gestión Integral de Postulaciones Diarias en Luxemburgo.": {
    "en": "Your Interactive Web CV &amp; Full Daily Job Application Management in Luxembourg.",
    "fr": "Votre CV Web Interactif &amp; Gestion Complète des Candidatures Quotidiennes au Luxembourg.",
    "de": "Ihr interaktiver Web-Lebenslauf &amp; Tägliches Bewerbungsmanagement in Luxemburg.",
    "pt": "O seu CV Web Interativo &amp; Gestão Integral de Candidaturas Diárias no Luxemburgo.",
    "lu": "Ären interaktiven Web-CV &amp; Deeglecht Bewerbungsmanagement zu Lëtzebuerg."
  },
  "El currículum tradicional en PDF es solo la llave; la rapidez, la visibilidad digital y la postulación activa diaria son las que abren las puertas de las entrevistas en Luxemburgo. Construimos tu candidatura web de élite y postulamos diariamente por ti.": {
    "en": "The traditional PDF CV is just the key; speed, digital visibility, and active daily submissions open the interview doors in Luxembourg. We engineer your elite candidate web page and apply daily on your behalf.",
    "fr": "Le CV PDF traditionnel n’est que la clé ; la rapidité, la visibilité digitale et les candidatures actives quotidiennes ouvrent les portes des entretiens au Luxembourg. Nous construisons votre page web de candidature d’élite et postulons quotidiennement pour vous.",
    "de": "Der traditionelle PDF-Lebenslauf ist nur der Schlüssel; Schnelligkeit, digitale Sichtbarkeit und tägliche Bewerbungen öffnen die Türen zu Vorstellungsgesprächen in Luxemburg. Wir erstellen Ihre Elite-Bewerbungswebseite und bewerben uns täglich für Sie.",
    "pt": "O currículo tradicional em PDF é apenas a chave; a rapidez, a visibilidade digital e as candidaturas diárias ativas abrem as portas das entrevistas no Luxemburgo. Construímos a sua página web de candidatura de elite e candidatamo-nos diariamente por si.",
    "lu": "Den traditionelle PDF-CV ass nëmmen de Schlëssel; Schnellegkeet, digital Visibilitéit an deeglech Bewerbungen maachen d’Dieren zu Interviewen zu Lëtzebuerg op. Mir bauen Är Elite-Websäit a bewerben eis deeglech fir Iech."
  },
  "Solicitar Acceso al Programa (0 € por Adelantado)": {
    "en": "Apply for Program Access (€0 Upfront)",
    "fr": "Demander l’Accès au Programme (0 € d’Avance)",
    "de": "Programm-Zugang beantragen (0 € Vorschuss)",
    "pt": "Solicitar Acesso ao Programa (0 € Adiantado)",
    "lu": "Programm-Zougang ufroen (0 € Virkouschten)"
  },
  "Solicitar Acceso al Programa (0 € por Adelantado)": {
    "en": "Apply for Program Access (€0 Upfront)",
    "fr": "Demander l’Accès au Programme (0 € d’Avance)",
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
  "Contrato vinculante de riesgo cero": {
    "en": "Zero-risk binding agreement",
    "fr": "Contrat sans risque engageant",
    "de": "Verbindlicher Null-Risiko-Vertrag",
    "pt": "Contrato vinculativo de risco zero",
    "lu": "Verbindleche Null-Risiko-Kontrakt"
  },
  "Sin anticipos ni tarjetas de crédito": {
    "en": "No upfront fees or credit cards required",
    "fr": "Sans avance ni carte bancaire",
    "de": "Keine Vorauszahlung oder Kreditkarte",
    "pt": "Sem adiantamentos nem cartões de crédito",
    "lu": "Keng Virausbezuelung oder Kreditkaart"
  },
  "Garantía Ética 0 €": {
    "en": "0 € Ethical Guarantee",
    "fr": "Garantie Éthique 0 €",
    "de": "0 € Ethische Garantie",
    "pt": "Garantia Ética 0 €",
    "lu": "0 € Ethesch Garantie"
  },
  "Garantía Ética 0 €": {
    "en": "0 € Ethical Guarantee",
    "fr": "Garantie Éthique 0 €",
    "de": "0 € Ethische Garantie",
    "pt": "Garantia Ética 0 €",
    "lu": "0 € Ethesch Garantie"
  },
  "Arsenal de Cine de Alta Gama & Producción Escénica para Creadores de Élite.": {
    "en": "High-End Cinema Hardware Arsenal & Stage Production for Elite Creators.",
    "fr": "Arsenal Cinéma Haut de Gamme & Production Scénique pour Créateurs d’Élite.",
    "de": "High-End Kino-Hardware & Bühnenproduktion für Elite-Filmschaffende.",
    "pt": "Arsenal de Cinema de Alta Gama & Produção Cénica para Criadores de Elite.",
    "lu": "High-End Kino-Ausrüstung & Büneproduktioun fir Elite-Filmemacher."
  },
  "Arsenal de Cine de Alta Gama &amp; Producción Escénica para Creadores de Élite.": {
    "en": "High-End Cinema Hardware Arsenal &amp; Stage Production for Elite Creators.",
    "fr": "Arsenal Cinéma Haut de Gamme &amp; Production Scénique pour Créateurs d’Élite.",
    "de": "High-End Kino-Hardware &amp; Bühnenproduktion für Elite-Filmschaffende.",
    "pt": "Arsenal de Cinema de Alta Gama &amp; Produção Cénica para Criadores de Elite.",
    "lu": "High-End Kino-Ausrüstung &amp; Büneproduktioun fir Elite-Filmemacher."
  },
  "Alquiler de cámaras de cine Super 35, ópticas de alta velocidad T2, estabilización Steadicam, sonido 32-bit float, cabinas de fotomatón glam para marcas y producción integral de videobooks 4K para actores y modelos.": {
    "en": "Super 35 cinema camera rentals, T2 high-speed optics, Steadicam stabilization, 32-bit float direct sound, glam photobooths for prestige brands, and full 4K videobook production for actors and models.",
    "fr": "Location de caméras cinéma Super 35, optiques T2 grande vitesse, stabilisation Steadicam, son 32-bit float, photobooths glam pour marques de prestige et production intégrale de videobooks 4K.",
    "de": "Verleih von Super 35 Kinokameras, T2 High-Speed-Objektiven, Steadicam, 32-Bit Float Sound, Glamour-Fotokabinen und 4K-Videobook-Produktion für Schauspieler und Models.",
    "pt": "Aluguer de câmaras de cinema Super 35, óticas T2 de alta velocidade, estabilização Steadicam, som 32-bit float, cabines de fotomatão glam e produção integral de videobooks 4K.",
    "lu": "Locatioun vu Super 35 Kinokameraen, T2 High-Speed-Lënsen, Steadicam, 32-Bit Float Toun, Glamour-Fotoboxen a 4K Videobook-Produktioun fir Schauspiller a Modeller."
  },
  "EXPLORAR ARSENAL TÉCNICO ➔": {
    "en": "EXPLORE TECHNICAL ARSENAL ➔",
    "fr": "EXPLORER L’ARSENAL TECHNIQUE ➔",
    "de": "TECHNISCHES ARSENAL ENTDECKEN ➔",
    "pt": "EXPLORAR ARSENAL TÉCNICO ➔",
    "lu": "TECHNISCHT MATERIAL ENTDECKEN ➔"
  },
  "CALCULADORA DE ALQUILER": {
    "en": "RENTAL CALCULATOR",
    "fr": "CALCULATEUR DE LOCATION",
    "de": "MIETPREIS-RECHNER",
    "pt": "CALCULADORA DE ALUGUER",
    "lu": "LOCATIOUNS-RECHNER"
  },
  "RESERVAR VIDEOBOOK 4K": {
    "en": "BOOK 4K VIDEOBOOK",
    "fr": "RÉSERVER VIDEOBOOK 4K",
    "de": "4K VIDEOBOOK BUCHEN",
    "pt": "RESERVAR VIDEOBOOK 4K",
    "lu": "4K VIDEOBOOK BUCHEN"
  },
  "Equipos Listos para Rodaje": {
    "en": "Production-Ready Equipment",
    "fr": "Équipements Prêts pour Tournage",
    "de": "Drehfertige Ausrüstung",
    "pt": "Equipamentos Prontos para Rodagem",
    "lu": "Dréifäerdeg Ausrüstung"
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
