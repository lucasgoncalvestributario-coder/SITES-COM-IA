import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { COURSE_AUDIENCE } from '../data/courseData';
import { Check, UserCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { CHECKOUT_URL } from '../config';

export const AudienceSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = scrollRef.current.children[0]?.clientWidth || 300;
    const index = Math.round(scrollLeft / (cardWidth + 16));
    setActiveSlide(Math.min(Math.max(index, 0), COURSE_AUDIENCE.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 320;
    const scrollAmount = direction === 'left' ? -(cardWidth + 20) : cardWidth + 20;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToSlide = (idx: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[idx] as HTMLElement;
    if (card) {
      scrollRef.current.scrollTo({
        left: card.offsetLeft - scrollRef.current.offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    if (CHECKOUT_URL.startsWith('http')) {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="para-quem" className="py-14 sm:py-20 md:py-28 relative bg-[#07090E] overflow-hidden">
      {/* Subtle background aura & moving tech elements */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[350px] bg-cyan-500/10 blur-[130px] animate-tech-drift pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[300px] bg-indigo-500/10 blur-[120px] animate-tech-drift pointer-events-none" />
      <div className="absolute top-20 left-[15%] w-2 h-2 rounded-full bg-cyan-400/80 shadow-[0_0_12px_#22d3ee] animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-[20%] w-1.5 h-1.5 rounded-full bg-teal-400/80 shadow-[0_0_10px_#2dd4bf] animate-ping pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Perfil dos Alunos</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2">
              Esse curso é para você se...
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal">
              Deslize para o lado e veja se você se identifica com estas situações.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline mr-2">
              Perfil <strong className="text-cyan-300 font-bold">{activeSlide + 1}</strong> de {COURSE_AUDIENCE.length}
            </span>

            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-xl border transition-all duration-200 ${
                canScrollLeft
                  ? 'bg-slate-900/90 border-slate-700 text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/60 shadow-lg cursor-pointer'
                  : 'bg-slate-950/40 border-slate-850 text-slate-600 cursor-not-allowed opacity-40'
              }`}
              aria-label="Perfil anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-xl border transition-all duration-200 ${
                canScrollRight
                  ? 'bg-slate-900/90 border-slate-700 text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/60 shadow-lg cursor-pointer'
                  : 'bg-slate-950/40 border-slate-850 text-slate-600 cursor-not-allowed opacity-40'
              }`}
              aria-label="Próximo perfil"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Sliding Track for Audience Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-1 px-1 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          {COURSE_AUDIENCE.map((item, idx) => {
            const isActive = activeSlide === idx;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`snap-center shrink-0 w-[80vw] sm:w-[320px] md:w-[360px] p-6 sm:p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900/95 border-2 border-cyan-500/50 shadow-xl shadow-cyan-950/40'
                    : 'bg-slate-900/70 border border-slate-800 hover:border-cyan-500/30 shadow-md'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-2xl mb-4 shadow-inner">
                    <span>{item.emoji}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    "{item.title}"
                  </h3>

                  {item.description && (
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 mt-2">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>Ideal para você</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {COURSE_AUDIENCE.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === idx
                  ? 'w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Ir para perfil ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

