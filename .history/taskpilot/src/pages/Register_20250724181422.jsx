import React from "react";
import '../CSS/Register.css';

function Register(){
    return(
        <div className='register-wrapper'>
            <div className="register-page">
                <h2>Register</h2>
                <div className="register-container">
                    <h4>Create an Account</h4>
                        <form className="register-form">
                            <input type="text" placeholder="Full Name" id='full_name' required />
                            <input type="email" placeholder="Email" id='email' required />
                            <input type="text" placeholder="Employee Id" id='employee_id' required />
                            <input type="password" placeholder="Password" id='password' required />
                            <input type="password" placeholder="Confirm Password" id='confirm-password' required />
                            <button type="submit">Register</button>
                            <div>
                                <p>Already have an account?</p>
                                <a href="/login" className='login-button'>Login</a>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    );
}


export default Register;