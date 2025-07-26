import express from "express";
import { registerUser } from "../controllers/User.js";
import { loginUser } from "../controllers/User.js"; //  Assuming you have a login controller

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser); // Route for user login

export default router;