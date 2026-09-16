import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Tag, Info, ArrowUpRight } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/content';
import { CategoryType, ProductItem } from '../types';

export const ProductsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('tutti');

  const categories: { id: CategoryType; label: string; count: number }[] = [
    { id: 'tutti', label: 'Tutti i prodotti', count: PRODUCTS_CATALOG.length },
    {
      id: 'frutta',
      label: 'Frutta',
      count: PRODUCTS_CATALOG.filter((p) => p.category === 'frutta').length,
    },
    {
      id: 'verdura',
      label: 'Verdura',
      count: PRODUCTS_CATALOG.filter((p) => p.category === 'verdura').length,
    },
    {
      id: 'frutta-stagione',
      label: 'Frutta di stagione',
      count: PRODUCTS_CATALOG.filter((p) => p.category === 'frutta' && p.isSeasonal).length,
    },
    {
      id: 'verdura-stagione',
      label: 'Verdura di stagione',
      count: PRODUCTS_CATALOG.filter((p) => p.category === 'verdura' && p.isSeasonal).length,
    },
  ];

  const filteredProducts = PRODUCTS_CATALOG.filter((product) => {
    if (selectedCategory === 'tutti') return true;
    if (selectedCategory === 'frutta') return product.category === 'frutta';
    if (selectedCategory === 'verdura') return product.category === 'verdura';
    if (selectedCategory === 'frutta-stagione') {
      return product.category === 'frutta' && product.isSeasonal;
    }
    if (selectedCategory === 'verdura-stagione') {
      return product.category === 'verdura' && product.isSeasonal;
    }
    return true;
  });

  return (
    <section id="prodotti" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#2D5A27] uppercase">
            I Nostri Prodotti
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1E2B20] tracking-tight mt-2 mb-4">
            Dalla terra alla tavola, nel rispetto della natura.
          </h2>
          <p className="text-base sm:text-lg text-[#3A4D3B] leading-relaxed">
            Selezioniamo solo frutta e verdura di prima scelta. Il nostro assortimento cambia continuamente seguendo il calendario delle stagioni e i migliori raccolti dei mercati generali e dei produttori locali.
          </p>
        </div>

        {/* Category Pills / Filter bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#2D5A27] text-white shadow-md scale-102'
                    : 'bg-white text-[#2C3E2D] border border-[#2D5A27]/15 hover:bg-[#EAE5DC]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#EBF3E8] text-[#2D5A27]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group bg-white rounded-2xl overflow-hidden border border-[#2D5A27]/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden bg-[#EAE5DC]">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category & Seasonal Tags */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2D5A27]/90 text-white backdrop-blur-xs">
                      {product.category === 'frutta' ? 'Frutta' : 'Verdura'}
                    </span>
                    {product.isSeasonal && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E89234] text-white shadow-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Di Stagione</span>
                      </span>
                    )}
                  </div>

                  {product.tag && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-white/95 text-[#1E2B20] text-xs font-semibold shadow-xs">
                      {product.tag}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#1E2B20] mb-2 leading-snug group-hover:text-[#2D5A27] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#526654] leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#FAF8F5] space-y-2">
                    {/* Origin & Season Info */}
                    <div className="flex items-center justify-between text-xs text-[#6B7D6D]">
                      <span>Provenienza:</span>
                      <span className="font-medium text-[#1E2B20]">{product.origin}</span>
                    </div>

                    {product.seasonName && (
                      <div className="flex items-center justify-between text-xs text-[#6B7D6D]">
                        <span>Periodo ideale:</span>
                        <span className="font-medium text-[#2D5A27]">{product.seasonName}</span>
                      </div>
                    )}

                    <div className="pt-2 flex items-center justify-between text-xs font-medium text-[#2D5A27]">
                      <span className="italic">Disponibile al banco</span>
                      <a
                        href="#contatti"
                        className="inline-flex items-center gap-0.5 hover:underline font-semibold"
                      >
                        Chiedi info
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Note on Prices & Freshness (Explicitly respecting: Non inserire prezzi inventati) */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#2D5A27]/15 max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-[#3A4D3B]">
          <div className="w-10 h-10 rounded-xl bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-[#1E2B20] mb-0.5">Trasparenza e freschezza quotidiana</h4>
            <p className="text-xs text-[#526654] leading-relaxed">
              I prezzi non sono fissi online perché seguono l'andamento reale dei mercati ortofrutticoli e le disponibilità dei raccolti giorno per giorno. In negozio e ai mercati troverai sempre prezzi chiari, onesti e cartellini trasparenti.
            </p>
          </div>
          <a
            href="#contatti"
            className="shrink-0 px-4 py-2 rounded-xl text-xs font-semibold bg-[#FAF8F5] border border-[#2D5A27]/20 text-[#2D5A27] hover:bg-[#EBF3E8] transition-colors"
          >
            Contattaci per disponibilità
          </a>
        </div>
      </div>
    </section>
  );
};
