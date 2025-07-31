import React from 'react';

const Navigation: React.FC = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
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
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
