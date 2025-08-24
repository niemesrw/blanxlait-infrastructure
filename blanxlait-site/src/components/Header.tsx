import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

interface HeaderProps {
  onNavigateHome?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome }) => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo onNavigateHome={onNavigateHome} />
        <Navigation onNavigateHome={onNavigateHome} />
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
