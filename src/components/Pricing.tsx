import React, { useState, useEffect } from 'react';
import { Zap, Check, Sparkles, Lock, CreditCard, ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(360);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 360));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <section id="oferta" className="py-8 sm:py-12 bg-white text-center">
      <div className="w-[94%] max-w-5xl mx-auto px-1 sm:px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
          <Zap className="w-3.5 h-3.5" />
          <span>04 & 05 — Escolha Seu Plano</span>
        </div>

        {/* Headline & Subtitle */}
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1">
          Invista na Praticidade do Seu Dia a Dia
        </h2>
        <p className="text-emerald-700 font-semibold tracking-wider text-xs sm:text-sm uppercase mb-4">
          Pagamento único. Acesso vitalício imediato. Sem mensalidades.
        </p>

        {/* Timer Box */}
        <div className="max-w-md mx-auto mb-6 sm:mb-8 bg-emerald-50/70 border border-emerald-200/90 rounded-xl p-2.5 sm:p-3 shadow-xs flex items-center justify-between gap-2">
          <span className="text-xs sm:text-sm font-bold text-slate-800 text-left pl-1">
            Preço promocional encerra em:
          </span>
          <div className="flex items-center gap-1.5 font-mono font-black text-white text-sm sm:text-base">
            <span className="bg-emerald-700 px-2 py-1 rounded-md">{pad(hours)}h</span>
            <span className="text-emerald-800 font-bold">:</span>
            <span className="bg-emerald-700 px-2 py-1 rounded-md">{pad(minutes)}m</span>
            <span className="text-emerald-800 font-bold">:</span>
            <span className="bg-emerald-700 px-2 py-1 rounded-md">{pad(seconds)}s</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch max-w-4xl mx-auto">
          {/* PLANO BÁSICO */}
          <div className="relative bg-white rounded-2xl border-2 border-slate-200 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all text-left">
            <div>
              <div className="text-center pb-3 border-b border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Pacote Essencial
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                  PLANO BÁSICO
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  De <span className="line-through text-red-500 font-semibold">R$ 47</span> por apenas
                </p>
                <div className="flex items-baseline justify-center gap-1 mt-0.5">
                  <span className="text-sm font-bold text-slate-600">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    12,90
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Pagamento Único • Acesso Vitalício
                </p>
              </div>

              <div className="py-4 space-y-2.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>
                    <strong>+100 Artes e Diagramas de Nutrição</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Acesso imediato</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Material digital em PDF pronto</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Bônus #01 — Guia de Conteúdo</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Bônus #02 — Calendário de Conteúdo</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Acesso vitalício</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <a
                href="https://pay.nerix.com.br/n8n331n"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-xl shadow-md shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all text-center cursor-pointer hover:scale-[1.01]"
              >
                QUERO O PLANO BÁSICO
              </a>
            </div>
          </div>

          {/* PLANO PREMIUM */}
          <div className="relative bg-white rounded-2xl border-2 border-emerald-500 p-5 sm:p-6 flex flex-col justify-between shadow-xl shadow-emerald-600/10 hover:shadow-emerald-600/20 transition-all text-left">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center justify-center whitespace-nowrap">
              <span>⭐ MAIS VENDIDO</span>
            </div>

            <div>
              <div className="text-center pb-3 border-b border-emerald-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                  Kit Completo + Arquivos Editáveis
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-0.5">
                  PLANO PREMIUM
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  De <span className="line-through text-red-500 font-semibold">R$ 97</span> por apenas
                </p>
                <div className="flex items-baseline justify-center gap-1 mt-0.5">
                  <span className="text-sm font-bold text-emerald-700">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    22,90
                  </span>
                </div>
                <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">
                  Pagamento Único • Acesso Vitalício
                </p>
              </div>

              <div className="py-4 space-y-2.5 text-xs sm:text-sm text-slate-800">
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Tudo do Plano Básico incluso</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>
                    <strong>+100 Artes e Diagramas de Nutrição</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-emerald-50 p-2 rounded-lg border border-emerald-200/90">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-emerald-950 font-bold text-xs sm:text-sm">
                    Arquivos editáveis no Canva (textos, cores e logos)
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Bônus #01 — Guia de Conteúdo</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Bônus #02 — Calendário de Conteúdo</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Bônus #03 — Checklist de Conteúdo</strong>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Atualizações futuras do material</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://pay.nerix.com.br/yv9ezza"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-700/30 hover:shadow-emerald-700/50 transition-all text-center cursor-pointer"
              >
                QUERO O PLANO PREMIUM
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-8 pt-4 border-t border-slate-100 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pagamento 100% Seguro</span>
          </div>
          <div className="flex items-center gap-1">
            <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pix ou Cartão</span>
          </div>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Garantia de 7 Dias</span>
          </div>
        </div>
      </div>
    </section>
  );
};
