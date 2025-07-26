import '../CSS/Login.css'
import React from 'react'
import HeaderLogin from '../components/HeaderLogin.jsx'

function Login(){
    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.email.value === '' || event.target.password.value === '') {
            alert("Please fill in all fields.");
            return;
        }try {
            const response = await axios.post("http://localhost:5000/api/login", {
                email: event.target.email.value,
                password: event.target.password.value
            });
            if (response.data.success) {
                alert("Login successful!");
                // Redirect to home page or perform other actions
                window.location.href = "/home";
            }
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please try again.");
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
                            <button type="submit" onChange={handleSubmit} >Log In</button>
                            
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