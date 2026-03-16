'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface QuickApplyFormProps {
  onClose: () => void;
}

export default function QuickApplyForm({ onClose }: QuickApplyFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    loanType: '',
    city: '',
  });

  const loanTypes = [
    'Home Loan',
    'Business Loan',
    'LAP',
    'Car Loan',
    'Personal Loan',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('whatsapp', formData.whatsapp);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('loanType', formData.loanType);
    formDataToSend.append('city', formData.city);

    try {
      // THE FIX: Adding the Accept header tells Formspree to return JSON instead of a redirect
      const response = await fetch('https://formspree.io/f/xzdjjdvn', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form data after successful submission
        setFormData({
            name: '',
            whatsapp: '',
            email: '',
            loanType: '',
            city: '',
        });
        
        setTimeout(() => {
          onClose();
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert("Submission failed. Please check your internet or disable ad-blockers for this site.");
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-accent/10 to-white">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-center"
        >
          <CheckCircle className="mx-auto mb-4 text-green-500" size={64} />
          <h3 className="text-2xl font-bold text-primary mb-2">Success!</h3>
          <p className="text-foreground/70 mb-4">
            We've received your application. Our team will contact you soon via WhatsApp.
          </p>
          <p className="text-sm text-foreground/60">
            Redirecting you back...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border bg-primary text-white sticky top-0">
        <h2 className="text-2xl font-bold">Quick Apply</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-primary/80 rounded-lg transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
          >
            <Label htmlFor="name" className="text-foreground font-semibold mb-2 block">
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
              className="w-full border-border/50 focus:border-accent focus:ring-accent"
            />
          </motion.div>

          {/* WhatsApp Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Label htmlFor="whatsapp" className="text-foreground font-semibold mb-2 block">
              WhatsApp Number *
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="10-digit mobile number"
              value={formData.whatsapp}
              onChange={(e) => handleChange('whatsapp', e.target.value)}
              required
              pattern="[0-9]{10}"
              className="w-full border-border/50 focus:border-accent focus:ring-accent"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Label htmlFor="email" className="text-foreground font-semibold mb-2 block">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
              className="w-full border-border/50 focus:border-accent focus:ring-accent"
            />
          </motion.div>

          {/* Loan Type Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Label htmlFor="loanType" className="text-foreground font-semibold mb-2 block">
              Loan Type *
            </Label>
            <Select value={formData.loanType} onValueChange={(value) => handleChange('loanType', value)}>
              <SelectTrigger id="loanType" className="w-full border-border/50 focus:border-accent focus:ring-accent">
                <SelectValue placeholder="Select loan type" />
              </SelectTrigger>
              <SelectContent>
                {loanTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>

          {/* City Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Label htmlFor="city" className="text-foreground font-semibold mb-2 block">
              City *
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="Enter your city"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              required
              className="w-full border-border/50 focus:border-accent focus:ring-accent"
            />
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-sm text-foreground/70"
          >
            <p>✓ 100% Secure & Confidential</p>
            <p>✓ No hidden charges</p>
            <p>✓ Quick response within 1 hour</p>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="pt-4"
          >
            <Button
              type="submit"
              disabled={!formData.name || !formData.whatsapp || !formData.email || !formData.loanType || !formData.city}
              className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-3 rounded-lg cursor-pointer"
            >
              Get Best Quote
            </Button>
          </motion.div>

          {/* Footer Text */}
          <p className="text-xs text-center text-foreground/50 mt-4">
            By submitting, you agree to our terms and privacy policy
          </p>
        </form>
      </div>
    </div>
  );
}