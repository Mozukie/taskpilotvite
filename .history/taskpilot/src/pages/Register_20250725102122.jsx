import React from "react";
import axios from "axios";
import '../CSS/Register.css';
import { useForm } from "react-hook-form";

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

    const handleSubmit = useForm{
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
    }else if (form.password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        } else if (!form.full_name || !form.email || !form.employee_id || !form.password || !form.confirmPassword) {
            alert("All fields are required!");
            return;
        }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            alert("Please enter a valid email address!");
            return;
        }else if (!/^[a-zA-Z0-9]+$/.test(form.employee_id)) {
            alert("Employee ID can only contain letters and numbers!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                full_name: form.full_name,
                email: form.email,
                employee_id: form.employee_id,
                password: form.password,
                confirmPassword: form.confirmPassword
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