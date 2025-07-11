import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart, Eye } from 'lucide-react';
import { Product } from '../../../admin/products/types/product';
import { getImageUrl } from '../../../../shared/utils/imageUtils';
import { useNavigate } from 'react-router-dom';

interface ShopProductCardProps {
  product: Product & { image: string };
  theme: 'light' | 'dark';
  viewMode: 'grid' | 'list';
}

const ShopProductCard: React.FC<ShopProductCardProps> = ({ product, theme, viewMode }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-2xl shadow-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} group ${viewMode === 'list' ? 'flex' : ''}`}
    >
      <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={getImageUrl(product.image)}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {product.featured && (
          <div className="absolute top-4 left-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">Populaire</div>
        )}
        {product.originalPrice && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">-{Math.round((1 - product.price / product.originalPrice) * 100)}%</div>
        )}
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">Précommande</div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <button
              className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => navigate(`/shop/${product._id}`)}
            >
              <Eye className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
        <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{product.name}</h3>
        <p className={`text-sm mb-4 ${viewMode === 'list' ? '' : 'line-clamp-2'} ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{product.description}</p>
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{product.rating} ({product.reviews} avis)</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags?.slice(0, 2).map((tag, idx) => (
            <span key={idx} className={`px-2 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>{tag}</span>
          ))}
        </div>
        <div className={`flex items-center ${viewMode === 'list' ? 'justify-between' : 'justify-between'}`}>
          <div className="flex items-center space-x-2">
            <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{product.price}€</span>
            {product.originalPrice && (
              <span className={`text-sm line-through ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>{product.originalPrice}€</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShopProductCard;

