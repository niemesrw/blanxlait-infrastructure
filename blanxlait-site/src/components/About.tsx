import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-ai-blue-600 to-ai-cyan-500 bg-clip-text text-transparent">
                {" "}BLANXLAIT
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're not just building software with AI features – we're creating AI-native solutions 
              where artificial intelligence is the foundation, not an afterthought.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-ai-cyan-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-First Approach</h3>
                  <p className="text-gray-600">Every solution is designed with AI as the core decision-making engine.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-ai-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">SMB Focus</h3>
                  <p className="text-gray-600">Specialized in helping small and medium businesses leverage AI effectively.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-ai-cyan-400 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Innovation</h3>
                  <p className="text-gray-600">We deliver AI solutions that solve real business problems and drive ROI.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-ai-blue-600 to-ai-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To democratize AI for small and medium businesses by creating intelligent, 
                intuitive software solutions that transform how they operate and compete.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm opacity-80">AI Models Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-80">Businesses Transformed</div>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-ai-cyan-200 rounded-full opacity-50 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-ai-blue-200 rounded-full opacity-60 animate-float" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
