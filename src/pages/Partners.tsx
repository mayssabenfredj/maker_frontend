import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Users, Award, Globe, ArrowRight } from 'lucide-react';
import { useStore } from '../stores/useStore';
import { translations } from '../data/translations';
import AnimatedSection from '../components/UI/AnimatedSection';
import GradientBackground from '../components/UI/GradientBackground';

const Partners: React.FC = () => {
  const { theme, language, partners } = useStore();
  const t = translations[language];

  const partnerCategories = [
    {
      title: 'Partenaires Technologiques',
      description: 'Entreprises leaders dans l\'innovation technologique',
      partners: [
        {
          id: '1',
          name: 'TechCorp Innovation',
          logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
          website: 'https://techcorp.com',
          description: 'Leader mondial en solutions IoT et intelligence artificielle',
          sector: 'IoT & IA',
          collaboration: 'Formations spécialisées et projets R&D',
          since: '2020'
        },
        {
          id: '2',
          name: 'RoboTech Solutions',
          logo: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=200',
          website: 'https://robotech.com',
          description: 'Spécialiste en robotique industrielle et éducative',
          sector: 'Robotique',
          collaboration: 'Équipements et expertise technique',
          since: '2019'
        },
        {
          id: '3',
          name: 'AI Dynamics',
          logo: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=200',
          website: 'https://aidynamics.com',
          description: 'Recherche et développement en intelligence artificielle',
          sector: 'Intelligence Artificielle',
          collaboration: 'Recherche collaborative et stages',
          since: '2021'
        }
      ]
    },
    {
      title: 'Partenaires Éducatifs',
      description: 'Institutions académiques et centres de formation',
      partners: [
        {
          id: '4',
          name: 'Université de Tunis',
          logo: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=200',
          website: 'https://utunis.edu.tn',
          description: 'Partenariat académique pour la recherche et l\'innovation',
          sector: 'Éducation Supérieure',
          collaboration: 'Programmes conjoints et recherche',
          since: '2018'
        },
        {
          id: '5',
          name: 'École Polytechnique',
          logo: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=200',
          website: 'https://polytechnique.edu',
          description: 'Formation d\'ingénieurs en nouvelles technologies',
          sector: 'Ingénierie',
          collaboration: 'Échange d\'étudiants et projets',
          since: '2020'
        }
      ]
    },
    {
      title: 'Partenaires Industriels',
      description: 'Entreprises offrant des opportunités de stage et d\'emploi',
      partners: [
        {
          id: '6',
          name: 'InnovateCorp',
          logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200',
          website: 'https://innovatecorp.com',
          description: 'Startup spécialisée en solutions IoT pour l\'industrie',
          sector: 'IoT Industriel',
          collaboration: 'Stages et projets étudiants',
          since: '2022'
        },
        {
          id: '7',
          name: 'Future Systems',
          logo: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=200',
          website: 'https://futuresystems.com',
          description: 'Développement de systèmes embarqués avancés',
          sector: 'Systèmes Embarqués',
          collaboration: 'Recrutement et formation continue',
          since: '2021'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Réseau Professionnel',
      description: 'Accès à un réseau étendu de professionnels et d\'experts'
    },
    {
      icon: Award,
      title: 'Opportunités de Carrière',
      description: 'Stages, emplois et projets avec nos partenaires'
    },
    {
      icon: Globe,
      title: 'Projets Internationaux',
      description: 'Participation à des projets d\'envergure internationale'
    }
  ];

  const stats = [
    { number: '50+', label: 'Partenaires Actifs' },
    { number: '200+', label: 'Projets Collaboratifs' },
    { number: '85%', label: 'Taux de Placement' },
    { number: '15', label: 'Pays Partenaires' }
  ];

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Hero Section */}
      <GradientBackground className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Nos Partenaires
              </h1>
              <p className={`text-xl max-w-3xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Un écosystème de partenaires stratégiques pour enrichir votre parcours d'apprentissage
              </p>
            </div>
          </AnimatedSection>
        </div>
      </GradientBackground>

      {/* Stats Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Avantages du Réseau
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`p-8 rounded-2xl text-center ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {benefit.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners by Category */}
      {partnerCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${
          categoryIndex % 2 === 0 
            ? theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            : theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h2>
                <p className={`text-xl max-w-2xl mx-auto ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {category.description}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.partners.map((partner, index) => (
                <AnimatedSection key={partner.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`p-8 rounded-2xl shadow-lg ${
                      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start space-x-6">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-20 h-20 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className={`text-xl font-bold mb-2 ${
                              theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                              {partner.name}
                            </h3>
                            <span className="inline-block bg-gradient-to-r from-orange-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              {partner.sector}
                            </span>
                          </div>
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg transition-colors ${
                              theme === 'dark'
                                ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            }`}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </div>
                        
                        <p className={`mb-4 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {partner.description}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-medium ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              Collaboration:
                            </span>
                            <span className={`text-sm ${
                              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {partner.collaboration}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-medium ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              Partenaire depuis:
                            </span>
                            <span className={`text-sm ${
                              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {partner.since}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <GradientBackground className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Devenir Partenaire
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Rejoignez notre réseau de partenaires et contribuez à former les talents de demain
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Nous Contacter
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </AnimatedSection>
        </div>
      </GradientBackground>
    </div>
  );
};

export default Partners;