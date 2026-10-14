import React from 'react';

export const AboutCreator: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 bg-white text-slate-900 border-t border-b border-slate-100">
      <div className="w-[94%] max-w-4xl mx-auto px-1 sm:px-4">
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-7 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
            {/* Text Content */}
            <div className="md:col-span-7 text-left space-y-3">
              <div>
                <h2 className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">
                  Quem Criou Esse Material
                </h2>
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-700 mt-1">
                  Conteúdo desenvolvido para nutricionistas
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2 font-normal">
                <p>
                  Criamos este material pensando na rotina de quem trabalha com nutrição e precisa produzir conteúdos profissionais para Instagram e outras redes sociais, mas não quer perder horas criando cada arte do zero.
                </p>
                <p>
                  Reunimos mais de 100 artes e diagramas sobre alimentação equilibrada, proteínas, carboidratos, gorduras, fibras, vitaminas, hidratação, porções e muito mais — facilitando sua rotina de criação para deixar suas publicações muito mais profissionais.
                </p>
                <p className="text-slate-600">
                  Esse é o tipo de material pensado para economizar tempo real e destravar a sua produção de conteúdo no dia a dia.
                </p>
              </div>

              {/* Quote with green bar */}
              <div className="border-l-4 border-emerald-600 pl-3 py-1 bg-emerald-50 rounded-r-lg">
                <p className="text-xs sm:text-sm font-semibold italic text-slate-800 leading-snug">
                  &ldquo;Esse kit é o que eu gostaria de ter tido quando comecei.&rdquo;
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[240px] sm:max-w-[260px] rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-200 aspect-[3/4] relative">
                <img
                  src="/diagramaspele/assets/asset-795a880bff.webp"
                  alt="Criadora do material no consultório"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
