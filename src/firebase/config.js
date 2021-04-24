import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



var firebaseConfig = {
    apiKey: "AIzaSyBCbvQn1AqYMC4W5ycETWi5J1ytT1mUeqc",
    authDomain: "firegram-b265e.firebaseapp.com",
    projectId: "firegram-b265e",
    storageBucket: "firegram-b265e.appspot.com",
    messagingSenderId: "106130630151",
    appId: "1:106130630151:web:f2a268f65f8ae1b26e2ca2"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const projectStorage= firebase.storage();
 const projectFirestore= firebase.firestore();
 const timestamp= firebase.firestore.FieldValue.serverTimestamp;
 export {projectStorage, projectFirestore, timestamp};
