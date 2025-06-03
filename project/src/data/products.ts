import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: 'Performance Running Jacket',
    category: 'Men',
    price: 129.99,
    images: [
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6311401/pexels-photo-6311401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Premium running jacket with advanced moisture-wicking technology. Lightweight and breathable with reflective elements for safety during low-light conditions.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray'],
    featured: true,
    new: true
  },
  {
    id: 2,
    name: 'Seamless Training Leggings',
    category: 'Women',
    price: 89.99,
    discount: 15,
    images: [
      'https://images.pexels.com/photos/4662356/pexels-photo-4662356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4662446/pexels-photo-4662446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'High-waisted performance leggings with four-way stretch and seamless construction. Perfect for high-intensity workouts with sweat-wicking fabric.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Burgundy', 'Blue'],
    featured: true
  },
  {
    id: 3,
    name: 'Performance Training Shorts',
    category: 'Men',
    price: 69.99,
    images: [
      'https://images.pexels.com/photos/6311592/pexels-photo-6311592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6311609/pexels-photo-6311609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Lightweight, quick-drying training shorts with built-in liner. Features a secure phone pocket and reflective elements.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray', 'Olive'],
    featured: true
  },
  {
    id: 4,
    name: 'CrossTraining Sports Bra',
    category: 'Women',
    price: 59.99,
    images: [
      'https://images.pexels.com/photos/6550872/pexels-photo-6550872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6550851/pexels-photo-6550851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'High-support sports bra with moisture-wicking fabric and mesh panels for ventilation. Designed for high-impact activities.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Rose'],
    new: true
  },
  {
    id: 5,
    name: 'Premium Fitness Watch',
    category: 'Accessories',
    price: 199.99,
    discount: 10,
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and sleep tracking. Water-resistant up to 50m with a 7-day battery life.',
    sizes: ['One Size'],
    colors: ['Black', 'Silver'],
    featured: true,
    new: true
  },
  {
    id: 6,
    name: 'Ultralight Trail Running Shoes',
    category: 'Men',
    price: 149.99,
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Lightweight trail running shoes with responsive cushioning and aggressive traction. Features a breathable upper and protective toe cap.',
    sizes: ['8', '9', '10', '11', '12'],
    colors: ['Black/Red', 'Blue/Gray', 'Green/Black'],
    featured: true
  },
  {
    id: 7,
    name: 'Compact Gym Duffel Bag',
    category: 'Accessories',
    price: 79.99,
    discount: 20,
    images: [
      'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Versatile gym bag with separate compartments for shoes, wet items, and valuables. Made from durable, water-resistant material.',
    sizes: ['One Size'],
    colors: ['Black', 'Navy', 'Gray'],
  },
  {
    id: 8,
    name: 'Performance Crew Socks (3-Pack)',
    category: 'Accessories',
    price: 24.99,
    images: [
      'https://images.pexels.com/photos/6823474/pexels-photo-6823474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6311653/pexels-photo-6311653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Cushioned performance socks with arch support and moisture-wicking technology. Seamless toe construction to prevent blisters.',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'White', 'Mixed'],
  },
  {
    id: 9,
    name: 'Compression Recovery Tights',
    category: 'Women',
    price: 99.99,
    images: [
      'https://images.pexels.com/photos/6550869/pexels-photo-6550869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6550852/pexels-photo-6550852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Full-length compression tights designed to enhance circulation and reduce muscle fatigue after intense workouts.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Gray', 'Blue'],
    new: true
  },
  {
    id: 10,
    name: 'Ultra-Grip Yoga Mat',
    category: 'Accessories',
    price: 69.99,
    discount: 15,
    images: [
      'https://images.pexels.com/photos/4056538/pexels-photo-4056538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Premium yoga mat with enhanced grip for stability in all poses. Made from eco-friendly materials with optimal cushioning.',
    sizes: ['One Size'],
    colors: ['Blue', 'Purple', 'Black', 'Green'],
  },
  {
    id: 11,
    name: 'Quick-Dry Training Tank',
    category: 'Women',
    price: 49.99,
    images: [
      'https://images.pexels.com/photos/1972114/pexels-photo-1972114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6550880/pexels-photo-6550880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Lightweight and breathable training tank with flattering fit and moisture-wicking technology for intense workouts.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Pink', 'Blue'],
    featured: true
  },
  {
    id: 12,
    name: 'All-Weather Running Cap',
    category: 'Accessories',
    price: 34.99,
    images: [
      'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6311148/pexels-photo-6311148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Lightweight running cap with sweat-wicking band and UPF 50+ sun protection. Adjustable fit with reflective elements.',
    sizes: ['One Size'],
    colors: ['Black', 'Navy', 'Gray', 'White'],
    new: true
  },
];

export default products;