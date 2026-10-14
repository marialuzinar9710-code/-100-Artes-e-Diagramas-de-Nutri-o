import React from 'react';
import { Clock, Sparkles, CheckCircle2, TrendingUp, HeartHandshake, Zap } from 'lucide-react';

export const Positioning: React.FC = () => {
  return (
    <section id="posicionamento" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Tag */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>06 — Praticidade para Nutricionistas</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Conteúdo pronto para você não precisar criar tudo do zero.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Em vez de passar horas procurando ideias, criando artes e organizando conteúdos, você terá uma base de materiais pronta para facilitar sua rotina de criação.
          </p>
        </div>

        {/* Comparison grid / Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-12">
          {/* Card Antes / Sem o Kit */}
          <div className="bg-red-50/50 border border-red-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm mb-4">
                ✕
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Criando tudo sozinho do zero:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>Horas perdidas no Canva tentando alinhar fontes, cores e elementos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>Bloqueio criativo constante: "O que eu posto hoje no Instagram?"</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>Frustração ao ver o feed desatualizado e sem constância profissional.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>Dificuldade para explicar conceitos bioquímicos complexos aos pacientes.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-red-200/60 text-xs font-semibold text-red-600">
              Resultado: estresse, sobrecarga e perda de pacientes potenciais.
            </div>
          </div>

          {/* Card Depois / Com o Kit */}
          <div className="bg-emerald-50/70 border-2 border-emerald-300 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left shadow-lg shadow-emerald-700/5">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Com o Kit de +100 Diagramas de Nutrição:
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Base visual pronta:</strong> basta escolher o tema do dia e publicar.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Design científico e elegante:</strong> transmite autoridade imediata.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Didática que converte:</strong> pacientes entendem o plano alimentar na hora.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Tempo livre:</strong> foque nos atendimentos e na sua vida pessoal.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200 text-xs font-bold text-emerald-800">
              Mais praticidade para produzir. Mais facilidade para manter suas redes atualizadas.
            </div>
          </div>
        </div>

        {/* Summary Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Produção Rápida e Inteligente
          </div>
          <p className="text-base sm:text-xl font-bold leading-relaxed mb-2">
            "Mais praticidade para produzir. Mais facilidade para manter suas redes atualizadas."
          </p>
          <p className="text-xs sm:text-sm text-slate-400">
            Você não precisa ser especialista em design para ter um perfil que encanta e educa.
          </p>
        </div>
      </div>
    </section>
  );
};
