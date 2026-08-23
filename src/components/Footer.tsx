import React from 'react';
import { HardHat, Phone, MessageSquare, Mail, MapPin, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, SERVICES_DATA } from '../data/siteData';

interface FooterProps {
  onOpenEnquiryModal: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiryModal }) => {
  const whatsappMessage = encodeURIComponent('Hello MTS Enterprises, I would like to enquire about your services.');

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-zinc-900">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-orange-500 flex items-center justify-center text-black font-black shadow-md">
                <HardHat className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white font-['Outfit'] uppercase">
                MTS <span className="text-orange-500">ENTERPRISES</span>
              </span>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Reliable equipment rental, debris removal, transportation, and construction site cleaning services. Dedicated to power civil projects with certified machinery and skilled operators.
            </p>

            <div className="pt-2">
              <button
                id="footer-request-service-btn"
                onClick={() => onOpenEnquiryModal()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-orange-500 hover:bg-orange-400 text-black font-black text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer"
              >
                <span>Request Service Details</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white font-['Outfit']">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-bold">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Services', href: '#services' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'About Us', href: '#about' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-zinc-400 hover:text-orange-500 transition-colors flex items-center gap-1.5 uppercase tracking-wider text-[11px]"
                  >
                    <span className="text-orange-500 text-xs">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white font-['Outfit']">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs font-bold">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    id={`footer-service-${service.id}`}
                    onClick={() => onOpenEnquiryModal(service.title)}
                    className="text-zinc-400 hover:text-orange-500 transition-colors text-left flex items-center gap-1.5 cursor-pointer uppercase tracking-wider text-[11px]"
                  >
                    <span className="text-orange-500 text-xs">›</span>
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white font-['Outfit']">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:9920693090" className="hover:text-orange-500 text-white font-black transition-colors">
                    9920693090
                  </a>
                  <a href="tel:8879153549" className="hover:text-orange-500 text-white font-black transition-colors">
                    8879153549
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">WhatsApp Support:</span>
                  <a
                    href={`https://wa.me/918879153549?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 text-zinc-300 font-bold transition-colors"
                  >
                    8879153549 / 9920693090
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-orange-500 text-zinc-300 transition-colors break-all font-bold"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <a
                  href={CONTACT_INFO.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-orange-500 transition-colors flex items-center gap-1 uppercase tracking-wider text-[11px] font-bold"
                >
                  <span>Mumbai & Region • Open Maps</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © 2026 <strong className="text-white font-black uppercase tracking-wider">MTS Enterprises</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-zinc-500 text-[11px] font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
              Heavy Machinery & Site Services
            </span>
            <span>•</span>
            <span>24/7 Operations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
