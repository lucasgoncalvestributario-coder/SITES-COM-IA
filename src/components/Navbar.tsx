import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { CHECKOUT_URL, COURSE_CONFIG } from '../config';

interface NavbarProps {
  onOpenCheckoutNotice?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = (e: React.MouseEvent) => {
    if (CHECKOUT_URL.startsWith('http')) {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    } else {
      e.preventDefault();
      const offerEl = document.getElementById('oferta');
      if (offerEl) {
        offerEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'O que vai aprender', href: '#conteudo' },
    { label: 'Projeto Real', href: '#projeto-real' },
    { label: 'Para Quem É', href: '#para-quem' },
    { label: 'Oferta Especial', href: '#oferta' },
    { label: 'Perguntas Frequentes', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        scrolled
          ? 'bg-[#07090E]/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-950/40 py-2 sm:py-2.5'
          : 'bg-[#07090E]/70 backdrop-blur-md border-b border-slate-850 py-2.5 sm:py-3.5'
      }`}
    >
      {/* Full-Header Panoramic Technological Animation Background (Occupies the ENTIRE header) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Full-width laser scan pulse beam */}
        <div className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent animate-cyber-flow" />

        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0" />

        {/* Full panoramic SVG circuit & cyber matrix spanning 100% width */}
        <svg
          className="absolute inset-0 w-full h-full opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="header-circuit-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>

            <pattern id="header-grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(6, 182, 212, 0.08)" strokeWidth="1" />
              <circle cx="30" cy="30" r="1" fill="rgba(34, 211, 238, 0.25)" />
            </pattern>
          </defs>

          {/* Cyber Grid Background */}
          <rect width="100%" height="100%" fill="url(#header-grid-pattern)" />

          {/* Panoramic Circuit Traces */}
          <path
            d="M 0 35 Q 200 10, 400 35 T 800 25 T 1200 45 T 1600 20 T 2000 35"
            fill="none"
            stroke="url(#header-circuit-grad)"
            strokeWidth="1.2"
            strokeDasharray="8 6 20 6"
            className="animate-spin-slow origin-center opacity-70"
          />
          <path
            d="M 0 20 L 150 20 L 180 40 L 450 40 L 480 15 L 750 15 L 780 45 L 1100 45 L 1130 20 L 1500 20 L 1530 40 L 2000 40"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
          <path
            d="M 0 50 L 300 50 L 330 25 L 600 25 L 630 50 L 950 50 L 980 20 L 1300 20 L 1330 50 L 2000 50"
            fill="none"
            stroke="#818cf8"
            strokeWidth="1"
            strokeOpacity="0.25"
            strokeDasharray="4 8"
          />
        </svg>

        {/* Floating animated glowing tech nodes across header */}
        <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
        <div className="absolute top-1/3 left-[32%] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-teal-300 shadow-[0_0_6px_#2dd4bf] animate-ping" />
        <div className="absolute top-2/3 left-[50%] -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8] animate-pulse" />
        <div className="absolute top-1/3 left-[68%] -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#67e8f9] animate-ping" />
        <div className="absolute top-1/2 left-[82%] -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-10">
        
        {/* Left Side: Master Cyber Core Tech Graphic */}
        <a
          href="#inicio"
          id="nav-tech-graphic"
          className="relative group flex items-center gap-3 p-1 focus:outline-none rounded-2xl"
          aria-label="Início"
        >
          {/* Ambient Aura */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-teal-400/20 to-indigo-500/30 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Master Cyber Tech SVG Animation */}
          <div className="relative w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Rotating Gear / Radar Ring */}
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="url(#outer-cyan-grad)"
                strokeWidth="1.5"
                strokeDasharray="6 8 18 8"
                strokeLinecap="round"
                className="animate-spin-slow origin-center opacity-80"
              />

              {/* Reverse Rotating Cyber Circuit Ring */}
              <circle
                cx="50"
                cy="50"
                r="38"
                stroke="url(#purple-grad)"
                strokeWidth="1.8"
                strokeDasharray="24 10 8 10"
                strokeLinecap="round"
                className="animate-spin-reverse-slow origin-center opacity-90"
              />

              {/* Glowing Hexagonal Grid Frame */}
              <polygon
                points="50,18 78,34 78,66 50,82 22,66 22,34"
                stroke="#06b6d4"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                className="opacity-40 animate-pulse"
              />

              {/* Radar Scanner Sweep */}
              <line
                x1="50"
                y1="50"
                x2="85"
                y2="50"
                stroke="url(#scanner-beam)"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-radar-scan origin-center"
              />

              {/* Inner Pulsating Holographic Energy Core */}
              <circle
                cx="50"
                cy="50"
                r="16"
                fill="url(#core-sphere)"
                className="animate-pulse-tech origin-center"
              />

              {/* Central Quantum Node */}
              <circle
                cx="50"
                cy="50"
                r="6"
                fill="#ffffff"
                className="drop-shadow-[0_0_10px_#22d3ee]"
              />

              {/* Micro Orbiting Tech Satellites / Laser Points */}
              <g className="animate-spin-slow origin-center">
                <circle cx="50" cy="8" r="2.5" fill="#22d3ee" className="drop-shadow-[0_0_6px_#22d3ee]" />
                <circle cx="92" cy="50" r="2" fill="#a855f7" className="drop-shadow-[0_0_6px_#a855f7]" />
                <circle cx="50" cy="92" r="2.5" fill="#38bdf8" className="drop-shadow-[0_0_6px_#38bdf8]" />
                <circle cx="8" cy="50" r="2" fill="#2dd4bf" className="drop-shadow-[0_0_6px_#2dd4bf]" />
              </g>

              {/* SVG Gradients Definition */}
              <defs>
                <linearGradient id="outer-cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>

                <linearGradient id="purple-grad" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>

                <radialGradient id="core-sphere" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="40%" stopColor="#22d3ee" stopOpacity="0.8" />
                  <stop offset="85%" stopColor="#4f46e5" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="scanner-beam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* High-Tech Pulse Status Indicator */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>AI CORE // ATIVO</span>
          </div>
        </a>

        {/* Center High-Tech Wave Frequency Display (Hidden on very small screens) */}
        <div className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-slate-950/70 border border-slate-800/80 font-mono text-xs text-slate-400">
          <span className="text-cyan-400 font-bold">SYSTEM //</span>
          <div className="flex items-center gap-1 h-3">
            <span className="w-1 h-2 bg-cyan-400 animate-pulse rounded-full" />
            <span className="w-1 h-3 bg-teal-300 animate-pulse rounded-full" />
            <span className="w-1 h-1.5 bg-cyan-500 animate-pulse rounded-full" />
            <span className="w-1 h-3 bg-indigo-400 animate-pulse rounded-full" />
            <span className="w-1 h-2 bg-cyan-300 animate-pulse rounded-full" />
          </div>
          <span className="text-[11px] text-slate-400">INTELIGÊNCIA ARTIFICIAL</span>
        </div>

        {/* Right Side: The 3 Glowing Stripes (Hamburger Menu Toggle) */}
        <button
          id="main-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="group relative p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300 focus:outline-none"
          aria-label={mobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
        >
          {/* Button glow */}
          <div className="absolute inset-0 rounded-2xl bg-cyan-500/15 opacity-0 group-hover:opacity-100 transition-opacity blur-md pointer-events-none" />

          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-cyan-300 group-hover:rotate-90 transition-transform duration-300" />
          ) : (
            /* Sleek 3 Futuristic Lines */
            <div className="w-6 h-4.5 flex flex-col justify-between items-end">
              <span className="w-6 h-0.5 rounded-full bg-cyan-400 group-hover:bg-white transition-all duration-300 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
              <span className="w-4.5 h-0.5 rounded-full bg-teal-300 group-hover:w-6 group-hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_8px_rgba(45,212,191,0.9)]" />
              <span className="w-5.5 h-0.5 rounded-full bg-cyan-400 group-hover:w-6 group-hover:bg-white transition-all duration-300 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            </div>
          )}
        </button>
      </div>

      {/* Modern Cyber Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[70px] sm:top-[85px] bg-[#07090E]/95 backdrop-blur-2xl border-b border-cyan-500/30 px-6 py-8 shadow-2xl shadow-cyan-950/40 transition-all">
          <div className="max-w-2xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400/80 font-bold mb-1">
              Navegação
            </span>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-300 font-medium text-sm transition-all"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-500 group-hover:text-cyan-400 text-xs font-mono">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={CHECKOUT_URL.startsWith('http') ? CHECKOUT_URL : '#oferta'}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleCtaClick(e);
                }}
                className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-black text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 animate-button-glow active:scale-95"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine-sweep pointer-events-none" />
                <span className="relative z-10">QUERO COMEÇAR AGORA</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
              </a>
            </div>

            <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-2 pt-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Acesso Imediato • Apenas {COURSE_CONFIG.promoPrice}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
