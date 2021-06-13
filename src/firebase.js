// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAHpfSzhUoCyK2_AsFV4pExCBfesfGYJT4",
//   authDomain: "todo-app-cp-251ff.firebaseapp.com",
//   projectId: "todo-app-cp-251ff",
//   storageBucket: "todo-app-cp-251ff.appspot.com",
//   messagingSenderId: "640344401717",
//   appId: "1:640344401717:web:bca6899b4d6d0a05470e7c",
//   measurementId: "G-02TJK2YG1Q",
// };
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAHpfSzhUoCyK2_AsFV4pExCBfesfGYJT4",
  authDomain: "todo-app-cp-251ff.firebaseapp.com",
  projectId: "todo-app-cp-251ff",
  storageBucket: "todo-app-cp-251ff.appspot.com",
  messagingSenderId: "640344401717",
  appId: "1:640344401717:web:bca6899b4d6d0a05470e7c",
  measurementId: "G-02TJK2YG1Q",
});
const db = firebaseApp.firestore();
export default db;
