import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyBDgWmeZFaZJiRCxIIsTtINZwtQuVK7Me8",
  authDomain: "clone-71e58.firebaseapp.com",
  databaseURL: "https://clone-71e58.firebaseio.com",
  projectId: "clone-71e58",
  storageBucket: "clone-71e58.appspot.com",
  messagingSenderId: "808227911053",
  appId: "1:808227911053:web:daf39ed68ca4c137f4f9c4",
  measurementId: "G-L8C5MJELGY"

})

const auth = firebase.auth();

export { auth };