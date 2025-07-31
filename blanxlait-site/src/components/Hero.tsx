import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background gradient */}
      <div className="hero-bg"></div>
      
      {/* Floating AI elements */}
      <div className="floating-element element-1"></div>
      <div className="floating-element element-2"></div>
      <div className="floating-element element-3"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            AI-Native Software
            <br />
            <span className="hero-highlight">
              Solutions
            </span>
          </h1>
          
          <p className="hero-description">
            BLANXLAIT develops intelligent applications that leverage artificial intelligence 
            at their core, not as an afterthought. We transform how small and medium businesses operate.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn-primary btn-large"
              onClick={() => scrollToSection('contact')}
              aria-label="Navigate to contact form to start your AI journey"
            >
              Start Your AI Journey
            </button>
            <button 
              className="btn-secondary btn-large"
              onClick={() => scrollToSection('about')}
              aria-label="Learn more about BLANXLAIT"
            >
              Learn More
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="hero-trust">
            <p className="trust-text">Trusted by innovative businesses</p>
            <div className="trust-indicators">
              <div className="trust-item">AI-First</div>
              <div className="trust-separator">•</div>
              <div className="trust-item">Intelligent</div>
              <div className="trust-separator">•</div>
              <div className="trust-item">Scalable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
