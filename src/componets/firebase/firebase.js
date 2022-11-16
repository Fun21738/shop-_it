// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGMkdf_H35WPgnkDdFUU9ZBhyouIsXIXI",
  authDomain: "shop-it-d258b.firebaseapp.com",
  projectId: "shop-it-d258b",
  storageBucket: "shop-it-d258b.appspot.com",
  messagingSenderId: "764065703708",
  appId: "1:764065703708:web:20aaa6058db1f3c0d07cd9",
  measurementId: "G-7H2DBHWS60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);