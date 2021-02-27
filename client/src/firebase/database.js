import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmiMzQ1N71H3g8Dq623QKm8leIlgvWt8U",
    authDomain: "cardiomyopathy-7953a.firebaseapp.com",
    projectId: "cardiomyopathy-7953a",
    storageBucket: "cardiomyopathy-7953a.appspot.com",
    messagingSenderId: "987760153646",
    appId: "1:987760153646:web:ef35aa6575e9d67618bbbf"
};

firebase.initializeApp(firebaseConfig);
const firebaseAuthentication = firebase.auth();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {firebaseAuthentication, firebaseFireStore, timestamp};
