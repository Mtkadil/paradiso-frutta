import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Leaf, ShieldCheck, Clock, Edit3 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-white border-y border-[#2D5A27]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image & Atmosphere */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF8F5]">
                <img
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80"
                  alt="Il banco e la cura della frutta fresca di Paradiso"
                  className="w-full h-[400px] sm:h-[460px] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative Pill */}
              <div className="absolute -bottom-5 -right-4 sm:right-6 bg-[#FAF8F5] border border-[#2D5A27]/15 rounded-2xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#2D5A27] text-white flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1E2B20]">Solo cose buone</p>
                    <p className="text-[11px] text-[#526654]">Dal campo alla tua tavola, senza scorciatoie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy & Editable Placeholder Section */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <span className="text-xs font-bold tracking-widest text-[#2D5A27] uppercase mb-2">
              Chi Siamo
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2B20] tracking-tight mb-6">
              Passione per la terra, cura nei dettagli e fiducia quotidiana.
            </h2>

            {/* Editable Content Container */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#2D5A27]/15 mb-8 w-full">
              <div className="flex items-center justify-between mb-3 text-xs font-semibold text-[#2D5A27]">
                <span className="flex items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5" />
                  Testo di presentazione (facilmente personalizzabile)
                </span>
                <span className="text-[11px] bg-white px-2 py-0.5 rounded-md border border-[#2D5A27]/10">
                  Placeholder
                </span>
              </div>

              <div className="space-y-3.5 text-base text-[#2C3E2D] leading-relaxed">
                <p>
                  <strong>{BUSINESS_INFO.name}</strong> nasce a Borgosesia con un obiettivo chiaro e sincero: portare sulla tavola delle persone frutta e verdura scelta ogni mattina con la stessa attenzione con cui la sceglieremmo per la nostra famiglia.
                </p>
                <p>
                  Non crediamo nei prodotti standardizzati e senza profumo: crediamo nel rispetto delle stagioni, nel colore vivo dei pomodori maturati al sole, nella dolcezza autentica delle arance e nella croccantezza degli ortaggi appena colti.
                </p>
                <p>
                  Che tu venga a trovarci nella nostra bottega a Borgosesia o al banco nei mercati del territorio, troverai sempre un sorriso sincero, un consiglio su cosa cucinare stasera e la trasparenza di chi ama davvero il proprio mestiere.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E2B20]">Scelta all'alba</h4>
                  <p className="text-xs text-[#526654] mt-0.5 leading-relaxed">Selezioniamo i prodotti ogni mattina per garantire la massima durata.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center shrink-0 mt-0.5">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E2B20]">Stagionalità reale</h4>
                  <p className="text-xs text-[#526654] mt-0.5 leading-relaxed">Mangiare secondo natura significa gusto pieno e rispetto dell'ambiente.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E2B20]">Rapporto umano</h4>
                  <p className="text-xs text-[#526654] mt-0.5 leading-relaxed">Il consiglio giusto per ogni preparazione, dal crudo alle cotture lente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
