import React from 'react';
import { useState, useEffect } from 'react';
import '../CSS/Header.css';
import { get } from 'mongoose';

function Header() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await get('http://localhost:5000/api/user/');
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
          <a href="profile">Hello,{user?.first_name || " Guest"} !</a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;