const addBtn = document.getElementById("add-department");
const formContainer = document.getElementById("department-form");
const crossBtn = document.getElementById("cross-btn");

addBtn.addEventListener("click", () => {
    formContainer.style.visibility = "visible";
});

crossBtn.addEventListener("click", () => {
    formContainer.style.visibility = "hidden";
});
