var note1: Note = new MeetingNote(
  "1.1.23",
  "go to the doctor",
  "have to go to the doctor on 1 oclock",
  "no image",
  "hod hasharon",
  "1 am"
);

var note2: Note = new toDoNote(
  "5.5.23",
  "HAVE TO DO",
  "X, Y AND Z",
  "IMG",
  "5.7.23"
);
var note3: Note = new SportNote(
  "2.2.24",
  "basketball game",
  "basket ball game at noon today",
  "basket",
  "sport room",
  "tommarow",
  "3 pm",
  ["shoes", "ball", "sport clothes"]
);

var notes: Note[] = [];
notes.push(note1, note2, note3);

console.log(notes);

// checkAlerts(notes);
displayNotes(false);
