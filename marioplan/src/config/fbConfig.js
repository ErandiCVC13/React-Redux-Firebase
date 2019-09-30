// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC5SMcxqYNwTeoiltEqd5YWu1i5isfGezU",
  authDomain: "mario-plan-c7e79.firebaseapp.com",
  databaseURL: "https://mario-plan-c7e79.firebaseio.com",
  projectId: "mario-plan-c7e79",
  storageBucket: "",
  messagingSenderId: "819005550772",
  appId: "1:819005550772:web:60e181c434d9dac74a27e1",
  measurementId: "G-HJ68DQVEW7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
