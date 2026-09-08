#!/usr/bin/env python3
"""
Full Sovereign Multilingual Generator for WeLux Group.
Generates 100% static, natively translated HTML pages for:
- ES (Root)
- EN (/en/)
- FR (/fr/)
- DE (/de/)
- PT (/pt/)
- LU (/lu/)

Across:
- index.html (Hub)
- studio.html (WeLux Studio)
- careers.html (WeLux Careers)
- films.html (Amcropa Films × WeLux Gear)
"""

import os
import re

REPO_DIR = "/Users/ark/.gemini/antigravity/scratch/welux-studio"
PAGES = ["index.html", "studio.html", "careers.html", "films.html"]
TARGET_LANGS = ["en", "fr", "de", "pt", "lu"]

LANG_CONFIG = [
    ("es", "🇪🇸 ES"),
    ("en", "🇬🇧 EN"),
    ("fr", "🇫🇷 FR"),
    ("de", "🇩🇪 DE"),
    ("pt", "🇵🇹 PT"),
    ("lu", "🇱🇺 LU")
]

def make_lang_bar(page_name, current_lang):
    items = []
    for code, label in LANG_CONFIG:
        if code == current_lang:
            items.append(f'<span class="px-2 py-0.5 rounded bg-white/25 text-white font-bold border border-white/40 shadow-sm">{label}</span>')
        else:
            if current_lang == "es":
                href = f"{code}/{page_name}"
            else:
                if code == "es":
                    href = f"../{page_name}"
                else:
                    href = f"../{code}/{page_name}"
            onclick = f"localStorage.setItem('welux_lang','{code}');document.cookie='welux_lang={code};path=/;max-age=31536000;'"
            items.append(f'<a href="{href}" onclick="{onclick}" class="px-2 py-0.5 rounded text-white/75 hover:text-white hover:bg-white/10 transition-colors border border-transparent">{label}</a>')
    divider = '<span class="text-white/20 text-[10px] hidden sm:inline">|</span>'
    inner = f" {divider} ".join(items)
    return f'''<!-- WeLux Sovereign 6-Language Selector Bar -->
<div class="welux-lang-bar flex items-center gap-0.5 sm:gap-1 bg-black/85 border border-white/20 px-2.5 py-1 rounded-full font-mono text-[11px] shadow-lg backdrop-blur-md text-white shrink-0">
  {inner}
</div>'''

def make_redirect_script():
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

# Master dictionary covering Studio, Careers, Films & Hub
DICTIONARY = {
    # Studio & Global
    "STATUS ACTIVO // AUDITORÍA PRIVADA Q1/Q2": {
        "en": "ACTIVE STATUS // PRIVATE AUDIT Q1/Q2",
        "fr": "STATUT ACTIF // AUDIT PRIVÉ Q1/Q2",
        "de": "AKTIVER STATUS // PRIVATES AUDIT Q1/Q2",
        "pt": "ESTADO ATIVO // AUDITORIA PRIVADA Q1/Q2",
        "lu": "AKTIVE STATUS // PRIVAT AUDIT Q1/Q2"
    },
    "CUPO LIMITADO A 4 MARCAS / TRIMESTRE": {
        "en": "QUOTA LIMITED TO 4 BRANDS / QUARTER",
        "fr": "QUOTA LIMITÉ À 4 MARQUES / TRIMESTRE",
        "de": "KONTINGENT AUF 4 MARKEN / QUARTAL BEGRENZT",
        "pt": "VAGAS LIMITADAS A 4 MARCAS / TRIMESTRE",
        "lu": "KONTINGENT OP 4 MARKEN / QUARTAL BEGRENZT"
    },
    "PROTOCOLO CONFIDENCIALIDAD NDA 128-BIT": {
        "en": "128-BIT NDA CONFIDENTIALITY PROTOCOL",
        "fr": "PROTOCOLE CONFIDENTIALITÉ NDA 128-BIT",
        "de": "128-BIT NDA-VERTRAULICHKEITSPROTOKOLL",
        "pt": "PROTOCOLO DE CONFIDENCIALIDADE NDA 128-BIT",
        "lu": "128-BIT NDA-VERTRAULECHKEETSPROTOKOLL"
    },
    "Filosofía": {
        "en": "Philosophy",
        "fr": "Philosophie",
        "de": "Philosophie",
        "pt": "Filosofia",
        "lu": "Philosophie"
    },
    "Servicios Troncales": {
        "en": "Core Services",
        "fr": "Services Fondamentaux",
        "de": "Kernleistungen",
        "pt": "Serviços Principais",
        "lu": "Kernleeschtungen"
    },
    "Casos de Estudio": {
        "en": "Case Studies",
        "fr": "Études de Cas",
        "de": "Fallstudien",
        "pt": "Casos de Estudo",
        "lu": "Fallstudien"
    },
    "Agendar Diagnóstico Privado": {
        "en": "Schedule Private Diagnostic",
        "fr": "Réserver un Diagnostic Privé",
        "de": "Private Beratung buchen",
        "pt": "Agendar Diagnóstico Privado",
        "lu": "Privat Berodung buchen"
    },
    "// AGENCIA BOUTIQUE & INGENIERÍA INMERSIVA B2B · EST. LUXEMBOURG S.A.": {
        "en": "// BOUTIQUE AGENCY & B2B IMMERSIVE ENGINEERING · EST. LUXEMBOURG S.A.",
        "fr": "// AGENCE BOUTIQUE & INGÉNIERIE IMMERSIVE B2B · ÉTABLIE LUXEMBOURG S.A.",
        "de": "// BOUTIQUE-AGENTUR & IMMERSIVE B2B-INGENIEURKUNST · EST. LUXEMBURG S.A.",
        "pt": "// AGÊNCIA BOUTIQUE & ENGENHARIA IMERSIVA B2B · EST. LUXEMBURGO S.A.",
        "lu": "// BOUTIQUE-AGENTUR & IMMERSIV B2B-INGENIEURKUNST · EST. LËTZEBUERG S.A."
    },
    "// AGENCIA BOUTIQUE &amp; INGENIERÍA INMERSIVA B2B · EST. LUXEMBOURG S.A.": {
        "en": "// BOUTIQUE AGENCY &amp; B2B IMMERSIVE ENGINEERING · EST. LUXEMBOURG S.A.",
        "fr": "// AGENCE BOUTIQUE &amp; INGÉNIERIE IMMERSIVE B2B · ÉTABLIE LUXEMBOURG S.A.",
        "de": "// BOUTIQUE-AGENTUR &amp; IMMERSIVE B2B-INGENIEURKUNST · EST. LUXEMBURG S.A.",
        "pt": "// AGÊNCIA BOUTIQUE &amp; ENGENHARIA IMERSIVA B2B · EST. LUXEMBURGO S.A.",
        "lu": "// BOUTIQUE-AGENTUR &amp; IMMERSIV B2B-INGENIEURKUNST · EST. LËTZEBUERG S.A."
    },
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
    "Solicitar Diagnóstico Privado": {
        "en": "Request Private Diagnostic",
        "fr": "Demander un Diagnostic Privé",
        "de": "Private Diagnose anfordern",
        "pt": "Solicitar Diagnóstico Privado",
        "lu": "Privat Diagnostik ufroen"
    },
    "Explorar Showreel & Metodología": {
        "en": "Explore Showreel & Methodology",
        "fr": "Explorer le Showreel & Méthodologie",
        "de": "Showreel & Methodik entdecken",
        "pt": "Explorar Showreel & Metodologia",
        "lu": "Showreel & Methodik entdecken"
    },
    "Explorar Showreel &amp; Metodología": {
        "en": "Explore Showreel &amp; Methodology",
        "fr": "Explorer le Showreel &amp; Méthodologie",
        "de": "Showreel &amp; Methodik entdecken",
        "pt": "Explorar Showreel &amp; Metodologia",
        "lu": "Showreel &amp; Methodik entdecken"
    },
    "Acuerdo NDA Previo y Garantizado": {
        "en": "Guaranteed Prior NDA Agreement",
        "fr": "Accord NDA Préalable et Garanti",
        "de": "Garantierte vorherige NDA-Vereinbarung",
        "pt": "Acordo NDA Prévio e Garantido",
        "lu": "Garantéiert virschrëftlech NDA-Vereinbarung"
    },
    "AUDIENCIA DIRECTIVA": {
        "en": "EXECUTIVE AUDIENCE",
        "fr": "AUDIENCE DE DIRECTION",
        "de": "FÜHRUNGSAUDIENZ",
        "pt": "AUDIÊNCIA DIRETIVA",
        "lu": "DIREKTIOUNSAUDIENZ"
    },
    "Impresiones cualificadas generadas en directivos y family offices.": {
        "en": "Qualified impressions generated among executives and family offices.",
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
    "Garantía Ética 0 €": {
        "en": "0 € Ethical Guarantee",
        "fr": "Garantie Éthique 0 €",
        "de": "0 € Ethische Garantie",
        "pt": "Garantia Ética 0 €",
        "lu": "0 € Ethesch Garantie"
    },
    "Garantía Ética 0\xa0€": {
        "en": "0 € Ethical Guarantee",
        "fr": "Garantie Éthique 0 €",
        "de": "0 € Ethische Garantie",
        "pt": "Garantia Ética 0 €",
        "lu": "0 € Ethesch Garantie"
    },
    "Sin anticipos ni tarjetas de crédito": {
        "en": "No upfront fees or credit cards required",
        "fr": "Sans avance ni carte bancaire",
        "de": "Keine Vorauszahlung oder Kreditkarte",
        "pt": "Sem adiantamentos nem cartões de crédito",
        "lu": "Keng Virausbezuelung oder Kreditkaart"
    },
    "Garantía RGPD & Confidencialidad": {
        "en": "GDPR Guarantee & Confidentiality",
        "fr": "Garantie RGPD & Confidentialité",
        "de": "DSGVO-Garantie & Vertraulichkeit",
        "pt": "Garantia RGPD & Confidencialidade",
        "lu": "DSGVO-Garantie & Vertraulechkeet"
    },
    "Garantía RGPD &amp; Confidencialidad": {
        "en": "GDPR Guarantee &amp; Confidentiality",
        "fr": "Garantie RGPD &amp; Confidentialité",
        "de": "DSGVO-Garantie &amp; Vertraulichkeit",
        "pt": "Garantia RGPD &amp; Confidencialidade",
        "lu": "DSGVO-Garantie &amp; Vertraulechkeet"
    },
    "0 € Adelantado": {
        "en": "0 € Upfront",
        "fr": "0 € d’Avance",
        "de": "0 € Vorschuss",
        "pt": "0 € Adiantado",
        "lu": "0 € Virkouschten"
    },
    "0\xa0€ Adelantado": {
        "en": "0 € Upfront",
        "fr": "0 € d’Avance",
        "de": "0 € Vorschuss",
        "pt": "0 € Adiantado",
        "lu": "0 € Virkouschten"
    },
    "Activar Candidatura (0€)": {
        "en": "Activate Application (€0)",
        "fr": "Activer la Candidature (0€)",
        "de": "Bewerbung aktivieren (0€)",
        "pt": "Ativar Candidatura (0€)",
        "lu": "Bewerbung aktivéieren (0€)"
    },
    "Acceso Restringido // Cuenca Gran Ducado de Luxemburgo & Frontera 2026": {
        "en": "Restricted Access // Grand Duchy of Luxembourg & Cross-Border Hub 2026",
        "fr": "Accès Restreint // Bassin Grand-Duché de Luxembourg & Frontière 2026",
        "de": "Eingeschränkter Zugang // Großherzogtum Luxemburg & Grenzregion 2026",
        "pt": "Acesso Restrito // Grão-Ducado do Luxemburgo & Região Fronteiriça 2026",
        "lu": "Ageschränkten Zougang // Groussherzogtum Lëtzebuerg & Grenzregioun 2026"
    },
    "Acceso Restringido // Cuenca Gran Ducado de Luxemburgo &amp; Frontera 2026": {
        "en": "Restricted Access // Grand Duchy of Luxembourg &amp; Cross-Border Hub 2026",
        "fr": "Accès Restreint // Bassin Grand-Duché de Luxembourg &amp; Frontière 2026",
        "de": "Eingeschränkter Zugang // Großherzogtum Luxemburg &amp; Grenzregion 2026",
        "pt": "Acesso Restrito // Grão-Ducado do Luxemburgo &amp; Região Fronteiriça 2026",
        "lu": "Ageschränkten Zougang // Groussherzogtum Lëtzebuerg &amp; Grenzregioun 2026"
    },
    "Cupos de postulación activa limitados a 12 perfiles este mes.": {
        "en": "Active application slots limited to 12 profiles this month.",
        "fr": "Places de candidature active limitées à 12 profils ce mois-ci.",
        "de": "Aktive Bewerbungsplätze in diesem Monat auf 12 Profile begrenzt.",
        "pt": "Vagas de candidatura ativa limitadas a 12 perfis este mês.",
        "lu": "Aktiv Bewerbungsplaze fir dëse Mount op 12 Profiler limitéiert."
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
    "Solicitar Acceso al Programa (0\xa0€ por Adelantado)": {
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
    "Red corporativa Gran Ducado": {
        "en": "Grand Duchy Corporate Network",
        "fr": "Réseau Corporatif Grand-Duché",
        "de": "Großherzogtum Unternehmensnetzwerk",
        "pt": "Rede Corporativa Grão-Ducado",
        "lu": "Groussherzogtum Entreprise-Netzwierk"
    },
    "RGPD Luxembourg compliant": {
        "en": "Luxembourg GDPR Compliant",
        "fr": "Conforme RGPD Luxembourg",
        "de": "Luxemburg DSGVO-Konform",
        "pt": "Conforme RGPD Luxemburgo",
        "lu": "Lëtzebuerg DSGVO-Konform"
    },
    "Ritmo de Respuesta": {
        "en": "Response Pace",
        "fr": "Rythme de Réponse",
        "de": "Antworttempo",
        "pt": "Ritmo de Resposta",
        "lu": "Äntwertstempo"
    },
    "14 — 21 Días": {
        "en": "14 — 21 Days",
        "fr": "14 — 21 Jours",
        "de": "14 — 21 Tage",
        "pt": "14 — 21 Dias",
        "lu": "14 — 21 Deeg"
    },
    "Tiempo promedio registrado hasta la 1ª ronda de entrevistas técnicas directas en corporaciones luxemburguesas.": {
        "en": "Average recorded time until 1st round of direct technical interviews in Luxembourg corporations.",
        "fr": "Délai moyen enregistré jusqu’au 1er tour d’entretiens techniques directs dans les entreprises luxembourgeoises.",
        "de": "Durchschnittliche Zeit bis zur 1. Runde direkter technischer Interviews in luxemburgischen Unternehmen.",
        "pt": "Tempo médio registado até à 1ª ronda de entrevistas técnicas diretas em empresas luxemburguesas.",
        "lu": "Duerchschnëttszäit bis zum 1. Tour vun direkten techneschen Interviewen a lëtzebuergeschen Entreprisen."
    },
    "Atención RRHH": {
        "en": "HR Attention",
        "fr": "Attention RH",
        "de": "HR-Aufmerksamkeit",
        "pt": "Atenção RH",
        "lu": "HR-Opmierksamkeet"
    },
    "Mayor tasa de apertura vs un PDF adjunto simple.": {
        "en": "Higher open rate vs a basic attached PDF.",
        "fr": "Taux d’ouverture supérieur vs un simple PDF joint.",
        "de": "Höhere Öffnungsrate im Vergleich zu einer einfachen PDF-Anlage.",
        "pt": "Maior taxa de abertura vs um PDF simples em anexo.",
        "lu": "Méi héich Öffnungsquote am Verglach mat engem einfachen PDF-Unhang."
    },
    "Alineación": {
        "en": "Alignment",
        "fr": "Alignement",
        "de": "Ausrichtung",
        "pt": "Alinhamento",
        "lu": "Ausriichtung"
    },
    "Cobro condicionado a firma efectiva de nómina.": {
        "en": "Payment strictly contingent on receiving your first actual salary.",
        "fr": "Paiement conditionné à la signature effective du premier salaire.",
        "de": "Zahlung ausschließlich an den Erhalt des ersten Gehalts gekoppelt.",
        "pt": "Cobrança condicionada à receção efetiva do primeiro salário.",
        "lu": "Bezuelung nëmmen un den éischte Salaire gekoppelt."
    },
    "Canales de Despliegue Diario": {
        "en": "Daily Deployment Channels",
        "fr": "Canaux de Déploiement Quotidien",
        "de": "Tägliche Bereitstellungskanäle",
        "pt": "Canais de Envio Diário",
        "lu": "Deeglech Asazkanäl"
    },
    "CONTRATO DE ÉXITO ESTRICTO // CERO ADELANTOS": {
        "en": "STRICT SUCCESS CONTRACT // ZERO ADVANCE PAYMENTS",
        "fr": "CONTRAT DE SUCCÈS STRICT // ZÉRO AVANCE",
        "de": "STRIKTER ERFOLGSVERTRAG // NULL VORAUSZAHLUNGEN",
        "pt": "CONTRATO DE SUCESSO ESTRITO // ZERO ADIANTAMENTOS",
        "lu": "STRIKTE ERFOLGSKONTRAKT // NULL VIRKOUSCHTEN"
    },
    "¿Cómo Funciona?": {
        "en": "How It Works",
        "fr": "Comment Ça Marche ?",
        "de": "Wie es funktioniert",
        "pt": "Como Funciona?",
        "lu": "Wéi et funktionéiert"
    },
    "Modelo 100% a Éxito (0€)": {
        "en": "100% Success Model (€0)",
        "fr": "Modèle 100% au Succès (0€)",
        "de": "100% Erfolgsmodell (0€)",
        "pt": "Modelo 100% a Sucesso (0€)",
        "lu": "100% Erfolgsmodell (0€)"
    },
    "Demo CV Web": {
        "en": "Web CV Demo",
        "fr": "Démo CV Web",
        "de": "Web-CV Demo",
        "pt": "Demo CV Web",
        "lu": "Web-CV Demo"
    },
    "Postulaciones Diarias": {
        "en": "Daily Applications",
        "fr": "Candidatures Quotidiennes",
        "de": "Tägliche Bewerbungen",
        "pt": "Candidaturas Diárias",
        "lu": "Deeglech Bewerbungen"
    },

    # Films & Equipment
    "Arsenal Técnico Cine": {
        "en": "Cinema Technical Arsenal",
        "fr": "Arsenal Technique Cinéma",
        "de": "Kino-Technikarsenal",
        "pt": "Arsenal Técnico de Cinema",
        "lu": "Kino-Technikarsenal"
    },
    "Fotomatón Glam & Escenografías": {
        "en": "Glam Photobooth & Stage Sets",
        "fr": "Photobooth Glam & Scénographies",
        "de": "Glamour-Fotokabine & Bühnenbilder",
        "pt": "Fotomatão Glam & Cenografias",
        "lu": "Glamour-Fotobox & Bünebiller"
    },
    "Fotomatón Glam &amp; Escenografías": {
        "en": "Glam Photobooth &amp; Stage Sets",
        "fr": "Photobooth Glam &amp; Scénographies",
        "de": "Glamour-Fotokabine &amp; Bühnenbilder",
        "pt": "Fotomatão Glam &amp; Cenografias",
        "lu": "Glamour-Fotobox &amp; Bünebiller"
    },
    "Talent Lab (Videobooks)": {
        "en": "Talent Lab (Videobooks)",
        "fr": "Talent Lab (Videobooks)",
        "de": "Talent Lab (Videobooks)",
        "pt": "Talent Lab (Videobooks)",
        "lu": "Talent Lab (Videobooks)"
    },
    "Condiciones & Seguros": {
        "en": "Terms & Insurance",
        "fr": "Conditions & Assurances",
        "de": "Bedingungen & Versicherungen",
        "pt": "Condições & Seguros",
        "lu": "Konditiounen & Versécherungen"
    },
    "Condiciones &amp; Seguros": {
        "en": "Terms &amp; Insurance",
        "fr": "Conditions &amp; Assurances",
        "de": "Bedingungen &amp; Versicherungen",
        "pt": "Condições &amp; Seguros",
        "lu": "Konditiounen &amp; Versécherungen"
    },
    "Calculadora de Alquiler": {
        "en": "Rental Calculator",
        "fr": "Calculateur de Location",
        "de": "Mietrechner",
        "pt": "Calculadora de Aluguer",
        "lu": "Locatiouns-Rechner"
    },
    "Reservar Material / Rodaje": {
        "en": "Book Equipment / Shoot",
        "fr": "Réserver Matériel / Tournage",
        "de": "Ausrüstung / Dreh buchen",
        "pt": "Reservar Material / Filmagem",
        "lu": "Ausrëschtung / Dréibuch buchen"
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
    "Equipos Listos para Rodaje": {
        "en": "Equipment Ready for Shoot",
        "fr": "Équipements Prêts pour Tournage",
        "de": "Drehbereite Ausrüstung",
        "pt": "Equipamentos Prontos para Filmagem",
        "lu": "Dréibereet Ausrüstung"
    },
    "EXPLORAR ARSENAL TÉCNICO ➔": {
        "en": "EXPLORE TECHNICAL ARSENAL ➔",
        "fr": "EXPLORER L’ARSENAL TECHNIQUE ➔",
        "de": "TECHNISCHES ARSENAL ENTDECKEN ➔",
        "pt": "EXPLORAR ARSENAL TÉCNICO ➔",
        "lu": "TECHNESCHT ARSENAL ENTDECKEN ➔"
    },
    "CALCULAR PRESUPUESTO DE ALQUILER": {
        "en": "CALCULATE RENTAL ESTIMATE",
        "fr": "CALCULER DEVIS DE LOCATION",
        "de": "MIETKOSTEN BERECHNEN",
        "pt": "CALCULAR ORÇAMENTO DE ALUGUER",
        "lu": "LOCATIOUNSKOUSCHTE BERECHNEN"
    },
    "Disponibilidad Inmediata 24/48h": {
        "en": "Immediate Availability 24/48h",
        "fr": "Disponibilité Immédiate 24/48h",
        "de": "Sofortige Verfügbarkeit 24/48h",
        "pt": "Disponibilidade Imediata 24/48h",
        "lu": "Direkt Disponibilitéit 24/48h"
    },
    "Seguro a Todo Riesgo Incluido": {
        "en": "All-Risk Insurance Included",
        "fr": "Assurance Tous Risques Incluse",
        "de": "Vollkaskoversicherung Inklusive",
        "pt": "Seguro de Todos os Riscos Incluído",
        "lu": "All-Risk Versécherung abegraff"
    },
    "Hubs en Madrid, París y Luxemburgo": {
        "en": "Hubs in Madrid, Paris and Luxembourg",
        "fr": "Hubs à Madrid, Paris et Luxembourg",
        "de": "Hubs in Madrid, Paris und Luxemburg",
        "pt": "Hubs em Madrid, Paris e Luxemburgo",
        "lu": "Hubs zu Madrid, Paris a Lëtzebuerg"
    }
}

print("Running generation...")
for p in PAGES:
    src_file = os.path.join(REPO_DIR, p)
    with open(src_file, "r", encoding="utf-8") as f:
        src_html = f.read()

    # Standardize root Spanish file
    root_bar = make_lang_bar(p, "es")
    root_html = re.sub(r'<!-- WeLux Sovereign 6-Language Selector Bar -->.*?</div>\s*</div>|<!-- WeLux Sovereign 6-Language Selector Bar -->.*?</div>', root_bar, src_html, flags=re.DOTALL)
    if "localStorage.getItem('welux_lang')" not in root_html:
        root_html = root_html.replace('</head>', f'{make_redirect_script()}\n</head>')
    with open(src_file, "w", encoding="utf-8") as f:
        f.write(root_html)

    for lang in TARGET_LANGS:
        lang_dir = os.path.join(REPO_DIR, lang)
        os.makedirs(lang_dir, exist_ok=True)

        trans_html = src_html
        # Multi-pass dictionary replacement
        sorted_phrases = sorted(DICTIONARY.keys(), key=lambda x: len(x), reverse=True)
        for ph in sorted_phrases:
            val = DICTIONARY[ph].get(lang)
            if val:
                trans_html = trans_html.replace(ph, val)

        # Set html lang
        trans_html = re.sub(r'<html([^>]*)lang="[a-zA-Z\-]+"', f'<html\\1lang="{lang}"', trans_html)

        # Replace language switcher
        target_bar = make_lang_bar(p, lang)
        trans_html = re.sub(r'<!-- WeLux Sovereign 6-Language Selector Bar -->.*?</div>\s*</div>|<!-- WeLux Sovereign 6-Language Selector Bar -->.*?</div>', target_bar, trans_html, flags=re.DOTALL)

        # Fix relative assets
        trans_html = re.sub(r'(src|href)=["\']assets/', r'\1="../assets/', trans_html)
        trans_html = trans_html.replace('../../assets/', '../assets/')

        out_path = os.path.join(lang_dir, p)
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(trans_html)

print("Full build complete!")
