// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyC9WtQpJviTHpvn1-5j7Xjj5FE2PuZDzZU",
    authDomain: "askmexfront-2b0ce.firebaseapp.com",
    projectId: "askmexfront-2b0ce",
    storageBucket: "askmexfront-2b0ce.appspot.com",
    messagingSenderId: "1081588098359",
    appId: "1:1081588098359:web:a2abe5e239a3ce5be3a6b2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();