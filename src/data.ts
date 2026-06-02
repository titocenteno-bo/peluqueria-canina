/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimelineStep, SpaService, BeforeAfterItem, TestimonialItem, FaqItem } from './types';

// Importing generated premium assets
import spaHeroImg from './assets/images/spa_hero_dog_1780358278056.png';
import beforeAfterImg from './assets/images/before_after_dog_1780358291652.png';
import spaBathImg from './assets/images/spa_bath_dog_1780358303509.png';

export const ASSETS = {
  hero: spaHeroImg,
  beforeAfter: beforeAfterImg,
  spaBath: spaBathImg,
};

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'Recepción y Evaluación Amorosa',
    description: 'Recibimos a tu mascota sin apuro. Evaluamos su tipo de manto, piel, articulaciones y estado emocional para adaptar la sesión.',
    details: 'Cada mascota tiene un carácter único. Nos tomamos de 5 a 10 minutos para que huela el ambiente, juegue un poco y gane confianza absoluta con su terapeuta antes de empezar.',
    duration: '10 min',
    iconName: 'ShieldCheck'
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: 'Baño Oxigenante y Relax',
    description: 'Agua tibia microfiltrada, un suave masaje descontracturante y shampoos naturales premium libres de parabenos.',
    details: 'Utilizamos agua a temperatura de spa y dermocosmetología de alta gama según su tipo de pelaje. Realizamos un masaje que disminuye la ansiedad y estimula la circulación sanguínea.',
    duration: '30 min',
    iconName: 'Sparkles'
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: 'Secado Silencioso a Mano',
    description: 'Secado sin cabinas ruidosas. Utilizamos turbinas ultra silenciosas para evitar el estrés y toallas de algodón egipcio.',
    details: 'Acariciamos a tu perrito mientras secamos su pelaje a velocidad media y temperatura controlada. Jamás usamos jaulas-secadoras comerciales, que causan pánico y sobrecalentamiento.',
    duration: '25 min',
    iconName: 'Wind'
  },
  {
    id: 'step-4',
    stepNumber: 4,
    title: 'Corte de Autor o Deslanado',
    description: 'Estilismo adaptado a la morfología de la raza, respetando siempre el bienestar natural del pelaje canino.',
    details: 'A cargo de estilistas certificados. Ya sea un corte clásico de raza, un arreglo higiénico o la remoción segura del subpelo muerto (deslanado) para que su piel respire libremente en el clima de La Paz.',
    duration: '45 min',
    iconName: 'Scissors'
  },
  {
    id: 'step-5',
    stepNumber: 5,
    title: 'Sesión de Fotos y Aromaterapia',
    description: 'Un toque de perfume botánico relajante y su mejor pose estrenando look para enviarte a tu WhatsApp.',
    details: 'Cerramos la sesión con aromaterapia de lavanda y manzanilla. Le tomamos una tierna foto profesional en nuestro set y te la enviamos junto a un reporte de bienestar para alegrar tu día.',
    duration: '10 min',
    iconName: 'Camera'
  }
];

export const SPA_SERVICES: SpaService[] = [
  {
    id: 'servicio-1',
    name: 'BAÑO ESENCIAL',
    priceSmall: 70,
    priceMedium: 95,
    priceLarge: 125,
    highlightText: 'Brillo y Aromaterapia',
    description: 'El mantenimiento ideal para mantener su manto radiante, limpio y libre de nudos entre cortes.',
    benefits: [
      'Análisis dermocapilar preliminar',
      'Baño relajante con shampoo selecto',
      'Masaje dermoestimulador',
      'Corte de uñas y limpieza de oídos',
      'Limpieza de cojinetes higiénicos',
      'Perfume premium de extracto vegetal'
    ],
    isPopular: false,
    timeInMinutes: 60
  },
  {
    id: 'servicio-2',
    name: 'SPA COMPLETO',
    priceSmall: 110,
    priceMedium: 140,
    priceLarge: 180,
    highlightText: 'La Experiencia Consentida',
    description: 'Diseño de corte profesional para lucir increíble y un nivel extra de relajación hidrotérmica.',
    benefits: [
      'Todo lo incluido en el Baño Esencial',
      'Corte de raza completo o corte higiénico',
      'Vaciado de glándulas anales (opcional)',
      'Hidratación con mascarilla de keratina',
      'Doble baño con agua tibia microfiltrada',
      'Sesión de fotografía digital premium'
    ],
    isPopular: true,
    timeInMinutes: 120
  },
  {
    id: 'servicio-3',
    name: 'SPA PREMIUM + DESLANADO',
    priceSmall: 170,
    priceMedium: 210,
    priceLarge: 260,
    highlightText: 'Salud Capilar Avanzada',
    description: 'El tratamiento idóneo para mudar el pelo de forma controlada y nutrir intensamente las capas de la piel.',
    benefits: [
      'Todo lo incluido en el Spa Completo',
      'Tratamiento de Deslanado Termo-Activo',
      'Mascarilla de nutrición profunda con Aloe Vera',
      'Tratamiento de cuidado de almohadillas con cera protectora',
      'Cepillado dental preventivo con pasta canina',
      'Pañuelo o lazo de diseño artesanal'
    ],
    isPopular: false,
    timeInMinutes: 150
  }
];

export const BEFORE_AFTER_GALLERY: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'Transformación de Milo',
    breed: 'Poodle Toy de 3 años, residente de Miraflores',
    description: 'Milo llegó con el pelaje apelmazado en las orejas y con mucha timidez al agua. Tras un reconfortante baño relajante con mascarilla de seda y estilización con tijera premium, se retiró radiante, juguetón y lleno de frescura.',
    imagePath: beforeAfterImg,
    accentColor: 'bg-brand-mint/10 border-brand-mint'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'user-1',
    author: 'Maite Siles',
    dogName: 'Coco',
    breed: 'Shih Tzu',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
    date: 'Ayer',
    rating: 5,
    message: '¡Increíble la paciencia de las chicas! Coco es súper nervioso con el secador, pero hoy salió feliz y oliendo delicioso. Me mandaron su foto por WhatsApp justo después del spa. ¡100% recomendado!',
    replyText: '¡Gracias Maite! Coco se portó hermoso en el baño relax de manzanilla. Nos encanta atenderlo.',
    localTime: '14:32'
  },
  {
    id: 'user-2',
    author: 'Mauricio Choque',
    dogName: 'Ranger',
    breed: 'Pastor Alemán',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    date: 'Hace 3 días',
    rating: 5,
    message: 'Le hicieron un deslanado a Ranger y es impresionante la cantidad de pelo muerto que le quitaron. En casa ya no suelta casi nada y él se siente mucho más liviano y fresco en este calor.',
    replyText: '¡Qué alegría, Mauricio! El deslanado termo-activo ayuda muchísimo a regular su temperatura corporal.',
    localTime: '11:15'
  },
  {
    id: 'user-3',
    author: 'Camila Vargas',
    dogName: 'Bella',
    breed: 'Golden Retriever',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    date: 'La semana pasada',
    rating: 5,
    message: 'El mejor spa de La Paz. Bella ama venir, entra moviendo la cola y jugando. Las toallas están calientitas y el trato es puro amor. El servicio premium vale cada centavo.',
    replyText: 'Bella es de la familia, Camila. ¡Nos llena el corazón verla correr con su pañuelito de flores!',
    localTime: '18:05'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Cómo puedo agendar una reserva para mi mascota?',
    answer: 'Es súper fácil. Haz clic en cualquiera de nuestros botones de WhatsApp. Te responderemos de inmediato para confirmar el tamaño de tu perrito, coordinar el día y hora que mejor te convenga y reservar su espacio en el spa.'
  },
  {
    id: 'faq-2',
    question: '¿Cuáles son sus horarios de atención?',
    answer: 'Atendemos de Lunes a Sábado desde las 09:00 hasta las 18:00 (siendo las 16:30 el último turno para servicios completos). Estamos ubicados en una zona central del hermoso barrio de Miraflores, en La Paz, Bolivia.'
  },
  {
    id: 'faq-3',
    question: '¿Aceptan pagos mediante QR o transferencia bancaria?',
    answer: 'Sí, por supuesto. Para tu comodidad aceptamos pagos en efectivo, transferencias directas y pagos rápidos mediante código QR (Simple) de cualquier banco de Bolivia al finalizar el servicio.'
  },
  {
    id: 'faq-4',
    question: '¿Atienden perritos de todos los tamaños y razas?',
    answer: '¡Absolutamente! Atendemos desde pequeñitos (Chihuahuas, Poodles Toy, Yorkies) hasta gigantes bonachones (Golden Retrievers, Samoyedos, Berneses). Personalizamos las técnicas y el baño para la morfología propia de cada raza.'
  },
  {
    id: 'faq-5',
    question: '¿Cuánto tiempo tarda la experiencia completa del spa?',
    answer: 'El servicio regular dura entre 1 hora (para baños esenciales en perros pequeños) y hasta 2.5 horas para spas completos con deslanado en perros grandes. Priorizamos la calma y paciencia, respetando sus tiempos emocionales sin apresuramientos.'
  },
  {
    id: 'faq-6',
    question: '¿Puedo quedarme a ver a mi mascota durante la sesión?',
    answer: '¡Claro que sí! Contamos con una hermosa zona de recepción vidriada y un cafecito de cortesía donde puedes relajarte mientras vigilas cómo consentimos a tu mejor amigo. De todas formas, la mayoría de los perritos se comporta de forma más tranquila cuando su dueño no está en su campo visual directo, ya que tienden a sobreexcitarse buscando protegerlos.'
  }
];
