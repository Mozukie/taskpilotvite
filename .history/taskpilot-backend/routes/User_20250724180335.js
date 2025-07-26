const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/register', async (req, res) => {
  try {
    const { full_name, email, password, employee_id, role } = req.body;

    // Optional: hash password here using bcrypt

    const newUser = new User({
      full_name,
      email,
      password,
      employee_id,
      role
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error registering user' });
  }
});

module.exports = router;
