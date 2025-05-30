import usersModel from "../models/usersModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Register user
export const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const existingUser = await usersModel.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new usersModel({
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({
      message: "register succesfull",
      token,
      user: {
        id: newUser._id,
        userName: newUser.userName,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await usersModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({
      message: "login successful",
      token,
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
