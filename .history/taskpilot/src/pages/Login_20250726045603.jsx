import '../CSS/Login.css'
import React from 'react'
import axios from 'axios'
import HeaderLogin from '../components/HeaderLogin.jsx'

function Login(){
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            console.log('Login successful:', response.data);
            // Redirect to home or user profile page
            window.location.href = '/home';
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed. Please check your credentials.');
        }
    };  

    return (
        <div>
        <header>
            <HeaderLogin />
        </header>
        <div className='login-wrapper'>
            <div className="login-page">
                <h2>Welcome to TaskPilot!</h2>
                    <div className="login-container">
                        <h4>Login</h4>
                        <form className="login-form">
                            
                            <input type="text" name="email "placeholder="Email" id='email'/>
                            <input type="password" name='password' placeholder="Password" id='password'/>
                            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                            <button type="submit" onSubmit={handleSubmit} >Log In</button>
                            
                            <div>
                            <p>Don't have an account?</p>
                                <a href="/register" className='register-button'>Register</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;