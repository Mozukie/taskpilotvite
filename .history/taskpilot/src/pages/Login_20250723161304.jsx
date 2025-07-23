import '../CSS/Login.css'
import React from 'react'

function Login(){
    return (
        <div>
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