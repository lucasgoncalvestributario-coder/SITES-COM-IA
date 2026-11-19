import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Check, ArrowRight, ShieldCheck, Zap, Lock, CreditCard, Clock } from 'lucide-react';
import { CHECKOUT_URL, COURSE_CONFIG } from '../config';

export const OfferSection: React.FC = () => {
  const offerItems = [
    'Curso completo (14 aulas práticas)',
    'Projeto real do zero ao ar',
    'Biblioteca de prompts testados',
    'Materiais de apoio e templates',
    'Acesso 100% online e flexível',
    'Suporte direto para dúvidas',
  ];

  const handleCtaClick = (e: React.MouseEvent) => {
    if (CHECKOUT_URL.startsWith('http')) {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="oferta" className="py-14 sm:py-20 md:py-28 relative bg-[#07090E] overflow-hidden">
      {/* Background glow & moving tech elements behind offer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/10 blur-[120px] sm:blur-[140px] pointer-events-none animate-data-pulse" />
      <div className="absolute -top-10 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px] animate-tech-drift pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-500/10 blur-[110px] animate-tech-drift pointer-events-none" />
      <div className="absolute top-1/4 left-[8%] w-2 h-2 rounded-full bg-cyan-400/80 shadow-[0_0_12px_#22d3ee] animate-ping pointer-events-none" />
      <div className="absolute bottom-1/4 right-[8%] w-2 h-2 rounded-full bg-teal-300/80 shadow-[0_0_10px_#5eead4] animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          {/* Main Offer Card Container */}
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-400 via-indigo-500/40 to-slate-800 shadow-2xl shadow-cyan-950/70">
            <div className="bg-[#0B0F19] rounded-[22px] p-5 sm:p-10 md:p-12 overflow-hidden relative">
              
              {/* Top Accent Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-400 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-cyan-400/20 w-fit">
                  <Sparkles className="w-4 h-4 fill-slate-950" />
                  <span>OFERTA DE LANÇAMENTO</span>
                </div>
                <span className="text-xs sm:text-sm font-medium text-cyan-300 font-mono">
                  Condição especial para novos alunos.
                </span>
              </div>

              {/* Price Grid - Single column on mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center border-b border-slate-800 pb-8 sm:pb-10 mb-6 sm:mb-8">
                
                {/* Left: Values & Pricing (Enlarged & High-Impact) */}
                <div className="lg:col-span-6 space-y-4 p-4 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-300 font-bold block">
                    Investimento Único // Acesso Completo:
                  </span>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-slate-400 text-lg sm:text-2xl line-through decoration-rose-500/70 decoration-2 font-bold">
                      DE {COURSE_CONFIG.regularPrice}
                    </span>
                    <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 font-mono font-bold border border-emerald-500/40 shadow-sm shadow-emerald-900/50">
                      Economize R$ 60,00
                    </span>
                  </div>

                  <div className="pt-1">
                    <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Por Apenas:
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-teal-200 tracking-tight drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                        {COURSE_CONFIG.promoPrice}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    Pagamento seguro • Opção {COURSE_CONFIG.installments}
                  </p>
                </div>

                {/* Right: What's Included */}
                <div className="lg:col-span-6 bg-slate-900/80 rounded-2xl p-4 sm:p-6 border border-slate-800 space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1.5">
                    O QUE ESTÁ INCLUSO:
                  </span>
                  <div className="space-y-2">
                    {offerItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0">
                          ✓
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Big CTA Button with Continuous Glowing and Shining Sweep */}
              <div className="space-y-4 text-center">
                <a
                  href={CHECKOUT_URL}
                  onClick={handleCtaClick}
                  id="offer-buy-btn"
                  className="relative group overflow-hidden w-full inline-flex items-center justify-center gap-2.5 py-4.5 px-6 sm:py-5 sm:px-8 rounded-2xl font-black text-base sm:text-xl text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 animate-button-glow active:scale-95 transition-all duration-200"
                >
                  {/* Internal Shimmering Light Sweep */}
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine-sweep pointer-events-none" />

                  <span className="relative z-10 tracking-wide">QUERO COMEÇAR AGORA 🚀</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 shrink-0 group-hover:translate-x-1.5 transition-transform" />
                </a>

                {/* Security trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-8 pt-2 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    Pagamento Seguro
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    Acesso Imediato
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Suporte Dedicado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
