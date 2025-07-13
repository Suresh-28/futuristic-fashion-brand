import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animated particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
    }> = [];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random() * 100 + 50
      };
    };

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        if (particle.life <= 0 || particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
          particles[index] = createParticle();
        }

        const opacity = particle.life / 100;
        ctx.fillStyle = `rgba(0, 243, 255, ${opacity * 0.6})`;
        ctx.fillRect(particle.x, particle.y, 1, 1);

        // Connect nearby particles
        particles.forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(0, 243, 255, ${(1 - distance / 100) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleExploreCollection = () => {
    const collectionsSection = document.getElementById('collections');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVirtualShowroom = () => {
    navigate('/virtual-showroom');
  };

  const handleInnovationLab = () => {
    navigate('/innovation-lab');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Animated T-Shirt Images */}
      <div className="absolute top-20 left-20 w-48 h-64 opacity-30 animate-float">
        <img
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=500&fit=crop"
          alt="Futuristic T-Shirt"
          className="w-full h-full object-cover rounded-lg border-2 border-neon-blue/30 animate-pulse transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="absolute bottom-40 right-32 w-56 h-72 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
        <img
          src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=500&fit=crop"
          alt="Tech T-Shirt"
          className="w-full h-full object-cover rounded-lg border-2 border-neon-purple/30 animate-neon-pulse transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="absolute top-1/3 right-10 w-52 h-68 opacity-20 animate-float" style={{ animationDelay: '4s' }}>
        <img
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=500&fit=crop"
          alt="Smart T-Shirt"
          className="w-full h-full object-cover rounded-lg border-2 border-neon-pink/30 animate-fabric-wave transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* 3D Mannequin Container */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-64 h-96 opacity-20">
        <div className="w-full h-full bg-gradient-to-t from-neon-blue/20 to-neon-purple/20 rounded-lg animate-rotate-3d transform-gpu perspective-1000">
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl relative">
            <div className="absolute inset-4 border-2 border-neon-blue/50 rounded animate-neon-pulse"></div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-neon-blue/30 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-32 bg-gradient-to-b from-neon-purple/20 to-neon-pink/20 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6">
          <span className="block text-white animate-float">FUTURE</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-pulse">
            FASHION
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 font-inter font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Where cutting-edge technology meets avant-garde design. 
          Experience the next evolution of wearable art.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button 
            onClick={handleExploreCollection}
            className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-inter font-semibold text-lg rounded-none border-2 border-transparent hover:border-neon-blue hover:bg-transparent hover:text-neon-blue transition-all duration-500 transform hover:scale-105"
          >
            <span className="group-hover:animate-text-distort">EXPLORE COLLECTION</span>
          </button>
          
          <button 
            onClick={handleVirtualShowroom}
            className="px-8 py-4 border-2 border-neon-pink text-neon-pink font-inter font-semibold text-lg rounded-none hover:bg-neon-pink hover:text-black transition-all duration-500 animate-neon-pulse"
          >
            VIRTUAL SHOWROOM
          </button>
        </div>

        {/* Innovation Lab Button */}
        <button 
          onClick={handleInnovationLab}
          className="px-6 py-3 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 font-inter font-medium"
        >
          EXPLORE INNOVATION LAB
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-neon-blue" size={32} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-neon-green rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-neon-pink rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-neon-purple rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default HeroSection;
