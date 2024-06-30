// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmnW-VYrYE4kBe3Cgwuu-BIn6rOqIlhPg",
  authDomain: "safe-5c601.firebaseapp.com",
  projectId: "safe-5c601",
  storageBucket: "safe-5c601.appspot.com",
  messagingSenderId: "368354891499",
  appId: "1:368354891499:web:f120ea468b59e23bed90ae",
};
initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
