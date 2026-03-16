'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';

interface HeroSectionProps {
  onApply: () => void;
}

export default function HeroSection({ onApply }: HeroSectionProps) {
  const supportEmail = "support@cashlyticcapital.com";
  const supportPhone = "7304301471";

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-20 md:py-32 overflow-hidden">
      {/* Floating Support Button - Mail instead of WhatsApp */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-8 right-8 z-50 group"
      >
        <a
          href={`mailto:${supportEmail}`}
          className="flex items-center gap-2 bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary/90 transition-all"
        >
          <Mail size={24} className="group-hover:scale-110 transition-transform" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-semibold whitespace-nowrap">
            Support Email
          </span>
        </a>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight"
            >
              Sahi Soch,
              <br />
              <span className="text-accent">Sunehra Bhavishya</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-foreground/70 mb-8 leading-relaxed"
            >
              Expert Guidance for Home, Business, and Personal Loans in Prayagraj. 
              <br />
              <span className="font-bold text-primary flex items-center gap-2 mt-2">
                <Phone size={18} className="text-accent" /> +91 {supportPhone}
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={onApply}
                className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-3 rounded-full flex items-center gap-2 cursor-pointer shadow-lg"
              >
                Get Started
                <ArrowRight size={18} />
              </Button>
              <a href="#about">
                <Button
                  className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-full cursor-pointer transition-all shadow-md"
                >
                  Learn More
                </Button>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex gap-8"
            >
              <div>
                <p className="text-2xl font-bold text-accent">1000+</p>
                <p className="text-sm text-foreground/60">Satisfied Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">₹500Cr+</p>
                <p className="text-sm text-foreground/60">Loans Disbursed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">50+</p>
                <p className="text-sm text-foreground/60">Bank Partners</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Banking Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 backdrop-blur-sm border border-accent/30">
                <div className="space-y-6">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                    className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-accent"
                  >
                    <div className="text-sm text-foreground/60 mb-2">Home Loan</div>
                    <div className="text-2xl font-bold text-primary">₹25 Lakhs</div>
                  </motion.div>

                  <motion.div
                    animate={{ x: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
                    className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-primary"
                    style={{ marginLeft: '20px' }}
                  >
                    <div className="text-sm text-foreground/60 mb-2">Business Loan</div>
                    <div className="text-2xl font-bold text-primary">₹50 Lakhs</div>
                  </motion.div>

                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                    className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-accent"
                  >
                    <div className="text-sm text-foreground/60 mb-2">Personal Loan</div>
                    <div className="text-2xl font-bold text-primary">₹10 Lakhs</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}