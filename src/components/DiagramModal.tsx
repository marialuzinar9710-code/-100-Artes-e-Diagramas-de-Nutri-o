import React from 'react';
import { X, ZoomIn, Download, CheckCircle2 } from 'lucide-react';

export interface DiagramItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
}

interface DiagramModalProps {
  diagram: DiagramItem | null;
  onClose: () => void;
  onSelectOffer: () => void;
}

export const DiagramModal: React.FC<DiagramModalProps> = ({
  diagram,
  onClose,
  onSelectOffer,
}) => {
  if (!diagram) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition-all cursor-pointer"
          aria-label="Fechar prévia"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4 sm:p-6 bg-slate-900 flex items-center justify-center relative min-h-[320px] max-h-[500px] overflow-hidden">
          <img
            src={diagram.image}
            alt={diagram.title}
            className="w-full max-h-[440px] object-contain rounded-xl drop-shadow-2xl"
          />
          <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white/90 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 backdrop-blur-sm">
            <ZoomIn className="w-3.5 h-3.5 text-pink-400" />
            <span>Resolução Original: 3000 x 3000px (300 DPI)</span>
          </div>
        </div>

        <div className="p-6 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-50 text-pink-700">
              {diagram.category}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Formato Canva + PNG com Fundo Transparente
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2">
            {diagram.title}
          </h3>

          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            {diagram.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Textos 100% editáveis no Canva Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Cores ajustáveis à sua paleta profissional</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pronto para imprimir em quadros ou fichas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Formatos para Stories, Reels e Feed</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onSelectOffer();
              }}
              className="flex-1 py-3 px-5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>QUERO BAIXAR ESTE E TODOS OS +100 DIAGRAMAS</span>
            </button>
            <button
              onClick={onClose}
              className="py-3 px-5 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl transition-all cursor-pointer"
            >
              Voltar ao Conteúdo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
