# Firebase Email Setup Guide for BLANXLAIT Contact Form

## 🔥 **Setting Up Firebase Trigger Email Extension**

### Step 1: Get Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `blanxlait-infrastructure`
3. Go to **Project Settings** (gear icon) → **General** tab
4. Scroll down to **Your apps** section
5. Click **Web app** (</>) to create a web app or view existing config
6. Copy the config object values

### Step 2: Configure Environment Variables
1. Create `.env.local` file in `blanxlait-site/` directory:
```bash
VITE_FIREBASE_API_KEY=AIzaSyD...your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=blanxlait-infrastructure.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=blanxlait-infrastructure
VITE_FIREBASE_STORAGE_BUCKET=blanxlait-infrastructure.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abc123def456
```

### Step 3: Install Firebase Trigger Email Extension
**Option A: Via Firebase Console (Recommended)**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select `blanxlait-infrastructure` project
3. Go to **Extensions** in left sidebar
4. Click **Browse Extensions**
5. Search for "Trigger Email" or find **"Trigger Email from Firestore"**
6. Click **Install**

**Option B: Via CLI (if authentication works)**
```bash
firebase ext:install firebase/firestore-send-email --project blanxlait-infrastructure
```

### Step 4: Configure the Extension
During installation, you'll be asked for:

**Email Service Configuration:**
- **SMTP Connection URI**: Use Gmail, SendGrid, or custom SMTP
  - Gmail: `smtps://username:password@smtp.gmail.com:465`
  - SendGrid: `smtps://apikey:YOUR_API_KEY@smtp.sendgrid.net:465`
- **Default FROM address**: `hello@blanxlait.com`
- **Default Reply-To address**: `hello@blanxlait.com`

**Firestore Configuration:**
- **Email collection**: `contact_forms`
- **Email document template**: Use default

### Step 5: Set Up Email Service (Choose One)

#### Option A: Gmail (Simple)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use: `smtps://your-email@gmail.com:app-password@smtp.gmail.com:465`

#### Option B: SendGrid (Professional)
1. Sign up for [SendGrid](https://sendgrid.com/) (free tier: 100 emails/day)
2. Create an API key
3. Use: `smtps://apikey:YOUR_SENDGRID_API_KEY@smtp.sendgrid.net:465`

### Step 6: Test the Setup
1. Build and deploy:
```bash
npm run build
firebase deploy
```

2. Test the contact form on your live site
3. Check Firestore console for new documents in `contact_forms` collection
4. Verify you receive the email

### Step 7: Security Rules (Optional)
Update `firestore.rules` to secure the contact forms collection:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to create contact forms (for website visitors)
    match /contact_forms/{document} {
      allow create: if true;
      allow read, update, delete: if false; // Only backend can read/modify
    }
  }
}
```

Deploy rules:
```bash
firebase deploy --only firestore:rules
```

## 🔒 **Security Benefits**
✅ **No API keys exposed** in frontend code
✅ **Server-side email processing** (more reliable)
✅ **Built-in spam protection** via Firestore security rules
✅ **Email delivery tracking** in Firebase Extensions logs
✅ **Automatic scaling** with Firebase infrastructure

## 📊 **Cost Analysis**
- **Firebase Firestore**: Free tier (50k reads, 20k writes per day)
- **Firebase Extensions**: Free to use
- **Email Service**:
  - Gmail: Free (with daily limits)
  - SendGrid: Free tier (100 emails/day), then $15/month
  - Custom SMTP: Varies by provider

## � **Troubleshooting**
1. **Extension not triggering**: Check Firestore rules allow writes to `contact_forms`
2. **Emails not sending**: Verify SMTP configuration in extension settings
3. **Build errors**: Ensure all environment variables are set
4. **Console errors**: Check Firebase config and API keys

## 🚀 **Production Checklist**
- [ ] Firebase config environment variables set
- [ ] Trigger Email extension installed and configured
- [ ] SMTP service connected (Gmail/SendGrid)
- [ ] Firestore security rules deployed
- [ ] Contact form tested on live site
- [ ] Email delivery confirmed
