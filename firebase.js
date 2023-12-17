import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBGlJxzkEAlLJiu0GGNkIlNYmSJ30UtZ5o",
  authDomain: "theonlinehunt-3268b.firebaseapp.com",
  databaseURL:
    "https://theonlinehunt-3268b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "theonlinehunt-3268b",
  storageBucket: "theonlinehunt-3268b.appspot.com",
  messagingSenderId: "186291357760",
  appId: "1:186291357760:web:88bd4aa13dc67d446f77a5",
  measurementId: "G-F5WE56KLB9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

export { firebase, db };
