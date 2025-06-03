import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductGrid from '../product/ProductGrid';
import Button from '../ui/Button';
import { Product } from '../../types';
import { getProducts } from '../../services/productService';

const FeaturedCollection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getProducts();
        const featured = allProducts.filter(product => product.featured).slice(0, 8);
        setProducts(featured);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Featured Collection</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-md aspect-[3/4] mb-3"></div>
                <div className="bg-gray-200 h-5 w-3/4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 w-1/2 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900">Featured Collection</h2>
          <Link to="/products" className="group flex items-center text-navy-900 font-medium mt-2 sm:mt-0">
            View All Products
            <ArrowRight size={18} className="ml-1 transform transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <ProductGrid products={products} />
        
        <div className="mt-12 text-center">
          <Link to="/products">
            <Button variant="outline" size="lg">
              Browse All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;