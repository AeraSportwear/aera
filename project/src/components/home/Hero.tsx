import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Elegant sportswear" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Performance Meets <span className="text-gold-500">Elegance</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Discover our premium collection of sportswear designed for both performance and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products/women">
              <Button variant="secondary" size="lg">
                Shop Women
              </Button>
            </Link>
            <Link to="/products/men">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                Shop Men
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="block w-0.5 h-10 bg-white/60 rounded-full"></span>
        <span className="block w-3 h-3 border-b-2 border-r-2 border-white/60 transform rotate-45 mt-1"></span>
      </div>
    </section>
  );
};

export default Hero;