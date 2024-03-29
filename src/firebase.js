import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQJls_KGGnSCE9bqwk1k2QBQAbb1ZsNn8",
    authDomain: "clone-e50ff.firebaseapp.com",
    projectId: "clone-e50ff",
    storageBucket: "clone-e50ff.appspot.com",
    messagingSenderId: "1090949392792",
    appId: "1:1090949392792:web:b3b49118df7f6ab1f963ed"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};