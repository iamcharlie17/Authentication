import express from "express";
import {
  googleSignIn,
  loginUser,
  registerUser,
  user,
} from "../controllers/authController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import passport from "passport";
import "../config/passport.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/user", verifyToken, user);

// sign in with google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleSignIn
);

export default router;
