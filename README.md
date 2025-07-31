# Blanxlait Infrastructure

This repository manages the infrastructure and website for blanxlait.com using Firebase Hosting.

## Project Structure

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
