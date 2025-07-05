import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Edit, Trash2, FolderOpen, Hash, Eye } from 'lucide-react';
import { useStore } from '../../stores/useStore';
import AnimatedSection from '../../components/UI/AnimatedSection';

const CategoriesManagement: React.FC = () => {
  const { theme } = useStore();
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: '1',
      name: 'Internet des Objets (IoT)',
      slug: 'iot',
      description: 'Formations et produits liés à l\'IoT',
      color: '#3B82F6',
      itemCount: 24,
      type: 'formation',
      status: 'active',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Robotique',
      slug: 'robotics',
      description: 'Tout ce qui concerne la robotique',
      color: '#EF4444',
      itemCount: 18,
      type: 'formation',
      status: 'active',
      createdAt: '2024-01-10'
    },
    {
      id: '3',
      name: 'Intelligence Artificielle',
      slug: 'ai',
      description: 'IA et Machine Learning',
      color: '#8B5CF6',
      itemCount: 15,
      type: 'formation',
      status: 'active',
      createdAt: '2024-01-20'
    },
    {
      id: '4',
      name: 'Kits Éducatifs',
      slug: 'educational-kits',
      description: 'Kits pour l\'apprentissage pratique',
      color: '#10B981',
      itemCount: 32,
      type: 'product',
      status: 'active',
      createdAt: '2024-02-01'
    },
    {
      id: '5',
      name: 'Composants Électroniques',
      slug: 'components',
      description: 'Capteurs, modules et composants',
      color: '#F59E0B',
      itemCount: 156,
      type: 'product',
      status: 'active',
      createdAt: '2024-02-05'
    },
    {
      id: '6',
      name: 'Programmation',
      slug: 'programming',
      description: 'Langages et frameworks de programmation',
      color: '#6366F1',
      itemCount: 12,
      type: 'formation',
      status: 'draft',
      createdAt: '2024-03-01'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'draft': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'archived': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'formation': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'product': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'event': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Actif';
      case 'draft': return 'Brouillon';
      case 'archived': return 'Archivé';
      default: return status;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'formation': return 'Formation';
      case 'product': return 'Produit';
      case 'event': return 'Événement';
      default: return type;
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
            Gestion des Catégories
          </h1>
          <p className={`mt-2 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Organisez votre contenu avec des catégories
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow"
        >
          <Plus className="h-5 w-5" />
          <span>Nouvelle Catégorie</span>
        </motion.button>
      </div>

      {/* Search */}
      <div className={`p-6 rounded-2xl ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      } shadow-lg border border-gray-200 dark:border-gray-700`}>
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`} />
          <input
            type="text"
            placeholder="Rechercher une catégorie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors ${
              theme === 'dark'
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-cyan-500'
            } focus:outline-none focus:ring-2 focus:ring-cyan-500/20`}
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <AnimatedSection key={category.id} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className={`rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: category.color }}
                >
                  <FolderOpen className="h-6 w-6 text-white" />
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}>
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}>
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-400 hover:text-red-400 hover:bg-gray-700'
                      : 'text-gray-600 hover:text-red-600 hover:bg-gray-100'
                  }`}>
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className={`text-lg font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.name}
                </h3>
                
                <p className={`text-sm mb-3 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {category.description}
                </p>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(category.status)}`}>
                    {getStatusLabel(category.status)}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(category.type)}`}>
                    {getTypeLabel(category.type)}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm">
                  <Hash className="h-4 w-4 text-gray-400" />
                  <span className={`font-mono ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {category.slug}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.itemCount}
                  </div>
                  <div className={`text-xs ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Éléments
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Créé le
                  </div>
                  <div className={`text-xs ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {new Date(category.createdAt).toLocaleDateString('fr-FR')}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default CategoriesManagement;