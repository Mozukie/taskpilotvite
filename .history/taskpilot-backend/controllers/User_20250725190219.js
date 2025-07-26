import User from "../models/User.js";
import mongoose from "mongoose";


const registerUser = async (req, res) => {
  try {
    const { first_name, last_name, email, employee_id, password, confirmPassword } = req.body;

    // Validation
    if (!first_name || !last_name || !email || !employee_id || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match!" });
    }

    if (password.length < 6 || !/^[a-zA-Z0-9!@#$%^&*]{6,}$/.test(password)) {
      return res.status(400).json({
        error: "Password must be at least 6 characters long and can include letters, numbers, and special characters!",
      });
    }

    if (!/^[a-zA-Z0-9]+$/.test(employee_id)) {
      return res.status(400).json({ error: "Employee ID must be alphanumeric!" });
    }

    if (!/^[a-zA-Z\s]+$/.test(first_name) || first_name.length < 3 || first_name.length > 50) {
      return res.status(400).json({ error: "First name must be 3–50 letters long and contain only letters/spaces!" });
    }

    if (!/^[a-zA-Z\s]+$/.test(last_name) || last_name.length < 3 || last_name.length > 50) {
      return res.status(400).json({ error: "Last name must be 3–50 letters long and contain only letters/spaces!" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email format!" });
    }

    if (employee_id.length < 3 || employee_id.length > 10) {
      return res.status(400).json({ error: "Employee ID must be between 3 and 10 characters long!" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists!" });
    }

    // Save user
    const newUser = new User({
      first_name,
      last_name,
      email,
      employee_id,
      password, // 🚨 in production, hash passwords!
      confirmPassword, // 🚨 do NOT store this in production!
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { registerUser };