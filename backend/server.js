import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import passport from "passport";
import "./config/passport.js";

import authRoutes from "./routes/authRoutes.js";
import authDataRoutes from "./routes/authDataRoutes.js";
import { generateAccessToken } from "./utils/jwtUtils.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3300;

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("DB Connected"))
  .catch((err) => {
    console.log("MongoDB connection error", err.message);
  });

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/data", authDataRoutes);

app.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", { session: false }),
  async (req, res) => {
    const user = req.user;
    const accessToken = generateAccessToken(user._id);
    res.redirect(
      `http://localhost:5173/google-sign-in-success?token=${accessToken}`
    );
  }
);

app.get("/", (req, res) => {
  res.json("Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
