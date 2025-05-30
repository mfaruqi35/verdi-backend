import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import router from "./routes/userRoute.js";
// import refRouter from "./routes/electricityRefRoute.js";
configDotenv();

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));

app.use("/api", router);
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use("/reference", refRouter);
app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));

export default app;
