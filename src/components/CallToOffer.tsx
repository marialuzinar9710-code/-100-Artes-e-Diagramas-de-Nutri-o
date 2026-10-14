import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface CallToOfferProps {
  onScrollToOffer: () => void;
}

export const CallToOffer: React.FC<CallToOfferProps> = ({ onScrollToOffer }) => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 text-white text-center relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-300 via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/60 border border-emerald-400/40 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>07 — Chamada Para a Oferta</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Seu próximo conteúdo pode começar aqui.
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-emerald-100/90 leading-relaxed mb-8">
          Tenha <strong>+100 Artes e Diagramas de Nutrição</strong> para criar conteúdos profissionais de forma mais rápida e prática. Escolha seu plano e comece agora.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToOffer}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-emerald-50 text-emerald-900 font-black text-base rounded-2xl shadow-2xl hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>QUERO MEU KIT POR R$ 12,90</span>
            <ArrowRight className="w-5 h-5 text-emerald-700" />
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200/80 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            <span>Sem mensalidades</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            <span>Acesso vitalício</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            <span>Download imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
};
