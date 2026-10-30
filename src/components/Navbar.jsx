import React, { useState, useEffect } from 'react';
import { Menu, X, Car, Shield, Gauge, Volume2, Sparkles, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenTestDrive }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: '3D Configurator', href: '#configurator' },
    { name: 'Performance', href: '#performance' },
    { name: 'Sound Simulator', href: '#sound' },
    { name: 'Specifications', href: '#specs' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bmw-dark/90 backdrop-blur-md border-b border-bmw-border py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-bmw-mBlue via-bmw-darkBlue to-bmw-mRed p-0.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-bmw-dark flex items-center justify-center">
                <span className="font-bold text-xs tracking-tighter bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">M340i</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-white text-lg flex items-center gap-1.5">
                BMW <span className="text-bmw-mBlue">M</span>340i <span className="text-xs px-1.5 py-0.5 rounded bg-bmw-mBlue/20 text-bmw-mLightBlue border border-bmw-mBlue/30 font-mono">xDrive</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase font-mono">M Performance</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-bmw-card/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-bmw-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenTestDrive}
              className="relative group overflow-hidden rounded-full p-px font-semibold text-xs uppercase tracking-wider"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-bmw-mBlue via-blue-600 to-bmw-mRed transition-all duration-300 group-hover:opacity-90"></span>
              <span className="relative block px-5 py-2.5 rounded-full bg-bmw-dark text-white transition-all duration-300 group-hover:bg-opacity-0 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" />
                Book a Test Drive
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-bmw-card border border-bmw-border text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bmw-dark/95 backdrop-blur-xl border-b border-bmw-border py-4 px-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                {link.name}
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTestDrive();
              }}
              className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-bmw-mBlue via-blue-600 to-bmw-mRed text-white font-semibold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Book a Test Drive
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
