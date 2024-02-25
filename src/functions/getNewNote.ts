function getNewNote(): boolean {
  let form = document.forms["form"];
  let title = form.title.value;
  let content = form.content.value;
  let image = "";
  let today = new Date(Date.now()).toString();
  let type = form.type.value;
  // alert(getSource());
  // alert(getImgData());

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
      equipment = // not working yet
        createListFromTextArea(form.equipment.value).length == 0
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
  displayNotes(false);
  // form.reset(); // clear form for next use - causes anable to focous on the regular elements
  document.getElementById("additional-data").innerHTML = "";
  alert("note added");
  return true;
}

function createListFromTextArea(textAreaValue: string) {
  var arr: string[] = [];
  const saveData = function () {
    arr = textAreaValue.split(/\r?\n/);
  };
  console.log(arr);
  return arr;
}
