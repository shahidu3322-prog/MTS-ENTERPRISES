import React, { useState } from 'react';
import { 
  Hammer, 
  Truck, 
  Car, 
  Trash2, 
  ShieldCheck, 
  Boxes, 
  ArrowRight, 
  Check, 
  Phone, 
  MessageSquare, 
  Info,
  Layers
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenEnquiryModal: (preselectedService?: string) => void;
  onOpenDetailModal: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onOpenEnquiryModal, 
  onOpenDetailModal 
}) => {
  const [filter, setFilter] = useState<'all' | 'machinery' | 'cleaning' | 'transport'>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer': return <Hammer className="w-5 h-5 text-orange-500" />;
      case 'Truck': return <Truck className="w-5 h-5 text-orange-500" />;
      case 'Car': return <Car className="w-5 h-5 text-orange-500" />;
      case 'Trash2': return <Trash2 className="w-5 h-5 text-orange-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-orange-500" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-orange-500" />;
      default: return <Layers className="w-5 h-5 text-orange-500" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (filter === 'all') return true;
    if (filter === 'machinery') return s.id === 'jcb-hire' || s.id === 'dumper-hire';
    if (filter === 'cleaning') return s.id === 'debris-cleaning' || s.id === 'site-cleaning';
    if (filter === 'transport') return s.id === 'bolero-pickup-hire' || s.id === 'material-transportation' || s.id === 'dumper-hire';
    return true;
  });

  return (
    <section id="services" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-zinc-900 border border-zinc-800 text-orange-500 text-[10px] font-black uppercase tracking-[0.25em] mb-4">
            Industrial & Heavy Equipment Fleet
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase font-['Outfit'] mb-4">
            Our Core Services
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            High-performance machinery rentals, dedicated debris haulage, and specialized construction site cleaning tailored to your site specifications.
          </p>

          {/* Quick Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Services (6)' },
              { id: 'machinery', label: 'Heavy Machinery' },
              { id: 'cleaning', label: 'Cleaning & Debris' },
              { id: 'transport', label: 'Material Logistics' },
            ].map((tab) => (
              <button
                key={tab.id}
                id={`services-filter-${tab.id}`}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-sm text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-orange-500 text-black shadow-md'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const whatsappServiceMsg = encodeURIComponent(
              `Hello MTS Enterprises, I would like to enquire about ${service.title}.`
            );

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group rounded-sm bg-zinc-950 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col overflow-hidden shadow-2xl"
              >
                {/* Image Section with Overlay */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded-sm bg-zinc-950/90 border border-zinc-800 text-orange-500 text-[10px] font-black tracking-widest uppercase">
                      {service.badge}
                    </div>
                  )}

                  {/* Icon Capsule */}
                  <div className="absolute bottom-3 right-4 w-10 h-10 rounded-sm bg-zinc-950/90 border border-zinc-800 flex items-center justify-center shadow-lg group-hover:border-orange-500 transition-colors">
                    {getServiceIcon(service.icon)}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-orange-500 transition-colors font-['Outfit']">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    {/* Key Capabilities / Features */}
                    <div className="space-y-2 mb-6 bg-zinc-900/80 p-3.5 rounded-sm border border-zinc-800/80">
                      {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 font-semibold">
                          <Check className="w-3.5 h-3.5 text-orange-500 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs & Details Button */}
                  <div className="pt-3 border-t border-zinc-900">
                    <div className="grid grid-cols-2 gap-2 mb-2.5">
                      <button
                        id={`btn-enquire-${service.id}`}
                        onClick={() => onOpenEnquiryModal(service.id)}
                        className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-sm bg-orange-500 hover:bg-orange-400 text-black text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                      </button>

                      <button
                        id={`btn-view-details-${service.id}`}
                        onClick={() => onOpenDetailModal(service)}
                        className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5 text-orange-500" />
                        <span>Specs</span>
                      </button>
                    </div>

                    {/* Quick direct communication links */}
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 px-1 pt-1 font-semibold">
                      <a
                        href="tel:9920693090"
                        className="flex items-center gap-1 hover:text-orange-500 transition-colors"
                      >
                        <Phone className="w-3 h-3 text-orange-500" />
                        <span>9920693090</span>
                      </a>
                      <a
                        href={`https://wa.me/918879153549?text=${whatsappServiceMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
                      >
                        <MessageSquare className="w-3 h-3 text-emerald-400" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Banner beneath services */}
        <div className="mt-14 p-6 sm:p-8 rounded-sm bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight font-['Outfit']">
              Need Multi-Vehicle Fleet or Custom Site Project Support?
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-2xl">
              We coordinate combined machinery packages (JCB + Dumper + Labor + Transportation) tailored to your exact civil or commercial site demands.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              id="services-banner-call-btn"
              href="tel:9920693090"
              className="flex items-center gap-2 px-5 py-3 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white text-xs font-black uppercase tracking-wider transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>Call: 9920693090</span>
            </a>
            <button
              id="services-banner-enquire-btn"
              onClick={() => onOpenEnquiryModal()}
              className="flex items-center gap-2 px-6 py-3 rounded-sm bg-orange-500 hover:bg-orange-400 text-black text-xs font-black uppercase tracking-widest shadow-md transition-all cursor-pointer"
            >
              <span>Request Service Details</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
