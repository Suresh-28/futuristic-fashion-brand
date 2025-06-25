
import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Layers, Zap, Eye } from 'lucide-react';

const TechnologySection = () => {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologies = [
    {
      icon: Cpu,
      title: "NEURAL FABRICS",
      description: "Smart textiles that adapt to your body's needs in real-time",
      details: "Biomimetic fibers respond to temperature, humidity, and biometric data"
    },
    {
      icon: Layers,
      title: "QUANTUM WEAVING",
      description: "Molecular-level construction for impossible material properties",
      details: "Subatomic engineering creates fabrics lighter than air yet stronger than steel"
    },
    {
      icon: Zap,
      title: "ENERGY HARVESTING",
      description: "Garments that power themselves through kinetic and solar energy",
      details: "Integrated photovoltaic threads and piezoelectric fibers generate power"
    },
    {
      icon: Eye,
      title: "AUGMENTED REALITY",
      description: "Clothing that interfaces with digital environments seamlessly",
      details: "Embedded displays and sensors create immersive fashion experiences"
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-neon-blue/10 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-neon-purple/10 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-neon-pink/10 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green">
              TECHNOLOGY
            </span>
          </h2>
          <p className="text-xl text-white/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Pioneering the fusion of advanced materials science, artificial intelligence, 
            and sustainable innovation to create the future of fashion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-neon-blue/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center group-hover:animate-rotate-3d">
                  <tech.icon className="text-black" size={32} />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 
                  className="text-xl font-orbitron font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300 cursor-pointer"
                  onMouseEnter={(e) => e.currentTarget.classList.add('animate-text-distort')}
                  onMouseLeave={(e) => e.currentTarget.classList.remove('animate-text-distort')}
                >
                  {tech.title}
                </h3>
                
                <p className="text-white/70 font-inter mb-4 leading-relaxed">
                  {tech.description}
                </p>

                {/* Expandable Details */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  hoveredTech === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-sm text-neon-blue font-inter italic">
                    {tech.details}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-500" />
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8">
                <div className="absolute top-2 right-2 w-4 h-0.5 bg-neon-blue group-hover:animate-neon-pulse" />
                <div className="absolute top-2 right-2 w-0.5 h-4 bg-neon-blue group-hover:animate-neon-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="px-12 py-4 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green text-black font-inter font-bold text-lg hover:shadow-2xl hover:shadow-neon-blue/50 transition-all duration-500 transform hover:scale-105">
            EXPLORE INNOVATION LAB
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
