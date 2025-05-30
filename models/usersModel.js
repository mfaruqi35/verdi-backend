import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  totalPoin: {
    type: Number,
    default: 0,
    required: true,
  },
  level: {
    type: Number,
    default: 1,
  },
  dateRegister: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("User", userSchema);
