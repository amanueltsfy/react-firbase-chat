import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyDDK6bMiaerdH1mPzxHuoeN6UJayvzWSe8",
  authDomain: "react-chat-5d2d8.firebaseapp.com",
  projectId: "react-chat-5d2d8",
  storageBucket: "react-chat-5d2d8.appspot.com",
  messagingSenderId: "1009112037785",
  appId: "1:1009112037785:web:b070b6a70e7f4c94d6bb08",
  measurementId: "G-72HMS3W9CG",
});

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
