import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const categories = ['New', 'Collections', 'Essentials', 'Studio'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-sand-50/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl text-stone-800">
            Aëra
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/products/${category.toLowerCase()}`}
                className="text-stone-600 hover:text-terra-700 transition-colors duration-300 text-sm tracking-wide"
              >
                {category}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-stone-600 hover:text-terra-700 transition-colors duration-300"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link to="/account" className="text-stone-600 hover:text-terra-700 transition-colors duration-300">
              <User size={20} strokeWidth={1.5} />
            </Link>
            <Link to="/cart" className="text-stone-600 hover:text-terra-700 transition-colors duration-300 relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-terra-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-stone-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pt-4 pb-2 border-b border-sand-200 transition-all">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 pl-10 pr-4 bg-white/50 rounded-none border-0 focus:outline-none focus:ring-0 placeholder:text-stone-400"
                autoFocus
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={18} strokeWidth={1.5} />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-sand-50/95 backdrop-blur-sm shadow-sm">
            <nav className="flex flex-col py-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/products/${category.toLowerCase()}`}
                  className="px-6 py-3 text-stone-600 hover:bg-sand-100 hover:text-terra-700 transition-colors duration-300"
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;