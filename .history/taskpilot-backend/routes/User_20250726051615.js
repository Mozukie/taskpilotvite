import express from "express";
import { registerUser } from "../controllers/User.js";
import { loginUser } from "../controllers/User.js"; //  Assuming you have a login controller
import User from "../models/User.js"; // Import User model for validation
import { getUser } from "../controllers/User.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser); // Route for user login
router.get("/user/:id", getUser); // Route to get user details by ID


export default router;