// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARgqXDfm4KmfNTUzmkvOLTuCEnbqeRecw",
  authDomain: "speach-tutor.firebaseapp.com",
  projectId: "speach-tutor",
  storageBucket: "speach-tutor.appspot.com",
  messagingSenderId: "985719894563",
  appId: "1:985719894563:web:e55b76c78ece9d343eb796",
  measurementId: "G-Z3FGKBPXQQ"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }