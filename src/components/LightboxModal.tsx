import React from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
  onEnquire: (serviceName: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
  onEnquire,
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const whatsappMsg = encodeURIComponent(
    `Hello MTS Enterprises, I saw "${item.title}" in your gallery and would like to enquire about similar service.`
  );

  return (
    <div
      id="gallery-lightbox-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Lightbox Modal Box */}
      <div
        id="gallery-lightbox-content"
        className="relative w-full max-w-4xl rounded-sm bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            id="close-lightbox-btn"
            onClick={onClose}
            className="p-2.5 rounded-sm bg-zinc-950/80 hover:bg-orange-500 hover:text-black text-white transition-colors cursor-pointer border border-zinc-800"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Preview Image Container */}
        <div className="relative h-[320px] sm:h-[450px] w-full bg-zinc-950 flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          {/* Navigation Arrows */}
          <button
            id="lightbox-prev-btn"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-sm bg-zinc-950/80 hover:bg-orange-500 hover:text-black text-white border border-zinc-800 backdrop-blur-md transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            id="lightbox-next-btn"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-sm bg-zinc-950/80 hover:bg-orange-500 hover:text-black text-white border border-zinc-800 backdrop-blur-md transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer Details */}
        <div className="p-6 sm:p-7 bg-zinc-900 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-sm bg-zinc-950 border border-zinc-800 text-orange-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {item.categoryLabel}
              </span>
              {item.location && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-orange-500" />
                  {item.location}
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight font-['Outfit']">{item.title}</h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">{item.description}</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              id="lightbox-enquire-btn"
              onClick={() => {
                onClose();
                onEnquire(item.categoryLabel);
              }}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-sm bg-orange-500 hover:bg-orange-400 text-black text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>Enquire Service</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>

            <a
              href={`https://wa.me/918879153549?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-sm bg-zinc-950 hover:bg-zinc-800 text-emerald-400 border border-zinc-800 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href="tel:9920693090"
              className="p-2.5 rounded-sm bg-zinc-950 hover:bg-zinc-800 text-orange-500 border border-zinc-800 transition-colors"
              title="Call Directly"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
