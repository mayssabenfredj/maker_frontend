import React from 'react';
import AnimatedSection from '../../../../components/UI/AnimatedSection';
import ShopProductCard from './ShopProductCard';
import { Product } from '../../../admin/products/types/product';

interface ShopProductListProps {
  products: (Product & { image: string })[];
  theme: 'light' | 'dark';
  viewMode: 'grid' | 'list';
  isInCart: (id: string) => boolean;
  onAddToCart: (id: string) => void;
  onRemoveFromCart: (id: string) => void;
}

const ShopProductList: React.FC<ShopProductListProps> = ({ products, theme, viewMode, isInCart, onAddToCart, onRemoveFromCart }) => {
  return (
    <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-6'}>
      {products.map((product, index) => (
        <AnimatedSection key={product._id} delay={index * 0.1}>
          <ShopProductCard
            product={product}
            theme={theme}
            viewMode={viewMode}
            isInCart={isInCart(product._id)}
            onAddToCart={() => onAddToCart(product._id)}
            onRemoveFromCart={() => onRemoveFromCart(product._id)}
          />
        </AnimatedSection>
      ))}
    </div>
  );
};

export default ShopProductList;
