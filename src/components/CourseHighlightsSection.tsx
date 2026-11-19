import React from 'react';
import { motion } from 'motion/react';
import { COURSE_FEATURES } from '../data/courseData';
import { Layers } from 'lucide-react';

export const CourseHighlightsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Formato do Treinamento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Estrutura Completa do Curso
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Tudo o que você precisa para dominar a criação de sites de forma moderna e sem complicações.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {COURSE_FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-center flex flex-col items-center justify-between group hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                <span>{feat.emoji}</span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-snug font-normal">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
