import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDxDUZcbSyx-xjlyXDxzpGfWRgRacWM3sI",
      authDomain: "todo-app-fb168.firebaseapp.com",
      databaseURL: "https://todo-app-fb168.firebaseio.com",
      storageBucket: "todo-app-fb168.appspot.com",
      messagingSenderId: "973486783208"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
