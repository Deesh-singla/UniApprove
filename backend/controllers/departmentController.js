import departmentModel from "../models/DepartmentModal.js";

export const addDepartment = async (req, res) => {
    try {
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

export const deleteDepartment = async (req, res) => {
    try {
        const id = req.query.id;
        const department = await departmentModel.deleteOne({ _id: id });
        res.redirect("/admin/navigateDepartments");

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}

export const editDepartment = async (req, res) => {
    try {
        const department = await departmentModel.findById(req.body.id);
        department.name = req.body.name;
        department.type = req.body.type;
        department.address = req.body.address;
        department.save();
        res.redirect("/admin/navigateDepartments");
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
}