import React from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Users, 
  Zap, 
  Clock, 
  Headphones, 
  Award, 
  Smile, 
  CheckCircle,
  Phone,
  MessageSquare
} from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/siteData';

interface WhyChooseUsProps {
  onOpenEnquiryModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenEnquiryModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-orange-500" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-orange-500" />;
      case 'Users': return <Users className="w-5 h-5 text-orange-500" />;
      case 'Zap': return <Zap className="w-5 h-5 text-orange-500" />;
      case 'Clock': return <Clock className="w-5 h-5 text-orange-500" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-orange-500" />;
      case 'Award': return <Award className="w-5 h-5 text-orange-500" />;
      case 'Smile': return <Smile className="w-5 h-5 text-orange-500" />;
      default: return <CheckCircle className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-zinc-900 border border-zinc-800 text-orange-500 text-[10px] font-black uppercase tracking-[0.25em] mb-4">
            The MTS Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase font-['Outfit'] mb-4">
            Why Customers Choose Us
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Delivering operational dependability, safety compliance, and certified equipment with experienced operators for every civil and construction requirement.
          </p>
        </div>

        {/* Feature Cards Grid (8 Core Advantages) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.map((item, index) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="group p-6 rounded-sm bg-zinc-950 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 group-hover:border-orange-500 transition-all shadow-md">
                  {getIcon(item.iconName)}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-500 font-black text-sm">/</span>
                  <h3 className="text-base font-black text-white uppercase tracking-tight group-hover:text-orange-500 transition-colors font-['Outfit']">
                    {item.title}
                  </h3>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-900 flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-zinc-500 group-hover:text-orange-500 transition-colors">
                <span className="font-mono">Standard 0{index + 1}</span>
                <span>Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bottom Strip with Quick Action */}
        <div className="mt-16 p-8 rounded-sm bg-zinc-900 border border-zinc-800 text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-['Outfit'] mb-2">
            Ready to deploy heavy machinery or clear your site?
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Speak directly with our site supervisor to schedule your equipment or discuss project specifications today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              id="why-us-enquire-btn"
              onClick={onOpenEnquiryModal}
              className="px-6 py-3 rounded-sm bg-orange-500 hover:bg-orange-400 text-black text-xs font-black uppercase tracking-widest shadow-md transition-all cursor-pointer"
            >
              Enquire For Your Project
            </button>
            <a
              id="why-us-call-btn"
              href="tel:9920693090"
              className="flex items-center gap-2 px-6 py-3 rounded-sm bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-white text-xs font-black uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span>Call: 9920693090</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
