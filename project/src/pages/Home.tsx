import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import NewArrivals from '../components/home/NewArrivals';
import FeaturedCollection from '../components/home/FeaturedCollection';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <NewArrivals />
      <FeaturedCollection />
    </div>
  );
};

export default Home;