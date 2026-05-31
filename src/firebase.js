import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLOlNLUT49x7tEocopz-9M1mLZphlP_40",
  authDomain: "web-project-final-35d11.firebaseapp.com",
  projectId: "web-project-final-35d11",
  storageBucket: "web-project-final-35d11.appspot.com",
  messagingSenderId: "701923698400",
  appId: "1:701923698400:web:ef313289871dbc64241285",
  measurementId: "G-9MGRPGXZRH",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
