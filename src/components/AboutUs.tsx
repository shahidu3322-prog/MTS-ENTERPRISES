import React from 'react';
import { ShieldCheck, HardHat, Award, Clock, ArrowRight, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

interface AboutUsProps {
  onOpenEnquiryModal: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenEnquiryModal }) => {
  const whatsappMessage = encodeURIComponent('Hello MTS Enterprises, I would like to discuss my project requirements.');

  return (
    <section id="about" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Fleet & Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                alt="Active Construction Site and Heavy Machinery Equipment"
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              {/* Floating Industrial Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-zinc-950/90 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-orange-500">Verified Fleet</div>
                    <div className="text-xs sm:text-sm font-black text-white uppercase tracking-tight">Full Safety & Compliance</div>
                  </div>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-sm bg-orange-500 text-black text-[10px] font-black uppercase tracking-wider">24/7 Operations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Credentials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-zinc-900 border border-zinc-800 text-orange-500 text-[10px] font-black uppercase tracking-[0.25em]">
              About MTS Enterprises
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase font-['Outfit'] leading-tight">
              Your Trusted Partner for Machinery & Cleaning
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              <strong className="text-orange-500 font-bold">MTS Enterprises</strong> is dedicated to providing reliable, efficient, and professional equipment rental, transportation, debris removal, and cleaning solutions.
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Whether you need a <strong className="text-white">JCB</strong>, <strong className="text-white">Dumper</strong>, <strong className="text-white">Bolero Pickup</strong>, <strong className="text-white">material transportation</strong>, <strong className="text-white">debris removal</strong>, or <strong className="text-white">construction site cleaning</strong>, our team is ready to provide professional service according to your requirements.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Licensed & Seasoned Operators',
                'Comprehensive Fleet Maintenance',
                'Emergency Same-Day Response',
                'Full Legal Debris Disposal Compliance',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-zinc-900 flex flex-wrap items-center gap-4">
              <button
                id="about-contact-today-btn"
                onClick={onOpenEnquiryModal}
                className="flex items-center gap-2 px-6 py-3.5 rounded-sm bg-orange-500 hover:bg-orange-400 text-black text-xs font-black uppercase tracking-widest shadow-md transition-all cursor-pointer"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <a
                id="about-call-btn"
                href="tel:9920693090"
                className="flex items-center gap-2 px-5 py-3.5 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                <span>Call: 9920693090</span>
              </a>

              <a
                id="about-whatsapp-btn"
                href={`https://wa.me/918879153549?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-emerald-400 hover:text-emerald-300 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
