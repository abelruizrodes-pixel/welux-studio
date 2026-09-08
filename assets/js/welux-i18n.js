/**
 * WELUX GROUP — MOTOR MULTILINGÜE SOBERANO & URLs LIMPIAS POR DIRECTORIO
 * Navegación limpia nativa sin .html ni index.html:
 * /studio/, /careers/, /gear/, /fr/studio/, /en/careers/, /
 */

(function() {
  'use strict';

  const SUPPORTED_LANGS = ['es', 'en', 'fr', 'de', 'pt', 'lu'];

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

  // 2. Detección de idioma actual y sección
  function getPageInfo() {
    const p = window.location.pathname;
    const pathMatch = p.match(/\/(en|fr|de|pt|lu)(\/|$)/);
    const lang = pathMatch ? pathMatch[1] : 'es';

    let route = '';
    if (p.includes('/studio')) route = 'studio';
    else if (p.includes('/careers')) route = 'careers';
    else if (p.includes('/gear') || p.includes('/films')) route = 'gear';

    return { lang, route };
  }

  // 3. Sincronización y persistencia
  function syncLanguage() {
    cleanUrl();

    const info = getPageInfo();
    const currentLang = info.lang;
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get('lang');
    const storedLang = localStorage.getItem('welux_lang') || localStorage.getItem('welux_preferred_lang');

    // Si viene por query param (?lang=fr), tiene máxima prioridad
    if (queryLang && SUPPORTED_LANGS.includes(queryLang)) {
      if (queryLang !== currentLang) {
        setWeluxLanguage(queryLang);
        return;
      }
    }

    // Redirección inteligente si el usuario guardó preferencia y entra a ruta de otro idioma
    if (storedLang && SUPPORTED_LANGS.includes(storedLang) && storedLang !== currentLang) {
      const isManualSwitch = sessionStorage.getItem('welux_manual_lang');
      if (!isManualSwitch) {
        let targetUrl = '';
        if (storedLang === 'es') {
          targetUrl = info.route ? `/${info.route}/` : '/';
        } else {
          targetUrl = info.route ? `/${storedLang}/${info.route}/` : `/${storedLang}/`;
        }

        if (targetUrl && targetUrl !== window.location.pathname) {
          window.location.replace(targetUrl + window.location.search + window.location.hash);
          return;
        }
      }
    }

    // Actualizar almacenamiento con el idioma activo verificado
    localStorage.setItem('welux_lang', currentLang);
    localStorage.setItem('welux_preferred_lang', currentLang);
    try {
      document.cookie = `welux_lang=${currentLang}; path=/; domain=.weluxhub.com; max-age=31536000; SameSite=Lax`;
    } catch(e) {}
    document.cookie = `welux_lang=${currentLang}; path=/; max-age=31536000; SameSite=Lax`;
    sessionStorage.removeItem('welux_manual_lang');
  }

  // 4. Función global para cambio de idioma en toda la navegación
  window.setWeluxLanguage = function(newLang) {
    if (!SUPPORTED_LANGS.includes(newLang)) return;

    sessionStorage.setItem('welux_manual_lang', '1');
    localStorage.setItem('welux_lang', newLang);
    localStorage.setItem('welux_preferred_lang', newLang);
    try {
      document.cookie = `welux_lang=${newLang}; path=/; domain=.weluxhub.com; max-age=31536000; SameSite=Lax`;
    } catch(e) {}
    document.cookie = `welux_lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;

    const info = getPageInfo();
    let dest = '';
    if (newLang === 'es') {
      dest = info.route ? `/${info.route}/` : '/';
    } else {
      dest = info.route ? `/${newLang}/${info.route}/` : `/${newLang}/`;
    }

    window.location.href = dest;
  };

  // Inicializar inmediatamente y al cargar DOM
  cleanUrl();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncLanguage);
  } else {
    syncLanguage();
  }

})();
