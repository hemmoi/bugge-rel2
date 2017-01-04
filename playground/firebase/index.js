import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDVIQ6Lh_tKvdFiuWJrRa_qEeB_yEmJE1k",
  authDomain: "mead-todo-app-21fab.firebaseapp.com",
  databaseURL: "https://mead-todo-app-21fab.firebaseio.com",
  storageBucket: "mead-todo-app-21fab.appspot.com",
  messagingSenderId: "847139835565"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('child added', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push({
  text: 'Walk the dog!'
});
var newTodoRef = todosRef.push({
  text: 'Kill the cat!'
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
// console.log('Todo id', newNoteRef.key);

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.child('user').on('value', logData);
//
// firebaseRef.child('user').update({
//   name: 'Terry'
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off(logData);
// firebaseRef.update({isRunning: false});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Mike'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//   name: 'Terry'
// });
//
// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();
