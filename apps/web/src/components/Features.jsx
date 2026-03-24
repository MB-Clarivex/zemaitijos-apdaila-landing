import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, Home, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Innovative Concepts',
      description: 'Fresh, creative ideas that transform ordinary spaces into extraordinary experiences.'
    },
    {
      icon: Palette,
      title: 'Personalized Design',
      description: 'Tailored solutions that reflect your unique style and personality.'
    },
    {
      icon: Home,
      title: 'Complete Solutions',
      description: 'From concept to completion, we handle every detail of your project.'
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Exceptional craftsmanship and attention to detail in every project.'
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1"
        >
          <h2 className="text-[32px] uppercase font-light text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Comprehensive interior design services tailored to bring your vision to life.
          </p>
        </motion.div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="p-8 bg-transparent border border-gray-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="w-14 h-14 bg-gray-900 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;