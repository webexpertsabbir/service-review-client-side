// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,


  apiKey: "AIzaSyAUHjEQMllJAXQwySRUNI1kJTLZjqsash0",
  authDomain: "service-5eae7.firebaseapp.com",
  projectId: "service-5eae7",
  storageBucket: "service-5eae7.appspot.com",
  messagingSenderId: "956442006959",
  appId: "1:956442006959:web:e4bc31e05aee6dfe590b5a",


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;