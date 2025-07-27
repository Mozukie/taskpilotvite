// backend/controllers/userController.js
import User from "../models/User.js";
import bcrypt from "bcryptjs"; // For hashing passwords
import jwt from "jsonwebtoken"; // For generating JWT tokens

export const registerUser = async (req, res) => {
  const jwtSecret = process.env.JWT_SECRET;
    const { first_name, last_name, email, employee_id, password, confirmPassword } = req.body;
    // Basic validation
  try {
    if (!first_name || !last_name || !email || !employee_id || !password || !confirmPassword) {
      return res.status(400).json({ error: "All fields are required!" });
      
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match!" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters long!" });
    }

    if (!/^[a-zA-Z0-9]+$/.test(employee_id)) {
      return res.status(400).json({ error: "Employee ID must be alphanumeric!" });
    }

    if (!/^[a-zA-Z\s]+$/.test(first_name) || !/^[a-zA-Z\s]+$/.test(last_name)) {
      return res.status(400).json({ error: "Names must contain only letters and spaces!" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email format!" });
    }

    if (employee_id.length < 3 || employee_id.length > 10) {
      return res.status(400).json({ error: "Employee ID must be between 3 and 10 characters long!" });
    }

    if (first_name.length < 3 || first_name.length > 50 || last_name.length < 3 || last_name.length > 50) {
      return res.status(400).json({ error: "Name must be between 3 and 50 characters long!" });
    }

    if (!/^[a-zA-Z0-9!@#$%^&*]{6,}$/.test(password)) {
      return res.status(400).json({
        error: "Password must be at least 6 characters long and can include letters, numbers, and special characters!"
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists!" });
    }
    const hash = await bcrypt.hash(password);
    // 🚨 In production, hash password before saving
    const newUser = new User({
      first_name,
      last_name,
      email,
      employee_id,
      passwor: hash,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // Validate input
        if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required!" });
        }
    
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
        return res.status(400).json({ error: "Invalid email or password!" });
        }
    
        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
        return res.status(400).json({ error: "Invalid email or password!" });
        }
    
        // Generate JWT token
        const token = jwt.sign({ _id: user._id }, jwtSecret, { expiresIn: "1h" });
    
        res.status(200).json({ message: "Login successful!", token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    };

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.employee_id).select("password");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
