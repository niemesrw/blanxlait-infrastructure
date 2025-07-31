import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <Navigation />
        <div className="header-cta">
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
