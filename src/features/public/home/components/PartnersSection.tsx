import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../../components/UI/AnimatedSection';
import { ExternalLink } from 'lucide-react';
import { getImageUrl } from '../../../../shared/utils/imageUtils';

interface Partner {
  _id: string;
  name: string;
  logo: string;
  website: string;
  specialite: string;
  
}

interface PartnersSectionProps {
  theme: string;
  partners: Partner[];
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ theme, partners }) => (
  <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
    <div className="container mx-auto px-4">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Nos Partenaires
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Un réseau de partenaires stratégiques pour enrichir votre parcours
          </p>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <AnimatedSection key={partner._id} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl shadow-lg text-center ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } group`}
            >
              <img
                src={getImageUrl(partner.logo)}
                alt={partner.name}
                className="w-16 h-16 rounded-xl object-cover mx-auto mb-4"
              />
              <h3 className={`text-lg font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {partner.name}
              </h3>
             
              <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                {partner.specialite}
              </span>
             
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 text-blue-900 hover:text-orange-500 transition-colors"
              >
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
