import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";
import mongoose from "mongoose";
dotenv.config();

export const verifyAdmin = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "Access denied" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "helloworld");
    const id = new mongoose.Types.ObjectId(decoded.userId);
    const user = await User.findOne({ _id: id });
    if (user.role != "admin")
      return res.status(401).json({ message: "Access denied" });
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
