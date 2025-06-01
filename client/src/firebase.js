// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkyz3GsVB7O4TkEP3Ea_zQcO7xSHGmBVc",
  authDomain: "astro-sarthi.firebaseapp.com",
  projectId: "astro-sarthi",
  storageBucket: "astro-sarthi.firebasestorage.app",
  messagingSenderId: "462568777660",
  appId: "1:462568777660:web:9ec38ee7abec8c5c8eedb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// This gives you the Authentication instance for your app.
const auth = getAuth(app);

// This gives you the Google Auth provider instance.
const googleProvider = new GoogleAuthProvider();

// This gives you the Facebook Auth provider instance.
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };