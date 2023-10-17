// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr3kPj8sjmTr0JA6VNtXa13TpJjhqHEVQ",
  authDomain: "assignment10-brand-shop.firebaseapp.com",
  projectId: "assignment10-brand-shop",
  storageBucket: "assignment10-brand-shop.appspot.com",
  messagingSenderId: "478852924466",
  appId: "1:478852924466:web:e2b1da0f569611a145a82b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
