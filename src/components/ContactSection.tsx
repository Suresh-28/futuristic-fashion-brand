
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen bg-black py-20" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-green">
              GET IN TOUCH
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Ready to step into the future? Contact our team to discuss your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center">
                <Mail className="text-neon-blue" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-white/70">hello@nexusfashion.ai</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center">
                <Phone className="text-neon-purple" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-white/70">+1 (555) NEXUS-AI</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-neon-pink/20 rounded-full flex items-center justify-center">
                <MapPin className="text-neon-pink" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-white/70">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-neon-blue/30 text-white placeholder-white/50 focus:outline-none focus:border-neon-blue rounded-lg"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-neon-blue/30 text-white placeholder-white/50 focus:outline-none focus:border-neon-blue rounded-lg"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-900 border border-neon-blue/30 text-white placeholder-white/50 focus:outline-none focus:border-neon-blue rounded-lg resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>SEND MESSAGE</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
