import RefreshToken from "../models/RefreshToken.js";
import User from "../models/User.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from "../utils/jwtUtils.js";

export const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const isExist = await User.findOne({ email });
    if (isExist)
      return res.status(400).json({ message: "User already exists" });

    const user = new User({ fullName, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
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
    const refreshToken = generateRefreshToken(user._id);

    await RefreshToken.create({ userId: user._id, token: refreshToken });

    res.json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const refreshAccessToken = async (req, res) => {
  const { refreshToken } = req.body;

  try {
    if (!refreshToken)
      return res.status(400).json({ message: "No refresh token provided" });

    const decoded = verifyToken(refreshToken);
    const storedToken = await RefreshToken.findOne({ token: refreshToken });

    if (!storedToken)
      return res.status(400).json({ message: "Invalid refresh token" });

    const accessToken = generateAccessToken(decoded.userId);

    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
