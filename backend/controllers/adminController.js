import departmentModel from "../models/DepartmentModal.js";
import userModel from "../models/userModel.js";

const showAdminDashBoard = (req, res) => {
    res.render("adminDashboard", { username: req.user.username });
}
const numOfDepartements = async (req, res) => {
    try {
        const result = await departmentModel.aggregate([
            { $count: "totalDepartments" }
        ]);

        res.status(200).json({
            count: result[0]?.totalDepartments || 0
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
}
const numOfStudents = async (req, res) => {
    try {
        const count = await userModel.countDocuments({ role: "Student" });

        res.status(200).json({ count });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
const numOfprofessors = async(req, res) => {
    try {
        const count = await userModel.countDocuments({ role: "Professor" });

        res.status(200).json({ count });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
const numOfHODs = async(req, res) => {
    try {
        const count = await userModel.countDocuments({ role: "HOD" });

        res.status(200).json({ count });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const showDepartments = async (req, res) => {

    try {
        const page = Number(req.query.page) || 1;
        const limit = 5;
        const skip = (page - 1) * limit;
        const numOfDepartements = await departmentModel.countDocuments();
        const departments = await departmentModel.find().skip(skip).limit(limit);
        res.render("adminDepartments", { username: req.user.username, departments, currentpage: page, totalPage: Math.ceil(numOfDepartements / limit) });
    } catch (error) {
        console.error("Error fetching departments:", error);

        res.status(500).json({
            message: "Failed to fetch departments",
            error: error.message
        });
    }
}

const showUsers = async (req, res) => {
    try {
        const departments = await departmentModel.find();
        const page = Number(req.query.page) || 1;
        const limit = 5;
        const skip = (page - 1) * limit;
        const numOfUsers = await userModel.countDocuments();
        const users = await userModel.find().skip(skip).limit(limit).populate("department");
        res.render("adminUsers", { username: req.user.username, users, currentPage: page, totalPages: Math.ceil(numOfUsers / limit), departments });
    } catch (error) {
        console.error("Error fetching departments:", error);

        res.status(500).json({
            message: "Failed to fetch departments",
            error: error.message
        });
    }
}


const showAddUsers = async (req, res) => {
    try {
        const departments = await departmentModel.find();

        res.render("adminAddUsers", { username: req.user.username, departments });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: err });
    }
}

export { showAdminDashBoard, numOfDepartements, numOfHODs, numOfStudents, numOfprofessors, showDepartments, showUsers, showAddUsers };