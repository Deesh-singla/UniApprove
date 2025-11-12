import express from "express"
const dashboardRouter = express.Router();
dashboardRouter.get("/", (req, res) => {
    if (req.user.role == "admin") {
        res.redirect("admin")
    }
    else {
        res.render("userDashBoard", { username: req.user.username });
    }
})

export default dashboardRouter;