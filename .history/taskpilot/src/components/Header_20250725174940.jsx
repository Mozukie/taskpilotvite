import React from "react";
import { useEffect } from "react";
import '../CSS/Header.css';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user/');
        const data = await response.json();
        setUser(data[0]); // Adjust if your response shape differs
      } catch (error) {
        console.error("Error fetching user data:", error);
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
          <a href="profile">Hello,{user?.first_name || "Guest"} !</a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;