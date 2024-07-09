// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_V2,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_V2,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_V2,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_V2,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_V2,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_V2,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MESUREMENT_ID_V2
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};