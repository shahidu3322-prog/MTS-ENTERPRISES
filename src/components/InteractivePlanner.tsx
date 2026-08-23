import React, { useState } from 'react';
import { HardHat, Truck, Car, Trash2, ShieldCheck, Boxes, Check, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { SERVICES_DATA, CONTACT_INFO } from '../data/siteData';

interface InteractivePlannerProps {
  onOpenEnquiryWithPlan: (planDetails: string) => void;
}

export const InteractivePlanner: React.FC<InteractivePlannerProps> = ({ onOpenEnquiryWithPlan }) => {
  const [selectedService, setSelectedService] = useState<string>('jcb-hire');
  const [siteType, setSiteType] = useState<string>('Commercial / Infrastructure');
  const [timeline, setTimeline] = useState<string>('Immediate (Within 24 Hours)');
  const [operatorRequired, setOperatorRequired] = useState<boolean>(true);
  const [shiftDuration, setShiftDuration] = useState<string>('Daily Shift (8-10 Hours)');

  const serviceObj = SERVICES_DATA.find((s) => s.id === selectedService) || SERVICES_DATA[0];

  const getPlanSummary = () => {
    return `Service: ${serviceObj.title} | Site: ${siteType} | Duration: ${shiftDuration} | Timeline: ${timeline} | Operator: ${operatorRequired ? 'Required' : 'Own Operator'}`;
  };

  const handleWhatsAppEnquiry = () => {
    const message = `*Custom Service Request - MTS Enterprises*
🏗️ *Equipment / Service:* ${serviceObj.title}
🏢 *Site Category:* ${siteType}
⏱️ *Required Shift:* ${shiftDuration}
📅 *Deployment Timeline:* ${timeline}
👷 *Certified Operator:* ${operatorRequired ? 'Yes (Included)' : 'Not needed'}
📍 Please contact me to confirm availability and schedule.`;
    window.open(`https://wa.me/918879153549?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-sm bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-zinc-900 border border-zinc-800 text-orange-500 text-[10px] font-black uppercase tracking-[0.25em] mb-3">
              Interactive Service Planner
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-['Outfit'] mb-2">
              Configure Your Site Machinery & Crew Requirements
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Select your equipment, work duration, and operational setup to get swift service dispatch and operator allocation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options Left (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Equipment / Service Choice */}
              <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-orange-500 mb-3">
                  1. Select Equipment or Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {SERVICES_DATA.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={`p-3 rounded-sm text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        selectedService === s.id
                          ? 'bg-zinc-900 border-orange-500 text-white shadow-md'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      <span className="text-xs font-bold line-clamp-1">{s.title}</span>
                      <span className="text-[10px] font-semibold text-orange-500 mt-1">{s.badge}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Site Type */}
              <div>
                <label className="block text-[11px] font-black uppercase tracking-widest text-orange-500 mb-3">
                  2. Project Site Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Commercial / Infra',
                    'Residential Plot',
                    'Demolition Site',
                    'Industrial Plant',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSiteType(type)}
                      className={`p-2.5 rounded-sm text-xs font-bold border transition-all cursor-pointer text-center ${
                        siteType === type
                          ? 'bg-orange-500 text-black border-orange-500 font-black'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Shift / Duration & Operator */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-widest text-orange-500 mb-2">
                    3. Required Shift / Duration
                  </label>
                  <select
                    value={shiftDuration}
                    onChange={(e) => setShiftDuration(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-sm bg-zinc-900 border border-zinc-800 text-white text-xs font-medium focus:outline-none focus:border-orange-500"
                  >
                    <option value="Single Trip / Immediate Clearance">Single Trip / Immediate Clearance</option>
                    <option value="Daily Shift (8-10 Hours)">Daily Shift (8-10 Hours)</option>
                    <option value="Multi-Day Project (3-7 Days)">Multi-Day Project (3-7 Days)</option>
                    <option value="Monthly Contract Basis">Monthly Contract Basis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-black uppercase tracking-widest text-orange-500 mb-2">
                    4. Operator & Crew
                  </label>
                  <button
                    type="button"
                    onClick={() => setOperatorRequired(!operatorRequired)}
                    className={`w-full px-3.5 py-2.5 rounded-sm border text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                      operatorRequired
                        ? 'bg-zinc-900 border-emerald-500/80 text-emerald-400'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                    }`}
                  >
                    <span>{operatorRequired ? '✓ Certified Operator Included' : 'Machine Only'}</span>
                    <span className="text-[10px] uppercase font-semibold">Toggle</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Summary Card Right (5 cols) */}
            <div className="lg:col-span-5 rounded-sm bg-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-900">
                  <span className="text-xs font-black uppercase tracking-widest text-orange-500">
                    Configuration Summary
                  </span>
                  <span className="px-2.5 py-0.5 rounded-sm bg-zinc-900 border border-zinc-800 text-emerald-400 text-[10px] font-black uppercase tracking-wider">
                    Fast Dispatch
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Selected Service:</span>
                    <span className="font-bold text-white text-right">{serviceObj.title}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Site Environment:</span>
                    <span className="font-semibold text-zinc-200 text-right">{siteType}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Operation Duration:</span>
                    <span className="font-semibold text-zinc-200 text-right">{shiftDuration}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Operator Status:</span>
                    <span className="font-semibold text-orange-400 text-right">
                      {operatorRequired ? 'Experienced Driver/Operator' : 'Self Operated'}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-sm bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 space-y-1 mb-6">
                  <div className="font-black text-white flex items-center gap-1.5 uppercase tracking-wide font-['Outfit']">
                    <Check className="w-3.5 h-3.5 text-orange-500" />
                    MTS Fleet Guarantee
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    All machines are serviced, fueled, safety-checked, and operated by licensed technicians.
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  id="planner-submit-plan-btn"
                  onClick={() => onOpenEnquiryWithPlan(getPlanSummary())}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-sm bg-orange-500 hover:bg-orange-400 text-black text-xs font-black uppercase tracking-widest transition-all shadow-md cursor-pointer"
                >
                  <span>Submit Service Plan</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>

                <button
                  id="planner-whatsapp-plan-btn"
                  onClick={handleWhatsAppEnquiry}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-emerald-400 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Plan on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
