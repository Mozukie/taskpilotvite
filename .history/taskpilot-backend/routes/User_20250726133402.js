import express from "express";
import { registerUser } from "../controllers/User.js";
import { loginUser } from "../controllers/User.js"; //  Assuming you have a login controller
import User from "../models/User.js"; // Import User model for validation

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser); // Route for user login

const validateUser = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ error: "User not found!" });
        }
    }catch (error) {
        console.error("Error validating user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
  next();
};

export default router;