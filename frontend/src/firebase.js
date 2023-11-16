// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7qmx5INoMth45zEV7FH72a5CpI0VAk8I",
  authDomain: "stackoverflow-26989.firebaseapp.com",
  projectId: "stackoverflow-26989",
  storageBucket: "stackoverflow-26989.appspot.com",
  messagingSenderId: "498710801824",
  appId: "1:498710801824:web:ffb6337d996c63da1dc8c5",
  measurementId: "G-KC53E7G8LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const provider=new GoogleAuthProvider();
