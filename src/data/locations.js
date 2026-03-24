/**
 * DATOS DE LOCACIONES — editable
 * types: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
 * Agrega el tipo correcto para que aparezca en el carrusel adecuado.
 */
export const locations = [
  {
    id: 'fundidora',
    name: 'Área Central de Fundidora',
    types: ['quinceanera'],
    category: 'Quinceañeras · Editorial',
    coverImage: '/photo-yami.jpg',
    characteristics: [
      'Amplio espacio al aire libre con jardines y áreas verdes',
      'Zona de lago con reflejos naturales ideales para fotos',
      'Arquitectura industrial reconvertida como fondo único',
      'Luz natural espectacular en horas doradas',
      'Estacionamiento disponible en el área',
      'Acceso libre y apto para grupos grandes',
    ],
    recommendations:
      'El Parque Fundidora es uno de los escenarios más versátiles e icónicos de Monterrey. ' +
      'Recomendamos llegar entre 6:30–8:00 am para aprovechar la luz dorada matutina sin aglomeraciones, ' +
      'o bien entre 5:00–7:00 pm para la hora mágica del atardecer con las montañas de fondo. ' +
      'Los fines de semana pueden tener más afluencia; coordinar permisos con anticipación es ideal ' +
      'para sesiones de más de 5 personas. Traer zapatos cómodos es importante ya que la sesión ' +
      'puede recorrer varios puntos del parque.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3!2d-100.2849!3d25.6785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be0000000001%3A0x1!2sParque+Fundidora%2C+Monterrey!5e0!3m2!1ses!2smx!4v1680000000000',
    mapAddress: 'Av. Fundidora S/N, Obrera, Monterrey, N.L., México',
    gallery: ['/photo-yami.jpg', '/photo-jase.jpg', '/photo-ale.jpg', '/photo-ec.jpg'],
  },
  {
    id: 'locacion-exterior',
    name: 'Locación Exterior con Caballos',
    types: ['quinceanera'],
    category: 'Quinceañeras · Editorial',
    coverImage: '/photo-ale.jpg',
    characteristics: [
      'Campo abierto con vegetación natural',
      'Caballos disponibles como elemento escénico',
      'Montañas al fondo como telón natural',
      'Luz natural sin restricciones',
      'Espacio exclusivo sin público general',
      'Acceso en camioneta o vehículo 4x4',
    ],
    recommendations:
      'Una de las locaciones más exclusivas y únicas de nuestro catálogo. ' +
      'La combinación de vestidos de época o elaborados con el entorno natural y los caballos ' +
      'produce imágenes cinematográficas de alto impacto. ' +
      'Recomendamos sesiones de mañana entre 7:00–10:00 am para luz suave y temperaturas frescas. ' +
      'Es necesario usar calzado apropiado para terreno irregular. ' +
      'Coordinar con 1 semana de anticipación para disponibilidad del equino.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3!2d-100.3249!3d25.6485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be0000000004%3A0x4!2sNuevo+Le%C3%B3n%2C+M%C3%A9xico!5e0!3m2!1ses!2smx!4v1680000000003',
    mapAddress: 'Área Metropolitana de Monterrey, N.L., México',
    gallery: ['/photo-ale.jpg', '/photo-yami.jpg', '/photo-jase.jpg', '/photo-ec.jpg'],
  },
  {
    id: 'salon-quinceanera',
    name: 'Salón Clásico Quinceañera',
    types: ['quinceanera'],
    category: 'Quinceañeras',
    coverImage: '/photo-jase.jpg',
    characteristics: [
      'Candelabro central de cristal de 3 metros',
      'Decoración clásica con muebles de época',
      'Espacio para vals y coreografías',
      'Iluminación cálida y controlable',
      'Sala de preparación y maquillaje',
      'Jardín posterior para tomas exteriores',
    ],
    recommendations:
      'Ideal para quinceañeras que buscan una ambientación de cuento de hadas. ' +
      'El candelabro central es el elemento estrella — recomendamos posicionar a la quinceañera ' +
      'directamente debajo para aprovechar su luz. La decoración clásica combina perfectamente ' +
      'con vestidos de princesa y colores pastel. Disponible para sesiones previas al evento ' +
      'con 2 horas de anticipación antes de la llegada de invitados.',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3!2d-100.2949!3d25.6685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be0000000003%3A0x3!2sMonterrey%2C+N.L.!5e0!3m2!1ses!2smx!4v1680000000002',
    mapAddress: 'Monterrey, Nuevo León, México',
    gallery: ['/photo-jase.jpg', '/photo-yami.jpg', '/photo-ale.jpg', '/photo-ec.jpg'],
  },
  // ─── BODAS ────────────────────────────────────────
  {
    id: 'hacienda-real',
    name: 'Hacienda Real',
    types: ['boda'],
    category: 'Bodas',
    coverImage: '/photo-aa.jpg',
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
    gallery: ['/photo-aa.jpg', '/photo-ec.jpg', '/photo-ek.jpg', '/photo-aa.jpg'],
  },
  {
    id: 'salon-clasico',
    name: 'Salón Clásico con Piano',
    types: ['boda'],
    category: 'Bodas · Editorial',
    coverImage: '/photo-ek.jpg',
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
    gallery: ['/photo-ek.jpg', '/photo-aa.jpg', '/photo-ec.jpg', '/photo-ale.jpg'],
  },
  {
    id: 'boda-escalinata',
    name: 'Escalinata Jardín & Flores',
    types: ['boda'],
    category: 'Bodas',
    coverImage: '/photo-ec.jpg',
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
    gallery: ['/photo-ec.jpg', '/photo-aa.jpg', '/photo-ek.jpg', '/photo-ale.jpg'],
  },
   // ─── PLANTILLA VACÍA — llena los campos marcados con TODO ───────────
  {
    id: 'nueva-locacion',                          // TODO: id único sin espacios
    name: '',                                      // TODO: nombre del lugar
    types: ['quinceanera'],                        // TODO: ['quinceanera'] | ['boda'] | ['quinceanera','boda']
    category: '',                                  // TODO: ej. "Quinceañeras · Bodas"
    coverImage: '/photo-aa.jpg',                   // TODO: ruta de la foto de portada
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
      '/photo-aa.jpg',                             // TODO: foto 1
      '/photo-aa.jpg',                             // TODO: foto 2
      '/photo-aa.jpg',                             // TODO: foto 3
      '/photo-aa.jpg',                             // TODO: foto 4
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
];
