import React from 'react';
import {
  Lightbulb,
  Cpu,
  Layout,
  GitBranch,
  Cloud,
  Globe,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { CHECKOUT_URL } from '../config';

export const RealProjectSection: React.FC = () => {
  const handleCtaClick = (e: React.MouseEvent) => {
    if (CHECKOUT_URL.startsWith('http')) {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const pipelineSteps = [
    {
      step: '01',
      title: 'IDEIA',
      icon: Lightbulb,
      desc: 'Conceituação do site',
      color: 'from-amber-500/20 to-orange-500/20',
      border: 'border-amber-500/40',
      textColor: 'text-amber-300',
    },
    {
      step: '02',
      title: 'IA GENERATIVA',
      icon: Cpu,
      desc: 'Prompts Estruturados',
      color: 'from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-500/40',
      textColor: 'text-cyan-300',
    },
    {
      step: '03',
      title: 'SITE & DESIGN',
      icon: Layout,
      desc: 'Estrutura & Estilo',
      color: 'from-indigo-500/20 to-purple-500/20',
      border: 'border-indigo-500/40',
      textColor: 'text-indigo-300',
    },
    {
      step: '04',
      title: 'GITHUB',
      icon: GitBranch,
      desc: 'Armazenamento seguro',
      color: 'from-slate-500/20 to-slate-400/20',
      border: 'border-slate-400/40',
      textColor: 'text-slate-200',
    },
    {
      step: '05',
      title: 'NETLIFY',
      icon: Cloud,
      desc: 'Hospedagem gratuita',
      color: 'from-teal-500/20 to-emerald-500/20',
      border: 'border-teal-500/40',
      textColor: 'text-teal-300',
    },
    {
      step: '06',
      title: 'SITE PUBLICADO',
      icon: Globe,
      desc: 'No ar com HTTPS',
      color: 'from-emerald-500/30 to-cyan-500/30',
      border: 'border-emerald-400',
      textColor: 'text-emerald-300',
      isFinal: true,
    },
  ];

  return (
    <section id="projeto-real" className="py-14 sm:py-20 md:py-28 relative bg-[#090D16] border-y border-slate-800 overflow-hidden">
      {/* Background Animated Tech Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] animate-tech-drift" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-[110px] animate-tech-drift" />
        <div className="absolute top-1/2 left-[5%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-ping" />
        <div className="absolute bottom-1/3 right-[8%] w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mão na Massa</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-6 leading-tight">
            Você não vai ficar apenas assistindo aulas.
          </h2>

          <p className="text-[15px] sm:text-lg text-slate-300 leading-relaxed font-normal px-1">
            Durante o curso, você vai acompanhar a criação de um projeto real, desde a ideia inicial até o momento em que o site estará funcionando na internet.
          </p>
        </div>

        {/* Pipeline Representation */}
        <div className="mb-8 sm:mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">
              O Fluxo Completo que Você Vai Dominar:
            </span>
          </div>

          {/* Steps Grid - 2 cols on mobile, 3 on md, 6 on lg */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
            {pipelineSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`relative p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border ${item.border} flex flex-col justify-between shadow-md`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                        {item.step}
                      </span>
                      <Icon className={`w-4 h-4 ${item.textColor}`} />
                    </div>
                    <h4 className={`text-xs sm:text-sm font-bold ${item.textColor} mb-1 tracking-tight`}>
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {item.desc}
                    </p>
                  </div>

                  {index < pipelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
