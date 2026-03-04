import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYPLP2nV_AFN5jA2Lr7V0BrxnGS0xpu9s",
  authDomain: "summarist-bf6ca.firebaseapp.com",
  projectId: "summarist-bf6ca",
  storageBucket: "summarist-bf6ca.firebasestorage.app",
  messagingSenderId: "181514918415",
  appId: "1:181514918415:web:63ad96e03ff5625ed9217a",
  measurementId: "G-ZD48M41TKZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
