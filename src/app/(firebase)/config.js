// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8nzB92zYnYfN9sVH3ZEsLnhzzjtOXWP8",
  authDomain: "authstore-verify.firebaseapp.com",
  projectId: "authstore-verify",
  storageBucket: "authstore-verify.appspot.com",
  messagingSenderId: "283292320004",
  appId: "1:283292320004:web:d6437ad2e5c7025c045051",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
