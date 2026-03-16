'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What documents are needed?',
    answer: 'We require PAN, Aadhaar, and 6 months of bank statements to process your loan application. Additional documents may be requested based on the loan type.'
  },
  {
    question: 'How long is the approval?',
    answer: 'Usually 3-7 working days. The approval timeline depends on document verification and bank processing. We keep you updated throughout the process.'
  },
  {
    question: 'Is there any upfront fee?',
    answer: 'No, we do not charge any fees before sanction. All charges are transparent and deducted only after the loan is approved and sanctioned by the bank.'
  }
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-background py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/60">
            Find answers to common questions about our loan services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-border rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors"
              >
                <span className="text-left font-semibold text-primary">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-accent flex-shrink-0" />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-muted border-t border-border">
                  <p className="text-foreground/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-accent/20"
        >
          <p className="text-foreground mb-4">
            Didn't find your answer?
          </p>
          <a
            href="https://wa.me/917304661471?text=Hi,%20I%20have%20a%20question%20about%20loans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-3 rounded-full transition-colors"
          >
            Get in Touch via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
