import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Check, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { getProductById, getRelatedProducts } from '../services/productService';
import ProductGrid from '../components/product/ProductGrid';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id) return;
        
        const fetchedProduct = await getProductById(parseInt(id));
        setProduct(fetchedProduct);
        
        if (fetchedProduct) {
          const related = await getRelatedProducts(fetchedProduct);
          setRelatedProducts(related);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    // Reset selections when product changes
    if (product) {
      setSelectedSize(product.sizes[0] || '');
      setSelectedColor(product.colors[0] || '');
      setCurrentImage(0);
      setQuantity(1);
      setAddedToCart(false);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      addToCart(product, quantity, selectedSize, selectedColor);
      setAddedToCart(true);
      
      // Reset added state after 3 seconds
      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
    }
  };

  if (loading) {
    return (
      <div className="pt-28 pb-16 container mx-auto px-4">
        <div className="animate-pulse">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square w-20 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-28 pb-16 container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/products">
          <Button variant="primary">Back to Products</Button>
        </Link>
      </div>
    );
  }

  // Calculate discounted price if applicable
  const finalPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-navy-900 mb-6">
          <ArrowLeft size={18} className="mr-1" />
          Back to Products
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="aspect-square overflow-hidden rounded-lg mb-4">
              <img 
                src={product.images[currentImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`aspect-square w-20 overflow-hidden rounded ${
                    currentImage === index ? 'ring-2 ring-navy-900' : 'opacity-70'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="lg:w-1/2">
            {product.new && (
              <span className="inline-block bg-navy-900 text-white text-xs font-medium px-2 py-1 rounded mb-3">
                New
              </span>
            )}
            
            <h1 className="text-3xl font-bold text-navy-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < 4 ? 'fill-gold-500 text-gold-500' : 'text-gray-300'} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.0 (86 reviews)</span>
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              {product.discount ? (
                <>
                  <span className="text-2xl font-bold text-navy-900">${finalPrice.toFixed(2)}</span>
                  <span className="text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  <span className="bg-gold-500 text-white text-xs font-medium px-2 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-navy-900">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <p className="text-gray-700 mb-8">{product.description}</p>
            
            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">Size</h3>
                <button className="text-sm text-gray-600 hover:text-navy-900">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 min-w-10 px-3 border rounded-md ${
                      selectedSize === size 
                        ? 'bg-navy-900 text-white border-navy-900' 
                        : 'border-gray-300 text-gray-700 hover:border-navy-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`h-10 min-w-10 px-3 border rounded-md ${
                      selectedColor === color 
                        ? 'bg-navy-900 text-white border-navy-900' 
                        : 'border-gray-300 text-gray-700 hover:border-navy-900'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex border border-gray-300 rounded-md">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="w-10 h-12 flex items-center justify-center text-gray-600 hover:text-navy-900"
                >
                  -
                </button>
                <span className="flex items-center justify-center w-12 h-12 border-l border-r border-gray-300">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-10 h-12 flex items-center justify-center text-gray-600 hover:text-navy-900"
                >
                  +
                </button>
              </div>
              
              <Button 
                variant={addedToCart ? "secondary" : "primary"}
                size="lg"
                fullWidth
                onClick={handleAddToCart}
                className="h-12"
                disabled={!selectedSize || !selectedColor}
              >
                {addedToCart ? (
                  <span className="flex items-center">
                    <Check size={18} className="mr-2" />
                    Added to Cart
                  </span>
                ) : (
                  <span className="flex items-center">
                    <ShoppingBag size={18} className="mr-2" />
                    Add to Cart
                  </span>
                )}
              </Button>
            </div>
            
            {(!selectedSize || !selectedColor) && (
              <p className="text-sm text-red-500 mt-2">
                Please select {!selectedSize && !selectedColor ? 'size and color' : !selectedSize ? 'size' : 'color'}
              </p>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <ProductGrid products={relatedProducts} title="You May Also Like" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;