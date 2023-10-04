
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAtyE1AhGStASntH1xJ0ansMFAz9KU5vlc",
  authDomain: "nova-pizzaria-445f3.firebaseapp.com",
  databaseURL: "https://nova-pizzaria-445f3-default-rtdb.firebaseio.com",
  projectId: "nova-pizzaria-445f3",
  storageBucket: "nova-pizzaria-445f3.appspot.com",
  messagingSenderId: "752552112786",
  appId: "1:752552112786:web:c03bebe820fc5893152c4b",
  measurementId: "G-447GG9VZ33"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);
export { db }