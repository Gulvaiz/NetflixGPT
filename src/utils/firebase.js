// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6N3SYzVzM6HRgKzndw90roGSAAMPjk9s",
  authDomain: "netflixgpt-4dc7c.firebaseapp.com",
  projectId: "netflixgpt-4dc7c",
  storageBucket: "netflixgpt-4dc7c.firebasestorage.app",
  messagingSenderId: "663186643653",
  appId: "1:663186643653:web:2360e6d380cef9d803aeac",
  measurementId: "G-SMYTVM0JD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();