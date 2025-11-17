
const editOverlay = document.getElementById("editOverlay");
const editUserId = document.getElementById("editUserId");
const editName = document.getElementById("editName");
const editEmail = document.getElementById("editEmail");
const editPhone = document.getElementById("editPhone");
const editRole = document.getElementById("editRole");
const editDepartment = document.getElementById("editDepartment");

function handleEdit(user) {
    if (!user) return console.error("User data missing");
    user = JSON.parse(user);
    editUserId.value = user._id;
    editName.value = user.name;
    editEmail.value = user.email;
    editPhone.value = user.phone;
    editRole.value = user.role;

    if (user.department && user.department._id) {
        editDepartment.value = user.department._id;
    }

    editOverlay.classList.remove("hidden");
}


function cancelEdit() {
    editOverlay.classList.add("hidden");
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        cancelEdit();
    }
});

window.handleEdit = handleEdit;
window.cancelEdit = cancelEdit;
