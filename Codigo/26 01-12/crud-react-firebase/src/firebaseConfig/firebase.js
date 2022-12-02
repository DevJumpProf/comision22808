
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCwRvBeF1gW_vSNG3QR8BqF9ZIslW1IlSk",
  authDomain: "crud-808-gaby.firebaseapp.com",
  projectId: "crud-808-gaby",
  storageBucket: "crud-808-gaby.appspot.com",
  messagingSenderId: "832996657080",
  appId: "1:832996657080:web:8ec49631c6ece8c43bf14d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)