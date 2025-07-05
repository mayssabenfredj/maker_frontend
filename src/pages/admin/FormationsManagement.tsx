import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Eye, Edit, Trash2, Users, Clock, Star, Calendar, MapPin } from 'lucide-react';
import { useStore } from '../../stores/useStore';
import AnimatedSection from '../../components/UI/AnimatedSection';
import Pagination from '../../components/admin/Pagination';
import RichTextEditor from '../../components/admin/RichTextEditor';

const FormationsManagement: React.FC = () => {
  const { theme } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editingFormation, setEditingFormation] = useState(null);
  const itemsPerPage = 6;

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'iot',
    level: 'beginner',
    duration: '',
    price: 0,
    image: '',
    instructor: '',
    location: '',
    startDate: '',
    maxStudents: 0
  });

  const formations = [
    {
      id: '1',
      title: 'Formation IoT Complète',
      description: 'Maîtrisez l\'Internet des Objets de A à Z avec des projets pratiques',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'iot',
      level: 'beginner',
      duration: '8 semaines',
      price: 299,
      students: 156,
      rating: 4.8,
      status: 'active',
      instructor: 'Dr. Ahmed Ben Ali',
      location: 'Campus + En ligne',
      startDate: '2024-04-15',
      maxStudents: 25,
      enrolledStudents: 18
    },
    {
      id: '2',
      title: 'Robotique Industrielle',
      description: 'Apprenez la robotique industrielle avec ROS et Python',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'robotics',
      level: 'advanced',
      duration: '12 semaines',
      price: 599,
      students: 89,
      rating: 4.9,
      status: 'active',
      instructor: 'Mohamed Slim',
      location: 'Campus',
      startDate: '2024-04-20',
      maxStudents: 20,
      enrolledStudents: 15
    },
    {
      id: '3',
      title: 'Intelligence Artificielle Pratique',
      description: 'Développez des applications IA avec TensorFlow et PyTorch',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'ai',
      level: 'intermediate',
      duration: '10 semaines',
      price: 499,
      students: 234,
      rating: 4.7,
      status: 'active',
      instructor: 'Fatima Zahra',
      location: 'En ligne',
      startDate: '2024-05-01',
      maxStudents: 30,
      enrolledStudents: 22
    },
    {
      id: '4',
      title: 'Programmation Python Avancée',
      description: 'Maîtrisez Python pour l\'IA, l\'IoT et le développement web',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'programming',
      level: 'intermediate',
      duration: '6 semaines',
      price: 199,
      students: 178,
      rating: 4.6,
      status: 'active',
      instructor: 'Sarah Mansouri',
      location: 'Campus + En ligne',
      startDate: '2024-04-25',
      maxStudents: 35,
      enrolledStudents: 28
    },
    {
      id: '5',
      title: 'Systèmes Embarqués STM32',
      description: 'Développement sur microcontrôleurs STM32 avec HAL',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'iot',
      level: 'advanced',
      duration: '14 semaines',
      price: 699,
      students: 67,
      rating: 4.8,
      status: 'draft',
      instructor: 'Karim Ben Ahmed',
      location: 'Campus',
      startDate: '2024-05-15',
      maxStudents: 15,
      enrolledStudents: 8
    },
    {
      id: '6',
      title: 'Machine Learning Appliqué',
      description: 'Implémentez des algorithmes ML pour résoudre des problèmes réels',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'ai',
      level: 'advanced',
      duration: '16 semaines',
      price: 799,
      students: 45,
      rating: 4.9,
      status: 'active',
      instructor: 'Dr. Leila Trabelsi',
      location: 'Campus + En ligne',
      startDate: '2024-06-01',
      maxStudents: 20,
      enrolledStudents: 12
    }
  ];

  const categories = [
    { id: 'all', label: 'Toutes' },
    { id: 'iot', label: 'IoT' },
    { id: 'robotics', label: 'Robotique' },
    { id: 'ai', label: 'IA' },
    { id: 'programming', label: 'Programmation' }
  ];

  const filteredFormations = formations.filter(formation => {
    const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || formation.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredFormations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedFormations = filteredFormations.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'draft': return 'bg-orange-500';
      case 'archived': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-blue-500';
      case 'intermediate': return 'bg-orange-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formation data:', formData);
    setShowForm(false);
    setFormData({
      title: '',
      description: '',
      category: 'iot',
      level: 'beginner',
      duration: '',
      price: 0,
      image: '',
      instructor: '',
      location: '',
      startDate: '',
      maxStudents: 0
    });
  };

  if (showForm) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {editingFormation ? 'Modifier la Formation' : 'Nouvelle Formation'}
            </h1>
          </div>
          <button
            onClick={() => setShowForm(false)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              theme === 'dark'
                ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Annuler
          </button>
        </div>

        <form onSubmit={handleSubmit} className={`p-8 rounded-2xl ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-lg space-y-6`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Titre de la formation *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Catégorie *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
              >
                <option value="iot">IoT</option>
                <option value="robotics">Robotique</option>
                <option value="ai">Intelligence Artificielle</option>
                <option value="programming">Programmation</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Niveau *
              </label>
              <select
                required
                value={formData.level}
                onChange={(e) => setFormData({...formData, level: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
              >
                <option value="beginner">Débutant</option>
                <option value="intermediate">Intermédiaire</option>
                <option value="advanced">Avancé</option>
              </select>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Durée *
              </label>
              <input
                type="text"
                required
                placeholder="ex: 8 semaines"
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Prix (€) *
              </label>
              <input
                type="number"
                required
                min="0"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Formateur *
              </label>
              <input
                type="text"
                required
                value={formData.instructor}
                onChange={(e) => setFormData({...formData, instructor: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
              />
            </div>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Description *
            </label>
            <RichTextEditor
              value={formData.description}
              onChange={(value) => setFormData({...formData, description: value})}
              placeholder="Décrivez la formation en détail..."
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Annuler
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              {editingFormation ? 'Mettre à jour' : 'Créer la formation'}
            </motion.button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Gestion des Formations
          </h1>
          <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Gérez vos formations et programmes éducatifs
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors shadow-lg"
        >
          <Plus className="h-5 w-5" />
          <span>Nouvelle Formation</span>
        </motion.button>
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
              placeholder="Rechercher une formation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500'
                  : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
              } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
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

      {/* Formations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {paginatedFormations.map((formation, index) => (
          <AnimatedSection key={formation.id} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className={`rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } group`}
            >
              <div className="relative">
                <img
                  src={formation.image}
                  alt={formation.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className={`px-3 py-1 rounded-full text-white text-xs font-medium ${getStatusColor(formation.status)}`}>
                    {formation.status === 'active' ? 'Actif' : formation.status === 'draft' ? 'Brouillon' : 'Archivé'}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-white text-xs font-medium ${getLevelColor(formation.level)}`}>
                    {formation.level === 'beginner' ? 'Débutant' : formation.level === 'intermediate' ? 'Intermédiaire' : 'Avancé'}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-2">
                    <button className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-colors shadow-lg">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-orange-500 hover:bg-orange-50 transition-colors shadow-lg">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-red-600 hover:bg-red-50 transition-colors shadow-lg">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {formation.title}
                </h3>
                
                <p className={`text-sm mb-4 line-clamp-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {formation.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    <div>
                      <div className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {formation.enrolledStudents}/{formation.maxStudents}
                      </div>
                      <div className={`text-xs ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Étudiants
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <div>
                      <div className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {formation.duration}
                      </div>
                      <div className={`text-xs ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Durée
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <div>
                      <div className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {formation.rating}
                      </div>
                      <div className={`text-xs ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Note
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-green-500" />
                    <div>
                      <div className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {new Date(formation.startDate).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' })}
                      </div>
                      <div className={`text-xs ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Début
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Par {formation.instructor}
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <MapPin className="h-3 w-3 text-purple-500" />
                      <span className={`text-xs ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {formation.location}
                      </span>
                    </div>
                  </div>
                  <div className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {formation.price}€
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Inscriptions
                    </span>
                    <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {Math.round((formation.enrolledStudents / formation.maxStudents) * 100)}%
                    </span>
                  </div>
                  <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2`}>
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(formation.enrolledStudents / formation.maxStudents) * 100}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Voir Détails
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                  >
                    Modifier
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={`rounded-2xl overflow-hidden shadow-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredFormations.length}
          />
        </div>
      )}
    </div>
  );
};

export default FormationsManagement;