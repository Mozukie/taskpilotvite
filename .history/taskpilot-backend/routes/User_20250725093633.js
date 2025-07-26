// backend/routes/userRoutes.js
import express from "express";
import User from "../models/User.js";


const router = express.Router();

app.post("/register", (req, res) => {
  res.status(200).json({ message: "Registration endpoint hit" });
});
    const { full_name, email, employee_id, password } = req.body;

    const newUser = new User({
      full_name,
      email,
      employee_id,
      password, // hash it in real app!
    });

    if(password !== req.body['confirm-password']) {
      return res.status(400).json({ error: "Passwords do not match!" });    
    }else if(!full_name || !email || !employee_id || !password) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});


export default router;
