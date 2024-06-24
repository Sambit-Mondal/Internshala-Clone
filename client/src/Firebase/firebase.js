// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Firebase Auth imports
import {
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPopup,
    signOut
} from 'firebase/auth';

// Firebase firestore imports
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from 'firebase/firestore';

// Firebase Configurations
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
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);


// Sign In With Google
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "===", user.uid));
        const docs = await getDocs(q);

        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email
            })
        }
    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }
};


// Sign In Email and Password
const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }
}


// Register with Email and Password
const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }
}


// Password Reset Mail
const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password Reset Mail sent!");
    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }
}


// Logout function
const logOut = () => {
    signOut(auth);
}

//Export
export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logOut
};