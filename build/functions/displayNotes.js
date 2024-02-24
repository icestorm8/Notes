function checkAlerts(notes) {
    notes.map(function (note) {
        note.noteAlert();
    });
}
var notesDiv = document.getElementById("notes");
function displayNotes(editMode) {
    notesDiv.innerHTML = ""; // empty
    if (editMode) {
        notes.map(function (note, index) {
            notesDiv.innerHTML += "\n        <div class=\"box-note ".concat(note.constructor.name, "\">\n          <div class=\"note\">\n  \n            <div class=\"note-title\">\n              <span>").concat(note.title, "</span>\n            </div>\n            <div class=\"note-body\">\n              <span>").concat(note.content, "</span>\n            </div>\n            <button id=\"").concat(index, "\"> alert details </button>\n            \n            <button class=\"delete\" onclick=\"(() => deleteById(").concat(note.id, "))()\">X</button>\n            </div>\n        </div>\n      ");
            setTimeout(function () {
                document.getElementById("".concat(index)).onclick = function () {
                    note.noteAlert();
                };
            }, 200);
            console.log(note);
        });
    }
    else {
        notes.map(function (note, index) {
            notesDiv.innerHTML += "\n        <div class=\"box-note ".concat(note.constructor.name, "\">\n          <div class=\"note\">\n  \n            <div class=\"note-title\">\n              <span>").concat(note.title, "</span>\n            </div>\n            <div class=\"note-body\">\n              <span>").concat(note.content, "</span>\n            </div>\n            <button id=\"").concat(index, "\"> alert details </button>\n            \n          </div>\n        </div>\n      ");
            setTimeout(function () {
                document.getElementById("".concat(index)).onclick = function () {
                    note.noteAlert();
                };
            }, 200);
            console.log(note);
        });
    }
}
