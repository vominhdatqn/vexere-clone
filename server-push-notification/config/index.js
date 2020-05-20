var firebase = require("firebase");
require("firebase/firestore");
const settings = { timestampsInSnapshots: true };
const firebaseConfig = {
  apiKey: "AIzaSyBo-0WwuojOE3UcjJ8Mu6RZaFNWmoJz5LQ",
  authDomain: "vexere-notification.firebaseapp.com",
  databaseURL: "https://vexere-notification.firebaseio.com",
  projectId: "vexere-notification",
  storageBucket: "vexere-notification.appspot.com",
  messagingSenderId: "598182128168",
  appId: "1:598182128168:web:ad46d0e05d971c5176231d",
  measurementId: "G-CP8J9CYS6K",
};
// Initialize Firebase
app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.firestore().settings(settings);
module.exports = app;
