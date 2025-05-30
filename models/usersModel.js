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
