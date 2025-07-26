// src/context/UserProvider.jsx
import React, { useState, useEffect } from "react";
import { UserContext } from "./UserProvider";

const UserProvider = ({ children }) => {
  const [User, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/User/");
        const data = await res.json();
        setUser(data[0]);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ User, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

