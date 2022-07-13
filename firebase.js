// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9WtQpJviTHpvn1-5j7Xjj5FE2PuZDzZU",
  authDomain: "askmexfront-2b0ce.firebaseapp.com",
  projectId: "askmexfront-2b0ce",
  storageBucket: "askmexfront-2b0ce.appspot.com",
  messagingSenderId: "1081588098359",
  appId: "1:1081588098359:web:a2abe5e239a3ce5be3a6b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";