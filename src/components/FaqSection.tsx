import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { COURSE_FAQS } from '../data/courseData';
import { CHECKOUT_URL } from '../config';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    if (CHECKOUT_URL.startsWith('http')) {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="faq" className="py-14 sm:py-20 md:py-28 relative bg-[#07090E] overflow-hidden">
      {/* Background ambient lighting & moving tech elements */}
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-cyan-500/10 blur-[130px] animate-tech-drift pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[450px] h-[350px] bg-indigo-500/10 blur-[120px] animate-tech-drift pointer-events-none" />
      <div className="absolute top-20 right-[15%] w-2 h-2 rounded-full bg-cyan-400/80 shadow-[0_0_10px_#22d3ee] animate-ping pointer-events-none" />
      <div className="absolute bottom-16 left-[10%] w-1.5 h-1.5 rounded-full bg-purple-400/80 shadow-[0_0_8px_#c084fc] animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3 sm:mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2.5 sm:mb-4 leading-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-[15px] sm:text-lg text-slate-300 leading-relaxed font-normal px-1">
            Respostas transparentes e objetivas para as principais dúvidas sobre o curso.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {COURSE_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-950/30'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-lg text-white pr-3 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-cyan-500/20 text-cyan-300 rotate-180'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 text-slate-300 text-xs sm:text-base leading-relaxed border-t border-slate-800/60 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
