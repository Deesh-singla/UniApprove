import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import { JWT_SECRET } from "../config/env.js";
import adminModel from "../models/adminModel.js";

async function checkPass(user, password) {
    return await bcrypt.compare(password, user.password);
}

async function login(req, res) {
    try {
        const { username, email, password } = req.body;

        let user = await adminModel.findOne({ email });
        let role = "admin";

        if (!user) {
            user = await userModel.findOne({ email });
            role = "user";
        }

        if (!user) {
            return res.render("login", { error: "User not found" });
        }

        const isPasswordValid = await checkPass(user, password);

        if (user.username !== username || !isPasswordValid) {
            return res.render("login", { error: "Invalid username, email, or password" });
        }

        const token = jwt.sign(
            { username, email, id: user._id, role },
            JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("token", token);
        res.redirect("/dashboard");
    } catch (err) {
        console.error(err);
        return res.render("login", { error: "Server error. Please try again later." });
    }
}

function showLoginPage(req, res) {
    res.render("login", { error: null });
}

const logout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
}

export { login, showLoginPage, logout };
