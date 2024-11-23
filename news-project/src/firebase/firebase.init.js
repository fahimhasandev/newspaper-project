// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuAak26__lhpEMr8lNrlcwME-WE3bMwRY",
  authDomain: "dragon-project-59a63.firebaseapp.com",
  projectId: "dragon-project-59a63",
  storageBucket: "dragon-project-59a63.firebasestorage.app",
  messagingSenderId: "845006731631",
  appId: "1:845006731631:web:6618b3ad0371f1c58c909a"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
