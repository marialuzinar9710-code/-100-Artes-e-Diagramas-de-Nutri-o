import React, { useRef, useState, useEffect } from 'react';
import { Eye, Sparkles, ZoomIn } from 'lucide-react';

import diagPrato from '../assets/images/diag_prato_saudavel_1790543695260.jpg';
import diagMacros from '../assets/images/diag_macros_1790543705825.jpg';
import diagVitaminas from '../assets/images/diag_vitaminas_1790543717018.jpg';
import diagHidratacao from '../assets/images/diag_hidratacao_1790543727219.jpg';
import diagPorcoes from '../assets/images/diag_porcoes_mao_1790543737638.jpg';
import diagDigestivo from '../assets/images/diag_digestivo_1790543747876.jpg';

export interface CarouselImageItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
}

export const CAROUSEL_DIAGRAMS: CarouselImageItem[] = [
  {
    id: 'diag-1',
    image: diagPrato,
    title: 'O Método do Prato Saudável (50% Vegetais, 25% Proteínas, 25% Carboidratos)',
    category: 'Alimentação Equilibrada',
    description: 'Guia visual didático ilustrando proporções perfeitas para almoço e jantar equilibrados. Perfeito para postar e para entregar impresso na consulta.',
  },
  {
    id: 'diag-2',
    image: diagMacros,
    title: 'Divisão de Macronutrientes: Proteínas, Carboidratos e Gorduras Boas',
    category: 'Macronutrientes',
    description: 'Infográfico científico completo sobre o papel biológico de cada macronutriente na energia celular, síntese muscular e equilíbrio hormonal.',
  },
  {
    id: 'diag-3',
    image: diagVitaminas,
    title: 'Roda do Arco-Íris: Vitaminas, Minerais e Fitoquímicos por Cores',
    category: 'Vitaminas e Minerais',
    description: 'Apresentação visual das cores dos alimentos (vermelho, laranja, verde, roxo) e seus benefícios antioxidantes e anti-inflamatórios.',
  },
  {
    id: 'diag-4',
    image: diagHidratacao,
    title: 'Guia de Hidratação Diária & Impacto da Água nos Órgãos',
    category: 'Hidratação',
    description: 'Infográfico para conscientizar sobre a ingestão hídrica ideal calculada por peso corporal, funções renais e cognitivas.',
  },
  {
    id: 'diag-5',
    image: diagPorcoes,
    title: 'Guia Prático da Mão: Porções Alimentares Sem Precisar Pesar',
    category: 'Porções Alimentares',
    description: 'Técnica visual intuitiva da palma da mão (proteínas), punho fechado (carboidratos), polegar (gorduras) e concha (vegetais).',
  },
  {
    id: 'diag-6',
    image: diagDigestivo,
    title: 'Sistema Digestivo & Microbiota: A Rota dos Nutrientes e Fibras',
    category: 'Sistema Digestivo',
    description: 'Corte anatômico do trato gastrointestinal explicando digestão gástrica, absorção intestinal e fermentação bacteriana benéfica.',
  },
];

interface MovingCarouselProps {
  onImageClick: (item: CarouselImageItem) => void;
}

export const MovingCarousel: React.FC<MovingCarouselProps> = ({ onImageClick }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId: number;
    const speed = 0.8;

    const loop = () => {
      if (!isPaused && !isDragging.current && track) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollStart.current = trackRef.current.scrollLeft;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) {
      hasDragged.current = true;
    }
    trackRef.current.scrollLeft = scrollStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setTimeout(() => {
      hasDragged.current = false;
    }, 50);
  };

  const duplicatedList = [...CAROUSEL_DIAGRAMS, ...CAROUSEL_DIAGRAMS, ...CAROUSEL_DIAGRAMS];

  return (
    <section id="conteudo" className="py-8 sm:py-10 bg-white text-slate-900 overflow-hidden relative border-t border-b border-slate-100">
      <div className="w-[94%] max-w-5xl mx-auto px-1 sm:px-4 text-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight mb-1.5">
          Veja Uma Prévia Dos Diagramas Que Você Vai Receber
        </h2>
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-600 font-normal">
          Esses são alguns exemplos reais dos diagramas que fazem parte do kit. Toque para ampliar.
        </p>
      </div>

      {/* Infinite Carousel Strip */}
      <div
        className="relative w-full cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          if (!isDragging.current) setIsPaused(false);
        }}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none py-1 px-3 touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedList.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => {
                if (!hasDragged.current) {
                  onImageClick(item);
                }
              }}
              className="flex-shrink-0 w-[220px] sm:w-[260px] bg-slate-50 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-square bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/95 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Ver Detalhes</span>
                  </div>
                </div>

                <div className="absolute bottom-2 left-2">
                  <span className="bg-emerald-600/90 backdrop-blur-xs text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-3 text-left">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
