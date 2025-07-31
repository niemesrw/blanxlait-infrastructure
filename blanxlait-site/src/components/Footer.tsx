import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-ai-blue-600 to-ai-cyan-500 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-ai-cyan-400 rounded-full animate-pulse-slow"></div>
                </div>
                <span className="text-2xl font-bold text-white">
                  BLANXL
                  <span className="bg-gradient-to-r from-ai-blue-400 to-ai-cyan-400 bg-clip-text text-transparent">
                    AI
                  </span>
                  T
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Developing AI-native software solutions that transform how small and medium businesses operate. 
              AI at the core, not as an afterthought.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-ai-blue-600 transition-colors cursor-pointer">
                <span className="text-sm">Li</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-ai-blue-600 transition-colors cursor-pointer">
                <span className="text-sm">Tw</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-ai-blue-600 transition-colors cursor-pointer">
                <span className="text-sm">Gh</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-ai-cyan-400 transition-colors">AI-Native Applications</a></li>
              <li><a href="#" className="hover:text-ai-cyan-400 transition-colors">Process Automation</a></li>
              <li><a href="#" className="hover:text-ai-cyan-400 transition-colors">AI Strategy Consulting</a></li>
              <li><a href="#" className="hover:text-ai-cyan-400 transition-colors">Implementation Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-ai-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-ai-cyan-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-ai-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-ai-cyan-400 transition-colors">Case Studies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 BLANXLAIT. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-ai-cyan-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-ai-cyan-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
