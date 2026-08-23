import React from 'react';
import { X, HardHat } from 'lucide-react';
import { EnquirySection } from './EnquirySection';

interface EnquiryModalProps {
  isOpen: boolean;
  preselectedService?: string;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  preselectedService = '',
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="enquiry-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="enquiry-modal-card"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar rounded-sm bg-zinc-950 border border-zinc-800 p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-enquiry-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-sm bg-zinc-900 hover:bg-orange-500 hover:text-black text-zinc-400 border border-zinc-800 transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-sm bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500">
            <HardHat className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight font-['Outfit']">
              Service Enquiry & Booking
            </h3>
            <p className="text-[10px] font-black uppercase tracking-widest text-orange-500">MTS Enterprises Operations Desk</p>
          </div>
        </div>

        {/* Embedded Form */}
        <EnquirySection
          initialService={preselectedService}
          isModal={true}
          onCloseModal={onClose}
        />
      </div>
    </div>
  );
};
