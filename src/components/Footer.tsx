import React, { useState } from 'react';
import { Sparkles, Shield, Mail, FileText, ArrowUp } from 'lucide-react';
import { COURSE_CONFIG } from '../config';
import { TermsModal, PrivacyModal, ContactModal } from './LegalModals';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | 'contact' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070D] border-t border-slate-850 pt-16 pb-24 md:pb-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-12 border-b border-slate-850">
          
          {/* Course Branding */}
          <div className="space-y-3 text-center md:text-left max-w-md">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {COURSE_CONFIG.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {COURSE_CONFIG.tagline}
            </p>
          </div>

          {/* Quick Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            <button
              onClick={() => setModalType('terms')}
              className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5 focus:outline-none"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Termos de Uso</span>
            </button>

            <button
              onClick={() => setModalType('privacy')}
              className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5 focus:outline-none"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Política de Privacidade</span>
            </button>

            <button
              onClick={() => setModalType('contact')}
              className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5 focus:outline-none"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>Contato</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
              title="Voltar ao topo"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {COURSE_CONFIG.name}. Todos os direitos reservados.
          </p>
          <p className="max-w-xl text-[11px] text-slate-400 leading-normal">
            Aviso: Este treinamento tem propósito estritamente educacional. O aprendizado e a criação de páginas dependem da aplicação prática das técnicas ensinadas.
          </p>
        </div>
      </div>

      {/* Modals */}
      <TermsModal isOpen={modalType === 'terms'} onClose={() => setModalType(null)} />
      <PrivacyModal isOpen={modalType === 'privacy'} onClose={() => setModalType(null)} />
      <ContactModal isOpen={modalType === 'contact'} onClose={() => setModalType(null)} />
    </footer>
  );
};
