import React from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Clock, Award, Users, CheckCircle2, ChevronDown } from 'lucide-react';
import { CONTACT_INFO, TRUST_STATS } from '../data/siteData';

interface HeroProps {
  onOpenEnquiryModal: (preselectedService?: string) => void;
  onNavigateToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiryModal, onNavigateToServices }) => {
  const whatsappMessage = encodeURIComponent('Hello MTS Enterprises, I would like to enquire about your services.');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Cinematic Industrial Background with Layered Dark Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=85"
          alt="Heavy Construction Equipment and JCB Excavator"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.25] contrast-125 grayscale-[30%]"
        />
        {/* Dark Industrial Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/70" />
        <div className="absolute inset-0 bg-radial-orange opacity-70" />
        <div className="absolute inset-0 bg-industrial-grid opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Industrial Trust Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-sm bg-zinc-900/90 border border-zinc-800 text-orange-500 text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase mb-6 backdrop-blur-md">
            <div className="h-[1px] w-6 bg-orange-500" />
            <span>Heavy Machinery On-Hire & Site Cleaning Solutions</span>
            <div className="h-[1px] w-6 bg-orange-500" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.95] mb-6 uppercase font-['Outfit']">
            Heavy Duty <br className="hidden sm:block" />
            <span className="text-zinc-600">Equipment</span> <br className="hidden sm:block" />
            <span className="text-orange-500">Rentals & Site Cleaning</span>
          </h1>

          {/* Subheading with elegant border line */}
          <div className="max-w-2xl mx-auto border-l-2 border-zinc-800 pl-4 sm:pl-6 text-left my-8">
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              MTS Enterprises provides professional <strong className="text-white font-bold">JCB</strong>,{' '}
              <strong className="text-white font-bold">Dumper</strong>, and{' '}
              <strong className="text-white font-bold">Bolero Pickup</strong> rental services alongside{' '}
              <strong className="text-white font-bold">debris removal</strong>,{' '}
              <strong className="text-white font-bold">material transportation</strong>, and{' '}
              <strong className="text-white font-bold">industrial site cleaning</strong>.
            </p>
          </div>

          {/* Hero CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto mb-10">
            {/* Primary Request / Enquire CTA */}
            <button
              id="hero-request-quote-btn"
              onClick={() => onOpenEnquiryModal()}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-orange-500 hover:text-black transition-all cursor-pointer shadow-lg"
            >
              <span>Request Service</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>

            {/* Direct Call Button */}
            <a
              id="hero-call-now-btn"
              href="tel:9920693090"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-orange-500 hover:bg-orange-400 text-black font-black text-xs uppercase tracking-tight transition-all shadow-lg"
            >
              <Phone className="w-4 h-4 text-black" />
              <span>Call: 9920693090</span>
            </a>

            {/* WhatsApp Button */}
            <a
              id="hero-whatsapp-btn"
              href={`https://wa.me/918879153549?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-emerald-500 text-emerald-400 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Quick Trust Highlights Strip */}
          <div className="inline-flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-8 px-6 py-3 rounded-sm bg-zinc-950/90 border border-zinc-800/90 text-xs text-zinc-400 backdrop-blur-md">
            <span className="flex items-center gap-2 text-zinc-300 font-bold text-[11px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Reliable Service
            </span>
            <span className="text-zinc-800 hidden sm:inline">|</span>
            <span className="flex items-center gap-2 text-zinc-300 font-bold text-[11px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Quick Availability
            </span>
            <span className="text-zinc-800 hidden sm:inline">|</span>
            <span className="flex items-center gap-2 text-zinc-300 font-bold text-[11px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Well-Maintained Fleet
            </span>
            <span className="text-zinc-800 hidden sm:inline">|</span>
            <span className="flex items-center gap-2 text-zinc-300 font-bold text-[11px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              Professional Team
            </span>
          </div>
        </div>

        {/* Dynamic Metric / Fleet Readiness Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-14 max-w-5xl mx-auto">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-sm bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all text-center group"
            >
              <div className="text-2xl sm:text-4xl font-black text-white group-hover:text-orange-500 transition-colors font-['Outfit'] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-black uppercase tracking-wider text-zinc-300 mt-1">{stat.label}</div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-400 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Scroll Prompt */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onNavigateToServices}
            className="flex flex-col items-center gap-1.5 text-zinc-400 hover:text-orange-500 transition-colors group cursor-pointer focus:outline-none"
            aria-label="Scroll down to services"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-zinc-400 group-hover:text-orange-500">
              Explore Equipment & Services
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-orange-500" />
          </button>
        </div>
      </div>
    </section>
  );
};
