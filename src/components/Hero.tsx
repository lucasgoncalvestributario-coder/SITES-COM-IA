import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../config';

export const Hero: React.FC = () => {
  const handleScrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const offerEl = document.getElementById('oferta');
    if (offerEl) {
      offerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 md:pt-48 md:pb-32 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic Multi-Layered Ambient Light & Moving Tech Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] md:w-[900px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-cyan-500/20 via-indigo-600/20 to-purple-600/15 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none animate-ambient-glow" />
      <div className="absolute top-20 left-[10%] w-[300px] h-[300px] bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none animate-tech-drift" />
      <div className="absolute bottom-10 right-[10%] w-[350px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none animate-tech-drift" />
      
      {/* Moving technological cyber nodes in the background */}
      <div className="absolute top-36 left-[18%] w-2.5 h-2.5 rounded-full bg-cyan-400/70 shadow-[0_0_12px_#22d3ee] animate-ping pointer-events-none" />
      <div className="absolute top-48 right-[22%] w-2 h-2 rounded-full bg-teal-300/80 shadow-[0_0_10px_#5eead4] animate-pulse pointer-events-none" />
      <div className="absolute bottom-24 left-[28%] w-1.5 h-1.5 rounded-full bg-indigo-400/80 shadow-[0_0_8px_#818cf8] animate-ping pointer-events-none" />
      <div className="absolute bottom-36 right-[15%] w-2.5 h-2.5 rounded-full bg-cyan-300/70 shadow-[0_0_14px_#67e8f9] animate-pulse pointer-events-none" />

      {/* Subtle top laser highlight line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Master Headline with Continuous Light Sweep Shimmer */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 sm:mb-6 leading-[1.12] select-none"
          >
            <span className="block text-slate-100 font-extrabold mb-1 sm:mb-2">
              Crie Sites Profissionais com
            </span>
            <span className="text-shimmer font-black tracking-tight inline-block drop-shadow-[0_0_35px_rgba(34,211,238,0.3)]">
              INTELIGÊNCIA ARTIFICIAL
            </span>
          </motion.h1>

          {/* Clean Subtitle - Direct and High-Conversion */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal mb-8 sm:mb-12 px-2"
          >
            Transforme suas ideias em páginas modernas, rápidas e no ar em minutos — <span className="text-white font-semibold">mesmo sem saber programar</span>.
          </motion.p>

          {/* CTA Area: Luxury Primary Button that scrolls to the Price/Offer section */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="w-full flex flex-col sm:flex-row items-center justify-center"
          >
            <a
              href="#oferta"
              onClick={handleScrollToOffer}
              id="hero-main-cta"
              className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4.5 px-8 sm:py-5 sm:px-12 rounded-2xl text-base sm:text-xl font-black text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 animate-button-glow active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Continuous Shimmering Light Sweep */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/45 to-transparent animate-shine-sweep pointer-events-none" />
              
              <span className="relative z-10 tracking-wide">QUERO COMEÇAR AGORA 🚀</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1.5 transition-transform relative z-10 shrink-0" />
            </a>
          </motion.div>

          {/* Frase de Efeito (High-Impact Catchphrase) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-10 sm:mt-14 max-w-3xl mx-auto w-full px-2"
          >
            <div className="relative rounded-2xl bg-slate-900/60 backdrop-blur-md border border-cyan-500/25 px-5 py-5 sm:px-8 sm:py-6 shadow-xl shadow-cyan-950/30">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent pointer-events-none" />
              <blockquote className="text-base sm:text-xl md:text-2xl font-bold text-slate-100 leading-snug tracking-tight">
                “O futuro pertence a quem{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-300">
                  comanda a Inteligência Artificial
                </span>{' '}
                — não a quem decora linhas de código.”
              </blockquote>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle bottom divider transitioning to Modules */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent pointer-events-none" />
    </section>
  );
};
