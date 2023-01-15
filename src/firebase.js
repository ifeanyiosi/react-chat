// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT7a_tOVYvrdpGmHPx7h-JUe7pBcbWOfM",
  authDomain: "react-chat-e9b97.firebaseapp.com",
  projectId: "react-chat-e9b97",
  storageBucket: "react-chat-e9b97.appspot.com",
  messagingSenderId: "739465497642",
  appId: "1:739465497642:web:c6dc11f04a1f0573c80753",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
