import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
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
                            <Link to="#">Register</Link>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Login;