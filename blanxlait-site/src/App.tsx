import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    // Normalize legacy hash route to clean path
    if (window.location.hash === '#privacy') {
      window.history.replaceState({}, '', '/privacy');
    }

    const setViewFromLocation = () => {
      const path = window.location.pathname;
      if (path === '/privacy') {
        setCurrentView('privacy');
      } else if (path === '/terms') {
        setCurrentView('terms');
      } else {
        setCurrentView('home');
      }
    };

    // Initialize view
    setViewFromLocation();

    // Listen for browser navigation
    const onPopState = () => setViewFromLocation();
    window.addEventListener('popstate', onPopState);

    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigateToPrivacy = () => {
    if (window.location.pathname !== '/privacy') {
      window.history.pushState({}, '', '/privacy');
    }
    setCurrentView('privacy');
  };

  const navigateToTerms = () => {
    if (window.location.pathname !== '/terms') {
      window.history.pushState({}, '', '/terms');
    }
    setCurrentView('terms');
  };

  const navigateToHome = () => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    setCurrentView('home');
  };

  if (currentView === 'privacy') {
    return (
      <div className="App">
        <Header onNavigateHome={navigateToHome} />
        <PrivacyPolicy />
        <Footer onNavigatePrivacy={navigateToPrivacy} onNavigateTerms={navigateToTerms} />
      </div>
    );
  }

  if (currentView === 'terms') {
    return (
      <div className="App">
        <Header onNavigateHome={navigateToHome} />
        <TermsOfService />
        <Footer onNavigatePrivacy={navigateToPrivacy} onNavigateTerms={navigateToTerms} />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer onNavigatePrivacy={navigateToPrivacy} onNavigateTerms={navigateToTerms} />
    </div>
  );
}

export default App;
