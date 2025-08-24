import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <section id="terms" className="terms-of-service">
      <div className="container">
        <div className="terms-content">
          <h1 className="terms-title">Terms of Service</h1>
          <p className="terms-subtitle">
            Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <div className="terms-section">
            <h2>Welcome to BLANXLAIT</h2>
            <p>
              These Terms of Service ("Terms") govern your use of BLANXLAIT's website and AI-native software solutions. 
              By accessing our services, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="terms-section">
            <h2>Our Services</h2>
            <p>
              BLANXLAIT provides AI-native software solutions designed specifically for small and medium businesses. 
              Our services include custom application development, process automation, AI strategy consulting, and implementation support.
            </p>
            
            <h3>Service Availability</h3>
            <ul>
              <li>We strive to maintain 99.9% uptime for our hosted services</li>
              <li>Scheduled maintenance will be communicated in advance</li>
              <li>We reserve the right to modify or discontinue services with notice</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>User Responsibilities</h2>
            
            <h3>Acceptable Use</h3>
            <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You must not:</p>
            <ul>
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Interfere with or disrupt the security or operation of our services</li>
              <li>Attempt to gain unauthorized access to our systems or data</li>
              <li>Use our services to transmit malicious code or harmful content</li>
            </ul>

            <h3>Account Security</h3>
            <ul>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>You are liable for all activities that occur under your account</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Intellectual Property</h2>
            
            <h3>Our IP Rights</h3>
            <p>
              BLANXLAIT retains all rights to our proprietary AI algorithms, software frameworks, and methodologies. 
              Custom solutions developed for clients include appropriate licensing terms specific to each engagement.
            </p>
            
            <h3>Client Data and IP</h3>
            <ul>
              <li>Clients retain ownership of their data and existing intellectual property</li>
              <li>Custom developments are licensed to clients as specified in project agreements</li>
              <li>We do not claim ownership of client business processes or data</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Payment and Billing</h2>
            
            <h3>Project-Based Services</h3>
            <ul>
              <li>Payment terms are specified in individual project agreements</li>
              <li>Invoices are typically due within 30 days of receipt</li>
              <li>Late payments may incur interest charges as permitted by law</li>
            </ul>
            
            <h3>Subscription Services</h3>
            <ul>
              <li>Subscription fees are billed in advance</li>
              <li>Cancellations must be provided with 30 days notice</li>
              <li>Refunds are handled on a case-by-case basis</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Data and Privacy</h2>
            <p>
              Your privacy is fundamental to our mission. Please review our 
              <a href="/privacy" style={{ color: '#1e40af', textDecoration: 'none' }}> Privacy Policy</a> to understand 
              how we collect, use, and protect your information.
            </p>
            
            <h3>Key Privacy Commitments</h3>
            <ul>
              <li>We do not sell or share your personal data with third parties</li>
              <li>Client data is used solely to provide agreed-upon services</li>
              <li>We implement enterprise-grade security measures</li>
              <li>Data retention policies are clearly defined in service agreements</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Limitation of Liability</h2>
            <p>
              BLANXLAIT's liability is limited to the amount paid for services in the 12 months preceding any claim. 
              We are not liable for indirect, incidental, or consequential damages.
            </p>
            
            <h3>Service Disclaimers</h3>
            <ul>
              <li>Services are provided "as is" without warranties</li>
              <li>We do not guarantee specific business outcomes</li>
              <li>AI recommendations are tools to assist decision-making, not replace human judgment</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Termination</h2>
            
            <h3>By You</h3>
            <p>You may terminate services at any time with written notice as specified in your service agreement.</p>
            
            <h3>By Us</h3>
            <p>We may terminate services for:</p>
            <ul>
              <li>Breach of these Terms or service agreements</li>
              <li>Non-payment of fees</li>
              <li>Misuse of our services or systems</li>
              <li>Legal or regulatory requirements</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Updates to Terms</h2>
            <p>
              We may update these Terms from time to time. Significant changes will be communicated via email 
              and posted on our website. Continued use of our services after changes constitutes acceptance.
            </p>
          </div>

          <div className="terms-section">
            <h2>Governing Law</h2>
            <p>
              These Terms are governed by the laws of the jurisdiction where BLANXLAIT is incorporated. 
              Any disputes will be resolved through binding arbitration or in the courts of that jurisdiction.
            </p>
          </div>

          <div className="terms-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="terms-contact">
              <p><strong>Email:</strong> legal@blanxlait.com</p>
              <p><strong>Business Inquiries:</strong> ryan@blanxlait.com</p>
              <p><strong>Address:</strong> BLANXLAIT Legal Department</p>
            </div>
          </div>

          <div className="terms-footer">
            <p>
              <strong>Our Commitment:</strong> We believe in transparent, fair business practices that empower 
              your success with AI-native solutions. These terms reflect our commitment to building lasting 
              partnerships with small and medium businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
