
import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, Heart, Share2, Zap, Shield, Cpu } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Neural Blue');
  
  const product = {
    name: "NEURAL JACKET",
    price: "$2,499",
    description: "Revolutionary adaptive fabric that responds to your biometric data in real-time. Experience the future of personalized fashion.",
    longDescription: "The Neural Jacket represents a breakthrough in wearable technology. Embedded with thousands of micro-sensors, it continuously monitors your body temperature, heart rate, and stress levels to adjust its properties accordingly. The fabric becomes more breathable during exercise, provides extra warmth when you're cold, and even changes color to reflect your mood.",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      { icon: Cpu, title: "AI-Powered Adaptation", description: "Smart fabric responds to biometric data" },
      { icon: Shield, title: "Weather Protection", description: "Automatic climate adjustment" },
      { icon: Zap, title: "Energy Efficient", description: "Self-charging via kinetic energy" }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Neural Blue', 'Quantum Black', 'Cyber Silver']
  };

  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-neon-blue/30 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-3 text-neon-blue hover:text-white transition-colors">
            <ArrowLeft size={24} />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button className="p-2 border border-neon-blue/30 rounded-lg hover:border-neon-blue transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-2 border border-neon-blue/30 rounded-lg hover:border-neon-blue transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden border-2 border-neon-blue/30">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    currentImage === index ? 'border-neon-blue' : 'border-gray-700'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{product.name}</h1>
              <div className="text-3xl font-bold text-neon-green">{product.price}</div>
            </div>

            <p className="text-lg text-white/80 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="text-white font-semibold mb-3">Size</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border-2 rounded-lg font-semibold transition-all ${
                      selectedSize === size
                        ? 'border-neon-blue bg-neon-blue text-black'
                        : 'border-gray-600 text-white hover:border-neon-blue'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-white font-semibold mb-3">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border-2 rounded-lg font-semibold transition-all ${
                      selectedColor === color
                        ? 'border-neon-blue bg-neon-blue/20 text-neon-blue'
                        : 'border-gray-600 text-white hover:border-neon-blue'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-bold text-lg rounded-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-3">
              <ShoppingCart size={24} />
              <span>ADD TO CART</span>
            </button>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Key Features</h3>
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-neon-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{feature.title}</h4>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mt-16 border-t border-gray-700 pt-16">
          <h2 className="text-3xl font-bold text-white mb-6">Product Details</h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-4xl">
            {product.longDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
