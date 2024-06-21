// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-df9ab.firebaseapp.com",
  projectId: "mern-auth-df9ab",
  storageBucket: "mern-auth-df9ab.appspot.com",
  messagingSenderId: "118983695915",
  appId: "1:118983695915:web:d302f313505c57c5c1946e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);