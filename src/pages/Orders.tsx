
import React from 'react';
import { ArrowLeft, Package, Calendar, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Orders = () => {
  const { orders } = useCart();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-neon-blue/30 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-3 text-neon-blue hover:text-white transition-colors">
            <ArrowLeft size={24} />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <h1 className="text-2xl font-bold">My Orders</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {orders.length === 0 ? (
          <div className="text-center py-16">
            <Package size={64} className="mx-auto mb-4 text-white/50" />
            <h2 className="text-2xl font-bold mb-4">No orders yet</h2>
            <p className="text-white/70 mb-8">Start shopping to see your orders here!</p>
            <Link
              to="/"
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 inline-block"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-8">Order History</h2>
            
            {orders.map((order) => (
              <div key={order.id} className="bg-gray-900/50 rounded-lg p-6 border border-neon-blue/30">
                {/* Order Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-4 border-b border-gray-700">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Order #{order.id}</h3>
                    <div className="flex items-center space-x-4 text-white/70">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{formatDate(order.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign size={16} />
                        <span>${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      Confirmed
                    </span>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Shipping Address</h4>
                  <div className="text-white/80">
                    <p>{order.customerInfo.firstName} {order.customerInfo.lastName}</p>
                    <p>{order.customerInfo.address}</p>
                    <p>{order.customerInfo.city}, {order.customerInfo.zipCode}</p>
                    <p>{order.customerInfo.email}</p>
                  </div>
                </div>

                {/* Order Items */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Items Ordered</h4>
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0">
                        <div className="flex items-center space-x-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div>
                            <h5 className="text-white font-medium">{item.name}</h5>
                            <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="text-neon-blue font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-neon-blue">${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
