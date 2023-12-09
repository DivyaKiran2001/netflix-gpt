// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsGHgp4rFxL-f_QJSSpzHFMu8BsrBGGrs",
  authDomain: "netflixgpt-15555.firebaseapp.com",
  projectId: "netflixgpt-15555",
  storageBucket: "netflixgpt-15555.appspot.com",
  messagingSenderId: "906385540752",
  appId: "1:906385540752:web:7144f1e510812058b33a15",
  measurementId: "G-B5XWT0PZPD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
