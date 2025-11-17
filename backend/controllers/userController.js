import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"

export const addUser = async (req, res) => {
    try {
        const { name, email, password, phone, department, role } = req.body;
        const hashedPass = bcrypt.hash(password, 10);
        const user = await userModel.create({ name, email, hashedPass, phone, department, role });
        res.redirect("/admin/navigateAddUsers");
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.query.id;
        const user = await userModel.deleteOne({ _id: id });
        res.redirect("/admin/navigateUsers");
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err })
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.body.userId);
        user.name = req.body.name;
        user.email = req.body.email;
        user.phone = Number(req.body.phone)
        user.role = req.body.role;
        user.department = req.body.department;
        user.save();
        res.redirect("/admin/navigateUsers")
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err })
    }
}