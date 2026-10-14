import React from 'react';
import { Gift, BookOpen, Calendar, CheckSquare } from 'lucide-react';
import bonus1Img from '../assets/images/bonus_guide_pdf_1790543447547.jpg';
import bonus2Img from '../assets/images/bonus_calendar_1790543458069.jpg';
import bonus4Img from '../assets/images/bonus_checklist_1790543478891.jpg';

interface BonusData {
  number: string;
  title: string;
  desc: string;
  value: string;
  image: string;
  icon: React.ElementType;
}

const NUTRITION_BONUSES: BonusData[] = [
  {
    number: 'BÔNUS #01',
    title: 'Guia PDF de Conteúdo para Nutricionistas',
    desc: 'Ideias práticas para transformar os diagramas em posts, carrosséis e conteúdos educativos de alta autoridade.',
    value: 'R$ 27',
    image: bonus1Img,
    icon: BookOpen,
  },
  {
    number: 'BÔNUS #02',
    title: 'Calendário de Conteúdo',
    desc: 'Calendário organizado com sugestões para manter uma rotina de publicações consistente sem bloqueios criativos.',
    value: 'R$ 37',
    image: bonus2Img,
    icon: Calendar,
  },
  {
    number: 'BÔNUS #03',
    title: 'Checklist de Conteúdo',
    desc: 'Checklist em PDF para organizar sua produção e publicação passo a passo, do planejamento à postagem.',
    value: 'R$ 17',
    image: bonus4Img,
    icon: CheckSquare,
  },
];

export const Bonuses: React.FC = () => {
  return (
    <section id="bonus" className="py-8 sm:py-10 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="w-[94%] max-w-5xl mx-auto px-1 sm:px-4 text-center">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
          <Gift className="w-3.5 h-3.5 text-emerald-600" />
          <span>03 — Bônus Exclusivos</span>
        </div>

        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1">
          Materiais Complementares Para Acelerar Seus Resultados
        </h2>

        <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-600 mb-6 leading-normal">
          Pensados para tornar sua rotina ainda mais leve, rápida e produtiva no consultório e no digital.
        </p>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {NUTRITION_BONUSES.map((bonus, idx) => {
            const Icon = bonus.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col text-left group"
              >
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-emerald-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
                    GRÁTIS
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider mb-1">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{bonus.number}</span>
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1.5 leading-snug group-hover:text-emerald-700 transition-colors">
                      {bonus.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {bonus.desc}
                    </p>
                  </div>

                  {/* Pricing Bar */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 line-through font-medium">
                      Valor: {bonus.value}
                    </span>
                    <span className="text-emerald-600 font-black uppercase text-[11px]">
                      Bônus Incluso
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
