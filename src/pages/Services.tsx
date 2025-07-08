import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Brain, Lightbulb, Users, Award, ArrowRight, CheckCircle, Play, ExternalLink } from 'lucide-react';
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
      color: 'bg-secondary-500',
      price: 'Sur devis',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
      projects: [
        {
          title: 'Système de Monitoring Industriel',
          client: 'TechCorp Manufacturing',
          description: 'Développement d\'un système IoT pour surveiller les machines industrielles en temps réel',
          image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
          technologies: ['STM32', 'LoRaWAN', 'AWS IoT', 'React'],
          duration: '6 mois',
          year: '2023'
        },
        {
          title: 'Smart Building Solution',
          client: 'Green Tower',
          description: 'Solution complète pour la gestion intelligente d\'un bâtiment commercial',
          image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
          technologies: ['Raspberry Pi', 'MQTT', 'Node.js', 'MongoDB'],
          duration: '4 mois',
          year: '2023'
        }
      ]
    },
    {
      icon: Bot,
      title: 'Développement Robotique',
      description: 'Conception et développement de solutions robotiques personnalisées',
      features: ['Robots industriels', 'Automatisation', 'Maintenance prédictive', 'Formation équipes'],
      color: 'bg-primary-900',
      price: 'À partir de 5000€',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
      projects: [
        {
          title: 'Robot de Tri Automatique',
          client: 'LogiSort Industries',
          description: 'Robot autonome pour le tri automatique de colis dans un entrepôt',
          image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
          technologies: ['ROS', 'OpenCV', 'Python', 'LIDAR'],
          duration: '8 mois',
          year: '2023'
        },
        {
          title: 'Bras Robotique Collaboratif',
          client: 'Precision Assembly',
          description: 'Développement d\'un cobot pour l\'assemblage de précision',
          image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
          technologies: ['Arduino', 'Servo Motors', 'C++', 'HMI'],
          duration: '5 mois',
          year: '2022'
        }
      ]
    },
    {
      icon: Brain,
      title: 'Solutions IA',
      description: 'Implémentation d\'intelligence artificielle pour optimiser vos processus',
      features: ['Machine Learning', 'Vision par ordinateur', 'Traitement du langage', 'Analyse prédictive'],
      color: 'bg-secondary-500',
      price: 'Sur devis',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
      projects: [
        {
          title: 'Système de Reconnaissance Faciale',
          client: 'SecureAccess Corp',
          description: 'Solution de contrôle d\'accès basée sur la reconnaissance faciale',
          image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
          technologies: ['TensorFlow', 'OpenCV', 'Python', 'Flask'],
          duration: '4 mois',
          year: '2023'
        },
        {
          title: 'Chatbot Intelligent',
          client: 'Customer Care Solutions',
          description: 'Assistant virtuel avec traitement du langage naturel',
          image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
          technologies: ['NLP', 'BERT', 'Node.js', 'React'],
          duration: '3 mois',
          year: '2023'
        }
      ]
    },
    {
      icon: Lightbulb,
      title: 'Innovation Lab',
      description: 'Accompagnement dans vos projets d\'innovation technologique',
      features: ['Idéation', 'Prototypage', 'Tests utilisateurs', 'Mise sur le marché'],
      color: 'bg-primary-900',
      price: 'À partir de 2000€',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
      projects: [
        {
          title: 'Prototype Wearable Health',
          client: 'HealthTech Startup',
          description: 'Développement d\'un prototype de montre connectée pour le suivi médical',
          image: 'https://images.pexels.com/photos/163100/pexels-photo-163100.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
          technologies: ['ESP32', 'Bluetooth', 'Mobile App', 'Cloud'],
          duration: '6 mois',
          year: '2023'
        },
        {
          title: 'Smart Agriculture System',
          client: 'AgriTech Innovation',
          description: 'Système intelligent pour l\'optimisation de l\'irrigation agricole',
          image: 'https://images.pexels.com/photos/159298/pexels-photo-159298.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
          technologies: ['Sensors', 'LoRa', 'Machine Learning', 'Dashboard'],
          duration: '7 mois',
          year: '2022'
        }
      ]
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
      {/* Hero Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-primary-900' : 'bg-primary-900'}`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nos Services
              </h1>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                Des solutions technologiques sur mesure pour accompagner votre transformation digitale
              </p>
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

      {/* Projects Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Projets Réalisés - {mainServices[activeService].title}
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Découvrez quelques-uns de nos projets récents dans ce domaine
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices[activeService].projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl overflow-hidden shadow-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {project.title}
                        </h3>
                        <p className={`text-sm font-medium ${
                          theme === 'dark' ? 'text-secondary-400' : 'text-secondary-600'
                        }`}>
                          {project.client}
                        </p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {project.year}
                      </span>
                    </div>
                    
                    <p className={`mb-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className={`text-sm font-semibold mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Technologies utilisées:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 rounded-full text-xs ${
                              theme === 'dark'
                                ? 'bg-gray-700 text-gray-300'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Durée: {project.duration}
                      </span>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-2 px-4 py-2 ${mainServices[activeService].color} text-white rounded-lg font-medium hover:opacity-90 transition-opacity`}
                      >
                        <span>Voir détails</span>
                        <ExternalLink className="h-4 w-4" />
                      </motion.button>
                    </div>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-primary-900' : 'bg-primary-900'}`}>
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Prêt à transformer votre entreprise ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-secondary-500 text-white font-semibold rounded-xl hover:bg-secondary-600 transition-colors"
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