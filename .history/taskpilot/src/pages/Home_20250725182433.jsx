import React from "react";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to TaskPilot</h2>
        <p>Your personal task management assistant.</p>
      </main>
      <footer>
        <p>&copy; 2023 TaskPilot. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;