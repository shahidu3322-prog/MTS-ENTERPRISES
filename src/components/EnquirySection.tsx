import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, AlertCircle, HardHat, Clock, Loader2 } from 'lucide-react';
import { EnquiryFormData } from '../types';
import { CONTACT_INFO } from '../data/siteData';
import { supabase } from '../lib/supabase';

interface EnquirySectionProps {
  initialService?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  initialService = '',
  isModal = false,
  onCloseModal,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    service: initialService || 'JCB on Hire',
    location: '',
    message: '',
    urgency: 'immediate',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<EnquiryFormData | null>(null);
  const [error, setError] = useState('');

  const serviceOptions = [
    'JCB on Hire',
    'Dumper on Hire',
    'Bolero Pickup on Hire',
    'Debris & Rubbish Cleaning',
    'Construction Site Cleaning',
    'Material Transportation & Removal',
    'Combined Fleet Package / Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // 1. Validation
    if (!formData.fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setError('Please enter a valid mobile number (at least 10 digits).');
      return;
    }
    if (!formData.service.trim()) {
      setError('Please select a service required.');
      return;
    }

    // 2. Show loading state
    setIsSubmitting(true);

    try {
      // 3. Save enquiry to Supabase enquiries table
      const formattedMessage = formData.message.trim()
        ? `[Urgency: ${formData.urgency}] ${formData.message.trim()}`
        : `[Urgency: ${formData.urgency}]`;

      const { error: insertError } = await supabase
        .from('enquiries')
        .insert([
          {
            full_name: formData.fullName.trim(),
            mobile_number: formData.phone.trim(),
            service_required: formData.service.trim(),
            location: formData.location.trim() || null,
            message: formattedMessage,
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      // 4. Save copy for WhatsApp confirmation and success screen
      setLastSubmittedData({ ...formData });

      // 5. Clear the form & show success
      setFormData({
        fullName: '',
        phone: '',
        service: initialService || 'JCB on Hire',
        location: '',
        message: '',
        urgency: 'immediate',
      });
      setSubmitted(true);
    } catch (err: any) {
      console.error('Supabase Enquiry Submission Error:', err);
      setError(
        err?.message ||
          'Failed to submit enquiry to database. Please check your internet connection or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppMessage = () => {
    const data = lastSubmittedData || formData;
    const text = `*New Service Enquiry - MTS Enterprises*
👤 *Client Name:* ${data.fullName}
📞 *Mobile:* ${data.phone}
🏗️ *Service Required:* ${data.service}
📍 *Site Location:* ${data.location || 'Mumbai / Region'}
⏱️ *Timeline:* ${data.urgency.replace('_', ' ').toUpperCase()}
💬 *Project Details:* ${data.message || 'Enquiry recorded in system. Please provide dispatch details.'}`;
    return encodeURIComponent(text);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      service: initialService || 'JCB on Hire',
      location: '',
      message: '',
      urgency: 'immediate',
    });
    setLastSubmittedData(null);
    setSubmitted(false);
    setError('');
  };

  return (
    <section id="enquiry" className={isModal ? 'p-1 sm:p-2' : 'py-24 bg-zinc-950 relative border-t border-zinc-900'}>
      {!isModal && (
        <div className="absolute inset-0 bg-industrial-grid opacity-20 pointer-events-none" />
      )}

      <div className={isModal ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'}>
        {!isModal && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-sm bg-zinc-900 border border-zinc-800 text-orange-500 text-[10px] font-black uppercase tracking-[0.25em] mb-4">
              Get In Touch With Our Dispatch Team
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase font-['Outfit'] mb-4">
              Customer Enquiry & Service Booking
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Submit your project details below to schedule heavy machinery, arrange debris clearance, or request material transport. Our team will contact you promptly.
            </p>
          </div>
        )}

        <div className={`max-w-3xl mx-auto rounded-sm bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-10 ${isModal ? 'border-none p-0 bg-transparent shadow-none' : ''}`}>
          {submitted ? (
            /* Success Screen */
            <div
              id="enquiry-success-container"
              className="text-center py-8 px-4 rounded-sm bg-zinc-900 border border-orange-500/40 animate-in zoom-in-95 duration-300"
            >
              <div className="w-16 h-16 rounded-sm bg-zinc-950 border border-emerald-500 flex items-center justify-center mx-auto mb-5 text-emerald-400 shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-['Outfit'] mb-3">
                Enquiry Received Successfully!
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm max-w-lg mx-auto mb-8">
                Thank you, <strong className="text-orange-500 font-bold">{lastSubmittedData?.fullName || 'Valued Client'}</strong>. Your request has been securely recorded in our database. Our operations coordinator at MTS Enterprises will contact you on <strong className="text-white font-bold">{lastSubmittedData?.phone}</strong> shortly to finalize your service schedule.
              </p>

              {/* Direct Instant Action to WhatsApp */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6">
                <a
                  id="success-whatsapp-send-btn"
                  href={`https://wa.me/918879153549?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly on WhatsApp</span>
                </a>

                <a
                  id="success-call-now-btn"
                  href="tel:9920693090"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-white text-xs font-black uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>Call 9920693090</span>
                </a>
              </div>

              <button
                id="submit-another-enquiry-btn"
                onClick={handleReset}
                className="text-xs text-zinc-400 hover:text-orange-500 underline underline-offset-4 cursor-pointer font-bold"
              >
                Submit another service enquiry
              </button>
            </div>
          ) : (
            /* Enquiry Form */
            <form id="customer-enquiry-form" onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3.5 rounded-sm bg-red-950/40 border border-red-500 text-red-300 text-xs flex items-center gap-2 font-bold">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="enquiry-fullName" className="block text-[11px] font-black uppercase tracking-widest text-zinc-300 mb-2">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="enquiry-fullName"
                    required
                    disabled={isSubmitting}
                    placeholder="e.g. Rajesh Sharma / Contractor"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="enquiry-phone" className="block text-[11px] font-black uppercase tracking-widest text-zinc-300 mb-2">
                    Mobile Number <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="enquiry-phone"
                    required
                    disabled={isSubmitting}
                    placeholder="e.g. 9920693090"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Service Dropdown */}
                <div>
                  <label htmlFor="enquiry-service" className="block text-[11px] font-black uppercase tracking-widest text-zinc-300 mb-2">
                    Service Required <span className="text-orange-500">*</span>
                  </label>
                  <select
                    id="enquiry-service"
                    disabled={isSubmitting}
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-zinc-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="enquiry-location" className="block text-[11px] font-black uppercase tracking-widest text-zinc-300 mb-2">
                    Site Location / Area
                  </label>
                  <input
                    type="text"
                    id="enquiry-location"
                    disabled={isSubmitting}
                    placeholder="e.g. Andheri East, Navi Mumbai, Thane"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Urgency Selection */}
              <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-zinc-300 mb-2">
                  When do you need the service?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'immediate', label: 'Immediate / Today' },
                    { id: 'within_24h', label: 'Within 24 Hours' },
                    { id: 'this_week', label: 'This Week' },
                    { id: 'planning', label: 'Upcoming Project' },
                  ].map((u) => (
                    <button
                      type="button"
                      key={u.id}
                      disabled={isSubmitting}
                      onClick={() => setFormData({ ...formData, urgency: u.id as any })}
                      className={`p-2.5 rounded-sm text-xs font-bold border transition-all cursor-pointer disabled:opacity-50 ${
                        formData.urgency === u.id
                          ? 'bg-orange-500 text-black border-orange-500 font-black'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="enquiry-message" className="block text-[11px] font-black uppercase tracking-widest text-zinc-300 mb-2">
                  Project Details / Special Requirements
                </label>
                <textarea
                  id="enquiry-message"
                  rows={3}
                  disabled={isSubmitting}
                  placeholder="Describe your site requirements, estimated load volume, hours of operation, or special instructions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  id="enquiry-submit-btn"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm bg-orange-500 hover:bg-orange-400 text-black text-xs font-black uppercase tracking-widest shadow-md transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Service Enquiry</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/918879153549?text=${formData.fullName ? generateWhatsAppMessage() : encodeURIComponent('Hello MTS Enterprises, I would like to enquire about your equipment services.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-emerald-400 hover:text-emerald-300 text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-400 pt-2 font-medium">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-orange-500" />
                  Prompt Response Guaranteed
                </span>
                <span>•</span>
                <span>Direct Site Coordinator Contact</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
