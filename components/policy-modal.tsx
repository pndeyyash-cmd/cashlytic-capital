'use client';

import { motion } from 'framer-motion';
import { X, ShieldAlert } from 'lucide-react';

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
      content: `At Cashlytic Capital, we respect your privacy. The data collected (Name, Phone, Email, Loan Type, and City) is used solely for the purpose of checking loan eligibility with our partner banks and NBFCs. We maintain strict confidentiality and do not sell your personal data to third-party telemarketers. By submitting any form on this website, you authorize Cashlytic Capital and its representatives to contact you via Call, SMS, or WhatsApp regarding your application.`
    },
    terms: {
      title: 'Terms & Conditions',
      content: (
        <div className="space-y-4">
          <p>
            Cashlytic Capital is a Direct Selling Agent (DSA) and operates as a service facilitator, not a banking institution. Loan approval, interest rates, and tenure are at the sole discretion of the respective banks/NBFCs.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-lg">
            <p className="font-bold text-red-700 flex items-center gap-2 mb-1">
              <ShieldAlert size={16} /> Important Notice regarding Fees:
            </p>
            <p className="text-red-600 text-xs">
              The Login Fee charged for processing application files is <strong>strictly non-refundable</strong> under any circumstances, regardless of whether the loan is sanctioned, rejected, or withdrawn by the applicant.
            </p>
          </div>
          <p>
            Our service is to facilitate and expedite the application process. We do not guarantee loan disbursement, as it depends entirely on the applicant's credit profile and bank policies.
          </p>
        </div>
      )
    }
  };

  const policy = policies[type];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-border"
      >
        <div className="flex items-center justify-between p-6 border-b border-border bg-gray-50">
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

        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <div className="text-foreground/80 leading-relaxed text-sm">
            {policy.content}
          </div>
        </div>

        <div className="p-6 border-t border-border bg-gray-50">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-3 rounded-xl transition-all shadow-md active:scale-95"
          >
            I Understand & Agree
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}