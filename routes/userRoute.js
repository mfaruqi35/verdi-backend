import { register, login, getUser } from "../controllers/userController.js";
import express from "express";

const userRouter = express.Router();

userRouter.post("/register/:email", register);
userRouter.post("/login", login);
userRouter.get("/:userId", getUser);

export default userRouter;
