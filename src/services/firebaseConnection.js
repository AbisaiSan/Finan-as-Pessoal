import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
  apiKey: "AIzaSyAphF77J3hzYzMCMrnfeGNtGsrsdNbUyzA",
  authDomain: "appfinancas-9e6e9.firebaseapp.com",
  databaseURL: "https://appfinancas-9e6e9.firebaseio.com",
  projectId: "appfinancas-9e6e9",
  storageBucket: "appfinancas-9e6e9.appspot.com",
  messagingSenderId: "670010830145",
  appId: "1:670010830145:web:434b863edf47f570b8c5c0",
  measurementId: "G-HFBFK4BW9B"
};

if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;