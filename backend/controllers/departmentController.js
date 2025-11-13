import departmentModel from "../models/DepartmentModal.js";

export const addDepartment = async (req, res) => {
    try {
        console.log(req.body);

        const department = await departmentModel.create(req.body);

        res.redirect("/admin/navigateDepartments");
    } catch (error) {
        console.error("Error adding department:", error);

        res.status(500).json({
            message: "Failed to add department",
            error: error.message
        });
    }
};
