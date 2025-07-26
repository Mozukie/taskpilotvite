// src/context/useUser.js
import { useContext } from "react";
import { UserContext } from "./UserContext"; // ✅ FIXED — this was likely importing from UserProvider.jsx

export const useUser = () => useContext(UserContext);
