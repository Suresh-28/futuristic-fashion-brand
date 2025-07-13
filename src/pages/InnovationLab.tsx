
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
      description: "Fabric that learns and adapts to your body's unique biometric patterns",
      status: "In Development",
      color: "neon-blue"
    },
    {
      id: 'energy-harvesting',
      icon: Zap,
      title: "Energy Harvesting Threads",
      description: "Convert body heat and movement into electrical energy for embedded tech",
      status: "Prototype",
      color: "neon-purple"
    },
    {
      icon: Layers,
      title: "Programmable Matter Clothing",
      description: "Garments that can change shape, color, and texture on command",
      status: "Research",
      color: "neon-pink"
    },
    {
      icon: Cpu,
      title: "Quantum Computing Processors",
      description: "Miniaturized quantum chips integrated into fashion accessories",
      status: "Beta Testing",
      color: "neon-green"
    },
    {
      icon: Microscope,
      title: "Nano-Scale Sensors",
      description: "Microscopic health monitoring embedded invisibly in fabric",
      status: "Production Ready",
      color: "neon-blue"
    },
    {
      icon: Beaker,
      title: "Bio-Responsive Materials",
      description: "Fabrics that react to environmental changes and user emotions",
      status: "Testing Phase",
      color: "neon-purple"
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

  const handleLearnMore = (innovationId?: string) => {
    if (innovationId) {
      navigate(`/innovation-detail/${innovationId}`);
    } else {
      // For innovations without specific pages, show a placeholder
      alert('Detailed information coming soon!');
    }
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
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-neon-blue/30 rounded-lg p-6 hover:border-neon-blue/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-${innovation.color}/20 rounded-full flex items-center justify-center group-hover:animate-pulse`}>
                  <innovation.icon className={`text-${innovation.color}`} size={24} />
                </div>
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
