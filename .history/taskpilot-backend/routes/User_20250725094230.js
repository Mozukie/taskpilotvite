// backend/routes/userRoutes.js
import express from "express";
import User from "../models/User.js";


const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { full_name, email, employee_id, password, confirmPassword } = req.body;

    // validate first
    if (!full_name || !email || !employee_id || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match!" });
    }

    const newUser = new User({
      full_name,
      email,
      employee_id,
      password, // 🚨 in production, hash this!
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
