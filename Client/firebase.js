// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOZWhdwXD_bjzVAMeAexMvWpcy05Wke1c",
  authDomain: "user-email-password-auth-13c4c.firebaseapp.com",
  projectId: "user-email-password-auth-13c4c",
  storageBucket: "user-email-password-auth-13c4c.firebasestorage.app",
  messagingSenderId: "669810493327",
  appId: "1:669810493327:web:492ef5a5ddf76130816dfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);