'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, Wallet, Car, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
  {
    id: 'home-loan',
    icon: Home,
    title: 'Home Loan & LAP',
    hindi: 'अपने घर का सपना सच करें',
    english: 'Apne ghar ka sapna sach karein.',
    description: 'Flexible home loans with competitive rates for your dream home.',
  },
  {
    id: 'business-loan',
    icon: Briefcase,
    title: 'Business Loan',
    hindi: 'अपने व्यवसाय को बढ़ाएं',
    english: 'Scale your business with ease.',
    description: 'Quick approval business loans to grow your enterprise.',
  },
  {
    id: 'personal-loan',
    icon: Wallet,
    title: 'Personal Loan',
    hindi: 'तुरंत व्यक्तिगत धन प्राप्त करें',
    english: 'Quick funds for your personal needs.',
    description: 'Instant personal loans without extensive documentation.',
  },
  {
    id: 'car-loan',
    icon: Car,
    title: 'Car Loan',
    hindi: 'अपनी सपनों की कार चलाएं',
    english: 'Drive your dream car today.',
    description: 'Financing options for both new and pre-owned vehicles.',
  },
  {
    id: 'construction-loan',
    icon: Building,
    title: 'Construction Loan',
    hindi: 'आपके भविष्य की नींव',
    english: 'Build your future on a solid foundation.',
    description: 'Project-based financing for all your construction needs.',
  },
  {
    id: 'lap-loan',
    icon: Home,
    title: 'LAP',
    hindi: 'संपत्ति पर तुरंत ऋण',
    english: 'Quick loans against your property.',
    description: 'Flexible financing using your existing property as collateral.',
  },
];

export default function ProductCards() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Products
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive lending solutions tailored to your financial needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                id={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card className="h-full bg-white border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden">
                  {/* Navy Blue Header */}
                  <div className="h-20 bg-primary" />

                  <CardHeader className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center -mt-12">
                        <Icon className="text-accent" size={24} />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-primary">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-foreground/70 mt-2">
                      {product.english}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-xs text-foreground/60 bg-muted/50 p-2 rounded-lg mb-3">
                      {product.hindi}
                    </p>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Financial Future?
          </h3>
          <p className="text-base text-white/80 max-w-2xl mx-auto mb-6">
            Get expert guidance and find the perfect loan product for your needs today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
