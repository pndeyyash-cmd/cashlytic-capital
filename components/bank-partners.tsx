'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const banks = [
  { name: 'HDFC', color: '#4169E1' },
  { name: 'ICICI', color: '#DC143C' },
  { name: 'Axis', color: '#003087' },
  { name: 'Tata Capital', color: '#1a4d8d' },
  { name: 'Bajaj Finserv', color: '#003d99' },
  { name: 'IDFC First', color: '#003087' },
  { name: 'Kotak', color: '#003087' },
  { name: 'IndusInd', color: '#0066cc' },
];

export default function BankPartners() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Bank Partners
          </h2>
          <p className="text-lg text-foreground/60">
            Partnering with India's leading financial institutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {banks.map((bank, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="bg-muted rounded-lg p-8 flex items-center justify-center h-24 transition-all duration-300 group-hover:shadow-lg group-hover:bg-white">
                <div className="flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ filter: 'grayscale(100%)' }}
                    whileHover={{ filter: 'grayscale(0%)' }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <Building2
                      size={24}
                      style={{
                        color: bank.color,
                      }}
                      className="transition-all duration-300"
                    />
                    <span className="font-bold text-sm text-primary transition-all duration-300 group-hover:text-accent">
                      {bank.name}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-accent/10 rounded-xl p-6 text-center border border-accent/20"
        >
          <p className="text-foreground">
            Get instant quotes from our partner banks and choose the best option for your needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
