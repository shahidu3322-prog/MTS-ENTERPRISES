import React, { useState } from 'react';
import { ZoomIn, MapPin, Tag, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/siteData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

interface GallerySectionProps {
  onOpenEnquiryModal: (preselectedService?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenEnquiryModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Equipment & Works' },
    { id: 'jcb', label: 'JCB Machinery' },
    { id: 'dumper', label: 'Dumper Fleet' },
    { id: 'bolero', label: 'Bolero Pickup' },
    { id: 'debris', label: 'Debris Removal' },
    { id: 'cleaning', label: 'Site Cleaning' },
    { id: 'transport', label: 'Material Logistics' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-zinc-900 border border-zinc-800 text-orange-500 text-[10px] font-black uppercase tracking-[0.25em] mb-4">
            Fleet & On-Site Projects
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase font-['Outfit'] mb-4">
            Equipment & Work Gallery
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Explore our heavy construction machinery, dumpers, Bolero pickups, and active site cleaning and debris removal projects in action.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`gallery-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-sm text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-orange-500 text-black shadow-md'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-sm overflow-hidden bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all duration-300 cursor-pointer shadow-2xl"
            >
              {/* Main Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%]"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-sm bg-zinc-950/90 border border-zinc-800 text-orange-500 text-[10px] font-black uppercase tracking-widest">
                {item.categoryLabel}
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-sm bg-zinc-950/90 border border-zinc-800 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-orange-500 group-hover:text-black transition-all">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4">
                <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-tight group-hover:text-orange-500 transition-colors font-['Outfit'] line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs line-clamp-2 mt-0.5">
                  {item.description}
                </p>
                {item.location && (
                  <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-orange-500/90 mt-2">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          item={selectedImage}
          items={filteredItems}
          onClose={() => setSelectedImage(null)}
          onSelect={(item) => setSelectedImage(item)}
          onEnquire={(serviceName) => {
            setSelectedImage(null);
            onOpenEnquiryModal(serviceName);
          }}
        />
      </div>
    </section>
  );
};
