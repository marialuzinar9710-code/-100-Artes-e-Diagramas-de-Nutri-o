import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, Layers } from 'lucide-react';
import { DiagramItem } from './DiagramModal';

interface DiagramCarouselProps {
  onSelectDiagram: (diagram: DiagramItem) => void;
}

const DIAGRAMS: DiagramItem[] = [
  {
    id: 'diag-1',
    image: '/diagramaspele/assets/asset-40c19363eb.webp',
    title: 'Camadas da Pele: Epiderme, Derme e Hipoderme',
    category: 'Estrutura & Camadas',
    description: 'Corte anatômico detalhado demonstrando a estratificação da epiderme (córnea, lúcida, granulosa, espinhosa e basal), vascularização e tecido subcutâneo adiposo.',
  },
  {
    id: 'diag-2',
    image: '/diagramaspele/assets/asset-6729589be8.webp',
    title: 'Anatomia do Folículo Piloso e Glândula Sebácea',
    category: 'Acne & Inflamações',
    description: 'Ilustração detalhada do complexo pilosebáceo, produção de sebo, colonização por C. acnes e formação do comedão aberto e fechado.',
  },
  {
    id: 'diag-3',
    image: '/diagramaspele/assets/asset-30cf49c48a.webp',
    title: 'Mecanismo de Ação do Microagulhamento',
    category: 'Procedimentos & Agulhas',
    description: 'Infográfico mostrando a profundidade de penetração das microagulhas (0.5mm a 2.5mm), cascata de indução percutânea de colágeno e angiogênese tecidual.',
  },
  {
    id: 'diag-4',
    image: '/diagramaspele/assets/asset-34ef117459.webp',
    title: 'Evolução da Acne: Do Poro Obstruído à Pústula e Cisto',
    category: 'Acne & Inflamações',
    description: 'Esquema didático de 4 estágios da acne inflamatória e não inflamatória para explicar ao paciente a importância do tratamento tópico e higienização.',
  },
  {
    id: 'diag-5',
    image: '/diagramaspele/assets/asset-42cb79ba2c.webp',
    title: 'Melanogênese e Formação de Manchas / Melasma',
    category: 'Melasma & Manchas',
    description: 'Visualização da ativação dos melanócitos pelos raios UV, transferência de melanossomos aos ceratinócitos e hiperpigmentação pós-inflamatória.',
  },
  {
    id: 'diag-6',
    image: '/diagramaspele/assets/asset-009966302c.webp',
    title: 'Degradação do Colágeno e Elastina no Envelhecimento',
    category: 'Envelhecimento & Rugas',
    description: 'Comparativo visual entre a pele jovem com matriz extracelular densa vs. pele madura com perda de firmeza e quebra de fibras elásticas.',
  },
  {
    id: 'diag-7',
    image: '/diagramaspele/assets/asset-cec6c8f82d.webp',
    title: 'Barreira Cutânea e Fator Natural de Hidratação (NMF)',
    category: 'Estrutura & Camadas',
    description: 'Modelo "tijolos e argamassa" (ceratinócitos e lipídios intercelulares) demonstrando a perda transepidérmica de água (TEWL).',
  },
  {
    id: 'diag-8',
    image: '/diagramaspele/assets/asset-aa39929b69.webp',
    title: 'Planos de Aplicação: Toxina Botulínica e Preenchedores',
    category: 'Procedimentos & Agulhas',
    description: 'Corte anatômico facial indicando planos dérmicos, subcutâneo, SMAS e periósteo para comunicação segura em harmonização facial.',
  },
  {
    id: 'diag-9',
    image: '/diagramaspele/assets/asset-6e56c851f5.webp',
    title: 'Profundidade dos Peelings Químicos (Muito Superficial a Profundo)',
    category: 'Procedimentos & Agulhas',
    description: 'Representação precisa do nível de ação de alfa-hidroxiácidos, ácido salicílico, ATA e fenol nas diferentes camadas cutâneas.',
  },
  {
    id: 'diag-10',
    image: '/diagramaspele/assets/asset-c40d246fa8.webp',
    title: 'Fototipos de Fitzpatrick e Sensibilidade à Radiação Solar',
    category: 'Melasma & Manchas',
    description: 'Tabela gráfica com fototipos I a VI, resposta ao eritema, bronzeamento e riscos para procedimentos com laser e luz intensa pulsada.',
  },
  {
    id: 'diag-11',
    image: '/diagramaspele/assets/asset-2d9ab028e5.webp',
    title: 'Cicatrização e Regeneração Tecidual em 3 Fases',
    category: 'Procedimentos & Agulhas',
    description: 'Fase inflamatória, proliferativa e de remodelação com deposição de colágeno tipo III e tipo I pós-procedimentos estéticos.',
  },
  {
    id: 'diag-12',
    image: '/diagramaspele/assets/asset-a8a1949522.webp',
    title: 'Diferenciação de Tipos de Pele (Oleosa, Mista, Seca e Sensível)',
    category: 'Estrutura & Camadas',
    description: 'Guia visual para avaliação e anamnese de barreira lipídica, vascularização reativa e tamanho dos poros.',
  },
];

const CATEGORIES = [
  'Todos',
  'Estrutura & Camadas',
  'Acne & Inflamações',
  'Procedimentos & Agulhas',
  'Melasma & Manchas',
  'Envelhecimento & Rugas',
];

export const DiagramCarousel: React.FC<DiagramCarouselProps> = ({ onSelectDiagram }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const filteredDiagrams =
    selectedCategory === 'Todos'
      ? DIAGRAMS
      : DIAGRAMS.filter((d) => d.category === selectedCategory);

  // Auto-scroll loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.6; // pixels per frame

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;
        // If reached end, reset gently
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="image-carousel" className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-2">
          <Layers className="w-3.5 h-3.5" />
          Galeria de Demonstração
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Veja Uma Prévia Do Material Que Você Vai Receber
        </h2>

        <p className="max-w-2xl mx-auto text-sm text-slate-600 mb-6 leading-relaxed">
          Esses são alguns exemplos reais dos diagramas que fazem parte do kit. Clique em qualquer imagem para inspecionar os detalhes em alta resolução!
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-pink-600 text-white shadow-md shadow-pink-600/25'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Track with Arrows */}
      <div
        className="relative max-w-7xl mx-auto px-2 sm:px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-none py-2 px-4 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredDiagrams.concat(filteredDiagrams).map((diagram, index) => (
            <div
              key={`${diagram.id}-${index}`}
              onClick={() => onSelectDiagram(diagram)}
              className="group flex-shrink-0 w-64 sm:w-72 bg-white rounded-2xl border-2 border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-square bg-slate-100 overflow-hidden">
                <img
                  src={diagram.image}
                  alt={diagram.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3 py-1.5 bg-white/95 text-slate-900 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5 text-pink-600" />
                    <span>Inspecionar Diagrama</span>
                  </div>
                </div>
                <div className="absolute top-2.5 left-2.5 bg-slate-950/75 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                  {diagram.category}
                </div>
              </div>

              <div className="p-3.5 flex flex-col justify-between flex-1 text-left bg-white">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-2 leading-snug group-hover:text-pink-600 transition-colors">
                  {diagram.title}
                </h4>
                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Pronto p/ Canva</span>
                  <span className="font-semibold text-emerald-600">300 DPI</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
