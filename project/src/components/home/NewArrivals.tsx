import { useEffect, useState } from 'react';
import ProductGrid from '../product/ProductGrid';
import { Product } from '../../types';
import { getProducts } from '../../services/productService';

const NewArrivals = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getProducts();
        const newArrivals = allProducts.filter(product => product.new).slice(0, 4);
        setProducts(newArrivals);
      } catch (error) {
        console.error('Error fetching new arrivals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 rounded-md aspect-[3/4] mb-3"></div>
              <div className="bg-gray-200 h-5 w-3/4 rounded mb-2"></div>
              <div className="bg-gray-200 h-4 w-1/2 rounded mb-2"></div>
              <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="py-16 container mx-auto px-4">
      <ProductGrid products={products} title="New Arrivals" />
    </section>
  );
};

export default NewArrivals;