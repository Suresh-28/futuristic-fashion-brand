
import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: '10K+', label: 'Satisfied Customers' },
    { icon: Target, value: '99%', label: 'Precision Rate' },
    { icon: Award, value: '50+', label: 'Design Awards' },
    { icon: Zap, value: '24/7', label: 'AI Support' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              ABOUT NEXUS
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Pioneering the intersection of artificial intelligence and haute couture, 
            we craft the future of wearable technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="AI Fashion Robot"
              className="w-full h-96 object-cover rounded-lg border-2 border-neon-blue/30"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              At NEXUS, we believe fashion is more than clothing—it's an extension of human consciousness. 
              Our AI-powered designs adapt to your biometric data, environmental conditions, and personal style, 
              creating garments that truly live and breathe with you.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Founded by a team of fashion visionaries and AI researchers, we're redefining what it means 
              to be dressed for the future.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-neon-blue" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
