import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import  firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBVv2wqSox4Egu4lMOeP7XlHue1khiaF8I",
  authDomain: "cart-9bddb.firebaseapp.com",
  projectId: "cart-9bddb",
  storageBucket: "cart-9bddb.appspot.com",
  messagingSenderId: "676310282172",
  appId: "1:676310282172:web:b82742d1e2d433c6e945b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
