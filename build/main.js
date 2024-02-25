var note1 = new MeetingNote("1.1.23", "go to the doctor", "have to go to the doctor on 1 oclock", "no image", "hod hasharon", "1 am");
var note2 = new toDoNote("5.5.23", "HAVE TO DO", "X, Y AND Z", "IMG", "5.7.23");
var note3 = new SportNote("2.2.24", "basketball game", "basket ball game at noon today", "https://cdn.dribbble.com/users/5214489/screenshots/14933384/media/5ed47a2c8be942c2a846d29aebb15913.jpg", "sport room", "tommarow", "3 pm", ["shoes", "ball", "sport clothes"]);
var notes = [];
notes.push(note1, note2, note3);
console.log(notes);
// checkAlerts(notes);
displayNotes(false); // maybe onload of body
