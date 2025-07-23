import React from "react";
import logo from "../public/logo.png";
import { Link } from "react-router-dom";
import About from "../pages/About";
import '../CSS/Header.css';

function HeaderLogin() {
  return (
    <header className="header">
        <img src={logo} alt="TaskPilot Logo" className="logo-image" />
      <nav>
        <ul className="header-nav">
          <a href="/about">About</a>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderLogin;