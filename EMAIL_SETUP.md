# Email Setup Guide for BLANXLAIT Contact Form

## 📧 Setting Up EmailJS for Contact Form

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month)
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal)
   - **Outlook** 
   - **Yahoo**
   - **Custom SMTP** (for business email)
4. Follow the connection steps for your provider
5. **Save your Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"** 
2. Click **"Create New Template"**
3. Use this template content:

**Subject:** New AI Consultation Request from {{from_name}}

**Body:**
```
New contact form submission from BLANXLAIT website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This email was sent from the BLANXLAIT contact form.
```

4. **Save your Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (e.g., `abc123xyz`)

### Step 5: Configure Environment Variables
1. Create `.env.local` file in `blanxlait-site/` directory:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the placeholder values with your actual EmailJS credentials

### Step 6: Deploy with Environment Variables

#### For Firebase Hosting:
Firebase Hosting serves static files, so environment variables are built into the app during build time.

1. Create `.env.local` with your EmailJS credentials
2. Build and deploy:
```bash
npm run build
firebase deploy --only hosting
```

#### For Production Security:
- The public key is safe to expose (it's meant to be public)
- Service ID and Template ID are also safe to expose
- Never put private/secret keys in frontend environment variables

### Step 7: Test the Contact Form
1. Build and run locally: `npm run build && npm run preview`
2. Fill out the contact form
3. Check that you receive the email
4. Verify the success message appears

## 🔒 Security Notes
- EmailJS public keys are safe for frontend use
- Rate limiting is handled by EmailJS (200 emails/month on free tier)
- Consider upgrading to paid plan for production use
- Monitor your EmailJS dashboard for usage

## 🚀 Alternative: Business Email Setup
For a more professional setup, you can use:
- **SendGrid** (requires backend)
- **Mailgun** (requires backend) 
- **Firebase Functions + Gmail API** (more complex)

## 📝 Troubleshooting
- Check browser console for errors
- Verify environment variables are loaded: `console.log(import.meta.env)`
- Ensure EmailJS service is connected and active
- Check EmailJS dashboard for delivery logs
