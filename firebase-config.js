// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyAlAT2IBGRo0pTlrfK6QqmIx368UcyFZqI",
  authDomain: "school-web-9599f.firebaseapp.com",
  projectId: "school-web-9599f",
  storageBucket: "school-web-9599f.appspot.com",
  messagingSenderId: "941617380658",
  appId: "1:941617380658:web:411a50d9d350638b0dab2b",
  measurementId: "G-QMTK4DC6LP"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
