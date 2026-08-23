import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { InteractivePlanner } from './components/InteractivePlanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { HowItWorks } from './components/HowItWorks';
import { GallerySection } from './components/GallerySection';
import { EnquirySection } from './components/EnquirySection';
import { ContactSection } from './components/ContactSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { EnquiryModal } from './components/EnquiryModal';
import { ServiceItem } from './types';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [detailService, setDetailService] = useState<ServiceItem | null>(null);

  const handleOpenEnquiryModal = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    } else {
      setPreselectedService('JCB on Hire');
    }
    setEnquiryModalOpen(true);
  };

  const handleOpenDetailModal = (service: ServiceItem) => {
    setDetailService(service);
  };

  const handleNavigateToServices = () => {
    const el = document.querySelector('#services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-500 selection:text-black">
      {/* Top Sticky Navigation */}
      <Navbar onOpenEnquiryModal={handleOpenEnquiryModal} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenEnquiryModal={handleOpenEnquiryModal}
          onNavigateToServices={handleNavigateToServices}
        />

        {/* Core Services Section */}
        <ServicesSection
          onOpenEnquiryModal={handleOpenEnquiryModal}
          onOpenDetailModal={handleOpenDetailModal}
        />

        {/* Interactive Service Planner & Configurator */}
        <InteractivePlanner
          onOpenEnquiryWithPlan={(planDetails) => {
            setPreselectedService(planDetails);
            setEnquiryModalOpen(true);
          }}
        />

        {/* Why Choose MTS Enterprises */}
        <WhyChooseUs onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

        {/* About MTS Enterprises */}
        <AboutUs onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

        {/* How It Works */}
        <HowItWorks onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

        {/* Equipment & Work Gallery */}
        <GallerySection onOpenEnquiryModal={handleOpenEnquiryModal} />

        {/* Customer Enquiry Form Section */}
        <EnquirySection />

        {/* Contact Information & Interactive Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiryModal={handleOpenEnquiryModal} />

      {/* Floating Call & WhatsApp Action Buttons */}
      <FloatingActions onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

      {/* Service Detail & Technical Specs Modal */}
      <ServiceDetailModal
        service={detailService}
        onClose={() => setDetailService(null)}
        onEnquire={(serviceTitle) => {
          setDetailService(null);
          handleOpenEnquiryModal(serviceTitle);
        }}
      />

      {/* Global Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        preselectedService={preselectedService}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </div>
  );
}
