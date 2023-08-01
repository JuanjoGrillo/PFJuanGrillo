import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCV-QajfGKN5DwyF4RydZ2uShZz6FLK8sE",
  authDomain: "disqueria-3fe7f.firebaseapp.com",
  projectId: "disqueria-3fe7f",
  storageBucket: "disqueria-3fe7f.appspot.com",
  messagingSenderId: "664556021636",
  appId: "1:664556021636:web:b4b4385c76deab503e9fd1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider;
