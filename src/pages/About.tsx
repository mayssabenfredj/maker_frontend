import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Lightbulb, Play } from 'lucide-react';
import { useStore } from '../stores/useStore';
import { translations } from '../data/translations';
import AnimatedSection from '../components/UI/AnimatedSection';

const About: React.FC = () => {
  const { theme, language } = useStore();
  const t = translations[language];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous encourageons la créativité et l\'innovation dans tous nos programmes.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous croyons en la puissance du travail d\'équipe et de la communauté.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans tout ce que nous faisons.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous sommes passionnés par l\'éducation et la technologie.'
    }
  ];

  const team = [
    {
      name: 'Dr. Ahmed Ben Ali',
      role: 'Directeur Général',
      image: '/src/assets/b84ab9b1f6117b4c6347d56f2b969381.jpg',
      description: 'Expert en IA et robotique avec 15 ans d\'expérience.',
      video: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c5f8&profile_id=164&oauth2_token_id=57447761'
    },
    {
      name: 'Fatima Zahra',
      role: 'Directrice Pédagogique',
      image: '/src/assets/d57a1512bc5f8fb8c267629077e6a82b.jpg',
      description: 'Spécialiste en pédagogie innovante et STEAM.',
      video: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c5f8&profile_id=164&oauth2_token_id=57447761'
    },
    {
      name: 'Mohamed Slim',
      role: 'Responsable Technique',
      image: '/src/assets/f139fb4d521f93483841c7aaf8701ee2.jpg',
      description: 'Ingénieur IoT et développeur full-stack.',
      video: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c5f8&profile_id=164&oauth2_token_id=57447761'
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
                {t.about.title}
              </motion.h1>
              <motion.p 
                className={`text-xl max-w-3xl mx-auto ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Maker Skills est une école d'innovation qui aide à apprendre les nouvelles technologies 
                et à améliorer l'invention. Nous croyons que l'avenir de l'apprentissage évolue.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <AnimatedSection direction="left">
              <motion.div
                whileHover={{ y: -10 }}
                className={`p-8 rounded-2xl shadow-lg relative overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                }`}
              >
                <div className="w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {t.about.mission}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Nous autonomisons les gens en leur fournissant la confiance, les outils, 
                  les connaissances, l'espace et les communautés dont ils ont besoin pour 
                  changer le monde et devenir des résolveurs de problèmes conscients à l'échelle mondiale.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -10 }}
                className={`p-8 rounded-2xl shadow-lg relative overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                }`}
              >
                <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {t.about.vision}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Nous apportons des interventions interdisciplinaires à travers la Science, 
                  la Technologie, l'Ingénierie, l'Art et les Mathématiques (STEAM) pour 
                  favoriser une culture d'innovation, d'exploration et d'apprentissage tout au long de la vie.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Values Preview */}
            <AnimatedSection direction="right">
              <motion.div
                whileHover={{ y: -10 }}
                className={`p-8 rounded-2xl shadow-lg relative overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                }`}
              >
                <div className="w-16 h-16 rounded-xl bg-orange-600 flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {t.about.values}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Nos valeurs fondamentales guident tout ce que nous faisons : 
                  l'innovation, la collaboration, l'excellence et la passion pour l'éducation.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Detail */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Nos Valeurs Fondamentales
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-xl text-center ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full ${index % 2 === 0 ? 'bg-orange-500' : 'bg-blue-600'} flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {value.title}
                  </h3>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Videos */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Notre Équipe
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Rencontrez les experts passionnés qui rendent tout cela possible
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg ${
                    theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                  }`}
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Video Overlay on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={member.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                        >
                          <Play className="h-6 w-6 text-white ml-1" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {member.name}
                    </h3>
                    <p className={`font-semibold mb-4 ${index % 2 === 0 ? 'text-orange-500' : 'text-blue-600'}`}>
                      {member.role}
                    </p>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Lab Tour */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Visitez Nos Laboratoires
                </h2>
                <p className={`text-lg mb-8 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Découvrez nos installations de pointe équipées des dernières technologies pour 
                  offrir une expérience d'apprentissage immersive et pratique.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
                >
                  Planifier une visite
                </motion.button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded-2xl"
                  >
                    <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c5f8&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Laboratoire d'Innovation</h3>
                    <p className="text-sm opacity-90">Espace collaboratif pour vos projets</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;