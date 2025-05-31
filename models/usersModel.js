import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  totalPoin: {
    type: Number,
    default: 0,
  },
  totalXP: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 1,
  },
  dateRegister: {
    type: Date,
    default: Date.now(),
  },
  difficulty: {
    type: String,
    enum: ["easy", "active", "strict"],
  },
});

export default mongoose.model("User", userSchema);
