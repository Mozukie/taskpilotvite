import express from "express";
import { registerUser } from "../controllers/User.js";
import { loginUser } from "../controllers/User.js"; //  Assuming you have a login controller
import { getUser } from "../controllers/User.js";
import User from "../models/User.js"; // Import User model for validation
import { verifyToken } from "../middleware/auth.js"; // Assuming you have a JWT verification middleware

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser, verifyToken); // Route for user login
router.get("/user/:employee_id", getUser,); // Route to get user profile by ID



export default router;