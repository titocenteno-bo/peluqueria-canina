/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Show a warm, elegant floating tooltip after 4 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 4500);

    // Track scroll to display scroll-to-top button
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(tooltipTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBookingClick = () => {
    const text = encodeURIComponent('¡Hola Nachis Pupis! Me encantaría agendar una cita premium para consentir a mi mascota de forma súper especial. ¿Tienen turnos disponibles? 🐾💈');
    window.open(`https://wa.me/59176756381?text=${text}`, '_blank');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="floating-controls-wrapper" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll-to-Top Floating Button (Left/Above) - smoothly fades in */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={handleScrollToTop}
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            whileHover={{ scale: 1.1, backgroundColor: '#1E2D3D', color: '#FFFFFF' }}
            whileTap={{ scale: 0.9 }}
            className="pointer-events-auto bg-white/95 backdrop-blur shadow-lg hover:shadow-xl h-11 w-11 rounded-full border border-slate-200 text-brand-charcoal flex items-center justify-center cursor-pointer transition-all"
            title="Subir al inicio"
            aria-label="Volver arriba"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="pointer-events-auto max-w-xs bg-white rounded-2xl p-4 shadow-xl border border-emerald-100 relative flex flex-col gap-2"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2.5 right-2.5 text-slate-400 hover:text-brand-charcoal transition-colors p-0.5 rounded-full hover:bg-slate-100 cursor-pointer"
              aria-label="Cerrar sugerencia"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">¡Reservas online disponibles!</p>
            </div>
            <p className="text-slate-600 text-xs font-semibold leading-relaxed">
              ¿Quieres agendar un día de spa especial para tu mascota hoy mismo? Es en segundos.
            </p>
            <button
              onClick={handleBookingClick}
              className="text-white bg-emerald-500 hover:bg-emerald-600 font-extrabold text-[10px] uppercase tracking-wider py-2.5 px-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white animate-bounce" />
              reservar cita por WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Floating Action Button displaying custom 'reservar cita' text as requested pill */}
      <motion.button
        id="btn-whatsapp-main"
        onClick={handleBookingClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 10px 25px -5px rgba(16, 185, 129, 0.4)',
            '0 10px 30px 0px rgba(16, 185, 129, 0.6)',
            '0 10px 25px -5px rgba(16, 185, 129, 0.4)',
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="pointer-events-auto bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-5 sm:px-6 h-13 rounded-full flex items-center justify-center gap-2 cursor-pointer relative border border-white font-extrabold text-xs uppercase tracking-wider shadow-2xl"
        title="Reservar Cita por WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span>reservar cita</span>
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 text-[9px] font-bold text-white flex items-center justify-center border border-white">
            1
          </span>
        </span>
      </motion.button>

    </div>
  );
}
