// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwvQc0ZWnsno5skY7sJ5Hx96FupvVf8t4",
  authDomain: "coffee-store-auth-344b5.firebaseapp.com",
  projectId: "coffee-store-auth-344b5",
  storageBucket: "coffee-store-auth-344b5.firebasestorage.app",
  messagingSenderId: "812286344885",
  appId: "1:812286344885:web:87569992279c921ae548fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);