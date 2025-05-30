import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import router from "./routes/userRoute.js";
// import refRouter from "./routes/electricityRefRoute.js";
configDotenv();

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => console.log(`Berhasil konek di port ${port}`));
  })
  .catch(console.dir);

app.use("/api", router);
// app.use("/reference", refRouter);

export default app;
