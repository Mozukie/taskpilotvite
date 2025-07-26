import React from "react";
import axios from "axios";
import '../CSS/Register.css';

function Register(){
    const [form, setForm] = React.useState({
        full_name: '',
        email: '',  
        employee_id: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const response = await axios.post("http://localhost:5000/api/register", {
                full_name: form.fullName,
                email: form.email,
                password: form.password,
                employee_id: form.employee_id,
                "confirm-password": form.confirmPassword, // if you're using this for validation
                });

            alert(response.data.message);
            setForm({
                full_name: '',
                email: '',
                employee_id: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.error);
            } else {
                alert("An error occurred. Please try again.");
            }
        }
    }


    return(
        <div className='register-wrapper'>
            <div className="register-page">
                <h2>Register</h2>
                <div className="register-container">
                    <h4>Create an Account</h4>
                        <form onSubmit={handleSubmit} className="register-form">
                            <input type="text" placeholder="Full Name" id='full_name' onChange={handleChange} required />
                            <input type="email" placeholder="Email" id='email' onChange={handleChange} required />
                            <input type="text" placeholder="Employee Id" id='employee_id' onChange={handleChange} required />
                            <input type="password" placeholder="Password" id='password' onChange={handleChange} required />
                            <input type="password" placeholder="Confirm Password" id='confirmPassword'onChange={handleChange} required />
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