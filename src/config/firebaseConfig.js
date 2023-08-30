// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbDhrkxjZzfJMORjacoTvouz5NBDTnG54",
  authDomain: "mugen-a8c42.firebaseapp.com",
  projectId: "mugen-a8c42",
  storageBucket: "mugen-a8c42.appspot.com",
  messagingSenderId: "551018902385",
  appId: "1:551018902385:web:176782e0eb72799e867cd0",
  measurementId: "G-X7PDG74F8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);