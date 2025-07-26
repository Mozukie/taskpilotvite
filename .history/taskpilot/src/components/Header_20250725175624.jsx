import React  from 'react';
import { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import '../CSS/Header.css';

function Header() {
const { user } = useUser();
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