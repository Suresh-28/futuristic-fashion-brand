import React from 'react';
import { ArrowLeft, Cpu, Zap, Brain, Layers, Microscope, Beaker } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const InnovationLab = () => {
  const navigate = useNavigate();

  const innovations = [
    {
      id: 'neural-fabric',
      icon: Brain,
      title: "Neural Fabric Network",
      description: "Advanced textile technology that creates a direct interface between fabric and the human nervous system",
      status: "In Development",
      color: "neon-blue",
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    },
    {
      id: 'energy-harvesting',
      icon: Zap,
      title: "Energy Harvesting Threads",
      description: "Revolutionary fibers that convert body heat and kinetic energy into electrical power for embedded devices",
      status: "Prototype",
      color: "neon-purple",
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    },
    {
      id: 'programmable-matter',
      icon: Layers,
      title: "Programmable Matter Clothing",
      description: "Garments that can change shape, color, and texture on command using advanced materials",
      status: "Research",
      color: "neon-pink",
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    },
    {
      id: 'quantum-processors',
      icon: Cpu,
      title: "Quantum Computing Processors",
      description: "Miniaturized quantum chips integrated into fashion accessories for enhanced computing power",
      status: "Beta Testing",
      color: "neon-green",
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    },
    {
      id: 'nano-sensors',
      icon: Microscope,
      title: "Nano-Scale Sensors",
      description: "Microscopic health monitoring devices embedded invisibly in fabric for continuous tracking",
      status: "Production Ready",
      color: "neon-blue",
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    },
    {
      id: 'bio-responsive',
      icon: Beaker,
      title: "Bio-Responsive Materials",
      description: "Smart fabrics that react to environmental changes and user emotions in real-time",
      status: "Testing Phase",
      color: "neon-purple",
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production Ready': return 'text-green-400';
      case 'Beta Testing': return 'text-blue-400';
      case 'Prototype': return 'text-yellow-400';
      case 'In Development': return 'text-orange-400';
      case 'Testing Phase': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const handleLearnMore = (innovationId: string) => {
    navigate(`/innovation-detail/${innovationId}`);
  };

  const handleApplyNow = () => {
    navigate('/innovation-lab/apply');
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
          <h1 className="text-2xl font-bold">Innovation Lab</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
              INNOVATION LAB
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore the cutting-edge technologies shaping the future of fashion. 
            Our R&D team is constantly pushing the boundaries of what's possible.
          </p>
        </div>

        {/* Innovation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <div
              key={innovation.id}
              className="bg-gradient-to-br from-gray-900 to-black border border-neon-blue/30 rounded-lg overflow-hidden hover:border-neon-blue/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              {/* Innovation Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={innovation.image}
                  alt={innovation.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className={`absolute top-4 right-4 w-12 h-12 bg-${innovation.color}/20 rounded-full flex items-center justify-center group-hover:animate-pulse`}>
                  <innovation.icon className={`text-${innovation.color}`} size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(innovation.status)}`}>
                    {innovation.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {innovation.title}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {innovation.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <button 
                    onClick={() => handleLearnMore(innovation.id)}
                    className="text-neon-blue text-sm font-semibold hover:text-white transition-colors"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Research Program</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Be among the first to experience breakthrough technologies. 
              Apply to become a beta tester for our latest innovations.
            </p>
            <button 
              onClick={handleApplyNow}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationLab;
