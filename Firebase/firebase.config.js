// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwy3mLN5NKY3AiHqpMD2lLlPQHxm0mh5M",
  authDomain: "assignment-11-c6245.firebaseapp.com",
  projectId: "assignment-11-c6245",
  storageBucket: "assignment-11-c6245.firebasestorage.app",
  messagingSenderId: "587890321149",
  appId: "1:587890321149:web:ed5cf72a0e8909bd134094",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
