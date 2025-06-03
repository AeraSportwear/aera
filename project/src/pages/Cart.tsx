import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-28 pb-16 container mx-auto px-4 text-center">
        <div className="max-w-lg mx-auto py-16">
          <h1 className="text-3xl font-bold text-navy-900 mb-6">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/products">
            <Button variant="primary" size="lg">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16 container mx-auto px-4">
      <h1 className="text-3xl font-bold text-navy-900 mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="divide-y divide-gray-200">
              {cart.map((item, index) => {
                const finalPrice = item.product.discount 
                  ? item.product.price * (1 - item.product.discount / 100) 
                  : item.product.price;

                return (
                  <div key={index} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <Link to={`/product/${item.product.id}`} className="sm:w-24 md:w-32">
                      <div className="aspect-square overflow-hidden rounded-md">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                    
                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <Link to={`/product/${item.product.id}`} className="font-medium text-navy-900 hover:text-gold-500 transition-colors">
                            {item.product.name}
                          </Link>
                          <p className="text-gray-500 text-sm mt-1">{item.product.category}</p>
                          
                          <div className="mt-2 space-y-1 text-sm text-gray-600">
                            <p>Size: {item.size}</p>
                            <p>Color: {item.color}</p>
                          </div>
                          
                          <div className="mt-4 flex items-center">
                            <button
                              onClick={() => removeFromCart(index)}
                              className="text-gray-500 hover:text-red-500 transition-colors flex items-center text-sm"
                            >
                              <Trash2 size={16} className="mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <div className="font-semibold text-navy-900">
                            ${(finalPrice * item.quantity).toFixed(2)}
                          </div>
                          
                          {item.product.discount && (
                            <div className="text-sm text-gray-500 line-through">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </div>
                          )}
                          
                          <div className="flex border border-gray-300 rounded-md mt-3">
                            <button 
                              onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}
                              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-navy-900"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="flex items-center justify-center w-8 h-8 border-l border-r border-gray-300">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-navy-900"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-28">
            <h2 className="text-lg font-semibold text-navy-900 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>{total > 100 ? 'Free' : '$10.00'}</span>
              </div>
              {total <= 100 && (
                <div className="text-sm text-gray-500">
                  Add ${(100 - total).toFixed(2)} more to qualify for free shipping.
                </div>
              )}
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${(total > 100 ? total : total + 10).toFixed(2)}</span>
              </div>
            </div>
            
            <Button variant="secondary" size="lg" fullWidth className="mb-4">
              Proceed to Checkout
            </Button>
            
            <Link to="/products">
              <Button variant="outline" size="lg" fullWidth>
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;