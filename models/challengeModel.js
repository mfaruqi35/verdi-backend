import mongoose from "mongoose";

const challengeSchema = mongoose.Schema({
  challengeName: {
    type: String,
    required: true,
  },
  rewardPoint: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["tersedia", "diambil", "selesai"],
    default: "tersedia",
  },
  rewardXP: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Challenge", challengeSchema);
