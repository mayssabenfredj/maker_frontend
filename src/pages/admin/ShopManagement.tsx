import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Search, Filter, Package, ShoppingCart, TrendingUp, Eye } from 'lucide-react';
import { useStore } from '../../stores/useStore';
import AnimatedSection from '../../components/UI/AnimatedSection';
import { getProductImageUrl } from '../../shared/utils/imageUtils';

const ShopManagement: React.FC = () => {
  const { theme } = useStore();
  const [activeTab, setActiveTab] = useState('products');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const products = [
    {
      id: '1',
      name: 'Kit Arduino Starter',
      description: 'Kit complet pour débuter avec Arduino',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: 49.99,
      originalPrice: 59.99,
      category: 'kits',
      stock: 25,
      sold: 124,
      status: 'active',
      featured: true
    },
    {
      id: '2',
      name: 'Raspberry Pi 4 Kit',
      description: 'Kit Raspberry Pi 4 avec accessoires',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: 89.99,
      originalPrice: null,
      category: 'kits',
      stock: 15,
      sold: 89,
      status: 'active',
      featured: true
    },
    {
      id: '3',
      name: 'Capteur Ultrasonique',
      description: 'Capteur de distance HC-SR04',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=200',
      price: 5.99,
      originalPrice: null,
      category: 'components',
      stock: 50,
      sold: 256,
      status: 'active',
      featured: false
    }
  ];

  const orders = [
    {
      id: 'ORD-001',
      customer: 'Ahmed Ben Ali',
      email: 'ahmed@email.com',
      date: '2024-03-15',
      total: 149.97,
      status: 'pending',
      items: 3
    },
    {
      id: 'ORD-002',
      customer: 'Fatima Zahra',
      email: 'fatima@email.com',
      date: '2024-03-14',
      total: 89.99,
      status: 'shipped',
      items: 1
    },
    {
      id: 'ORD-003',
      customer: 'Mohamed Slim',
      email: 'mohamed@email.com',
      date: '2024-03-13',
      total: 234.95,
      status: 'delivered',
      items: 5
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
      case 'inactive': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'shipped': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'delivered': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Actif';
      case 'inactive': return 'Inactif';
      case 'pending': return 'En attente';
      case 'shipped': return 'Expédié';
      case 'delivered': return 'Livré';
      default: return status;
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const tabs = [
    { id: 'products', label: 'Produits', icon: Package },
    { id: 'orders', label: 'Commandes', icon: ShoppingCart },
    { id: 'analytics', label: 'Analyses', icon: TrendingUp }
  ];

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className={`text-3xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Gestion de la Boutique
              </h1>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Gérez vos produits, commandes et analyses de vente
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Nouveau Produit</span>
            </motion.button>
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection>
          <div className={`p-2 rounded-xl mb-8 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <div className="flex space-x-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white'
                      : theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <>
            {/* Filters */}
            <AnimatedSection>
              <div className={`p-6 rounded-xl mb-8 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
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
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Filter className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
                    <select
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className={`px-4 py-3 rounded-lg border transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-gray-50 border-gray-300 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
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
            </AnimatedSection>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <AnimatedSection key={product.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`rounded-xl shadow-lg overflow-hidden ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={getProductImageUrl(product.image)}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      {product.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Populaire
                        </div>
                      )}
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 bg-white rounded-full text-green-600 hover:bg-green-50 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 bg-white rounded-full text-red-600 hover:bg-red-50 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-lg font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {product.name}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                          {getStatusLabel(product.status)}
                        </span>
                      </div>
                      
                      <p className={`text-sm mb-4 ${
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
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                        >
                          Modifier
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <AnimatedSection>
            <div className={`rounded-xl shadow-lg overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <tr>
                      <th className={`px-6 py-4 text-left text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Commande
                      </th>
                      <th className={`px-6 py-4 text-left text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Client
                      </th>
                      <th className={`px-6 py-4 text-left text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Date
                      </th>
                      <th className={`px-6 py-4 text-left text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Total
                      </th>
                      <th className={`px-6 py-4 text-left text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Statut
                      </th>
                      <th className={`px-6 py-4 text-left text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {orders.map((order, index) => (
                      <motion.tr
                        key={order.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}
                      >
                        <td className="px-6 py-4">
                          <div className={`font-medium ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {order.id}
                          </div>
                          <div className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {order.items} article(s)
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className={`font-medium ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {order.customer}
                          </div>
                          <div className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {order.email}
                          </div>
                        </td>
                        <td className={`px-6 py-4 text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {order.date}
                        </td>
                        <td className={`px-6 py-4 font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {order.total}€
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                            {getStatusLabel(order.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors">
                              <Edit className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Ventes du mois', value: '€12,345', change: '+15%', color: 'text-green-500' },
              { title: 'Commandes', value: '89', change: '+8%', color: 'text-blue-500' },
              { title: 'Produits vendus', value: '234', change: '+12%', color: 'text-purple-500' },
              { title: 'Taux de conversion', value: '3.2%', change: '+0.5%', color: 'text-orange-500' }
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-xl shadow-lg ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <h3 className={`text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat.value}
                    </span>
                    <span className={`text-sm font-medium ${stat.color}`}>
                      {stat.change}
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopManagement;