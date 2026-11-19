import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { CHECKOUT_URL, COURSE_CONFIG } from '../config';

export const StickyMobileBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 300px and not at the very bottom
      const scrolled = window.scrollY > 350;
      setVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = (e: React.MouseEvent) => {
    if (CHECKOUT_URL.startsWith('http')) {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  if (!visible) return null;

  return (
    <div
      id="sticky-mobile-cta"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07090E]/95 backdrop-blur-xl border-t border-slate-800 px-4 py-3 shadow-2xl shadow-black transition-all duration-300 animate-in slide-in-from-bottom"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-mono text-cyan-400 font-bold">Oferta Especial</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs line-through text-slate-400 decoration-rose-500/70 font-semibold">{COURSE_CONFIG.regularPrice}</span>
            <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">{COURSE_CONFIG.promoPrice}</span>
          </div>
        </div>

        <a
          href={CHECKOUT_URL}
          onClick={handleCtaClick}
          className="relative overflow-hidden flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-black text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 animate-button-glow active:scale-95 transition-all"
        >
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine-sweep pointer-events-none" />
          <span className="relative z-10">QUERO COMEÇAR</span>
          <ArrowRight className="w-4 h-4 shrink-0 relative z-10" />
        </a>
      </div>
    </div>
  );
};
