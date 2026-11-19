import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { COURSE_MODULES } from '../data/courseData';
import {
  Compass,
  Cpu,
  Layout,
  Globe,
  Sparkles,
  CheckCircle,
  BookOpen,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { CHECKOUT_URL } from '../config';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Cpu,
  Layout,
  Globe,
  Sparkles,
};

export const ModulesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate active slide based on scroll offset
    const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 320;
    const newIndex = Math.round(scrollLeft / (cardWidth + 20));
    setActiveIndex(Math.min(Math.max(newIndex, 0), COURSE_MODULES.length - 1));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 340;
    const scrollAmount = direction === 'left' ? -(cardWidth + 24) : cardWidth + 24;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToModule = (idx: number) => {
    if (!scrollContainerRef.current) return;
    const card = scrollContainerRef.current.children[idx] as HTMLElement;
    if (card) {
      scrollContainerRef.current.scrollTo({
        left: card.offsetLeft - scrollContainerRef.current.offsetLeft,
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
    <section id="conteudo" className="py-14 sm:py-20 md:py-28 relative bg-[#07090E] overflow-hidden">
      {/* Background ambient lighting & moving tech elements */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[350px] bg-indigo-500/10 blur-[130px] animate-tech-drift pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[400px] h-[300px] bg-cyan-500/10 blur-[120px] animate-tech-drift pointer-events-none" />
      <div className="absolute top-24 right-1/4 w-2 h-2 rounded-full bg-cyan-400/80 shadow-[0_0_12px_#22d3ee] animate-pulse pointer-events-none" />
      <div className="absolute bottom-16 left-1/4 w-1.5 h-1.5 rounded-full bg-purple-400/80 shadow-[0_0_10px_#c084fc] animate-ping pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Estrutura do Treinamento</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2">
              Tudo isso em um único curso.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal">
              Deslize para o lado para explorar cada módulo da sua jornada.
            </p>
          </div>

          {/* Navigation Controls & Pagination Info */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline mr-2">
              Módulo <strong className="text-cyan-300 font-bold">{activeIndex + 1}</strong> de {COURSE_MODULES.length}
            </span>

            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-xl border transition-all duration-200 ${
                canScrollLeft
                  ? 'bg-slate-900/90 border-slate-700 text-cyan-400 hover:bg-slate-800 hover:border-cyan-500/60 shadow-lg cursor-pointer'
                  : 'bg-slate-950/40 border-slate-850 text-slate-600 cursor-not-allowed opacity-40'
              }`}
              aria-label="Módulo anterior"
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
              aria-label="Próximo módulo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Sliding Carousel Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-1 px-1 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          {COURSE_MODULES.map((module, idx) => {
            const Icon = iconMap[module.iconName] || Sparkles;
            const isFinalProject = module.id === 5;
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className={`snap-center shrink-0 w-[85vw] sm:w-[380px] md:w-[420px] lg:w-[440px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isFinalProject
                    ? 'bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-950/50'
                    : isActive
                    ? 'bg-slate-900/90 border border-cyan-500/50 shadow-xl shadow-cyan-950/30'
                    : 'bg-slate-900/65 border border-slate-800 hover:border-slate-700 shadow-lg'
                }`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-lg border border-cyan-800/60 shadow-inner">
                      {module.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center text-cyan-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Module Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {module.title}
                  </h3>

                  {/* Module Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed font-normal">
                    {module.description}
                  </p>

                  {/* Lesson items list */}
                  <div className="space-y-2 mb-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                      Aulas e Conteúdos:
                    </span>
                    <ul className="grid grid-cols-1 gap-2">
                      {module.lessons.map((lesson, lessonIdx) => (
                        <li
                          key={lessonIdx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium bg-slate-950/40 p-2 rounded-xl border border-slate-800/50"
                        >
                          <span className="w-4 h-4 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                            <CheckCircle className="w-3 h-3" />
                          </span>
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom Indicator */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 mt-2">
                  <span className="font-mono">
                    {module.lessons.length} {module.lessons.length === 1 ? 'aula prática' : 'aulas práticas'}
                  </span>
                  {isFinalProject ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-1 text-xs">
                      <Zap className="w-3.5 h-3.5" />
                      Módulo Chave de Conclusão
                    </span>
                  ) : (
                    <span className="text-cyan-400 font-medium flex items-center gap-1">
                      Deslize →
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {COURSE_MODULES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToModule(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-8 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Ir para módulo ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

