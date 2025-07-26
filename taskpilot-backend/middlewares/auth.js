import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "your-secret-key");
    req.user = decoded; // attach user info to the request
    next(); // continue to actual route
  } catch (err) {
    return res.status(400).json({ error: "Invalid token." });
  }
};
