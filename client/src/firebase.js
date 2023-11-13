// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-9ace5.firebaseapp.com",
  projectId: "mernestate-9ace5",
  storageBucket: "mernestate-9ace5.appspot.com",
  messagingSenderId: "186196215976",
  appId: "1:186196215976:web:5039006e3e94a5cb361a9d",
  measurementId: "G-RPC0M8PNHF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);