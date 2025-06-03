import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Shop */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products/men" className="text-gray-300 hover:text-gold-500 transition-colors">Men</Link></li>
              <li><Link to="/products/women" className="text-gray-300 hover:text-gold-500 transition-colors">Women</Link></li>
              <li><Link to="/products/accessories" className="text-gray-300 hover:text-gold-500 transition-colors">Accessories</Link></li>
              <li><Link to="/products/sale" className="text-gray-300 hover:text-gold-500 transition-colors">Sale</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link to="/sustainability" className="text-gray-300 hover:text-gold-500 transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-gold-500 transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-gold-500 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-gold-500 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-gold-500 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/size-guide" className="text-gray-300 hover:text-gold-500 transition-colors">Size Guide</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with the latest products, offers, and more.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-navy-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-gold-500 hover:bg-gold-600 transition-colors px-4 py-2 rounded-r-md"
              >
                <Mail size={20} />
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ELEGANT Sportswear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;