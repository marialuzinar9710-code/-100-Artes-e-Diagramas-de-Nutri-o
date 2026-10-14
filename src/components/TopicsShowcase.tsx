import React, { useState } from 'react';
import { 
  Apple, 
  Dna, 
  Fish, 
  Wheat, 
  Droplet, 
  Sparkles, 
  HeartPulse, 
  Utensils, 
  Carrot, 
  Activity, 
  BookOpen, 
  CheckCircle2, 
  Layers,
  ArrowRight
} from 'lucide-react';

export interface TopicItem {
  id: string;
  name: string;
  icon: React.ElementType;
  tag: string;
  shortDesc: string;
  details: string[];
}

export const NUTRITION_TOPICS: TopicItem[] = [
  {
    id: 't-1',
    name: 'Alimentação equilibrada',
    icon: Utensils,
    tag: 'Base Alimentar',
    shortDesc: 'O método do prato saudável, proporções corretas de grupos alimentares e montagem de refeições nutritivas no dia a dia.',
    details: [
      'Divisão visual do prato: 50% vegetais, 25% proteínas, 25% carboidratos complexos',
      'Exemplos de café da manhã, almoço, lanches e jantar equilibrados',
      'Infográficos comparativos de refeições balanceadas vs. ultraprocessadas',
    ],
  },
  {
    id: 't-2',
    name: 'Macronutrientes',
    icon: Dna,
    tag: 'Bioquímica & Fisiologia',
    shortDesc: 'Visão geral integrada do papel dos carboidratos, proteínas e lipídios no fornecimento de energia e funções vitais.',
    details: [
      'Função estrutural, energética e hormonal de cada macronutriente',
      'Distribuição calórica diária recomendada',
      'Fontes saudáveis para cada objetivo clínico',
    ],
  },
  {
    id: 't-3',
    name: 'Proteínas',
    icon: Fish,
    tag: 'Massa Magra & Reparo',
    shortDesc: 'Proteínas vegetais e animais, valor biológico, aminoácidos essenciais e síntese muscular.',
    details: [
      'Tabela visual de gramas de proteína por porção de alimentos comuns',
      'Combinações vegetais para obtenção de aminoácidos completos',
      'Timing e fracionamento proteico para hipertrofia e saciedade',
    ],
  },
  {
    id: 't-4',
    name: 'Carboidratos',
    icon: Wheat,
    tag: 'Energia & Performance',
    shortDesc: 'Desmistificando os carboidratos: simples vs. complexos, índice glicêmico, carga glicêmica e papel na saciedade.',
    details: [
      'Gráfico explicativo de picos de glicose e insulina pós-prandial',
      'Alimentos de baixo, médio e alto índice glicêmico ilustrados',
      'Carboidratos integrais, tubérculos e frutas no plano alimentar',
    ],
  },
  {
    id: 't-5',
    name: 'Gorduras',
    icon: Droplet,
    tag: 'Saúde Cardiovascular & Hormônios',
    shortDesc: 'Gorduras boas vs. ruins: monoinsaturadas, poli-insaturadas (ômega 3 e 6), saturadas e gordura trans.',
    details: [
      'Fontes de lipídios saudáveis: azeite, abacate, sementes e oleaginosas',
      'Importância das gorduras na absorção de vitaminas lipossolúveis (A, D, E, K)',
      'Como substituir gorduras inflamatórias por opções protetoras',
    ],
  },
  {
    id: 't-6',
    name: 'Fibras',
    icon: Carrot,
    tag: 'Microbiota & Saciedade',
    shortDesc: 'Fibras solúveis e insolúveis, trânsito intestinal, controle glicêmico e saúde da microbiota.',
    details: [
      'Meta diária de fibras (25-35g) traduzida em alimentos reais',
      'Ação prebiótica e produção de ácidos graxos de cadeia curta (AGCC)',
      'Dicas para aumentar fibras sem desconforto digestivo',
    ],
  },
  {
    id: 't-7',
    name: 'Vitaminas e minerais',
    icon: Sparkles,
    tag: 'Micronutrientes',
    shortDesc: 'O arco-íris dos nutrientes: vitaminas hidrossolúveis, lipossolúveis, ferro, cálcio, magnésio e zinco.',
    details: [
      'Cores dos alimentos e fitoquímicos associados (antocianinas, licopeno, etc.)',
      'Sinais de carências nutricionais mais frequentes',
      'Biodisponibilidade e combinações sinérgicas (ex: ferro + vitamina C)',
    ],
  },
  {
    id: 't-8',
    name: 'Hidratação',
    icon: Droplet,
    tag: 'Equilíbrio Hídrico',
    shortDesc: 'Cálculo de ingestão hídrica por peso corporal, sinais sutis de desidratação e tabela de cor da urina.',
    details: [
      'Escala gráfica de coloração urinária para conscientização rápida',
      'Estratégias práticas para pacientes que não gostam de beber água',
      'Diferença entre água mineral, chás, sucos e isotônicos',
    ],
  },
  {
    id: 't-9',
    name: 'Sistema digestivo',
    icon: HeartPulse,
    tag: 'Anatomia & Absorção',
    shortDesc: 'A rota do alimento da mastigação ao cólon: enzimas, ácido gástrico, absorção no intestino delgado e motilidade.',
    details: [
      'Diagrama anatômico visual do trato gastrointestinal',
      'Impacto da mastigação lenta na digestão e saciedade',
      'Eixo intestino-cérebro explicado de forma didática',
    ],
  },
  {
    id: 't-10',
    name: 'Porções alimentares',
    icon: Utensils,
    tag: 'Prática & Autonomia',
    shortDesc: 'Método prático de medidas visuais (uso das mãos: palma, punho, polegar) para pacientes controlarem porções sem neurose.',
    details: [
      'Guia da mão: proteína na palma, carboidrato no punho, gordura no polegar',
      'Comparativo de densidade calórica entre alimentos de mesmo volume',
      'Dicas de como evitar exageros sem precisar pesar toda refeição',
    ],
  },
  {
    id: 't-11',
    name: 'Alimentos e nutrientes',
    icon: Apple,
    tag: 'Guia de Alimentos',
    shortDesc: 'Fichas informativas individuais de alimentos coringas (ovos, aveia, chia, iogurte, azeite, leguminosas).',
    details: [
      'Tabelas de equivalência e substituição de alimentos',
      'Como ler rótulos e lista de ingredientes sem ser enganado',
      'Classificação NOVA: in natura, minimamente processados e ultraprocessados',
    ],
  },
  {
    id: 't-12',
    name: 'Hábitos alimentares',
    icon: Activity,
    tag: 'Comportamento & Rotina',
    shortDesc: 'Comer com atenção plena (Mindful Eating), fome física vs. emocional e construção de constância sustentável.',
    details: [
      'Escala da fome e saciedade de 1 a 10',
      'Ciclo do comer emocional e gatilhos comuns',
      'Plano de ação para finais de semana e viagens sem sair dos trilhos',
    ],
  },
  {
    id: 't-13',
    name: 'Educação nutricional',
    icon: BookOpen,
    tag: 'Didática & Consultório',
    shortDesc: 'Materiais ilustrados para usar na hora da consulta na mesa de atendimento ou enviar como lâminas em PDF via WhatsApp.',
    details: [
      'Explicativos claros que desmistificam mitos populares da internet',
      'Infográficos para gerar engajamento instantâneo no Instagram',
      'Respostas visuais prontas para as dúvidas mais comuns dos pacientes',
    ],
  },
];

interface TopicsShowcaseProps {
  onSelectTopic: (topic: TopicItem) => void;
  onScrollToOffer: () => void;
}

export const TopicsShowcase: React.FC<TopicsShowcaseProps> = ({ onSelectTopic, onScrollToOffer }) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  return (
    <section id="conteudo-kit" className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* 02 — O QUE VOCÊ VAI RECEBER */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>02 — O Que Você Vai Receber</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
          +100 Artes e Diagramas de Nutrição
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 mb-10 leading-relaxed">
          Materiais visuais organizados por temas para facilitar a criação de conteúdos educativos e profissionais. Você poderá encontrar temas como:
        </p>

        {/* 13 Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
          {NUTRITION_TOPICS.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic)}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold uppercase tracking-wider mb-2">
                    {topic.tag}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                    {topic.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {topic.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Ver detalhes do tema</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA strip */}
        <div className="mt-12 bg-white border border-emerald-200 rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto shadow-md text-center">
          <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
            Todos esses 13 temas reunidos em um único acervo digital
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-4 max-w-xl mx-auto">
            Prontos para postar no feed, stories, carrosséis ou imprimir em lâminas plastificadas para seu consultório.
          </p>
          <button
            onClick={onScrollToOffer}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>QUERO ACESSAR OS +100 DIAGRAMAS POR R$ 12,90</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
