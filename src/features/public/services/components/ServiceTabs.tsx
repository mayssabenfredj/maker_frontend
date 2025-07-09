import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import AnimatedSection from '../../../../components/UI/AnimatedSection';
import { Service } from '../../../admin/services/types/service';

interface ServiceTabsProps {
  services: Service[];
  activeIndex: number;
  onSelect: (index: number) => void;
  theme: 'light' | 'dark';
}

const ServiceTabs: React.FC<ServiceTabsProps> = ({ services, activeIndex, onSelect, theme }) => {
  return (
    <div className="space-y-4">
      {services.map((service, index) => (
        <AnimatedSection key={service._id || index} delay={index * 0.1}>
          <motion.div
            className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
              activeIndex === index
                ? theme === 'dark' ? 'bg-gray-900 shadow-lg' : 'bg-white shadow-lg'
                : theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => onSelect(index)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-4">
              {/* Icône personnalisée si disponible */}
              <div className={`w-12 h-12 rounded-lg bg-secondary-500 flex items-center justify-center`}>
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className={`text-lg font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.name}
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
              </div>
              <div className={`text-lg font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {/* Afficher le prix si disponible */}
                {service.isActive ? 'Actif' : 'Inactif'}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default ServiceTabs; 