import React from "react";
import { useState, useEffect } from "react";

function UserGreetings({ user }) {
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

export default UserGreetings;