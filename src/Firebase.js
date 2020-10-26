import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjVBOjIG1XP0JQ31weHeSkLg7EyM79L9I",
    authDomain: "whatsapp-clone-5ede4.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-5ede4.firebaseio.com",
    projectId: "whatsapp-clone-5ede4",
    storageBucket: "whatsapp-clone-5ede4.appspot.com",
    messagingSenderId: "146038007544",
    appId: "1:146038007544:web:7095184432320a025c3d0d",
    measurementId: "G-KQYQY0QR0N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;