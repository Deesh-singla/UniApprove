
const showAdminDashBoard = (req, res) => {
    res.render("adminDashboard", { username: req.user.username });
}
const numOfDepartements = (req, res) => {
    res.status(200).json({ count: 1 });
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
export { showAdminDashBoard, numOfDepartements, numOfHODs, numOfStudents, numOfprofessors };