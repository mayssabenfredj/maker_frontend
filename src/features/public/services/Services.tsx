import React, { useState, useEffect } from 'react';
import { useStore } from '../../../stores/useStore';
import ServiceTabs from './components/ServiceTabs';
import ServiceProjects from './components/ServiceProjects';
import ServiceProcess from './components/ServiceProcess';
import ServiceCTA from './components/ServiceCTA';
import { Service } from '../../admin/services/types/service';
import ServiceService from '../../admin/services/services/service.service';

const processSteps = [
  {
    step: '01',
    title: 'Analyse',
    description: 'Étude approfondie de vos besoins et contraintes'
  },
  {
    step: '02',
    title: 'Conception',
    description: 'Élaboration de la solution technique optimale'
  },
  {
    step: '03',
    title: 'Développement',
    description: 'Réalisation et tests de la solution'
  },
  {
    step: '04',
    title: 'Déploiement',
    description: 'Mise en production et formation de vos équipes'
  }
];

const Services: React.FC = () => {
  const { theme } = useStore();
  const [services, setServices] = useState<Service[]>([]);
  const [activeService, setActiveService] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    ServiceService.getAll()
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Erreur lors du chargement des services.');
        setLoading(false);
      });
  }, []);

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Hero Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-primary-900' : 'bg-primary-900'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Des solutions technologiques sur mesure pour accompagner votre transformation digitale
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Services Showcase */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center text-gray-400">Chargement des services...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : services.length === 0 ? (
            <div className="text-center text-gray-400">Aucun service disponible.</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Service Tabs */}
              <ServiceTabs
                services={services}
                activeIndex={activeService}
                onSelect={setActiveService}
                theme={theme}
              />
            </div>
          )}
        </div>
      </section>

      {/* Projects, Products & Events Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Projets, Produits & Événements - {services[activeService]?.name || ''}
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Découvrez nos réalisations, produits et événements liés à ce service
            </p>
          </div>
          {services[activeService] && (
            <ServiceProjects
              projects={services[activeService].projects || []}
              products={services[activeService].products || []}
              events={services[activeService].events || []}
              theme={theme}
            />
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Notre Processus
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Une approche méthodique pour garantir le succès de vos projets
            </p>
          </div>
          <ServiceProcess steps={processSteps} theme={theme} />
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-primary-900' : 'bg-primary-900'}`}>
        <div className="container mx-auto px-4 text-center">
          <ServiceCTA
            title="Prêt à transformer votre entreprise ?"
            description="Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé"
            buttonText="Contactez-nous"
            onClick={() => window.location.href = '/contact'}
          />
        </div>
      </section>
    </div>
  );
};

export default Services;