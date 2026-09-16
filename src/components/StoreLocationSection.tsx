import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ExternalLink, Navigation, Clock, ShieldCheck, Car, Footprints } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const StoreLocationSection: React.FC = () => {
  return (
    <section id="dove-siamo" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#2D5A27] uppercase">
            La Nostra Bottega
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1E2B20] tracking-tight mt-2 mb-4">
            Dove Trovarci a Borgosesia
          </h2>
          <p className="text-base sm:text-lg text-[#3A4D3B] leading-relaxed">
            Vieni a trovarci nel cuore della Valsesia. Ti aspettiamo per farti scoprire i migliori arrivi del giorno e aiutarti a scegliere frutta e verdura con calma e simpatia.
          </p>
        </div>

        {/* Store Detail Box & Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Column */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#2D5A27]/15 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF3E8] text-[#2D5A27] text-xs font-semibold mb-6">
                <MapPin className="w-4 h-4 text-[#2D5A27]" />
                <span>Piemonte • Valsesia</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1E2B20] mb-4">
                {BUSINESS_INFO.name} – {BUSINESS_INFO.subtitle}
              </h3>

              {/* Address Box */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#2D5A27]/10 mb-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-[#526654]">
                  <span className="font-semibold text-[#1E2B20] flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-[#2D5A27]" />
                    Località & Indirizzo
                  </span>
                  <span className="bg-white px-2 py-0.5 rounded-md border border-[#2D5A27]/10 text-[10px] text-[#D97706] font-semibold">
                    Da confermare
                  </span>
                </div>
                <p className="text-lg font-bold text-[#1E2B20]">
                  {BUSINESS_INFO.city} ({BUSINESS_INFO.province}), {BUSINESS_INFO.region}
                </p>
                <p className="text-sm text-[#526654]">
                  Indirizzo: <span className="font-medium text-[#1E2B20]">[Indirizzo esatto del negozio da confermare]</span>
                </p>
              </div>

              {/* Opening Hours */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#2D5A27]/10 mb-8 space-y-2">
                <div className="flex items-center justify-between text-xs text-[#526654]">
                  <span className="font-semibold text-[#1E2B20] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#2D5A27]" />
                    Orari Bottega
                  </span>
                  <span className="bg-white px-2 py-0.5 rounded-md border border-[#2D5A27]/10 text-[10px] text-[#D97706] font-semibold">
                    Placeholder
                  </span>
                </div>
                <div className="text-sm text-[#2C3E2D] space-y-1">
                  <p className="flex justify-between">
                    <span className="font-medium">{BUSINESS_INFO.openingHoursPlaceholder.days}:</span>
                    <span>{BUSINESS_INFO.openingHoursPlaceholder.morning} / {BUSINESS_INFO.openingHoursPlaceholder.afternoon}</span>
                  </p>
                  <p className="text-xs text-[#8C9E8E] italic pt-1">
                    {BUSINESS_INFO.openingHoursPlaceholder.closed}
                  </p>
                </div>
              </div>

              {/* Additional convenient points */}
              <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-[#526654]">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF8F5]">
                  <Car className="w-4 h-4 text-[#2D5A27] shrink-0" />
                  <span>Parcheggi nelle vicinanze</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF8F5]">
                  <Footprints className="w-4 h-4 text-[#2D5A27] shrink-0" />
                  <span>Comodo da raggiungere a piedi</span>
                </div>
              </div>
            </div>

            {/* MANDATORY GOOGLE MAPS BUTTON */}
            <div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="open-google-maps-btn"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold text-white bg-[#2D5A27] hover:bg-[#22441D] transition-all shadow-md hover:shadow-xl group"
              >
                <MapPin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span>Apri su Google Maps</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>
              <p className="text-center text-[11px] text-[#8C9E8E] mt-2">
                Apre direttamente la scheda ufficiale dell'attività su Google Maps
              </p>
            </div>
          </div>

          {/* Visual Map Representation */}
          <div className="lg:col-span-6 bg-white rounded-3xl overflow-hidden border border-[#2D5A27]/15 shadow-sm flex flex-col">
            {/* Visual Header / Map simulation */}
            <div className="relative h-[320px] sm:h-[380px] bg-[#E8E4DC] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1000&q=80"
                alt="Vista paesaggistica di Borgosesia in Valsesia e territorio piemontese"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#1E2B20]/25 backdrop-brightness-95" />

              {/* Pin Overlay Card */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-2xl max-w-sm text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#2D5A27] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#1E2B20]">
                    Paradiso – Frutta & Verdura
                  </h4>
                  <p className="text-xs text-[#526654] mt-1 mb-4">
                    Borgosesia (VC) • Piemonte
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#2D5A27] hover:bg-[#22441D] transition-colors"
                  >
                    <span>Naviga con Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom info banner */}
            <div className="p-6 bg-white border-t border-[#2D5A27]/10 flex-1 flex flex-col justify-center">
              <div className="flex items-start gap-3 text-xs text-[#3A4D3B]">
                <ShieldCheck className="w-5 h-5 text-[#2D5A27] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#1E2B20]">Posizione Geografica Verificata:</span>
                  <p className="text-[#526654] mt-0.5 leading-relaxed">
                    Il profilo Google Maps collegato a questo pulsante indirizza i clienti direttamente alle coordinate e alla scheda di Paradiso Frutta & Verdura a Borgosesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
