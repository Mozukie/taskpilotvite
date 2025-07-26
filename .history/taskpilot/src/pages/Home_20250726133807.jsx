import React from "react";
import Header from "../components/Header";

function Home() {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const userName = user.first_name || "Guest";
    const userId = user._id || "unknown";
    console.log("User ID:", userId); // Log the user ID for debugging
    console.log("User Name:", userName); // Log the user name for debugging
    // You can use userId and userName in your component as needed
    return (
        <div>
            <Header />
            <main>
                <h2>Welcome, {userName}!</h2>
                <p>Your personal task management assistant.</p>
            </main>
            <footer>
                <p>&copy; 2023 TaskPilot. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;