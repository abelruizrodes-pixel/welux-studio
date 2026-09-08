/**
 * WELUX GROUP — ARQUITECTURA TÉCNICA MULTILINGÜE & PERSISTENCIA DE IDIOMA
 * Ecosistema: weluxhub.com | studio.weluxhub.com | careers.weluxhub.com | gear.weluxhub.com
 * Soporte soberano: ES, EN, FR, PT, DE, LB/LU
 * Clean URL Engine: Elimina 'index.html' de la barra de direcciones para URLs limpias (/fr/, /en/, /)
 */

const WELUX_DICTIONARY = {
  es: {
    "hub_title": "WELUX GROUP",
    "hub_subtitle": "Un Ecosistema. Tres Divisiones de Élite.",
    "hub_desc": "De la ingeniería audiovisual en sets de cine a la aceleración ejecutiva en Luxemburgo y el desarrollo web high-end. Elige tu destino corporativo.",
    "enter_studio": "Entrar a Studio",
    "enter_careers": "Acelerar mi Empleo",
    "enter_gear": "Explorar Arsenal",
    "studio_hero": "Diseñamos la Autoridad Digital & el Estatus Visual de Marcas de Élite.",
    "careers_hero": "Tu CV Web Interactivo & Gestión Integral de Postulaciones Diarias en Luxemburgo.",
    "careers_guarantee": "0 € por Adelantado. Solo abonas tras firmar contrato y cobrar tu 1ª nómina (150 €).",
    "gear_hero": "Arsenal de Cine de Alta Gama & Producción Escénica para Creadores de Élite.",
    "gear_desc": "Alquiler de cámaras de cine Super 35, ópticas de alta velocidad T2, estabilización Steadicam y sonido 32-bit float."
  },
  fr: {
    "hub_title": "WELUX GROUP",
    "hub_subtitle": "Un Écosystème. Trois Divisions d'Élite.",
    "hub_desc": "De l’ingénierie audiovisuelle sur plateaux de cinéma à l’accélération exécutive au Luxembourg et au développement web haut de gamme. Choisissez votre destination.",
    "enter_studio": "Entrer dans Studio",
    "enter_careers": "Accélérer ma Carrière",
    "enter_gear": "Explorer le Matériel",
    "studio_hero": "Nous concevons l'autorité numérique, visuelle et cinématographique des marques de prestige.",
    "careers_hero": "Votre CV Web Interactif & Gestion Complète des Candidatures Quotidiennes au Luxembourg.",
    "careers_guarantee": "0 € d'Avance. Vous ne payez qu'après signature de contrat et encaissement de votre 1er salaire (150 €).",
    "gear_hero": "Arsenal Cinéma Haut de Gamme & Production Scénique pour Créateurs d’Élite.",
    "gear_desc": "Location de caméras cinéma Super 35, optiques haute vitesse T2, stabilisation Steadicam et audio 32-bit float."
  },
  en: {
    "hub_title": "WELUX GROUP",
    "hub_subtitle": "One Ecosystem. Three Elite Divisions.",
    "hub_desc": "From audiovisual cinema engineering to executive career acceleration in Luxembourg and high-end web development. Choose your corporate destination.",
    "enter_studio": "Enter Studio",
    "enter_careers": "Accelerate Career",
    "enter_gear": "Explore Gear",
    "studio_hero": "We craft the digital authority, visual and cinematic prestige for leading brands.",
    "careers_hero": "Your Interactive Web CV & Full Daily Job Application Management in Luxembourg.",
    "careers_guarantee": "€0 Upfront. Pay only after signing your contract and receiving your 1st payroll (€150).",
    "gear_hero": "High-End Cinema Hardware Arsenal & Stage Production for Elite Creators.",
    "gear_desc": "Super 35 cinema camera rentals, T2 cine lenses, Steadicam stabilization, and 32-bit float audio."
  },
  pt: {
    "hub_title": "WELUX GROUP",
    "hub_subtitle": "Um Ecossistema. Três Divisões de Elite.",
    "hub_desc": "Da engenharia audiovisual em sets de cinema à aceleração executiva no Luxemburgo e ao desenvolvimento web de alta gama. Escolha o seu destino corporativo.",
    "enter_studio": "Entrar no Studio",
    "enter_careers": "Acelerar Carreira",
    "enter_gear": "Explorar Equipamento",
    "studio_hero": "Criamos a autoridade digital, visual e cinematográfica de marcas líderes.",
    "careers_hero": "O seu CV Web Interativo & Gestão Integral de Candidaturas Diárias no Luxemburgo.",
    "careers_guarantee": "0 € Adiantado. Só paga após assinar contrato e receber o seu 1º salário (150 €).",
    "gear_hero": "Arsenal de Cinema de Alta Gama & Produção Cénica para Criadores de Elite.",
    "gear_desc": "Aluguer de câmaras de cinema Super 35, óticas T2 de alta velocidade, estabilizador Steadicam e áudio 32-bit float."
  },
  de: {
    "hub_title": "WELUX GROUP",
    "hub_subtitle": "Ein Ökosystem. Drei Elite-Divisionen.",
    "hub_desc": "Von audiovisueller Kinotechnik über Führungskarriere-Beschleunigung in Luxemburg bis hin zu High-End-Webentwicklung. Wählen Sie Ihre Unternehmensdestination.",
    "enter_studio": "Studio betreten",
    "enter_careers": "Karriere beschleunigen",
    "enter_gear": "Ausrüstung entdecken",
    "studio_hero": "Wir gestalten digitale Autorität, visuelles und kinoreifes Prestige für Spitzenmarken.",
    "careers_hero": "Ihr interaktiver Web-Lebenslauf & Tägliches Bewerbungsmanagement in Luxemburg.",
    "careers_guarantee": "0 € Vorkasse. Zahlung erst nach Arbeitsvertrag und Erhalt des 1. Gehalts (150 €).",
    "gear_hero": "High-End Kino-Hardware & Bühnenproduktion für Elite-Filmschaffende.",
    "gear_desc": "Verleih von Super 35 Cinema-Kameras, T2 Cine-Objektiven, Steadicam-Systemen und 32-Bit-Float-Audio."
  },
  lb: {
    "hub_title": "WELUX GROUP",
    "hub_subtitle": "Een Ökosystem. Dräi Elite Divisiounen.",
    "hub_desc": "Vun audiovisueller Kinotechnik iwwer Féierungskarriär-Beschleunegung zu Lëtzebuerg bis hin zu High-End Webentwécklung. Wielt Är Entreprise-Destinatioun.",
    "enter_studio": "Studio entdecken",
    "enter_careers": "Karriär beschleunegen",
    "enter_gear": "Kameraen & Gear",
    "studio_hero": "Mir designen digital Autoritéit, visuell a kinomatesch Präsenz fir féierend Marken.",
    "careers_hero": "Ären interaktiven Web-CV & Deeglecht Bewerbungsmanagement zu Lëtzebuerg.",
    "careers_guarantee": "0 € am Viraus. Bezuelung eréischt nom Aarbechtsvertrag an dem 1. Gehalt (150 €).",
    "gear_hero": "High-End Kino-Ausrüstung & Büneproduktioun fir Elite-Filmemacher.",
    "gear_desc": "Locatioun vu Super 35 Kino-Kameraen, T2 Lënsen, Steadicam Stabilisatioun an 32-Bit Float Audio."
  }
};
WELUX_DICTIONARY.lu = WELUX_DICTIONARY.lb;

const WELUX_I18N = {
  current: 'es',
  supported: ['es', 'en', 'fr', 'pt', 'de', 'lb', 'lu'],
  
  init() {
    // 1. Detectar desde URL query param
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get('lang');
    
    // 2. Detectar desde Cookie o localStorage
    const storedLang = localStorage.getItem('welux_preferred_lang') || localStorage.getItem('welux_lang');
    const cookieLang = this.getCookie('welux_lang');
    
    // 3. Detectar desde path si estamos en subcarpeta (/fr/, /en/, etc.)
    const pathMatch = window.location.pathname.match(/\/(es|en|fr|pt|de|lu|lb)\//);
    const pathLang = pathMatch ? pathMatch[1] : null;
    
    let target = paramLang || pathLang || cookieLang || storedLang || 'es';
    if (!this.supported.includes(target)) target = 'es';
    
    this.cleanAddressBar();
    this.setLanguage(target, false);
  },

  cleanAddressBar() {
    // Limpia 'index.html' de la URL visual en el navegador
    if (window.history && window.history.replaceState) {
      try {
        let p = window.location.pathname;
        if (p.endsWith('/index.html')) {
          p = p.replace(/\/index\.html$/, '/');
        } else if (p === '/index.html') {
          p = '/';
        }
        if (p !== window.location.pathname) {
          window.history.replaceState({}, '', p + window.location.search + window.location.hash);
        }
      } catch(e) {}
    }
  },
  
  setLanguage(lang, updateUrl = false) {
    if (!this.supported.includes(lang)) return;
    this.current = lang;
    const normalized = (lang === 'lu') ? 'lb' : lang;
    
    // Guardar en Storage y Cookie compartida (.weluxhub.com)
    localStorage.setItem('welux_preferred_lang', lang);
    localStorage.setItem('welux_lang', lang);
    try {
      document.cookie = `welux_lang=${lang}; path=/; domain=.weluxhub.com; max-age=31536000; SameSite=Lax`;
    } catch(e) {}
    document.cookie = `welux_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Actualizar atributo html lang
    document.documentElement.lang = lang;
    
    // Actualizar visualmente selector activo
    document.querySelectorAll('[data-lang-btn], .welux-lang-btn').forEach(btn => {
      const bLang = btn.getAttribute('data-lang-btn') || btn.getAttribute('data-lang');
      const isActive = bLang === lang || (bLang === 'lu' && lang === 'lb') || (bLang === 'lb' && lang === 'lu');
      btn.classList.toggle('active-lang', isActive);
      if (isActive) {
        btn.classList.add('bg-white/25', 'text-white', 'font-bold');
      } else {
        btn.classList.remove('bg-white/25', 'font-bold');
      }
    });
    
    // Reemplazar textos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (WELUX_DICTIONARY[normalized] && WELUX_DICTIONARY[normalized][key]) {
        el.innerHTML = WELUX_DICTIONARY[normalized][key];
      }
    });
    
    this.cleanAddressBar();
  },
  
  getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
};

window.WELUX_I18N = WELUX_I18N;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => WELUX_I18N.init());
} else {
  WELUX_I18N.init();
}
