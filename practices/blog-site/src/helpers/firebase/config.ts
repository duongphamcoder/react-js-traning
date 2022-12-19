import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDujQ211O3uvRSZFfzG27NG9g9H0mKvfJg",
    authDomain: "blog-site-66302.firebaseapp.com",
    projectId: "blog-site-66302",
    storageBucket: "blog-site-66302.appspot.com",
    messagingSenderId: "913635394924",
    appId: "1:913635394924:web:10e77a9eb159a864649f49",
    measurementId: "G-RXCVBW85N8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
