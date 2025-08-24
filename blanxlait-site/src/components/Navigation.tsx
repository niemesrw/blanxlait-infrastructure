import React from 'react';

interface NavigationProps {
  onNavigateHome?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigateHome }) => {
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.hash = '';
    }
  };

  const navItems = [
    { label: 'Home', href: '/', onClick: handleHomeClick },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navigation">
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="nav-link"
          onClick={item.onClick}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
