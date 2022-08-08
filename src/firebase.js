// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPx5Wtm0RGIGcH2_MG8Lh5ugPNKPm6ie8",
  authDomain: "autoescuelaclickanddrive.firebaseapp.com",
  projectId: "autoescuelaclickanddrive",
  storageBucket: "autoescuelaclickanddrive.appspot.com",
  messagingSenderId: "159450973030",
  appId: "1:159450973030:web:c9f3fe05e4b64dcf437ea7",
  measurementId: "G-GHMRF6WXZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
