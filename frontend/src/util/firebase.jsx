// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
  projectId: "resumeproj-96170",
  storageBucket: "resumeproj-96170.firebasestorage.app",
  messagingSenderId: "368022833684",
  appId: "1:368022833684:web:1bfbbfaa56fda8faa5b501",
  measurementId: "G-EGFQB4J12L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth,provider};