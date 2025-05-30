import reminderModel from "../models/reminderModel.js";

export const addReminder = async (req, res) => {
  try {
    const { email } = req.params;
    const { reminderTitle, timeReminder } = req.body;
    const reminder = new reminderModel({
      reminderTitle,
      timeReminder,
      email,
    });
    reminder.save();
    res.status(201).json({ message: "Reminder created", data: reminder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReminder = async (req, res) => {
  try {
    const { email } = req.params;
    const reminder = await reminderModel.find({ email });
    res.status(200).json({ message: "berhasil", data: reminder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
