import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Eye, Edit, Trash2, Package, TrendingUp, AlertTriangle } from 'lucide-react';
import { useStore } from '../../stores/useStore';
import AnimatedSection from '../../components/UI/AnimatedSection';

const ProductsManagement: React.FC = () => {
  const { theme } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const products = [
    {
      id: '1',
      name: 'Kit Arduino Starter',
      description: 'Kit complet pour débuter avec Arduino',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 49.99,
      originalPrice: 59.99,
      category: 'kits',
      stock: 25,
      sold: 124,
      status: 'active',
      featured: true,
      sku: 'ARD-START-001'
    },
    {
      id: '2',
      name: 'Raspberry Pi 4 Kit',
      description: 'Kit Raspberry Pi 4 avec accessoires',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 89.99,
      originalPrice: null,
      category: 'kits',
      stock: 15,
      sold: 89,
      status: 'active',
      featured: true,
      sku: 'RPI-4-KIT-001'
    },
    {
      id: '3',
      name: 'Capteur Ultrasonique',
      description: 'Capteur de distance HC-SR04',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 5.99,
      originalPrice: null,
      category: 'components',
      stock: 3,
      sold: 256,
      status: 'low-stock',
      featured: false,
      sku: 'SENS-ULTRA-001'
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'kits', label: 'Kits' },
    { id: 'components', label: 'Composants' },
    { id: 'books', label: 'Livres' },
    { id: 'tools', label: 'Outils' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'low-stock': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'out-of-stock': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Actif';
      case 'low-stock': return 'Stock faible';
      case 'out-of-stock': return 'Rupture';
      case 'inactive': return 'Inactif';
      default: return status;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Gestion des Produits
          </h1>
          <p className={`mt-2 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Gérez votre catalogue de produits et stock
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow"
        >
          <Plus className="h-5 w-5" />
          <span>Nouveau Produit</span>
        </motion.button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Total Produits', value: '156', icon: Package, color: 'from-blue-500 to-cyan-600' },
          { title: 'Ventes ce mois', value: '€12,345', icon: TrendingUp, color: 'from-green-500 to-emerald-600' },
          { title: 'Stock faible', value: '8', icon: AlertTriangle, color: 'from-orange-500 to-red-600' },
          { title: 'Ruptures', value: '3', icon: AlertTriangle, color: 'from-red-500 to-pink-600' }
        ].map((stat, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } shadow-lg border border-gray-200 dark:border-gray-700`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-bold mt-1 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Filters */}
      <div className={`p-6 rounded-2xl ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      } shadow-lg border border-gray-200 dark:border-gray-700`}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500'
                  : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500'
              } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className={`px-4 py-3 rounded-xl border transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-gray-50 border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-green-500/20`}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <AnimatedSection key={product.id} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className={`rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } group`}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                    {getStatusLabel(product.status)}
                  </span>
                  {product.featured && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500 to-blue-600 text-white">
                      Populaire
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-2">
                    <button className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-colors shadow-lg">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-green-600 hover:bg-green-50 transition-colors shadow-lg">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-red-600 hover:bg-red-50 transition-colors shadow-lg">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {product.name}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {product.sku}
                  </span>
                </div>
                
                <p className={`text-sm mb-4 line-clamp-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Stock
                    </div>
                    <div className={`text-lg font-bold ${
                      product.stock < 10 ? 'text-red-500' : 'text-green-500'
                    }`}>
                      {product.stock}
                    </div>
                  </div>
                  
                  <div>
                    <div className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Vendus
                    </div>
                    <div className={`text-lg font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {product.sold}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
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
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                  >
                    Modifier
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default ProductsManagement;