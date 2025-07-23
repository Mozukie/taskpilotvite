import Reactc from "react";
import '../CSS/Header.css';

function HeaderLogin() {
  return (
    <header className="header">
        <img src="./public/logo.png" alt="TaskPilot Logo" className="logo-image" />
      <nav>
        <ul className="header-nav">
          <a href="#home">Home</a>
          <a href="#tasks">Tasks</a>
          <a href="#about">About</a>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderLogin;