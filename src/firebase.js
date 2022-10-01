import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnPaUFie2VKkXVr8ZEmK5r7EeGbP5Okng",
  authDomain: "react-emart-4cde3.firebaseapp.com",
  projectId: "react-emart-4cde3",
  storageBucket: "react-emart-4cde3.appspot.com",
  messagingSenderId: "271268920815",
  appId: "1:271268920815:web:7f82dce60b8158fd65ca1a"
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use for db
const db = firebaseapp.firestore()
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, googleProvider, facebookProvider } 