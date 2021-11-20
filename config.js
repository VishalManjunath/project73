import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAyLjxxpehBh1a66WKNZbUeXISwcweiSnw",
  authDomain: "project72-5d1d4.firebaseapp.com",
  projectId: "project72-5d1d4",
  storageBucket: "project72-5d1d4.appspot.com",
  messagingSenderId: "319588877609",
  appId: "1:319588877609:web:836ff6fade3c94fa7d6338"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

