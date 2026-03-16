'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import BankPartners from '@/components/bank-partners';
import AboutUs from '@/components/about-us';
import ProductCards from '@/components/product-cards';
import FAQ from '@/components/faq';
import QuickApplyForm from '@/components/quick-apply-form';
import Footer from '@/components/footer';

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      {/* THE FIX: We are now passing the trigger function to the Header */}
      <Header onCheckEligibility={() => setShowForm(true)} />
      
      <main>
        <HeroSection onApply={() => setShowForm(true)} />
        <BankPartners />
        <AboutUs />
        <ProductCards />
        <FAQ />
      </main>

      {/* Quick Apply Sidebar */}
      <motion.div
        id="quick-apply"
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: showForm ? 1 : 0, x: showForm ? 0 : 400 }}
        transition={{ duration: 0.3 }}
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto ${!showForm && 'pointer-events-none'}`}
      >
        <QuickApplyForm onClose={() => setShowForm(false)} />
      </motion.div>

      {/* Overlay for form */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setShowForm(false)}
        />
      )}

      <Footer />
    </div>
  );
}