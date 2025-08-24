import React from 'react';

interface LogoProps {
  onNavigateHome?: () => void;
}

const Logo: React.FC<LogoProps> = ({ onNavigateHome }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.hash = '';
    }
  };

  return (
    <a href="/" onClick={handleClick} className="logo">
      <div className="logo-icon">
        <div className="logo-dot"></div>
      </div>
      <span>
        BLANXL
        <span className="logo-ai">AI</span>
        T
      </span>
    </a>
  );
};

export default Logo;
