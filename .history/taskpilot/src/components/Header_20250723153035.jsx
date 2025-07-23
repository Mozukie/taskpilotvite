import Reactc from "react";
import '../CSS/Header.css';

function Header() {
  return (
    <header className="header">
        <img src="./public/logo.png" alt="TaskPilot Logo" className="logo-image" />
      <nav>
        <ul>
          <a href="#home">Home</a>
          <a href="#tasks">Tasks</a>
          <a href="#settings">Settings</a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;