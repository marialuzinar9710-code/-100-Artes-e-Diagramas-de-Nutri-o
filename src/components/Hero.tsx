import React, { useEffect } from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck } from 'lucide-react';


interface HeroProps {
  onScrollToOffer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToOffer }) => {
  useEffect(() => {
    // Ensure vplay script is loaded and component renders
    if (!document.querySelector('script[src*="vplay.min.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://player.vplay.com.br/vplay.min.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="hero" className="pt-4 pb-8 sm:pt-8 sm:pb-12 bg-white text-center">
      <div className="w-[94%] max-w-4xl mx-auto px-1 sm:px-4">
        {/* 01 — HEADLINE */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] mb-3 max-w-3xl mx-auto text-center text-slate-950">
          <span className="text-emerald-600">+100</span> Artes e Diagramas de{' '}
          <span className="text-emerald-600">Nutrição</span> Para Criar Conteúdo{' '}
          <span className="text-emerald-600">Profissional</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto mb-5 text-sm sm:text-base text-slate-600 leading-snug font-normal text-center">
          Kit digital de artes e diagramas de nutrição, prontos e editáveis para criar conteúdos profissionais para redes sociais.
        </p>

        {/* VSL Player (9:16) */}
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-slate-900/10 bg-black aspect-[9/16]">
          {React.createElement('vplay-player', {
            id: 'bd0c349c-8212-45ef-9714-a1c9ba696429',
            'aspect-ratio': '9/16',
            poster: 'https://video.vplay.com.br/users/147/media/884aae62-0bb9-44a8-bfbf-8dd0190339b5/poster/v1791938247215/poster.jpg',
            loading: 'eager',
            style: { width: '100%', height: '100%', display: 'block' }
          })}
        </div>

        {/* Primary CTA Button */}
        <div className="mt-5 flex flex-col items-center justify-center">
          <button
            onClick={onScrollToOffer}
            className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-700/25 hover:shadow-emerald-700/40 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>VER O QUE ESTÁ INCLUSO</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-slate-700 text-[11px] sm:text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>+100 Artes Prontas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>3 Bônus Inclusos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Acesso Vitalício</span>
          </div>
        </div>
      </div>
    </section>
  );
};
