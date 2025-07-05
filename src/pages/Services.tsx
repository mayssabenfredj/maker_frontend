import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Brain, Lightbulb, Users, Award, ArrowRight, CheckCircle, Play } from 'lucide-react';
import { useStore } from '../stores/useStore';
import { translations } from '../data/translations';
import AnimatedSection from '../components/UI/AnimatedSection';

const Services: React.FC = () => {
  const { theme, language, services } = useStore();
  const t = translations[language];
  const [activeService, setActiveService] = useState(0);

  const mainServices = [
    {
      icon: Cpu,
      title: 'Consultation IoT',
      description: 'Services de conseil en Internet des Objets pour votre entreprise',
      features: ['Analyse des besoins', 'Architecture système', 'Prototypage rapide', 'Déploiement'],
      color: 'bg-orange-500',
      price: 'Sur devis',
      video: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c5f8&profile_id=164&oauth2_token_id=57447761'
    },
    {
      icon: Bot,
      title: 'Développement Robotique',
      description: 'Conception et développement de solutions robotiques personnalisées',
      features: ['Robots industriels', 'Automatisation', 'Maintenance prédictive', 'Formation équipes'],
      color: 'bg-blue-600',
      price: 'À partir de 5000€',
      video: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c5f8&profile_id=164&oauth2_token_id=57447761'
    },
    {
      icon: Brain,
      title: 'Solutions IA',
      description: 'Implémentation d\'intelligence artificielle pour optimiser vos processus',
      features: ['Machine Learning', 'Vision par ordinateur', 'Traitement du langage', 'Analyse prédictive'],
      color: 'bg-orange-600',
      price: 'Sur devis',
      video: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c5f8&profile_id=164&oauth2_token_id=57447761'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Lab',
      description: 'Accompagnement dans vos projets d\'innovation technologique',
      features: ['Idéation', 'Prototypage', 'Tests utilisateurs', 'Mise sur le marché'],
      color: 'bg-blue-500',
      price: 'À partir de 2000€',
      video: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c5f8&profile_id=164&oauth2_token_id=57447761'
    }
  ];

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

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Hero Section with Video */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c5f8&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'}`} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h1 
                className={`text-4xl md:text-5xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Nos Services
              </motion.h1>
              <motion.p 
                className={`text-xl max-w-3xl mx-auto ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Des solutions technologiques sur mesure pour accompagner votre transformation digitale
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Services Showcase */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Tabs */}
            <div className="space-y-4">
              {mainServices.map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeService === index
                        ? theme === 'dark' ? 'bg-gray-900 shadow-lg' : 'bg-white shadow-lg'
                        : theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveService(index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {service.title}
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
                        {service.price}
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            {/* Active Service Video */}
            <AnimatedSection direction="right">
              <div className="relative">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-80 object-cover"
                  >
                    <source src={mainServices[activeService].video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{mainServices[activeService].title}</h3>
                    <p className="text-sm opacity-90 mb-4">{mainServices[activeService].description}</p>
                    <div className="space-y-2">
                      {mainServices[activeService].features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-6 right-6">
                    <motion.div
                      className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="h-5 w-5 text-white ml-1" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`p-8 rounded-2xl shadow-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`mb-6 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className={`${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className={`text-lg font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {service.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-2 ${service.color} text-white rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg transition-shadow`}
                    >
                      <span>Demander un devis</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
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
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 rounded-full ${index % 2 === 0 ? 'bg-orange-500' : 'bg-blue-600'} flex items-center justify-center mx-auto mb-6`}>
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
        </div>
      </section>

      {/* CTA Section with Video Background */}
      <section className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="absolute inset-0 opacity-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c5f8&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Prêt à transformer votre entreprise ?
              </h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 hover:shadow-lg transition-all duration-300"
              >
                Contactez-nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;