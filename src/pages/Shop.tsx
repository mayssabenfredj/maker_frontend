import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Filter, Search, Heart, Eye, Grid, List, SlidersHorizontal } from 'lucide-react';
import { useStore } from '../stores/useStore';
import { translations } from '../data/translations';
import AnimatedSection from '../components/UI/AnimatedSection';

const Shop: React.FC = () => {
  const { theme, language } = useStore();
  const t = translations[language];
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<string[]>([]);

  const categories = [
    { id: 'all', label: 'Tous les produits', count: 12 },
    { id: 'kits', label: 'Kits éducatifs', count: 5 },
    { id: 'components', label: 'Composants', count: 4 },
    { id: 'books', label: 'Livres', count: 2 },
    { id: 'tools', label: 'Outils', count: 1 }
  ];

  const priceRanges = [
    { id: 'all', label: 'Tous les prix' },
    { id: '0-25', label: 'Moins de 25€' },
    { id: '25-50', label: '25€ - 50€' },
    { id: '50-100', label: '50€ - 100€' },
    { id: '100+', label: 'Plus de 100€' }
  ];

  const availabilityOptions = [
    { id: 'all', label: 'Tous' },
    { id: 'in-stock', label: 'En stock' },
    { id: 'pre-order', label: 'Précommande' }
  ];

  const sortOptions = [
    { id: 'name', label: 'Nom A-Z' },
    { id: 'price-low', label: 'Prix croissant' },
    { id: 'price-high', label: 'Prix décroissant' },
    { id: 'rating', label: 'Mieux notés' },
    { id: 'newest', label: 'Plus récents' }
  ];

  const products = [
    {
      id: '1',
      name: 'Kit Arduino Starter',
      description: 'Kit complet pour débuter avec Arduino',
      image: 'https://images.pexels.com/photos/159298/pexels-photo-159298.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      price: 49.99,
      originalPrice: 59.99,
      category: 'kits',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      featured: true,
      tags: ['Arduino', 'Débutant', 'Électronique'],
      availability: 'in-stock'
    },
    {
      id: '2',
      name: 'Raspberry Pi 4 Kit',
      description: 'Kit Raspberry Pi 4 avec accessoires',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      price: 89.99,
      originalPrice: null,
      category: 'kits',
      rating: 4.9,
      reviews: 89,
      inStock: true,
      featured: true,
      tags: ['Raspberry Pi', 'IoT', 'Linux'],
      availability: 'in-stock'
    },
    {
      id: '3',
      name: 'Capteur Ultrasonique HC-SR04',
      description: 'Capteur de distance ultrasonique',
      image: 'https://images.pexels.com/photos/163100/pexels-photo-163100.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      price: 5.99,
      originalPrice: null,
      category: 'components',
      rating: 4.6,
      reviews: 256,
      inStock: true,
      featured: false,
      tags: ['Capteur', 'Arduino', 'Robotique'],
      availability: 'in-stock'
    },
    {
      id: '4',
      name: 'Livre: IA pour Débutants',
      description: 'Guide complet pour apprendre l\'IA',
      image: 'https://images.pexels.com/photos/159711/pexels-photo-159711.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      price: 24.99,
      originalPrice: 29.99,
      category: 'books',
      rating: 4.7,
      reviews: 67,
      inStock: true,
      featured: false,
      tags: ['IA', 'Apprentissage', 'Théorie'],
      availability: 'in-stock'
    },
    {
      id: '5',
      name: 'Kit Robotique Éducatif',
      description: 'Kit pour construire votre premier robot',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      price: 129.99,
      originalPrice: 149.99,
      category: 'kits',
      rating: 4.9,
      reviews: 45,
      inStock: true,
      featured: true,
      tags: ['Robotique', 'Éducation', 'STEAM'],
      availability: 'in-stock'
    },
    {
      id: '6',
      name: 'Multimètre Digital',
      description: 'Outil de mesure électronique professionnel',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      price: 34.99,
      originalPrice: null,
      category: 'tools',
      rating: 4.5,
      reviews: 178,
      inStock: true,
      featured: false,
      tags: ['Outil', 'Mesure', 'Électronique'],
      availability: 'in-stock'
    },
    {
      id: '7',
      name: 'Kit IoT Avancé',
      description: 'Kit complet pour projets IoT avancés',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      price: 199.99,
      originalPrice: null,
      category: 'kits',
      rating: 4.8,
      reviews: 32,
      inStock: false,
      featured: true,
      tags: ['IoT', 'Avancé', 'WiFi'],
      availability: 'pre-order'
    },
    {
      id: '8',
      name: 'Module Bluetooth HC-05',
      description: 'Module de communication Bluetooth',
      image: 'https://images.pexels.com/photos/163100/pexels-photo-163100.jpeg?auto=compress&cs=tinysrgb&w=800&h=800',
      price: 12.99,
      originalPrice: null,
      category: 'components',
      rating: 4.4,
      reviews: 89,
      inStock: true,
      featured: false,
      tags: ['Bluetooth', 'Communication', 'Module'],
      availability: 'in-stock'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPriceRange = selectedPriceRange === 'all' || 
      (selectedPriceRange === '0-25' && product.price < 25) ||
      (selectedPriceRange === '25-50' && product.price >= 25 && product.price < 50) ||
      (selectedPriceRange === '50-100' && product.price >= 50 && product.price < 100) ||
      (selectedPriceRange === '100+' && product.price >= 100);
    const matchesAvailability = selectedAvailability === 'all' || product.availability === selectedAvailability;
    
    return matchesSearch && matchesCategory && matchesPriceRange && matchesAvailability;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return parseInt(b.id) - parseInt(a.id);
      default:
        return 0;
    }
  });

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
      <section className={`py-20 ${theme === 'dark' ? 'bg-primary-900' : 'bg-primary-900'}`}>
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Boutique Maker Skills
              </h1>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                Découvrez notre sélection de kits éducatifs, composants et outils pour vos projets
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
                    placeholder="Rechercher un produit..."
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-secondary-500/20`}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Catégories
                </label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category.id}
                          checked={selectedCategory === category.id}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-secondary-500 border-gray-300 focus:ring-secondary-500"
                        />
                        <span className={`ml-2 text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {category.label}
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Prix
                </label>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <label key={range.id} className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        value={range.id}
                        checked={selectedPriceRange === range.id}
                        onChange={(e) => setSelectedPriceRange(e.target.value)}
                        className="w-4 h-4 text-secondary-500 border-gray-300 focus:ring-secondary-500"
                      />
                      <span className={`ml-2 text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <label className={`block text-sm font-medium mb-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Disponibilité
                </label>
                <div className="space-y-2">
                  {availabilityOptions.map(option => (
                    <label key={option.id} className="flex items-center">
                      <input
                        type="radio"
                        name="availability"
                        value={option.id}
                        checked={selectedAvailability === option.id}
                        onChange={(e) => setSelectedAvailability(e.target.value)}
                        className="w-4 h-4 text-secondary-500 border-gray-300 focus:ring-secondary-500"
                      />
                      <span className={`ml-2 text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Top Bar */}
            <div className={`flex flex-col md:flex-row items-center justify-between mb-8 p-4 rounded-xl ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {sortedProducts.length} produit(s) trouvé(s)
                </span>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-secondary-500 text-white'
                        : theme === 'dark'
                        ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list'
                        ? 'bg-secondary-500 text-white'
                        : theme === 'dark'
                        ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <SlidersHorizontal className={`h-4 w-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`} />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={`px-3 py-2 rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-secondary-500/20`}
                  >
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="relative">
                  <ShoppingCart className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
                : 'space-y-6'
            }`}>
              {sortedProducts.map((product, index) => (
                <AnimatedSection key={product.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`rounded-2xl shadow-lg overflow-hidden ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    } group ${viewMode === 'list' ? 'flex' : ''}`}
                  >
                    <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      {product.featured && (
                        <div className="absolute top-4 left-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Populaire
                        </div>
                      )}
                      
                      {product.originalPrice && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </div>
                      )}
                      
                      {!product.inStock && (
                        <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Précommande
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
                    
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <h3 className={`text-lg font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {product.name}
                      </h3>
                      
                      <p className={`text-sm mb-4 ${viewMode === 'list' ? '' : 'line-clamp-2'} ${
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
                      
                      <div className={`flex items-center ${viewMode === 'list' ? 'justify-between' : 'justify-between'}`}>
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
                          disabled={!product.inStock}
                          className={`px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-all duration-300 ${
                            !product.inStock
                              ? 'bg-gray-400 text-white cursor-not-allowed'
                              : isInCart(product.id)
                              ? 'bg-green-500 text-white'
                              : 'bg-secondary-500 text-white hover:bg-secondary-600 hover:shadow-lg'
                          }`}
                        >
                          <ShoppingCart className="h-4 w-4" />
                          <span>
                            {!product.inStock 
                              ? 'Précommande' 
                              : isInCart(product.id) 
                              ? 'Ajouté' 
                              : 'Ajouter'
                            }
                          </span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className={`text-6xl mb-4 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`}>
                  🔍
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Aucun produit trouvé
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

export default Shop;