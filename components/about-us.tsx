'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Users, TrendingUp, Shield } from 'lucide-react';

export default function AboutUs() {
  const highlights = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals with years of banking experience'
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: '₹500Cr+ in loans successfully disbursed'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Complete transparency in every client interaction'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Cashlytic Capital
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Established on July 3, 2025, Cashlytic Capital was founded with a vision to simplify the complex world of finance for the people of Prayagraj. Under the leadership of <span className="font-semibold text-primary">Gopal Krishna Shukla</span>, we have grown into a premier Loan DSA, bridging the gap between top-tier banks and aspiring homeowners, entrepreneurs, and individuals.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Our <span className="italic text-accent font-semibold">"Shahi Soch"</span> philosophy ensures every client receives <span className="font-semibold">royal transparency and expert guidance</span>. We believe that everyone deserves access to fair financing solutions without unnecessary complexity.
            </p>

            {/* Key Values */}
            <div className="space-y-4">
              {[
                'Transparent & Honest Dealings',
                'Expert Financial Guidance',
                'Fast Approval Process',
                'Personalized Loan Solutions'
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-foreground font-medium">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-accent/20 hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-foreground/60 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Stats */}
            <div className="bg-primary rounded-xl text-white p-8 text-center">
              <p className="text-4xl font-bold mb-2">1000+</p>
              <p className="text-white/80">Happy Clients Served</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
