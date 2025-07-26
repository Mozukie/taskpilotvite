// backend/routes/userRoutes.js
import express from "express";
import User from "../models/User.js";


const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { full_name, email, employee_id, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match!" });
    }else if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters long!" });
    }else if (!/^[a-zA-Z0-9]+$/.test(employee_id)) {
      return res.status(400).json({ error: "Employee ID must be alphanumeric!" });
    }else if (!/^[a-zA-Z\s]+$/.test(full_name)) {
      return res.status(400).json({ error: "Full name must contain only letters and spaces!" });
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email format!" });
    }else if (employee_id.length < 3 || employee_id.length > 10) {
      return res.status(400).json({ error: "Employee ID must be between 3 and 10 characters long!" });
    }else if (full_name.length < 3 || full_name.length > 50) {
      return res.status(400).json({ error: "Full name must be between 3 and 50 characters long!" });
    }else if (!/^[a-zA-Z0-9!@#$%^&*]{6,}$/.test(password)) {
      return res.status(400).json({ error: "Password must be at least 6 characters long and can include letters, numbers, and special characters!" });
    }else if (!full_name || !email || !employee_id || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required!" });
    }

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
