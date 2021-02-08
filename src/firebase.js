import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHeVjBcpES8ZmLyiTYcuAO8ws4EyAqEA0",
  authDomain: "netflix-clone-d085e.firebaseapp.com",
  projectId: "netflix-clone-d085e",
  storageBucket: "netflix-clone-d085e.appspot.com",
  messagingSenderId: "83435385855",
  appId: "1:83435385855:web:5cdc20568f1875a0226dca",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // database realtime
const auth = firebase.auth(); // auth for users

export { auth };
export default db;
