function getNewNote(): boolean {
  let form = document.forms["form"];
  let title = form.title.value;
  let content = form.content.value;
  let image = form.image.value;
  let today = new Date(Date.now()).toLocaleDateString("en-IN");
  let type = form.type.value;

  if (title == "" || content == "") {
    alert("fill all with valid inputs");
    return false;
  }

  if (type == "") {
    // if type wasn't chosen
    alert("must choose a type!");
    return false;
  }

  let newNote: Note;
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
      newNote = new SportNote(
        today,
        title,
        content,
        image,
        place,
        date,
        time,
        equipment
      );
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

  // get out of edit mode when publishing new note or trying to create one
  var editBtn: HTMLButtonElement = document.getElementById(
    "editBtn"
  ) as HTMLButtonElement;
  if (editBtn.value == "on") {
    toggleEditMode();
  } else {
    displayNotes(false);
  }

  return true;
}
