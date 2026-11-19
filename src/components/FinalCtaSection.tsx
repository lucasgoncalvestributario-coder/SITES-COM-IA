import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { CHECKOUT_URL, COURSE_CONFIG } from '../config';

export const FinalCtaSection: React.FC = () => {
  const handleCtaClick = (e: React.MouseEvent) => {
    if (CHECKOUT_URL.startsWith('http')) {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-14 sm:py-20 md:py-28 relative bg-[#090D16] border-t border-slate-800 overflow-hidden">
      {/* Background glow & moving tech nodes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[300px] sm:h-[350px] bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-purple-500/15 blur-[100px] sm:blur-[120px] animate-tech-drift pointer-events-none" />
      <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-cyan-400/80 shadow-[0_0_10px_#22d3ee] animate-ping pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-2 h-2 rounded-full bg-teal-400/80 shadow-[0_0_10px_#2dd4bf] animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>O Próximo Passo é Seu</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Seu primeiro site pode começar hoje.
          </h2>

          <p className="text-[15px] sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal px-2">
            Você não precisa esperar saber tudo para começar. Aprenda, pratique e construa seu primeiro projeto utilizando Inteligência Artificial.
          </p>

          <div className="pt-3 sm:pt-4 flex flex-col items-center">
            <a
              href={CHECKOUT_URL}
              onClick={handleCtaClick}
              id="final-cta-btn"
              className="relative group overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-10 py-4.5 sm:py-5 rounded-2xl font-black text-base sm:text-xl text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 animate-button-glow active:scale-95 transition-all duration-200"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine-sweep pointer-events-none" />
              <span className="relative z-10 tracking-wide">QUERO COMEÇAR AGORA 🚀</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 shrink-0 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-5 text-xs sm:text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Compra 100% Segura
              </span>
              <span>•</span>
              <span className="text-slate-300">Acesso Imediato</span>
              <span>•</span>
              <span className="text-cyan-300 font-bold font-mono text-base">{COURSE_CONFIG.promoPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
