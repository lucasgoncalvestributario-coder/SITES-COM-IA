import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle2, ShieldCheck, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { NO_CODE_CHECKLIST } from '../data/courseData';
import { CHECKOUT_URL } from '../config';

export const NoCodeConfidenceSection: React.FC = () => {
  const notNeededItems = [
    'Não precisa dominar HTML.',
    'Não precisa dominar CSS.',
    'Não precisa ser especialista em JavaScript.',
    'Não precisa ter anos de experiência.',
  ];

  const handleCtaClick = (e: React.MouseEvent) => {
    if (CHECKOUT_URL.startsWith('http')) {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-14 sm:py-20 md:py-28 relative bg-[#090D16] border-y border-slate-800/80 overflow-hidden">
      {/* Ambient background glow & moving tech nodes */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[130px] animate-tech-drift pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[350px] h-[350px] bg-emerald-500/10 blur-[110px] animate-tech-drift pointer-events-none" />
      <div className="absolute top-16 right-[10%] w-2 h-2 rounded-full bg-emerald-400/80 shadow-[0_0_12px_#34d399] animate-pulse pointer-events-none" />
      <div className="absolute bottom-24 left-[15%] w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_10px_#22d3ee] animate-ping pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Negative Myths Busting */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Sem Pré-requisitos Complexos</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Você <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-300">NÃO precisa</span> ser programador.
            </h2>

            <div className="space-y-2.5 pt-1 sm:pt-2">
              {notNeededItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-slate-300 text-sm sm:text-base font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <span className="line-through decoration-rose-400/60 text-slate-300 font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[15px] sm:text-lg text-slate-300 leading-relaxed font-normal pt-1">
              Você vai aprender utilizando <strong className="text-cyan-300 font-bold">Inteligência Artificial</strong> como sua ferramenta de apoio, entendendo cada etapa do processo.
            </p>
          </div>

          {/* Right Column: Positive Action Checklist Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/40 via-teal-500/20 to-slate-800 shadow-2xl">
              <div className="bg-[#0B0F19] rounded-[15px] p-5 sm:p-8 space-y-4 sm:space-y-6">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base sm:text-lg">
                        O Método Simples e Prático
                      </h3>
                      <span className="text-xs text-slate-400 font-mono">
                        Seu roadmap no treinamento
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-bold">
                    100% Guiado
                  </span>
                </div>

                {/* Checklist items */}
                <div className="space-y-3 sm:space-y-4">
                  {NO_CODE_CHECKLIST.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: index * 0.08 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0">
                        ✓
                      </div>
                      <span className="text-xs sm:text-base font-semibold text-white">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
