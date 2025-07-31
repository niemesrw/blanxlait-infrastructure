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
    <section id="services" className="section section-bg">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">
            Our 
            <span className="hero-highlight">
              {" "}AI Services
            </span>
          </h2>
          <p className="section-subtitle">
            We specialize in creating intelligent applications that leverage artificial intelligence 
            at their core, transforming how businesses operate.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card"
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">
                {service.title}
              </h3>
              <p className="service-description">
                {service.description}
              </p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-primary btn-large">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
