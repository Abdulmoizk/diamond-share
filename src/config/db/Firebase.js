import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue,remove, } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBQJEU5M0vhmwcQd_pLB4SRffm0fELEBdE",
  authDomain: "abdul-moiz-11cd1.firebaseapp.com",
  projectId: "abdul-moiz-11cd1",
  storageBucket: "abdul-moiz-11cd1.appspot.com",
  messagingSenderId: "47102300225",
  appId: "1:47102300225:web:4200ab9f6587d39a0776c0",
  measurementId: "G-LYSV7K6PSZ",
  databaseURL: "https://abdul-moiz-11cd1-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, app, ref, set, onValue, remove ,};
