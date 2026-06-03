/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Clock, Phone, Map, Navigation, Mail, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { ASSETS } from '../data';

export default function Ubicacion() {
  const handleDirections = () => {
    // Elegant redirect to Miraflores, La Paz, Bolivia searching
    const url = 'https://www.google.com/maps/search/?api=1&query=Nachis+Pupis+Miraflores+La+Paz+Bolivia';
    window.open(url, '_blank');
  };

  const handlePhoneCall = () => {
    window.open('tel:+59176756381');
  };

  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Information block (6 Columns) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-bold tracking-[0.2em] text-[#248DA6] uppercase block mb-3">Encuéntranos</span>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight font-bold text-brand-charcoal mb-6">
              Estamos en el corazón de Miraflores.
            </h2>
            <p className="text-slate-600 font-medium text-sm md:text-base mb-8 leading-relaxed">
              Ubicados en una de las zonas más seguras, tranquilas y accesibles de La Paz, Bolivia. Diseñamos nuestras instalaciones especialmente para hospedar a tu mascota en un entorno libre de ruidos citadinos molestos.
            </p>

            {/* Consolidated Contact Information Card */}
            <div className="w-full bg-brand-sand/55 border-2 border-brand-sand-dark rounded-3xl p-6 sm:p-8 mb-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-mint/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-5 pb-3 border-b border-brand-sand-dark/25 flex items-center gap-2">
                <span className="text-xl">🐾</span> Información de Contacto y Ubicación
              </h3>

              <div className="flex flex-col gap-5">
                
                {/* 1. Direccion */}
                <div className="flex items-start gap-3.5">
                  <div className="bg-brand-mint-light text-brand-mint p-2.5 rounded-xl shrink-0 shadow-sm mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-charcoal uppercase tracking-wider mb-0.5">Dirección Oficial</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">
                      Av. Saavedra No. 77, Miraflores<br />
                      La Paz - Bolivia
                    </p>
                  </div>
                </div>

                {/* 2. Horarios */}
                <div className="flex items-start gap-3.5">
                  <div className="bg-brand-aqua-light text-brand-aqua p-2.5 rounded-xl shrink-0 shadow-sm mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-charcoal uppercase tracking-wider mb-0.5">Horarios de Atención</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">
                      Lunes a Sábado • 09:00 a 18:00
                    </p>
                  </div>
                </div>

                {/* 3. WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="bg-amber-50 text-amber-600 p-2.5 rounded-xl shrink-0 shadow-sm mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-charcoal uppercase tracking-wider mb-0.5">Teléfono & WhatsApp</h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-extrabold leading-relaxed">
                      +591 76756381
                    </p>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mt-0.5">
                      CON ATENCIÓN RÁPIDA DE RESERVAS
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Visual Action Button triggers */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                id="location-cta-maps"
                onClick={handleDirections}
                className="bg-brand-charcoal hover:bg-brand-mint text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-2xl transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <Map className="w-4 h-4 text-brand-mint" />
                <span>Cómo llegar (Google Maps)</span>
              </button>
              
              <button
                id="location-cta-phone"
                onClick={handlePhoneCall}
                className="bg-white hover:bg-brand-sand text-brand-charcoal border-2 border-slate-200 font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-2xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>Llamar al 76756381</span>
              </button>
            </div>
          </div>

          {/* Map mockup/creative display utilizing the spaBath dog photo (6 Columns) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[480px] aspect-[4/3] rounded-[36px] overflow-hidden border-4 border-white shadow-2xl bg-white"
            >
              <img
                src={ASSETS.spaBath}
                alt="Detalle de tina de hidroterapia en Nachis Pupis con mascota feliz"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Floating physical layout marker card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur shadow-2xl rounded-2xl p-4 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-mint h-9 w-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm animate-pulse shadow-md">
                    📍
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-charcoal uppercase tracking-tight">Instalaciones Boutique</h4>
                    <p className="text-[10px] text-slate-500 font-medium leading-normal">Baños hidrotérmicos equipados con toallas calientes.</p>
                  </div>
                </div>
                <div className="hidden sm:block border-l border-slate-100 pl-4">
                  <span className="text-[9px] uppercase font-bold text-[#E6A21E] block">Estado</span>
                  <span className="text-xs font-extrabold text-[#7CA630]">Esterilizado</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
