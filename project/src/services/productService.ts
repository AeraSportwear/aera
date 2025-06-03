import products from '../data/products';
import { Product } from '../types';

export const getProducts = async (): Promise<Product[]> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = async (id: number): Promise<Product | null> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(p => p.id === id) || null;
      resolve(product);
    }, 500);
  });
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        p => p.category.toLowerCase() === category.toLowerCase()
      );
      resolve(filteredProducts);
    }, 500);
  });
};

export const getNewArrivals = async (): Promise<Product[]> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const newArrivals = products.filter(p => p.new).slice(0, 4);
      resolve(newArrivals);
    }, 500);
  });
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const featured = products.filter(p => p.featured).slice(0, 8);
      resolve(featured);
    }, 500);
  });
};

export const getRelatedProducts = async (product: Product): Promise<Product[]> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const related = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
      resolve(related);
    }, 500);
  });
};