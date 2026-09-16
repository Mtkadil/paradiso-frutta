import React, { useState } from 'react';
import { Phone, MessageSquare, Instagram, Facebook, Mail, Send, Check, Sparkles, Copy } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryType, setInquiryType] = useState('Richiesta disponibilità');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const contactChannels = [
    {
      id: 'phone',
      title: 'Telefono Fisso / Mobile',
      value: BUSINESS_INFO.phonePlaceholder,
      description: 'Per chiamate dirette, informazioni sugli arrivi del mattino o conferme veloci.',
      icon: Phone,
      color: 'bg-[#2D5A27]',
      isPlaceholder: true,
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Bottega',
      value: BUSINESS_INFO.whatsappPlaceholder,
      description: 'Scrivici per sapere cosa c’è di fresco o richiedere la preparazione della tua spesa.',
      icon: MessageSquare,
      color: 'bg-[#25D366]',
      isPlaceholder: true,
    },
    {
      id: 'instagram',
      title: 'Instagram',
      value: BUSINESS_INFO.instagramPlaceholder,
      description: 'Foto giornaliere delle cassette di frutta, primizie del mercato e consigli di stagione.',
      icon: Instagram,
      color: 'bg-[#E1306C]',
      isPlaceholder: true,
    },
    {
      id: 'facebook',
      title: 'Facebook',
      value: BUSINESS_INFO.facebookPlaceholder,
      description: 'Aggiornamenti sulle presenze nei mercati della settimana e novità in negozio.',
      icon: Facebook,
      color: 'bg-[#1877F2]',
      isPlaceholder: true,
    },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSimulateSend = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contatti" className="py-24 bg-white border-t border-[#2D5A27]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#2D5A27] uppercase">
            Contatti & Canali
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1E2B20] tracking-tight mt-2 mb-4">
            Mettiti in contatto con noi.
          </h2>
          <p className="text-base sm:text-lg text-[#3A4D3B] leading-relaxed">
            Siamo a tua disposizione per informazioni sulla frutta di stagione, ordini speciali di cassette miste o per sapere dove trovarci al mercato.
          </p>
        </div>

        {/* Channels Grid (Clean, Touch-friendly, No invented numbers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            const isCopied = copiedField === channel.id;

            return (
              <div
                key={channel.id}
                className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#2D5A27]/15 flex flex-col justify-between hover:border-[#2D5A27]/30 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#2D5A27]/15 flex items-center justify-center text-[#2D5A27] shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    {channel.isPlaceholder && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#FFF3E0] text-[#D97706] font-semibold">
                        Placeholder
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#1E2B20] mb-1">
                    {channel.title}
                  </h3>
                  <p className="text-xs text-[#526654] leading-relaxed mb-4">
                    {channel.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2D5A27]/10">
                  <div className="flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-[#2D5A27]/10">
                    <span className="text-xs font-mono font-medium text-[#1E2B20] truncate">
                      {channel.value}
                    </span>
                    <button
                      onClick={() => handleCopy(channel.value, channel.id)}
                      className="text-xs text-[#2D5A27] hover:text-[#22441D] p-1 font-semibold flex items-center gap-1 shrink-0 ml-2"
                      title="Copia placeholder"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Message / Special Request Simulator Box */}
        <div className="max-w-3xl mx-auto bg-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#2D5A27]/15 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#2D5A27] text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1E2B20]">
                Vuoi preparare una cassetta o chiedere la disponibilità?
              </h3>
              <p className="text-xs text-[#526654]">
                Compila il modulo per preparare una richiesta rapida da inviare alla bottega
              </p>
            </div>
          </div>

          {formSent ? (
            <div className="p-6 rounded-2xl bg-[#EBF3E8] border border-[#2D5A27]/20 text-center space-y-2">
              <Check className="w-8 h-8 text-[#2D5A27] mx-auto" />
              <h4 className="font-bold text-base text-[#1E2B20]">Bozza richiesta pronta</h4>
              <p className="text-xs text-[#526654]">
                Nel prototipo definitivo questo form collegherà direttamente l'invio via WhatsApp o email aziendale con il numero reale del titolare.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSimulateSend} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1E2B20] mb-1.5">
                    Il tuo Nome
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Es. Maria Rossi"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#2D5A27]/15 text-sm text-[#1E2B20] placeholder-[#8C9E8E] focus:outline-hidden focus:ring-2 focus:ring-[#2D5A27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1E2B20] mb-1.5">
                    Motivo del contatto
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#2D5A27]/15 text-sm text-[#1E2B20] focus:outline-hidden focus:ring-2 focus:ring-[#2D5A27]"
                  >
                    <option value="Richiesta disponibilità">Richiesta disponibilità di stagione</option>
                    <option value="Prenotazione cassetta">Prenotazione cassetta frutta/verdura mista</option>
                    <option value="Presenza al mercato">Conferma presenza al mercato oggi</option>
                    <option value="Altro">Altra richiesta</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E2B20] mb-1.5">
                  Messaggio o prodotti desiderati
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Es. Vorrei sapere se sono arrivate le arance tarocco e preparare 5kg di frutta mista..."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#2D5A27]/15 text-sm text-[#1E2B20] placeholder-[#8C9E8E] focus:outline-hidden focus:ring-2 focus:ring-[#2D5A27]"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] text-[#8C9E8E] text-center sm:text-left">
                  Placeholder prototipale: non invia dati sensibili a server esterni
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#2D5A27] hover:bg-[#22441D] transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Invia messaggio simulato</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
