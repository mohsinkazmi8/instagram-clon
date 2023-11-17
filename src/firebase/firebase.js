// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpcBGhggZirVzCKgwFWbDIi-Vl7icLvOY",
  authDomain: "instagram-clon-3571e.firebaseapp.com",
  projectId: "instagram-clon-3571e",
  storageBucket: "instagram-clon-3571e.appspot.com",
  messagingSenderId: "538788200754",
  appId: "1:538788200754:web:e2eb10e218c87b8f6d972b",
  measurementId: "G-2F7HP84RWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);