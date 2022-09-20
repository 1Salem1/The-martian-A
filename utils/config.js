import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCsC7xKrZEd2QmkuFYgKMOaawq2jlMsdQo",
    authDomain: "the-martian-1080d.firebaseapp.com",
    databaseURL: "https://the-martian-1080d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "the-martian-1080d",
    storageBucket: "the-martian-1080d.appspot.com",
    messagingSenderId: "119553467876",
    appId: "1:119553467876:web:4789224cf93baa8a3a13f1",
    measurementId: "G-098H4T0Y9M"
};

const app =  initializeApp(firebaseConfig);
export default app;