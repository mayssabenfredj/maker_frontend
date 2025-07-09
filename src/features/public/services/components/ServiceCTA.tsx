import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../../components/UI/AnimatedSection';
import { ArrowRight } from 'lucide-react';

interface ServiceCTAProps {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ title, description, buttonText, onClick }) => {
  return (
    <AnimatedSection>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          {title}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          {description}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-4 bg-secondary-500 text-white font-semibold rounded-xl hover:bg-secondary-600 transition-colors"
          onClick={onClick}
        >
          {buttonText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </motion.button>
      </motion.div>
    </AnimatedSection>
  );
};

export default ServiceCTA; 