/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Flame, MessageSquare, Clock, ShieldCheck, Dumbbell } from 'lucide-react';
import { SPA_SERVICES } from '../data';

export default function Services() {
  const [activeSize, setActiveSize] = useState<'pequeno' | 'mediano' | 'grande'>('pequeno');

  const sizeLabels = [
    { id: 'pequeno', label: 'Pequeño', weight: 'Hasta 10 kg', details: 'p.ej: Shih Tzu, Poodle Toy, Pomerania' },
    { id: 'mediano', label: 'Mediano', weight: '11 a 25 kg', details: 'p.ej: Cocker Spaniel, Beagle, Bulldog Fr.' },
    { id: 'grande', label: 'Grande', weight: 'Más de 25 kg', details: 'p.ej: Golden Retriever, Samoyedo, Boxer' },
  ];

  const getPrice = (service: typeof SPA_SERVICES[0]) => {
    switch (activeSize) {
      case 'pequeno':
        return service.priceSmall;
      case 'mediano':
        return service.priceMedium;
      case 'grande':
        return service.priceLarge;
      default:
        return service.priceSmall;
    }
  };

  const handleServiceInquiry = (serviceName: string) => {
    const sizeStr = sizeLabels.find((s) => s.id === activeSize)?.label || activeSize;
    const text = encodeURIComponent(`¡Hola! Quisiera reservar el servicio "${serviceName}" para mi perrito de tamaño "${sizeStr}". ¿Qué fecha y hora tienen disponibles? 🐾✨`);
    window.open(`https://wa.me/59177465774?text=${text}`, '_blank');
  };

  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#FCFBF9] relative overflow-hidden">
      
      {/* Absolute floating vector blur circles for decoration */}
      <div className="absolute top-1/3 left-[-100px] w-96 h-96 bg-brand-aqua/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-100px] w-96 h-96 bg-brand-mint/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-[#248DA6] uppercase mb-3">La Colección de Aromaterapia & Belleza</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] leading-tight font-bold text-brand-charcoal mb-4">
            Tratamientos Diseñados Especiales
          </h2>
          <p className="text-slate-600 font-medium text-sm md:text-base mb-10">
            Ofrecemos rituales completos que nutren la salud dermo-capilar y restauran la tranquilidad natural de tu mascota.
          </p>

          {/* Sizing Indicator & Interactive Prominent Guide Effect */}
          <div className="flex flex-col items-center mb-6 relative">
            <motion.div
              animate={{ 
                y: [0, -4, 0],
                boxShadow: [
                  '0 4px 10px rgba(255, 107, 83, 0.2)',
                  '0 4px 20px rgba(255, 107, 83, 0.45)',
                  '0 4px 10px rgba(255, 107, 83, 0.2)'
                ]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="bg-brand-coral text-white text-[10px] sm:text-[11px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full flex items-center gap-1.5 border border-white z-10"
            >
              <span className="inline-block animate-bounce font-sans text-xs">👇</span>
              <span>¡ELIGE EL TAMAÑO PARA ACTUALIZAR LOS PRECIOS!</span>
              <span className="inline-block animate-bounce font-sans text-xs">👇</span>
            </motion.div>
          </div>

          {/* Size Selector Widget with bouncy motions */}
          <div className="inline-flex flex-col sm:flex-row bg-white border border-slate-200/80 p-2.5 rounded-3xl shadow-lg w-full max-w-2xl relative">
            {sizeLabels.map((size) => (
              <motion.button
                key={size.id}
                onClick={() => setActiveSize(size.id as any)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 flex flex-col items-center py-4 px-4 rounded-2xl transition-all outline-none cursor-pointer ${
                  activeSize === size.id
                    ? 'bg-brand-charcoal text-white shadow-xl ring-2 ring-brand-coral/40'
                    : 'text-slate-600 hover:bg-brand-sand-dark/15 hover:text-brand-charcoal'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-xs md:text-sm font-bold tracking-tight uppercase">{size.label}</span>
                  {activeSize === size.id && (
                    <span className="h-2 w-2 rounded-full bg-brand-coral animate-ping" />
                  )}
                </div>
                <span className={`text-[10px] uppercase font-bold tracking-wider mt-0.5 ${
                  activeSize === size.id ? 'text-brand-coral font-extrabold' : 'text-[#3E9FBA]'
                }`}>
                  {size.weight}
                </span>
                <span className={`text-[9.5px] font-semibold leading-tight mt-1 truncate max-w-[150px] ${
                  activeSize === size.id ? 'text-slate-300' : 'text-slate-400'
                }`}>
                  {size.details}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Pricing Layout Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2">
          {SPA_SERVICES.map((service) => {
            const currentPrice = getPrice(service);

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 transition-all duration-300 border-2 ${
                  service.isPopular
                    ? 'border-brand-mint shadow-2xl scale-[1.02] z-10'
                    : 'border-slate-100/90 shadow-md hover:shadow-xl hover:translate-y-[-4px]'
                }`}
              >
                {/* Popularity Badge floating on card */}
                {service.isPopular && (
                  <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 bg-brand-mint text-white font-extrabold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 ring-4 ring-white">
                    <Flame className="w-3.5 h-3.5 fill-white text-white" />
                    El Más Recomendado
                  </div>
                )}

                {/* Card Top Information */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold text-cyan-600 bg-brand-aqua-light py-1 px-3.5 rounded-full tracking-wider uppercase">
                      {service.highlightText}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-mono font-bold bg-slate-100 py-1 px-2.5 rounded-md">
                      <Clock className="w-3.5 h-3.5" />
                      {service.timeInMinutes} min
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal mb-2">
                    {service.name}
                  </h3>
                  
                  <p className="text-slate-500 font-medium text-xs leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Curated Dinamic Price Section */}
                  <div className="border-b border-slate-100 pb-6 mb-6">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Inversión Wellness</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-charcoal">
                        {currentPrice}
                      </span>
                      <span className="font-sans text-xl font-bold text-slate-500">
                        Bs.
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 mt-1 block uppercase tracking-wide">
                      *Precio estimado para perro {sizeLabels.find((s) => s.id === activeSize)?.label.toLowerCase()}
                    </span>
                  </div>

                  {/* List of custom benefits */}
                  <div className="mb-8">
                    <span className="text-xs uppercase font-extrabold text-[#1F2E3D] tracking-wide block mb-4">¿Qué incluye la sesión?</span>
                    <ul className="flex flex-col gap-3">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-tight">
                          <div className="bg-brand-mint-light text-brand-mint rounded-full p-0.5 shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Booking Button */}
                <div>
                  <button
                    onClick={() => handleServiceInquiry(service.name)}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      service.isPopular
                        ? 'bg-brand-charcoal hover:bg-brand-mint text-white shadow-lg'
                        : 'bg-white hover:bg-brand-sand border-2 border-slate-200 hover:border-brand-mint text-brand-charcoal'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Reservar este Spa</span>
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2 font-medium">
                    Atención sin jaulas, 100% libre de estrés.
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic mini trust indicators under tables */}
        <div className="mt-16 bg-brand-aqua/5 rounded-[28px] p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border border-brand-aqua/10">
          <div className="flex flex-col items-center">
            <div className="bg-white text-brand-aqua p-3 rounded-full mb-3 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-extrabold text-brand-charcoal uppercase tracking-wider mb-1">Cosméutica Natural</h4>
            <p className="text-[11px] text-slate-600 font-medium">Fórmulas botánicas hipoalergénicas sin parabenos ni químicos invasivos.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white text-brand-aqua p-3 rounded-full mb-3 shadow-md">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-extrabold text-brand-charcoal uppercase tracking-wider mb-1">Ahorre tiempo</h4>
            <p className="text-[11px] text-slate-600 font-medium">Llegas, lo recibimos y empezamos inmediatamente. Tu consentido no espera en jaulas.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white text-brand-aqua p-3 rounded-full mb-3 shadow-md">
              <Dumbbell className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-extrabold text-brand-charcoal uppercase tracking-wider mb-1">Peluqueros Capacitados</h4>
            <p className="text-[11px] text-slate-600 font-medium">Formados en psicología canina para un manejo cariñoso y seguro.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
