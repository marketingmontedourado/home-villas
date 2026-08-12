(function(){
  var LANGS=['pt','en','es','fr'];
  var LABELS={pt:'PT',en:'EN',es:'ES',fr:'FR'};
  var T={
    'Villas':{en:'Villas',es:'Villas',fr:'Villas'},
    'Destinos':{en:'Destinations',es:'Destinos',fr:'Destinations'},
    'Sobre':{en:'About',es:'Acerca',fr:'À propos'},
    'Experiências':{en:'Experiences',es:'Experiencias',fr:'Expériences'},
    'Contato':{en:'Contact',es:'Contacto',fr:'Contact'},
    'Reservar':{en:'Book Now',es:'Reservar',fr:'Réserver'},
    'NAVEGAÇÃO':{en:'NAVIGATION',es:'NAVEGACIÓN',fr:'NAVIGATION'},
    'SUPORTE':{en:'SUPPORT',es:'SOPORTE',fr:'ASSISTANCE'},
    'Sobre a marca':{en:'About the brand',es:'Sobre la marca',fr:'À propos de la marque'},
    'Anuncie sua home':{en:'List your home',es:'Anuncie su home',fr:'Proposez votre maison'},
    'Política de privacidade':{en:'Privacy Policy',es:'Política de privacidad',fr:'Politique de confidentialité'},
    'Termos de uso':{en:'Terms of use',es:'Términos de uso',fr:"Conditions d'utilisation"},
    'Destino Taíba':{en:'Taíba Destination',es:'Destino Taíba',fr:'Destination Taíba'},
    'VER →':{en:'VIEW →',es:'VER →',fr:'VOIR →'},
    'Ver todas':{en:'View all',es:'Ver todas',fr:'Tout voir'},
    'Ver homes disponíveis':{en:'View available homes',es:'Ver homes disponibles',fr:'Voir les maisons disponibles'},
    'Falar com concierge':{en:'Talk to concierge',es:'Hablar con concierge',fr:'Parler au concierge'},
    'Ver mapa':{en:'View map',es:'Ver mapa',fr:'Voir la carte'},
    'Um refúgio':{en:'A refuge',es:'Un refugio',fr:'Un refuge'},
    'à sua espera.':{en:'awaits you.',es:'le espera.',fr:'vous attend.'},
    'NOSSAS VILLAS':{en:'OUR VILLAS',es:'NUESTRAS VILLAS',fr:'NOS VILLAS'},
    'SOBRE A MARCA':{en:'ABOUT THE BRAND',es:'SOBRE LA MARCA',fr:'À PROPOS DE LA MARQUE'},
    'EXPERIÊNCIAS CURADAS':{en:'CURATED EXPERIENCES',es:'EXPERIENCIAS CURADAS',fr:'EXPÉRIENCES CHOISIES'},
    'FALE CONOSCO':{en:'CONTACT US',es:'CONTÁCTENOS',fr:'CONTACTEZ-NOUS'},
    'SOBRE NÓS':{en:'ABOUT US',es:'SOBRE NOSOTROS',fr:'QUI SOMMES-NOUS'},
    'Curadoria':{en:'Curation',es:'Curaduría',fr:'Curation'},
    'à beira-mar.':{en:'by the sea.',es:'junto al mar.',fr:'au bord de la mer.'},
    'Hospedagem':{en:'Vacation',es:'Alojamiento',fr:'Séjours'},
    'por temporada.':{en:'rentals.',es:'por temporada.',fr:'saisonniers.'},
    'Por que':{en:'Why',es:'Por qué',fr:'Pourquoi'},
    'Monte Dourado.':{en:'Monte Dourado.',es:'Monte Dourado.',fr:'Monte Dourado.'},
    'NOSSOS VALORES':{en:'OUR VALUES',es:'NUESTROS VALORES',fr:'NOS VALEURS'},
    'Nossos':{en:'Our',es:'Nuestros',fr:'Nos'},
    'valores.':{en:'values.',es:'valores.',fr:'valeurs.'},
    'Respeito':{en:'Respect',es:'Respeto',fr:'Respect'},
    'Integridade':{en:'Integrity',es:'Integridad',fr:'Intégrité'},
    'Colaboração':{en:'Collaboration',es:'Colaboración',fr:'Collaboration'},
    'Proatividade e Inovação':{en:'Proactivity & Innovation',es:'Proactividad e Innovación',fr:'Proactivité & Innovation'},
    'Responsabilidade social e ambiental':{en:'Social & Environmental Responsibility',es:'Responsabilidad social y ambiental',fr:'Responsabilité sociale et environnementale'},
    'FUNDADORES':{en:'FOUNDERS',es:'FUNDADORES',fr:'FONDATEURS'},
    'Quem está':{en:'Who is',es:'Quién está',fr:'Qui est'},
    'por trás.':{en:'behind it.',es:'detrás.',fr:'derrière.'},
    'Viva a':{en:'Live',es:'Viva',fr:'Vivez'},
    'Taíba.':{en:'Taíba.',es:'Taíba.',fr:'Taíba.'},
    'O QUE FAZER':{en:'WHAT TO DO',es:'QUÉ HACER',fr:'QUE FAIRE'},
    'Cada dia,':{en:'Every day,',es:'Cada día,',fr:'Chaque jour,'},
    'uma aventura.':{en:'an adventure.',es:'una aventura.',fr:'une aventure.'},
    'DESCUBRA':{en:'DISCOVER',es:'DESCUBRA',fr:'DÉCOUVREZ'},
    'curadas.':{en:'experiences.',es:'curadas.',fr:'choisies.'},
    'ESPORTES':{en:'SPORTS',es:'DEPORTES',fr:'SPORTS'},
    'CONTEMPLAÇÃO':{en:'CONTEMPLATION',es:'CONTEMPLACIÓN',fr:'CONTEMPLATION'},
    'GASTRONOMIA':{en:'GASTRONOMY',es:'GASTRONOMÍA',fr:'GASTRONOMIE'},
    'NATUREZA':{en:'NATURE',es:'NATURALEZA',fr:'NATURE'},
    'AVENTURA':{en:'ADVENTURE',es:'AVENTURA',fr:'AVENTURE'},
    'Kitesurf':{en:'Kitesurfing',es:'Kitesurf',fr:'Kitesurf'},
    'Surf':{en:'Surfing',es:'Surf',fr:'Surf'},
    'Pôr do sol nas dunas':{en:'Sunset on the dunes',es:'Puesta de sol en las dunas',fr:'Coucher de soleil sur les dunes'},
    'A Pesqueira':{en:'The Fishery',es:'La Pesquera',fr:'La Pêcherie'},
    'Trilhas & Grutas':{en:'Trails & Caves',es:'Senderos & Grutas',fr:'Sentiers & Grottes'},
    'Passeios de buggy':{en:'Buggy rides',es:'Paseos en buggy',fr:'Balades en buggy'},
    'CONTATO':{en:'CONTACT',es:'CONTACTO',fr:'CONTACT'},
    'Fale':{en:'Get in',es:'Hable',fr:'Prenez'},
    'conosco.':{en:'touch.',es:'con nosotros.',fr:'contact.'},
    'ENTRE EM CONTATO':{en:'GET IN TOUCH',es:'CONTÁCTENOS',fr:'CONTACTEZ-NOUS'},
    'Estamos':{en:"We're",es:'Estamos',fr:'Nous sommes'},
    'aqui.':{en:'here.',es:'aquí.',fr:'là.'},
    'Nome completo':{en:'Full name',es:'Nombre completo',fr:'Nom complet'},
    'E-mail':{en:'Email',es:'Correo electrónico',fr:'E-mail'},
    'Telefone / WhatsApp':{en:'Phone / WhatsApp',es:'Teléfono / WhatsApp',fr:'Téléphone / WhatsApp'},
    'Assunto':{en:'Subject',es:'Asunto',fr:'Objet'},
    'Mensagem':{en:'Message',es:'Mensaje',fr:'Message'},
    'Enviar mensagem':{en:'Send message',es:'Enviar mensaje',fr:'Envoyer le message'},
    'Localização':{en:'Location',es:'Ubicación',fr:'Localisation'},
    'DESTINO':{en:'DESTINATION',es:'DESTINO',fr:'DESTINATION'},
    'Taíba,':{en:'Taíba,',es:'Taíba,',fr:'Taíba,'},
    'Ceará.':{en:'Ceará.',es:'Ceará.',fr:'Ceará.'},
    'O CENÁRIO PARADISÍACO':{en:'THE PARADISE SCENERY',es:'EL ESCENARIO PARADISÍACO',fr:'UN DÉCOR PARADISIAQUE'},
    'O paraíso':{en:'The closest',es:'El paraíso',fr:'Le paradis'},
    'mais próximo.':{en:'paradise.',es:'más cercano.',fr:'le plus proche.'},
    'De Fortaleza':{en:'From Fortaleza',es:'De Fortaleza',fr:'De Fortaleza'},
    'Do Cumbuco':{en:'From Cumbuco',es:'De Cumbuco',fr:'De Cumbuco'},
    'Do Pecém':{en:'From Pecém',es:'De Pecém',fr:'De Pecém'},
    'Duplicada':{en:'Dual carriageway',es:'Duplicada',fr:'Voie double'},
    'Cenários':{en:'Diverse',es:'Escenarios',fr:'Des décors'},
    'diversos.':{en:'sceneries.',es:'diversos.',fr:'variés.'},
    'EMPREENDIMENTOS NA TAÍBA':{en:'DEVELOPMENTS IN TAÍBA',es:'EMPRENDIMIENTOS EN TAÍBA',fr:'PROJETS À TAÍBA'},
    'Nossas':{en:'Our',es:'Nuestras',fr:'Nos'},
    'villas.':{en:'villas.',es:'villas.',fr:'villas.'},
    'VILLA':{en:'VILLA',es:'VILLA',fr:'VILLA'},
    'DISPONÍVEIS':{en:'AVAILABLE',es:'DISPONIBLES',fr:'DISPONIBLES'},
    'HOMES NO CONDOMÍNIO':{en:'HOMES IN THE COMMUNITY',es:'HOMES EN EL CONDOMINIO',fr:'MAISONS DANS LA RÉSIDENCE'},
    'disponíveis.':{en:'available.',es:'disponibles.',fr:'disponibles.'},
    'ONDE FICA':{en:'LOCATION',es:'UBICACIÓN',fr:'EMPLACEMENT'},
    'INFRAESTRUTURA':{en:'INFRASTRUCTURE',es:'INFRAESTRUCTURA',fr:'INFRASTRUCTURE'},
    'Lazer':{en:'Leisure',es:'Ocio',fr:'Loisirs'},
    'sem sair de casa.':{en:'without leaving home.',es:'sin salir de casa.',fr:'sans quitter la maison.'},
    'MAPA DO CONDOMÍNIO':{en:'COMMUNITY MAP',es:'MAPA DEL CONDOMINIO',fr:'PLAN DE LA RÉSIDENCE'},
    'Escolha':{en:'Choose',es:'Elija',fr:'Choisissez'},
    'a sua home.':{en:'your home.',es:'su home.',fr:'votre maison.'},
    'LAZER & INFRAESTRUTURA':{en:'LEISURE & INFRASTRUCTURE',es:'OCIO & INFRAESTRUCTURA',fr:'LOISIRS & INFRASTRUCTURE'},
    'Vento que':{en:'Wind that',es:'Viento que',fr:'Le vent qui'},
    'inspira arte.':{en:'inspires art.',es:'inspira arte.',fr:"inspire l'art."},
    'ESPORTES & CONTEMPLAÇÃO':{en:'SPORTS & CONTEMPLATION',es:'DEPORTES & CONTEMPLACIÓN',fr:'SPORTS & CONTEMPLATION'},
    'SERVIÇOS':{en:'SERVICES',es:'SERVICIOS',fr:'SERVICES'},
    'Parque da Lagoa':{en:'Lagoon Park',es:'Parque de la Laguna',fr:'Parc de la Lagune'},
    'Quadras & Campo':{en:'Courts & Field',es:'Canchas & Campo',fr:'Terrains & Stade'},
    'Fireplace & Píer':{en:'Fireplace & Pier',es:'Chimenea & Muelle',fr:'Cheminée & Ponton'},
    'Cafeteria & Coworking':{en:'Café & Coworking',es:'Cafetería & Coworking',fr:'Café & Coworking'},
    'Condomínios curados':{en:'Curated',es:'Condominios curados',fr:'Des résidences'},
    'no litoral.':{en:'condominiums.',es:'en el litoral.',fr:'choisies sur la côte.'},
    'Explore a':{en:'Explore the',es:'Explore la',fr:'Explorez la'},
    'costa.':{en:'coast.',es:'costa.',fr:'côte.'},
    'Praia da Taíba':{en:'Taíba Beach',es:'Playa de Taíba',fr:'Plage de Taíba'},
    'Aeroporto de Fortaleza':{en:'Fortaleza Airport',es:'Aeropuerto de Fortaleza',fr:'Aéroport de Fortaleza'},
    'Porto do Pecém':{en:'Pecém Port',es:'Puerto de Pecém',fr:'Port de Pecém'},
    'Praça central':{en:'Central square',es:'Plaza central',fr:'Place centrale'},
    'Lounge contemplativo':{en:'Contemplative lounge',es:'Lounge contemplativo',fr:'Salon contemplatif'},
    'Yoga & Massagem':{en:'Yoga & Massage',es:'Yoga & Masaje',fr:'Yoga & Massage'},
    'Píer & Fireplace':{en:'Pier & Fireplace',es:'Muelle & Chimenea',fr:'Ponton & Cheminée'},
    'Quadras de areia':{en:'Sand courts',es:'Canchas de arena',fr:'Terrains de sable'},
    'Quadra de tênis':{en:'Tennis court',es:'Cancha de tenis',fr:'Court de tennis'},
    'Campo de futebol':{en:'Football field',es:'Campo de fútbol',fr:'Terrain de football'},
    'Academia climatizada':{en:'Air-conditioned gym',es:'Gimnasio climatizado',fr:'Salle de sport climatisée'},
    'Playground':{en:'Playground',es:'Parque infantil',fr:'Aire de jeux'},
    'Recepção para hóspedes':{en:'Guest reception',es:'Recepción para huéspedes',fr:'Réception des hôtes'},
    'Quadra de areia':{en:'Sand court',es:'Cancha de arena',fr:'Terrain de sable'},
    'Píer sobre a lagoa':{en:'Pier on the lagoon',es:'Muelle sobre la laguna',fr:'Ponton sur la lagune'},
    'Vegetação nativa preservada':{en:'Preserved native vegetation',es:'Vegetación nativa preservada',fr:'Végétation native préservée'},
    'BEM-ESTAR':{en:'WELLNESS',es:'BIENESTAR',fr:'BIEN-ÊTRE'},
    'TAÍBA · CEARÁ · BRASIL':{en:'TAÍBA · CEARÁ · BRAZIL',es:'TAÍBA · CEARÁ · BRASIL',fr:'TAÍBA · CEARÁ · BRÉSIL'},
    'A Casa':{en:'The House',es:'La Casa',fr:'La Maison'},
    'A CASA':{en:'THE HOUSE',es:'LA CASA',fr:'LA MAISON'},
    'Conhecer a Casa Zamá':{en:'Discover Casa Zamá',es:'Conocer la Casa Zamá',fr:'Découvrir la Casa Zamá'},
    '5 suítes':{en:'5 suites',es:'5 suites',fr:'5 suites'},
    '10 hóspedes':{en:'10 guests',es:'10 huéspedes',fr:'10 hôtes'},
    'Falar com o concierge':{en:'Talk to the concierge',es:'Hablar con el concierge',fr:'Parler au concierge'},
    'A casa da':{en:'The house by',es:'La casa de',fr:'La maison de'},
    'Reservas pelo concierge':{en:'Bookings via the concierge',es:'Reservas con el concierge',fr:'Réservations via le concierge'},
    'O DESTINO':{en:'THE DESTINATION',es:'EL DESTINO',fr:'LA DESTINATION'},
    'A Taíba,':{en:'Taíba,',es:'Taíba,',fr:'Taíba,'},
    'no vento do Ceará.':{en:'in the wind of Ceará.',es:'en el viento de Ceará.',fr:'dans le vent du Ceará.'},
    'Jul a Fev':{en:'Jul to Feb',es:'Jul a Feb',fr:'Juil à Fév'},
    'O Ceará por dentro.':{en:'Ceará from the inside.',es:'Ceará por dentro.',fr:'Le Ceará de l’intérieur.'},
    'Aulas na Taíba com instrutores certificados, agendadas pelo concierge.':{en:'Lessons in Taíba with certified instructors, arranged by the concierge.',es:'Clases en Taíba con instructores certificados, agendadas por el concierge.',fr:'Cours à Taíba avec des instructeurs certifiés, organisés par le concierge.'},
    'Piscina de borda contínua, área gourmet coberta e suítes abertas ao vento do Ceará.':{en:'Infinity-edge pool, covered gourmet area and suites open to the Ceará wind.',es:'Piscina de borde continuo, área gourmet cubierta y suites abiertas al viento de Ceará.',fr:'Piscine à débordement, espace gourmet couvert et suites ouvertes au vent du Ceará.'},
    'Ventos da temporada, novidades da casa e recomendações locais, direto no seu e-mail.':{en:'Season winds, news from the house and local recommendations, straight to your inbox.',es:'Vientos de la temporada, novedades de la casa y recomendaciones locales, directo a su correo.',fr:'Les vents de la saison, les nouvelles de la maison et des recommandations locales, directement dans votre boîte mail.'},
    'Explorar':{en:'Explore',es:'Explorar',fr:'Explorer'},
    'EXPLORAR':{en:'EXPLORE',es:'EXPLORAR',fr:'EXPLORER'},
    'Atendimento':{en:'Support',es:'Atención',fr:'Assistance'},
    'DE FORTALEZA':{en:'FROM FORTALEZA',es:'DE FORTALEZA',fr:'DE FORTALEZA'},
    'MELHOR ÉPOCA':{en:'BEST SEASON',es:'MEJOR ÉPOCA',fr:'MEILLEURE SAISON'},
    '1h15 de carro':{en:'1h15 by car',es:'1h15 en coche',fr:'1h15 en voiture'},
    'Uma nova forma':{en:'A new way',es:'Una nueva forma',fr:'Une nouvelle façon'},
    'de viver o litoral.':{en:'to live the coast.',es:'de vivir el litoral.',fr:'de vivre le littoral.'},
    'DIÁRIO DO LITORAL':{en:'COASTAL JOURNAL',es:'DIARIO DEL LITORAL',fr:'JOURNAL DU LITTORAL'},
    'Entre na lista':{en:'Join the list',es:'Entre en la lista',fr:'Rejoignez la liste'},
    'de quem vive o mar.':{en:'of those who live the sea.',es:'de quienes viven el mar.',fr:'de ceux qui vivent la mer.'},
    'Assinar':{en:'Subscribe',es:'Suscribirse',fr:"S'abonner"},
    'CONCIERGE':{en:'CONCIERGE',es:'CONCIERGE',fr:'CONCIERGE'},
    'FLEXIBILIDADE':{en:'FLEXIBILITY',es:'FLEXIBILIDAD',fr:'FLEXIBILITÉ'},
    'CURADORIA':{en:'CURATION',es:'CURADURÍA',fr:'CURATION'},
    'Aulas de Kitesurf':{en:'Kitesurf lessons',es:'Clases de kitesurf',fr:'Cours de kitesurf'},
    'Buggy e Lagoas':{en:'Buggy & Lagoons',es:'Buggy y Lagunas',fr:'Buggy & Lagunes'},
    'Chef Particular':{en:'Private Chef',es:'Chef Privado',fr:'Chef Privé'},
    'Passeio de Iate':{en:'Yacht Trip',es:'Paseo en Yate',fr:'Sortie en Yacht'},
    'NÁUTICA':{en:'NAUTICAL',es:'NÁUTICA',fr:'NAUTIQUE'},
    'Hospedagem por temporada na Taíba, litoral do Ceará. Arquitetura integrada à natureza, concierge dedicado e a calma de quem conhece cada vento desta costa.':{en:'Vacation rentals in Taíba, on the coast of Ceará. Architecture integrated with nature, a dedicated concierge and the calm of those who know every wind on this coast.',es:'Alojamiento por temporada en Taíba, litoral de Ceará. Arquitectura integrada a la naturaleza, concierge dedicado y la calma de quien conoce cada viento de esta costa.',fr:'Locations saisonnières à Taíba, sur la côte du Ceará. Une architecture intégrée à la nature, un concierge dédié et le calme de ceux qui connaissent chaque vent de cette côte.'},
    'A Casa Zamá fica no Vila do Chapéu, condomínio da Monte Dourado na Taíba. Gestão completa da estadia, concierge dedicado e o mar a poucos minutos.':{en:'Casa Zamá is in Vila do Chapéu, a Monte Dourado community in Taíba. Full stay management, a dedicated concierge and the sea a few minutes away.',es:'La Casa Zamá está en Vila do Chapéu, condominio de Monte Dourado en Taíba. Gestión completa de la estadía, concierge dedicado y el mar a pocos minutos.',fr:'La Casa Zamá se trouve au Vila do Chapéu, résidence de Monte Dourado à Taíba. Gestion complète du séjour, concierge dédié et la mer à quelques minutes.'},
    'Praia de pescadores, dunas vivas e uma lagoa de águas doces. O kite clássico do Ceará, a 80 km de Fortaleza.':{en:'A fishing beach, living dunes and a freshwater lagoon. The classic kite spot of Ceará, 80 km from Fortaleza.',es:'Playa de pescadores, dunas vivas y una laguna de agua dulce. El kite clásico de Ceará, a 80 km de Fortaleza.',fr:'Une plage de pêcheurs, des dunes vivantes et une lagune d’eau douce. Le spot de kite classique du Ceará, à 80 km de Fortaleza.'},
    'A Home & Villas é a divisão de hospedagem por temporada da Monte Dourado, incorporadora do litoral cearense dedicada a criar refúgios para amantes de esportes e natureza.':{en:'Home & Villas is the vacation rental division of Monte Dourado, a developer on the coast of Ceará dedicated to creating refuges for lovers of sports and nature.',es:'Home & Villas es la división de alojamiento por temporada de Monte Dourado, desarrolladora del litoral de Ceará dedicada a crear refugios para amantes del deporte y la naturaleza.',fr:'Home & Villas est la division de locations saisonnières de Monte Dourado, promoteur du littoral du Ceará dédié à créer des refuges pour les amoureux du sport et de la nature.'},
    'A operação começa pela Casa Zamá, no Vila do Chapéu, na Taíba. Curadoria de arquitetura, localização e operação, para dias de aventura e de calma.':{en:'The operation begins with Casa Zamá, in Vila do Chapéu, Taíba. Curation of architecture, location and operation, for days of adventure and calm.',es:'La operación comienza por la Casa Zamá, en Vila do Chapéu, Taíba. Curaduría de arquitectura, ubicación y operación, para días de aventura y de calma.',fr:'L’activité commence avec la Casa Zamá, au Vila do Chapéu, à Taíba. Une curation d’architecture, d’emplacement et d’exploitation, pour des jours d’aventure et de calme.'},
    'Portfólio selecionado com critérios de arquitetura e localização.':{en:'A portfolio selected on architecture and location criteria.',es:'Portafolio seleccionado con criterios de arquitectura y ubicación.',fr:'Un portefeuille sélectionné selon des critères d’architecture et d’emplacement.'},
    'Atendimento dedicado do check-in ao pôr do sol.':{en:'Dedicated service from check-in to sunset.',es:'Atención dedicada del check-in a la puesta de sol.',fr:'Un service dédié du check-in au coucher du soleil.'},
    'Estadias de fim de semana a temporadas estendidas.':{en:'Stays from weekends to extended seasons.',es:'Estadías de fin de semana a temporadas extendidas.',fr:'Des séjours du week-end aux longues saisons.'},
    'Passeios, esportes e gastronomia reservados em um só lugar, com curadoria local do concierge.':{en:'Tours, sports and gastronomy booked in one place, with local curation by the concierge.',es:'Paseos, deportes y gastronomía reservados en un solo lugar, con curaduría local del concierge.',fr:'Excursions, sports et gastronomie réservés en un seul endroit, avec la curation locale du concierge.'},
    'Roteiro pelas dunas até lagoas de água doce, guia local incluído.':{en:'A route through the dunes to freshwater lagoons, local guide included.',es:'Recorrido por las dunas hasta lagunas de agua dulce, guía local incluido.',fr:'Un itinéraire à travers les dunes jusqu’aux lagunes d’eau douce, guide local inclus.'},
    'Jantares na villa com chefs cearenses e ingredientes do mar.':{en:'Dinners at the villa with Ceará chefs and ingredients from the sea.',es:'Cenas en la villa con chefs de Ceará e ingredientes del mar.',fr:'Dîners à la villa avec des chefs du Ceará et des produits de la mer.'},
    'Saídas pelo litoral, paradas em praias reservadas e pôr do sol no mar.':{en:'Trips along the coast, stops at secluded beaches and sunset at sea.',es:'Salidas por el litoral, paradas en playas reservadas y puesta de sol en el mar.',fr:'Sorties le long de la côte, escales sur des plages préservées et coucher de soleil en mer.'},
    'Hospedagem por temporada no litoral cearense, por Monte Dourado. Arquitetura, natureza e curadoria em cada villa.':{en:'Vacation rentals on the coast of Ceará, by Monte Dourado. Architecture, nature and curation in every villa.',es:'Alojamiento por temporada en el litoral de Ceará, por Monte Dourado. Arquitectura, naturaleza y curaduría en cada villa.',fr:'Locations saisonnières sur la côte du Ceará, par Monte Dourado. Architecture, nature et curation dans chaque villa.'},
    'seu@email.com':{en:'your@email.com',es:'su@email.com',fr:'votre@email.com'},
    'EXPERIÊNCIAS':{en:'EXPERIENCES',es:'EXPERIENCIAS',fr:'EXPÉRIENCES'},
    'Fundador':{en:'Founder',es:'Fundador',fr:'Fondateur'},
    'ONDE A CASA ESTÁ':{en:'WHERE THE HOUSE IS',es:'DONDE ESTÁ LA CASA',fr:'OÙ SE TROUVE LA MAISON'},
    'O condomínio.':{en:'The community.',es:'El condominio.',fr:'La résidence.'},
    'Conhecer o Vila do Chapéu':{en:'Discover Vila do Chapéu',es:'Conocer Vila do Chapéu',fr:'Découvrir le Vila do Chapéu'},
    'Lazer, segurança e natureza ao redor da Casa Zamá':{en:'Leisure, security and nature around Casa Zamá',es:'Ocio, seguridad y naturaleza alrededor de la Casa Zamá',fr:'Loisirs, sécurité et nature autour de la Casa Zamá'},
    'HOSPEDAGEM NA TAÍBA':{en:'STAYS IN TAÍBA',es:'ALOJAMIENTO EN TAÍBA',fr:'SÉJOURS À TAÍBA'},
    'A nossa':{en:'Our',es:'Nuestra',fr:'Notre'},
    'casa.':{en:'house.',es:'casa.',fr:'maison.'},
    'O CONDOMÍNIO':{en:'THE COMMUNITY',es:'EL CONDOMINIO',fr:'LA RÉSIDENCE'},
    'HOSPEDAGEM':{en:'STAYS',es:'ALOJAMIENTO',fr:'SÉJOURS'},
    'Reservas':{en:'Bookings',es:'Reservas',fr:'Réservations'},
    'CASA DA HOME & VILLAS · TAÍBA':{en:'A HOME & VILLAS HOUSE · TAÍBA',es:'CASA DE HOME & VILLAS · TAÍBA',fr:'MAISON HOME & VILLAS · TAÍBA'},
    'Transfer sob consulta':{en:'Transfer on request',es:'Transfer bajo consulta',fr:'Transfert sur demande'},
    'Concierge dedicado':{en:'Dedicated concierge',es:'Concierge dedicado',fr:'Concierge dédié'},
    'Datas, valores e disponibilidade direto com o concierge.':{en:'Dates, rates and availability directly with the concierge.',es:'Fechas, valores y disponibilidad directamente con el concierge.',fr:'Dates, tarifs et disponibilité directement avec le concierge.'},
    'Consultar datas':{en:'Check dates',es:'Consultar fechas',fr:'Vérifier les dates'},
    'Atendimento pelo WhatsApp da Home & Villas':{en:'Service via the Home & Villas WhatsApp',es:'Atención por el WhatsApp de Home & Villas',fr:'Assistance via le WhatsApp de Home & Villas'},
    'Transfer do Aeroporto de Fortaleza':{en:'Transfer from Fortaleza Airport',es:'Transfer del Aeropuerto de Fortaleza',fr:'Transfert depuis l’aéroport de Fortaleza'},
    'disponível sob consulta, em veículo adequado ao terreno.':{en:'available on request, in a vehicle suited to the terrain.',es:'disponible bajo consulta, en vehículo adecuado al terreno.',fr:'disponible sur demande, dans un véhicule adapté au terrain.'},
    'Ver a casa':{en:'See the house',es:'Ver la casa',fr:'Voir la maison'},
    'A CASA NO CONDOMÍNIO':{en:'THE HOUSE IN THE COMMUNITY',es:'LA CASA EN EL CONDOMINIO',fr:'LA MAISON DANS LA RÉSIDENCE'},
    'Conhecer a casa':{en:'Discover the house',es:'Conocer la casa',fr:'Découvrir la maison'},
    'VER A CASA →':{en:'SEE THE HOUSE →',es:'VER LA CASA →',fr:'VOIR LA MAISON →'},
    '5 suítes':{en:'5 suites',es:'5 suites',fr:'5 suites'},
    '10 hóspedes':{en:'10 guests',es:'10 huéspedes',fr:'10 hôtes'},
    'Piscina':{en:'Pool',es:'Piscina',fr:'Piscine'},
    'by Home & Villas':{en:'by Home & Villas',es:'by Home & Villas',fr:'by Home & Villas'},
    'Sua próxima':{en:'Your next',es:'Su próxima',fr:'Votre prochaine'},
    'temporada começa aqui.':{en:'season starts here.',es:'temporada comienza aquí.',fr:'saison commence ici.'},
    'A 5 minutos da praia da Taíba, um condomínio planejado para quem busca uma casa e o modo de vida ao redor dela.':{en:'Five minutes from Taíba beach, a community planned for those looking for a house and the way of life around it.',es:'A 5 minutos de la playa de Taíba, un condominio planeado para quien busca una casa y el modo de vida a su alrededor.',fr:'À 5 minutes de la plage de Taíba, une résidence pensée pour ceux qui cherchent une maison et l’art de vivre qui l’entoure.'},
    'A Casa Zamá, a curadoria Home & Villas e a infraestrutura completa do condomínio. Concierge dedicado e a Taíba do lado de fora.':{en:'Casa Zamá, Home & Villas curation and the full infrastructure of the community. A dedicated concierge and Taíba right outside.',es:'La Casa Zamá, la curaduría Home & Villas y la infraestructura completa del condominio. Concierge dedicado y Taíba justo afuera.',fr:'La Casa Zamá, la curation Home & Villas et toute l’infrastructure de la résidence. Un concierge dédié et Taíba juste dehors.'},
    'A onda do Morro do Chapéu é point clássico de surfistas no litoral cearense.':{en:'The Morro do Chapéu wave is a classic surf spot on the coast of Ceará.',es:'La ola del Morro do Chapéu es un point clásico de surfistas en el litoral de Ceará.',fr:'La vague du Morro do Chapéu est un spot de surf classique du littoral du Ceará.'},
    'A marca por trás de cada villa: a incorporadora que cria refúgios para quem vive o esporte e a natureza no litoral cearense.':{en:'The brand behind every villa: the developer that creates refuges for those who live sports and nature on the coast of Ceará.',es:'La marca detrás de cada villa: la desarrolladora que crea refugios para quienes viven el deporte y la naturaleza en el litoral de Ceará.',fr:'La marque derrière chaque villa : le promoteur qui crée des refuges pour ceux qui vivent le sport et la nature sur le littoral du Ceará.'},
    'Quando você reserva uma home Home & Villas, tem a segurança de uma operação respaldada pela Monte Dourado, com empreendimentos consolidados na Taíba e um time dedicado ao litoral cearense.':{en:'When you book a Home & Villas home, you have the security of an operation backed by Monte Dourado, with established developments in Taíba and a team dedicated to the coast of Ceará.',es:'Cuando reserva una home Home & Villas, tiene la seguridad de una operación respaldada por Monte Dourado, con emprendimientos consolidados en Taíba y un equipo dedicado al litoral de Ceará.',fr:'Lorsque vous réservez une maison Home & Villas, vous avez la sécurité d’une opération soutenue par Monte Dourado, avec des projets établis à Taíba et une équipe dédiée au littoral du Ceará.'}
  };

  function getLang(){return localStorage.getItem('hv_lang')||'pt'}
  function setLang(l){setLangSafe(l)}
  function setLangSafe(l){try{localStorage.setItem('hv_lang',l)}catch(e){}}

  function applyLang(lang){
    var els=document.querySelectorAll('h1,h2,h3,h4,p,a,span,button,div,li,label,td,th,em,strong,i,b');
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
        var key=orig.replace(/\s+/g,' ');
        if(lang==='pt'){
          n.textContent=n.textContent.replace(n.textContent.trim(),orig);
        }else if(T[key]&&T[key][lang]){
          n.textContent=n.textContent.replace(n.textContent.trim(),T[key][lang]);
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
    document.documentElement.lang=lang==='pt'?'pt-BR':lang==='en'?'en-US':lang==='es'?'es-ES':'fr-FR';
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
