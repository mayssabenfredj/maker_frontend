import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Filter, Search, Heart, Eye } from 'lucide-react';
import { useStore } from '../stores/useStore';
import { translations } from '../data/translations';
import AnimatedSection from '../components/UI/AnimatedSection';
import GradientBackground from '../components/UI/GradientBackground';

const Shop: React.FC = () => {
  const { theme, language } = useStore();
  const t = translations[language];
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<string[]>([]);

  const categories = [
    { id: 'all', label: 'Tous les produits' },
    { id: 'kits', label: 'Kits éducatifs' },
    { id: 'components', label: 'Composants' },
    { id: 'books', label: 'Livres' },
    { id: 'tools', label: 'Outils' }
  ];

  const products = [
    {
      id: '1',
      name: 'Kit Arduino Starter',
      description: 'Kit complet pour débuter avec Arduino',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: 49.99,
      originalPrice: 59.99,
      category: 'kits',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      featured: true,
      tags: ['Arduino', 'Débutant', 'Électronique']
    },
    {
      id: '2',
      name: 'Raspberry Pi 4 Kit',
      description: 'Kit Raspberry Pi 4 avec accessoires',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: 89.99,
      originalPrice: null,
      category: 'kits',
      rating: 4.9,
      reviews: 89,
      inStock: true,
      featured: true,
      tags: ['Raspberry Pi', 'IoT', 'Linux']
    },
    {
      id: '3',
      name: 'Capteur Ultrasonique HC-SR04',
      description: 'Capteur de distance ultrasonique',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: 5.99,
      originalPrice: null,
      category: 'components',
      rating: 4.6,
      reviews: 256,
      inStock: true,
      featured: false,
      tags: ['Capteur', 'Arduino', 'Robotique']
    },
    {
      id: '4',
      name: 'Livre: IA pour Débutants',
      description: 'Guide complet pour apprendre l\'IA',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: 24.99,
      originalPrice: 29.99,
      category: 'books',
      rating: 4.7,
      reviews: 67,
      inStock: true,
      featured: false,
      tags: ['IA', 'Apprentissage', 'Théorie']
    },
    {
      id: '5',
      name: 'Kit Robotique Éducatif',
      description: 'Kit pour construire votre premier robot',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: 129.99,
      originalPrice: 149.99,
      category: 'kits',
      rating: 4.9,
      reviews: 45,
      inStock: true,
      featured: true,
      tags: ['Robotique', 'Éducation', 'STEAM']
    },
    {
      id: '6',
      name: 'Multimètre Digital',
      description: 'Outil de mesure électronique professionnel',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: 34.99,
      originalPrice: null,
      category: 'tools',
      rating: 4.5,
      reviews: 178,
      inStock: true,
      featured: false,
      tags: ['Outil', 'Mesure', 'Électronique']
    }
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(id => id !== productId));
  };

  const isInCart = (productId: string) => cart.includes(productId);

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
                Boutique Maker Skills
              </h1>
              <p className={`text-xl max-w-3xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Découvrez notre sélection de kits éducatifs, composants et outils pour vos projets
              </p>
            </div>
          </AnimatedSection>
        </div>
      </GradientBackground>

      {/* Filters and Search */}
      <section className={`py-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
                <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Catégories:
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white'
                        : theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  className={`pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>
              
              <div className="relative">
                <ShoppingCart className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`rounded-2xl shadow-lg overflow-hidden ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  } group`}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {product.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Populaire
                      </div>
                    )}
                    
                    {product.originalPrice && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-2">
                        <button className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                          <Eye className="h-5 w-5" />
                        </button>
                        <button className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                          <Heart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-lg font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {product.name}
                    </h3>
                    
                    <p className={`text-sm mb-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {product.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-500 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {product.rating} ({product.reviews} avis)
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 rounded-full text-xs ${
                            theme === 'dark'
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className={`text-xl font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {product.price}€
                        </span>
                        {product.originalPrice && (
                          <span className={`text-sm line-through ${
                            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                          }`}>
                            {product.originalPrice}€
                          </span>
                        )}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => isInCart(product.id) ? removeFromCart(product.id) : addToCart(product.id)}
                        className={`px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-all duration-300 ${
                          isInCart(product.id)
                            ? 'bg-green-500 text-white'
                            : 'bg-gradient-to-r from-orange-500 to-blue-600 text-white hover:shadow-lg'
                        }`}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        <span>{isInCart(product.id) ? 'Ajouté' : 'Ajouter'}</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Catégories Populaires
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Kits Éducatifs',
                description: 'Kits complets pour apprendre en pratiquant',
                image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=500',
                count: '15+ produits'
              },
              {
                title: 'Composants',
                description: 'Capteurs, modules et composants électroniques',
                image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500',
                count: '50+ produits'
              },
              {
                title: 'Outils',
                description: 'Outils professionnels pour vos projets',
                image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=500',
                count: '20+ produits'
              }
            ].map((category, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-2xl overflow-hidden shadow-lg ${
                    theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                  } cursor-pointer`}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {category.title}
                    </h3>
                    <p className={`mb-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {category.description}
                    </p>
                    <span className="text-orange-500 font-medium">
                      {category.count}
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;