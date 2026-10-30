export interface PhotoItem {
  id: number;
  title: string;
  alt: string;
  category: 'hero' | 'featured' | 'admiration' | 'climax' | 'closing' | 'gallery';
  original: string;
  mobile: string;
  desktop: string;
  thumb: string;
  mobileWidth: number;
  mobileHeight: number;
  desktopWidth: number;
  desktopHeight: number;
  aspectRatio: number;
  objectPosition?: string;
  storyCaption?: string;
}

export const PHOTOS: PhotoItem[] = [
  {
    id: 1,
    title: "Tu alegría radiante",
    alt: "Sofía girando feliz al atardecer en un campo dorado con falda bohemia y sonrisa luminosa",
    category: "featured",
    original: "/images/optimized/photo-1-desktop.webp",
    mobile: "/images/optimized/photo-1-mobile.webp",
    desktop: "/images/optimized/photo-1-desktop.webp",
    thumb: "/images/optimized/photo-1-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 25%",
    storyCaption: "Esa luz libre, espontánea y cálida que transmites al sonreír."
  },
  {
    id: 2,
    title: "Elegancia y brillo",
    alt: "Sofía en un salón contemporáneo con vestido metálico plateado y mirada cautivadora",
    category: "featured",
    original: "/images/optimized/photo-2-desktop.webp",
    mobile: "/images/optimized/photo-2-mobile.webp",
    desktop: "/images/optimized/photo-2-desktop.webp",
    thumb: "/images/optimized/photo-2-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 20%",
    storyCaption: "Tu porte sofisticado y la seguridad con la que iluminas cada espacio."
  },
  {
    id: 3,
    title: "Estilo que cautiva",
    alt: "Sofía frente a un café vintage con top negro, falda midi denim y gafas de sol",
    category: "hero",
    original: "/images/optimized/photo-3-desktop.webp",
    mobile: "/images/optimized/photo-3-mobile.webp",
    desktop: "/images/optimized/photo-3-desktop.webp",
    thumb: "/images/optimized/photo-3-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 18%",
    storyCaption: "Esa combinación perfecta de sencillez, buen gusto y gracia natural."
  },
  {
    id: 4,
    title: "Paz y calidez",
    alt: "Sofía descansando en un sillón beige junto al ventanal con conjunto tejido acogedor",
    category: "admiration",
    original: "/images/optimized/photo-4-desktop.webp",
    mobile: "/images/optimized/photo-4-mobile.webp",
    desktop: "/images/optimized/photo-4-desktop.webp",
    thumb: "/images/optimized/photo-4-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 25%",
    storyCaption: "La serenidad que regalas cuando te muestras tranquila y en calma."
  },
  {
    id: 5,
    title: "Determinación y visión",
    alt: "Sofía con traje sastre blanco en una oficina de rascacielos con vista a la ciudad",
    category: "admiration",
    original: "/images/optimized/photo-5-desktop.webp",
    mobile: "/images/optimized/photo-5-mobile.webp",
    desktop: "/images/optimized/photo-5-desktop.webp",
    thumb: "/images/optimized/photo-5-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 20%",
    storyCaption: "Tu tenacidad para construir tu camino y alcanzar cada meta que te propones."
  },
  {
    id: 6,
    title: "Noche esmeralda",
    alt: "Sofía en una terraza al anochecer con vestido verde esmeralda satinado y luces urbanas",
    category: "featured",
    original: "/images/optimized/photo-6-desktop.webp",
    mobile: "/images/optimized/photo-6-mobile.webp",
    desktop: "/images/optimized/photo-6-desktop.webp",
    thumb: "/images/optimized/photo-6-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 20%",
    storyCaption: "Tu presencia deslumbrante que llena de vida cualquier noche."
  },
  {
    id: 7,
    title: "Audacia y personalidad",
    alt: "Sofía con blazer azul cobalto de corte asimétrico en sesión de estudio",
    category: "featured",
    original: "/images/optimized/photo-7-desktop.webp",
    mobile: "/images/optimized/photo-7-mobile.webp",
    desktop: "/images/optimized/photo-7-desktop.webp",
    thumb: "/images/optimized/photo-7-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 20%",
    storyCaption: "Una personalidad única, decidida y llena de fuerza interior."
  },
  {
    id: 8,
    title: "Espíritu libre",
    alt: "Sofía caminando por calles empedradas con blazer gris y zapatillas, llena de energía",
    category: "gallery",
    original: "/images/optimized/photo-8-desktop.webp",
    mobile: "/images/optimized/photo-8-mobile.webp",
    desktop: "/images/optimized/photo-8-desktop.webp",
    thumb: "/images/optimized/photo-8-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 20%",
    storyCaption: "Tus ganas de explorar el mundo, vivir nuevas aventuras y disfrutar la vida."
  },
  {
    id: 9,
    title: "Brisa y calma marina",
    alt: "Sofía caminando descalza por la orilla del mar con vestido blanco y sombrero de sol",
    category: "closing",
    original: "/images/optimized/photo-9-desktop.webp",
    mobile: "/images/optimized/photo-9-mobile.webp",
    desktop: "/images/optimized/photo-9-desktop.webp",
    thumb: "/images/optimized/photo-9-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 20%",
    storyCaption: "La pureza de tu corazón y esa ternura tan tuya que transmite paz."
  },
  {
    id: 10,
    title: "Inteligencia y encanto",
    alt: "Sofía en un claustro universitario con suéter verde bosque y libro en mano",
    category: "admiration",
    original: "/images/optimized/photo-10-desktop.webp",
    mobile: "/images/optimized/photo-10-mobile.webp",
    desktop: "/images/optimized/photo-10-desktop.webp",
    thumb: "/images/optimized/photo-10-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 20%",
    storyCaption: "Tu curiosidad intelectual, tu disciplina y esas ganas de superarte."
  },
  {
    id: 11,
    title: "Fuerza y carácter",
    alt: "Sofía con estilo urbano en tonos oscuros y botas tácticas reflejando actitud audaz",
    category: "admiration",
    original: "/images/optimized/photo-11-desktop.webp",
    mobile: "/images/optimized/photo-11-mobile.webp",
    desktop: "/images/optimized/photo-11-desktop.webp",
    thumb: "/images/optimized/photo-11-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 20%",
    storyCaption: "Esa valentía que llevas dentro para no rendirte jamás ante los retos."
  },
  {
    id: 12,
    title: "Autenticidad y raíces",
    alt: "Sofía apoyada en una cerca de madera bajo el cielo azul con chaqueta de mezclilla y botas vaqueras",
    category: "gallery",
    original: "/images/optimized/photo-12-desktop.webp",
    mobile: "/images/optimized/photo-12-mobile.webp",
    desktop: "/images/optimized/photo-12-desktop.webp",
    thumb: "/images/optimized/photo-12-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 20%",
    storyCaption: "Lo genuina y sencilla que eres, sin artificios, siempre tú misma."
  },
  {
    id: 13,
    title: "Armonía clásica",
    alt: "Sofía en un jardín verde con suéter beige sobre los hombros y pantalón blanco",
    category: "gallery",
    original: "/images/optimized/photo-13-desktop.webp",
    mobile: "/images/optimized/photo-13-mobile.webp",
    desktop: "/images/optimized/photo-13-desktop.webp",
    thumb: "/images/optimized/photo-13-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 20%",
    storyCaption: "La belleza sutil de los momentos apacibles y tu risa compartida."
  },
  {
    id: 14,
    title: "Alma vibrante",
    alt: "Sofía en una escalera de incendios al atardecer con cazadora de cuero y espíritu apasionado",
    category: "gallery",
    original: "/images/optimized/photo-14-desktop.webp",
    mobile: "/images/optimized/photo-14-mobile.webp",
    desktop: "/images/optimized/photo-14-desktop.webp",
    thumb: "/images/optimized/photo-14-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 20%",
    storyCaption: "Esa chispa apasionada y audaz que hace tan fascinante tu esencia."
  },
  {
    id: 15,
    title: "Luz dorada de otoño",
    alt: "Sofía bajo la luz cálida del atardecer con jersey mostaza y pantalón terracota",
    category: "gallery",
    original: "/images/optimized/photo-15-desktop.webp",
    mobile: "/images/optimized/photo-15-mobile.webp",
    desktop: "/images/optimized/photo-15-desktop.webp",
    thumb: "/images/optimized/photo-15-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 25%",
    storyCaption: "Un destello cálido que abraza el alma con su ternura."
  },
  {
    id: 16,
    title: "Paz en la mirada",
    alt: "Sofía en el alféizar de una ventana lluviosa con taza de café caliente y suéter de punto",
    category: "climax",
    original: "/images/optimized/photo-16-desktop.webp",
    mobile: "/images/optimized/photo-16-mobile.webp",
    desktop: "/images/optimized/photo-16-desktop.webp",
    thumb: "/images/optimized/photo-16-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 25%",
    storyCaption: "Tu serenidad, tu ternura íntima y esa dulzura que conmueve el corazón."
  },
  {
    id: 17,
    title: "Energía y vitalidad",
    alt: "Sofía en sesión de entrenamiento con conjunto deportivo salvia, llena de vitalidad",
    category: "gallery",
    original: "/images/optimized/photo-17-desktop.webp",
    mobile: "/images/optimized/photo-17-mobile.webp",
    desktop: "/images/optimized/photo-17-desktop.webp",
    thumb: "/images/optimized/photo-17-thumb.webp",
    mobileWidth: 714,
    mobileHeight: 1280,
    desktopWidth: 1206,
    desktopHeight: 2160,
    aspectRatio: 0.558,
    objectPosition: "center 25%",
    storyCaption: "Tu disciplina constante, tu fuerza física y mental, y el amor por superarte."
  }
];

export const HERO_PHOTO = PHOTOS[2]; // Photo 3: attached by user (vintage cafe style, black top & denim skirt)
export const CLIMAX_PHOTO = PHOTOS[15]; // Photo 16: peaceful rainy window portrait
export const CLOSING_PHOTO = PHOTOS[8]; // Photo 9: radiant seaside walk in white dress

export const ADMIRATION_ITEMS = [
  {
    title: "Su corazón",
    subtitle: "La belleza interior que admiro en ti",
    description: "Me parece preciosa tu forma de ser, tu nobleza y esa belleza que no depende de lo visible, sino de la ternura y la bondad profunda que guardas dentro.",
    photo: PHOTOS[3], // Photo 4 (curled up cozy by window, warm peaceful smile)
    accent: "#E8BFC8"
  },
  {
    title: "Su esfuerzo",
    subtitle: "La dedicación que pones en cada meta",
    description: "Admiro la forma en que trabajas con compromiso, la perseverancia que pones en tus responsabilidades y cómo construyes tu propio camino con paciencia y entereza.",
    photo: PHOTOS[4], // Photo 5 (tailored executive suit, city skyline view)
    accent: "#C7A56B"
  },
  {
    title: "Sus ganas de crecer",
    subtitle: "Tu deseo constante de aprender y superarte",
    description: "Es admirable ver tus ganas de seguir avanzando, aprender cosas nuevas y luchar cada día por convertirte en una versión aún más sabia y plena de ti misma.",
    photo: PHOTOS[9], // Photo 10 (college campus, books in hand, studious and bright)
    accent: "#7C2439"
  },
  {
    title: "Su fortaleza",
    subtitle: "El valor de continuar con paciencia",
    description: "Dar lo mejor de una misma requiere valentía y serenidad. Admiro tu temple ante las exigencias de la vida y cómo te mantienes firme sin perder tu dulzura.",
    photo: PHOTOS[10], // Photo 11 (bold urban style, confident strength)
    accent: "#3D101F"
  },
  {
    title: "Su esencia",
    subtitle: "Todo lo que te hace auténtica y especial",
    description: "Tu espontaneidad, tu chispa, tu alegría sincera y esa presencia que alegra a quien tiene la fortuna de estar a tu lado. Amo quién eres en cada detalle.",
    photo: PHOTOS[0], // Photo 1 (golden hour spin, pure joy and authenticity)
    accent: "#E8BFC8"
  }
];

export const FEATURED_QUOTES = [
  "«Qué bonito es admirar a alguien no solo por lo que hace, sino por quien es.»",
  "«Tu esfuerzo merece ser visto, valorado y reconocido.»",
  "«No necesitas ser perfecta para ser extraordinaria.»",
  "«Ojalá nunca olvides la belleza que existe en tu interior.»",
  "«Te admiro por todo lo que eres y por las ganas que tienes de seguir creciendo.»",
  "«Si pudiera regalarte algo, sería la posibilidad de verte por un instante con los ojos con los que yo te veo.»"
];
