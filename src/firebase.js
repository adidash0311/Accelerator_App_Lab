// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmTCEeNtze3EaM6WZYHV_Nj36h0oM9R3Y",
    authDomain: "accelerator-management.firebaseapp.com",
    projectId: "accelerator-management",
    storageBucket: "accelerator-management.appspot.com",
    messagingSenderId: "858725488765",
    appId: "1:858725488765:web:d39573e01f205b25487914",
    measurementId: "G-H65T6XD8NS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
