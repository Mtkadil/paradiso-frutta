import React from 'react';
import { X, CheckCircle2, AlertCircle, FileCode, MapPin, Phone, Calendar, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface PlaceholderGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlaceholderGuideModal: React.FC<PlaceholderGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const itemsToComplete = [
    {
      title: 'Indirizzo del negozio a Borgosesia',
      current: BUSINESS_INFO.addressPlaceholder,
      file: 'src/data/content.ts',
      status: 'Mancante / Da confermare',
      icon: MapPin,
      note: 'Via e numero civico esatto del punto vendita a Borgosesia (VC).',
    },
    {
      title: 'Orari di apertura del negozio',
      current: `${BUSINESS_INFO.openingHoursPlaceholder.days} (${BUSINESS_INFO.openingHoursPlaceholder.morning} / ${BUSINESS_INFO.openingHoursPlaceholder.afternoon})`,
      file: 'src/data/content.ts',
      status: 'Placeholder indicativo',
      icon: Clock,
      note: 'Orari mattutini e pomeridiani di apertura effettivi della bottega.',
    },
    {
      title: 'Calendario presenze ai mercati locali',
      current: 'Martedì, Giovedì, Sabato [Placeholder]',
      file: 'src/data/content.ts',
      status: 'Placeholder strutturato',
      icon: Calendar,
      note: 'Elenco dei giorni della settimana, piazze e orari in cui il banco è presente ai mercati.',
    },
    {
      title: 'Numero di Telefono & WhatsApp',
      current: `${BUSINESS_INFO.phonePlaceholder} / ${BUSINESS_INFO.whatsappPlaceholder}`,
      file: 'src/data/content.ts',
      status: 'Mancante',
      icon: Phone,
      note: 'Numero fisso o mobile per consentire ai clienti di chiamare o inviare messaggi.',
    },
    {
      title: 'Account Social Network (Instagram / Facebook)',
      current: `${BUSINESS_INFO.instagramPlaceholder} / ${BUSINESS_INFO.facebookPlaceholder}`,
      file: 'src/data/content.ts',
      status: 'Placeholder',
      icon: Sparkles,
      note: 'Link o handle delle pagine social ufficiali di Paradiso Frutta & Verdura.',
    },
    {
      title: 'Eventuale testo di presentazione Chi Siamo',
      current: 'Testo introduttivo su valori, freschezza e cura',
      file: 'src/components/AboutSection.tsx',
      status: 'Bozza elegante pronta',
      icon: FileCode,
      note: 'Facoltativo: se desiderate aggiungere una frase sul vostro percorso o fondazione.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#2D5A27]/20 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-[#2D5A27]/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#EBF3E8] text-[#2D5A27] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-[#1E2B20]">
                Riepilogo Dati da Completare
              </h3>
              <p className="text-xs text-[#526654]">
                Guida per il titolare di Paradiso – Frutta & Verdura
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#526654] hover:text-[#1E2B20] hover:bg-[#FAF8F5] transition-colors"
            aria-label="Chiudi finestra"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-4">
          <p className="text-sm text-[#3A4D3B] leading-relaxed">
            Come da richiesta, <strong>non abbiamo inventato alcuna informazione aziendale non fornita</strong>. Tutte le sezioni sono state costruite con architettura pulita e centralizzata nel file <code className="bg-[#FAF8F5] px-2 py-0.5 rounded-sm text-[#2D5A27] font-mono text-xs">src/data/content.ts</code>.
          </p>

          <div className="space-y-3">
            {itemsToComplete.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#2D5A27]/15 flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white text-[#2D5A27] border border-[#2D5A27]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#1E2B20]">{item.title}</h4>
                      <p className="text-xs text-[#526654] mt-0.5">{item.note}</p>
                      <p className="text-[11px] font-mono text-[#8C9E8E] mt-1 bg-white px-2 py-1 rounded-md border border-[#2D5A27]/10 inline-block">
                        Valore attuale: {item.current}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#FFF3E0] text-[#D97706] self-start shrink-0">
                    {item.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-4 border-t border-[#2D5A27]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-[#2D5A27] text-white hover:bg-[#22441D] transition-colors"
          >
            Ho capito, chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
