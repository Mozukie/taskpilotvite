import React from "react";
import '../CSS/Header.css';

function HeaderLogin() {
  return (
    <header className="header">
        <img src="/logo.png" alt="TaskPilot Logo" className="logo-image" />
      <nav>
        <ul className="header-nav">
            <a href="/login">Login</a>
            <a href="/about">About</a>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderLogin;