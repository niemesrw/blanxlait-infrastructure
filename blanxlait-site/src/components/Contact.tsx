import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [rateLimitError, setRateLimitError] = useState(false);

  // Input validation and sanitization
  const validateAndSanitizeInput = (data: typeof formData) => {
    const errors: string[] = [];
    
    // Name validation
    if (!data.name || data.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters');
    }
    if (data.name.length > 100) {
      errors.push('Name must be less than 100 characters');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.push('Please enter a valid email address');
    }
    if (data.email.length > 200) {
      errors.push('Email must be less than 200 characters');
    }
    
    // Message validation
    if (!data.message || data.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters');
    }
    if (data.message.length > 2000) {
      errors.push('Message must be less than 2000 characters');
    }
    
    // Company validation (optional but limit length)
    if (data.company && data.company.length > 100) {
      errors.push('Company name must be less than 100 characters');
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      sanitized: {
        name: data.name.trim().replace(/[<>]/g, ''), // Basic XSS prevention
        email: data.email.trim().toLowerCase(),
        company: data.company.trim().replace(/[<>]/g, ''),
        message: data.message.trim().replace(/[<>]/g, '')
      }
    };
  };

  // Simple rate limiting (client-side)
  const checkRateLimit = () => {
    const lastSubmission = localStorage.getItem('lastContactSubmission');
    const now = Date.now();
    
    if (lastSubmission) {
      const timeSinceLastSubmission = now - parseInt(lastSubmission);
      const minInterval = 60000; // 1 minute minimum between submissions
      
      if (timeSinceLastSubmission < minInterval) {
        setRateLimitError(true);
        setTimeout(() => setRateLimitError(false), 5000);
        return false;
      }
    }
    
    localStorage.setItem('lastContactSubmission', now.toString());
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setRateLimitError(false);

    // Rate limiting check
    if (!checkRateLimit()) {
      setIsSubmitting(false);
      return;
    }

    // Validate and sanitize input
    const validation = validateAndSanitizeInput(formData);
    if (!validation.isValid) {
      console.error('Validation errors:', validation.errors);
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Check if Firebase is properly configured
      const isFirebaseConfigured = db && import.meta.env.VITE_FIREBASE_PROJECT_ID && 
        import.meta.env.VITE_FIREBASE_PROJECT_ID !== 'demo-project';
      
      if (!isFirebaseConfigured || !db) {
        // Fallback for demo/development mode
        console.log('Form submitted:', validation.sanitized);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        return;
      }

      // Add document to Firestore with server timestamp
      await addDoc(collection(db, 'contact_forms'), {
        to: ['hello@blanxlait.com'],
        message: {
          subject: `New AI Consultation Request from ${validation.sanitized.name}`,
          text: `New contact form submission from BLANXLAIT website:

Name: ${validation.sanitized.name}
Email: ${validation.sanitized.email}
Company: ${validation.sanitized.company}

Message:
${validation.sanitized.message}

---
This email was sent from the BLANXLAIT contact form.`,
          html: `
            <h2>New Contact Form Submission from BLANXLAIT</h2>
            <p><strong>Name:</strong> ${validation.sanitized.name}</p>
            <p><strong>Email:</strong> ${validation.sanitized.email}</p>
            <p><strong>Company:</strong> ${validation.sanitized.company}</p>
            <br>
            <p><strong>Message:</strong></p>
            <p>${validation.sanitized.message.replace(/\n/g, '<br>')}</p>
            <br>
            <hr>
            <p><em>This email was sent from the BLANXLAIT contact form.</em></p>
          `
        },
        // Store form data for record keeping
        formData: {
          name: validation.sanitized.name,
          email: validation.sanitized.email,
          company: validation.sanitized.company,
          message: validation.sanitized.message,
          timestamp: serverTimestamp(),
          userAgent: navigator.userAgent
        }
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section section-bg">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Ready to Transform Your Business with
            <span className="hero-highlight">
              {" "}AI?
            </span>
          </h2>
          <p className="section-subtitle">
            Let's discuss how BLANXLAIT can help your business leverage AI-native solutions 
            to stay ahead of the competition.
          </p>
        </div>

        <div className="contact-grid">
          <div>
            <h3 className="contact-title">Get in Touch</h3>
            
            <div className="contact-info">
              <div className="feature-item">
                <h4 className="feature-title">Email</h4>
                <p className="feature-description">hello@blanxlait.com</p>
              </div>
              
              <div className="feature-item">
                <h4 className="feature-title">Response Time</h4>
                <p className="feature-description">We typically respond within 24 hours</p>
              </div>
              
              <div className="feature-item">
                <h4 className="feature-title">Consultation</h4>
                <p className="feature-description">Free initial AI strategy consultation</p>
              </div>
            </div>

            <div className="mission-card">
              <h4 className="mission-title">Why Start with AI?</h4>
              <p className="mission-description">
                Small and medium businesses that adopt AI early gain significant competitive advantages. 
                Let us help you identify the best AI opportunities for your business.
              </p>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit} className="form-container">
              <div>
                <label htmlFor="name" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="form-label">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="form-label">
                  Tell us about your AI needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Describe your business challenges and how you think AI could help..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary form-submit ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Start Your AI Journey'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  ❌ Sorry, there was an error sending your message. Please try again or email us directly at hello@blanxlait.com
                </div>
              )}
              
              {rateLimitError && (
                <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
                  ⏳ Please wait at least 1 minute between form submissions to prevent spam.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
