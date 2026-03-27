/**
 * DATOS DE LOCACIONES — editable
 * types: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
 * Agrega el tipo correcto para que aparezca en el carrusel adecuado.
 *
 * CLOUDINARY — para usar URLs de Cloudinary en coverImage y gallery:
 *   const CL = (id) => `https://res.cloudinary.com/dv22lqbsr/image/upload/f_auto,q_auto/${id}`;
 *   coverImage: CL('nombre_public_id'),
 *   gallery: [ CL('foto1'), CL('foto2'), ... ]
 */

// Helper para construir URLs de Cloudinary con optimización automática
const CL = (id) =>
  `https://res.cloudinary.com/dv22lqbsr/image/upload/f_auto,q_auto/${id}`;
export const locations = [
  {
    id: 'L1Q1',
    name: 'Área Central de Fundidora',
    types: ['quinceanera'],
    category: 'Quinceañeras',
    coverImage: CL('empty_zlbisz'),
    characteristics: [
      'Exterior',
      'Jardín', 
      'Gratuito',
      'No se permiten globos, polvos, bombas de humo',
    ],
    recommendations:[
      'El punto de encuentro más accesible la pista de Hielo Fundidora (Entrada E6)',
      'Baños cerca.',
      'Llevar zapatos cómodos.',
      'La mayoría lleva short y top facil de quitar y poner cuando llevan cambios de ropa. ',],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3!2d-100.2849!3d25.6785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be0000000001%3A0x1!2sParque+Fundidora%2C+Monterrey!5e0!3m2!1ses!2smx!4v1680000000000',
    mapAddress: 'Av. Fundidora S/N, Obrera, Monterrey, N.L., México',
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  {
    id: 'L2Q2',
    name: 'Barrio Antiguo',
    types: ['quinceanera'],
    category: 'Quinceañeras',
    coverImage: CL('empty_zlbisz'),
characteristics: [
  'Exterior urbano',
  'Calles',
  'Fachadas',
  'Gratuito',
  'Los baños se rentan o prestan en los comercios alrededor',
],
recommendations:[
  'El punto de encuentro más accesible es el 7Eleven en la esquina de Dr. Coss y Morelos.',
  'Se recomiendan sesiones en lunes y martes.', 
  'Baños se prestan o rentan en los comercios alrededor.'],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.1345780771885!2d-100.30888379999999!3d25.6668332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662945575a8d881%3A0x56f2db5bdcc48b1c!2s7-Eleven!5e0!3m2!1ses!2smx!4v1774578938669!5m2!1ses!2smx',
    mapAddress: '7-Eleven',
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  {
    id: 'L3Q3',
    name: 'Casa de Chuy el Rico',
    types: ['quinceanera'],
    category: 'Quinceañeras',
    coverImage: CL('empty_zlbisz'),
characteristics: [
  'Interior climatizado',
  'Elegante / clásico',
  'Jardín',
  'Locación con costo',
  'Se permiten globos',
  'Información en su página web - https://lacasadechuyelrico.com/ ',
],
recommendations:[
  'Instalaciones en interior climatizadas',
  'Pueden ingresar a los vestidores 15 mins antes de empezar su sesión para estar listas puntuales',
  '45 mins en interior y 15 mins en exterior'],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.6695803844555!2d-100.3034598!3d25.682245699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662955f7036df97%3A0x394ed8219db69d7f!2sLa%20Casa%20de%20Chuy%20el%20Rico!5e0!3m2!1ses!2smx!4v1774579489378!5m2!1ses!2smx',
    mapAddress: 'Jose Maria Arteaga 1111, Centro, 64000 Monterrey, N.L., México',
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  {
    id: 'L4Q4',                          // TODO: id único sin espacios
    name: 'Centro de Santiago',                                      // TODO: nombre del lugar
    types: ['quinceanera'],                        // TODO: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
    category: 'Quinceañeras',                                 // TODO: ej. "Quinceañeras · Bodas"
    coverImage: CL('empty_zlbisz'),                         // TODO: pon el public_id de Cloudinary
characteristics: [
  'Exterior',
  'Arquitectura vintage',
  'Centro de Santiago',
  'Costo por traslado',
],
    recommendations: ['El lugar no cuenta con baños pero pueden pedirlos prestados rentados a los establecimientos alrededor de la plaza'],                           // TODO: texto de recomendaciones
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28827.292269224294!2d-100.18389468437499!3d25.424501499999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662cebe8c997583%3A0xc21b144a02937a47!2sParroquia%20de%20Santiago%20Ap%C3%B3stol!5e0!3m2!1ses!2sus!4v1774580032142!5m2!1ses!2sus',                               // TODO: pega aquí el src del iframe de Google Maps
    mapAddress: 'Juárez S/N, Santiago, 67310 Santiago, N.L., México',                                // TODO: dirección completa legible
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  {
    id: 'L5Q5',                          // TODO: id único sin espacios
    name: 'Embarcadero fundidora',                                      // TODO: nombre del lugar
    types: ['quinceanera'],                        // TODO: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
    category: 'Quinceañeras',                                  // TODO: ej. "Quinceañeras · Bodas"
    coverImage: CL('empty_zlbisz'),                            // TODO: pon el public_id de Cloudinary
characteristics: [
  'Exterior',
  'Jardín / Rio falso',
  'Gratuito',
  'Luces nocturnas',
  'No se permiten globos, polvos, bombas de humo',
],
recommendations: ['El punto de encuentro más accesible es Parque Expedicion Amazonia (inicio de Santa Lucia)',
   'Fotos al atardecer/noche', 'Baños cerca.'],                       
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.8802848621917!2d-100.2866612!3d25.6752629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662942a9569a189%3A0xa7e0a4c261e664b3!2sParque%20Expedici%C3%B3n%20Amazonia!5e0!3m2!1ses!2smx!4v1774580294513!5m2!1ses!2smx',                               // TODO: pega aquí el src del iframe de Google Maps
    mapAddress: 'Av Fundidora s/n, Obrera, 64590 Monterrey, N.L.',   
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  {
    id: 'L6Q6',                          // TODO: id único sin espacios
    name: 'Mansión Obispado',                                      // TODO: nombre del lugar
    types: ['quinceanera'],                        // TODO: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
    category: 'Quinceañeras',                                  // TODO: ej. "Quinceañeras · Bodas"
    coverImage: CL('empty_zlbisz'),                             // TODO: pon el public_id de Cloudinary
characteristics: [
  'Interior climatizado',
  'Elegante / clásico',
  'Jardín',
  'Locación con costo',
  'Se permiten globos',
  'Información en su página en facebook - https://www.facebook.com/people/Mansi%C3%B3n-Obispado/100076058342291/',
],
    recommendations: ['Instalaciones en interior climatizadas', 
      'Baño para cambiarse', 
      '30 mins en interior y 30 mins en exterior'],                               // TODO: pega aquí el src del iframe de Google Maps
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.938886866844!2d-100.34965509999999!3d25.6733205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662950554fd837d%3A0xce01f1327675b05e!2sMansi%C3%B3n%20Obispado!5e0!3m2!1ses!2smx!4v1774580609866!5m2!1ses!2smx',
    mapAddress: 'Obispado, 64050 Monterrey, N.L.',
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  {
    id: 'L7Q7',                          // TODO: id único sin espacios
    name: 'Palacio de Gobierno',                                      // TODO: nombre del lugar
    types: ['quinceanera'],                        // TODO: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
    category: 'Quinceañeras',                                  // TODO: ej. "Quinceañeras · Bodas"
    coverImage: CL('empty_zlbisz'),                           // TODO: pon el public_id de Cloudinary
characteristics: [
  'Interior elegante',
  'No climatizado',
  'Se solicita permiso que el cliente solicita',
  'Revisar reglamento del lugar',
  'Información al 8120338485',
],
    recommendations: ['Para solicitar el permiso piden: Oficio con el nombre de los novios o xvañera, fecha, hora de la sesión y teléfono de contacto. Ademas de la copia de la INE del fotógrafo y teléfono.',
      'El punto de encuentro más accesible es por la puerta de entrada de 5 de Mayo',
      'No se permite cambiarse en las instalaciones del palacio.'
    ],                           // TODO: texto de recomendaciones
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28767.731034145017!2d-100.342331684375!3d25.672409200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be2a316551c1%3A0xc0e3ee8c998b975b!2sPalacio%20de%20Gobierno%20del%20Estado%20de%20Nuevo%20Le%C3%B3n!5e0!3m2!1ses!2sus!4v1774581521490!5m2!1ses!2sus',                               // TODO: pega aquí el src del iframe de Google Maps
    mapAddress: '5 de Mayo S/N, Centro, 64000 Monterrey, N.L., México',                                // TODO: dirección completa legible
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  {
    id: 'L8Q8',                          // TODO: id único sin espacios
    name: 'Palacio Real',                                      // TODO: nombre del lugar
    types: ['quinceanera'],                        // TODO: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
    category: 'Quinceañeras',                         // TODO: ej. "Quinceañeras · Bodas"
    coverImage: CL('empty_zlbisz'),                             // TODO: pon el public_id de Cloudinary
characteristics: [
  'Interior elegante',
  'Locación con costo',
  'Revisar reglamento del lugar al reservar locación',
  'Se agenda directo en su página en facebook',
],
recommendations: [
  'Leer bien el reglamento del lugar.',
  'El lugar cuenta con baños amplios para cambiarse.',
  'Confirmar cuantas personas vamos por parte de Vega Producciones.',
  'Agendar con tiempo.',
],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28775.472991739098!2d-100.30100398437499!3d25.6403118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bf8454dbaacd%3A0x9c3b494fada03a48!2sPalacio%20Real!5e0!3m2!1ses!2sus!4v1774581851540!5m2!1ses!2sus',                               // TODO: pega aquí el src del iframe de Google Maps
    mapAddress: 'P.º de las Américas 2538, Contry La Silla 1er Sector, 64850 Monterrey, N.L., México',                                // TODO: dirección completa legible
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  {
    id: 'L9Q9',                          // TODO: id único sin espacios
    name: 'Parque Hundido Contry',                                      // TODO: nombre del lugar
    types: ['quinceanera'],                        // TODO: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
    category: 'Quinceañeras',                         // TODO: ej. "Quinceañeras · Bodas"
    coverImage: CL('empty_zlbisz'), 
characteristics: [
  'Exterior',
  'Boscoso',
  'Cooperación Voluntaria / se solicita permiso',
  'No se permiten globos, polvos, bombas de humo',
  'Solicitar permiso por whatsapp al 81 1035 3435',
],
    recommendations: [
      'El punto de encuentro más accesible es en los resbaladeros de piedra',
      'No hay baños',
      'Llevar zapatos cómodos ya que no hay veredas para caminar.',
      'La mayoría lleva short y top fácil de quitar y poner cuando llevan cambios de ropa.'
    ],                          
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.968375064623!2d-100.26584989999999!3d25.6391751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bf842108d9e1%3A0x4bc9fcbb873bc72f!2sParque%20Hundido%20Contry%20La%20Silla!5e0!3m2!1ses!2smx!4v1774582225363!5m2!1ses!2smx',                               
    mapAddress: 'Av. Alfonso Reyes 2552, Contry La Silla 5o Sector, 67173 Guadalupe, N.L.',                                
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  {
    id: 'L10Q10',                          // TODO: id único sin espacios
    name: 'Parque Rinconada Colonial',                                      // TODO: nombre del lugar
    types: ['quinceanera'],                        // TODO: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
    category: 'Quinceañeras',                         // TODO: ej. "Quinceañeras · Bodas"
    coverImage: CL('empty_zlbisz'), 
characteristics: [
  'Exterior',
  'Boscoso / Puente',
  'Gratuito',
  'No se permiten globos, polvos, bombas de humo',
],
    recommendations: [
      'El punto de encuentro más accesible es en el Puente Blanco',
      'No hay baños',
      'La mayoría lleva short y top fácil de quitar y poner cuando llevan cambios de ropa.'
    ],                           
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.1608556403744!2d-100.1960694!3d25.7982668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662ec6a61ce7f2f%3A0x5cbc58e1709a6317!2sGran%20Parque%20Rinconada%20Colonial%20de%20Apodaca!5e0!3m2!1ses!2smx!4v1774582426180!5m2!1ses!2smx',             
    mapAddress: 'Nuevo León, Cdad. Apodaca, Moderno Apodaca II, Ibiza, Altabrisa Premier',              
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  {
    id: 'L11Q11',                          // TODO: id único sin espacios
    name: 'Puente de Cristal - Fundidora',                                      // TODO: nombre del lugar
    types: ['quinceanera'],                        // TODO: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
    category: 'Quinceañeras',                         // TODO: ej. "Quinceañeras · Bodas"
    coverImage: CL('empty_zlbisz'), 
characteristics: [
  'Exterior',
  'Jardín',
  'Gratuito',
  'No se permiten globos, polvos, bombas de humo',
],
    recommendations: ['El punto de encuentro más accesible es la taquilla de Parque Fiesta Aventuras (anteriormente Plaza Sesamo)',
'No hay baños muy cerca, lo mejor es llegar ya con el vestido puesto para empezar. ',
'Llevar zapatos cómodos.',
'La mayoría lleva short y top facil de quitar y poner cuando llevan cambios de ropa. '
    ],                           // TODO: texto de recomendaciones
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7031491602297!2d-100.27933081304333!3d25.677615599258626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bfe1ebb369b9%3A0x4f717821d5f7dfdf!2sPaseo%20de%20la%20Mujer%20Mexicana!5e0!3m2!1ses!2smx!4v1774582786435!5m2!1ses!2smx',                               // TODO: pega aquí el src del iframe de Google Maps
    mapAddress: 'Centro, 64590 Monterrey, N.L.',                                // TODO: dirección completa legible
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  {
    id: 'L12Q12',                          // TODO: id único sin espacios
    name: 'Quinta El Juncal',                                      // TODO: nombre del lugar
    types: ['quinceanera'],                        // TODO: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
    category: 'Quinceañeras',                         // TODO: ej. "Quinceañeras · Bodas"
    coverImage: CL('empty_zlbisz'), 
characteristics: [
  'Exterior',
  'Jardín / Lago artificial',
  'Locación con costo',
  'Revisar reglamento del lugar al reservar locación',
  'Se agenda directo en su página en facebook',
],
    recommendations: [ 'Leer bien el reglamento del lugar.', 
      'El lugar cuenta con baños amplios para cambiarse.', 
      'Llevar zapatos cómodos.', 
      'Confirmar cuantas personas vamos por parte de Vega Producciones.' , 
      'Agendar con tiempo. '],                              
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.6085388922447!2d-100.16042569999999!3d25.6842683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c207c045678d%3A0x229bfce1666d9289!2sQuinta%20El%20Juncal!5e0!3m2!1ses!2smx!4v1774582929339!5m2!1ses!2smx',                              
    mapAddress: 'Callejon de los Morales, Vereda Tropical 100, Las Escobas, 67190 Guadalupe, N.L.',                                // TODO: dirección completa legible
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  {
    id: 'L13Q13',                          // TODO: id único sin espacios
    name: 'Rancho Don Glafiro',                                      // TODO: nombre del lugar
    types: ['quinceanera'],                        // TODO: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
    category: 'Quinceañeras',                         // TODO: ej. "Quinceañeras · Bodas"
    coverImage: CL('empty_zlbisz'), 
characteristics: [
  'Exterior',
  'Jardín / Lago',
  'Locación con costo',
  'Costo por traslado',
  'Revisar reglamento del lugar al reservar locación',
  'Se agenda directo en su página en facebook',
],
    recommendations: [ 'Leer bien el reglamento del lugar.', 
      'El lugar cuenta con baños amplios para cambiarse.', 
      'Llevar zapatos cómodos.', 
      'Confirmar cuantas personas vamos por parte de Vega Producciones.' , 
      'Agendar con tiempo. '
    ],                           // TODO: texto de recomendaciones
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.0902515282187!2d-100.00793499999999!3d25.233884999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x867d2da3fa15849b%3A0xbc05930d198a10d8!2sRancho%20Don%20Glafiro!5e0!3m2!1ses!2smx!4v1774583065622!5m2!1ses!2smx',
    mapAddress: 'Unnamed Road, N.L.',                                // TODO: dirección completa legible
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  {
    id: 'L14Q14',                          // TODO: id único sin espacios
    name: 'Rancho San Simon',                                      // TODO: nombre del lugar
    types: ['quinceanera'],                        // TODO: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
    category: 'Quinceañeras',                         // TODO: ej. "Quinceañeras · Bodas"
    coverImage: CL('empty_zlbisz'), 
characteristics: [
  'Exterior',
  'Caballos',
  'Locación con costo',
  'Revisar reglamento del lugar al reservar locación',
  'Se agenda directo en su página en facebook',
],
    recommendations: [ 'Leer bien el reglamento del lugar.', 
      'El lugar cuenta con baños amplios para cambiarse.', 
      'Llevar zapatos cómodos / aptos para la tierra ', 
      'Confirmar cuantas personas vamos por parte de Vega Producciones.' , 
      'Agendar con tiempo. '
    ],                           // TODO: texto de recomendaciones
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.966667671348!2d-100.108848!3d25.572775699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c54957343c5f%3A0x147a8b6f52f25ae1!2sRancho%20San%20Simon!5e0!3m2!1ses!2smx!4v1774583208723!5m2!1ses!2smx',                               // TODO: pega aquí el src del iframe de Google Maps
    mapAddress: 'Rancho, Cam. a San Simón, 66443 Cdad. Benito Juárez, N.L.',                                // TODO: dirección completa legible
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  // ─── BODAS ────────────────────────────────────────
  {
    id: 'hacienda-real',
    name: 'Hacienda Real',
    types: ['boda'],
    category: 'Bodas',
    coverImage: CL('L1B1_g4t9kq'),
    characteristics: [
      'Escalinata principal con decoración floral espectacular',
      'Salón con altura de 6 metros y candelabros de cristal',
      'Jardín exterior con fuente central',
      'Sala de maquillaje y preparación incluida',
      'Estacionamiento privado con valet parking',
      'Capacidad hasta 400 invitados',
    ],
    recommendations:
      'La Hacienda Real ofrece una ambientación lujosa ideal para bodas de gran formato. ' +
      'La escalinata principal es el punto más solicitado para fotos — recomendamos reservar ese espacio ' +
      'durante la primera hora de la sesión antes de que lleguen los invitados. ' +
      'La iluminación del salón es perfecta para fotografía de interior sin necesidad de equipo extra. ' +
      'Coordinarse con el staff del lugar para acceso anticipado de al menos 2 horas.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3!2d-100.3149!3d25.6585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be0000000002%3A0x2!2sMonterrey%2C+N.L.!5e0!3m2!1ses!2smx!4v1680000000001',
    mapAddress: 'Monterrey, Nuevo León, México',
    gallery: [
      CL('L1B1_g4t9kq'),   // TODO: reemplaza con fotos de esta locación
      CL('L1B2_iwwrtm'),
      CL('L1B3_qldrmm'),
      CL('L1Q1_ln2zsu'),
    ],
  },
  {
    id: 'salon-clasico',
    name: 'Salón Clásico con Piano',
    types: ['boda'],
    category: 'Bodas · Editorial',
    coverImage: CL('L1B2_iwwrtm'),
    characteristics: [
      'Piano de cola como elemento central de composición',
      'Piso de mármol blanco y negro en damero',
      'Ventanales con cortinas drapeadas doradas',
      'Candelabros y lámparas de época',
      'Ambiente íntimo, ideal para parejas',
      'Iluminación controlada para efectos dramáticos',
    ],
    recommendations:
      'Este espacio es perfecto para sesiones de boda íntimas y editoriales elegantes. ' +
      'El piano de cola permite composiciones muy variadas — desde fotos dramáticas de perfil ' +
      'hasta momentos espontáneos de pareja. La luz de los ventanales laterales crea un efecto ' +
      'natural suave que complementa los vestidos blancos perfectamente. ' +
      'Sesiones de máximo 3 horas para mantener la energía del ambiente.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3!2d-100.2949!3d25.6685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be0000000003%3A0x3!2sMonterrey%2C+N.L.!5e0!3m2!1ses!2smx!4v1680000000002',
    mapAddress: 'Monterrey, Nuevo León, México',
    gallery: [
      CL('L1B3_qldrmm'),   // TODO: reemplaza con fotos de esta locación
      CL('L1B1_g4t9kq'),
      CL('L1B2_iwwrtm'),
      CL('L2Q1_nlbgve'),
    ],
  },
  {
    id: 'boda-escalinata',
    name: 'Escalinata Jardín & Flores',
    types: ['boda'],
    category: 'Bodas',
    coverImage: CL('L1B3_qldrmm'),
    characteristics: [
      'Escalinata decorada con flores naturales de temporada',
      'Luz natural cenital que ilumina el vestido',
      'Ventanales laterales tipo catedral',
      'Jardín adyacente para tomas al exterior',
      'Ambiente romántico y atemporal',
      'Acceso privado solo para la pareja y equipo',
    ],
    recommendations:
      'Una de las locaciones favoritas para sesiones de boda por su luz natural inigualable. ' +
      'Las flores naturales de la escalinata cambian según la temporada — consultar disponibilidad. ' +
      'La hora ideal es entre 10:00–12:00 am cuando el sol entra oblicuo por los ventanales ' +
      'creando una atmósfera absolutamente romántica. Recomendamos traer al menos 2 cambios de vestido ' +
      'para aprovechar los diferentes ambientes que ofrece el espacio.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3!2d-100.3049!3d25.6785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be0000000005%3A0x5!2sMonterrey%2C+N.L.!5e0!3m2!1ses!2smx!4v1680000000004',
    mapAddress: 'Monterrey, Nuevo León, México',
    gallery: [
      CL('L1B2_iwwrtm'),   // TODO: reemplaza con fotos de esta locación
      CL('L1B1_g4t9kq'),
      CL('L1B3_qldrmm'),
      CL('L1Q2_szhrlw'),
    ],
  },
   // ─── PLANTILLA VACÍA — llena los campos marcados con TODO ───────────
  {
    id: 'nueva-locacion',                          // TODO: id único sin espacios
    name: '',                                      // TODO: nombre del lugar
    types: ['quinceanera'],                        // TODO: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
    category: '',                                  // TODO: ej. "Quinceañeras · Bodas"
    coverImage: CL('empty_zlbisz'),                            // TODO: pon el public_id de Cloudinary
    characteristics: [
      '',                                          // TODO: característica 1
      '',                                          // TODO: característica 2
      '',                                          // TODO: característica 3
      '',                                          // TODO: característica 4
      '',                                          // TODO: característica 5
      '',                                          // TODO: característica 6
    ],
    recommendations: '',                           // TODO: texto de recomendaciones
    mapEmbedUrl: '',                               // TODO: pega aquí el src del iframe de Google Maps
    mapAddress: '',                                // TODO: dirección completa legible
    gallery: [
      CL('empty_zlbisz'),   // TODO: reemplaza con fotos de esta locación
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
      CL('empty_zlbisz'),
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
];
