'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onCheckEligibility?: () => void;
}

export default function Header({ onCheckEligibility }: HeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { label: 'Home Loan & LAP', id: 'home-loan' },
    { label: 'Business Loan', id: 'business-loan' },
    { label: 'Personal Loan', id: 'personal-loan' },
    { label: 'Car Loan', id: 'car-loan' },
    { label: 'Construction Loan', id: 'construction-loan' },
    { label: 'LAP', id: 'lap-loan' }
  ];

  return (
    <header className="sticky top-0 z-30 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Premium Circular Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img
            src="/logo.jpeg"
            alt="Cashlytic Capital Logo"
            className="h-16 w-16 rounded-full object-cover border-2 border-accent/30 shadow-md p-0.5 bg-white"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative">
            <button
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center gap-1 text-primary hover:text-accent font-semibold transition-colors py-2"
            >
              Our Services
              <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                >
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`#${service.id}`}
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-3 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-all font-medium"
                    >
                      {service.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#about" className="text-primary hover:text-accent font-semibold transition-colors">
            About Us
          </a>

          <Button
            onClick={onCheckEligibility}
            className="bg-accent hover:bg-accent/90 text-primary font-bold px-7 py-2.5 rounded-full shadow-lg transition-transform active:scale-95"
          >
            Check Eligibility
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-primary p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Main Services</div>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-semibold text-primary hover:text-accent py-1"
                  >
                    {service.label}
                  </a>
                ))}
              </div>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-primary border-t pt-4 mt-2"
              >
                About Us
              </a>
              
              <Button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onCheckEligibility) onCheckEligibility();
                }} 
                className="bg-accent hover:bg-accent/90 text-primary font-bold w-full py-6 text-lg rounded-xl mt-4"
              >
                Check Eligibility
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}