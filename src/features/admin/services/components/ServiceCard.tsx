import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2, Eye, EyeOff, Calendar, MapPin, DollarSign } from 'lucide-react';
import { ServiceCardProps } from '../types/service';
import { getImageUrl } from '../../../../shared/utils/imageUtils';

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onEdit,
  onDelete,
  onToggleStatus,
  theme,
  onShowDetail
}) => {
  const handleDelete = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce service ?')) {
      onDelete(service._id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      } border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} min-h-[420px] flex flex-col`}
    >
      {/* Image du service */}
      <div className="relative h-full overflow-hidden">
        <img
          src={getImageUrl(service.coverImagePath)}
          alt={service.name}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Badge de statut */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            service.isActive 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {service.isActive ? 'Actif' : 'Inactif'}
          </span>
        </div>

        {/* Actions rapides */}
        <div className="absolute top-3 left-3 flex space-x-2">
          <button
            onClick={() => onToggleStatus(service._id, !service.isActive)}
            className={`p-2 rounded-full transition-colors ${
              theme === 'dark' 
                ? 'bg-gray-800/80 text-gray-300 hover:bg-gray-700' 
                : 'bg-white/80 text-gray-600 hover:bg-gray-100'
            }`}
            title={service.isActive ? 'Désactiver' : 'Activer'}
          >
            {service.isActive ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className={`text-xl font-bold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {service.name}
        </h3>

        {service.description && (
          <p className={`text-sm mb-4 line-clamp-2 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {service.description}
          </p>
        )}

        {/* Catégories */}
        {service.categories && service.categories.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {service.categories.slice(0, 3).map((category) => (
                <span
                  key={category._id}
                  className={`px-2 py-1 text-xs rounded-full ${
                    theme === 'dark'
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {category.name}
                </span>
              ))}
              {service.categories.length > 3 && (
                <span className={`px-2 py-1 text-xs rounded-full ${
                  theme === 'dark'
                    ? 'bg-gray-700 text-gray-300'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  +{service.categories.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Aperçu des events liés */}
        {service.events && service.events.length > 0 && (
          <div className="mb-2">
            <span className="font-semibold text-xs text-gray-500">Événements : </span>
            {service.events.slice(0,2).map(event => (
              <span key={event._id} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                {event.name}
              </span>
            ))}
            {service.events.length > 2 && (
              <span className="inline-block text-xs text-blue-600 ml-1">+{service.events.length - 2} autres</span>
            )}
          </div>
        )}
        {/* Aperçu des projects liés */}
        {service.projects && service.projects.length > 0 && (
          <div className="mb-2">
            <span className="font-semibold text-xs text-gray-500">Projets : </span>
            {service.projects.slice(0,2).map(project => (
              <span key={project._id} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                {project.name}
              </span>
            ))}
            {service.projects.length > 2 && (
              <span className="inline-block text-xs text-green-600 ml-1">+{service.projects.length - 2} autres</span>
            )}
          </div>
        )}
        {/* Aperçu des products liés */}
        {service.products && service.products.length > 0 && (
          <div className="mb-2">
            <span className="font-semibold text-xs text-gray-500">Produits : </span>
            {service.products.slice(0,2).map(product => (
              <span key={product._id} className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                {product.name}
              </span>
            ))}
            {service.products.length > 2 && (
              <span className="inline-block text-xs text-orange-600 ml-1">+{service.products.length - 2} autres</span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500">
            Créé le {new Date(service.createdAt).toLocaleDateString('fr-FR')}
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(service)}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-blue-400 hover:bg-blue-400/10'
                  : 'text-blue-600 hover:bg-blue-50'
              }`}
              title="Modifier"
            >
              <Edit className="w-4 h-4" />
            </button>
            
            <button
              onClick={handleDelete}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-red-400 hover:bg-red-400/10'
                  : 'text-red-600 hover:bg-red-50'
              }`}
              title="Supprimer"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            {/* Bouton voir le détail */}
            {onShowDetail && (
              <button
                onClick={() => onShowDetail(service)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'text-orange-400 hover:bg-orange-400/10'
                    : 'text-orange-600 hover:bg-orange-50'
                }`}
                title="Voir le détail"
              >
                <Eye className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 