import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">
                <div className="logo-square"></div>
                <div className="logo-dot"></div>
              </div>
              <span className="logo-text">
                BLANXL
                <span className="logo-ai">AI</span>
                T
              </span>
            </div>
            <p className="footer-description">
              Developing AI-native software solutions that transform how small and medium businesses operate. 
              AI at the core, not as an afterthought.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/company/blanxlait" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>in</span>
              </a>
              <a href="https://twitter.com/blanxlait" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>𝕏</span>
              </a>
              <a href="https://github.com/blanxlait" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>⚡</span>
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">AI-Native Applications</a></li>
              <li><a href="#" className="footer-link">Process Automation</a></li>
              <li><a href="#" className="footer-link">AI Strategy Consulting</a></li>
              <li><a href="#" className="footer-link">Implementation Support</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Case Studies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 BLANXLAIT. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
