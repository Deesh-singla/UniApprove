import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export default function verifyToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.redirect("/login");

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    console.error("Invalid token:", err);
    res.redirect("/login");
  }
}
