
import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      {/* Cart Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-white hover:text-neon-blue transition-colors"
      >
        <ShoppingCart size={24} />
        {getTotalItems() > 0 && (
          <span className="absolute -top-1 -right-1 bg-neon-blue text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {getTotalItems()}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neon-blue/30">
                <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-neon-blue transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center text-white/70 mt-8">
                    <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="bg-black/50 rounded-lg p-4 border border-neon-blue/20">
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="text-white font-semibold">{item.name}</h3>
                            <p className="text-neon-blue">${item.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full bg-neon-blue/20 text-white hover:bg-neon-blue hover:text-black transition-colors flex items-center justify-center"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="text-white font-semibold w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full bg-neon-blue/20 text-white hover:bg-neon-blue hover:text-black transition-colors flex items-center justify-center"
                            >
                              <Plus size={16} />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center ml-2"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-neon-blue/30 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-semibold">Total:</span>
                    <span className="text-neon-blue text-xl font-bold">${getTotalPrice()}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
