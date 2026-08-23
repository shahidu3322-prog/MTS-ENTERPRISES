import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ChevronUp, HardHat } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

interface FloatingActionsProps {
  onOpenEnquiryModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenEnquiryModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCallMenu, setShowCallMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent('Hello MTS Enterprises, I would like to enquire about your services.');

  return (
    <>
      {/* Floating Action Cluster - Bottom Right on Desktop, Bottom Dock on Mobile */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-sm bg-zinc-950/90 border border-zinc-800 hover:border-orange-500 text-zinc-300 hover:text-orange-500 flex items-center justify-center shadow-2xl backdrop-blur-md transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Quick Call Multi-number popover */}
        {showCallMenu && (
          <div className="w-56 p-3 rounded-sm bg-zinc-950 border border-zinc-800 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-2 px-1">
              Select Line to Call
            </div>
            {CONTACT_INFO.phones.map((phone) => (
              <a
                key={phone.number}
                href={`tel:${phone.number}`}
                className="flex items-center justify-between p-2.5 rounded-sm bg-zinc-900 hover:bg-orange-500 hover:text-black text-zinc-200 text-xs font-black uppercase transition-colors mb-1.5 border border-zinc-800"
              >
                <span>{phone.formatted}</span>
                <span className="text-[9px] opacity-75">{phone.label}</span>
              </a>
            ))}
          </div>
        )}

        {/* Action Buttons Row */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct WhatsApp Floating Button */}
          <a
            id="floating-whatsapp-btn"
            href={`https://wa.me/918879153549?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-2xl shadow-emerald-950/80 transition-all"
            title="Chat on WhatsApp"
          >
            <div className="relative">
              <MessageSquare className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-300 rounded-full animate-ping" />
            </div>
            <span className="font-bold text-xs uppercase tracking-wider">WhatsApp</span>
          </a>

          {/* Direct Call Floating Button */}
          <button
            id="floating-call-now-btn"
            onClick={() => setShowCallMenu(!showCallMenu)}
            className="group flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-sm bg-orange-500 hover:bg-orange-400 text-black font-black text-xs sm:text-sm tracking-widest uppercase shadow-2xl transition-all cursor-pointer"
            title="Call MTS Enterprises"
          >
            <Phone className="w-4 h-4 text-black" />
            <span>Call Now</span>
          </button>
        </div>
      </div>
    </>
  );
};
