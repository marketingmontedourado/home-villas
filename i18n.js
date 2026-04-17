/* ============================================================
   HOME & VILLAS — Sistema de Idiomas (PT-BR / EN / ES)
   ============================================================ */
(function(){
  const LANGS = ['pt','en','es'];
  const LABELS = { pt:'PT', en:'EN', es:'ES' };
  const LANG_FULL = { pt:'Português', en:'English', es:'Español' };

  // Traduções compartilhadas (nav, footer, botões)
  const shared = {
    // NAV
    'Villas':               { en:'Villas',          es:'Villas' },
    'Destinos':             { en:'Destinations',    es:'Destinos' },
    'Sobre':                { en:'About',           es:'Acerca' },
    'Experiências':         { en:'Experiences',     es:'Experiencias' },
    'Contato':              { en:'Contact',         es:'Contacto' },
    'Reservar':             { en:'Book Now',        es:'Reservar' },

    // FOOTER
    'NAVEGAÇÃO':            { en:'NAVIGATION',      es:'NAVEGACIÓN' },
    'SUPORTE':              { en:'SUPPORT',         es:'SOPORTE' },
    'Sobre a marca':        { en:'About the brand', es:'Sobre la marca' },
    'Anuncie sua home':     { en:'List your home',  es:'Anuncie su home' },
    'Política de privacidade': { en:'Privacy Policy', es:'Política de privacidad' },
    'Termos de uso':        { en:'Terms of use',    es:'Términos de uso' },
    'Hospedagem por temporada no litoral cearense, por Monte Dourado. Arquitetura, natureza e curadoria em cada villa.':
      { en:'Seasonal vacation homes on the coast of Ceará, by Monte Dourado. Architecture, nature and curation in every villa.',
        es:'Alojamiento por temporada en el litoral cearense, por Monte Dourado. Arquitectura, naturaleza y curaduría en cada villa.' },

    // MOBILE MENU
    'Destino Taíba':        { en:'Taíba Destination', es:'Destino Taíba' },
    'WhatsApp':             { en:'WhatsApp',          es:'WhatsApp' },

    // COMMON
    'VER →':                { en:'VIEW →',          es:'VER →' },
    'Ver todas':            { en:'View all',        es:'Ver todas' },
    'Ver homes disponíveis':{ en:'View available homes', es:'Ver homes disponibles' },
    'Falar com concierge':  { en:'Talk to concierge', es:'Hablar con concierge' },
    'Ver mapa':             { en:'View map',        es:'Ver mapa' },
    'LITORAL  ·  CEARÁ  ·  2026': { en:'COAST  ·  CEARÁ  ·  2026', es:'LITORAL  ·  CEARÁ  ·  2026' },
  };

  // Traduções por página
  const pages = {
    // HOMEPAGE
    'index': {
      'Um refúgio':                 { en:'A refuge',              es:'Un refugio' },
      'à sua espera.':              { en:'awaits you.',           es:'le espera.' },
      'Villas curadas no litoral cearense. Arquitetura integrada à natureza, concierge dedicado e a calma de quem conhece cada vento desta costa.':
        { en:'Curated villas on the coast of Ceará. Architecture integrated with nature, dedicated concierge and the calm of those who know every breeze of this coast.',
          es:'Villas curadas en el litoral cearense. Arquitectura integrada a la naturaleza, concierge dedicado y la calma de quien conoce cada viento de esta costa.' },
      'NOSSAS VILLAS':              { en:'OUR VILLAS',            es:'NUESTRAS VILLAS' },
      'Condomínios curados':        { en:'Curated',               es:'Condominios curados' },
      'no litoral.':                { en:'condominiums.',         es:'en el litoral.' },
      'DESTINOS':                   { en:'DESTINATIONS',          es:'DESTINOS' },
      'Explore a':                  { en:'Explore the',           es:'Explore la' },
      'costa.':                     { en:'coast.',                es:'costa.' },
      'SOBRE A MARCA':              { en:'ABOUT THE BRAND',       es:'SOBRE LA MARCA' },
      'EXPERIÊNCIAS CURADAS':       { en:'CURATED EXPERIENCES',   es:'EXPERIENCIAS CURADAS' },
      'FALE CONOSCO':               { en:'CONTACT US',            es:'CONTÁCTENOS' },
    },

    // SOBRE
    'sobre': {
      'SOBRE NÓS':                  { en:'ABOUT US',              es:'SOBRE NOSOTROS' },
      'Curadoria':                  { en:'Curation',              es:'Curaduría' },
      'à beira-mar.':               { en:'by the sea.',           es:'junto al mar.' },
      'HOME & VILLAS':              { en:'HOME & VILLAS',         es:'HOME & VILLAS' },
      'Hospedagem':                 { en:'Vacation',              es:'Alojamiento' },
      'por temporada.':             { en:'rentals.',              es:'por temporada.' },
      'BY MONTE DOURADO':           { en:'BY MONTE DOURADO',      es:'BY MONTE DOURADO' },
      'Por que':                    { en:'Why',                   es:'Por qué' },
      'Monte Dourado.':             { en:'Monte Dourado.',        es:'Monte Dourado.' },
      'NOSSOS VALORES':             { en:'OUR VALUES',            es:'NUESTROS VALORES' },
      'Nossos':                     { en:'Our',                   es:'Nuestros' },
      'valores.':                   { en:'values.',               es:'valores.' },
      'Respeito':                   { en:'Respect',               es:'Respeto' },
      'Integridade':                { en:'Integrity',             es:'Integridad' },
      'Colaboração':                { en:'Collaboration',         es:'Colaboración' },
      'Proatividade e Inovação':    { en:'Proactivity & Innovation', es:'Proactividad e Innovación' },
      'Responsabilidade social e ambiental': { en:'Social & Environmental Responsibility', es:'Responsabilidad social y ambiental' },
      'FUNDADORES':                 { en:'FOUNDERS',              es:'FUNDADORES' },
      'Quem está':                  { en:'Who is',                es:'Quién está' },
      'por trás.':                  { en:'behind it.',            es:'detrás.' },
    },

    // EXPERIÊNCIAS
    'experiencias': {
      'EXPERIÊNCIAS':               { en:'EXPERIENCES',           es:'EXPERIENCIAS' },
      'Viva a':                     { en:'Live',                  es:'Viva' },
      'Taíba.':                     { en:'Taíba.',                es:'Taíba.' },
      'O QUE FAZER':                { en:'WHAT TO DO',            es:'QUÉ HACER' },
      'Cada dia,':                  { en:'Every day,',            es:'Cada día,' },
      'uma aventura.':              { en:'an adventure.',         es:'una aventura.' },
      'DESCUBRA':                   { en:'DISCOVER',              es:'DESCUBRA' },
      'Experiências':               { en:'Curated',               es:'Experiencias' },
      'curadas.':                   { en:'experiences.',          es:'curadas.' },
      'ESPORTES':                   { en:'SPORTS',                es:'DEPORTES' },
      'CONTEMPLAÇÃO':               { en:'CONTEMPLATION',         es:'CONTEMPLACIÓN' },
      'GASTRONOMIA':                { en:'GASTRONOMY',            es:'GASTRONOMÍA' },
      'NATUREZA':                   { en:'NATURE',                es:'NATURALEZA' },
      'AVENTURA':                   { en:'ADVENTURE',             es:'AVENTURA' },
      'Kitesurf':                   { en:'Kitesurfing',           es:'Kitesurf' },
      'Surf':                       { en:'Surfing',               es:'Surf' },
      'Pôr do sol nas dunas':       { en:'Sunset on the dunes',   es:'Puesta de sol en las dunas' },
      'A Pesqueira':                { en:'The Fishery',           es:'La Pesquera' },
      'Trilhas & Grutas':           { en:'Trails & Caves',        es:'Senderos & Grutas' },
      'Passeios de buggy':          { en:'Buggy rides',           es:'Paseos en buggy' },
    },

    // CONTATO
    'contato': {
      'CONTATO':                    { en:'CONTACT',               es:'CONTACTO' },
      'Fale':                       { en:'Get in',                es:'Hable' },
      'conosco.':                   { en:'touch.',                es:'con nosotros.' },
      'ENTRE EM CONTATO':           { en:'GET IN TOUCH',          es:'CONTÁCTENOS' },
      'Estamos':                    { en:"We're",                 es:'Estamos' },
      'aqui.':                      { en:'here.',                 es:'aquí.' },
      'Nome completo':              { en:'Full name',             es:'Nombre completo' },
      'E-mail':                     { en:'Email',                 es:'Correo electrónico' },
      'Telefone / WhatsApp':        { en:'Phone / WhatsApp',      es:'Teléfono / WhatsApp' },
      'Assunto':                    { en:'Subject',               es:'Asunto' },
      'Mensagem':                   { en:'Message',               es:'Mensaje' },
      'Enviar mensagem':            { en:'Send message',          es:'Enviar mensaje' },
      'Localização':                { en:'Location',              es:'Ubicación' },
    },

    // DESTINO TAÍBA
    'destino-taiba': {
      'DESTINO':                    { en:'DESTINATION',           es:'DESTINO' },
      'Taíba,':                     { en:'Taíba,',                es:'Taíba,' },
      'Ceará.':                     { en:'Ceará.',                es:'Ceará.' },
      'O CENÁRIO PARADISÍACO':      { en:'THE PARADISE SCENERY',  es:'EL ESCENARIO PARADISÍACO' },
      'O paraíso':                  { en:'The closest',           es:'El paraíso' },
      'mais próximo.':              { en:'paradise.',             es:'más cercano.' },
      'De Fortaleza':               { en:'From Fortaleza',        es:'De Fortaleza' },
      'Do Cumbuco':                 { en:'From Cumbuco',          es:'De Cumbuco' },
      'Do Pecém':                   { en:'From Pecém',            es:'De Pecém' },
      'Duplicada':                  { en:'Dual carriageway',      es:'Duplicada' },
      'O QUE FAZER':                { en:'WHAT TO DO',            es:'QUÉ HACER' },
      'Cenários':                   { en:'Diverse',               es:'Escenarios' },
      'diversos.':                  { en:'sceneries.',            es:'diversos.' },
      'EMPREENDIMENTOS NA TAÍBA':   { en:'DEVELOPMENTS IN TAÍBA', es:'EMPRENDIMIENTOS EN TAÍBA' },
      'Nossas':                     { en:'Our',                   es:'Nuestras' },
      'villas.':                    { en:'villas.',               es:'villas.' },
    },

    // VILA DO CHAPÉU
    'vila-do-chapeu': {
      'TAÍBA · CEARÁ · BRASIL':     { en:'TAÍBA · CEARÁ · BRAZIL', es:'TAÍBA · CEARÁ · BRASIL' },
      'VILLA':                      { en:'VILLA',                  es:'VILLA' },
      'DISPONÍVEIS':                { en:'AVAILABLE',              es:'DISPONIBLES' },
      'HOMES NO CONDOMÍNIO':        { en:'HOMES IN THE COMMUNITY', es:'HOMES EN EL CONDOMINIO' },
      'disponíveis.':               { en:'available.',             es:'disponibles.' },
      'ONDE FICA':                  { en:'LOCATION',               es:'UBICACIÓN' },
      'INFRAESTRUTURA':             { en:'INFRASTRUCTURE',         es:'INFRAESTRUCTURA' },
      'Lazer':                      { en:'Leisure',                es:'Ocio' },
      'sem sair de casa.':          { en:'without leaving home.',  es:'sin salir de casa.' },
      'MAPA DO CONDOMÍNIO':         { en:'COMMUNITY MAP',          es:'MAPA DEL CONDOMINIO' },
      'Escolha':                    { en:'Choose',                 es:'Elija' },
      'a sua home.':                { en:'your home.',             es:'su home.' },
    },

    // VILA DO MORRO
    'vila-do-morro': {
      'LAZER & INFRAESTRUTURA':     { en:'LEISURE & INFRASTRUCTURE', es:'OCIO & INFRAESTRUCTURA' },
      'Vento que':                  { en:'Wind that',              es:'Viento que' },
      'inspira arte.':              { en:'inspires art.',          es:'inspira arte.' },
      'ESPORTES & CONTEMPLAÇÃO':    { en:'SPORTS & CONTEMPLATION', es:'DEPORTES & CONTEMPLACIÓN' },
      'SERVIÇOS':                   { en:'SERVICES',               es:'SERVICIOS' },
      'Parque da Lagoa':            { en:'Lagoon Park',            es:'Parque de la Laguna' },
      'Quadras & Campo':            { en:'Courts & Field',         es:'Canchas & Campo' },
      'Cable Park':                 { en:'Cable Park',             es:'Cable Park' },
      'Fireplace & Píer':           { en:'Fireplace & Pier',       es:'Chimenea & Muelle' },
      'Cafeteria & Coworking':      { en:'Café & Coworking',       es:'Cafetería & Coworking' },
    },
  };

  // Detectar página atual
  function getPage() {
    const path = location.pathname.replace(/\/$/, '').split('/').pop() || 'index';
    return path.replace('.html', '');
  }

  // Obter idioma salvo ou padrão
  function getLang() {
    return localStorage.getItem('hv_lang') || 'pt';
  }

  function setLang(lang) {
    localStorage.setItem('hv_lang', lang);
  }

  // Traduzir texto
  function translate(text, lang) {
    if (lang === 'pt') return text;
    const t = text.trim();
    const page = getPage();
    // Buscar nas traduções da página
    if (pages[page] && pages[page][t] && pages[page][t][lang]) return pages[page][t][lang];
    // Buscar nas traduções compartilhadas
    if (shared[t] && shared[t][lang]) return shared[t][lang];
    return text;
  }

  // Aplicar traduções na página
  function applyTranslations(lang) {
    // Traduzir elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const dict = { ...shared, ...(pages[getPage()] || {}) };
      if (lang === 'pt') {
        el.textContent = key;
      } else if (dict[key] && dict[key][lang]) {
        el.textContent = dict[key][lang];
      }
    });

    // Traduzir placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      const dict = { ...shared, ...(pages[getPage()] || {}) };
      if (lang === 'pt') {
        el.placeholder = key;
      } else if (dict[key] && dict[key][lang]) {
        el.placeholder = dict[key][lang];
      }
    });

    // Fallback: buscar textos diretamente no DOM
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    const dict = { ...shared, ...(pages[getPage()] || {}) };
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const parent = node.parentElement;
      if (!parent || parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') continue;
      const t = node.textContent.trim();
      if (!t || t.length < 2) continue;

      if (lang === 'pt') {
        // Restore original
        if (parent.dataset.origText) {
          node.textContent = parent.dataset.origText;
          delete parent.dataset.origText;
        }
      } else {
        if (dict[t] && dict[t][lang]) {
          if (!parent.dataset.origText) parent.dataset.origText = node.textContent;
          node.textContent = node.textContent.replace(t, dict[t][lang]);
        }
      }
    }

    // Atualizar botão de idioma
    document.querySelectorAll('.nav__lang, .mobile-menu .lang-switch').forEach(btn => {
      const label = btn.querySelector('span') || btn.childNodes[btn.childNodes.length - 1];
      if (label && label.nodeType === 3) {
        label.textContent = ' ' + LABELS[lang];
      } else if (label) {
        label.textContent = LABELS[lang];
      }
    });

    // Atualizar html lang
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'en' ? 'en-US' : 'es-ES';
  }

  // Ciclar idioma: PT → EN → ES → PT
  function cycleLang() {
    const current = getLang();
    const idx = LANGS.indexOf(current);
    const next = LANGS[(idx + 1) % LANGS.length];
    setLang(next);
    applyTranslations(next);
  }

  // Inicializar
  function init() {
    const lang = getLang();

    // Vincular botões de idioma
    document.querySelectorAll('.nav__lang').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        cycleLang();
      });
    });

    // Aplicar idioma salvo
    if (lang !== 'pt') {
      applyTranslations(lang);
    } else {
      // Atualizar label mesmo em PT
      document.querySelectorAll('.nav__lang').forEach(btn => {
        const nodes = btn.childNodes;
        for (let n of nodes) {
          if (n.nodeType === 3 && n.textContent.trim()) {
            n.textContent = '\n      ' + LABELS[lang] + '\n    ';
          }
        }
      });
    }
  }

  // Rodar quando DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
