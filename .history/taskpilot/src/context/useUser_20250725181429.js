// src/context/useUser.js
import { useContext } from "react";
import { UserContext } from "./UserProvider";

export const useUser = () => useContext(UserContext);
// This custom hook allows components to access the user context easily.
