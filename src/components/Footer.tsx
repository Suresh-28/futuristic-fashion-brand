
import React from 'react';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const footerSections = [
    {
      title: 'COLLECTIONS',
      links: ['Neural Wear', 'Quantum Line', 'Cyber Collection', 'Bio-Tech Series']
    },
    {
      title: 'TECHNOLOGY',
      links: ['Smart Fabrics', 'AR Integration', 'Bio-Sensors', 'Sustainability']
    },
    {
      title: 'COMPANY',
      links: ['About Us', 'Careers', 'Press', 'Investors']
    },
    {
      title: 'SUPPORT',
      links: ['Size Guide', 'Care Instructions', 'Returns', 'Contact']
    }
  ];

  return (
    <footer className="bg-black border-t border-neon-blue/30 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-orbitron font-bold text-white mb-4">
              <span className="text-neon-blue">NEXUS</span>
            </div>
            <p className="text-white/70 font-inter mb-6 leading-relaxed">
              Pioneering the future of fashion through revolutionary technology 
              and sustainable innovation.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 flex items-center justify-center hover:bg-neon-blue hover:border-neon-blue hover:text-black transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-orbitron font-bold mb-4 text-sm tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-white/60 font-inter text-sm hover:text-neon-blue transition-colors duration-300 relative group"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-neon-blue/30 pt-8 mb-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-orbitron font-bold mb-2">
                STAY CONNECTED
              </h3>
              <p className="text-white/60 font-inter text-sm">
                Get exclusive access to new collections and tech innovations
              </p>
            </div>
            
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-neon-blue/30 text-white font-inter text-sm placeholder-white/40 focus:outline-none focus:border-neon-blue"
              />
              <button className="px-6 py-3 bg-neon-blue text-black font-inter font-semibold text-sm hover:bg-neon-purple transition-colors duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neon-blue/30 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-white/40 font-inter text-sm mb-4 md:mb-0">
              © 2024 NEXUS Fashion. All rights reserved. Designed for the future.
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white/40 font-inter text-sm hover:text-neon-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 font-inter text-sm hover:text-neon-blue transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/40 font-inter text-sm hover:text-neon-blue transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
