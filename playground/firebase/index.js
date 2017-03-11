import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDxDUZcbSyx-xjlyXDxzpGfWRgRacWM3sI",
    authDomain: "todo-app-fb168.firebaseapp.com",
    databaseURL: "https://todo-app-fb168.firebaseio.com",
    storageBucket: "todo-app-fb168.appspot.com",
    messagingSenderId: "973486783208"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('new todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'todo 1'
});

todosRef.push({
  text: 'todo 2'
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'walk the dog!'
// });
// console.log('Todo id', newNoteRef.key);

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('unable to fetch alue', e);
// });

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});
