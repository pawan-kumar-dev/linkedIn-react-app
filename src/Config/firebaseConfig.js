import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3NevTR884CaTm5Lb-BCnR1NBDymBXq-g",
  authDomain: "linkedin-react-app-e1ee4.firebaseapp.com",
  projectId: "linkedin-react-app-e1ee4",
  storageBucket: "linkedin-react-app-e1ee4.appspot.com",
  messagingSenderId: "706130479336",
  appId: "1:706130479336:web:f8e0dfcc48ab227a0ba15d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storageDb = firebaseApp.storage();

export { db, storageDb };
