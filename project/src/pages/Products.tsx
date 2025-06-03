import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/ui/Button';
import { Product } from '../types';
import { getProducts } from '../services/productService';

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    sizes: [] as string[],
    colors: [] as string[],
    price: { min: 0, max: 1000 },
    onSale: false,
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Filter by category if specified
    if (category) {
      result = result.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Apply size filter
    if (filters.sizes.length > 0) {
      result = result.filter(product => 
        filters.sizes.some(size => product.sizes.includes(size))
      );
    }
    
    // Apply color filter
    if (filters.colors.length > 0) {
      result = result.filter(product => 
        filters.colors.some(color => product.colors.includes(color))
      );
    }
    
    // Apply price filter
    result = result.filter(product => {
      const price = product.discount 
        ? product.price * (1 - product.discount / 100) 
        : product.price;
      return price >= filters.price.min && price <= filters.price.max;
    });
    
    // Apply sale filter
    if (filters.onSale) {
      result = result.filter(product => product.discount);
    }
    
    setFilteredProducts(result);
  }, [products, category, filters]);

  // Extract all available sizes and colors
  const allSizes = Array.from(new Set(products.flatMap(p => p.sizes))).sort();
  const allColors = Array.from(new Set(products.flatMap(p => p.colors))).sort();

  const toggleSize = (size: string) => {
    setFilters(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size) 
        ? prev.sizes.filter(s => s !== size) 
        : [...prev.sizes, size]
    }));
  };

  const toggleColor = (color: string) => {
    setFilters(prev => ({
      ...prev,
      colors: prev.colors.includes(color) 
        ? prev.colors.filter(c => c !== color) 
        : [...prev.colors, color]
    }));
  };

  const resetFilters = () => {
    setFilters({
      sizes: [],
      colors: [],
      price: { min: 0, max: 1000 },
      onSale: false,
    });
  };

  if (loading) {
    return (
      <div className="pt-28 pb-16 container mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            {[...Array(12)].map((_, i) => (
              <div key={i}>
                <div className="bg-gray-200 rounded-md aspect-[3/4] mb-3"></div>
                <div className="bg-gray-200 h-5 w-3/4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 w-1/2 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-navy-900 mb-8">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All Products'}
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter size={18} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {/* Filters */}
          <aside className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="flex justify-between items-center mb-4 lg:hidden">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {allSizes.map(size => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`px-3 py-1 border rounded-md text-sm ${
                      filters.sizes.includes(size) 
                        ? 'bg-navy-900 text-white border-navy-900' 
                        : 'border-gray-300 text-gray-700 hover:border-navy-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {allColors.map(color => (
                  <button
                    key={color}
                    onClick={() => toggleColor(color)}
                    className={`px-3 py-1 border rounded-md text-sm ${
                      filters.colors.includes(color) 
                        ? 'bg-navy-900 text-white border-navy-900' 
                        : 'border-gray-300 text-gray-700 hover:border-navy-900'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-semibold mb-3">Price Range</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">${filters.price.min}</span>
                  <span className="text-sm text-gray-600">${filters.price.max}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={filters.price.max}
                  onChange={(e) => setFilters(prev => ({
                    ...prev, 
                    price: { ...prev.price, max: parseInt(e.target.value) }
                  }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-navy-900"
                />
              </div>
            </div>

            {/* Sale Filter */}
            <div>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.onSale}
                  onChange={() => setFilters(prev => ({ ...prev, onSale: !prev.onSale }))}
                  className="rounded border-gray-300 text-navy-900 focus:ring-navy-900"
                />
                <span>On Sale</span>
              </label>
            </div>

            {/* Reset Filters */}
            <div>
              <Button 
                variant="text" 
                onClick={resetFilters} 
                className="text-sm"
              >
                Reset Filters
              </Button>
            </div>
          </aside>
          
          {/* Products */}
          <div className="flex-1">
            <ProductGrid products={filteredProducts} filters={true} />
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
                <Button variant="outline" onClick={resetFilters} className="mt-4">
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;