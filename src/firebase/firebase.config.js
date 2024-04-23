// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvOiXZuM0o308Egb77xeAFuNuHPZ_2ars",
  authDomain: "conceptual-session-238fa.firebaseapp.com",
  projectId: "conceptual-session-238fa",
  storageBucket: "conceptual-session-238fa.appspot.com",
  messagingSenderId: "838509923131",
  appId: "1:838509923131:web:a34d6ab6eac3659e7e051e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;