/**
 * WELUX GROUP — MOTOR MULTILINGÜE SOBERANO & URLs LIMPIAS POR DIRECTORIO
 * Idiomas: ES (/), EN (/en/), FR (/fr/), DE (/de/), PT (/pt/), LU (/lu/)
 * Secciones: Hub (/), Studio (/studio/), Careers (/careers/), Gear (/gear/)
 */

(function() {
  'use strict';

  const SUPPORTED_LANGS = ['es', 'en', 'fr', 'de', 'pt', 'lu'];

  const LANG_LABELS = {
    'es': '🇪🇸 ES',
    'en': '🇬🇧 EN',
    'fr': '🇫🇷 FR',
    'de': '🇩🇪 DE',
    'pt': '🇵🇹 PT',
    'lu': '🇱🇺 LU'
  };

  // 1. Limpieza instantánea y elegante de la barra de direcciones en todas las subpáginas
  function cleanUrl() {
    if (window.history && window.history.replaceState) {
      try {
        let p = window.location.pathname;
        let original = p;

        // Limpiar index.html
        if (p.endsWith('/index.html')) {
          p = p.replace(/\/index\.html$/, '/');
        } else if (p === '/index.html') {
          p = '/';
        }

        // Limpiar .html en todas las subpáginas
        if (p.endsWith('.html')) {
          p = p.replace(/\.html$/, '/');
        }

        if (p !== original) {
          window.history.replaceState({}, '', p + window.location.search + window.location.hash);
        }
      } catch (e) {}
    }
  }

  // 2. Detección exacta de idioma actual y sección a partir del pathname
  function getPageInfo() {
    const p = window.location.pathname;
    const pathMatch = p.match(/^\/(en|fr|de|pt|lu)(\/|$)/);
    const lang = pathMatch ? pathMatch[1] : 'es';

    let route = '';
    if (p.includes('/studio')) route = 'studio';
    else if (p.includes('/careers')) route = 'careers';
    else if (p.includes('/gear') || p.includes('/films')) route = 'gear';

    return { lang, route };
  }

  // 3. Obtener URL destino para un idioma y ruta dados
  function getTargetUrl(targetLang, route) {
    if (targetLang === 'es') {
      return route ? `/${route}/` : '/';
    } else {
      return route ? `/${targetLang}/${route}/` : `/${targetLang}/`;
    }
  }

  // 4. Actualizar dinámicamente la barra de idiomas en el DOM
  function updateLangBar() {
    const info = getPageInfo();
    const currentLang = info.lang;
    const route = info.route;
    const bars = document.querySelectorAll('.welux-lang-bar');

    bars.forEach(bar => {
      const items = [];
      SUPPORTED_LANGS.forEach(code => {
        const label = LANG_LABELS[code];
        if (code === currentLang) {
          items.push(`<span class="px-2.5 py-1 rounded-full bg-white/20 text-white font-bold border border-white/30 text-xs">${label}</span>`);
        } else {
          const url = getTargetUrl(code, route);
          items.push(`<a href="${url}" onclick="setWeluxLanguage('${code}'); return false;" class="welux-lang-btn px-2 py-1 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors text-xs font-mono" data-lang="${code}">${label}</a>`);
        }
      });
      const divider = '<span class="text-white/20 text-xs hidden sm:inline">|</span>';
      bar.innerHTML = items.join(` ${divider} `);
    });
  }

  // 5. Función global para cambio de idioma en toda la navegación
  window.setWeluxLanguage = function(newLang) {
    if (!SUPPORTED_LANGS.includes(newLang)) return;

    try {
      localStorage.setItem('welux_lang', newLang);
      localStorage.setItem('welux_preferred_lang', newLang);
      document.cookie = `welux_lang=${newLang}; path=/; domain=.weluxhub.com; max-age=31536000; SameSite=Lax`;
    } catch(e) {}
    try {
      document.cookie = `welux_lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
    } catch(e) {}

    const info = getPageInfo();
    const dest = getTargetUrl(newLang, info.route);
    window.location.href = dest;
  };

  // 6. Sincronización al cargar
  function syncLanguage() {
    cleanUrl();

    const info = getPageInfo();
    const currentLang = info.lang;
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get('lang');

    // Si viene por query param (?lang=fr), redirigir
    if (queryLang && SUPPORTED_LANGS.includes(queryLang) && queryLang !== currentLang) {
      setWeluxLanguage(queryLang);
      return;
    }

    // Actualizar almacenamiento con el idioma activo de la URL actual
    try {
      localStorage.setItem('welux_lang', currentLang);
      localStorage.setItem('welux_preferred_lang', currentLang);
      document.cookie = `welux_lang=${currentLang}; path=/; domain=.weluxhub.com; max-age=31536000; SameSite=Lax`;
      document.cookie = `welux_lang=${currentLang}; path=/; max-age=31536000; SameSite=Lax`;
    } catch(e) {}

    updateLangBar();
  }

  // Inicializar inmediatamente y al cargar DOM
  cleanUrl();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncLanguage);
  } else {
    syncLanguage();
  }

})();
