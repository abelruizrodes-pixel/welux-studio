/**
 * WeLux Ecosystem - Sovereign 6-Language Real-Time Translation Engine
 * Supported: 🇪🇸 ES, 🇬🇧 EN, 🇫🇷 FR, 🇩🇪 DE, 🇵🇹 PT, 🇱🇺 LU (Lëtzebuergesch)
 */

(function() {
  // CSS styling to hide Google Translate banners while keeping clean WeLux luxury design
  const style = document.createElement('style');
  style.innerHTML = `
    .goog-te-banner-frame.skiptranslate,
    .goog-te-gadget-icon,
    #goog-gt-tt,
    .goog-te-balloon-frame {
      display: none !important;
    }
    body {
      top: 0px !important;
      position: static !important;
    }
    .goog-tooltip, .goog-tooltip:hover {
      display: none !important;
    }
    .goog-text-highlight {
      background-color: transparent !important;
      box-shadow: none !important;
    }
    #google_translate_element {
      display: none !important;
    }
    .welux-lang-btn.active {
      background: rgba(255, 255, 255, 0.28) !important;
      color: #ffffff !important;
      font-weight: 700 !important;
      border-color: rgba(255, 255, 255, 0.5) !important;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    }
  `;
  document.head.appendChild(style);

  // Hidden container for Google Translate widget
  const gtDiv = document.createElement('div');
  gtDiv.id = 'google_translate_element';
  document.body.appendChild(gtDiv);

  // Translation mapping
  const langMap = {
    'es': 'es',
    'en': 'en',
    'fr': 'fr',
    'de': 'de',
    'pt': 'pt',
    'lu': 'lb' // 'lb' is the official ISO code for Lëtzebuergesch / Luxembourgish in Google Translate
  };

  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
      pageLanguage: 'es',
      includedLanguages: 'es,en,fr,de,pt,lb',
      autoDisplay: false
    }, 'google_translate_element');
    
    // Apply saved language if any
    const saved = localStorage.getItem('welux_lang') || 'es';
    if (saved && saved !== 'es') {
      setTimeout(() => {
        window.WELUX_I18N.setLanguage(saved);
      }, 300);
    } else {
      updateActiveBtn('es');
    }
  };

  // Load Google Translate Engine script
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(s);

  function updateActiveBtn(code) {
    document.querySelectorAll('.welux-lang-btn').forEach(btn => {
      const bCode = btn.getAttribute('data-lang');
      if (bCode === code) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  window.WELUX_I18N = {
    currentLang: 'es',

    setLanguage: function(code) {
      if (!langMap[code]) return;
      this.currentLang = code;
      localStorage.setItem('welux_lang', code);
      updateActiveBtn(code);

      const targetGtLang = langMap[code];

      // Set cookie for Google Translate
      const hostname = window.location.hostname;
      const domainParts = hostname.split('.');
      const rootDomain = domainParts.length > 2 ? domainParts.slice(-2).join('.') : hostname;

      const cookieVal = '/es/' + targetGtLang;
      document.cookie = 'googtrans=' + cookieVal + '; path=/;';
      document.cookie = 'googtrans=' + cookieVal + '; path=/; domain=' + hostname + ';';
      if (rootDomain !== hostname) {
        document.cookie = 'googtrans=' + cookieVal + '; path=/; domain=.' + rootDomain + ';';
      }

      // Trigger the select dropdown inside Google Translate iframe if present
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = targetGtLang;
        select.dispatchEvent(new Event('change'));
      } else {
        // Fallback: reload with cookie to ensure full-page deep translation
        window.location.reload();
      }
    }
  };
})();
