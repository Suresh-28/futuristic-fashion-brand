
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Collections', href: '#collections' },
    { name: 'Technology', href: '#technology' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleVirtualShowroom = () => {
    navigate('/virtual-showroom');
  };

  const handleInnovationLab = () => {
    navigate('/innovation-lab');
  };

  const handleOrders = () => {
    navigate('/orders');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-neon-blue/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-orbitron font-bold text-white">
            <span className="text-neon-blue">NEXUS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-neon-blue transition-colors duration-300 font-inter font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button 
              onClick={handleInnovationLab}
              className="px-6 py-2 border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black transition-all duration-300 font-inter font-medium"
            >
              INNOVATION LAB
            </button>
            <button 
              onClick={handleOrders}
              className="px-6 py-2 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 font-inter font-medium"
            >
              MY ORDERS
            </button>
            <Cart />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Cart />
            <button
              className="text-white hover:text-neon-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neon-blue/30">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-neon-blue transition-colors duration-300 font-inter font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  handleInnovationLab();
                  setIsMobileMenuOpen(false);
                }}
                className="px-6 py-2 border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black transition-all duration-300 font-inter font-medium self-start"
              >
                INNOVATION LAB
              </button>
              <button 
                onClick={() => {
                  handleOrders();
                  setIsMobileMenuOpen(false);
                }}
                className="px-6 py-2 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 font-inter font-medium self-start"
              >
                MY ORDERS
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
