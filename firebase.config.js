// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtyE1AhGStASntH1xJ0ansMFAz9KU5vlc",
    authDomain: "nova-pizzaria-445f3.firebaseapp.com",
    projectId: "nova-pizzaria-445f3",
    storageBucket: "nova-pizzaria-445f3.appspot.com",
    messagingSenderId: "752552112786",
    appId: "1:752552112786:web:c03bebe820fc5893152c4b",
    measurementId: "G-447GG9VZ33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);