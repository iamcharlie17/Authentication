import mongoose from "mongoose";
import User from "../models/User.js";
import { generateAccessToken } from "../utils/jwtUtils.js";

export const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const isExist = await User.findOne({ email });
    if (isExist)
      return res.status(409).json({ message: "User already exists" });

    const user = new User({ fullName, email, password });
    const result = await user.save();

    res.status(201).json({
      user: {
        _id: result?._id,
        fullName: result?.fullName,
        email: result?.email,
      },
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await user.matchedPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const accessToken = generateAccessToken(user._id);

    res.json({
      accessToken,
      user: {
        _id: user?._id,
        fullName: user?.fullName,
        email: user?.email,
      },
      message: "User Login Success!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const user = async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.user.userId);
    const user = await User.findOne({ _id: id });
    res.send({ _id: user?._id, fullName: user?.fullName, email: user?.email });
  } catch (error) {
    console.log(error);
    res.send({ message: "Server Error" });
  }
};
