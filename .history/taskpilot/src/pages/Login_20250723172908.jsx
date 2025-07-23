import '../CSS/Login.css'
import React from 'react'
import HeaderLogin from '../components/HeaderLogin.jsx'

function Login(){
    return (
        <div>
        <header>
            <HeaderLogin />
        </header>
        <div className='login-wrapper'>
            <div className="login-page">
                <h2>Welcom to TaskPilot!</h2>
                    <div className="login-container">
                        <h4>Login</h4>
                        <form className="login-form">
                            
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                            <button type="submit">Log In</button>
                            
                            <div className='register-button'>
                            <p>Not yet registered?</p>
                                <a href="/register">Register</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;