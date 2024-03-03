function getNewNote() {
    var form = document.forms["form"];
    var title = form.title.value;
    var content = form.content.value;
    var image = form.image.value;
    var today = new Date(Date.now()).toLocaleDateString("en-IN");
    var type = form.type.value;
    if (title == "" || content == "") {
        alert("fill all with valid inputs");
        return false;
    }
    if (type == "") {
        // if type wasn't chosen
        alert("must choose a type!");
        return false;
    }
    var newNote;
    var place, date, time, equipment, dueDate;
    switch (type) {
        case "sport":
            place = form.place.value == "" ? "unknown" : form.place.value;
            date = form.eventDate.value == "" ? "unknown" : form.eventDate.value;
            time = form.time.value == "" ? "unknown" : form.time.value; // string?
            equipment =
                form.equipment.value == ""
                    ? []
                    : createListFromTextArea(form.equipment.value);
            newNote = new SportNote(today, title, content, image, place, date, time, equipment);
            break;
        case "meeting":
            place = form.place.value == "" ? "unknown" : form.place.value;
            time = form.time.value == "" ? "unknown" : form.time.value; // string?
            newNote = new MeetingNote(today, title, content, image, place, time);
            break;
        case "todo":
            dueDate = form.dueDate.value == "" ? "unkown" : form.dueDate.value;
            newNote = new toDoNote(today, title, content, image, dueDate);
            break;
    }
    notes.push(newNote);
    console.log(notes);
    alert("note added");
    // change value to off (if it was on)
    var editBtn = document.getElementById("editBtn");
    if (editBtn.value == "on") {
        toggleEditMode();
    }
    else {
        displayNotes(false);
    }
    return true;
}
