import challengeModel from "../models/challengeModel.js";

export const addChallenge = async (req, res) => {
  try {
    const { challengeName, rewardPoint, rewardXP } = req.body;

    const challenge = new challengeModel({
      challengeName,
      rewardPoint,
      rewardXP,
    });
    await challenge.save();
    res
      .status(201)
      .json({ message: "Tantangan berhasil ditambahkan", data: challenge });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getChallenge = async (req, res) => {
  try {
    const challenge = await challengeModel.find();

    res
      .status(200)
      .json({ message: "Challenge berhasil diambil", data: challenge });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const pickChallenge = async (req, res) => {
  try {
    const { email } = req.params;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyChallenge = async (req, res) => {
  try {
    const { email } = req.params;
  } catch (error) {
    res.status(500).json({ message: error.mmessage });
  }
};
