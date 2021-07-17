import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAtiCLA1wCNeEC9vFU1glXpyL8DqzM88zk",
  authDomain: "finaloutput-f397f.firebaseapp.com",
  projectId: "finaloutput-f397f",
  storageBucket: "finaloutput-f397f.appspot.com",
  messagingSenderId: "605118140654",
  appId: "1:605118140654:web:5ed9dd923706f434b663ff"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
