import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../../components/UI/AnimatedSection';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
  theme: 'light' | 'dark';
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ steps, theme }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <AnimatedSection key={index} delay={index * 0.1}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className={`w-20 h-20 rounded-full ${index % 2 === 0 ? 'bg-secondary-500' : 'bg-primary-900'} flex items-center justify-center mx-auto mb-6`}>
              <span className="text-2xl font-bold text-white">{step.step}</span>
            </div>
            <h3 className={`text-xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {step.title}
            </h3>
            <p className={`${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {step.description}
            </p>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default ServiceProcess; 