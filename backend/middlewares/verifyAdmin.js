 const verifyAdmin = (req, res, next) => {
    const user = req.user;
    if (!user) return res.redirect("/auth/login");
    if (user.role !== "admin") return res.status(403).json({ message: "Only admin can access" });
    next();
}

export default verifyAdmin