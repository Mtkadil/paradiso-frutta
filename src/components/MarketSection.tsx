import React from 'react';
import { motion } from 'motion/react';
import { Store, ShoppingBag, Calendar, Clock, MapPin, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, MARKET_SCHEDULE_PLACEHOLDERS } from '../data/content';

export const MarketSection: React.FC = () => {
  return (
    <section id="mercati" className="py-24 bg-white border-b border-[#2D5A27]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#2D5A27] uppercase">
            La Doppia Presenza
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1E2B20] tracking-tight mt-2 mb-4">
            Dal negozio di fiducia ai mercati del territorio.
          </h2>
          <p className="text-base sm:text-lg text-[#3A4D3B] leading-relaxed">
            Siamo presenti con la stessa passione sia nel nostro punto vendita a Borgosesia, sia con i nostri banchi nei mercati rionali e settimanali.
          </p>
        </div>

        {/* Dual Core Pillars: Negozio vs Mercati */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Pillar 1: Negozio Fisso */}
          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-3xl p-8 border border-[#2D5A27]/15 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#2D5A27]/5 rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3E8] text-[#2D5A27] text-xs font-bold uppercase tracking-wider mb-4">
                <Store className="w-4 h-4" />
                <span>Punto Vendita Fisso</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1E2B20] mb-3">
                Il Negozio a Borgosesia
              </h3>
              <p className="text-sm text-[#3A4D3B] leading-relaxed mb-6">
                La bottega accogliente per la tua spesa quotidiana: consigli personalizzati, frutta matura al punto giusto e la possibilità di scegliere con calma ogni singolo frutto o verdura.
              </p>

              {/* Store details with editable placeholders */}
              <div className="space-y-3 bg-white p-5 rounded-2xl border border-[#2D5A27]/10 mb-6">
                <div className="flex items-start gap-3 text-xs">
                  <MapPin className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1E2B20]">Indirizzo Bottega:</span>
                    <p className="text-[#526654]">{BUSINESS_INFO.addressPlaceholder}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <Clock className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1E2B20]">Orari di apertura indicativi:</span>
                    <p className="text-[#526654]">
                      {BUSINESS_INFO.openingHoursPlaceholder.days}: {BUSINESS_INFO.openingHoursPlaceholder.morning} e {BUSINESS_INFO.openingHoursPlaceholder.afternoon}
                    </p>
                    <p className="text-[11px] text-[#8C9E8E] italic mt-0.5">
                      [Placeholder: orari specifici da confermare]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#dove-siamo"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm font-semibold bg-[#2D5A27] text-white hover:bg-[#22441D] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Vedi posizione esatta & Mappa</span>
            </a>
          </div>

          {/* Pillar 2: I Mercati del Territorio */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-8 border border-[#2D5A27]/15 flex flex-col justify-between relative">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E89234]/15 text-[#C06D14] text-xs font-bold uppercase tracking-wider mb-4">
                <ShoppingBag className="w-4 h-4" />
                <span>La Tradizione della Piazza</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1E2B20] mb-3">
                Presenza nei Mercati Locali
              </h3>
              <p className="text-sm text-[#3A4D3B] leading-relaxed mb-6">
                Portiamo l'ortofrutta di Paradiso direttamente nelle piazze e nei mercati settimanali del Piemonte. L'energia del mercato, la freschezza appena scaricata dalle cassette e la consuetudine dell'incontro.
              </p>

              {/* Customizable Market Calendar Table/Cards */}
              <div className="space-y-3.5 mb-6">
                <div className="flex items-center justify-between text-xs font-semibold text-[#526654] px-1">
                  <span>Calendario Tappe Settimanali</span>
                  <span className="text-[#2D5A27] bg-white px-2 py-0.5 rounded-md border border-[#2D5A27]/10 text-[11px]">
                    Struttura Pronta per le Tue Date
                  </span>
                </div>

                {MARKET_SCHEDULE_PLACEHOLDERS.map((stop) => (
                  <div
                    key={stop.id}
                    className="p-4 rounded-2xl bg-white border border-[#2D5A27]/15 shadow-xs hover:border-[#2D5A27]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#EBF3E8] text-[#2D5A27] flex flex-col items-center justify-center font-bold shrink-0">
                        <span className="text-xs uppercase">{stop.day.substring(0, 3)}</span>
                        <Calendar className="w-3.5 h-3.5 mt-0.5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-base text-[#1E2B20]">
                            {stop.day} • {stop.city}
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#FFF3E0] text-[#D97706] font-semibold">
                            Placeholder
                          </span>
                        </div>
                        <p className="text-xs text-[#526654] mt-0.5">{stop.location}</p>
                        <p className="text-[11px] text-[#8C9E8E]">{stop.notes}</p>
                      </div>
                    </div>

                    <div className="sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-[#FAF8F5]">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2D5A27] bg-[#EBF3E8] px-2.5 py-1 rounded-lg">
                        <Clock className="w-3.5 h-3.5" />
                        {stop.hours}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Note on upcoming markets */}
            <div className="p-4 rounded-xl bg-white border border-dashed border-[#2D5A27]/25 text-xs text-[#526654] flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#2D5A27] shrink-0" />
              <span>
                <strong>Nota per il titolare:</strong> In qualsiasi momento sarà possibile sostituire queste schede con i giorni, le piazze e gli orari ufficiali dei mercati in cui esponete.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
