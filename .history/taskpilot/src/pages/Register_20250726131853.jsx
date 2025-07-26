import React from "react";
import axios from "axios";
import '../CSS/Register.css';

function Register() {
  const [form, setForm] = React.useState({
    first_name: '',
    last_name: '',
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        password: form.password,
        employee_id: form.employee_id,
        confirmPassword: form.confirmPassword
      });

      alert(response.data.message); // Show success message
      setForm({
        first_name: '',
        last_name: '',
        email: '',
        employee_id: '',
        password: '',
        confirmPassword: ''
      });

      // ✅ Redirect to login page
      window.location.href = '/login';

    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className='register-wrapper'>
      <div className="register-page">
        <h2>Register</h2>
        <div className="register-container">
          <h4>Create an Account</h4>
          <form onSubmit={handleSubmit} className="register-form">
            <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} required />
            <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="employee_id" placeholder="Employee ID" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
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
