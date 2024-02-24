function toggleEditMode(element) {
    if (element.value == "on") {
        element.value = "off";
        displayNotes(true);
    }
    else {
        element.value = "on";
        displayNotes(false);
    }
}
