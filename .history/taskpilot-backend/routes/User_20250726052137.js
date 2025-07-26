import express from "express";
import { registerUser } from "../controllers/User.js";
import { loginUser } from "../controllers/User.js"; //  Assuming you have a login controller
import User from "../models/User.js"; // Import User model for validation

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser); // Route for user login
router.get("/user", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
    } catch (error) {
    return res.status(500).json({ error: error.message });
    }
});

export default router;