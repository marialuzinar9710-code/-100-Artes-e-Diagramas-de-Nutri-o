import React from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { TopicItem } from './TopicsShowcase';

interface TopicModalProps {
  topic: TopicItem | null;
  onClose: () => void;
  onScrollToOffer: () => void;
}

export const TopicModal: React.FC<TopicModalProps> = ({
  topic,
  onClose,
  onScrollToOffer,
}) => {
  if (!topic) return null;
  const Icon = topic.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100/60">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-md">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
            {topic.tag}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
            {topic.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {topic.shortDesc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            O que você encontrará neste módulo:
          </h4>

          <div className="space-y-2.5 mb-6">
            {topic.details.map((detail, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 rounded-2xl p-4 mb-6 border border-emerald-200/80 text-xs text-emerald-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Formatos prontos para Feed, Carrossel, Stories e impressão em PDF.</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onScrollToOffer();
              }}
              className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>GARANTIR POR R$ 12,90</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="py-3 px-4 border border-slate-300 hover:bg-slate-50 text-slate-600 font-semibold text-xs rounded-xl transition-all cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
