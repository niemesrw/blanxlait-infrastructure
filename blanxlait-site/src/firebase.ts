import { initializeApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

// Firebase configuration with fallback values for development/testing
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-api-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "demo-project.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "demo-project.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:demo"
};

// Initialize Firebase with error handling
let app;
let db: Firestore | null;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.warn('Firebase initialization failed, running in demo mode:', error);
  // Create a mock db object for testing/demo
  db = null;
}

export { db };
