// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZrBgYSZ3PaN6SyAGHVq-hm5yJ8X0i4aI",
    authDomain: "nexviewgpt.firebaseapp.com",
    projectId: "nexviewgpt",
    storageBucket: "nexviewgpt.appspot.com",
    messagingSenderId: "95899519717",
    appId: "1:95899519717:web:16b2c903f602809613620c",
    measurementId: "G-2QBMLCFVVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth() ;