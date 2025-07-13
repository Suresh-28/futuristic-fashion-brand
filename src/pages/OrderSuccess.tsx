
import React from 'react';
import { CheckCircle, ArrowLeft, Package } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId || 'N/A';

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <CheckCircle size={80} className="text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-2">Order Successful!</h1>
          <p className="text-xl text-white/70">Thank you for your purchase</p>
        </div>

        {/* Order Details */}
        <div className="bg-gray-900/50 rounded-lg p-8 border border-neon-blue/30 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
          <div className="space-y-2">
            <p className="text-white/80">
              <span className="font-semibold">Order ID:</span> {orderId}
            </p>
            <p className="text-white/80">
              <span className="font-semibold">Status:</span> Confirmed
            </p>
            <p className="text-white/80">
              <span className="font-semibold">Estimated Delivery:</span> 5-7 business days
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/orders')}
            className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2"
          >
            <Package size={20} />
            <span>View All Orders</span>
          </button>
          
          <Link
            to="/"
            className="px-8 py-3 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 rounded-lg flex items-center justify-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-white/60">
          <p>You will receive an email confirmation shortly.</p>
          <p>For any questions, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
