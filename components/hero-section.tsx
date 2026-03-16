'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onApply: () => void;
}

export default function HeroSection({ onApply }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-20 md:py-32">
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
                className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-3 rounded-full flex items-center gap-2 cursor-pointer"
              >
                Get Started
                <ArrowRight size={18} />
              </Button>
              <a href="#about">
                <Button
                  className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-full cursor-pointer transition-all"
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
                <p className="text-2xl font-bold text-accent">8+</p>
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
                  {/* Card 1 */}
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                    className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-accent"
                  >
                    <div className="text-sm text-foreground/60 mb-2">Home Loan</div>
                    <div className="text-2xl font-bold text-primary">₹25 Lakhs</div>
                    <div className="text-xs text-foreground/50 mt-2">At best rates</div>
                  </motion.div>

                  {/* Card 2 */}
                  <motion.div
                    animate={{ x: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
                    className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-secondary"
                    style={{ marginLeft: '20px' }}
                  >
                    <div className="text-sm text-foreground/60 mb-2">Business Loan</div>
                    <div className="text-2xl font-bold text-primary">₹50 Lakhs</div>
                    <div className="text-xs text-foreground/50 mt-2">Scale your business</div>
                  </motion.div>

                  {/* Card 3 */}
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                    className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-accent"
                  >
                    <div className="text-sm text-foreground/60 mb-2">Personal Loan</div>
                    <div className="text-2xl font-bold text-primary">₹5-10 Lakhs</div>
                    <div className="text-xs text-foreground/50 mt-2">Quick approval</div>
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