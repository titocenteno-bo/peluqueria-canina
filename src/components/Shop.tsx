/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ShoppingCart, MessageSquare, ArrowRight, ArrowLeft, Filter, Tag, Check, Award, Flame, Star } from 'lucide-react';

import alqoImg from '../assets/images/alqo_dog_food_product_1780366551258.png';

interface ProductItem {
  id: string;
  name: string;
  category: 'Higiene' | 'Nutrición' | 'Accesorios' | 'Snacks';
  description: string;
  longDescription: string;
  price: number;
  imageUrl: string;
  rating: number;
  isOffer?: boolean;
}

const BOUTIQUE_PRODUCTS: ProductItem[] = [
  {
    id: 'p-1',
    name: 'Shampoo de Lavanda & Avena Premium',
    category: 'Higiene',
    description: 'Champú dermoprotector calmante. Combate la picazón y deja un aroma relajante campestre.',
    longDescription: 'Nuestra fórmula estrella utilizada en Miraflores. Libre de sulfatos y parabenos, contiene avena coloidal orgánica boliviana y aceites esenciales de lavanda para relajar emocionalmente a tu mascota durante el baño en casa.',
    price: 75,
    imageUrl: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=500',
    rating: 5,
    isOffer: true
  },
  {
    id: 'p-2',
    name: 'Alimento "Alqo" Cordero & Quinua Real (2kg)',
    category: 'Nutrición',
    description: 'Nutrición andina holística y de alta digestibilidad. 100% libre de gluten.',
    longDescription: 'Elaborado con cordero de pastura altiplánica y Quinua Real boliviana para un pelaje radiante y fuerte digestión. Recomendado para mascotas con alergias alimentarias u olores corporales fuertes.',
    price: 130,
    imageUrl: alqoImg,
    rating: 5
  },
  {
    id: 'p-3',
    name: 'Plato Ergonómico Anti-Ansiedad "Slow"',
    category: 'Accesorios',
    description: 'Diseño de laberinto 3D para comer despacio y evitar peligrosos ahogos.',
    longDescription: 'Estimula mentalmente a tu mascota y extiende sus tiempos de ingesta hasta 5 veces más. Evita la acumulación de gases, el reflujo y la indigestión. Material libre de BPA súper duradero.',
    price: 60,
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=500',
    rating: 4
  },
  {
    id: 'p-4',
    name: 'Mascarilla Capilar de Keratina Vegetal (250ml)',
    category: 'Higiene',
    description: 'Concentrado hidratante que restaura el brillo de seda del pelaje maltratado.',
    longDescription: 'Reconstructor de hebras capilares de acción inmediata. Humecta profundamente las capas inferiores de la dermis, regenera nudos duros y previene que el pelaje se enrede fácilmente.',
    price: 80,
    imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=500',
    rating: 5,
    isOffer: true
  },
  {
    id: 'p-5',
    name: 'Pañuelo Impermeable "Diseño Miraflores"',
    category: 'Accesorios',
    description: 'Estampado de flores locales. Totalmente ajustable y de secado ultra-rápido.',
    longDescription: 'Confeccionado artesanalmente por costureras paceñas. Una hermosa bandana de edición limitada, resistente al agua y lavable en lavadora. Tu mejor amigo lucirá elegante en la plaza de Miraflores.',
    price: 45,
    imageUrl: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&q=80&w=500',
    rating: 5
  },
  // Extra products only visible on the expanded page view
  {
    id: 'p-6',
    name: 'Cepillo Quita-nudos Ergonómico Doble',
    category: 'Accesorios',
    description: 'Cerdas de puntas redondeadas para eliminar pelo muerto sin rasguñar la sensible piel.',
    longDescription: 'La herramienta perfecta de deslanado para casas libres de vello. Sus dientes giratorios de acero inoxidable eliminan nudos rebeldes e higienizan el subpelo sin tirones dolorosos.',
    price: 55,
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=500',
    rating: 4
  },
  {
    id: 'p-7',
    name: 'Charque Deshidratado de Llama Premium (100g)',
    category: 'Snacks',
    description: 'Premio hipoalergénico artesanal de alto valor proteico y bajo en calorías.',
    longDescription: 'Snack 100% natural deshidratado a baja temperatura para preservar nutrientes. Sin conservantes artificiales ni sal añadida. Excelente opción andina para entrenamientos felices.',
    price: 40,
    imageUrl: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=500',
    rating: 5,
    isOffer: true
  },
  {
    id: 'p-8',
    name: 'Gotas Relajantes "Paz Natural" (30ml)',
    category: 'Nutrición',
    description: 'Extractos puros de Pasiflora y Valeriana para reducir el estrés de tu mascota.',
    longDescription: 'Suplemento líquido natural para calmar la ansiedad por ruidos fuertes, cohetes o tormentas en La Paz. No seda a tu mascota, simplemente estabiliza su sistema nervioso mediante hierbas biológicas.',
    price: 65,
    imageUrl: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=500',
    rating: 5
  }
];

interface ShopProps {
  onNavigateToBoutique?: () => void;
  onNavigateToHome?: () => void;
  isFullView?: boolean;
}

export default function Shop({ onNavigateToBoutique, onNavigateToHome, isFullView = false }: ShopProps) {
  const [activeCategory, setActiveCategory] = useState<'Todos' | 'Higiene' | 'Nutrición' | 'Accesorios' | 'Snacks'>('Todos');
  const [detailProduct, setDetailProduct] = useState<ProductItem | null>(null);

  const categories: ('Todos' | 'Higiene' | 'Nutrición' | 'Accesorios' | 'Snacks')[] = ['Todos', 'Higiene', 'Nutrición', 'Accesorios', 'Snacks'];

  // Filter products Based on active Category
  const filteredProducts = BOUTIQUE_PRODUCTS.filter((product) => {
    if (activeCategory === 'Todos') return true;
    return product.category === activeCategory;
  });

  // Display only 5 items on the main landing widget, but all items on the detailed boutique page
  const displayedProducts = isFullView ? filteredProducts : BOUTIQUE_PRODUCTS.slice(0, 5);

  const handleOrder = (product: ProductItem) => {
    const text = encodeURIComponent(`¡Hola Nachis Pupis! Me encantaría adquirir el producto "${product.name}" (${product.price} Bs.) de su Boutique Premium. ¿Tienen disponibilidad de entrega o retiro hoy? 🐾🛍️`);
    window.open(`https://wa.me/59176756381?text=${text}`, '_blank');
  };

  // Switch to Boutique virtual page transition
  if (isFullView) {
    return (
      <div id="full-boutique-page" className="min-h-screen bg-brand-sand pt-28 pb-20 relative px-4 sm:px-6 lg:px-8">
        
        {/* Background Ambient Blurs */}
        <div className="absolute top-10 right-20 w-80 h-80 bg-brand-honey/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Return button and breadcrumbs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-brand-sand-dark pb-6 mb-12">
            <motion.button
              whileHover={{ x: -4 }}
              onClick={onNavigateToHome}
              className="flex items-center gap-2 bg-white hover:bg-brand-charcoal hover:text-white text-brand-charcoal py-2.5 px-5 rounded-2xl shadow-md border border-slate-200/80 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al Spa Principal</span>
            </motion.button>
            <div className="text-left sm:text-right">
              <span className="text-xs font-bold text-brand-coral uppercase tracking-widest block">Nuestra Tienda Premium</span>
              <p className="text-[11px] font-mono font-black text-slate-500">MIRAFLORES, BOLIVIA</p>
            </div>
          </div>

          {/* Epic Main Title Block */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-brand-coral-light text-brand-coral font-bold text-[10px] uppercase tracking-[0.2em] py-1.5 px-4 rounded-full inline-flex items-center gap-1.5 mb-4">
              <ShoppingBag className="w-3.5 h-3.5 fill-brand-coral text-brand-coral" />
              Boutique Nachis Pupis
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-[46px] leading-tight font-extrabold text-brand-charcoal mb-4">
              Consiente a tu peludo en casa.
            </h1>
            <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
              shampoos especializados de SPA, cosmética andina libre de parabenos, accesorios de diseño y comida súper premium para que continúes cuidando su salud.
            </p>
          </div>

          {/* Filtering category controls */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-2 px-5 rounded-full text-xs font-bold tracking-wide transition-all uppercase outline-none cursor-pointer border ${
                  activeCategory === cat
                    ? 'bg-brand-charcoal text-white border-brand-charcoal shadow-lg'
                    : 'bg-white hover:bg-brand-sand hover:text-brand-charcoal text-slate-600 border-slate-200'
                }`}
              >
                {cat === 'Todos' ? 'Mostrar Todos' : cat}
              </button>
            ))}
          </div>

          {/* Complete Shop catalog layout Grid with 8 items */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layoutId={`card-${product.id}`}
                className="bg-white rounded-2xl p-3.5 shadow-md border border-slate-100 flex flex-col justify-between group transition-all duration-300 hover:shadow-lg relative"
              >
                {product.isOffer && (
                  <span className="absolute top-3 left-3 bg-brand-coral text-white font-extrabold text-[8px] uppercase tracking-widest py-0.5 px-2 rounded-full z-10 shadow-sm flex items-center gap-0.5">
                    <Tag className="w-2 h-2" />
                    Oferta
                  </span>
                )}
                
                <div>
                  <div className="relative overflow-hidden aspect-[4/3] rounded-xl mb-3 bg-brand-sand">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[8px] font-bold text-[#20839C] uppercase tracking-wider bg-brand-aqua-light py-0.5 px-1.5 rounded">
                      {product.category}
                    </span>
                    <div className="flex items-center text-brand-gold">
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-sans text-xs font-bold text-brand-charcoal leading-snug tracking-tight mb-1 h-8 line-clamp-2 group-hover:text-brand-coral transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-[10px] leading-relaxed mb-3 h-7 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="border-t border-slate-50 pt-3 mt-1.5">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Inversión</span>
                    <span className="font-serif text-sm font-black text-brand-charcoal">
                      {product.price} <span className="text-[10px] font-sans font-bold text-slate-500">Bs.</span>
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      onClick={() => setDetailProduct(product)}
                      className="bg-brand-sand hover:bg-brand-sand-dark text-brand-charcoal font-bold text-[9px] uppercase tracking-wider py-2 rounded-lg transition-colors cursor-pointer text-center"
                    >
                      Detalles
                    </button>
                    <button
                      onClick={() => handleOrder(product)}
                      className="bg-[#1E2D3D] hover:bg-emerald-500 text-white font-bold text-[9px] uppercase tracking-wider py-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1 shadow-sm"
                    >
                      <ShoppingCart className="w-3 h-3" />
                      <span>Pedir</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Product Details Modal Overlay */}
        <AnimatePresence>
          {detailProduct && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-[32px] p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-100"
              >
                <button
                  onClick={() => setDetailProduct(null)}
                  className="absolute top-4 right-4 h-9 w-9 bg-slate-150 hover:bg-slate-200 text-brand-charcoal font-bold rounded-full flex items-center justify-center cursor-pointer text-lg outline-none"
                >
                  ✕
                </button>

                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-brand-sand border border-slate-150 relative">
                  <img
                    src={detailProduct.imageUrl}
                    alt={detailProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <span className="text-[10px] font-bold text-brand-coral bg-brand-coral-light py-1 px-3 rounded-full uppercase tracking-wider">
                  {detailProduct.category}
                </span>

                <h3 className="font-serif text-2xl font-bold text-brand-charcoal mt-3 mb-2">
                  {detailProduct.name}
                </h3>

                <div className="flex items-center gap-1 mb-4 text-brand-gold">
                  {Array.from({ length: detailProduct.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                  <span className="text-xs text-slate-400 font-semibold ml-2">(Súper Recomendado)</span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold mb-6">
                  {detailProduct.longDescription}
                </p>

                <div className="bg-brand-sand border border-brand-sand-dark/55 rounded-2xl p-4 flex items-center justify-between mb-6">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Precio de Venta</span>
                    <span className="font-serif text-2xl font-black text-brand-charcoal">
                      {detailProduct.price} <span className="text-sm font-sans font-bold text-slate-500">Bs.</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold bg-white border border-emerald-100/90 rounded-full px-3 py-1 shadow-sm">
                    <Check className="w-3.5 h-3.5" />
                    En Stock Miraflores
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setDetailProduct(null)}
                    className="border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Seguir Navegando
                  </button>
                  <button
                    onClick={() => handleOrder(detailProduct)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Hacer Pedido en WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Segment: Core Embedded Shelf Section with 4-5 articles (Regular Landing Page display widget)
  return (
    <section id="boutique" className="py-20 md:py-28 bg-[#FCFBF9] relative overflow-hidden border-t border-brand-sand-dark/30">
      
      {/* Decorative shapes to make the boutique feel super premium like Airbnb */}
      <div className="absolute left-0 top-0 w-44 h-44 bg-brand-honey-light rounded-full blur-2xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-lavender-light rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Grid Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-center md:text-left">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-honey uppercase block mb-3">La Boutique Autorizada</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] leading-tight font-extrabold text-brand-charcoal">
              Productos Especiales de Spa.
            </h2>
          </div>
          <div className="lg:col-span-4 text-center md:text-right">
            <button
              onClick={onNavigateToBoutique}
              className="inline-flex items-center gap-2 text-brand-honey hover:text-[#D97706] font-extrabold text-xs uppercase tracking-widest bg-brand-honey-light hover:bg-[#FFEFC1] border border-brand-honey/20 py-3.5 px-6 rounded-2xl transition-all shadow-md cursor-pointer"
            >
              <span>Ver todos los productos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Helpful swipe instruction guide only visible on mobile */}
        <div className="sm:hidden mb-4 text-xs font-semibold text-brand-honey flex items-center justify-center gap-1.5 animate-pulse">
          <span>👈 Desliza horizontalmente para ver productos 👉</span>
        </div>

        {/* Product Grid Shelf showing 4 beautiful items (Scrollable snap-carousel on mobile) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:px-0 sm:mx-0 sm:pb-0">
          {displayedProducts.slice(0, 4).map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="shrink-0 w-[230px] snap-center sm:w-auto sm:shrink sm:snap-align-none bg-white rounded-2xl p-3.5 shadow-md border border-slate-100 hover:border-brand-honey/30 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden aspect-[4/3] rounded-xl mb-3 bg-slate-50 border border-slate-100/50">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {product.isOffer && (
                    <span className="absolute top-2 left-2 bg-brand-coral text-white font-extrabold text-[8px] uppercase tracking-widest py-0.5 px-2 rounded-full shadow-sm z-10">
                      OFERTA
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[8px] font-bold text-brand-honey uppercase bg-brand-honey-light py-0.5 px-1.5 rounded">
                    {product.category}
                  </span>
                  <div className="flex items-center text-amber-500">
                    {Array.from({ length: product.rating }).map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                <h3 className="font-sans text-xs font-bold text-brand-charcoal leading-snug tracking-tight mb-1 h-8 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-slate-400 text-[10px] leading-relaxed mb-3 h-7 line-clamp-2 font-medium">
                  {product.description}
                </p>
              </div>

              <div className="border-t border-dashed border-slate-100 pt-3 mt-1.5">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Inversión</span>
                  <span className="font-serif text-sm font-black text-brand-charcoal">
                    {product.price} <span className="text-[10px] font-sans font-bold text-slate-400">Bs.</span>
                  </span>
                </div>
                <button
                  onClick={() => handleOrder(product)}
                  className="w-full bg-brand-charcoal hover:bg-emerald-500 text-white font-bold text-[9px] uppercase tracking-wider py-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Pedir por WhatsApp</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beautiful Dynamic banner encouraging client to enter full store catalogue */}
        <div className="mt-16 bg-gradient-to-r from-brand-honey/10 via-brand-coral/10 to-transparent border border-brand-honey/15 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="bg-brand-honey text-white p-3.5 rounded-full shadow-lg">
              <ShoppingBag className="w-6 h-6 fill-white" />
            </div>
            <div>
              <p className="text-brand-charcoal font-extrabold text-base mb-1">
                ¿Buscas más cosas para tus consentidos?
              </p>
              <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                ¡Tenemos platos slow-feeders, alimentos super premium, charque de llama deshidratado y peines! Haz clic para visitar el catálogo interactivo completo.
              </p>
            </div>
          </div>
          <button
            onClick={onNavigateToBoutique}
            className="w-full md:w-auto shrink-0 bg-[#253648] hover:bg-brand-charcoal text-white hover:text-brand-gold font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <span>Ver Catálogo Completo (Bs.)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
