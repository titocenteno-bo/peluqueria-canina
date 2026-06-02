/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Check, ChevronLeft, ChevronRight, HelpCircle, Heart, Sparkles } from 'lucide-react';
import { ASSETS } from '../data';

// Import newly generated high-fidelity same-dog before and after images
import miloImg from '../assets/images/milo_poodle_before_after_1780360865086.png';
import simbaImg from '../assets/images/simba_pomeranian_before_after_1780360883568.png';
import kiwiImg from '../assets/images/kiwi_schnauzer_before_after_1780360895705.png';
import lunaImg from '../assets/images/luna_cocker_before_after_1780360910356.png';
import ramonImg from '../assets/images/ramon_shihtzu_before_after_1780360930014.png';

// Expanded list of 5 real-life premium transformations in Miraflores
interface TransformationItem {
  id: string;
  dogName: string;
  breed: string;
  description: string;
  compositeImage: string;
  benefits: string[];
  hotspots: {
    id: number;
    x: string;
    y: string;
    title: string;
    desc: string;
  }[];
  accentClass: string;
}

const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 't-1',
    dogName: 'Milo',
    breed: 'Poodle Toy (Residente de Miraflores)',
    description: 'Milo llegó con el pelaje extremadamente apelmazado en las orejas y con mucha timidez al agua. Tras un reconfortante tratamiento de ozonoterapia, mascarilla de seda nutritiva y un esculpido artesanal con tijera premium, se retiró radiante, juguetón y lleno de frescura.',
    compositeImage: miloImg,
    benefits: [
      'Desenredado termo-activo indoloro',
      'Mascarilla nutritiva de seda hidrófila',
      'Esculpido de raza 100% manual con tijera'
    ],
    hotspots: [
      { id: 1, x: '25%', y: '45%', title: 'Remoción de Manto Apelmazado', desc: 'Desenredado manual sin tirones, devolviendo la elasticidad natural de su manto.' },
      { id: 2, x: '75%', y: '30%', title: 'Perfilado de Rostro y Mirada', desc: 'Corte redondeado a tijera respetando los canales lagrimales sensibles.' },
      { id: 3, x: '82%', y: '68%', title: 'Lazo Boutique Sostenible', desc: 'Accesorio premium hipoalergénico artesanal de cortesía para coronar el look.' }
    ],
    accentClass: 'bg-brand-coral-light border-brand-coral text-brand-coral'
  },
  {
    id: 't-2',
    dogName: 'Simba',
    breed: 'Pomerania Pomerania Lulú',
    description: 'Simba presentaba resequedad severa en el manto y pérdida de volumen por cepillados inadecuados. Aplicamos doble baño recuperador, hidratación de keratina y acabado "Teddy Bear" estilizado, logrando un pelaje ultra-exponjoso digno de un peluche.',
    compositeImage: simbaImg,
    benefits: [
      'Baño termorregulador hidratante',
      'Mascarilla selladora de keratina dermo-protectora',
      'Corte Estilo "Teddy Bear" ultra-suave'
    ],
    hotspots: [
      { id: 4, x: '35%', y: '35%', title: 'Volumen Exponencial', desc: 'Técnica de soplado manual que realza la doble capa natural del Pomerania.' },
      { id: 5, x: '75%', y: '45%', title: 'Protección de Cojinetes', desc: 'Aceite de coco y parafina biológica para almohadillas agrietadas.' }
    ],
    accentClass: 'bg-brand-honey-light border-brand-honey text-brand-honey'
  },
  {
    id: 't-3',
    dogName: 'Kiwi',
    breed: 'Schnauzer Miniatura',
    description: 'Kiwi llegó con nudos compactos en la barba y flecos, además de resequedad en la dermis. Realizamos stripping higiénico, remoción de subpelo, baño con shampoo de avena purificada y un perfilado Schnauzer tradicional con faldón estilizado.',
    compositeImage: kiwiImg,
    benefits: [
      'Stripping tradicional respetuoso con el pelaje',
      'Baño de avena purificada e hidratación antipruriginosa',
      'Estilismo clásico de la raza con faldón'
    ],
    hotspots: [
      { id: 6, x: '78%', y: '28%', title: 'Barba de Exposición', desc: 'Peinado con aceites minerales antipolución para brillo eterno.' },
      { id: 7, x: '35%', y: '60%', title: 'Deslanado Higiénico', desc: 'Retiro preventivo del subpelo muerto en su espalda.' }
    ],
    accentClass: 'bg-brand-lavender-light border-brand-lavender text-brand-lavender'
  },
  {
    id: 't-4',
    dogName: 'Luna',
    breed: 'Cocker Spaniel Inglés',
    description: 'Luna sufría de nudos masivos en las axilas y orejas pesadas cargadas de humedad. Implementamos un baño desinfectante preventivo, un profundo deslanado y perfilado de orejas, junto con un corte de uñas y aromaterapia de lavanda relajante.',
    compositeImage: lunaImg,
    benefits: [
      'Limpieza otológica profunda y secado preventivo',
      'Deslanado profundo en manto denso',
      'Corte higiénico con faldón bajo'
    ],
    hotspots: [
      { id: 8, x: '82%', y: '35%', title: 'Tratamiento Oídos Sanos', desc: 'Higiene especial micro-biológica para evitar molestas otitis.' },
      { id: 9, x: '45%', y: '68%', title: 'Corte Higiénico de Axilas', desc: 'Eliminación preventiva de zonas de fricción propensas a nudos.' }
    ],
    accentClass: 'bg-brand-mint-light border-brand-mint text-brand-mint'
  },
  {
    id: 't-5',
    dogName: 'Ramón',
    breed: 'Shih Tzu Imperial',
    description: 'Ramón llegó con lagrimales manchados y manto largo desorganizado. Realizamos un spa completo con baño de arcilla purificante, blanqueamiento suave de lagrimales con fórmulas orgánicas, y corte estilo "Baby Cut" súper rejuvenecedor.',
    compositeImage: ramonImg,
    benefits: [
      'Tratamiento aclarante natural de lagrimales',
      'Baño de arcilla mineral reconstituyente',
      'Corte de Verano "Baby Cut" ultra dócil'
    ],
    hotspots: [
      { id: 10, x: '76%', y: '32%', title: 'Aclarado Óptico Seguro', desc: 'Fórmula calmante de manzanilla que borra manchas ácidas sin irritar.' },
      { id: 11, x: '78%', y: '58%', title: 'Corte Cachorro (Baby Cut)', desc: 'Iguala el vello corporal a una longitud cómoda y dócil.' }
    ],
    accentClass: 'bg-brand-coral-light border-brand-coral text-brand-coral'
  }
];

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Swipe gesture references
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    setDirection('right');
    setActiveHotspot(null);
    setCurrentIndex((prev) => (prev + 1) % TRANSFORMATIONS.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setActiveHotspot(null);
    setCurrentIndex((prev) => (prev - 1 + TRANSFORMATIONS.length) % TRANSFORMATIONS.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshPercent = 50; // swipe threshold in pixel
    if (diff > threshPercent) {
      nextSlide();
    } else if (diff < -threshPercent) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleBooking = (dogName: string) => {
    const text = encodeURIComponent(`¡Hola Spa Canino Miraflores! Vi el cambio de imagen de ${dogName} en su web y me pareció espectacular. Me gustaría agendar una cita premium para consentir al mío. 🐕💈✨`);
    window.open(`https://wa.me/59177465774?text=${text}`, '_blank');
  };

  const currentItem = TRANSFORMATIONS[currentIndex];

  const slideVariants = {
    initial: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? 100 : -100
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 350, damping: 30 }
    },
    exit: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? -100 : 100,
      transition: { ease: 'easeInOut', duration: 0.25 }
    })
  };

  return (
    <section id="transformaciones" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative colored visual elements indicating action/pulse */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-lavender-light/30 rounded-l-[100px] -z-10 pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-1/4 h-1/2 bg-brand-honey-light/20 rounded-r-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Block with playfulness */}
        <div className="text-center md:text-left grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-lavender uppercase block mb-3">La galería boutique de transformaciones</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-brand-charcoal">
              La Belleza de sentarse y sentirse bien.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              Nuestros estilistas aplican cortes de autor respetando el estándar biológico y morfológico de cada consentido.
            </p>
          </div>
        </div>

        {/* Carousel Outer Wrapper */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows for always-visible desktop control */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-30">
            <motion.button
              whileHover={{ scale: 1.15, x: -3 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="bg-white hover:bg-brand-lavender hover:text-white text-brand-charcoal h-12 w-12 rounded-full shadow-xl flex items-center justify-center border border-slate-100 cursor-pointer"
              aria-label="Anterior Mascota"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-30">
            <motion.button
              whileHover={{ scale: 1.15, x: 3 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-white hover:bg-brand-lavender hover:text-white text-brand-charcoal h-12 w-12 rounded-full shadow-xl flex items-center justify-center border border-slate-100 cursor-pointer"
              aria-label="Siguiente Mascota"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Swipeable Container */}
          <div
            id="swipeable-carousel-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full select-none cursor-grab active:cursor-grabbing overflow-hidden"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentItem.id}
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-brand-sand border border-brand-sand-dark/60 rounded-[38px] p-5 sm:p-8 md:p-12 shadow-xl relative"
              >
                {/* 1 / 5 Index Ribbon badge */}
                <div className="absolute top-6 left-6 bg-brand-charcoal text-white font-bold text-xs uppercase px-4 py-1.5 rounded-full shadow-md tracking-wider flex items-center gap-1.5 z-20">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
                  Transformación {currentIndex + 1} de {TRANSFORMATIONS.length}
                </div>

                {/* Left Column: Image with dynamic hover comparison stamp (7 Columns) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group aspect-[4/3] w-full">
                    
                    {/* Before / After side-by-side premium composite image of the same dog */}
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={currentItem.compositeImage}
                        alt={`Antes y Después de ${currentItem.dogName}`}
                        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Left and Right Side overlay text tags */}
                      <div className="absolute top-16 left-4 bg-red-500/90 text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md z-15 font-mono">
                        {currentItem.dogName} antes
                      </div>
                      <div className="absolute top-16 right-4 bg-emerald-500/90 text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md z-15 font-mono">
                        {currentItem.dogName} después
                      </div>
                    </div>

                    {/* Gradient bottom shadow */}
                    <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                    {/* Interactive Hotspots for Experience Details */}
                    {currentItem.hotspots.map((spot) => (
                      <div
                        key={spot.id}
                        className="absolute hidden sm:block"
                        style={{ left: spot.x, top: spot.y }}
                      >
                        <button
                          onMouseEnter={() => setActiveHotspot(spot.id)}
                          onMouseLeave={() => setActiveHotspot(null)}
                          onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                          className="relative h-7 w-7 rounded-full bg-brand-charcoal text-brand-gold hover:bg-brand-lavender hover:text-white flex items-center justify-center font-bold text-sm ring-4 ring-white shadow-xl animate-pulse focus:outline-none cursor-pointer"
                        >
                          +
                        </button>

                        {/* Popover Bubble details */}
                        <AnimatePresence>
                          {activeHotspot === spot.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.85, y: -10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.85, y: -5 }}
                              className="absolute z-40 bottom-10 left-1/2 -translate-x-1/2 w-56 bg-brand-charcoal text-white p-3 py-4 rounded-xl shadow-2xl border border-slate-700 text-xs text-center"
                            >
                              <h4 className="font-extrabold text-brand-gold mb-1">{spot.title}</h4>
                              <p className="text-[10px] leading-relaxed text-slate-300 font-semibold">{spot.desc}</p>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-brand-charcoal" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  {/* Informative footer helper on mobile */}
                  <div className="text-center sm:hidden mt-3 text-xs text-slate-400 font-semibold flex items-center justify-center gap-1">
                    <span>✨ Desliza para ver más transformaciones</span>
                  </div>
                </div>

                {/* Right Column: Descriptions & Treatments (5 Columns) */}
                <div className="lg:col-span-5 flex flex-col justify-between items-start">
                  <div className="w-full">
                    <div className="flex items-center gap-2 mb-4 mt-8 sm:mt-4 lg:mt-0">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rounded-full border border-dashed ${currentItem.accentClass}`}>
                        Look de Autor
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">MIRAFLORES SALÓN</span>
                    </div>

                    <h3 className="font-serif text-3xl font-bold text-brand-charcoal mb-1">
                      {currentItem.dogName}
                    </h3>
                    <p className="text-brand-aqua text-xs font-bold tracking-wider uppercase mb-5">
                      {currentItem.breed}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                      {currentItem.description}
                    </p>

                    {/* Features checklist with premium bullet items */}
                    <div className="flex flex-col gap-3 w-full mb-8">
                      {currentItem.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3 border-b border-dashed border-slate-100 pb-2">
                          <div className="bg-brand-mint-light text-brand-mint p-1 rounded-lg shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-bold text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA action */}
                  <div className="w-full">
                    <motion.button
                      id={`ba-cta-book-${currentItem.dogName.toLowerCase()}`}
                      onClick={() => handleBooking(currentItem.dogName)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-brand-charcoal hover:bg-brand-lavender text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-2xl flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
                    >
                      <Scissors className="w-4 h-4" />
                      <span>Quiero ver así a mi mascota</span>
                    </motion.button>
                    <p className="text-[10px] text-center text-slate-400 font-semibold mt-2.5">
                      Trato cariñoso, sin prisas, diseñado para su relax.
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8 z-30">
            {TRANSFORMATIONS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => {
                  setDirection(dotIdx > currentIndex ? 'right' : 'left');
                  setCurrentIndex(dotIdx);
                }}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === dotIdx ? 'w-8 bg-brand-lavender' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir al perro ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
