import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, RefreshCw, CheckCircle2 } from 'lucide-react';
import { COURSE_CONFIG } from '../config';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative bg-[#090D16] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-10 bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          
          {/* Shield Icon Box */}
          <div className="shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-indigo-500/20 border-2 border-emerald-500/40 flex flex-col items-center justify-center text-emerald-400 shadow-xl shadow-emerald-950/40">
              <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300 mt-1">
                {COURSE_CONFIG.guaranteeDays} DIAS
              </span>
            </div>
          </div>

          {/* Guarantee Copy */}
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              <span>{COURSE_CONFIG.guaranteeDays} dias de garantia</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Você pode conhecer o curso sem medo.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              Acesse o conteúdo, assista às aulas e veja na prática como funciona. Se dentro de {COURSE_CONFIG.guaranteeDays} dias você achar que o curso não é para você, basta solicitar o reembolso na plataforma de compra de forma simples e direta.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Risco Zero para você
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Devolução 100% integral
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
