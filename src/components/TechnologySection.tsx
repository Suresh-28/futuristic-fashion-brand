
import React from 'react';
import { Cpu, Zap, Brain, Layers, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TechnologySection = () => {
  const navigate = useNavigate();

  const technologies = [
    {
      icon: Brain,
      title: "Neural Interface",
      description: "Direct brain-to-fabric communication for intuitive control",
      color: "neon-blue"
    },
    {
      icon: Zap,
      title: "Energy Harvesting",
      description: "Convert body heat and movement into electrical power",
      color: "neon-purple"
    },
    {
      icon: Layers,
      title: "Smart Fabrics",
      description: "Programmable materials that adapt to environment",
      color: "neon-pink"
    },
    {
      icon: Cpu,
      title: "Quantum Processors",
      description: "Miniaturized computing power woven into every thread",
      color: "neon-green"
    }
  ];

  const handleExploreInnovationLab = () => {
    navigate('/innovation-lab');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 relative overflow-hidden">
      {/* Large Animated T-Shirt Images */}
      <div className="absolute top-20 right-10 w-64 h-80 opacity-20 animate-float">
        <img
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=500&fit=crop"
          alt="Tech T-Shirt"
          className="w-full h-full object-cover rounded-lg border-2 border-neon-blue/20 animate-rotate-3d transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="absolute bottom-32 left-16 w-56 h-72 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
        <img
          src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=500&fit=crop"
          alt="Smart T-Shirt"
          className="w-full h-full object-cover rounded-lg border-2 border-neon-purple/20 animate-fabric-wave transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="absolute top-1/2 left-10 w-48 h-64 opacity-18 animate-float" style={{ animationDelay: '4s' }}>
        <img
          src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=500&fit=crop"
          alt="Future T-Shirt"
          className="w-full h-full object-cover rounded-lg border-2 border-neon-pink/20 animate-neon-pulse transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-neon-blue/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-neon-purple/5 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
              TECHNOLOGY
            </span>
          </h2>
          <p className="text-xl text-white/70 font-inter max-w-3xl mx-auto leading-relaxed">
            Revolutionary innovations that power the future of fashion. 
            Our cutting-edge technologies seamlessly integrate with human biology.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-neon-blue/50 transition-all duration-500 group hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-${tech.color}/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse`}>
                <tech.icon className={`text-${tech.color}`} size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                {tech.title}
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Explore Our Innovation Lab</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Dive deeper into the research and development behind our revolutionary technologies. 
              Discover prototypes, experimental materials, and the future of wearable tech.
            </p>
            <button 
              onClick={handleExploreInnovationLab}
              className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>EXPLORE INNOVATION LAB</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
