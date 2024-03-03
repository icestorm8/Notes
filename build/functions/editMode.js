function toggleEditMode() {
    var editBtn = document.getElementById("editBtn");
    if (editBtn.value == "on") {
        editBtn.value = "off";
        displayNotes(false);
    }
    else {
        editBtn.value = "on";
        displayNotes(true);
    }
}
