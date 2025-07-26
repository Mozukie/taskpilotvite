// backend/routes/userRoutes.js
import express from "express";
import User from "../models/User.js";


const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { fullName, email, employee_id, password } = req.body;

    const newUser = new User({
      fullName,
      email,
      employee_id,
      password, // hash it in real app!
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
