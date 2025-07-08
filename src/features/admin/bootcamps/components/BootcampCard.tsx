import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2, Eye } from 'lucide-react';
import { Bootcamp } from '../types/bootcamp';
import { getImageUrl } from '../../../../shared/utils/imageUtils';

interface BootcampCardProps {
  bootcamp: Bootcamp;
  theme: 'light' | 'dark';
  isSelected: boolean;
  onSelect: (id: string) => void;
  onEdit: (bootcamp: Bootcamp) => void;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
}

const BootcampCard: React.FC<BootcampCardProps> = ({
  bootcamp,
  theme,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
  onView
}) => {
  const getCategoryName = (category: any): string => {
    if (!category) return 'Aucune catégorie';
    return typeof category === 'string' ? category : category.name || 'Catégorie inconnue';
  };

  const getBootcampImageUrl = (imagePath?: string): string => {
    if (!imagePath) {
      return "/placeholder-bootcamp.png";
    }
    return getImageUrl(imagePath);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-xl shadow-lg overflow-hidden ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="relative">
        <img
          src={getBootcampImageUrl(bootcamp.images && bootcamp.images.length > 0 ? bootcamp.images[0] : undefined)}
          alt={bootcamp.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
            {bootcamp.types.join(', ')}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(bootcamp._id)}
            className="w-5 h-5 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
          />
          <button
            onClick={() => onEdit(bootcamp)}
            className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(bootcamp._id)}
            className="p-2 bg-white rounded-full text-red-600 hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {bootcamp.name}
        </h3>
        
        <p className={`text-sm mb-4 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {bootcamp.description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className={`text-sm font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {new Date(bootcamp.dateDebut).toLocaleDateString('fr-FR')}
            </div>
            <div className={`text-xs ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Début
            </div>
          </div>
          
          <div>
            <div className={`text-sm font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {new Date(bootcamp.dateFin).toLocaleDateString('fr-FR')}
            </div>
            <div className={`text-xs ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Fin
            </div>
          </div>
          
          <div>
            <div className={`text-sm font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {bootcamp.location}
            </div>
            <div className={`text-xs ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Lieu
            </div>
          </div>
          
          <div>
            <div className={`text-sm font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {bootcamp.animator}
            </div>
            <div className={`text-xs ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Animateur
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Catégorie: {getCategoryName(bootcamp.category)}
            </div>
          </div>
          <div className={`text-xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {bootcamp.price}€
          </div>
        </div>
        
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onView(bootcamp._id)}
            className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium flex items-center justify-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>Voir Détails</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onEdit(bootcamp)}
            className="flex-1 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
          >
            Modifier
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default BootcampCard; 