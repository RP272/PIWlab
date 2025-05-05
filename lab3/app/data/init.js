import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDsemzegdg1laagDcddpLAfW9wc3Kzs1SI",
    authDomain: "piwo3labmoj123.firebaseapp.com",
    projectId: "piwo3labmoj123",
    storageBucket: "piwo3labmoj123.firebasestorage.app",
    messagingSenderId: "229919185088",
    appId: "1:229919185088:web:4cfcb5dad69878d151f525",
    measurementId: "G-065BVS4JY6"
  };

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
