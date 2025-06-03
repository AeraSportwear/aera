export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discount?: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  featured?: boolean;
  new?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}