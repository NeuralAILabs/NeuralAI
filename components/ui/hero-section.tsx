'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import NeuralCanvas from '@/components/ui/neural-canvas';
import ScrollReveal from "@/components/ui/scroll-reveal";

const FLOATING_CIRCLES = [
  { id: 'fc-1', size: 280, animateX: [0, 50, -30, 0], animateY: [0, -60, 40, 0], color: '#0F766E', top: '8%', left: '12%', duration: 24 },
  { id: 'fc-2', size: 340, animateX: [0, -70, 50, 0], animateY: [0, 50, -50, 0], color: '#b0421a', bottom: '10%', right: '8%', duration: 30 },
  { id: 'fc-3', size: 220, animateX: [0, 40, -40, 0], animateY: [0, 40, -60, 0], color: '#d97a3f', top: '35%', right: '18%', duration: 28 },
  { id: 'fc-4', size: 260, animateX: [0, -40, 60, 0], animateY: [0, -50, 50, 0], color: '#0F766E', bottom: '5%', left: '6%', duration: 22 },
];

function FloatingCircles() {
  return (
    <>
      {FLOATING_CIRCLES.map((c) => (
        <motion.div
          key={c.id}
          className="absolute pointer-events-none"
          style={{
            width: c.size, height: c.size,
            top: ('top' in c ? c.top : undefined),
            left: ('left' in c ? c.left : undefined),
            right: ('right' in c ? c.right as string : undefined),
            bottom: ('bottom' in c ? c.bottom as string : undefined),
          }}
          animate={{ x: c.animateX, y: c.animateY, rotate: 360 }}
          transition={{
            x: { duration: c.duration, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: c.duration * 0.9, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: c.duration * 1.5, repeat: Infinity, ease: 'linear' },
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
            <defs>
              <radialGradient id={`hero-glow-${c.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={c.color} stopOpacity="0.14" />
                <stop offset="45%" stopColor={c.color} stopOpacity="0.06" />
                <stop offset="100%" stopColor={c.color} stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill={`url(#hero-glow-${c.id})`} />
            <circle cx="50" cy="50" r="40" stroke={c.color} strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3,6" />
            <circle cx="50" cy="50" r="30" stroke={c.color} strokeWidth="0.3" strokeOpacity="0.12" />
            <circle cx="50" cy="10" r="1.8" fill={c.color} fillOpacity="0.25" />
            <circle cx="15" cy="50" r="1.2" fill={c.color} fillOpacity="0.15" />
          </svg>
        </motion.div>
      ))}
    </>
  );
}

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleScroll = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="ui-poppins relative min-h-screen bg-[#fdfaf3] text-[#18181B] overflow-x-hidden">
      <NeuralCanvas className="absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-[5] bg-gradient-to-b from-background/70 via-[#f7eddc]/30 to-background/70 pointer-events-none" />

      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 w-full px-6 md:px-16 h-20 bg-[#fdfaf3]/85 backdrop-blur-md border-b border-[#e2d5c0]/70 flex items-center justify-between">
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleScroll('hero'); }} className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 bg-primary flex items-center justify-center font-black rounded-sm transition-all duration-500 group-hover:rotate-[360deg] text-on-primary">N</div>
          <span className="text-xl font-bold tracking-tight uppercase text-foreground">
            Neural<span className="text-primary group-hover:text-primary-hover transition-colors">AI</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-foreground/70 tracking-wide uppercase">
          <button onClick={() => handleScroll('hero')} className="cursor-pointer relative hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Home</button>
          <button onClick={() => handleScroll('products')} className="cursor-pointer relative hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Products</button>
          <button onClick={() => handleScroll('neural-lab')} className="cursor-pointer relative hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Neural Lab</button>
          <button onClick={() => handleScroll('about')} className="cursor-pointer relative hover:text-primary transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">About</button>
        </nav>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={() => handleScroll('contact')}
            className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-on-primary text-[13px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.03]"
          >
            Contact Us
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-20 left-0 right-0 bg-[#fdfaf3] border-b border-[#e2d5c0]/90 z-30 overflow-hidden shadow-lg flex flex-col p-6 space-y-4 font-bold text-[13px] text-foreground/80 tracking-widest uppercase"
          >
            <button onClick={() => handleScroll('hero')} className="text-left py-2 hover:text-primary border-b border-[#e2d5c0]/20">Home</button>
            <button onClick={() => handleScroll('products')} className="text-left py-2 hover:text-primary border-b border-[#e2d5c0]/20">Products</button>
            <button onClick={() => handleScroll('neural-lab')} className="text-left py-2 hover:text-primary border-b border-[#e2d5c0]/20">Neural Lab</button>
            <button onClick={() => handleScroll('about')} className="text-left py-2 hover:text-primary border-b border-[#e2d5c0]/20">About</button>
            <button
              onClick={() => handleScroll('contact')}
              className="w-full text-center py-3 bg-primary text-on-primary rounded-full mt-2 font-bold tracking-widest"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative pt-12 pb-24 md:py-32 px-6 md:px-16 overflow-hidden flex flex-col items-center text-center">
        <FloatingCircles />

        {/* Constellation SVG */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          <div className="absolute inset-0 grid-dots opacity-[0.8]" />
          <svg className="absolute w-full h-full opacity-60" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="constGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b0421a" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#0F766E" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#d97a3f" stopOpacity="0.15" />
              </linearGradient>
              <filter id="starGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path d="M 80,120 L 220,180 L 150,320 L 80,120 M 220,180 L 380,140 M 380,140 L 460,260 L 320,380 M 460,260 L 610,130 L 780,180 M 780,180 L 890,110 L 1050,190 M 890,110 L 980,260 M 780,180 L 820,350 L 980,260 M 320,380 L 510,480 L 680,410 M 680,410 L 750,560" stroke="url(#constGrad)" strokeWidth="1" fill="none" />
            <circle cx="80" cy="120" r="4" fill="#b0421a" filter="url(#starGlow)" className="animate-pulse" />
            <circle cx="220" cy="180" r="3" fill="#0F766E" />
            <circle cx="150" cy="320" r="4.5" fill="#d97a3f" filter="url(#starGlow)" />
            <circle cx="380" cy="140" r="3.5" fill="#b0421a" />
            <circle cx="460" cy="260" r="4" fill="#0F766E" filter="url(#starGlow)" />
            <circle cx="320" cy="380" r="3" fill="#d97a3f" />
            <circle cx="610" cy="130" r="5" fill="#b0421a" filter="url(#starGlow)" className="animate-pulse" />
            <circle cx="780" cy="180" r="3.5" fill="#0F766E" />
            <circle cx="890" cy="110" r="3" fill="#d97a3f" />
            <circle cx="1050" cy="190" r="4" fill="#b0421a" filter="url(#starGlow)" />
            <circle cx="980" cy="260" r="3.5" fill="#0F766E" />
            <circle cx="820" cy="350" r="4" fill="#d97a3f" />
            <circle cx="510" cy="480" r="3" fill="#b0421a" />
            <circle cx="680" cy="410" r="4.5" fill="#0F766E" filter="url(#starGlow)" />
            <circle cx="750" cy="560" r="3" fill="#d97a3f" />
          </svg>
        </div>

        {/* Content */}
        <ScrollReveal variant="fade-up" className="relative z-10 max-w-4xl space-y-8 mt-4">
          <motion.a
            href="https://www.ieltsbuddy.app/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-primary/25 bg-[#fdfaf3] text-xs font-semibold text-foreground cursor-pointer hover:border-primary transition-all shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
            <span className="text-foreground/60 font-medium">Introducing IeltsBuddy, our AI IELTS coach.</span>
            <span className="text-primary font-bold flex items-center gap-0.5">Explore <ArrowRight className="w-3.5 h-3.5" /></span>
          </motion.a>

          <div className="space-y-4 leading-[1.12]">
            <h1 className="text-4xl sm:text-6xl md:text-[5.4rem] font-extrabold tracking-tight text-foreground select-none">
              <span className="inline-block relative">
                <span className="absolute -inset-1 sm:-inset-2 bg-primary rounded-xl shadow-sm rotate-[-1deg]" />
                <span className="relative text-[#fdfaf3] px-4 md:px-5 py-1 z-10 leading-none">Smarter</span>
              </span>
              {' '}learning, made
              <br />
              <span className="font-serif italic font-normal text-foreground/80 tracking-wide mt-2 inline-block">simple.</span>
            </h1>
          </div>

          <p className="text-foreground/75 text-base md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            IELTS preparation, technology training, and study-abroad guidance, all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleScroll('contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-on-primary text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.03] flex items-center justify-center gap-2"
            >
              Get started <ArrowRight className="w-4 h-4 text-on-primary" />
            </button>
            <button
              onClick={() => handleScroll('products')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#e2d5c0] bg-white text-foreground hover:bg-[#fdfaf3] text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
            >
              Our products
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
