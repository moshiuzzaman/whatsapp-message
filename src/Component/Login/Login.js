import { Button } from '@material-ui/core';
import React from 'react';
import { firebaseConfig } from './FirebaseConfig';
import './login.css'
import firebase from "firebase/app";
import { useHistory, useLocation } from 'react-router-dom';
require("firebase/auth");


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const loginHandler=() => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log(result.user)
            sessionStorage.setItem('user', JSON.stringify(result.user))
            history.push(from)
          }).catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage)
            // ...
          });
    }

    return (
        <div className="login">
            <h1>Login now</h1>
            <Button onClick={loginHandler} className="login-btn" variant="contained">Login</Button>
        </div>
    );
};

export default Login;