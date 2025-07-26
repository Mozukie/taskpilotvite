import express from "express";
import { registerUser } from "../controllers/User.js";
import { loginUser } from "../controllers/User.js"; //  Assuming you have a login controller
import User from "../models/User.js"; // Import User model for validation

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser); // Route for user login
router.get("api/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.employee_id);   
    if (!user) {    
        return res.status(404).json({ error: "User not found!" });
        }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;