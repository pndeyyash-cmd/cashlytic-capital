'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export default function PolicyModal({ isOpen, onClose, type }: PolicyModalProps) {
  if (!isOpen) return null;

  const policies = {
    privacy: {
      title: 'Privacy Policy',
      content: `At Cashlytic Capital, we respect your privacy. The data collected (Name, Phone, Email) is used solely for the purpose of checking loan eligibility with our partner banks. We do not sell your data to third-party telemarketers. By submitting the form, you authorize us to contact you via Call, SMS, or WhatsApp.`
    },
    terms: {
      title: 'Terms & Conditions',
      content: `Cashlytic Capital is a Direct Selling Agent (DSA) and not a bank. Loan approval is at the sole discretion of the respective banking institutions. Our service is to facilitate the application process. We do not charge any 'processing fees' directly from customers before loan sanction.`
    }
  };

  const policy = policies[type];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg max-w-md w-full shadow-xl"
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-primary">{policy.title}</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-full transition-colors"
          >
            <X size={24} className="text-foreground" />
          </motion.button>
        </div>

        <div className="p-6 max-h-96 overflow-y-auto">
          <p className="text-foreground/80 leading-relaxed text-sm">
            {policy.content}
          </p>
        </div>

        <div className="p-6 border-t border-border">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-2 rounded-lg transition-colors"
          >
            I Understand
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
