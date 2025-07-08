import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Bot, Brain, Lightbulb, Users, Award, Globe, Star, Clock, ChevronLeft, ChevronRight, Play, CheckCircle, Quote, Calendar, MapPin, Target, Eye, Heart, Handshake, ExternalLink, Mail, Phone, User, Building, Briefcase, GraduationCap } from 'lucide-react';
import { useStore } from '../stores/useStore';
import { translations } from '../data/translations';
import AnimatedSection from '../components/UI/AnimatedSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import NewsSection from '../components/Home/NewsSection';
import StatsSection from '../components/Home/StatsSection';

const Home: React.FC = () => {
  const { theme, language } = useStore();
  const t = translations[language];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const heroSlides = [
    {
      type: 'formation',
      title: 'Formations IoT & Robotique',
      subtitle: 'Apprenez les technologies du futur',
      description: 'Maîtrisez l\'Internet des Objets et la robotique avec nos formations pratiques',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
      cta: 'Voir les formations',
      link: '/academy?filter=formations'
    },
    {
      type: 'bootcamp',
      title: 'Bootcamps Intensifs',
      subtitle: 'Transformez votre carrière en quelques mois',
      description: 'Programmes intensifs pour devenir expert en IA, IoT et robotique',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1920',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
      cta: 'Découvrir les bootcamps',
      link: '/academy?filter=bootcamps'
    },
    {
      type: 'workshop',
      title: 'Workshops Pratiques',
      subtitle: 'Ateliers hands-on pour tous niveaux',
      description: 'Apprenez par la pratique avec nos ateliers spécialisés',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1920',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
      cta: 'Rejoindre un workshop',
      link: '/academy?filter=workshops'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const features = [
    {
      icon: Cpu,
      title: t.home.features.iot.title,
      description: t.home.features.iot.description,
      color: 'bg-orange-500',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4'
    },
    {
      icon: Bot,
      title: t.home.features.robotics.title,
      description: t.home.features.robotics.description,
      color: 'bg-blue-900',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=500',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4'
    },
    {
      icon: Brain,
      title: t.home.features.ai.title,
      description: t.home.features.ai.description,
      color: 'bg-orange-500',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=500',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4'
    },
    {
      icon: Lightbulb,
      title: t.home.features.steam.title,
      description: t.home.features.steam.description,
      color: 'bg-blue-900',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4'
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: '500+',
      label: 'Étudiants Formés',
      description: 'Apprenants satisfaits'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Projets Réalisés',
      description: 'Innovations concrètes'
    },
    {
      icon: Globe,
      number: '10+',
      label: 'Partenaires',
      description: 'Entreprises partenaires'
    },
    {
      icon: Brain,
      number: '15+',
      label: 'Formations',
      description: 'Programmes disponibles'
    }
  ];

  // About Section Data - Enriched
  const aboutValues = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Nous autonomisons les gens en leur fournissant la confiance, les outils, les connaissances, l\'espace et les communautés dont ils ont besoin pour changer le monde et devenir des résolveurs de problèmes conscients à l\'échelle mondiale.',
      stats: '500+ étudiants formés'
    },
    {
      icon: Eye,
      title: 'Notre Vision',
      description: 'Nous apportons des interventions interdisciplinaires à travers la Science, la Technologie, l\'Ingénierie, l\'Art et les Mathématiques (STEAM) pour favoriser une culture d\'innovation, d\'exploration et d\'apprentissage tout au long de la vie.',
      stats: '15+ programmes disponibles'
    },
    {
      icon: Heart,
      title: 'Nos Valeurs',
      description: 'Innovation, collaboration, excellence et passion pour l\'éducation guident tout ce que nous faisons. Nous croyons en l\'apprentissage pratique et en l\'accompagnement personnalisé de chaque apprenant.',
      stats: '95% de satisfaction'
    }
  ];

  const team = [
    {
      name: 'Dr. Ahmed Ben Ali',
      role: 'Directeur Général',
      image: '/src/assets/b84ab9b1f6117b4c6347d56f2b969381.jpg',
      description: 'Expert en IA et robotique avec 15 ans d\'expérience dans l\'industrie et la recherche.',
      specialties: ['Intelligence Artificielle', 'Robotique', 'IoT'],
      experience: '15+ ans'
    },
    {
      name: 'Fatima Zahra',
      role: 'Directrice Pédagogique',
      image: '/src/assets/d57a1512bc5f8fb8c267629077e6a82b.jpg',
      description: 'Spécialiste en pédagogie innovante et développement de programmes STEAM.',
      specialties: ['Pédagogie', 'STEAM', 'Formation'],
      experience: '12+ ans'
    },
    {
      name: 'Mohamed Slim',
      role: 'Responsable Technique',
      image: '/src/assets/f139fb4d521f93483841c7aaf8701ee2.jpg',
      description: 'Ingénieur IoT et développeur full-stack passionné par l\'innovation technologique.',
      specialties: ['IoT', 'Développement', 'Systèmes Embarqués'],
      experience: '10+ ans'
    }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: 'Expertise Reconnue',
      description: 'Formateurs experts avec une expérience industrielle confirmée et des certifications internationales'
    },
    {
      icon: CheckCircle,
      title: 'Méthode Pratique',
      description: 'Apprentissage par la pratique avec des projets concrets et des cas d\'usage réels'
    },
    {
      icon: CheckCircle,
      title: 'Équipements Modernes',
      description: 'Laboratoires équipés des dernières technologies et outils de développement'
    },
    {
      icon: CheckCircle,
      title: 'Suivi Personnalisé',
      description: 'Accompagnement individuel tout au long du parcours avec mentorat dédié'
    },
    {
      icon: CheckCircle,
      title: 'Réseau Professionnel',
      description: 'Accès à notre réseau de partenaires industriels pour stages et emplois'
    },
    {
      icon: CheckCircle,
      title: 'Certification Reconnue',
      description: 'Diplômes et certifications reconnus par l\'industrie et les institutions'
    }
  ];

  // Calendar Events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Formation IoT Débutant',
      type: 'formation',
      date: '2024-04-15',
      time: '09:00',
      duration: '8 semaines',
      location: 'Campus Maker Skills',
      participants: 25,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 299
    },
    {
      id: 2,
      title: 'Bootcamp IA Intensive',
      type: 'bootcamp',
      date: '2024-04-18',
      time: '09:00',
      duration: '16 semaines',
      location: 'Campus + En ligne',
      participants: 20,
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 4999
    },
    {
      id: 3,
      title: 'Workshop Arduino',
      type: 'workshop',
      date: '2024-04-20',
      time: '14:00',
      duration: '3 heures',
      location: 'Lab Électronique',
      participants: 15,
      image: 'https://images.pexels.com/photos/159298/pexels-photo-159298.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 45
    },
    {
      id: 4,
      title: 'Conférence Robotique',
      type: 'event',
      date: '2024-04-25',
      time: '16:00',
      duration: '2 heures',
      location: 'Auditorium',
      participants: 100,
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 0
    }
  ];

  // Partners Data
  const partners = [
    {
      id: '1',
      name: 'TechCorp Innovation',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://techcorp.com',
      description: 'Leader mondial en solutions IoT et intelligence artificielle',
      sector: 'IoT & IA',
      collaboration: 'Formations spécialisées et projets R&D'
    },
    {
      id: '2',
      name: 'RoboTech Solutions',
      logo: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://robotech.com',
      description: 'Spécialiste en robotique industrielle et éducative',
      sector: 'Robotique',
      collaboration: 'Équipements et expertise technique'
    },
    {
      id: '3',
      name: 'AI Dynamics',
      logo: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://aidynamics.com',
      description: 'Recherche et développement en intelligence artificielle',
      sector: 'Intelligence Artificielle',
      collaboration: 'Recherche collaborative et stages'
    },
    {
      id: '4',
      name: 'Université de Tunis',
      logo: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://utunis.edu.tn',
      description: 'Partenariat académique pour la recherche et l\'innovation',
      sector: 'Éducation Supérieure',
      collaboration: 'Programmes conjoints et recherche'
    }
  ];

  const contactTypes = [
    { value: 'general', label: 'Demande générale' },
    { value: 'formation', label: 'Informations formations' },
    { value: 'partnership', label: 'Partenariat' },
    { value: 'support', label: 'Support technique' }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'formation': return 'bg-blue-900';
      case 'bootcamp': return 'bg-orange-500';
      case 'workshop': return 'bg-blue-600';
      case 'event': return 'bg-green-600';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'formation': return 'Formation';
      case 'bootcamp': return 'Bootcamp';
      case 'workshop': return 'Workshop';
      case 'event': return 'Événement';
      default: return type;
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      type: 'general'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image/Video */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/70" />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-orange-500 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-blue-900 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-orange-500 w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 py-20 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <motion.div
                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {heroSlides[currentSlide].type.charAt(0).toUpperCase() + heroSlides[currentSlide].type.slice(1)}
              </motion.div>
              
              <motion.h1
                className="text-5xl md:text-7xl font-bold leading-tight text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>
              
              <motion.p
                className="text-lg text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {heroSlides[currentSlide].description}
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Link
                  to={heroSlides[currentSlide].link}
                  className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-900 text-blue-900 bg-white font-semibold rounded-xl hover:bg-blue-900 hover:text-white transition-all duration-300"
                >
                  En savoir plus
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Enriched and Moved After Banner */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                À Propos de Maker Skills
              </h2>
              <p className={`text-xl max-w-3xl mx-auto mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                École d'innovation qui aide à apprendre les nouvelles technologies et à améliorer l'invention. 
                Nous croyons que l'avenir de l'apprentissage évolue et que les voies d'apprentissage alternatives 
                seront importantes pour personnaliser les parcours d'apprentissage des gens.
              </p>
              <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
            </div>
          </AnimatedSection>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {aboutValues.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`p-8 rounded-2xl shadow-lg relative overflow-hidden ${
                    theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-xl ${index % 2 === 0 ? 'bg-orange-500' : 'bg-blue-900'} flex items-center justify-center mb-6`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {value.title}
                  </h3>
                  <p className={`mb-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {value.description}
                  </p>
                  <div className={`text-sm font-semibold ${
                    index % 2 === 0 ? 'text-orange-500' : 'text-blue-900'
                  }`}>
                    {value.stats}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Team Section */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Notre Équipe d'Experts
              </h3>
              <p className={`text-lg max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Des professionnels passionnés et expérimentés pour vous accompagner
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-bold">{member.name}</h4>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className={`text-sm mb-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {member.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            theme === 'dark'
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4 text-orange-500" />
                      <span className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {member.experience}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Why Choose Us */}
          <AnimatedSection>
            <div className="text-center mb-12">
              <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Pourquoi Choisir Maker Skills ?
              </h3>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-xl ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                  } shadow-lg`}
                >
                  <div className="flex items-start space-x-4">
                    <reason.icon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className={`text-lg font-semibold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {reason.title}
                      </h4>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {t.home.features.title}
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="relative z-10 p-8">
                    <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Calendrier des Événements
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Découvrez nos prochaines formations, bootcamps et workshops
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 ${
                    theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                  } group cursor-pointer`}
                >
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getTypeColor(event.type)}`}>
                        {getTypeLabel(event.type)}
                      </span>
                    </div>
                    {event.price === 0 && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Gratuit
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-lg font-bold mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-orange-500" />
                        <span className={`text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {new Date(event.date).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-blue-900" />
                        <span className={`text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {event.time} - {event.duration}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-green-500" />
                        <span className={`text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {event.location}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className={`text-xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {event.price === 0 ? 'Gratuit' : `${event.price}€`}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 ${getTypeColor(event.type)} text-white rounded-lg font-medium hover:opacity-90 transition-opacity`}
                      >
                        S'inscrire
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Link
                to="/academy"
                className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
              >
                Voir tous les événements
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners Section */}
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
              <AnimatedSection key={partner.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-xl shadow-lg text-center ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  } group`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 rounded-xl object-cover mx-auto mb-4"
                  />
                  <h3 className={`text-lg font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {partner.name}
                  </h3>
                  <p className={`text-sm mb-3 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {partner.description}
                  </p>
                  <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {partner.sector}
                  </span>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {partner.collaboration}
                  </p>
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

      {/* Stats Section */}
      <StatsSection achievements={achievements} />

      {/* Contact Form Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className={`p-8 rounded-2xl shadow-lg ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
              }`}>
                <h2 className={`text-2xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Contactez-nous
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          theme === 'dark'
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                        } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          theme === 'dark'
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                        } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          theme === 'dark'
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                        } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                        placeholder="+216 12 345 678"
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Type de demande
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          theme === 'dark'
                            ? 'bg-gray-700 border-gray-600 text-white focus:border-orange-500'
                            : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500'
                        } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                      >
                        {contactTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                      placeholder="Décrivez votre demande en détail..."
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 px-6 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Envoyer le message</span>
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className={`text-2xl font-bold mb-6 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Informations de Contact
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-semibold mb-1 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          Adresse
                        </h3>
                        <p className={`${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          123 Rue de l'Innovation<br />
                          Tunis 1000, Tunisie
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-semibold mb-1 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          Téléphone
                        </h3>
                        <p className={`${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          +216 12 345 678<br />
                          +216 98 765 432
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-semibold mb-1 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          Email
                        </h3>
                        <p className={`${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          contact@makerskills.tn<br />
                          info@makerskills.tn
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className={`p-8 rounded-2xl shadow-lg ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                }`}>
                  <h3 className={`text-xl font-bold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Notre Localisation
                  </h3>
                  <div className={`w-full h-64 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  } flex items-center justify-center`}>
                    <div className="text-center">
                      <MapPin className={`h-12 w-12 mx-auto mb-2 ${
                        theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                      }`} />
                      <p className={`${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Carte interactive
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* News Section */}
      <NewsSection />

      {/* CTA Section */}
      <section className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-900'}`}>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Prêt à transformer votre avenir ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                Rejoignez notre communauté d'innovateurs et donnez vie à vos idées les plus audacieuses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 hover:shadow-lg transform transition-all duration-300"
                  >
                    Contactez-nous
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/academy"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
                  >
                    Voir les formations
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;