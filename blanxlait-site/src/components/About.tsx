import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="contact-grid">
          <div>
            <h2 className="section-title">
              Why Choose
              <span className="hero-highlight">
                {" "}BLANXLAIT
              </span>
            </h2>
            <p className="section-subtitle">
              We're not just building software with AI features – we're creating AI-native solutions 
              where artificial intelligence is the foundation, not an afterthought.
            </p>
            
            <div className="space-y-6">
              <div className="feature-item">
                <h3 className="feature-title">AI-First Approach</h3>
                <p className="feature-description">Every solution is designed with AI as the core decision-making engine.</p>
              </div>
              
              <div className="feature-item">
                <h3 className="feature-title">SMB Focus</h3>
                <p className="feature-description">Specialized in helping small and medium businesses leverage AI effectively.</p>
              </div>
              
              <div className="feature-item">
                <h3 className="feature-title">Practical Innovation</h3>
                <p className="feature-description">We deliver AI solutions that solve real business problems and drive ROI.</p>
              </div>
            </div>
          </div>
          
          <div className="mission-card">
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-description">
              To democratize AI for small and medium businesses by creating intelligent, 
              intuitive software solutions that transform how they operate and compete.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">AI Models Deployed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Businesses Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
