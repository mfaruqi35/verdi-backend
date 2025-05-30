import usersModel from "../models/usersModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Register user
export const register = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({
        success: false,
        message: "Email Anda Tidak Valid.",
      });
    }

    const userData = await usersModel.findOne({ email });

    if (userData) {
      res.status(200).json({
        message: "Data pengguna sudah tersedia",
        status: 200,
        data: userData,
      });
    } else {
      const user = new usersModel({ email });
      await user.save();

      res.status(200).json({
        message: "Berhasil menambahkan pengguna",
        status: 200,
        data: user,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error: Gagal menambahkan pengguna",
      status: 500,
      error: error.message,
    });
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

export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await usersModel.findById({ userId });

    if (!user) {
      return res.status(400).json({ message: "User tidak ditemukan" });
    }
    return res
      .status(200)
      .json({ message: "User ditemukan", status: 200, data: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
