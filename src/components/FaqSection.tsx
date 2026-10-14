import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'Esse é um produto digital ou físico?',
    answer:
      'É 100% digital. Você recebe o acesso aos materiais pela internet. Nada será enviado fisicamente.',
  },
  {
    question: 'Preciso saber usar o Canva?',
    answer:
      'Não. O Plano Básico já inclui os materiais prontos para uso em PDF. No Plano Premium, você também recebe os arquivos editáveis no Canva para personalizar textos, cores e elementos.',
  },
  {
    question: 'Posso usar os materiais nas minhas redes sociais?',
    answer:
      'Sim. Os materiais foram desenvolvidos para facilitar a criação de posts, carrosséis, stories e outros conteúdos para redes sociais.',
  },
  {
    question: 'Sou social media. Posso usar para meus clientes?',
    answer:
      'O material pode ser utilizado na criação de conteúdos para perfis de nutrição, conforme os termos de uso disponibilizados junto ao produto.',
  },
  {
    question: 'Como vou receber o acesso?',
    answer:
      'Após a confirmação do pagamento, você receberá as instruções de acesso ao material digitalmente, de forma rápida e prática no seu e-mail.',
  },
  {
    question: 'Por quanto tempo terei acesso?',
    answer:
      'O acesso ao material é vitalício, conforme as condições apresentadas no plano escolhido.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-8 sm:py-10 bg-white text-slate-900">
      <div className="w-[94%] max-w-3xl mx-auto px-1 sm:px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Suas Dúvidas Respondidas...
          </h2>
        </div>

        <div className="space-y-2.5">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/90 rounded-xl p-3.5 sm:p-4 shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm text-left leading-snug">
                    {item.question}
                  </h3>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200"
                    aria-label={isOpen ? 'Fechar resposta' : 'Abrir resposta'}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5 stroke-[2.5]" /> : <Plus className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-2.5 pt-2.5 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
