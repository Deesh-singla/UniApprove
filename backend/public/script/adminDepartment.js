const addBtn = document.getElementById("add-department");
const formContainer = document.getElementById("department-form");
const editformContainer = document.getElementById("edit-department-form");
const crossBtn = document.getElementById("cross-btn");
const editCrossBtn = document.getElementById("edit-cross-btn");


addBtn.addEventListener("click", () => {
    formContainer.style.visibility = "visible";
});

crossBtn.addEventListener("click", () => {
    formContainer.style.visibility = "hidden";
});

editCrossBtn.addEventListener("click", () => {
    editformContainer.style.visibility = "hidden"
})

export function openEditForm(id, name, type, address) {
    document.getElementById("edit-name").value = name;
    document.getElementById("edit-type").value = type;
    document.getElementById("edit-address").value = address;
    document.getElementById("edit-id").value = id;


    // document.getElementById("edit-form").action = `/department/edit/${id}`;

    document.getElementById("edit-department-form").style.visibility = "visible";
}

window.openEditForm = openEditForm;

