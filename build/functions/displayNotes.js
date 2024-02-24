// import { notes } from "../notes";
function checkAlerts(notes) {
    notes.map(function (note) {
        alert(typeof note);
        note.noteAlert();
    });
}
