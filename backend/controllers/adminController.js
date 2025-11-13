import departmentModel from "../models/DepartmentModal.js";

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
const numOfStudents = (req, res) => {
    res.status(200).json({ count: 1 });
}
const numOfprofessors = (req, res) => {
    res.status(200).json({ count: 1 });
}
const numOfHODs = (req, res) => {
    res.status(200).json({ count: 1 });
}

const showDepartments = async (req, res) => {

    try {
        const departments = await departmentModel.find();
        res.render("adminDepartments", { username: req.user.username, departments });
    } catch (error) {
        console.error("Error fetching departments:", error);

        res.status(500).json({
            message: "Failed to fetch departments",
            error: error.message
        });
    }
}

const showUsers = (req, res) => {
    res.render("adminUsers", { username: req.user.username });
}

const showAddUsers = (req, res) => {
    res.render("adminAddUsers", { username: req.user.username });
}

export { showAdminDashBoard, numOfDepartements, numOfHODs, numOfStudents, numOfprofessors, showDepartments, showUsers, showAddUsers };