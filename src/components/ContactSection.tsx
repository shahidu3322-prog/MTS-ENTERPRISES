import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, ExternalLink, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

export const ContactSection: React.FC = () => {
  const whatsappMessage = encodeURIComponent('Hello MTS Enterprises, I would like to enquire about your services.');

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-zinc-900 border border-zinc-800 text-orange-500 text-[10px] font-black uppercase tracking-[0.25em] mb-4">
            Direct Communication & Site Dispatch
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase font-['Outfit'] mb-4">
            Contact MTS Enterprises
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Connect directly with our operations team via phone call, WhatsApp, email, or visit our base of operations.
          </p>
        </div>

        {/* Contact Grid: Cards + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Cards: Direct Communication */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Calls Card */}
            <div className="p-6 rounded-sm bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white uppercase tracking-tight font-['Outfit']">Call Us Directly</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Immediate Phone Support</p>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  id="contact-call-9920693090"
                  href="tel:9920693090"
                  className="flex items-center justify-between p-3 rounded-sm bg-zinc-900 hover:bg-orange-500 hover:text-black text-zinc-200 font-black text-xs uppercase tracking-wider border border-zinc-800 transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-500 group-hover:text-black" />
                    9920693090
                  </span>
                  <span className="text-[10px] opacity-75 group-hover:opacity-100 font-bold uppercase">Primary</span>
                </a>
                <a
                  id="contact-call-8879153549"
                  href="tel:8879153549"
                  className="flex items-center justify-between p-3 rounded-sm bg-zinc-900 hover:bg-orange-500 hover:text-black text-zinc-200 font-black text-xs uppercase tracking-wider border border-zinc-800 transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-500 group-hover:text-black" />
                    8879153549
                  </span>
                  <span className="text-[10px] opacity-75 group-hover:opacity-100 font-bold uppercase">Secondary</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Chat Card */}
            <div className="p-6 rounded-sm bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white uppercase tracking-tight font-['Outfit']">WhatsApp Enquiries</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Fast Chat & Location Sharing</p>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  id="contact-whatsapp-8879153549"
                  href={`https://wa.me/918879153549?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-sm bg-zinc-900 hover:bg-emerald-600 hover:text-white text-emerald-400 font-bold text-xs uppercase tracking-wider border border-zinc-800 transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                    8879153549
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-black">Chat Now</span>
                </a>
                <a
                  id="contact-whatsapp-9920693090"
                  href={`https://wa.me/919920693090?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-sm bg-zinc-900 hover:bg-emerald-600 hover:text-white text-emerald-400 font-bold text-xs uppercase tracking-wider border border-zinc-800 transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                    9920693090
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-black">Chat Now</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-sm bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white uppercase tracking-tight font-['Outfit']">Email Us</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Official Inquiries & Documentation</p>
                </div>
              </div>
              <a
                id="contact-email-link"
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center justify-between p-3 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-orange-500 font-bold text-xs border border-zinc-800 transition-all"
              >
                <span>{CONTACT_INFO.email}</span>
                <ExternalLink className="w-4 h-4 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Right 7 Columns: Interactive Map Card & Get Directions */}
          <div className="lg:col-span-7 rounded-sm bg-zinc-950 border border-zinc-900 p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden relative">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-orange-500 font-black text-[10px] uppercase tracking-widest mb-1">
                    <MapPin className="w-4 h-4" /> Base Location
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-['Outfit']">
                    MTS Enterprises Location
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
                    Servicing Mumbai, Navi Mumbai, Thane & Surrounding Infrastructure Zones
                  </p>
                </div>

                <a
                  id="contact-get-directions-btn"
                  href={CONTACT_INFO.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-orange-500 hover:bg-orange-400 text-black text-xs font-black uppercase tracking-widest transition-all shadow-md shrink-0"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Interactive Google Map Embed Frame */}
              <div className="relative w-full h-72 sm:h-80 rounded-sm overflow-hidden border border-zinc-800 bg-zinc-900 mb-6">
                <iframe
                  title="MTS Enterprises Location Map"
                  src="https://maps.google.com/maps?q=19.0760,72.8777&z=13&output=embed"
                  className="w-full h-full border-0 filter grayscale-[60%] contrast-125 invert-[85%] hue-rotate-180"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Overlay Card on Map */}
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-xs p-3.5 rounded-sm bg-zinc-950/95 backdrop-blur-md border border-zinc-800 text-xs shadow-2xl">
                  <div className="font-black text-white flex items-center gap-1.5 font-['Outfit'] uppercase text-xs tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    MTS Enterprises Hub
                  </div>
                  <p className="text-zinc-400 text-[11px] mt-1">
                    Machinery Yard & Material Handling Center
                  </p>
                  <a
                    href={CONTACT_INFO.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-orange-500 hover:underline font-black uppercase tracking-wider text-[10px] mt-2"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Availability */}
            <div className="pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>Operating Hours: <strong className="text-zinc-200">24/7 Response & Scheduled Shifts</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                <span className="text-zinc-200 font-bold">Immediate Field Dispatch Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
