import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const { signinWithGoogle} = useAuth();
    const history = useNavigate();
    const location = useLocation();
    const redirects_url = location.state?.from || '/placeorder';

    const handleGoogleLogin = () => {
        signinWithGoogle()
        .then(result => {
            history(redirects_url);
        })
    }

    return (
        <div>
            <div className="container">
                <section id="content">
                    <form action="">
                        <h1>Login Form</h1>
                        <div>
                            <input type="text" placeholder="Username" required="" id="username" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" required="" id="password" />
                        </div>
                        <div>
                            <input type="submit" value="Log in" />
                            <Link to="#">Lost your password?</Link>
                        </div>
                    </form>
                    <div className="register">
                        <p>New to Boroloker Bazar?</p>
                        <Link to="#">Register</Link>
                    </div>
                    <br />
                    <div className="acc-signin">
                        <button className="main-btn" onClick={handleGoogleLogin}>Google Sign-in</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;