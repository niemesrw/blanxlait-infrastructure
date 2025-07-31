# BLANXLAIT Infrastructure

🤖 **AI-Native Software Solutions for SMBs**

This repository contains the complete infrastructure and website for BLANXLAIT, an AI-focused software company specializing in intelligent applications for small and medium businesses.

## 🌐 Live Website
- **Production**: [blanxlait.com](https://blanxlait.com)
- **Hosting**: Firebase Hosting with custom domain
- **Email Security**: Full SPF, DKIM, DMARC, MTA-STS implementation

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Custom CSS** with responsive design
- **Modern UI/UX** with blue/aquamarine gradient theme

### Infrastructure
- **Firebase Hosting** for static site deployment
- **DNS Management** via Squarespace domain
- **Email Security** with comprehensive MTA-STS policy
- **GitHub Actions** for CI/CD (coming soon)

### Design Features
- ✅ Fully responsive (desktop, tablet, mobile)
- ✅ AI-focused branding with gradient highlights
- ✅ Interactive contact form
- ✅ Smooth animations and hover effects
- ✅ Professional typography with Inter font
- ✅ SEO-optimized structure

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase CLI

### Setup
```bash
# Clone the repository
git clone https://github.com/niemesrw/blanxlait-infrastructure.git
cd blanxlait-infrastructure

# Install dependencies
npm install
cd blanxlait-site && npm install

# Start development server
npm run dev
```

### Build & Deploy
```bash
# Build for production
cd blanxlait-site
npm run build

# Deploy to Firebase
firebase deploy
```

## 📁 Project Structure

```
├── firebase.json          # Firebase configuration
├── .firebaserc            # Firebase project settings
├── public/                 # Static website files
│   └── index.html         # Main landing page
├── .github/               # GitHub Actions (future)
└── README.md              # This file
```

## Setup Instructions

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project with ID: `blanxlait-infrastructure`
3. Enable Firebase Hosting

### 2. Deploy
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy to Firebase
firebase deploy
```

### 3. Configure Custom Domain
1. In Firebase Console → Hosting → Custom domains
2. Add `blanxlait.com` and `www.blanxlait.com`
3. Follow DNS verification steps
4. Update DNS records in Squarespace:
   - A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - Add TXT record for domain verification

## Local Development

```bash
# Serve locally
firebase serve

# Open browser to http://localhost:5000
```

## Deployment

Manual deployment:
```bash
firebase deploy
```

Future: GitHub Actions will handle automatic deployment on push to main.

## Domain Configuration

- **Primary domain**: blanxlait.com
- **Hosting**: Firebase Hosting
- **DNS**: Managed through Squarespace
- **SSL**: Auto-provisioned by Firebase

## Next Steps

- [ ] Create Firebase project in console
- [ ] Deploy initial site
- [ ] Configure custom domain
- [ ] Set up GitHub Actions for CI/CD
- [ ] Add proper content
# Testing deployment pipeline
