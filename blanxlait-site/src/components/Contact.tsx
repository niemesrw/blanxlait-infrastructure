import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your environment variables.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: 'hello@blanxlait.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
