import express from "express"
import { login, logout, showLoginPage } from "../controllers/loginController.js";

const authRouter = express.Router();

authRouter.get("/login", showLoginPage);

authRouter.post("/login", login)

authRouter.post("/logout", logout);


export default authRouter;