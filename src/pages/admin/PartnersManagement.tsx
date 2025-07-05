import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Search, ExternalLink, Building, Calendar, Users } from 'lucide-react';
import { useStore } from '../../stores/useStore';
import AnimatedSection from '../../components/UI/AnimatedSection';

const PartnersManagement: React.FC = () => {
  const { theme, partners, addPartner, updatePartner, deletePartner } = useStore();
  const [showForm, setShowForm] = useState(false);
  const [editingPartner, setEditingPartner] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const mockPartners = [
    {
      id: '1',
      name: 'TechCorp Innovation',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://techcorp.com',
      description: { fr: 'Leader mondial en solutions IoT', en: 'Global leader in IoT solutions' },
      category: 'technology',
      sector: 'IoT & IA',
      collaboration: 'Formations spécialisées et projets R&D',
      since: '2020',
      status: 'active',
      contactPerson: 'Jean Dupont',
      email: 'contact@techcorp.com',
      phone: '+33 1 23 45 67 89',
      projects: 12,
      students: 156
    },
    {
      id: '2',
      name: 'RoboTech Solutions',
      logo: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://robotech.com',
      description: { fr: 'Spécialiste en robotique industrielle', en: 'Industrial robotics specialist' },
      category: 'technology',
      sector: 'Robotique',
      collaboration: 'Équipements et expertise technique',
      since: '2019',
      status: 'active',
      contactPerson: 'Marie Martin',
      email: 'info@robotech.com',
      phone: '+33 1 98 76 54 32',
      projects: 8,
      students: 89
    },
    {
      id: '3',
      name: 'Université de Tunis',
      logo: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://utunis.edu.tn',
      description: { fr: 'Institution académique de référence', en: 'Leading academic institution' },
      category: 'education',
      sector: 'Éducation Supérieure',
      collaboration: 'Programmes conjoints et recherche',
      since: '2018',
      status: 'active',
      contactPerson: 'Dr. Ahmed Benali',
      email: 'partenariats@utunis.edu.tn',
      phone: '+216 71 123 456',
      projects: 15,
      students: 234
    },
    {
      id: '4',
      name: 'InnovateCorp',
      logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200',
      website: 'https://innovatecorp.com',
      description: { fr: 'Startup spécialisée en IoT industriel', en: 'Industrial IoT startup' },
      category: 'industry',
      sector: 'IoT Industriel',
      collaboration: 'Stages et projets étudiants',
      since: '2022',
      status: 'pending',
      contactPerson: 'Sarah Johnson',
      email: 'partnerships@innovatecorp.com',
      phone: '+1 555 123 4567',
      projects: 3,
      students: 45
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'technology', label: 'Technologie' },
    { id: 'education', label: 'Éducation' },
    { id: 'industry', label: 'Industrie' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'inactive': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Actif';
      case 'pending': return 'En attente';
      case 'inactive': return 'Inactif';
      default: return status;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technology': return 'bg-blue-500';
      case 'education': return 'bg-green-500';
      case 'industry': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredPartners = mockPartners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || partner.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEdit = (partner: any) => {
    setEditingPartner(partner);
    setShowForm(true);
  };

  const handleDelete = (partnerId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce partenaire ?')) {
      deletePartner(partnerId);
    }
  };

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
                Gestion des Partenaires
              </h1>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Gérez votre réseau de partenaires stratégiques
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Nouveau Partenaire</span>
            </motion.button>
          </div>
        </AnimatedSection>

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
                  placeholder="Rechercher un partenaire..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                />
              </div>
              
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
        </AnimatedSection>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPartners.map((partner, index) => (
            <AnimatedSection key={partner.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl shadow-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className={`text-xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {partner.name}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(partner.status)}`}>
                          {getStatusLabel(partner.status)}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(partner.category)}`}>
                          {partner.sector}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors ${
                        theme === 'dark'
                          ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <button
                      onClick={() => handleEdit(partner)}
                      className={`p-2 rounded-lg transition-colors ${
                        theme === 'dark'
                          ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(partner.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        theme === 'dark'
                          ? 'text-gray-400 hover:text-red-400 hover:bg-gray-700'
                          : 'text-gray-600 hover:text-red-600 hover:bg-gray-100'
                      }`}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {partner.description.fr}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Contact
                    </div>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {partner.contactPerson}
                    </div>
                  </div>
                  
                  <div>
                    <div className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Partenaire depuis
                    </div>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {partner.since}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Building className="h-4 w-4 text-blue-500" />
                    <div>
                      <div className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {partner.projects}
                      </div>
                      <div className={`text-xs ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Projets
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-green-500" />
                    <div>
                      <div className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {partner.students}
                      </div>
                      <div className={`text-xs ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Étudiants
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg mb-4 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <div className={`text-sm font-medium mb-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Type de collaboration
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {partner.collaboration}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    Voir Contrat
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                  >
                    Contacter
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {filteredPartners.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-12">
              <div className={`text-6xl mb-4 ${
                theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
              }`}>
                🤝
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Aucun partenaire trouvé
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Essayez de modifier vos critères de recherche ou ajoutez un nouveau partenaire.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default PartnersManagement;