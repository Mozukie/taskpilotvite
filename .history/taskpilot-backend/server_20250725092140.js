// backend/index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/User.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

app.post("/register", (req, res) => {
  res.status(200).json({ message: "Registration endpoint hit" });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log("Server running...")
    );
  })
  .catch((err) => console.log(err));
