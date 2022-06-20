// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFTjGT-okVTfN9PWfU2cXR8XF0NYaddXw",
  authDomain: "router-firebase-integrat-bf1d5.firebaseapp.com",
  projectId: "router-firebase-integrat-bf1d5",
  storageBucket: "router-firebase-integrat-bf1d5.appspot.com",
  messagingSenderId: "330278028546",
  appId: "1:330278028546:web:7a56fd16d370f0b7b26e1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
