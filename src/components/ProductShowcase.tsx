import React, { useState, useEffect } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductShowcase = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const { addToCart } = useCart();

  const products = [
    {
      id: 'neural-jacket',
      name: 'Neural Sync Jacket',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=600&fit=crop',
      description: 'AI-powered adaptive clothing that responds to your biometric data',
      features: ['Temperature Control', 'Biometric Monitoring', 'Wireless Charging'],
      rating: 4.9
    },
    {
      id: 'quantum-dress',
      name: 'Quantum Shift Dress',
      price: 3299,
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=600&fit=crop',
      description: 'Color-changing fabric with programmable patterns',
      features: ['Color Morphing', 'Pattern Programming', 'Smart Fabric'],
      rating: 4.8
    },
    {
      id: 'cyber-sneakers',
      name: 'Cyber Step Sneakers',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=600&fit=crop',
      description: 'Self-lacing shoes with energy harvesting soles',
      features: ['Auto-Lacing', 'Energy Harvesting', 'Health Tracking'],
      rating: 4.7
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 relative overflow-hidden">
      {/* Animated T-Shirt Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-40 opacity-10 animate-float">
        <img
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=400&fit=crop"
          alt="Background T-Shirt"
          className="w-full h-full object-cover rounded-lg animate-rotate-3d"
        />
      </div>

      <div className="absolute bottom-20 right-20 w-40 h-52 opacity-15 animate-float" style={{ animationDelay: '3s' }}>
        <img
          src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=400&fit=crop"
          alt="Background T-Shirt"
          className="w-full h-full object-cover rounded-lg animate-fabric-wave"
        />
      </div>

      <div className="absolute top-1/2 left-5 w-36 h-48 opacity-12 animate-float" style={{ animationDelay: '1.5s' }}>
        <img
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=400&fit=crop"
          alt="Background T-Shirt"
          className="w-full h-full object-cover rounded-lg animate-neon-pulse"
        />
      </div>

      {/* Parallax Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-20 w-48 h-48 bg-neon-blue/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
              COLLECTIONS
            </span>
          </h2>
          <p className="text-xl text-white/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Experience the future of fashion with our revolutionary AI-enhanced garments. 
            Each piece seamlessly blends cutting-edge technology with timeless design.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image with Large Animated T-Shirt */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-neon-blue/30 group-hover:border-neon-blue/50 transition-all duration-500">
              <div className="relative">
                <img
                  src={products[currentProduct].image}
                  alt={products[currentProduct].name}
                  className="w-full h-96 object-cover rounded-lg mb-6 transform group-hover:scale-105 transition-transform duration-500 animate-fabric-wave"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/10 to-transparent rounded-lg animate-neon-pulse"></div>
              </div>
              <div className="flex justify-center space-x-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProduct(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProduct ? 'bg-neon-blue' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < Math.floor(products[currentProduct].rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
                <span className="text-white/70 ml-2">({products[currentProduct].rating})</span>
              </div>

              <h3 className="text-4xl font-orbitron font-bold text-white mb-4 leading-tight">
                {products[currentProduct].name}
              </h3>

              <p className="text-xl text-white/70 font-inter leading-relaxed mb-6">
                {products[currentProduct].description}
              </p>

              <div className="text-3xl font-bold text-neon-blue mb-8">
                ${products[currentProduct].price.toLocaleString()}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Key Features:</h4>
              <ul className="space-y-2">
                {products[currentProduct].features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-neon-blue rounded-full" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={() => handleAddToCart(products[currentProduct])}
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">All Products</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-neon-blue/50 transition-all duration-500 group hover:transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300 animate-fabric-wave"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/10 to-transparent rounded-lg group-hover:animate-neon-pulse"></div>
                </div>
                
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-400'
                      }`}
                    />
                  ))}
                  <span className="text-white/70 text-sm ml-1">({product.rating})</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                  {product.name}
                </h4>
                
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-neon-blue text-xl font-bold">
                    ${product.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="p-2 bg-neon-blue/20 text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 rounded-lg"
                  >
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
