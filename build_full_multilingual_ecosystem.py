#!/usr/bin/env python3
"""
Comprehensive Multilingual Ecosystem Generator for WeLux Group.
Supports: ES (Root), EN (/en/), FR (/fr/), DE (/de/), PT (/pt/), LU (/lu/)
Pages: index.html, studio.html, careers.html, films.html
"""

import os
import re

REPO_DIR = "/Users/ark/.gemini/antigravity/scratch/welux-studio"

# Target languages
TARGET_LANGS = {
    'en': 'English',
    'fr': 'Français',
    'de': 'Deutsch',
    'pt': 'Português',
    'lu': 'Lëtzebuergesch'
}

LANG_CONFIG = [
    ('es', '🇪🇸 ES'),
    ('en', '🇬🇧 EN'),
    ('fr', '🇫🇷 FR'),
    ('de', '🇩🇪 DE'),
    ('pt', '🇵🇹 PT'),
    ('lu', '🇱🇺 LU')
]

def make_lang_bar(page_name, current_lang):
    """
    Renders the responsive 6-language switcher bar.
    """
    items = []
    for code, label in LANG_CONFIG:
        if code == current_lang:
            btn = f'<span class="px-2 py-0.5 rounded bg-white/25 text-white font-bold border border-white/40 shadow-sm">{label}</span>'
        else:
            if current_lang == 'es':
                href = f"{code}/{page_name}"
            else:
                if code == 'es':
                    href = f"../{page_name}"
                else:
                    href = f"../{code}/{page_name}"
            btn = f'<a href="{href}" onclick="localStorage.setItem(\'welux_lang\',\'{code}\');document.cookie=\'welux_lang={code};path=/;max-age=31536000;\';" class="px-2 py-0.5 rounded text-white/75 hover:text-white hover:bg-white/10 transition-colors border border-transparent">{label}</a>'
        items.append(btn)
        
    divider = '<span class="text-white/20 text-[10px] hidden sm:inline">|</span>'
    inner = f" {divider} ".join(items)
    
    return f'''<!-- WeLux Sovereign 6-Language Selector Bar -->
<div class="welux-lang-bar flex items-center gap-0.5 sm:gap-1 bg-black/85 border border-white/20 px-2.5 py-1 rounded-full font-mono text-[11px] shadow-lg backdrop-blur-md text-white shrink-0">
  {inner}
</div>'''

def make_redirect_script():
    """
    Client-side instant language preference redirect script for root pages.
    """
    return '''<script>
(function(){
  var saved = localStorage.getItem('welux_lang');
  if(!saved){
    var m = document.cookie.match(/(?:^|; )welux_lang=([^;]*)/);
    if(m) saved = m[1];
  }
  var valid = ['en','fr','de','pt','lu'];
  var path = window.location.pathname;
  var file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  if(saved && valid.indexOf(saved) !== -1 && !path.includes('/' + saved + '/')){
    if(!/\\/(en|fr|de|pt|lu)\\//.test(path)){
      window.location.replace(saved + '/' + file);
    }
  }
})();
</script>'''

print("Core generator helpers ready.")
