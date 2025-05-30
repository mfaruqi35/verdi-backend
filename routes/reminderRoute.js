import express from "express";
import { addReminder, getReminder } from "../controllers/reminderController.js";

const reminderRouter = express.Router();

reminderRouter.post("/add/:email", addReminder);
reminderRouter.get("/get/:email", getReminder);

export default reminderRouter;
