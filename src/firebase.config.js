
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDj6HyBjAEZTRgP_sIvNV5AjL9IjsBiVgY",
  authDomain: "event-management-5df15.firebaseapp.com",
  projectId: "event-management-5df15",
  storageBucket: "event-management-5df15.appspot.com",
  messagingSenderId: "985508183024",
  appId: "1:985508183024:web:40aea8f93847ccaf98fb35"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);