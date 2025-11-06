import express from "express"
import login from "../controller/loginRouter.js";

const authRouter=express.Router();

authRouter.post("/login",login)

export default authRouter;