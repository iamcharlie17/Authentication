import express from "express";
import { loginUser, registerUser, user } from "../controllers/authController.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/user", verifyToken, user);

export default router;
