import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Check, ArrowRight } from 'lucide-react';
import { CarouselImageItem } from './MovingCarousel';

interface ImageModalProps {
  item: CarouselImageItem | null;
  onClose: () => void;
  onScrollToOffer?: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  item,
  onClose,
  onScrollToOffer,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsZoomed(false);
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl shadow-2xl border border-emerald-500/40 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Bar */}
        <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {item.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
              <span>{isZoomed ? 'Reduzir' : 'Ampliar'}</span>
            </button>

            <button
              onClick={() => {
                setIsZoomed(false);
                onClose();
              }}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fechar prévia"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image Showcase Area */}
        <div className="relative flex-1 bg-slate-950 flex items-center justify-center p-2 sm:p-4 overflow-auto min-h-[300px]">
          <img
            src={item.image}
            alt={item.title}
            onClick={() => setIsZoomed(!isZoomed)}
            className={`max-h-[55vh] object-contain rounded-2xl shadow-2xl transition-all duration-300 cursor-zoom-in ${
              isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 hover:scale-[1.01]'
            }`}
          />
        </div>

        {/* Information & Action Footer */}
        <div className="p-5 sm:p-6 bg-slate-900 border-t border-slate-800 text-left">
          <h3 className="text-lg sm:text-xl font-black text-white mb-2 leading-snug">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {item.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5 text-[11px] text-slate-300">
            <div className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Alta Definição (300 DPI)</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pronto p/ Instagram e PDF</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Editável no Canva (Premium)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                setIsZoomed(false);
                onClose();
                onScrollToOffer?.();
              }}
              className="flex-1 py-3 px-5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>QUERO BAIXAR ESTE E TODOS OS +100 DIAGRAMAS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setIsZoomed(false);
                onClose();
              }}
              className="py-3 px-5 border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold text-xs rounded-xl transition-all cursor-pointer"
            >
              Fechar Prévia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
