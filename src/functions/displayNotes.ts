// import { notes } from "../notes";

function checkAlerts(notes: Note[]): void {
  notes.map((note) => {
    note.noteAlert();
  });
}
