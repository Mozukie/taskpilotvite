import express from "express";
import { registerUser } from "../controllers/User.js";
import { loginUser } from "../controllers/User.js"; //  Assuming you have a login controller
import { getUser } from "../controllers/User.js";
import { verifyToken } from "../middleware/auth.js"; // Assuming you have a JWT verification middleware

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser); // Route for user login
router.get("/user/:employee_id", getUser, verifyToken); // Route to get user profile by ID



export default router;