// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDn5pUAChI3l_cWmcT6_Sd2-KOwa1k9baY",
    authDomain: "internshala-4dd65.firebaseapp.com",
    projectId: "internshala-4dd65",
    storageBucket: "internshala-4dd65.appspot.com",
    messagingSenderId: "677586655285",
    appId: "1:677586655285:web:f5b93689a73b13ce25b97c",
    measurementId: "G-3Q7SXK64RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//Export
export {auth, provider}