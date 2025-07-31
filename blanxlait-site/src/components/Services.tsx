import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "AI-Native Applications",
      description: "Custom software where AI is the primary interface and decision-making engine, not an add-on feature.",
      icon: "🧠",
      features: ["Machine Learning Integration", "Intelligent Automation", "Predictive Analytics"]
    },
    {
      title: "Smart Business Process Automation",
      description: "Transform your workflows with intelligent automation that learns and adapts to your business needs.",
      icon: "⚡",
      features: ["Workflow Optimization", "Document Processing", "Real-time Decision Making"]
    },
    {
      title: "AI Strategy & Consulting",
      description: "Strategic guidance to help SMBs identify and implement AI opportunities that drive real business value.",
      icon: "🎯",
      features: ["AI Readiness Assessment", "Implementation Roadmap", "ROI Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our 
            <span className="bg-gradient-to-r from-ai-blue-600 to-ai-cyan-500 bg-clip-text text-transparent">
              {" "}AI Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating intelligent applications that leverage artificial intelligence 
            at their core, transforming how businesses operate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-ai-cyan-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-ai-blue-600 to-ai-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
