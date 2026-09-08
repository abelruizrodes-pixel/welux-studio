/**
 * WeLux Ecosystem - 100% Native Sovereign i18n Translation Engine
 * Pure Native JavaScript - No Google Translate, No External Banners, Pure Luxury UI
 * Supported: 🇪🇸 ES, 🇬🇧 EN, 🇫🇷 FR, 🇩🇪 DE, 🇵🇹 PT, 🇱🇺 LU (Lëtzebuergesch)
 */

(function() {
  // Clear any leftover Google Translate cookies
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname + ";";

  const translations = {
    // ----------------- NAVIGATION & HEADER -----------------
    "Hub": { en: "Hub", fr: "Hub", de: "Hub", pt: "Hub", lu: "Hub" },
    "Studio": { en: "Studio", fr: "Studio", de: "Studio", pt: "Studio", lu: "Studio" },
    "Careers": { en: "Careers", fr: "Carrières", de: "Karriere", pt: "Carreiras", lu: "Karriären" },
    "Gear": { en: "Gear", fr: "Matériel", de: "Equipment", pt: "Equipamento", lu: "Material" },
    "Nodes": { en: "Nodes", fr: "Nœuds", de: "Knoten", pt: "Nós", lu: "Kniet" },
    "3 Portales Online · Luxembourg · Madrid · Paris": {
      en: "3 Online Portals · Luxembourg · Madrid · Paris",
      fr: "3 Portails en ligne · Luxembourg · Madrid · Paris",
      de: "3 Online-Portale · Luxemburg · Madrid · Paris",
      pt: "3 Portais Online · Luxemburgo · Madrid · Paris",
      lu: "3 Online-Portaler · Lëtzebuerg · Madrid · Paräis"
    },
    "All Systems Nominal": {
      en: "All Systems Nominal",
      fr: "Systèmes Nominaux",
      de: "Systeme Nominal",
      pt: "Sistemas Nominais",
      lu: "Systemer Nominal"
    },
    "← Hub Matriz": {
      en: "← Master Hub", fr: "← Hub Matrice", de: "← Haupt-Hub", pt: "← Hub Matriz", lu: "← Haapt-Hub"
    },
    "Volver a WeLux Hub": {
      en: "Return to WeLux Hub", fr: "Retour au WeLux Hub", de: "Zurück zum WeLux Hub", pt: "Voltar ao WeLux Hub", lu: "Zréck op WeLux Hub"
    },

    // ----------------- HERO (INDEX.HTML) -----------------
    "LUXEMBOURG · PARIS · MADRID GATEWAY / v4.8 ACTIVO": {
      en: "LUXEMBOURG · PARIS · MADRID GATEWAY / v4.8 ACTIVE",
      fr: "PASSERELLE LUXEMBOURG · PARIS · MADRID / v4.8 ACTIF",
      de: "GATEWAY LUXEMBURG · PARIS · MADRID / v4.8 AKTIV",
      pt: "PORTAL LUXEMBURGO · PARIS · MADRID / v4.8 ATIVO",
      lu: "LUXEMBUERG · PARÄIS · MADRID PORTAL / v4.8 AKTIV"
    },
    "LUXEMBOURG · PARIS · MADRID GATEWAY": {
      en: "LUXEMBOURG · PARIS · MADRID GATEWAY",
      fr: "PASSERELLE LUXEMBOURG · PARIS · MADRID",
      de: "GATEWAY LUXEMBURG · PARIS · MADRID",
      pt: "PORTAL LUXEMBURGO · PARIS · MADRID",
      lu: "LUXEMBUERG · PARÄIS · MADRID PORTAL"
    },
    "WELUX GROUP": {
      en: "WELUX GROUP", fr: "GROUPE WELUX", de: "WELUX GRUPPE", pt: "GRUPO WELUX", lu: "WELUX GRUPP"
    },
    "Un Ecosistema. Tres Divisiones de Élite.": {
      en: "One Ecosystem. Three Elite Divisions.",
      fr: "Un Écosystème. Trois Divisions d’Élite.",
      de: "Ein Ökosystem. Drei Elite-Divisionen.",
      pt: "Um Ecossistema. Três Divisões de Elite.",
      lu: "Een Ökosystem. Dräi Elite-Divisiounen."
    },
    "De la ingeniería audiovisual en sets de cine a la aceleración ejecutiva en Luxemburgo y el desarrollo web high-end. Elige tu destino corporativo.": {
      en: "From cinema-grade audiovisual engineering to executive career placement in Luxembourg and high-end boutique web engineering. Select your corporate gateway.",
      fr: "De l’ingénierie audiovisuelle sur plateaux de cinéma à l’accélération exécutive au Luxembourg et au développement web haut de gamme. Choisissez votre destination.",
      de: "Von audiovisueller Filmset-Technik über die Führungskräfte-Platzierung in Luxemburg bis zum High-End-Web-Development. Wählen Sie Ihr Ziel.",
      pt: "Da engenharia audiovisual em sets de cinema à aceleração executiva no Luxemburgo e desenvolvimento web de alto padrão. Escolha o seu destino corporativo.",
      lu: "Vun audiovisueller Filmset-Technik iwwer d’Exekutiv-Platzéierung zu Lëtzebuerg bis zur High-End Webentwécklung. Wielt Äert Zil."
    },

    // ----------------- TELEMETRY STATS -----------------
    "Impresiones B2B": {
      en: "B2B Impressions", fr: "Impressions B2B", de: "B2B-Impressionen", pt: "Impressões B2B", lu: "B2B Impressiounen"
    },
    "0€ RIESGO": {
      en: "0€ RISK", fr: "0€ RISQUE", de: "0€ RISIKO", pt: "0€ RISCO", lu: "0€ RISIKO"
    },
    "Pago 100% a Éxito": {
      en: "100% Success-Based Fee", fr: "Paiement 100% au Succès", de: "100% Erfolgsbasiert", pt: "Pagamento 100% por Sucesso", lu: "100% Erfollegs-baséiert"
    },
    "4.6K RAW": {
      en: "4.6K RAW", fr: "4.6K RAW", de: "4.6K RAW", pt: "4.6K RAW", lu: "4.6K RAW"
    },
    "Super 35 Cine Gear": {
      en: "Super 35 Cine Gear", fr: "Matériel Cinéma Super 35", de: "Super 35 Kino-Equipment", pt: "Equipamento Cine Super 35", lu: "Super 35 Kino-Material"
    },
    "< 12H": {
      en: "< 12H", fr: "< 12H", de: "< 12H", pt: "< 12H", lu: "< 12H"
    },
    "SLA Respuesta": {
      en: "Response SLA", fr: "SLA de Réponse", de: "Reaktions-SLA", pt: "SLA de Resposta", lu: "Äntwert-SLA"
    },

    // ----------------- FILTERS -----------------
    "Filtrar por Especialidad Operativa": {
      en: "Filter by Operational Specialization",
      fr: "Filtrer par Spécialité Opérationnelle",
      de: "Nach Fachbereich filtern",
      pt: "Filtrar por Especialidade Operacional",
      lu: "No Fachberäich filteren"
    },
    "Todos los Portales": {
      en: "All Portals", fr: "Tous les Portails", de: "Alle Portale", pt: "Todos os Portais", lu: "All Portaler"
    },
    "Empresas & Real Estate": {
      en: "Enterprises & Real Estate", fr: "Entreprises & Immobilier", de: "Unternehmen & Immobilien", pt: "Empresas & Imobiliário", lu: "Betriber & Immobilien"
    },
    "Candidatos & Talento": {
      en: "Candidates & Talent", fr: "Candidats & Talents", de: "Kandidaten & Talente", pt: "Candidatos & Talento", lu: "Kandidaten & Talenter"
    },
    "Producción & Eventos": {
      en: "Production & Events", fr: "Production & Événements", de: "Produktion & Events", pt: "Produção & Eventos", lu: "Produktioun & Evenementer"
    },

    // ----------------- CARDS (BENTO GRID) -----------------
    "LUXURY B2B & TECH": {
      en: "LUXURY B2B & TECH", fr: "LUXE B2B & TECH", de: "LUXUS B2B & TECH", pt: "LUXO B2B & TECH", lu: "LUXUS B2B & TECH"
    },
    "Autoridad Digital, Gemelos LiDAR & Cine de Autor": {
      en: "Digital Authority, LiDAR Digital Twins & Cinema Art",
      fr: "Autorité Digitale, Jumeaux LiDAR & Cinéma d’Auteur",
      de: "Digitale Autorität, LiDAR-Zwillinge & Autorenkino",
      pt: "Autoridade Digital, Gémeos LiDAR & Cinema de Autor",
      lu: "Digital Autoritéit, LiDAR-Zwillingen & Autorenkino"
    },
    "Producción Audiovisual 4.6K RAW de Alta Gama para Marcas High-End.": {
      en: "High-End 4.6K RAW Audiovisual Production for Luxury Brands.",
      fr: "Production Audiovisuelle 4.6K RAW Haut de Gamme pour Marques de Prestige.",
      de: "High-End 4.6K RAW Audiovisuelle Produktion für Premium-Marken.",
      pt: "Produção Audiovisual 4.6K RAW de Alta Gama para Marcas High-End.",
      lu: "High-End 4.6K RAW Audiovisuell Produktioun fir Prestige Marken."
    },
    "Tours Virtuales Matterport Pro3 & Escaneo Métrico Inmobiliario.": {
      en: "Matterport Pro3 Virtual Tours & Metric Architectural Scanning.",
      fr: "Visites Virtuelles Matterport Pro3 & Scan Métrique Immobilier.",
      de: "Matterport Pro3 Virtuelle Touren & Metrisches Gebäude-Scanning.",
      pt: "Tours Virtuais Matterport Pro3 & Escaneamento Métrico Imobiliário.",
      lu: "Matterport Pro3 Virtuell Touren & Metrescht Gebaier-Scanning."
    },
    "Sitios Web Boutique con Carga <1.2s & PageSpeed 98/100 verificado.": {
      en: "Boutique Websites with <1.2s Load Time & Verified 98/100 PageSpeed.",
      fr: "Sites Web Boutique avec Vitesse <1.2s & PageSpeed 98/100 vérifié.",
      de: "Boutique-Websites mit <1.2s Ladezeit & 98/100 PageSpeed.",
      pt: "Websites Boutique com Carregamento <1.2s & PageSpeed 98/100 verificado.",
      lu: "Boutique-Websäiten mat <1.2s Luedzäit & 98/100 PageSpeed."
    },
    "Admisión estricta: 4 marcas por trimestre bajo NDA.": {
      en: "Strict Admission: 4 brands per quarter under bilateral NDA.",
      fr: "Admission stricte: 4 marques par trimestre sous accord NDA.",
      de: "Strenge Aufnahme: 4 Marken pro Quartal unter NDA.",
      pt: "Admissão estrita: 4 marcas por trimestre sob NDA.",
      lu: "Strenge Opnam: 4 Marken pro Trimester ënner NDA."
    },
    "AUDIENCIA DIANA:": {
      en: "TARGET AUDIENCE:", fr: "PUBLIC CIBLE:", de: "ZIELGRUPPE:", pt: "PÚBLICO-ALVO:", lu: "ZIELGRUPP:"
    },
    "Family Offices · Real Estate": {
      en: "Family Offices · Real Estate", fr: "Family Offices · Immobilier", de: "Family Offices · Immobilien", pt: "Family Offices · Imobiliário", lu: "Family Offices · Immobilien"
    },
    "Entrar a Studio": {
      en: "Enter Studio", fr: "Accéder à Studio", de: "Studio betreten", pt: "Entrar no Studio", lu: "Gitt an de Studio"
    },

    "0€ ADELANTADO · ÉXITO": {
      en: "0€ UPFRONT · SUCCESS ONLY", fr: "0€ D’AVANCE · SUCCÈS PUR", de: "0€ VORSCHUSS · NUR ERFOLG", pt: "0€ ADIANTADO · SUCESSO", lu: "0€ VIRSOSS · NËMMEN ERFOLLEG"
    },
    "CV Web Interactivo & Postulaciones Diarias 100% a Éxito": {
      en: "Interactive Web CV & Daily Job Applications 100% Success-Based",
      fr: "CV Web Interactif & Candidatures Quotidiennes 100% au Succès",
      de: "Interaktiver Web-Lebenslauf & Tägliche Bewerbungen zu 100% auf Erfolgsbasis",
      pt: "CV Web Interativo & Candidaturas Diárias 100% por Sucesso",
      lu: "Interaktiven Web-CV & Deeglech Bewerbungen 100% op Erfollegsbasis"
    },
    "Postulación activa delegada en Jobs.lu, ADEM, Moovijob y LinkedIn.": {
      en: "Active automated submissions on Jobs.lu, ADEM, Moovijob & LinkedIn.",
      fr: "Candidatures actives quotidiennes sur Jobs.lu, ADEM, Moovijob et LinkedIn.",
      de: "Tägliche Bewerbungen auf Jobs.lu, ADEM, Moovijob und LinkedIn.",
      pt: "Candidatura ativa delegada no Jobs.lu, ADEM, Moovijob e LinkedIn.",
      lu: "Deeglech Bewerbungen op Jobs.lu, ADEM, Moovijob a LinkedIn."
    },
    "Landing Page de candidatura multilingüe de alta velocidad (FR, EN, ES).": {
      en: "High-speed multilingual candidate landing page (FR, EN, ES, DE, PT, LU).",
      fr: "Page web de candidature multilingue à haute vitesse (FR, EN, ES, DE, PT, LU).",
      de: "Mehrsprachige High-Speed-Bewerbungs-Landingpage (FR, EN, ES, DE, PT, LU).",
      pt: "Landing Page de candidatura multilingue de alta velocidade (FR, EN, ES, DE, PT, LU).",
      lu: "Méisproocheg High-Speed Bewerbungs-Landingpage (FR, EN, ES, DE, PT, LU)."
    },
    "Auditoría salarial, preparación contractual y simulación de entrevistas.": {
      en: "Salary auditing, contract review & executive interview simulations.",
      fr: "Audit salarial, préparation contractuelle et simulation d’entretiens.",
      de: "Gehaltsprüfung, Vertragsberatung und Interview-Simulation.",
      pt: "Auditoria salarial, preparação contratual e simulação de entrevistas.",
      lu: "Gehaltsaudit, Kontraktberodung an Interview-Training."
    },
    "Expats · Ingenieros · FinTech": {
      en: "Expats · Engineers · FinTech Executives",
      fr: "Expats · Ingénieurs · Cadres FinTech",
      de: "Expats · Ingenieure · FinTech & Banking",
      pt: "Expats · Engenheiros · Profissionais FinTech",
      lu: "Expats · Ingenieuren · FinTech & Banking"
    },
    "Acelerar Mi Empleo": {
      en: "Accelerate My Career", fr: "Accélérer Ma Carrière", de: "Karriere beschleunigen", pt: "Acelerar Carreira", lu: "Karriär beschleunegen"
    },

    "• REC LIVE · ARSENAL": {
      en: "• REC LIVE · ARSENAL", fr: "• REC LIVE · ARSENAL", de: "• REC LIVE · ARSENAL", pt: "• REC LIVE · ARSENAL", lu: "• REC LIVE · ARSENAL"
    },
    "Equipamiento Cinematográfico, Fotomatón Glam & Videobooks": {
      en: "Cinema Gear Arsenal, Glam Photobooth & Actor Videobooks",
      fr: "Arsenal Cinéma, Photobooth Glam & Videobooks d’Acteurs",
      de: "Kino-Equipment, Glam Photobooth & Schauspieler-Videobooks",
      pt: "Equipamento Cinematográfico, Fotomatão Glam & Videobooks",
      lu: "Kino-Ausrüstung, Glam Fotobox & Schauspiller-Videobooks"
    },
    "Blackmagic URSA Mini Pro 4.6K G2 + Set Ópticas Sigma Cine High-Speed T2.": {
      en: "Blackmagic URSA Mini Pro 4.6K G2 + Sigma High-Speed Cine T2 Prime Set.",
      fr: "Blackmagic URSA Mini Pro 4.6K G2 + Kit Optiques Sigma Cine High-Speed T2.",
      de: "Blackmagic URSA Mini Pro 4.6K G2 + Sigma Cine High-Speed T2 Zoom Set.",
      pt: "Blackmagic URSA Mini Pro 4.6K G2 + Set Ópticas Sigma Cine High-Speed T2.",
      lu: "Blackmagic URSA Mini Pro 4.6K G2 + Sigma Cine High-Speed T2 Set."
    },
    "Steadicam Flycam Galaxy, Grabador Zoom F6 32-Bit Float & Microfonía Røde.": {
      en: "Steadicam Flycam Galaxy, Zoom F6 32-Bit Float Audio & Røde Wireless.",
      fr: "Steadicam Flycam Galaxy, Enregistreur Zoom F6 32-Bit Float & Micros Røde.",
      de: "Steadicam Flycam Galaxy, Zoom F6 32-Bit Audio & Røde Wireless.",
      pt: "Steadicam Flycam Galaxy, Gravador Zoom F6 32-Bit Float & Microfones Røde.",
      lu: "Steadicam Flycam Galaxy, Zoom F6 32-Bit Toun & Røde Funk."
    },
    "Cabinas de Fotomatón Glam HD con Beauty Filter e impresión al instante.": {
      en: "Glam HD Photobooth Kiosks with Hollywood Beauty Filter & Instant Print.",
      fr: "Cabines Photobooth Glam HD avec Beauty Filter & Impression Immédiate.",
      de: "Glam HD Fotobox mit Hollywood-Beauty-Filter und Sofortdruck.",
      pt: "Cabines de Fotomatão Glam HD com Beauty Filter e impressão instantânea.",
      lu: "Glam HD Fotobox mat Hollywood Beauty Filter a Sofortdrock."
    },
    "DoPs · Eventos · Actores": {
      en: "DoPs · VIP Events · Actors",
      fr: "Directeurs Photo · Événements VIP · Acteurs",
      de: "Kameraleute · VIP-Events · Schauspieler",
      pt: "Diretores de Fotografia · Eventos · Atores",
      lu: "Kameramänner · VIP Eventer · Schauspiller"
    },
    "Explorar Arsenal": {
      en: "Explore Arsenal", fr: "Explorer l’Arsenal", de: "Arsenal ansehen", pt: "Explorar Arsenal", lu: "Material kucken"
    },

    // ----------------- CONCIERGE & SOVEREIGNTY -----------------
    "Concierge Inteligente de Derivación": {
      en: "Intelligent Routing Concierge",
      fr: "Concierge Intelligent d’Orientation",
      de: "Intelligenter Routing-Concierge",
      pt: "Concierge Inteligente de Direcionamento",
      lu: "Intelligente Routing-Concierge"
    },
    "¿No estás seguro de cuál es tu portal óptimo? Selecciona tu perfil y te dirigiremos de inmediato al entorno adecuado.": {
      en: "Unsure which portal fits your needs? Select your profile and we will instantly direct you to the right division.",
      fr: "Vous hésitez sur le portail adapté ? Choisissez votre profil et nous vous orienterons immédiatement.",
      de: "Unsicher, welches Portal das richtige ist? Wählen Sie Ihr Profil für eine sofortige Weiterleitung.",
      pt: "Não tem a certeza de qual é o portal ideal? Selecione o seu perfil e encaminharemos de imediato.",
      lu: "Net sécher wat dat richtegt Portal ass? Wielt Äre Profil fir direkt weidergeleet ze ginn."
    },
    "Empresa o Marca": {
      en: "Enterprise or Brand", fr: "Entreprise ou Marque", de: "Unternehmen oder Marke", pt: "Empresa ou Marca", lu: "Betrib oder Mark"
    },
    "Busco vídeo comercial, gemelos virtuales o portal web.": {
      en: "Looking for cinema production, digital twins or web platform.",
      fr: "Je recherche production vidéo, jumeaux virtuels ou site web.",
      de: "Suche Werbefilm, digitale Zwillinge oder Web-Portal.",
      pt: "Procuro vídeo comercial, gémeos virtuais ou portal web.",
      lu: "Sichen no Reklammfilm, digitale Zwillingen oder Websäit."
    },
    "Candidato / Expat": {
      en: "Candidate / Expat", fr: "Candidat / Expatrié", de: "Kandidat / Expat", pt: "Candidato / Expat", lu: "Kandidat / Expat"
    },
    "Deseo trabajar en Luxemburgo a 0€ de riesgo inicial.": {
      en: "I want to accelerate my career in Luxembourg at zero initial risk.",
      fr: "Je souhaite travailler au Luxembourg à 0€ de risque initial.",
      de: "Möchte in Luxemburg mit 0€ Anfangsrisiko arbeiten.",
      pt: "Desejo trabalhar no Luxemburgo a 0€ de risco inicial.",
      lu: "Wëll zu Lëtzebuerg mat 0€ Ufanksrisiko schaffen."
    },
    "Audiovisual o Talento": {
      en: "Audiovisual or Talent", fr: "Audiovisuel ou Talent", de: "Audiovisuell oder Talent", pt: "Audiovisual ou Talento", lu: "Audiovisuell oder Talent"
    },
    "Alquiler de cámaras, fotomatón o videobook actor.": {
      en: "Cinema gear rental, glam photobooth or actor videobook.",
      fr: "Location de caméras, photobooth ou videobook comédien.",
      de: "Kameraverleih, Fotobox oder Schauspieler-Videobook.",
      pt: "Aluguer de câmaras, fotomatão ou videobook de ator.",
      lu: "Kamera-Locatioun, Fotobox oder Schauspiller-Videobook."
    },
    "Portal Recomendado": {
      en: "Recommended Portal", fr: "Portail Recommandé", de: "Empfohlenes Portal", pt: "Portal Recomendado", lu: "Recommandéiert Portal"
    },
    "Acceder Ahora ➔": {
      en: "Access Now ➔", fr: "Accéder Maintenant ➔", de: "Jetzt öffnen ➔", pt: "Aceder Agora ➔", lu: "Elo opmaachen ➔"
    },
    "AUDITORÍA Y SOBERANÍA JURÍDICA: Todos los contratos, acuerdos de éxito y filmaciones se gestionan bajo las directivas del Gran Ducado de Luxemburgo.": {
      en: "AUDIT & LEGAL SOVEREIGNTY: All contracts, success agreements, and film productions operate strictly under the legal directives of the Grand Duchy of Luxembourg.",
      fr: "AUDIT & SOUVERAINETÉ JURIDIQUE: Tous les contrats, accords de succès et tournages sont régis selon les directives du Grand-Duché de Luxembourg.",
      de: "AUDIT & RECHTLICHE SOUVERÄNITÄT: Alle Verträge, Erfolgsvereinbarungen und Produktionen unterliegen den Richtlinien des Großherzogtums Luxemburg.",
      pt: "AUDITORIA E SOBERANIA JURÍDICA: Todos os contratos, acordos de sucesso e filmagens são geridos sob as diretrizes do Grão-Ducado do Luxemburgo.",
      lu: "AUDIT & JURIDISCH SOUVERÄNITÉIT: All Verträg, Erfollegsaccorden a Filmproduktioune ginn ënner de Richtlinne vum Groussherzogtum Lëtzebuerg geréiert."
    },
    "100% CONFIDENCIALIDAD NDA": {
      en: "100% BILATERAL NDA", fr: "100% CONFIDENTIALITÉ NDA", de: "100% NDA-VERTRAULICHKEIT", pt: "100% CONFIDENCIALIDADE NDA", lu: "100% NDA-VERTRAULECHKEET"
    },
    "EMPRESA HOLDING REGISTRADA": {
      en: "REGISTERED HOLDING ENTITY", fr: "SOCIÉTÉ HOLDING ENREGISTRÉE", de: "EINGETRAGENE HOLDING-GESELLSCHAFT", pt: "EMPRESA HOLDING REGISTADA", lu: "AGEDROEEN HOLDING-GESELLSCHAFT"
    }
  };

  // Original text store for restoring Spanish
  const originalNodes = [];

  function registerTextNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) {
      const txt = node.nodeValue.trim();
      if (txt && translations[txt]) {
        originalNodes.push({ node: node, orig: txt });
      }
    }
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('welux_lang', lang);

    originalNodes.forEach(item => {
      if (lang === 'es') {
        item.node.nodeValue = item.orig;
      } else if (translations[item.orig] && translations[item.orig][lang]) {
        item.node.nodeValue = translations[item.orig][lang];
      }
    });

    // Update active button state
    document.querySelectorAll('.welux-lang-btn').forEach(btn => {
      const bLang = btn.getAttribute('data-lang');
      if (bLang === lang) {
        btn.classList.add('active', 'bg-white/25', 'text-white', 'font-bold');
        btn.classList.remove('text-white/70');
      } else {
        btn.classList.remove('active', 'bg-white/25', 'text-white', 'font-bold');
        btn.classList.add('text-white/70');
      }
    });
  }

  window.WELUX_I18N = {
    setLanguage: function(lang) {
      applyLanguage(lang);
    },
    init: function() {
      registerTextNodes(document.body);
      const saved = localStorage.getItem('welux_lang') || 'es';
      applyLanguage(saved);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.WELUX_I18N.init());
  } else {
    window.WELUX_I18N.init();
  }
})();
