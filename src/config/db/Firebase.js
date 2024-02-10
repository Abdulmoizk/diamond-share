import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQJEU5M0vhmwcQd_pLB4SRffm0fELEBdE",
  authDomain: "abdul-moiz-11cd1.firebaseapp.com",
  projectId: "abdul-moiz-11cd1",
  storageBucket: "abdul-moiz-11cd1.appspot.com",
  messagingSenderId: "47102300225",
  appId: "1:47102300225:web:4200ab9f6587d39a0776c0",
  measurementId: "G-LYSV7K6PSZ",
  databaseURL:
    "https://abdul-moiz-11cd1-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const storage = getStorage();
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {
  db,
  app,
  ref,
  set,
  onValue,
  remove,
  storage,
  storageRef,
  uploadBytesResumable,
  getDownloadURL,
  signInWithPopup,
  provider,
  auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
};
