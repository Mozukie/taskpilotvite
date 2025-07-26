// backend/index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/User.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173", // Adjust this to your frontend URL
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));
app.use(express.json());
app.use("/api", userRoutes);
app.listen(process.env.PORT || 5000, () =>
      console.log("Server running...")
    );
app.get("api/user", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching users:", error);
  }

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
});