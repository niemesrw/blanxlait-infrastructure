import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business with
            <span className="bg-gradient-to-r from-ai-blue-600 to-ai-cyan-500 bg-clip-text text-transparent">
              {" "}AI?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how BLANXLAIT can help your business leverage AI-native solutions 
            to stay ahead of the competition.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-ai-cyan-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">hello@blanxlait.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-ai-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Response Time</h4>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-ai-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Consultation</h4>
                  <p className="text-gray-600">Free initial AI strategy consultation</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-ai-blue-600 to-ai-cyan-500 rounded-xl text-white">
              <h4 className="text-lg font-semibold mb-2">Why Start with AI?</h4>
              <p className="opacity-90">
                Small and medium businesses that adopt AI early gain significant competitive advantages. 
                Let us help you identify the best AI opportunities for your business.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ai-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ai-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ai-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your AI needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ai-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Describe your business challenges and how you think AI could help..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-ai-blue-600 to-ai-cyan-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Your AI Journey
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
