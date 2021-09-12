import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCZPXX6Es5Lgnxz9KpKhCNgxdqRWxRBLNw",
    authDomain: "news-tracker-3b7c3.firebaseapp.com",
    projectId: "news-tracker-3b7c3",
    storageBucket: "news-tracker-3b7c3.appspot.com",
    messagingSenderId: "637190936118",
    appId: "1:637190936118:web:a61619dd1cfce43898ea97",
    measurementId: "G-JLCBTMXF9K"
  };
  firebase.initializeApp(config);
  firebase.database().ref('articles');
  export default firebase;
