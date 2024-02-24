function checkAlerts(notes) {
    notes.map(function (note) {
        note.noteAlert();
    });
}
var notesDiv = document.getElementById("notes");
function displayNotes(notes) {
    notesDiv.innerHTML = ""; // empty
    notes.map(function (note, index) {
        notesDiv.innerHTML += "\n    <div class= note ".concat(note.constructor.name, ">\n    <p> ").concat(note.toString(), " </p>\n    <button id=\"").concat(index, "\"> alert details </button>\n    </div>\n    ");
        setTimeout(function () {
            document.getElementById("".concat(index)).onclick = function () {
                note.noteAlert();
            };
        }, 200);
    });
}
