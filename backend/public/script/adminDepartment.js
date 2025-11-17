const addBtn = document.getElementById("add-department");
// const editBtn = document.getElementById("edit-department")
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

async function handleDelete(departmentId) {
    const res = await fetch("/department/deleteDepartment", {
        method: "post",
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify({ id: departmentId })
    })
    const a = await res.json();
    if (a.success) {
        document.getElementById(departmentId).remove();
    }
}

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
window.handleDelete = handleDelete;

