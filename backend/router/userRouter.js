import express from "express"
import { addUser, deleteUser, updateUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/create", addUser)

userRouter.get("/deleteUser",deleteUser)

userRouter.post("/update",updateUser)

export default userRouter;