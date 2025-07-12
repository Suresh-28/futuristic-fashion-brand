
import React, { useState } from 'react';
import { ArrowLeft, Play, Pause, RotateCcw, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';

const VirtualShowroom = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    {
      name: "Neural Jacket",
      model: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience the future of adaptive clothing"
    },
    {
      name: "Quantum Dress",
      model: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Light-bending fabric technology"
    },
    {
      name: "Cyber Pants",
      model: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Integrated haptic feedback system"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-neon-blue/30 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-3 text-neon-blue hover:text-white transition-colors">
            <ArrowLeft size={24} />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <h1 className="text-2xl font-bold">Virtual Showroom</h1>
        </div>
      </header>

      <div className="flex h-screen">
        {/* Product List */}
        <div className="w-80 bg-gray-900 border-r border-neon-blue/30 p-6 overflow-y-auto">
          <h2 className="text-xl font-bold mb-6 text-neon-blue">Collections</h2>
          <div className="space-y-4">
            {products.map((product, index) => (
              <div
                key={index}
                onClick={() => setSelectedProduct(index)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedProduct === index
                    ? 'bg-neon-blue/20 border border-neon-blue'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <h3 className="font-semibold text-white">{product.name}</h3>
                <p className="text-sm text-white/70 mt-1">{product.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Viewer */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-96 h-96 border-2 border-neon-blue/50 rounded-lg overflow-hidden">
              <img
                src={products[selectedProduct].model}
                alt={products[selectedProduct].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 to-transparent"></div>
              
              {/* 3D Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-neon-blue/20 border border-neon-blue rounded-full flex items-center justify-center hover:bg-neon-blue hover:text-black transition-all"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                
                <button className="w-12 h-12 bg-neon-blue/20 border border-neon-blue rounded-full flex items-center justify-center hover:bg-neon-blue hover:text-black transition-all">
                  <RotateCcw size={20} />
                </button>
                
                <button className="w-12 h-12 bg-neon-blue/20 border border-neon-blue rounded-full flex items-center justify-center hover:bg-neon-blue hover:text-black transition-all">
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Product Info Overlay */}
          <div className="absolute top-6 right-6 bg-gray-900/90 backdrop-blur-md p-6 rounded-lg border border-neon-blue/30 max-w-sm">
            <h2 className="text-2xl font-bold text-white mb-2">{products[selectedProduct].name}</h2>
            <p className="text-white/70 mb-4">{products[selectedProduct].description}</p>
            <div className="space-y-2">
              <div className="text-sm text-white/60">Material: Smart Fiber</div>
              <div className="text-sm text-white/60">Technology: AI-Responsive</div>
              <div className="text-sm text-white/60">Size: Adaptive</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualShowroom;
