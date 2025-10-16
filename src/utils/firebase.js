// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjG1HhKBJOFsQoDdDEu5A5nK5-BpZSdgs",
  authDomain: "netflixgpt-6585e.firebaseapp.com",
  projectId: "netflixgpt-6585e",
  storageBucket: "netflixgpt-6585e.firebasestorage.app",
  messagingSenderId: "1012451421347",
  appId: "1:1012451421347:web:2d645dc871ed37b421e316",
  measurementId: "G-QQ9SMCZC0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();