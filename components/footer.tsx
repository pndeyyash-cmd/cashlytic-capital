'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Facebook, Instagram, ExternalLink } from 'lucide-react';
import PolicyModal from './policy-modal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">Cashlytic Capital</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Expert guidance for Home, Business, and Personal Loans in Prayagraj. Your trusted financial partner.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home-loan" className="text-white/70 hover:text-accent transition-colors">
                  Home Loans
                </a>
              </li>
              <li>
                <a href="#business-loan" className="text-white/70 hover:text-accent transition-colors">
                  Business Loans
                </a>
              </li>
              <li>
                <a href="#personal-loan" className="text-white/70 hover:text-accent transition-colors">
                  Personal Loans
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">
                Loan Calculator
              </li>
              <li className="text-white/70">
                Documentation
              </li>
              <li>
                <button onClick={() => window.location.hash = '#faq'} className="text-white/70 hover:text-accent transition-colors cursor-pointer">
                  FAQ
                </button>
              </li>
              <li className="text-white/70">
                Contact Us
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              {/* Address */}
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=296+Keshavmarg+Shantipuram+Phaphamau+Prayagraj+211013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent transition-colors cursor-pointer"
                >
                  296 Keshavmarg, Shantipuram, Phaphamau, Prayagraj 211013
                </a>
              </div>

              {/* Primary Phone */}
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+917304661471" className="text-white/70 hover:text-accent transition-colors">
                  +91 73046 61471
                </a>
              </div>

              {/* Secondary Phone */}
              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+917304301471" className="text-white/70 hover:text-accent transition-colors">
                  +91 73043 01471
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <div className="text-sm text-white/60">
            <p>© {currentYear} Cashlytic Capital. All rights reserved.</p>
            <p className="mt-3">
              Digital Experience by{' '}
              <a
                href="https://wa.me/918874377426?text=Hi%20Yash,%20I%20saw%20Cashlytic%20Capital%20website%20and%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
              >
                VardhanFlow
                <ExternalLink size={14} />
              </a>
            </p>
            <p className="text-xs text-white/50 mt-2">
              Dev Support: +91 8874377426 | pndeyyash@gmail.com
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/profile.php?id=61586976660898"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-primary rounded-full flex items-center justify-center transition-all"
            >
              <Facebook size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/cashlyticcapital/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-primary rounded-full flex items-center justify-center transition-all"
            >
              <Instagram size={18} />
            </motion.a>
          </div>

          {/* Legal Links */}
          <div className="text-sm text-white/60 space-x-4">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setTermsOpen(true)}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </motion.div>
      </div>

      {/* Policy Modals */}
      <PolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} type="privacy" />
      <PolicyModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} type="terms" />
    </footer>
  );
}
