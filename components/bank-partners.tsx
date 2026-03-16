'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

// Exact 50 Bank and NBFC Partners to match your claim
const banks = [
  { name: 'HDFC Bank', color: '#004c8f' },
  { name: 'ICICI Bank', color: '#f18221' },
  { name: 'Axis Bank', color: '#97144d' },
  { name: 'SBI', color: '#005587' },
  { name: 'Kotak Mahindra', color: '#ed1c24' },
  { name: 'IndusInd Bank', color: '#822e1b' },
  { name: 'IDFC First', color: '#902e2d' },
  { name: 'Bajaj Finserv', color: '#005cb9' },
  { name: 'Tata Capital', color: '#0061a9' },
  { name: 'Muthoot Finance', color: '#e31837' },
  { name: 'Cholamandalam', color: '#004289' },
  { name: 'L&T Finance', color: '#005ca9' },
  { name: 'Mahindra Finance', color: '#e31837' },
  { name: 'Shriram Finance', color: '#ed1c24' },
  { name: 'Aditya Birla', color: '#c7222a' },
  { name: 'PNB Housing', color: '#a32020' },
  { name: 'LIC Housing', color: '#0054a5' },
  { name: 'Bank of Baroda', color: '#f05a22' },
  { name: 'Union Bank', color: '#e31837' },
  { name: 'Canara Bank', color: '#0065b3' },
  { name: 'Punjab National', color: '#a32020' },
  { name: 'Bank of India', color: '#f05a22' },
  { name: 'Indian Bank', color: '#004c8f' },
  { name: 'Yes Bank', color: '#005cb9' },
  { name: 'Federal Bank', color: '#004c8f' },
  { name: 'South Indian Bank', color: '#005cb9' },
  { name: 'Bandhan Bank', color: '#ed1c24' },
  { name: 'RBL Bank', color: '#004c8f' },
  { name: 'City Union Bank', color: '#f18221' },
  { name: 'Karur Vysya', color: '#005cb9' },
  { name: 'Standard Chartered', color: '#009900' },
  { name: 'HSBC', color: '#db0011' },
  { name: 'Citi Bank', color: '#003b70' },
  { name: 'DBS Bank', color: '#e31837' },
  { name: 'Ujjivan SFB', color: '#004c8f' },
  { name: 'Equitas SFB', color: '#ed1c24' },
  { name: 'AU Small Finance', color: '#004c8f' },
  { name: 'Hero Fincorp', color: '#ed1c24' },
  { name: 'Poonawalla Fincorp', color: '#004c8f' },
  { name: 'Manappuram', color: '#f18221' },
  { name: 'Fullerton India', color: '#ed1c24' },
  { name: 'IIFL Finance', color: '#005cb9' },
  { name: 'Sundaram Finance', color: '#004c8f' },
  { name: 'Repco Home', color: '#ed1c24' },
  { name: 'GIC Housing', color: '#005cb9' },
  { name: 'Can Fin Homes', color: '#004c8f' },
  { name: 'Reliance Capital', color: '#ed1c24' },
  { name: 'Magma Fincorp', color: '#005cb9' },
  { name: 'Aadhar Housing', color: '#f18221' },
  { name: 'Home First', color: '#004c8f' }
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our 50+ Bank Partners
          </h2>
          <p className="text-lg text-foreground/60">
            Partnering with India's leading financial institutions
          </p>
        </motion.div>

        {/* Dense Grid to fit 50 banks neatly without massive scrolling */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {banks.map((bank, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.02 }} // Fast staggering
              whileHover={{ scale: 1.05 }}
              className="group cursor-default"
            >
              <div className="bg-muted border border-border/40 rounded-lg p-4 flex items-center justify-center h-16 transition-all duration-300 group-hover:shadow-md group-hover:bg-white group-hover:border-accent/30">
                <div className="flex items-center gap-2 w-full justify-center">
                  <Building2
                    size={18}
                    style={{ color: bank.color }}
                    className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="font-semibold text-xs text-primary truncate group-hover:text-accent transition-colors duration-300">
                    {bank.name}
                  </span>
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
          className="mt-12 bg-accent/10 rounded-xl p-6 text-center border border-accent/20"
        >
          <p className="text-foreground font-medium">
            Get instant quotes from our partner banks and choose the best option for your needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}