import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMamm13_FFwJuJkiRM_63YRmSsRXDQ_64",
  authDomain: "fir-test-ea251.firebaseapp.com",
  projectId: "fir-test-ea251",
  storageBucket: "fir-test-ea251.appspot.com",
  messagingSenderId: "870773781931",
  appId: "1:870773781931:web:1ad944a8c3fb6acb394eee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;