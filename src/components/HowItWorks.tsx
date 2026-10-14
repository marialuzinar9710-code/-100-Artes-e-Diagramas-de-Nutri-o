import React from 'react';
import { ShoppingCart, MailCheck, Palette, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onScrollToOffer: () => void;
}

const STEPS = [
  {
    step: '1',
    title: 'Faça seu pedido',
    desc: 'Escolha o plano que deseja (Básico ou Premium) e finalize o pagamento com segurança via Pix ou cartão.',
    icon: ShoppingCart,
  },
  {
    step: '2',
    title: 'Receba o acesso',
    desc: 'Após a confirmação do pagamento, você recebe no seu e-mail as instruções imediatas para acessar todo o acervo digital.',
    icon: MailCheck,
  },
  {
    step: '3',
    title: 'Comece a criar',
    desc: 'Escolha os materiais que deseja utilizar e comece a produzir seus posts, carrosséis, lâminas e reels com total praticidade.',
    icon: Palette,
  },
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onScrollToOffer }) => {
  return (
    <section id="como-recebe" className="py-16 sm:py-24 bg-white border-b border-slate-100 text-center">
      <div className="max-w-5xl mx-auto px-4">
        {/* Tag */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
          <span>08 — Simples e Rápido</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
          Como Você Recebe
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-600 mb-12">
          Em menos de 2 minutos você já estará com o acervo completo em mãos.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all group"
              >
                {/* Step badge */}
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white font-black text-xl flex items-center justify-center mb-6 shadow-md shadow-emerald-600/30 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>

                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
