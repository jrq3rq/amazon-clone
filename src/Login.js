import React, {useState} from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from 'firebase';
import { useStateValue } from "./StateProvider";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault(); // stops the frefresh
        // login logic 
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect to homepage...
                history.push('/');
            })
            .catch(e => alert(e.message));
    };

    const register = event => {
        event.preventDefault(); // stops the frefresh
        // register logic 
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //create a user and logged in, redirect to homepage

            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <link to="/"/>
                <img className="login_logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""
                />
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login_signinButton">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
