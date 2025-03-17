// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPV0yV2-nLrfmwxeM0kyVbo6HcVsc4Fiw",
  authDomain: "netflixgpt1-f1dd9.firebaseapp.com",
  projectId: "netflixgpt1-f1dd9",
  storageBucket: "netflixgpt1-f1dd9.firebasestorage.app",
  messagingSenderId: "1064626372240",
  appId: "1:1064626372240:web:653b2a80853f25a1f8e215",
  measurementId: "G-BQVBNDB9ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default app;