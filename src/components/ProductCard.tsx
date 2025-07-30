import React from 'react';
import type { Product } from '../types/theme';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      {/* Theme 1: Simple card */}
      <div className="theme1-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="p-3 sm:p-4">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-32 sm:h-40 lg:h-48 object-contain mb-3 sm:mb-4"
          />
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-3">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg sm:text-xl font-bold text-blue-600">
              ${product.price}
            </span>
            <div className="flex items-center">
              <span className="text-yellow-500 text-sm sm:text-base">★</span>
              <span className="text-xs sm:text-sm text-gray-600 ml-1">{product.rating.rate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Theme 2: Dark card with border */}
      <div className="theme2-card bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-purple-500 transition-colors duration-300">
        <div className="p-3 sm:p-4 lg:p-6">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-32 sm:h-40 lg:h-48 object-contain mb-3 sm:mb-4 bg-gray-900 rounded"
          />
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 line-clamp-3">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg sm:text-xl font-bold text-purple-400">
              ${product.price}
            </span>
            <div className="flex items-center">
              <span className="text-yellow-400 text-sm sm:text-base">★</span>
              <span className="text-xs sm:text-sm text-gray-400 ml-1">{product.rating.rate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Theme 3: Colorful card with gradient */}
      <div className="theme3-card bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <div className="p-3 sm:p-4 lg:p-6">
          <div className="bg-white rounded-xl p-2 sm:p-4 mb-3 sm:mb-4">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-32 sm:h-40 lg:h-48 object-contain"
            />
          </div>
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-2 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg sm:text-xl font-bold text-purple-600">
              ${product.price}
            </span>
            <div className="flex items-center bg-yellow-100 px-2 sm:px-3 py-1 rounded-full">
              <span className="text-yellow-500 text-sm sm:text-base">★</span>
              <span className="text-xs sm:text-sm text-yellow-700 ml-1 font-medium">{product.rating.rate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 