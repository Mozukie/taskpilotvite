import React from 'react';
import { useState, useEffect } from 'react';
import '../CSS/Header.css';
import axios from 'axios';


function Header() {
  const [user, setUsers] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/:employee_id'); // Adjust the endpoint as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUser();
  }, []);
  
  return (
    <header className="header">
        <img src="/logo.png" alt="TaskPilot Logo" className="logo-image" />
      <nav>
        <ul className="header-nav">
          <a href="#home">Home</a>
          <a href="#tasks">Tasks</a>
          <a href="#settings">Settings</a>
          <a href="#about">About</a>
          <a href="profile">Hello,{user.first_name || " Guest"} !</a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;