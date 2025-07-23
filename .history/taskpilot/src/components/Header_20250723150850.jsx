import Reactc from "react";

function Header() {
  return (
    <header className="header">
        <img src="./public/logo.png" alt="TaskPilot Logo" className="logo-image" />
      <h1>TaskPilot</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#tasks">Tasks</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;