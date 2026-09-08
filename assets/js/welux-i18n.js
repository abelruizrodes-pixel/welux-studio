/**
 * WELUX GROUP — MOTOR MULTILINGÜE SOBERANO & URLs LIMPIAS
 * Sincronización automática de idioma en todo el ecosistema (ES, EN, FR, DE, PT, LU)
 * Limpieza instantánea de 'index.html' en la barra de navegación del navegador
 */

(function() {
  'use strict';

  const SUPPORTED_LANGS = ['es', 'en', 'fr', 'de', 'pt', 'lu'];

  // 1. Limpieza instantánea de la barra de direcciones (URLs elegantes sin /index.html)
  function cleanUrl() {
    if (window.history && window.history.replaceState) {
      try {
        let p = window.location.pathname;
        if (p.endsWith('/index.html')) {
          p = p.replace(/\/index\.html$/, '/');
          window.history.replaceState({}, '', p + window.location.search + window.location.hash);
        } else if (p === '/index.html') {
          window.history.replaceState({}, '', '/' + window.location.search + window.location.hash);
        }
      } catch (e) {}
    }
  }

  // 2. Detección de idioma actual de la página
  function getPageLang() {
    const pathMatch = window.location.pathname.match(/\/(en|fr|de|pt|lu)(\/|$)/);
    return pathMatch ? pathMatch[1] : 'es';
  }

  // 3. Sincronización y persistencia
  function syncLanguage() {
    cleanUrl();

    const currentLang = getPageLang();
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

    // Si el usuario ya tenía un idioma preferido guardado (ej. 'fr') y entra a una página con idioma diferente
    if (storedLang && SUPPORTED_LANGS.includes(storedLang) && storedLang !== currentLang) {
      const isManualSwitch = sessionStorage.getItem('welux_manual_lang');
      if (!isManualSwitch) {
        const path = window.location.pathname;
        let page = path.split('/').pop();
        if (!page || page === 'index.html') page = '';

        let targetUrl = '';
        if (storedLang === 'es') {
          targetUrl = page ? `/${page}` : '/';
        } else {
          targetUrl = page ? `/${storedLang}/${page}` : `/${storedLang}/`;
        }

        if (targetUrl && targetUrl !== path) {
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

  // 4. Función global para cambio de idioma al hacer click en el selector
  window.setWeluxLanguage = function(newLang) {
    if (!SUPPORTED_LANGS.includes(newLang)) return;

    sessionStorage.setItem('welux_manual_lang', '1');
    localStorage.setItem('welux_lang', newLang);
    localStorage.setItem('welux_preferred_lang', newLang);
    try {
      document.cookie = `welux_lang=${newLang}; path=/; domain=.weluxhub.com; max-age=31536000; SameSite=Lax`;
    } catch(e) {}
    document.cookie = `welux_lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;

    const path = window.location.pathname;
    let page = path.split('/').pop();
    if (!page || page === 'index.html') page = '';

    let dest = '';
    if (newLang === 'es') {
      dest = page ? `/${page}` : '/';
    } else {
      dest = page ? `/${newLang}/${page}` : `/${newLang}/`;
    }

    window.location.href = dest;
  };

  // Inicializar al cargar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncLanguage);
  } else {
    syncLanguage();
  }

})();
