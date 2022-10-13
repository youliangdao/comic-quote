// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSX720HWvt06i_va7XuSliVVrkwQopHwo",
  authDomain: "comic-quote.firebaseapp.com",
  projectId: "comic-quote",
  storageBucket: "comic-quote.appspot.com",
  messagingSenderId: "558197194620",
  appId: "1:558197194620:web:bca619601ee226fe8aeef9",
  measurementId: "G-PJHQ4GYYBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
