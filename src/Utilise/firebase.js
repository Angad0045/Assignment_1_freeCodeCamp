// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqc75J8ES4-wruK25NE8B8BgcWKrcYGQE",
  authDomain: "assignment-freecodecamp.firebaseapp.com",
  projectId: "assignment-freecodecamp",
  storageBucket: "assignment-freecodecamp.appspot.com",
  messagingSenderId: "991164085133",
  appId: "1:991164085133:web:65f1c12e4666fd487c43c4",
  measurementId: "G-GFDGYCW149",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
