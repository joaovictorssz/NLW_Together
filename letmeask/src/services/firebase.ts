import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCFArPzX44CwZib1iU3i9NUaTiCTiaw9uc",
  authDomain: "letmeask0.firebaseapp.com",
  databaseURL: "https://letmeask0-default-rtdb.firebaseio.com",
  projectId: "letmeask0",
  storageBucket: "letmeask0.appspot.com",
  messagingSenderId: "105804299677",
  appId: "1:105804299677:web:4c34f1f257463c8e8d0374"
};

// Initialize Firebase

initializeApp(firebaseConfig);

export const auth  = getAuth();
export const database = getDatabase();
