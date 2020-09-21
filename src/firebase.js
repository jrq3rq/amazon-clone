import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHNoxW84za6r0oRuU2vUJcyhmWmILMCCs",
    authDomain: "clone-1e5a6.firebaseapp.com",
    databaseURL: "https://clone-1e5a6.firebaseio.com",
    projectId: "clone-1e5a6",
    storageBucket: "clone-1e5a6.appspot.com",
    messagingSenderId: "266548126202",
    appId: "1:266548126202:web:8bc9b5fdf3af57bf518443",
    measurementId: "G-P8F1D7TSC9"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

// export { db, auth };
export { auth };