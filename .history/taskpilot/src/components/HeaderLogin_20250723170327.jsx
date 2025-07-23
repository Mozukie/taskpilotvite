import React from "react";
import About from "../pages/About";
import '../CSS/Header.css';

function HeaderLogin() {
  return (
    <header className="header">
        <img src="./public/logo.png" alt="TaskPilot Logo" className="logo-image" />
      <nav>
        <ul className="header-nav">
          <a href="#bout">About</a>

        </ul>
      </nav>
    </header>
  );
}

export default HeaderLogin;