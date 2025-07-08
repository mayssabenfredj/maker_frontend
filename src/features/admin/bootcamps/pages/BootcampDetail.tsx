import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Edit, Calendar, MapPin, User, Tag, Package, Euro } from 'lucide-react';
import { useStore } from '../../../../stores/useStore';
import { bootcampService } from '../services/bootcamp.service';
import { useSelections } from '../hooks/useSelections';
import { getImageUrl } from '../../../../shared/utils/imageUtils';
import AnimatedSection from '../../../../components/UI/AnimatedSection';

const BootcampDetail: React.FC = () => {
  const { theme } = useStore();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [bootcamp, setBootcamp] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { getCategoriesForComponents } = useSelections();

  useEffect(() => {
    const loadBootcamp = async () => {
      if (!id) return;
      
      setLoading(true);
      setError(null);
      try {
        const data = await bootcampService.getBootcamp(id);
        setBootcamp(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement');
      } finally {
        setLoading(false);
      }
    };

    loadBootcamp();
  }, [id]);

  const getCategoryName = (category: any): string => {
    if (!category) return 'Aucune catégorie';
    return typeof category === 'string' ? category : category.name || 'Catégorie inconnue';
  };

  const getProductName = (product: any): string => {
    if (!product) return 'Produit inconnu';
    return typeof product === 'string' ? product : product.name || 'Produit inconnu';
  };

  const getProductPrice = (product: any): string => {
    if (!product) return '0';
    return typeof product === 'string' ? '0' : product.price?.toString() || '0';
  };

  const getProductImage = (product: any): string => {
    if (!product || typeof product === 'string') {
      return "/placeholder-product.png";
    }
    if (product.images && product.images.length > 0) {
      return getImageUrl(product.images[0]);
    }
    return "/placeholder-product.png";
  };

  const getBootcampImageUrl = (imagePath?: string): string => {
    if (!imagePath) {
      return "/placeholder-bootcamp.png";
    }
    return getImageUrl(imagePath);
  };

  const parseTypes = (types: any[]): string[] => {
    if (!types || !Array.isArray(types)) return [];
    
    return types.map(type => {
      if (typeof type === 'string') {
        // Essayer de parser si c'est un JSON string
        try {
          const parsed = JSON.parse(type);
          return Array.isArray(parsed) ? parsed[0] : parsed;
        } catch {
          return type;
        }
      }
      return type;
    });
  };

  const handleEdit = () => {
    navigate('/admin/bootcamps', { 
      state: { 
        editBootcamp: bootcamp, 
        showForm: true 
      } 
    });
  };

  const handleBack = () => {
    navigate('/admin/bootcamps');
  };

  if (loading) {
    return (
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-8">
          <div className={`text-center py-12 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <div className="animate-spin h-8 w-8 mx-auto mb-4 border-2 border-orange-500 border-t-transparent rounded-full" />
            <p>Chargement du bootcamp...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !bootcamp) {
    return (
      <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-8">
          <div className={`text-center py-12 ${
            theme === 'dark' ? 'text-red-400' : 'text-red-600'
          }`}>
            <h3 className="text-xl font-semibold mb-2">Erreur</h3>
            <p>{error || 'Bootcamp non trouvé'}</p>
            <button
              onClick={handleBack}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    );
  }

  const parsedTypes = parseTypes(bootcamp.types);

  return (
    <div className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBack}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <ArrowLeft className="h-6 w-6" />
              </motion.button>
              <div>
                <h1 className={`text-3xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {bootcamp.name}
                </h1>
                <p className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Détails du bootcamp
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEdit}
              className="flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              <Edit className="h-5 w-5" />
              <span>Modifier</span>
            </motion.button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Images Gallery */}
          <AnimatedSection>
            <div className={`rounded-xl shadow-lg overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="relative">
                <img
                  src={getBootcampImageUrl(bootcamp.images && bootcamp.images.length > 0 ? bootcamp.images[currentImageIndex] : undefined)}
                  alt={bootcamp.name}
                  className="w-full h-96 object-cover"
                />
                {bootcamp.images && bootcamp.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {bootcamp.images.map((_: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex
                            ? 'bg-white'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Bootcamp Info */}
          <AnimatedSection delay={0.1}>
            <div className={`p-8 rounded-xl shadow-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="space-y-6">
                {/* Types */}
                <div>
                  <h3 className={`text-lg font-semibold mb-3 flex items-center ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    <Tag className="h-5 w-5 mr-2" />
                    Types
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {parsedTypes.map((type: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dates */}
                <div>
                  <h3 className={`text-lg font-semibold mb-3 flex items-center ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    <Calendar className="h-5 w-5 mr-2" />
                    Période
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {new Date(bootcamp.dateDebut).toLocaleDateString('fr-FR')}
                      </div>
                      <div className={`text-xs ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Date de début
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
                        Date de fin
                      </div>
                    </div>
                  </div>
                  {bootcamp.periode && (
                    <div className="mt-2">
                      <div className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Période: {bootcamp.periode}
                      </div>
                    </div>
                  )}
                </div>

                {/* Location */}
                <div>
                  <h3 className={`text-lg font-semibold mb-3 flex items-center ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    <MapPin className="h-5 w-5 mr-2" />
                    Localisation
                  </h3>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {bootcamp.location}
                  </div>
                </div>

                {/* Animateur */}
                <div>
                  <h3 className={`text-lg font-semibold mb-3 flex items-center ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    <User className="h-5 w-5 mr-2" />
                    Animateur
                  </h3>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {bootcamp.animator}
                  </div>
                </div>

                {/* Catégorie et Prix */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Catégorie
                    </h3>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {getCategoryName(bootcamp.category)}
                    </div>
                  </div>
                  <div className="text-right">
                    <h3 className={`text-lg font-semibold mb-2 flex items-center justify-end ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      <Euro className="h-4 w-4 mr-1" />
                      Prix
                    </h3>
                    <div className={`text-2xl font-bold ${
                      theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                    }`}>
                      {bootcamp.price} DT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Produits associés */}
        {bootcamp.products && bootcamp.products.length > 0 && (
          <AnimatedSection delay={0.2}>
            <div className={`mt-8 p-8 rounded-xl shadow-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <Package className="h-6 w-6 mr-2" />
                Produits associés
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bootcamp.products.map((product: any, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-lg overflow-hidden shadow-md transition-all ${
                      theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="relative h-48">
                      <img
                        src={getProductImage(product)}
                        alt={getProductName(product)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className={`font-semibold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {getProductName(product)}
                      </h4>
                      <div className={`text-lg font-bold ${
                        theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                      }`}>
                        {getProductPrice(product)} DT
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Description */}
        {bootcamp.description && (
          <AnimatedSection delay={0.3}>
            <div className={`mt-8 p-8 rounded-xl shadow-lg ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Description
              </h3>
              <div 
                className={`prose max-w-none ${
                  theme === 'dark' ? 'prose-invert' : ''
                }`}
                dangerouslySetInnerHTML={{ __html: bootcamp.description }}
              />
            </div>
          </AnimatedSection>
        )}

        {/* Informations supplémentaires */}
        <AnimatedSection delay={0.4}>
          <div className={`mt-8 p-8 rounded-xl shadow-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className={`text-xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Informations supplémentaires
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className={`text-lg font-medium mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Date de création
                </h4>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {new Date(bootcamp.createdAt).toLocaleDateString('fr-FR')}
                </div>
              </div>
              <div>
                <h4 className={`text-lg font-medium mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Dernière modification
                </h4>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {new Date(bootcamp.updatedAt).toLocaleDateString('fr-FR')}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BootcampDetail; 