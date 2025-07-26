import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/User.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const express = require;

app.use(cors());
app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected online"))
  .catch(err => console.error("❌ Connection error:", err));
// Sample route
app.get('/', (req, res) => {
  res.send('TaskPilot Backend is running!');
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
// Import routes