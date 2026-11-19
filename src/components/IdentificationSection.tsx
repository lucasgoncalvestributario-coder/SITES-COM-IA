import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Bot, Globe2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const IdentificationSection: React.FC = () => {
  const cards = [
    {
      id: 'idea',
      emoji: '💡',
      icon: Lightbulb,
      title: 'Você tem uma ideia?',
      description: 'Transforme sua ideia em um projeto real.',
      glowColor: 'from-amber-500/20 to-orange-500/10',
      borderColor: 'group-hover:border-amber-500/40',
      iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      highlight: 'Do conceito ao layout visual',
    },
    {
      id: 'ai',
      emoji: '🤖',
      icon: Bot,
      title: 'Você sabe usar IA?',
      description: 'Aprenda a utilizar a IA de forma prática para criar sites.',
      glowColor: 'from-cyan-500/20 to-blue-500/10',
      borderColor: 'group-hover:border-cyan-500/40',
      iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      highlight: 'Sem complicação técnica',
    },
    {
      id: 'online',
      emoji: '🌐',
      icon: Globe2,
      title: 'Quer colocar no ar?',
      description: 'Aprenda a publicar seu projeto na internet.',
      glowColor: 'from-emerald-500/20 to-teal-500/10',
      borderColor: 'group-hover:border-emerald-500/40',
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      highlight: 'Link real para compartilhar',
    },
  ];

  return (
    <section id="sobre" className="py-20 sm:py-28 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
            <span>A Revolução da IA no Desenvolvimento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Você não precisa ser programador para começar.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            <p>
              Talvez você já tenha pensado que criar sites é coisa de programador profissional.
            </p>
            <p>
              Mas hoje a Inteligência Artificial permite que você transforme ideias em projetos reais de uma maneira muito mais simples.
            </p>
            <p className="text-cyan-300 font-medium">
              Neste curso, você vai aprender a utilizar ferramentas de IA para criar sites de verdade, entender o processo e colocar seus projetos na internet.
            </p>
          </div>
        </div>

        {/* 3 Identification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`group relative p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 ${card.borderColor} transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl flex flex-col justify-between`}
              >
                {/* Background glow hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Icon & Emoji Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border ${card.iconBg} shadow-inner transition-transform group-hover:scale-110 duration-300`}
                    >
                      <span>{card.emoji}</span>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Card Footer Badge */}
                <div className="relative z-10 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {card.highlight}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
