import React from 'react';
import { ArrowDown, ShieldCheck, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onScrollToOffer: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onScrollToOffer }) => (
  <section className="py-8 sm:py-10 bg-emerald-950 text-white text-center">
    <div className="w-[94%] max-w-3xl mx-auto px-1 sm:px-4">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-[11px] font-bold uppercase tracking-wider mb-2">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Acesso Imediato</span>
      </div>
      <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight mb-2">
        Comece a Criar Conteúdos Profissionais Hoje Mesmo
      </h2>
      <p className="max-w-xl mx-auto text-xs sm:text-sm text-emerald-100/90 mb-5 leading-normal">
        Tenha em mãos o acervo com +100 Artes e Diagramas de Nutrição e economize horas de trabalho.
      </p>
      <button
        onClick={onScrollToOffer}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all cursor-pointer"
      >
        <span>QUERO ESCOLHER MEU PLANO</span>
        <ArrowDown className="w-4 h-4" />
      </button>
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-emerald-300/80">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span>7 dias de garantia incondicional • Pagamento 100% seguro</span>
      </div>
    </div>
  </section>
);
