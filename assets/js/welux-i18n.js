/**
 * WeLux Ecosystem - Sovereign 6-Language Translation Engine
 * Supported: ES (Español), EN (English), FR (Français), DE (Deutsch), PT (Português), LU (Lëtzebuergesch)
 */

window.WELUX_I18N = {
  currentLang: 'es',
  languages: [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
    { code: 'lu', label: 'Lëtzebuergesch', flag: '🇱🇺' }
  ],
  translations: {
    // GLOBAL HEADER & NAVIGATION
    'nav_hub': {
      es: 'Hub', en: 'Hub', fr: 'Hub', de: 'Hub', pt: 'Hub', lu: 'Hub'
    },
    'nav_studio': {
      es: 'Studio', en: 'Studio', fr: 'Studio', de: 'Studio', pt: 'Studio', lu: 'Studio'
    },
    'nav_careers': {
      es: 'Careers', en: 'Careers', fr: 'Carrières', de: 'Karriere', pt: 'Carreiras', lu: 'Karriären'
    },
    'nav_gear': {
      es: 'Gear & Cine', en: 'Gear & Cinema', fr: 'Matériel & Cinéma', de: 'Equipment & Kino', pt: 'Equipamento & Cine', lu: 'Material & Kino'
    },
    'nav_return_hub': {
      es: '← Volver a WeLux Hub', en: '← Return to WeLux Hub', fr: '← Retour au WeLux Hub', de: '← Zurück zum WeLux Hub', pt: '← Voltar ao WeLux Hub', lu: '← Zréck op WeLux Hub'
    },
    'nav_status_online': {
      es: '3 Portales Online · Luxembourg · Madrid · Paris',
      en: '3 Online Portals · Luxembourg · Madrid · Paris',
      fr: '3 Portails en ligne · Luxembourg · Madrid · Paris',
      de: '3 Online-Portale · Luxemburg · Madrid · Paris',
      pt: '3 Portais Online · Luxemburgo · Madrid · Paris',
      lu: '3 Online-Portaler · Lëtzebuerg · Madrid · Paräis'
    },
    'nav_systems_nominal': {
      es: 'Todos los Sistemas Operativos',
      en: 'All Systems Operational',
      fr: 'Tous les systèmes opérationnels',
      de: 'Alle Systeme betriebsbereit',
      pt: 'Todos os sistemas operacionais',
      lu: 'All Systemer operationell'
    },

    // HERO & HUB OVERVIEW
    'hub_hero_tag': {
      es: 'LUXEMBOURG · PARIS · MADRID GATEWAY / v4.8 ACTIVO',
      en: 'LUXEMBOURG · PARIS · MADRID GATEWAY / v4.8 ACTIVE',
      fr: 'PASSERELLE LUXEMBOURG · PARIS · MADRID / v4.8 ACTIF',
      de: 'GATEWAY LUXEMBURG · PARIS · MADRID / v4.8 AKTIV',
      pt: 'PORTAL LUXEMBURGO · PARIS · MADRID / v4.8 ATIVO',
      lu: 'LUXEMBUERG · PARÄIS · MADRID PORTAL / v4.8 AKTIV'
    },
    'hub_hero_title': {
      es: 'Un Ecosistema. Tres Divisiones de Élite.',
      en: 'One Ecosystem. Three Elite Divisions.',
      fr: 'Un Écosystème. Trois Divisions d’Élite.',
      de: 'Ein Ökosystem. Drei Elite-Divisionen.',
      pt: 'Um Ecossistema. Três Divisões de Elite.',
      lu: 'Een Ökosystem. Dräi Elite-Divisiounen.'
    },
    'hub_hero_desc': {
      es: 'De la ingeniería audiovisual en sets de cine a la aceleración ejecutiva en Luxemburgo y el desarrollo web high-end. Elige tu destino corporativo.',
      en: 'From audiovisual engineering on cinema sets to executive talent acceleration in Luxembourg and high-end boutique web engineering. Choose your corporate destination.',
      fr: 'De l’ingénierie audiovisuelle sur les plateaux de cinéma à l’accélération exécutive au Luxembourg et au développement web haut de gamme. Choisissez votre destination corporative.',
      de: 'Von der audiovisuellen Technik am Filmset über die Führungskräfte-Beschleunigung in Luxemburg bis hin zur High-End-Webentwicklung. Wählen Sie Ihr Ziel.',
      pt: 'Da engenharia audiovisual em sets de cinema à aceleração executiva no Luxemburgo e desenvolvimento web de alto padrão. Escolha o seu destino corporativo.',
      lu: 'Vun der audiovisueller Technik um Filmset iwwer d’Exekutiv-Beschleunegung zu Lëtzebuerg bis zur High-End Webentwécklung. Wielt Äert Zil.'
    },

    // STATS TELEMETRY
    'stat_impressions': {
      es: 'Impresiones B2B', en: 'B2B Impressions', fr: 'Impressions B2B', de: 'B2B-Impressionen', pt: 'Impressões B2B', lu: 'B2B Impressiounen'
    },
    'stat_risk': {
      es: 'Pago 100% a Éxito', en: '100% Success-Based Fee', fr: 'Paiement 100% au Succès', de: '100% erfolgsbasiert', pt: 'Pagamento 100% por Sucesso', lu: '100% Erfollegs-baséiert'
    },
    'stat_gear': {
      es: 'Super 35 Cine Gear', en: 'Super 35 Cine Gear', fr: 'Équipement Cinéma Super 35', de: 'Super 35 Kino-Equipment', pt: 'Equipamento Cine Super 35', lu: 'Super 35 Kino-Ausrüstung'
    },
    'stat_sla': {
      es: 'SLA Respuesta', en: 'Response SLA', fr: 'SLA de Réponse', de: 'Reaktions-SLA', pt: 'SLA de Resposta', lu: 'Äntwert-SLA'
    },

    // FILTER TABS
    'filter_all': {
      es: 'Todos los Portales', en: 'All Portals', fr: 'Tous les Portails', de: 'Alle Portale', pt: 'Todos os Portais', lu: 'All Portaler'
    },
    'filter_studio': {
      es: 'Empresas & Real Estate', en: 'Enterprises & Real Estate', fr: 'Entreprises & Immobilier', de: 'Unternehmen & Immobilien', pt: 'Empresas & Imobiliário', lu: 'Betriber & Immobilien'
    },
    'filter_careers': {
      es: 'Candidatos & Talento', en: 'Candidates & Talent', fr: 'Candidats & Talents', de: 'Kandidaten & Talente', pt: 'Candidatos & Talento', lu: 'Kandidaten & Talenter'
    },
    'filter_gear': {
      es: 'Producción & Eventos', en: 'Production & Events', fr: 'Production & Événements', de: 'Produktion & Events', pt: 'Produção & Eventos', lu: 'Produktioun & Evenementer'
    },

    // CARDS
    'btn_enter_studio': {
      es: 'Entrar a Studio ➔', en: 'Enter Studio ➔', fr: 'Accéder à Studio ➔', de: 'Studio betreten ➔', pt: 'Entrar no Studio ➔', lu: 'Gitt an de Studio ➔'
    },
    'btn_enter_careers': {
      es: 'Acelerar Mi Empleo ➔', en: 'Accelerate My Career ➔', fr: 'Accélérer Ma Carrière ➔', de: 'Karriere beschleunigen ➔', pt: 'Acelerar Minha Carreira ➔', lu: 'Meng Karriär beschleunegen ➔'
    },
    'btn_enter_gear': {
      es: 'Explorar Arsenal ➔', en: 'Explore Arsenal ➔', fr: 'Explorer l’Arsenal ➔', de: 'Equipment entdecken ➔', pt: 'Explorar Arsenal ➔', lu: 'Material entdecken ➔'
    },

    // SOVEREIGNTY / FOOTER
    'footer_sovereignty': {
      es: 'AUDITORÍA Y SOBERANÍA JURÍDICA: Todos los contratos, acuerdos de éxito y filmaciones se gestionan bajo las directivas del Gran Ducado de Luxemburgo.',
      en: 'AUDIT & LEGAL SOVEREIGNTY: All contracts, success agreements, and film productions operate strictly under Grand Duchy of Luxembourg regulations.',
      fr: 'AUDIT & SOUVERAINETÉ JURIDIQUE: Tous les contrats, accords de succès et tournages sont régis selon les directives du Grand-Duché de Luxembourg.',
      de: 'AUDIT & RECHTLICHE SOUVERÄNITÄT: Alle Verträge, Erfolgsvereinbarungen und Filmproduktionen unterliegen den Richtlinien des Großherzogtums Luxemburg.',
      pt: 'AUDITORIA E SOBERANIA JURÍDICA: Todos os contratos, acordos de sucesso e filmagens são geridos sob as diretrizes do Grão-Ducado do Luxemburgo.',
      lu: 'AUDIT & JURIDISCH SOUVERÄNITÉIT: All Verträg, Erfollegsaccorden a Filmproduktioune ginn ënner de Richtlinne vum Groussherzogtum Lëtzebuerg geréiert.'
    }
  },

  init: function() {
    const saved = localStorage.getItem('welux_lang');
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    let targetLang = 'es';
    if (urlLang && this.isValidLang(urlLang)) {
      targetLang = urlLang;
    } else if (saved && this.isValidLang(saved)) {
      targetLang = saved;
    } else {
      const browser = (navigator.language || 'es').substring(0, 2).toLowerCase();
      targetLang = this.isValidLang(browser) ? browser : 'es';
    }
    
    this.setLanguage(targetLang);
    this.renderSelector();
  },

  isValidLang: function(code) {
    return this.languages.some(l => l.code === code);
  },

  setLanguage: function(code) {
    if (!this.isValidLang(code)) return;
    this.currentLang = code;
    localStorage.setItem('welux_lang', code);
    document.documentElement.lang = code;

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (this.translations[key] && this.translations[key][code]) {
        el.innerHTML = this.translations[key][code];
      }
    });

    // Update active state in selectors
    document.querySelectorAll('.lang-option').forEach(btn => {
      if (btn.getAttribute('data-lang') === code) {
        btn.classList.add('bg-white/20', 'text-white', 'font-bold');
        btn.classList.remove('text-neutral-400');
      } else {
        btn.classList.remove('bg-white/20', 'text-white', 'font-bold');
        btn.classList.add('text-neutral-400');
      }
    });

    const activeFlagEl = document.getElementById('current-lang-flag');
    const activeCodeEl = document.getElementById('current-lang-code');
    const currentObj = this.languages.find(l => l.code === code);
    if (activeFlagEl && currentObj) activeFlagEl.textContent = currentObj.flag;
    if (activeCodeEl && currentObj) activeCodeEl.textContent = currentObj.code.toUpperCase();
  },

  renderSelector: function() {
    const containers = document.querySelectorAll('.welux-lang-selector-container');
    containers.forEach(container => {
      const currentObj = this.languages.find(l => l.code === this.currentLang) || this.languages[0];
      let html = `
        <div class="relative inline-block text-left group" id="welux-lang-dropdown">
          <button type="button" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-white/15 font-mono text-xs font-semibold text-white transition-all shadow-sm">
            <span id="current-lang-flag">${currentObj.flag}</span>
            <span id="current-lang-code">${currentObj.code.toUpperCase()}</span>
            <span class="text-[9px] text-neutral-400 group-hover:rotate-180 transition-transform">▼</span>
          </button>
          <div class="hidden group-hover:block absolute right-0 mt-1 w-44 rounded-xl bg-[#14161d]/98 backdrop-blur-2xl border border-white/20 shadow-2xl p-1.5 z-[99999] transition-all">
            <div class="text-[10px] font-mono text-neutral-400 px-2.5 py-1 uppercase tracking-wider border-b border-white/10 mb-1">Idioma / Language</div>
      `;
      this.languages.forEach(l => {
        const isActive = l.code === this.currentLang;
        html += `
          <button type="button" onclick="window.WELUX_I18N.setLanguage('${l.code}')" data-lang="${l.code}" class="lang-option w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-mono transition-colors text-left hover:bg-white/10 ${isActive ? 'bg-white/20 text-white font-bold' : 'text-neutral-300'}">
            <span class="flex items-center gap-2"><span>${l.flag}</span><span>${l.label}</span></span>
            <span class="text-[10px] text-neutral-500 uppercase">${l.code}</span>
          </button>
        `;
      });
      html += `</div></div>`;
      container.innerHTML = html;
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.WELUX_I18N.init();
});
