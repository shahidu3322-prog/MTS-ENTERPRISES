import React from 'react';
import { X, Check, Phone, MessageSquare, ArrowRight, ShieldCheck, HardHat, Calendar } from 'lucide-react';
import { ServiceItem } from '../types';
import { CONTACT_INFO } from '../data/siteData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onEnquire: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onEnquire,
}) => {
  if (!service) return null;

  const whatsappMsg = encodeURIComponent(
    `Hello MTS Enterprises, I would like to enquire about ${service.title}. Please provide details on availability.`
  );

  return (
    <div
      id="service-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="service-detail-modal-content"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar rounded-sm bg-zinc-950 border border-zinc-800 shadow-2xl text-zinc-100 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-service-detail-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-sm bg-zinc-900 hover:bg-orange-500 hover:text-black text-zinc-400 transition-colors z-10 cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 rounded-sm bg-zinc-900 border border-zinc-800 text-orange-500 text-[10px] font-black uppercase tracking-widest">
            {service.badge || 'Service Specs'}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">MTS Fleet Specification</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3 font-['Outfit']">
          {service.title}
        </h3>

        {/* Hero Image in Modal */}
        <div className="relative h-56 sm:h-64 w-full rounded-sm overflow-hidden mb-6 border border-zinc-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        {/* Description */}
        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
          {service.fullDescription}
        </p>

        {/* Technical Specifications Grid */}
        <div className="mb-6">
          <h4 className="text-xs font-black text-orange-500 uppercase tracking-widest mb-3 flex items-center gap-2">
            <HardHat className="w-4 h-4" /> Technical & Operational Specs
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.specifications.map((spec, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-sm bg-zinc-900 border border-zinc-800 text-xs"
              >
                <span className="text-zinc-400 font-medium">{spec.label}</span>
                <span className="text-white font-bold text-right ml-2">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-black text-orange-500 uppercase tracking-widest mb-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Key Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-sm bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-200"
              >
                <Check className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal Project Applications */}
        <div className="mb-8">
          <h4 className="text-xs font-black text-orange-500 uppercase tracking-widest mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Recommended Project Use Cases
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.idealFor.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-sm bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="pt-4 border-t border-zinc-900 flex flex-col sm:flex-row gap-3">
          <button
            id={`modal-enquire-btn-${service.id}`}
            onClick={() => {
              onClose();
              onEnquire(service.id);
            }}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-sm bg-orange-500 hover:bg-orange-400 text-black text-xs font-black uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <span>Request This Service</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>

          <a
            href={`https://wa.me/918879153549?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-5 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:9920693090"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Phone className="w-4 h-4 text-orange-500" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};
