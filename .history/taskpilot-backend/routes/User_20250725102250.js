// backend/routes/userRoutes.js
import express from "express";
import User from "../models/User.js";


const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { full_name, email, employee_id, password, confirmPassword } = req.body;

    const newUser = new User({
      full_name,
      email,
      employee_id,
      password, // 🚨 in production, hash this!
      confirmPassword // 🚨 in production, do not store this!
    });

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists!" });
    }

    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
