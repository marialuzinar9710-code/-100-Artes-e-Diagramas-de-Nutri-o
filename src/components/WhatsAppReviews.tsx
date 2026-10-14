import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Video, MoreVertical, CheckCheck } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  avatar: string;
  time: string;
  network: string;
  messages: Array<{
    sender: 'user' | 'me';
    text?: string;
    image?: string;
    isVideo?: boolean;
    duration?: string;
    time: string;
  }>;
}

const REVIEWS: Review[] = [
  {
    id: 'rev-carolina',
    name: 'Carolina',
    avatar: '/diagramaspele/assets/asset-f1206bc664.webp',
    time: '15:21',
    network: '4G',
    messages: [
      { sender: 'user', text: 'Camila do ceu', time: '16:15' },
      { sender: 'user', text: 'eu to chocada com a qualidade desses diagramas', time: '16:15' },
      { sender: 'user', text: 'e o tanto de tempo que eu vou economizar kkkkk', time: '16:16' },
      { sender: 'me', text: 'Oii Carolina! Fico feliz demais que gostou!', time: '16:18' },
      { sender: 'user', text: 'Gostei é pouco! Salvou minha vida 🙏', time: '16:19' },
    ],
  },
  {
    id: 'rev-dra-fernanda',
    name: 'Dra. Fernanda',
    avatar: '/diagramaspele/assets/asset-63dc133842.webp',
    time: '11:10',
    network: '4G',
    messages: [
      {
        sender: 'user',
        image: '/diagramaspele/assets/asset-ce359e6a14.webp',
        isVideo: true,
        duration: '0:26',
        time: '18:21',
      },
      {
        sender: 'user',
        text: 'Isso aqui ta fazendo uma diferença GIGANTE nas consultas',
        time: '18:21',
      },
      {
        sender: 'me',
        text: 'Que demais Dra. Fernanda! Fico muito feliz 🤩',
        time: '18:25',
      },
      {
        sender: 'user',
        text: 'Os pacientes entendem tudo agora. Obrigada!',
        time: '18:26',
      },
    ],
  },
  {
    id: 'rev-beatriz',
    name: 'Beatriz M.',
    avatar: '/diagramaspele/assets/asset-83f2205fda.webp',
    time: '19:00',
    network: '4G',
    messages: [
      {
        sender: 'user',
        image: '/diagramaspele/assets/asset-a9846c639a.webp',
        time: '20:02',
      },
      {
        sender: 'user',
        text: 'só pra dizer que meu perfil ta com outra cara, muito mais profissional',
        time: '20:02',
      },
      {
        sender: 'me',
        text: 'Uau Beatriz, que bom que gostou!! 👏',
        time: '20:05',
      },
      {
        sender: 'user',
        text: 'Gostei? Eu amei! Ja indiquei pra amigas da area!',
        time: '20:06',
      },
    ],
  },
  {
    id: 'rev-fernanda',
    name: 'Fernanda',
    avatar: '/diagramaspele/assets/asset-25bf27ffd6.webp',
    time: '22:56',
    network: '5G',
    messages: [
      {
        sender: 'user',
        image: '/diagramaspele/assets/asset-56ff116408.webp',
        time: '11:02',
      },
      {
        sender: 'user',
        text: 'Olha que chique ficou minha sala de avaliação!',
        time: '11:02',
      },
      {
        sender: 'me',
        text: 'UAU Fernanda, que incrível!! Arrasou demais 👏',
        time: '11:05',
      },
    ],
  },
  {
    id: 'rev-lucia',
    name: 'Dra. Lúcia',
    avatar: '/diagramaspele/assets/asset-4002aeee1e.webp',
    time: '11:16',
    network: '4G',
    messages: [
      { sender: 'user', text: 'Passando para dar um feedback.', time: '09:22' },
      { sender: 'user', text: 'Seu material é de uma utilidade absurda no consultório.', time: '09:22' },
      { sender: 'me', text: 'Que ótimo, Dra. Lúcia! Fico muito feliz.', time: '09:25' },
      {
        sender: 'user',
        text: 'Facilitou demais a comunicação com os pacientes. Excelente trabalho!',
        time: '09:26',
      },
    ],
  },
];

export const WhatsAppReviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  const infiniteReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;
    let animId: number;
    const speed = 0.7;

    if (track.scrollLeft === 0 && track.scrollWidth > 0) {
      track.scrollLeft = track.scrollWidth / 3;
    }

    const loop = () => {
      if (!isPaused && !isDragging.current && track) {
        track.scrollLeft += speed;
        const oneThird = track.scrollWidth / 3;
        if (track.scrollLeft >= oneThird * 2) {
          track.scrollLeft -= oneThird;
        } else if (track.scrollLeft <= 10) {
          track.scrollLeft += oneThird;
        }
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section id="depoimentos" className="py-8 sm:py-10 bg-white text-slate-900 border-b border-slate-100 overflow-hidden">
      <div className="w-[94%] max-w-5xl mx-auto px-1 sm:px-4 text-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight mb-1">
          O Que Nossos Clientes Dizem
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-normal">
          Depoimentos reais de quem comprou e já está utilizando no consultório e nas redes.
        </p>
      </div>

      <div
        className="relative w-full max-w-7xl mx-auto px-2 sm:px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          if (!isDragging.current) setIsPaused(false);
        }}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Navigation Arrows */}
        <button
          onClick={() => scrollByAmount(-300)}
          className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 hover:bg-emerald-600 text-white shadow-xl border border-white/20 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => scrollByAmount(300)}
          className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 hover:bg-emerald-600 text-white shadow-xl border border-white/20 flex items-center justify-center transition-all cursor-pointer"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slidable Carousel Track (Compact phone card) */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="flex gap-4 overflow-x-auto scrollbar-none py-2 px-2 select-none cursor-grab active:cursor-grabbing touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infiniteReviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="flex-shrink-0 w-[260px] sm:w-[285px] h-[450px] sm:h-[470px] rounded-[24px] overflow-hidden shadow-lg border-2 border-slate-200/90 bg-[#efeae2] flex flex-col justify-between text-left font-sans transition-all duration-300 hover:shadow-xl relative"
              style={{
                backgroundImage: 'url("/diagramaspele/assets/asset-ec6569bbc1.webp")',
                backgroundSize: '280px auto',
                backgroundRepeat: 'repeat',
              }}
            >
              {/* WhatsApp Mobile Status Bar */}
              <div className="px-3.5 py-1 bg-[#f0ede8] flex items-center justify-between text-[10px] font-semibold text-slate-800 border-b border-black/5 z-10 shrink-0">
                <span>{review.time}</span>
                <div className="flex items-center gap-1 text-[9px]">
                  <span>{review.network}</span>
                  <div className="w-3.5 h-1.5 rounded-xs border border-slate-700 p-0.5 flex items-center">
                    <div className="w-2 h-full bg-slate-800 rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* WhatsApp Contact Header */}
              <div className="px-3 py-2 bg-[#f0ede8] flex items-center justify-between border-b border-slate-200 z-10 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-300 ring-1 ring-black/10 shrink-0">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs leading-tight">
                      {review.name}
                    </div>
                    <div className="text-[10px] text-emerald-600 font-medium">online</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <Video className="w-3.5 h-3.5" />
                  <Phone className="w-3 h-3" />
                  <MoreVertical className="w-3 h-3" />
                </div>
              </div>

              {/* Chat Messages Body */}
              <div className="p-2.5 flex flex-col gap-1.5 flex-1 justify-end overflow-hidden z-10">
                {review.messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[90%] rounded-xl p-2 shadow-xs text-[11px] leading-snug relative ${
                        msg.sender === 'me'
                          ? 'bg-[#d9fdd3] text-slate-900 rounded-tr-xs'
                          : 'bg-white text-slate-900 rounded-tl-xs'
                      }`}
                    >
                      {msg.image && (
                        <div className="relative rounded-md overflow-hidden mb-1 max-h-[150px] border border-black/5 bg-slate-100 flex items-center justify-center">
                          <img
                            src={msg.image}
                            alt="Mídia enviada"
                            className="w-full max-h-[150px] object-cover rounded-md"
                          />
                          {msg.isVideo && (
                            <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                              <div className="w-8 h-8 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-md">
                                <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-slate-900 border-b-4 border-b-transparent ml-0.5" />
                              </div>
                              <span className="absolute bottom-1 left-1.5 text-[9px] text-white font-medium bg-black/40 px-1 py-0.5 rounded">
                                {msg.duration}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {msg.text && <p className="font-normal text-slate-800">{msg.text}</p>}

                      <div className="flex items-center justify-end gap-1 text-[9px] text-slate-400 mt-0.5">
                        <span>{msg.time}</span>
                        {msg.sender === 'me' && (
                          <CheckCheck className="w-3 h-3 text-sky-500" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
