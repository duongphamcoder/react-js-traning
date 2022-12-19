// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDujQ211O3uvRSZFfzG27NG9g9H0mKvfJg",
    authDomain: "blog-site-66302.firebaseapp.com",
    projectId: "blog-site-66302",
    storageBucket: "blog-site-66302.appspot.com",
    messagingSenderId: "913635394924",
    appId: "1:913635394924:web:10e77a9eb159a864649f49",
    measurementId: "G-RXCVBW85N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const database = getDatabase(app);