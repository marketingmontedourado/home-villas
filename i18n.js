(function(){
  var LANGS=['pt','en','es'];
  var LABELS={pt:'PT',en:'EN',es:'ES'};
  var T={
    'Villas':{en:'Villas',es:'Villas'},
    'Destinos':{en:'Destinations',es:'Destinos'},
    'Sobre':{en:'About',es:'Acerca'},
    'Experiências':{en:'Experiences',es:'Experiencias'},
    'Contato':{en:'Contact',es:'Contacto'},
    'Reservar':{en:'Book Now',es:'Reservar'},
    'NAVEGAÇÃO':{en:'NAVIGATION',es:'NAVEGACIÓN'},
    'SUPORTE':{en:'SUPPORT',es:'SOPORTE'},
    'Sobre a marca':{en:'About the brand',es:'Sobre la marca'},
    'Anuncie sua home':{en:'List your home',es:'Anuncie su home'},
    'Política de privacidade':{en:'Privacy Policy',es:'Política de privacidad'},
    'Termos de uso':{en:'Terms of use',es:'Términos de uso'},
    'Destino Taíba':{en:'Taíba Destination',es:'Destino Taíba'},
    'VER →':{en:'VIEW →',es:'VER →'},
    'Ver todas':{en:'View all',es:'Ver todas'},
    'Ver homes disponíveis':{en:'View available homes',es:'Ver homes disponibles'},
    'Falar com concierge':{en:'Talk to concierge',es:'Hablar con concierge'},
    'Ver mapa':{en:'View map',es:'Ver mapa'},
    'Um refúgio':{en:'A refuge',es:'Un refugio'},
    'à sua espera.':{en:'awaits you.',es:'le espera.'},
    'NOSSAS VILLAS':{en:'OUR VILLAS',es:'NUESTRAS VILLAS'},
    'SOBRE A MARCA':{en:'ABOUT THE BRAND',es:'SOBRE LA MARCA'},
    'EXPERIÊNCIAS CURADAS':{en:'CURATED EXPERIENCES',es:'EXPERIENCIAS CURADAS'},
    'FALE CONOSCO':{en:'CONTACT US',es:'CONTÁCTENOS'},
    'SOBRE NÓS':{en:'ABOUT US',es:'SOBRE NOSOTROS'},
    'Curadoria':{en:'Curation',es:'Curaduría'},
    'à beira-mar.':{en:'by the sea.',es:'junto al mar.'},
    'Hospedagem':{en:'Vacation',es:'Alojamiento'},
    'por temporada.':{en:'rentals.',es:'por temporada.'},
    'Por que':{en:'Why',es:'Por qué'},
    'Monte Dourado.':{en:'Monte Dourado.',es:'Monte Dourado.'},
    'NOSSOS VALORES':{en:'OUR VALUES',es:'NUESTROS VALORES'},
    'Nossos':{en:'Our',es:'Nuestros'},
    'valores.':{en:'values.',es:'valores.'},
    'Respeito':{en:'Respect',es:'Respeto'},
    'Integridade':{en:'Integrity',es:'Integridad'},
    'Colaboração':{en:'Collaboration',es:'Colaboración'},
    'Proatividade e Inovação':{en:'Proactivity & Innovation',es:'Proactividad e Innovación'},
    'Responsabilidade social e ambiental':{en:'Social & Environmental Responsibility',es:'Responsabilidad social y ambiental'},
    'FUNDADORES':{en:'FOUNDERS',es:'FUNDADORES'},
    'Quem está':{en:'Who is',es:'Quién está'},
    'por trás.':{en:'behind it.',es:'detrás.'},
    'Viva a':{en:'Live',es:'Viva'},
    'Taíba.':{en:'Taíba.',es:'Taíba.'},
    'O QUE FAZER':{en:'WHAT TO DO',es:'QUÉ HACER'},
    'Cada dia,':{en:'Every day,',es:'Cada día,'},
    'uma aventura.':{en:'an adventure.',es:'una aventura.'},
    'DESCUBRA':{en:'DISCOVER',es:'DESCUBRA'},
    'curadas.':{en:'experiences.',es:'curadas.'},
    'ESPORTES':{en:'SPORTS',es:'DEPORTES'},
    'CONTEMPLAÇÃO':{en:'CONTEMPLATION',es:'CONTEMPLACIÓN'},
    'GASTRONOMIA':{en:'GASTRONOMY',es:'GASTRONOMÍA'},
    'NATUREZA':{en:'NATURE',es:'NATURALEZA'},
    'AVENTURA':{en:'ADVENTURE',es:'AVENTURA'},
    'Kitesurf':{en:'Kitesurfing',es:'Kitesurf'},
    'Surf':{en:'Surfing',es:'Surf'},
    'Pôr do sol nas dunas':{en:'Sunset on the dunes',es:'Puesta de sol en las dunas'},
    'A Pesqueira':{en:'The Fishery',es:'La Pesquera'},
    'Trilhas & Grutas':{en:'Trails & Caves',es:'Senderos & Grutas'},
    'Passeios de buggy':{en:'Buggy rides',es:'Paseos en buggy'},
    'CONTATO':{en:'CONTACT',es:'CONTACTO'},
    'Fale':{en:'Get in',es:'Hable'},
    'conosco.':{en:'touch.',es:'con nosotros.'},
    'ENTRE EM CONTATO':{en:'GET IN TOUCH',es:'CONTÁCTENOS'},
    'Estamos':{en:"We're",es:'Estamos'},
    'aqui.':{en:'here.',es:'aquí.'},
    'Nome completo':{en:'Full name',es:'Nombre completo'},
    'E-mail':{en:'Email',es:'Correo electrónico'},
    'Telefone / WhatsApp':{en:'Phone / WhatsApp',es:'Teléfono / WhatsApp'},
    'Assunto':{en:'Subject',es:'Asunto'},
    'Mensagem':{en:'Message',es:'Mensaje'},
    'Enviar mensagem':{en:'Send message',es:'Enviar mensaje'},
    'Localização':{en:'Location',es:'Ubicación'},
    'DESTINO':{en:'DESTINATION',es:'DESTINO'},
    'Taíba,':{en:'Taíba,',es:'Taíba,'},
    'Ceará.':{en:'Ceará.',es:'Ceará.'},
    'O CENÁRIO PARADISÍACO':{en:'THE PARADISE SCENERY',es:'EL ESCENARIO PARADISÍACO'},
    'O paraíso':{en:'The closest',es:'El paraíso'},
    'mais próximo.':{en:'paradise.',es:'más cercano.'},
    'De Fortaleza':{en:'From Fortaleza',es:'De Fortaleza'},
    'Do Cumbuco':{en:'From Cumbuco',es:'De Cumbuco'},
    'Do Pecém':{en:'From Pecém',es:'De Pecém'},
    'Duplicada':{en:'Dual carriageway',es:'Duplicada'},
    'Cenários':{en:'Diverse',es:'Escenarios'},
    'diversos.':{en:'sceneries.',es:'diversos.'},
    'EMPREENDIMENTOS NA TAÍBA':{en:'DEVELOPMENTS IN TAÍBA',es:'EMPRENDIMIENTOS EN TAÍBA'},
    'Nossas':{en:'Our',es:'Nuestras'},
    'villas.':{en:'villas.',es:'villas.'},
    'VILLA':{en:'VILLA',es:'VILLA'},
    'DISPONÍVEIS':{en:'AVAILABLE',es:'DISPONIBLES'},
    'HOMES NO CONDOMÍNIO':{en:'HOMES IN THE COMMUNITY',es:'HOMES EN EL CONDOMINIO'},
    'disponíveis.':{en:'available.',es:'disponibles.'},
    'ONDE FICA':{en:'LOCATION',es:'UBICACIÓN'},
    'INFRAESTRUTURA':{en:'INFRASTRUCTURE',es:'INFRAESTRUCTURA'},
    'Lazer':{en:'Leisure',es:'Ocio'},
    'sem sair de casa.':{en:'without leaving home.',es:'sin salir de casa.'},
    'MAPA DO CONDOMÍNIO':{en:'COMMUNITY MAP',es:'MAPA DEL CONDOMINIO'},
    'Escolha':{en:'Choose',es:'Elija'},
    'a sua home.':{en:'your home.',es:'su home.'},
    'LAZER & INFRAESTRUTURA':{en:'LEISURE & INFRASTRUCTURE',es:'OCIO & INFRAESTRUCTURA'},
    'Vento que':{en:'Wind that',es:'Viento que'},
    'inspira arte.':{en:'inspires art.',es:'inspira arte.'},
    'ESPORTES & CONTEMPLAÇÃO':{en:'SPORTS & CONTEMPLATION',es:'DEPORTES & CONTEMPLACIÓN'},
    'SERVIÇOS':{en:'SERVICES',es:'SERVICIOS'},
    'Parque da Lagoa':{en:'Lagoon Park',es:'Parque de la Laguna'},
    'Quadras & Campo':{en:'Courts & Field',es:'Canchas & Campo'},
    'Fireplace & Píer':{en:'Fireplace & Pier',es:'Chimenea & Muelle'},
    'Cafeteria & Coworking':{en:'Café & Coworking',es:'Cafetería & Coworking'},
    'Condomínios curados':{en:'Curated',es:'Condominios curados'},
    'no litoral.':{en:'condominiums.',es:'en el litoral.'},
    'Explore a':{en:'Explore the',es:'Explore la'},
    'costa.':{en:'coast.',es:'costa.'},
    'Praia da Taíba':{en:'Taíba Beach',es:'Playa de Taíba'},
    'Aeroporto de Fortaleza':{en:'Fortaleza Airport',es:'Aeropuerto de Fortaleza'},
    'Porto do Pecém':{en:'Pecém Port',es:'Puerto de Pecém'},
    'Praça central':{en:'Central square',es:'Plaza central'},
    'Lounge contemplativo':{en:'Contemplative lounge',es:'Lounge contemplativo'},
    'Yoga & Massagem':{en:'Yoga & Massage',es:'Yoga & Masaje'},
    'Píer & Fireplace':{en:'Pier & Fireplace',es:'Muelle & Chimenea'},
    'Quadras de areia':{en:'Sand courts',es:'Canchas de arena'},
    'Quadra de tênis':{en:'Tennis court',es:'Cancha de tenis'},
    'Campo de futebol':{en:'Football field',es:'Campo de fútbol'},
    'Academia climatizada':{en:'Air-conditioned gym',es:'Gimnasio climatizado'},
    'Playground':{en:'Playground',es:'Parque infantil'},
    'Recepção para hóspedes':{en:'Guest reception',es:'Recepción para huéspedes'},
    'Quadra de areia':{en:'Sand court',es:'Cancha de arena'},
    'Píer sobre a lagoa':{en:'Pier on the lagoon',es:'Muelle sobre la laguna'},
    'Vegetação nativa preservada':{en:'Preserved native vegetation',es:'Vegetación nativa preservada'},
    'BEM-ESTAR':{en:'WELLNESS',es:'BIENESTAR'},
    'TAÍBA · CEARÁ · BRASIL':{en:'TAÍBA · CEARÁ · BRAZIL',es:'TAÍBA · CEARÁ · BRASIL'}
  };

  function getLang(){return localStorage.getItem('hv_lang')||'pt'}
  function setLang(l){localStorage.setItem('hv_lang',l)}

  function applyLang(lang){
    var els=document.querySelectorAll('h1,h2,h3,h4,p,a,span,button,div,li,label,td,th');
    for(var i=0;i<els.length;i++){
      var el=els[i];
      if(el.tagName==='SCRIPT'||el.tagName==='STYLE')continue;
      for(var j=0;j<el.childNodes.length;j++){
        var n=el.childNodes[j];
        if(n.nodeType!==3)continue;
        var txt=n.textContent.trim();
        if(txt.length<2)continue;
        if(!n._orig)n._orig=txt;
        var orig=n._orig;
        if(lang==='pt'){
          n.textContent=n.textContent.replace(n.textContent.trim(),orig);
        }else if(T[orig]&&T[orig][lang]){
          n.textContent=n.textContent.replace(n.textContent.trim(),T[orig][lang]);
        }
      }
    }
    var inps=document.querySelectorAll('input[placeholder],textarea[placeholder]');
    for(var k=0;k<inps.length;k++){
      if(!inps[k]._origPh)inps[k]._origPh=inps[k].placeholder;
      if(lang==='pt')inps[k].placeholder=inps[k]._origPh;
      else if(T[inps[k]._origPh]&&T[inps[k]._origPh][lang])inps[k].placeholder=T[inps[k]._origPh][lang];
    }
    var btns=document.querySelectorAll('.nav__lang');
    for(var b=0;b<btns.length;b++){
      for(var c=0;c<btns[b].childNodes.length;c++){
        if(btns[b].childNodes[c].nodeType===3&&btns[b].childNodes[c].textContent.trim()){
          btns[b].childNodes[c].textContent=' '+LABELS[lang];
        }
      }
    }
    document.documentElement.lang=lang==='pt'?'pt-BR':lang==='en'?'en-US':'es-ES';
  }

  function cycleLang(){
    var cur=getLang();
    var next=LANGS[(LANGS.indexOf(cur)+1)%LANGS.length];
    setLang(next);
    applyLang(next);
  }

  function init(){
    var btns=document.querySelectorAll('.nav__lang');
    for(var i=0;i<btns.length;i++){
      btns[i].addEventListener('click',function(e){e.preventDefault();cycleLang()});
    }
    var lang=getLang();
    if(lang!=='pt')setTimeout(function(){applyLang(lang)},50);
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
  else init();
})();
