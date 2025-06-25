
import React, { useState, useEffect, useRef } from 'react';

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      name: "NEURAL JACKET",
      description: "Adaptive fabric responds to biometric data",
      price: "$2,499",
      image: "photo-1485827404703-89b55fcc595e",
      tech: "Bio-responsive Fibers"
    },
    {
      name: "QUANTUM DRESS",
      description: "Light-bending materials create dynamic patterns",
      price: "$3,799", 
      image: "photo-1526374965328-7f61d4dc18c5",
      tech: "Photonic Weave"
    },
    {
      name: "CYBER PANTS",
      description: "Integrated haptic feedback for enhanced experience",
      price: "$1,899",
      image: "photo-1531297484001-80022131f5a1",
      tech: "Sensory Integration"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black relative overflow-hidden py-20">
      {/* Animated Fabric Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-neon-blue/5 via-neon-purple/5 to-neon-pink/5 animate-fabric-wave"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-neon-blue/10 to-transparent animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              COLLECTIONS
            </span>
          </h2>
          <p className="text-xl text-white/70 font-inter max-w-2xl mx-auto">
            Discover our revolutionary pieces where innovation meets elegance
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="grid md:grid-cols-2 gap-0 min-h-[600px]">
          {/* Left Side - Product Image */}
          <div className="relative overflow-hidden group">
            <div className={`absolute inset-0 transition-transform duration-1000 ${
              isVisible ? 'animate-split-reveal' : 'transform translate-x-[-100%]'
            }`}>
              <img
                src={`https://images.unsplash.com/${products[activeProduct].image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80`}
                alt={products[activeProduct].name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 mix-blend-overlay"></div>
              <div className="absolute inset-0 border-4 border-neon-blue/50 animate-neon-pulse"></div>
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="bg-gradient-to-br from-gray-900/95 to-black/95 p-12 flex flex-col justify-center relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300f3ff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            
            <div className="relative z-10">
              <div className="text-neon-blue font-inter text-sm font-semibold mb-2 tracking-widest">
                {products[activeProduct].tech}
              </div>
              
              <h3 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4 group-hover:animate-text-distort cursor-pointer">
                {products[activeProduct].name}
              </h3>
              
              <p className="text-lg text-white/80 font-inter mb-6 leading-relaxed">
                {products[activeProduct].description}
              </p>
              
              <div className="text-3xl font-orbitron font-bold text-neon-green mb-8">
                {products[activeProduct].price}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-neon-blue text-black font-inter font-semibold hover:bg-transparent hover:text-neon-blue border-2 border-neon-blue transition-all duration-300 transform hover:scale-105">
                  VIEW DETAILS
                </button>
                <button className="px-8 py-4 border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black transition-all duration-300 animate-neon-pulse">
                  TRY VIRTUAL
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Navigation */}
        <div className="flex justify-center mt-12 space-x-4">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProduct(index)}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                index === activeProduct
                  ? 'bg-neon-blue border-neon-blue animate-neon-pulse'
                  : 'border-white/30 hover:border-neon-blue'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
