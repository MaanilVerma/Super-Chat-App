import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyB8YiPJrZB_glv828TCVrQRhv8072hZ3DI",
    authDomain: "chatapp-c8883.firebaseapp.com",
    projectId: "chatapp-c8883",
    storageBucket: "chatapp-c8883.appspot.com",
    messagingSenderId: "896627883586",
    appId: "1:896627883586:web:52c1656a4aee16e28177db"
  };

  // Initialize Firebase



  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;