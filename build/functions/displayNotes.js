function checkAlerts(notes) {
    notes.map(function (note) {
        note.noteAlert();
    });
}
var notesDiv = document.getElementById("notes");
function displayNotes(editMode) {
    notesDiv.innerHTML = ""; // empty
    if (notes.length == 0) {
        notesDiv.innerHTML += "<h3>0 notes where found...</h3>";
        return;
    }
    notes.map(function (note, index) {
        notesDiv.innerHTML += "\n        <div onclick=\"openNoteDisplay(".concat(note.id, ")\" class=\"box-note ").concat(note.constructor.name, "\" >\n          <div class=\"note\">\n\n          <!-- head -->\n            <div class=\"box-head\">\n              <div class=\"note-title\">\n                <span>").concat(note.title, "</span>\n              </div>\n              <i style=\"display:").concat(editMode ? "block" : "none", "\" onclick=\"(() => deleteById(").concat(note.id, "))()\" class=\"fa-solid fa-xmark\"></i>\n            </div>\n\n            <!-- body -->\n            <div class=\"note-body\">\n              <span>").concat(note.content, "</span>\n             \n            </div>\n            \n          </div>\n        </div>\n      ");
    });
}
