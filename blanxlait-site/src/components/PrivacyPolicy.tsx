import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy" className="privacy-policy">
      <div className="container">
        <div className="privacy-content">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <div className="privacy-section">
            <h2>Our Commitment to Your Privacy</h2>
            <p>
              At BLANXLAIT, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Our Core Privacy Principles</h2>
            <div className="privacy-principles">
              <div className="principle-item">
                <h3>🔒 Data Protection First</h3>
                <p>We do not sell, trade, or share your personal data with third parties for marketing purposes.</p>
              </div>
              <div className="principle-item">
                <h3>🎯 Purpose-Driven Collection</h3>
                <p>We only collect data that is necessary to provide and improve our AI-native software solutions.</p>
              </div>
              <div className="principle-item">
                <h3>🚫 No Data Monetization</h3>
                <p>Your data is not our product. We build AI applications to solve business problems, not to harvest data.</p>
              </div>
            </div>
          </div>

          <div className="privacy-section">
            <h2>Information We Collect</h2>
            <h3>Contact Information</h3>
            <ul>
              <li>Name and email address when you contact us</li>
              <li>Company information for business inquiries</li>
              <li>Communication preferences</li>
            </ul>
            
            <h3>Website Analytics</h3>
            <ul>
              <li>Basic website usage statistics (anonymized)</li>
              <li>Performance metrics to improve user experience</li>
              <li>Technical information about your browser and device</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>We use your information solely for the following purposes:</p>
            <ul>
              <li><strong>Service Delivery:</strong> To provide AI software solutions and support</li>
              <li><strong>Communication:</strong> To respond to your inquiries and provide updates</li>
              <li><strong>Improvement:</strong> To enhance our services and user experience</li>
              <li><strong>Legal Compliance:</strong> To meet legal and regulatory requirements</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>What We DON'T Do With Your Data</h2>
            <div className="privacy-dont-list">
              <div className="dont-item">
                <span className="dont-icon">❌</span>
                <span>Sell your personal information to third parties</span>
              </div>
              <div className="dont-item">
                <span className="dont-icon">❌</span>
                <span>Share your data for advertising or marketing by others</span>
              </div>
              <div className="dont-item">
                <span className="dont-icon">❌</span>
                <span>Use your data to train AI models for other companies</span>
              </div>
              <div className="dont-item">
                <span className="dont-icon">❌</span>
                <span>Access your data unnecessarily or without purpose</span>
              </div>
            </div>
          </div>

          <div className="privacy-section">
            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access controls and employee training</li>
              <li>Secure hosting infrastructure with Firebase</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we have about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of communications at any time</li>
              <li>Data portability where technically feasible</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Third-Party Services</h2>
            <p>
              Our website uses minimal third-party services. When we do use them, we ensure they meet our privacy standards:
            </p>
            <ul>
              <li><strong>Firebase Hosting:</strong> For secure website hosting (Google Cloud Platform)</li>
              <li><strong>Analytics:</strong> Anonymized website performance data only</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will notify you by updating the 
              effective date and, for significant changes, provide additional notice on our website.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="privacy-contact">
              <p><strong>Email:</strong> privacy@blanxlait.com</p>
              <p><strong>Address:</strong> BLANXLAIT Privacy Officer</p>
            </div>
          </div>

          <div className="privacy-footer">
            <p>
              <strong>Remember:</strong> At BLANXLAIT, we build AI to empower your business, not to exploit your data. 
              Your privacy is fundamental to our mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
