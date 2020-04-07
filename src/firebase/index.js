import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
      apiKey: "AIzaSyCQReZwsOdD88q01m9kxsGMMIbndRvSERI",
      authDomain: "image-uplod-da5db.firebaseapp.com",
      databaseURL: "https://image-uplod-da5db.firebaseio.com",
      projectId: "image-uplod-da5db",
      storageBucket: "image-uplod-da5db.appspot.com",
      messagingSenderId: "91999825439",
      appId: "1:91999825439:web:dea21c8fe3f1fe3545af2a",
      measurementId: "G-PVWQEFHDS8"
    };

    firebase.initializeApp(firebaseConfig);


    const storage = firebase.storage();

    export {
      storage,firebase  as default

    }