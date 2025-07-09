import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../../../components/UI/AnimatedSection';
import { Project,  Event } from '../../../admin/services/types/service';
import { getImageUrl } from '../../../../shared/utils/imageUtils';
import { Product } from '../../../admin/products';

interface ServiceProjectsProps {
  projects: Project[];
  products: Product[];
  events: Event[];
  theme: 'light' | 'dark';
}

const truncate = (text?: string, max = 80) => {
  if (!text) return '';
  return text.length > max ? text.slice(0, max) + '…' : text;
};

const Card: React.FC<{
  image?: string;
  title: string;
  description?: string;
  theme: 'light' | 'dark';
  children?: React.ReactNode;
}> = ({ image, title, description, theme, children }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.02 }}
    className={`rounded-xl overflow-hidden shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex flex-col`}
    style={{ minHeight: 280 }}
  >
    <div className="w-full aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      ) : (
        <span className="text-gray-400">Pas d'image</span>
      )}
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <h3 className={`text-base font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      {description && <p className={`text-xs mb-2 line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{truncate(description)}</p>}
      {children}
    </div>
  </motion.div>
);

const ServiceProjects: React.FC<ServiceProjectsProps> = ({ projects, products, events, theme }) => {
  return (
    <div className="space-y-12">
      {/* Projets */}
      <div>
        <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Projets réalisés</h4>
        {(!projects || projects.length === 0) ? (
          <div className="text-center text-gray-400">Aucun projet pour ce service.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <AnimatedSection key={project._id || index} delay={index * 0.05}>
                <Card
                  image={getImageUrl(project.coverImage)}
                  title={project.name}
                  description={project.description}
                  theme={theme}
                >
                  <div className="text-xs text-gray-500 mt-auto">
                    {project.startDate && project.endDate
                      ? `De ${project.startDate} à ${project.endDate}`
                      : project.startDate || project.endDate || ''}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
      {/* Produits */}
      <div>
        <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Produits liés</h4>
        {(!products || products.length === 0) ? (
          <div className="text-center text-gray-400">Aucun produit lié.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <AnimatedSection key={product._id || index} delay={index * 0.05}>
                <Card
                  image={getImageUrl(product.images?.[0])}
                  title={product.name}
                  description={product.description}
                  theme={theme}
                />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
      {/* Événements */}
      <div>
        <h4 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Événements liés</h4>
        {(!events || events.length === 0) ? (
          <div className="text-center text-gray-400">Aucun événement lié.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <AnimatedSection key={event._id || index} delay={index * 0.05}>
                    <Card
                        
                  title={event.name}
                  description={event.description}
                  theme={theme}
                >
                  <div className="text-xs text-gray-500 mt-auto">
                    {event.startDate && event.endDate
                      ? `Du ${event.startDate} au ${event.endDate}`
                      : event.startDate || event.endDate || ''}
                  </div>
                  {event.location && (
                    <div className="text-xs text-gray-400">Lieu: {event.location}</div>
                  )}
                </Card>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceProjects; 