import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Calculate discounted price if applicable
  const finalPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="overflow-hidden rounded-md aspect-[3/4] mb-3">
        <Link to={`/product/${product.id}`}>
          <img 
            src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Favorite Button */}
      <button 
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Heart 
          size={18} 
          className={isFavorite ? 'fill-gold-500 text-gold-500' : 'text-gray-500'} 
        />
      </button>

      {/* Product badges */}
      <div className="absolute top-3 left-3 flex flex-col gap-2">
        {product.new && (
          <span className="bg-navy-900 text-white text-xs font-medium px-2 py-1 rounded">
            New
          </span>
        )}
        {product.discount && (
          <span className="bg-gold-500 text-white text-xs font-medium px-2 py-1 rounded">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-medium text-navy-900">
          <Link to={`/product/${product.id}`} className="hover:text-gold-500 transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-gray-500 text-sm mb-1">{product.category}</p>
        <div className="flex items-center gap-2">
          {product.discount ? (
            <>
              <span className="font-semibold text-navy-900">${finalPrice.toFixed(2)}</span>
              <span className="text-gray-500 line-through text-sm">${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-semibold text-navy-900">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;