// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNjxCZ0kTndo7wdroTlQRsB56H7EYN_w8",
  authDomain: "netflixgpt-e9c90.firebaseapp.com",
  projectId: "netflixgpt-e9c90",
  storageBucket: "netflixgpt-e9c90.appspot.com",
  messagingSenderId: "260450467218",
  appId: "1:260450467218:web:993982d81161491553954b",
  measurementId: "G-S9ZH6N43NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();