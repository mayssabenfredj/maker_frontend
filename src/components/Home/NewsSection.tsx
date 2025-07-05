import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../stores/useStore';
import AnimatedSection from '../UI/AnimatedSection';

const NewsSection: React.FC = () => {
  const { theme } = useStore();

  const news = [
    {
      id: 1,
      title: 'Nouveau partenariat avec TechCorp pour l\'innovation IoT',
      excerpt: 'Maker Skills s\'associe avec TechCorp pour développer de nouveaux programmes de formation en IoT industriel.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '15 Mars 2024',
      author: 'Équipe Maker Skills',
      category: 'Partenariat'
    },
    {
      id: 2,
      title: 'Lancement du nouveau bootcamp Intelligence Artificielle',
      excerpt: 'Un programme intensif de 16 semaines pour maîtriser les dernières technologies en IA et Machine Learning.',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '10 Mars 2024',
      author: 'Dr. Ahmed Ben Ali',
      category: 'Formation'
    },
    {
      id: 3,
      title: 'Nos étudiants remportent le concours national de robotique',
      excerpt: 'L\'équipe Maker Skills décroche la première place au concours national de robotique éducative.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '5 Mars 2024',
      author: 'Mohamed Slim',
      category: 'Actualité'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Partenariat':
        return 'bg-blue-500';
      case 'Formation':
        return 'bg-orange-500';
      case 'Actualité':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Actualités & Événements
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Restez informé de nos dernières nouvelles et événements
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <AnimatedSection key={article.id} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -10 }}
                className={`rounded-2xl shadow-lg overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } group`}
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {article.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 line-clamp-3 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <span className={`${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {article.date}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-blue-500" />
                      <span className={`${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {article.author}
                      </span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/news/${article.id}`}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
                  >
                    Lire la suite
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <Link
              to="/news"
              className="inline-flex items-center px-8 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Voir toutes les actualités
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsSection;