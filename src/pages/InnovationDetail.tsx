
import React from 'react';
import { ArrowLeft, CheckCircle, Clock, Users } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const InnovationDetail = () => {
  const { innovationId } = useParams();

  const innovations = {
    'neural-fabric': {
      title: 'Neural Fabric Network',
      description: 'Advanced textile technology that creates a direct interface between fabric and the human nervous system.',
      fullDescription: 'Our Neural Fabric Network represents a revolutionary breakthrough in smart textiles. By embedding bio-compatible neural interfaces directly into fabric fibers, we create clothing that can read and respond to your body\'s electrical signals in real-time. This technology opens up unprecedented possibilities for health monitoring, adaptive comfort, and even direct neural-computer interfaces through your clothing.',
      features: [
        'Real-time biometric monitoring',
        'Adaptive temperature regulation',
        'Stress level detection and response',
        'Sleep quality optimization',
        'Neural signal amplification',
        'Bio-compatible materials'
      ],
      applications: [
        'Medical rehabilitation garments',
        'Athletic performance wear',
        'Sleep optimization clothing',
        'Stress management apparel',
        'Accessibility enhancement wear'
      ],
      timeline: '12-18 months',
      teamSize: '15 engineers',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    },
    'energy-harvesting': {
      title: 'Energy Harvesting Threads',
      description: 'Revolutionary fibers that convert body heat and kinetic energy into electrical power for embedded devices.',
      fullDescription: 'Energy Harvesting Threads transform the human body into a personal power station. These specially engineered fibers capture thermal energy from body heat and kinetic energy from movement, converting them into usable electrical power. This breakthrough enables truly self-powered wearable technology that never needs charging.',
      features: [
        'Thermoelectric energy conversion',
        'Piezoelectric motion capture',
        'Integrated power storage',
        'Wireless energy transmission',
        'Ultra-lightweight design',
        'Washable and durable'
      ],
      applications: [
        'Self-powered fitness trackers',
        'Emergency communication devices',
        'Medical monitoring systems',
        'Outdoor adventure gear',
        'Military applications'
      ],
      timeline: '8-12 months',
      teamSize: '12 engineers',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    },
    'programmable-matter': {
      title: 'Programmable Matter Clothing',
      description: 'Garments that can change shape, color, and texture on command using advanced materials.',
      fullDescription: 'Programmable Matter Clothing represents the ultimate fusion of fashion and technology. Using advanced smart materials that can be controlled at the molecular level, these garments can transform their appearance, texture, and even structure in response to user commands or environmental conditions.',
      features: [
        'Dynamic shape transformation',
        'Real-time color changing',
        'Texture modification',
        'Temperature adaptation',
        'Weather responsiveness',
        'User-controlled styling'
      ],
      applications: [
        'Adaptive fashion wear',
        'Climate-responsive clothing',
        'Performance sportswear',
        'Theatrical costumes',
        'Professional uniforms'
      ],
      timeline: '18-24 months',
      teamSize: '20 engineers',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    },
    'quantum-processors': {
      title: 'Quantum Computing Processors',
      description: 'Miniaturized quantum chips integrated into fashion accessories for enhanced computing power.',
      fullDescription: 'Our Quantum Computing Processors bring the power of quantum computing to wearable fashion. These miniaturized quantum chips can be seamlessly integrated into accessories like watches, jewelry, and clothing, providing unprecedented computational capabilities for AI assistance, data processing, and real-time analytics.',
      features: [
        'Quantum processing power',
        'Miniaturized chip design',
        'Low power consumption',
        'AI acceleration',
        'Real-time analytics',
        'Secure quantum encryption'
      ],
      applications: [
        'Smart jewelry',
        'AI-powered accessories',
        'Wearable computers',
        'Security devices',
        'Health analytics'
      ],
      timeline: '24-36 months',
      teamSize: '25 engineers',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    },
    'nano-sensors': {
      title: 'Nano-Scale Sensors',
      description: 'Microscopic health monitoring devices embedded invisibly in fabric for continuous tracking.',
      fullDescription: 'Nano-Scale Sensors represent the future of invisible health monitoring. These microscopic devices can be woven directly into fabric fibers, creating clothing that continuously monitors vital signs, environmental conditions, and health metrics without any visible technology or user intervention.',
      features: [
        'Invisible integration',
        'Continuous monitoring',
        'Multi-parameter sensing',
        'Wireless data transmission',
        'Long battery life',
        'Medical-grade accuracy'
      ],
      applications: [
        'Health monitoring clothing',
        'Medical patient wear',
        'Elderly care garments',
        'Athletic performance tracking',
        'Environmental monitoring'
      ],
      timeline: '6-9 months',
      teamSize: '18 engineers',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    },
    'bio-responsive': {
      title: 'Bio-Responsive Materials',
      description: 'Smart fabrics that react to environmental changes and user emotions in real-time.',
      fullDescription: 'Bio-Responsive Materials create clothing that truly understands and responds to both you and your environment. These smart fabrics can detect emotional states through biometric signals and automatically adjust their properties to provide comfort, support, and even therapeutic benefits.',
      features: [
        'Emotion detection',
        'Environmental adaptation',
        'Automatic adjustment',
        'Therapeutic responses',
        'Stress relief mechanisms',
        'Mood enhancement'
      ],
      applications: [
        'Therapeutic clothing',
        'Stress management wear',
        'Mood-responsive fashion',
        'Medical therapy garments',
        'Wellness apparel'
      ],
      timeline: '15-20 months',
      teamSize: '16 engineers',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    }
  };

  const innovation = innovations[innovationId as keyof typeof innovations];

  if (!innovation) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Innovation Not Found</h1>
          <Link to="/innovation-lab" className="text-neon-blue hover:text-white transition-colors">
            Back to Innovation Lab
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-neon-blue/30 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/innovation-lab" className="flex items-center space-x-3 text-neon-blue hover:text-white transition-colors">
            <ArrowLeft size={24} />
            <span className="font-semibold">Back to Innovation Lab</span>
          </Link>
          <h1 className="text-2xl font-bold">Innovation Details</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
                {innovation.title}
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              {innovation.fullDescription}
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="text-neon-blue" size={16} />
                <span>Timeline: {innovation.timeline}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-neon-purple" size={16} />
                <span>Team: {innovation.teamSize}</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={innovation.image}
              alt={innovation.title}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
            <div className="space-y-4">
              {innovation.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-neon-blue flex-shrink-0" size={20} />
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Applications</h2>
            <div className="space-y-4">
              {innovation.applications.map((application, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-neon-blue/30">
                  <p className="text-white/80">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in This Innovation?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Join our research program and be among the first to experience this groundbreaking technology.
          </p>
          <Link
            to="/innovation-lab/apply"
            className="inline-block px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
          >
            Apply for Beta Program
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InnovationDetail;
