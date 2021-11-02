import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
var firebaseConfig = {
  apiKey: "AIzaSyAIv01BJarFlPo-N81pzxYtWZ1521QZmH8",
  authDomain: "aydotdeveloperschatapp.firebaseapp.com",
  databaseURL: "https://aydotdeveloperschatapp-default-rtdb.firebaseio.com/",
  projectId: "aydotdeveloperschatapp",
  storageBucket: "aydotdeveloperschatapp.appspot.com",
  messagingSenderId: "355324192292",
  appId: "1:355324192292:web:83c4b95c2e4334ef751ab1",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
