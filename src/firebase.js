// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo65FpigRLaOUhgurlhJ4XxodoUmT2eoE",
  authDomain: "naijaclientapp-7ab52.firebaseapp.com",
  projectId: "naijaclientapp-7ab52",
  storageBucket: "naijaclientapp-7ab52.firebasestorage.app",
  messagingSenderId: "840522676325",
  appId: "1:840522676325:web:465fdcd357b4cc96392e8c",
  measurementId: "G-Y1L0NPLRHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
