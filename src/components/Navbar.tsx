import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Shield, ChevronRight, HardHat } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

interface NavbarProps {
  onOpenEnquiryModal: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiryModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callDropdownOpen, setCallDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappMessage = encodeURIComponent('Hello MTS Enterprises, I would like to enquire about your services.');

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 shadow-2xl shadow-black/80 py-3.5'
          : 'bg-gradient-to-b from-zinc-950/95 via-zinc-950/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="brand-logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-sm bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20 text-black font-black group-hover:bg-orange-400 transition-all">
              <HardHat className="w-6 h-6 stroke-[2.4]" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl sm:text-2xl tracking-tighter text-white uppercase flex items-center gap-1.5 font-['Outfit']">
                MTS <span className="text-orange-500">Enterprises</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-zinc-400 -mt-1">
                Elite Industrial Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-[11px] uppercase tracking-widest font-bold text-zinc-400 hover:text-white transition-colors py-1 relative hover:after:w-full after:transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Call Dropdown / Button */}
            <div className="relative">
              <button
                id="navbar-call-dropdown-btn"
                onClick={() => setCallDropdownOpen(!callDropdownOpen)}
                onBlur={() => setTimeout(() => setCallDropdownOpen(false), 250)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-sm bg-zinc-900 border border-zinc-800 hover:border-orange-500/60 text-zinc-200 hover:text-white transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
                title="Call MTS Enterprises"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span>Call Now</span>
              </button>

              {callDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-sm bg-zinc-950 border border-zinc-800 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 px-3 py-1.5 border-b border-zinc-900 mb-1">
                    Direct Contact Lines
                  </div>
                  {CONTACT_INFO.phones.map((phone) => (
                    <a
                      key={phone.number}
                      href={`tel:${phone.number}`}
                      className="flex items-center justify-between px-3 py-2 rounded-sm text-xs font-bold text-zinc-200 hover:bg-orange-500 hover:text-black transition-colors my-0.5"
                    >
                      <span>{phone.formatted}</span>
                      <span className="text-[10px] uppercase opacity-75">{phone.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* WhatsApp Direct */}
            <a
              id="navbar-whatsapp-cta"
              href={`https://wa.me/918879153549?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-sm bg-zinc-900 border border-zinc-800 text-emerald-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-500 transition-all text-xs font-bold uppercase tracking-wider"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* Request Service CTA */}
            <button
              id="navbar-request-service-btn"
              onClick={() => onOpenEnquiryModal()}
              className="flex items-center gap-1.5 px-5 py-2 rounded-sm bg-orange-500 hover:bg-orange-400 text-black font-black text-xs uppercase tracking-tight shadow-md transition-all cursor-pointer"
            >
              <span>Enquire Now</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="navbar-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-orange-500 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-[64px] bg-zinc-950/98 backdrop-blur-xl border-b border-zinc-800 shadow-2xl p-6 transition-all"
        >
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2.5 rounded-sm text-xs uppercase tracking-wider font-bold text-zinc-300 hover:bg-zinc-900 hover:text-orange-500 transition-colors border border-zinc-900"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-900 flex flex-col gap-2.5">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                Direct Contact Lines
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  id="mobile-call-btn-1"
                  href={`tel:9920693090`}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-sm bg-zinc-900 border border-zinc-800 text-xs font-black text-white hover:bg-orange-500 hover:text-black transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-500" />
                  <span>9920693090</span>
                </a>
                <a
                  id="mobile-call-btn-2"
                  href={`tel:8879153549`}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-sm bg-zinc-900 border border-zinc-800 text-xs font-black text-white hover:bg-orange-500 hover:text-black transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-500" />
                  <span>8879153549</span>
                </a>
              </div>

              <a
                id="mobile-whatsapp-btn"
                href={`https://wa.me/918879153549?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (8879153549)</span>
              </a>

              <button
                id="mobile-enquire-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiryModal();
                }}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-sm bg-orange-500 hover:bg-orange-400 text-black text-xs font-black uppercase tracking-wider transition-colors shadow-lg"
              >
                <span>Request Service / Enquire</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
