import React from 'react';
import { PhoneCall, ClipboardList, Truck, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, CONTACT_INFO } from '../data/siteData';

interface HowItWorksProps {
  onOpenEnquiryModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenEnquiryModal }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall': return <PhoneCall className="w-6 h-6 text-orange-500" />;
      case 'ClipboardList': return <ClipboardList className="w-6 h-6 text-orange-500" />;
      case 'Truck': return <Truck className="w-6 h-6 text-orange-500" />;
      default: return <ClipboardList className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-zinc-900 border border-zinc-800 text-orange-500 text-[10px] font-black uppercase tracking-[0.25em] mb-4">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase font-['Outfit'] mb-4">
            How It Works
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Effortless machinery booking and site service execution designed for construction companies, contractors, and property owners.
          </p>
        </div>

        {/* 3 Step Connected Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              id={`how-it-works-step-${step.stepNumber}`}
              className="relative rounded-sm bg-zinc-950 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/40 p-8 flex flex-col items-center text-center group transition-all duration-300 shadow-2xl"
            >
              {/* Number Badge */}
              <div className="absolute -top-3.5 px-3 py-0.5 rounded-sm bg-orange-500 text-black font-black text-[10px] uppercase tracking-widest">
                STEP 0{step.stepNumber}
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-orange-500 transition-all shadow-lg mt-2">
                {getStepIcon(step.iconName)}
              </div>

              {/* Step Title & Content */}
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors font-['Outfit']">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Subtle Step Index Marker */}
              <div className="mt-6 text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                Phase 0{idx + 1} Execution
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="how-it-works-cta-btn"
            onClick={onOpenEnquiryModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-orange-500 hover:bg-orange-400 text-black text-xs font-black uppercase tracking-widest shadow-md transition-all cursor-pointer"
          >
            <span>Request Your Service Details</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>

          <a
            id="how-it-works-whatsapp-btn"
            href="https://wa.me/918879153549?text=Hello%20MTS%20Enterprises%2C%20I%20would%20like%20to%20know%20how%20to%20book%20machinery."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-emerald-400 hover:text-emerald-300 text-xs font-bold uppercase tracking-wider transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (8879153549)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
