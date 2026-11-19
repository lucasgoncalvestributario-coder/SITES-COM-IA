import React, { useState } from 'react';
import { X, Shield, FileText, Mail, Send, CheckCircle2, Copy } from 'lucide-react';
import { COURSE_CONFIG } from '../config';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#0B0F19] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400">
            <FileText className="w-5 h-5" />
            <h3 className="font-bold text-white text-lg">Termos de Uso</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            Bem-vindo ao curso <strong>{COURSE_CONFIG.name}</strong>. Ao adquirir ou acessar este treinamento, você concorda com os termos e condições descritos abaixo:
          </p>

          <h4 className="font-bold text-white text-base pt-2">1. Objeto do Curso</h4>
          <p>
            O treinamento oferece aulas gravadas em vídeo, materiais complementares e suporte sobre a criação de páginas web e sites utilizando ferramentas modernas de Inteligência Artificial e publicação na web.
          </p>

          <h4 className="font-bold text-white text-base pt-2">2. Direitos Autorais e Acesso</h4>
          <p>
            O acesso à área de membros é estritamente pessoal e intransferível. É expressamente proibido o compartilhamento de credenciais, download não autorizado ou redistribuição dos conteúdos em qualquer plataforma.
          </p>

          <h4 className="font-bold text-white text-base pt-2">3. Garantia e Cancelamento</h4>
          <p>
            Em conformidade com o Código de Defesa do Consumidor e com nossa política de satisfação, o aluno possui o prazo de {COURSE_CONFIG.guaranteeDays} (sete) dias a contar da data de confirmação da compra para solicitar o reembolso total caso não se sinta satisfeito.
          </p>

          <h4 className="font-bold text-white text-base pt-2">4. Resultados e Responsabilidades</h4>
          <p>
            O curso ensina habilidades técnicas e práticas. Não garantimos faturamento financeiro, ganhos monetários ou resultados comerciais específicos, dependendo a aplicação dos conhecimentos exclusivamente da dedicação e empenho individual de cada aluno.
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors"
          >
            Entendi e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export const PrivacyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#0B0F19] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-400">
            <Shield className="w-5 h-5" />
            <h3 className="font-bold text-white text-lg">Política de Privacidade</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            Sua privacidade é fundamental para nós. Esta política descreve como tratamos as informações pessoais fornecidas no momento da compra e navegação.
          </p>

          <h4 className="font-bold text-white text-base pt-2">1. Coleta de Informações</h4>
          <p>
            Os dados de pagamento são processados em ambiente seguro e criptografado pela plataforma de checkout parceira (Cakto). Não armazenamos números de cartão de crédito em nossos servidores.
          </p>

          <h4 className="font-bold text-white text-base pt-2">2. Uso dos Dados de Contato</h4>
          <p>
            O seu endereço de e-mail é utilizado exclusivamente para o envio dos dados de acesso às aulas, comunicados pedagógicos e atualizações relevantes do curso. Jamais vendemos seus dados para terceiros.
          </p>

          <h4 className="font-bold text-white text-base pt-2">3. Segurança</h4>
          <p>
            Empregamos protocolos de criptografia SSL/TLS em todas as páginas para proteger suas informações contra acessos não autorizados.
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COURSE_CONFIG.supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg max-h-[90vh] bg-[#0B0F19] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400">
            <Mail className="w-5 h-5" />
            <h3 className="font-bold text-white text-lg">Central de Atendimento</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-300">
          <p>
            Ficou com alguma dúvida antes de se inscrever ou precisa de suporte? Entre em contato diretamente com nossa equipe:
          </p>

          {/* Email & WhatsApp Cards */}
          <div className="space-y-3">
            <a
              href="https://wa.me/5548996129568?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20curso!"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 hover:border-emerald-500/60 flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-300 block font-mono">WhatsApp Direto:</span>
                  <span className="font-bold text-white text-sm sm:text-base font-mono">
                    (48) 99612-9568
                  </span>
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-bold group-hover:underline">
                Chamar →
              </span>
            </a>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">E-mail de Suporte:</span>
                  <span className="font-bold text-white text-sm sm:text-base font-mono">
                    {COURSE_CONFIG.supportEmail}
                  </span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          {messageSent ? (
            <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-800 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-white">Mensagem Recebida!</h4>
              <p className="text-xs text-slate-300">
                Nossa equipe responderá sua mensagem em breve através do e-mail informado.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Seu Nome</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Digite seu nome completo"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Seu E-mail</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="exemplo@email.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Sua Mensagem ou Dúvida</label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Como podemos te ajudar?"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 hover:from-cyan-300 hover:to-teal-200 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
