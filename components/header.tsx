'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

// THIS IS WHAT WAS MISSING. It tells TypeScript this component accepts a function.
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
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <img
            src="/logo.jpeg"
            alt="Cashlytic Capital Logo"
            className="h-14 w-14 rounded-full object-cover border border-gray-200 shadow-sm"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-foreground hover:text-accent font-medium transition-colors"
            >
              Our Services
              <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={18} />
              </motion.div>
            </button>

            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border"
              >
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={`#${service.id}`}
                    onClick={() => setServicesOpen(false)}
                    className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted hover:text-accent transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service.label}
                  </a>
                ))}
              </motion.div>
            )}
          </div>

          <a href="#about" className="text-foreground hover:text-accent font-medium transition-colors">
            About Us
          </a>

          <Button
            onClick={onCheckEligibility}
            className="bg-accent hover:bg-accent/90 text-primary font-bold px-6 py-2 rounded-full cursor-pointer"
          >
            Check Eligibility
          </Button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-primary">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4 shadow-lg absolute w-full left-0"
        >
          <div className="font-bold text-primary mb-2 border-b pb-2">Our Services</div>
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-accent ml-4"
            >
              {service.label}
            </a>
          ))}
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold text-primary border-t pt-2 mt-2"
          >
            About Us
          </a>
          
          <Button 
            onClick={() => {
              setMobileMenuOpen(false);
              if (onCheckEligibility) onCheckEligibility();
            }} 
            className="bg-accent hover:bg-accent/90 text-primary font-bold w-full mt-4 cursor-pointer"
          >
            Check Eligibility
          </Button>
        </motion.div>
      )}
    </header>
  );
}