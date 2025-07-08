import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, Calendar, Clock, Users, Star, MapPin, Award } from 'lucide-react';
import { useStore } from '../stores/useStore';
import { translations } from '../data/translations';
import AnimatedSection from '../components/UI/AnimatedSection';

const Academy: React.FC = () => {
  const { theme, language } = useStore();
  const t = translations[language];
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const typeFilters = [
    { id: 'all', label: t.academy.all },
    { id: 'formations', label: t.academy.formations },
    { id: 'bootcamps', label: t.academy.bootcamps },
    { id: 'workshops', label: t.academy.workshops },
    { id: 'events', label: t.academy.events }
  ];

  const categoryFilters = [
    { id: 'all', label: 'Toutes' },
    { id: 'iot', label: t.academy.iot },
    { id: 'robotics', label: t.academy.robotics },
    { id: 'ai', label: t.academy.ai },
    { id: 'programming', label: t.academy.programming }
  ];

  const formatFilters = [
    { id: 'all', label: 'Tous' },
    { id: 'online', label: t.academy.online },
    { id: 'onsite', label: t.academy.onsite },
    { id: 'kids', label: t.academy.kids }
  ];

  const academyItems = [
    {
      id: '1',
      type: 'formations',
      title: 'Formation IoT Complète',
      description: 'Maîtrisez l\'Internet des Objets de A à Z avec des projets pratiques',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      category: 'iot',
      format: 'onsite',
      duration: '8 semaines',
      price: 299,
      rating: 4.8,
      students: 156,
      instructor: 'Dr. Ahmed Ben Ali',
      startDate: '15 Avril 2024',
      location: 'Campus Maker Skills'
    },
    {
      id: '2',
      type: 'bootcamps',
      title: 'Bootcamp IA Intensive',
      description: 'Formation intensive de 16 semaines pour devenir expert en IA',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      category: 'ai',
      format: 'onsite',
      duration: '16 semaines',
      price: 4999,
      rating: 4.9,
      students: 67,
      instructor: 'Dr. Fatima Zahra',
      startDate: '1 Mai 2024',
      location: 'Campus + En ligne'
    },
    {
      id: '3',
      type: 'workshops',
      title: 'Workshop Arduino Débutant',
      description: 'Introduction pratique à Arduino avec projets',
      image: 'https://images.pexels.com/photos/159298/pexels-photo-159298.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      category: 'iot',
      format: 'onsite',
      duration: '3 heures',
      price: 45,
      rating: 4.7,
      students: 25,
      instructor: 'Mohamed Slim',
      startDate: '20 Avril 2024',
      location: 'Lab Maker Skills'
    },
    {
      id: '4',
      type: 'formations',
      title: 'Robotique pour Enfants',
      description: 'Construis ton premier robot avec LEGO Mindstorms',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      category: 'robotics',
      format: 'kids',
      duration: '4 semaines',
      price: 149,
      rating: 4.9,
      students: 312,
      instructor: 'Sarah Mansouri',
      startDate: '25 Avril 2024',
      location: 'Campus Maker Skills'
    },
    {
      id: '5',
      type: 'events',
      title: 'Conférence IA & Futur',
      description: 'Conférence sur l\'avenir de l\'intelligence artificielle',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      category: 'ai',
      format: 'onsite',
      duration: '4 heures',
      price: 25,
      rating: 4.8,
      students: 200,
      instructor: 'Experts IA',
      startDate: '30 Avril 2024',
      location: 'Auditorium'
    },
    {
      id: '6',
      type: 'formations',
      title: 'Programmation Python Avancée',
      description: 'Maîtrisez Python pour l\'IA, l\'IoT et le développement web',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      category: 'programming',
      format: 'online',
      duration: '10 semaines',
      price: 399,
      rating: 4.6,
      students: 178,
      instructor: 'Karim Ben Ahmed',
      startDate: '5 Mai 2024',
      location: 'En ligne'
    }
  ];

  const filteredItems = academyItems.filter(item => {
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesFormat = selectedFormat === 'all' || item.format === selectedFormat;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesCategory && matchesFormat && matchesSearch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'formations': return 'bg-primary-900 text-white';
      case 'bootcamps': return 'bg-secondary-500 text-white';
      case 'workshops': return 'bg-blue-600 text-white';
      case 'events': return 'bg-green-600 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'formations': return 'Formation';
      case 'bootcamps': return 'Bootcamp';
      case 'workshops': return 'Workshop';
      case 'events': return 'Événement';
      default: return type;
    }
  };

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Hero Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-primary-900' : 'bg-primary-900'}`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t.academy.title}
              </h1>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                Découvrez notre gamme complète de formations, bootcamps, workshops et événements
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className={`p-6 rounded-xl ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            } sticky top-24`}>
              <h3 className={`text-lg font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Filtres
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Rechercher
                </label>
                <div className="relative">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Rechercher..."
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-secondary-500/20`}
                  />
                </div>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Type
                </label>
                <div className="space-y-2">
                  {typeFilters.map(filter => (
                    <label key={filter.id} className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value={filter.id}
                        checked={selectedType === filter.id}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-4 h-4 text-secondary-500 border-gray-300 focus:ring-secondary-500"
                      />
                      <span className={`ml-2 text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {filter.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Catégorie
                </label>
                <div className="space-y-2">
                  {categoryFilters.map(filter => (
                    <label key={filter.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={filter.id}
                        checked={selectedCategory === filter.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 text-secondary-500 border-gray-300 focus:ring-secondary-500"
                      />
                      <span className={`ml-2 text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {filter.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Format Filter */}
              <div>
                <label className={`block text-sm font-medium mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Format
                </label>
                <div className="space-y-2">
                  {formatFilters.map(filter => (
                    <label key={filter.id} className="flex items-center">
                      <input
                        type="radio"
                        name="format"
                        value={filter.id}
                        checked={selectedFormat === filter.id}
                        onChange={(e) => setSelectedFormat(e.target.value)}
                        className="w-4 h-4 text-secondary-500 border-gray-300 focus:ring-secondary-500"
                      />
                      <span className={`ml-2 text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {filter.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Top Filters */}
            <div className="flex flex-wrap gap-4 mb-8">
              {typeFilters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedType(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedType === filter.id
                      ? 'bg-secondary-500 text-white'
                      : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <AnimatedSection key={item.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`rounded-xl shadow-lg overflow-hidden ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    } group`}
                  >
                    <div className="relative">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                          {getTypeLabel(item.type)}
                        </span>
                      </div>
                      {item.price === 0 && (
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Gratuit
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className={`text-lg font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h3>
                      
                      <p className={`text-sm mb-4 line-clamp-2 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {item.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3 text-secondary-500" />
                          <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {item.duration}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3 text-primary-900" />
                          <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {item.students}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {item.rating}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3 text-green-500" />
                          <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {new Date(item.startDate).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' })}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            {item.instructor}
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin className="h-3 w-3 text-purple-500" />
                            <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                              {item.location}
                            </span>
                          </div>
                        </div>
                        <div className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {item.price === 0 ? 'Gratuit' : `${item.price}€`}
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-2 bg-secondary-500 text-white rounded-lg font-medium hover:bg-secondary-600 transition-colors"
                      >
                        {item.type === 'events' ? 'S\'inscrire' : 'En savoir plus'}
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <div className={`text-6xl mb-4 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`}>
                  🔍
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Aucun résultat trouvé
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Essayez de modifier vos critères de recherche.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;