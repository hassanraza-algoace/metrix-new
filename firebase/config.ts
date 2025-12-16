import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC-v36nE3ifXgVvY8M5Mfmi2H_U3TLFyKE",
  authDomain: "metrix-f53a9.firebaseapp.com",
  projectId: "metrix-f53a9",
  storageBucket: "metrix-f53a9.firebasestorage.app",
  messagingSenderId: "861110115362",
  appId: "1:861110115362:web:efde690956c39cfa18fe7b",
  measurementId: "G-YXNZ50ERFR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Yeh add karna hai

// Firebase Analytics must run in the browser; guard for server/build time.
export const analytics: Analytics | null =
  typeof window !== "undefined" ? getAnalytics(app) : null;
