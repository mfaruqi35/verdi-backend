import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import userRouter from "./routes/userRoute.js";
import reminderRouter from "./routes/reminderRoute.js";

configDotenv();

const app = express();
const PORT = 3001;

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));

app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/user", userRouter);
app.use("/reminder", reminderRouter);

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));

export default app;
