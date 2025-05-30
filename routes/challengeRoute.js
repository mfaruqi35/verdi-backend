import express from "express";
import {
  addChallenge,
  getChallenge,
} from "../controllers/challengeController.js";

const challengeRouter = express.Router();

challengeRouter.post("/add", addChallenge);
challengeRouter.get("/get", getChallenge);

export default challengeRouter;
