export const verifyToken = (req, res, next) => {
    const user = req.user;
    if (!user) res.redirect("/auth/login");
    if (user.role != "admin") res.json({ message: "only admin can access" })
    next();
}
