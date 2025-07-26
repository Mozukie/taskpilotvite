// backend/index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/User.js";
import User from "./models/User.js"; // ✅ Add this line

dotenv.config();

const app = express();

// ✅ Connect to MongoDB FIRST
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use(cors({
  origin: "http://localhost:5173", // Your frontend port
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

app.use(express.json());

app.use("/api", userRoutes);

// ✅ Example route (not required but if you need it)
app.get("/api/user", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.listen(process.env.PORT || 5000, () =>
  console.log("🚀 Server running on port " + (process.env.PORT || 5000))
);
