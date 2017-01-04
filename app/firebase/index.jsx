import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDVIQ6Lh_tKvdFiuWJrRa_qEeB_yEmJE1k",
    authDomain: "mead-todo-app-21fab.firebaseapp.com",
    databaseURL: "https://mead-todo-app-21fab.firebaseio.com",
    storageBucket: "mead-todo-app-21fab.appspot.com",
    messagingSenderId: "847139835565"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;
