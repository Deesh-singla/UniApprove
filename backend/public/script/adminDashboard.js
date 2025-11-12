import logout from "../logout.js";

document.getElementById("logout-btn").addEventListener("click", logout);

window.onload = async () => {
    try {
        const [departmentsRes, studentsRes, professorsRes, hodsRes] = await Promise.all([
            fetch("/admin/numOfDepartements"),
            fetch("/admin/numOfStudents"),
            fetch("/admin/numOfProfessors"),
            fetch("/admin/numOfHODs")
        ]);

        const [departments, students, professors, hods] = await Promise.all([
            departmentsRes.json(),
            studentsRes.json(),
            professorsRes.json(),
            hodsRes.json()
        ]);

        document.querySelector(".numOfDepartments").textContent = departments.count ?? 0;
        document.querySelector(".numofStudents").textContent = students.count ?? 0;
        document.querySelector(".numOfProfessors").textContent = professors.count ?? 0;
        document.querySelector(".numOfHODs").textContent = hods.count ?? 0;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
