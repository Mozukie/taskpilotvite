import '../CSS/Login.css'
import React from 'react'
import HeaderLogin from '../components/HeaderLogin.jsx'

function Login(){
    return (
        <div>
        <header>
            <HeaderLogin />
        </header>
        <h2>Welcom to TaskPilot!</h2>
        <div className="login-container">
            <h4>Login</h4>
            <form className="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Log In</button>
            </form>
        </div>
        
        </div>
    );
}

export default Login;