import mongoose from "mongoose";

const reminderSchema = mongoose.Schema(
  {
    reminderTitle: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    timeReminder: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Reminder", reminderSchema);
