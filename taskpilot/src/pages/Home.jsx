import React, { useEffect } from "react";
import Header from "../components/Header";

function Home() {
    const [userName, setUserName] = React.useState("");

    useEffect(() => async () => {
        try {
            const response = await fetch("http://localhost:5000/api/user/{$employee_id}");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setUserName(data.first_name || "Guest");
        } catch (error) {
            console.error("Error fetching user profile:", error);
            setUserName("Guest");
        }
    }, []);

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