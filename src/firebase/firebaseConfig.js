import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp({
    apiKey: "AIzaSyB8YiPJrZB_glv828TCVrQRhv8072hZ3DI",
    authDomain: "chatapp-c8883.firebaseapp.com",
    projectId: "chatapp-c8883",
    storageBucket: "chatapp-c8883.appspot.com",
    messagingSenderId: "896627883586",
    appId: "1:896627883586:web:52c1656a4aee16e28177db"
  })

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };