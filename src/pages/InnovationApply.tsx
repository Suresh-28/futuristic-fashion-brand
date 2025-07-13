
import React, { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, Briefcase, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const InnovationApply = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience: '',
    interests: '',
    motivation: '',
    background: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Application submitted successfully! We will review your application and get back to you within 5 business days.');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-neon-blue/30 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/innovation-lab" className="flex items-center space-x-3 text-neon-blue hover:text-white transition-colors">
            <ArrowLeft size={24} />
            <span className="font-semibold">Back to Innovation Lab</span>
          </Link>
          <h1 className="text-2xl font-bold">Beta Program Application</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
              Join Our Research Program
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience groundbreaking fashion technology. 
            Apply to become a beta tester and help shape the future of wearable innovation.
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-gray-900/50 rounded-lg p-8 border border-neon-blue/30">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <div className="flex items-center mb-6">
                <User className="text-neon-blue mr-3" size={24} />
                <h2 className="text-2xl font-bold">Personal Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-white/80 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="text-neon-purple mr-3" size={24} />
                <h2 className="text-2xl font-bold">Professional Background</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 mb-2">Company/Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Position/Title</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-white/80 mb-2">Years of Experience in Tech/Fashion</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none"
                >
                  <option value="">Select experience level</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>

            {/* Application Details */}
            <div>
              <div className="flex items-center mb-6">
                <FileText className="text-neon-pink mr-3" size={24} />
                <h2 className="text-2xl font-bold">Application Details</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 mb-2">Areas of Interest *</label>
                  <textarea
                    name="interests"
                    value={formData.interests}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    placeholder="Which innovations are you most interested in testing? (e.g., Neural Fabrics, Energy Harvesting, etc.)"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none resize-vertical"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2">Motivation *</label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Why do you want to participate in our beta program? What can you contribute?"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none resize-vertical"
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2">Relevant Background</label>
                  <textarea
                    name="background"
                    value={formData.background}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your background in technology, fashion, design, or related fields."
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none resize-vertical"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="border-t border-gray-700 pt-8">
              <div className="mb-6">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-neon-blue bg-black border-gray-600 rounded focus:ring-neon-blue focus:ring-2"
                  />
                  <span className="text-white/80 text-sm">
                    I agree to participate in the beta program and provide feedback on the technologies I test. 
                    I understand that beta products may have limitations and agree to use them responsibly.
                  </span>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InnovationApply;
