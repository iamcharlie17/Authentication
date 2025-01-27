import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.js";

const router = Router();

router.get("/public_data", async (req, res) => {
  const data = "This is public data";

  res.status(200).json({ data, message: "success" });
});

router.get("/user_data", verifyToken, async (req, res) => {
  const data = "This data is accessible for users only";
  res.status(200).json({ data, message: "success" });
});

router.get("/admin_data", verifyAdmin, async (req, res) => {
  const data = "This data is accessible for ADMIN's only";
  res.status(200).json({ data, message: "success" });
});

export default router;
