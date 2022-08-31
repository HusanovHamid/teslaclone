import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBd3wLEAOaWRVAy2i4GLOUgcyL_NJjgwR4",
    authDomain: "teslaclone-c69ff.firebaseapp.com",
    projectId: "teslaclone-c69ff",
    storageBucket: "teslaclone-c69ff.appspot.com",
    messagingSenderId: "649528516691",
    appId: "1:649528516691:web:7be9afc81697c77c4c66a6",
    measurementId: "G-BEWB3X809B"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export default firebase;