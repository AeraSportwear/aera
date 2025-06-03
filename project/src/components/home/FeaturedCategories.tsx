import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'women',
    name: 'Women',
    image: 'https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'men',
    name: 'Men',
    image: 'https://images.pexels.com/photos/8224419/pexels-photo-8224419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Shop by Category</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id}
            to={`/products/${category.id}`}
            className="group relative overflow-hidden rounded-lg aspect-[3/4]"
          >
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white">{category.name}</h3>
              <div className="mt-2 overflow-hidden">
                <span className="inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gold-500 after:transform after:translate-x-[-100%] after:transition-transform after:duration-300 group-hover:after:translate-x-0 text-white">
                  Shop Now
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;