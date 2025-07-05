import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Search, Settings, Cpu, Bot, Brain, Lightbulb } from 'lucide-react';
import { useStore } from '../../stores/useStore';
import AnimatedSection from '../../components/UI/AnimatedSection';

const ServicesManagement: React.FC = () => {
  const { theme, services, addService, updateService, deleteService } = useStore();
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const mockServices = [
    {
      id: '1',
      title: { fr: 'Consultation IoT', en: 'IoT Consulting' },
      description: { fr: 'Services de conseil en Internet des Objets', en: 'Internet of Things consulting services' },
      icon: 'Cpu',
      features: { fr: ['Analyse des besoins', 'Architecture système', 'Prototypage'], en: ['Needs analysis', 'System architecture', 'Prototyping'] },
      price: 'Sur devis',
      duration: '1-3 mois',
      category: 'consulting'
    },
    {
      id: '2',
      title: { fr: 'Développement Robotique', en: 'Robotics Development' },
      description: { fr: 'Conception de solutions robotiques', en: 'Robotics solutions design' },
      icon: 'Bot',
      features: { fr: ['Robots industriels', 'Automatisation', 'Maintenance'], en: ['Industrial robots', 'Automation', 'Maintenance'] },
      price: 'À partir de 5000€',
      duration: '2-6 mois',
      category: 'development'
    },
    {
      id: '3',
      title: { fr: 'Solutions IA', en: 'AI Solutions' },
      description: { fr: 'Implémentation d\'intelligence artificielle', en: 'Artificial intelligence implementation' },
      icon: 'Brain',
      features: { fr: ['Machine Learning', 'Vision par ordinateur', 'NLP'], en: ['Machine Learning', 'Computer Vision', 'NLP'] },
      price: 'Sur devis',
      duration: '3-8 mois',
      category: 'ai'
    },
    {
      id: '4',
      title: { fr: 'Innovation Lab', en: 'Innovation Lab' },
      description: { fr: 'Accompagnement innovation', en: 'Innovation support' },
      icon: 'Lightbulb',
      features: { fr: ['Idéation', 'Prototypage', 'Tests'], en: ['Ideation', 'Prototyping', 'Testing'] },
      price: 'À partir de 2000€',
      duration: '1-4 mois',
      category: 'innovation'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return Cpu;
      case 'Bot': return Bot;
      case 'Brain': return Brain;
      case 'Lightbulb': return Lightbulb;
      default: return Settings;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'consulting': return 'bg-blue-500';
      case 'development': return 'bg-green-500';
      case 'ai': return 'bg-purple-500';
      case 'innovation': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredServices = mockServices.filter(service =>
    service.title.fr.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.title.en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (service: any) => {
    setEditingService(service);
    setShowForm(true);
  };

  const handleDelete = (serviceId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce service ?')) {
      deleteService(serviceId);
    }
  };

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className={`text-3xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Gestion des Services
              </h1>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Gérez vos services et offres commerciales
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Nouveau Service</span>
            </motion.button>
          </div>
        </AnimatedSection>

        {/* Search */}
        <AnimatedSection>
          <div className={`p-6 rounded-xl mb-8 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="text"
                placeholder="Rechercher un service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => {
            const IconComponent = getIcon(service.icon);
            return (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`p-8 rounded-xl shadow-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl ${getCategoryColor(service.category)} flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(service)}
                        className={`p-2 rounded-lg transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-400 hover:text-red-400 hover:bg-gray-700'
                            : 'text-gray-600 hover:text-red-600 hover:bg-gray-100'
                        }`}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title.fr}
                  </h3>
                  
                  <p className={`mb-6 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {service.description.fr}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold mb-3 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Fonctionnalités incluses:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.fr.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                          <span className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-lg font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {service.price}
                      </div>
                      <div className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Durée: {service.duration}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 ${getCategoryColor(service.category)} text-white rounded-lg font-medium hover:opacity-90 transition-opacity`}
                    >
                      Modifier Tarifs
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-12">
              <div className={`text-6xl mb-4 ${
                theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
              }`}>
                🛠️
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Aucun service trouvé
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Essayez de modifier vos critères de recherche ou créez un nouveau service.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default ServicesManagement;