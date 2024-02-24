function checkAlerts(notes: Note[]): void {
  notes.map((note) => {
    note.noteAlert();
  });
}

var notesDiv: HTMLDivElement = document.getElementById(
  "notes"
) as HTMLDivElement;

function displayNotes(notes: Note[]): void {
  notesDiv.innerHTML = ""; // empty
  notes.map((note, index) => {
    notesDiv.innerHTML += `
    <div class= note ${note.constructor.name}>
    <p> ${note.toString()} </p>
    <button id="${index}"> alert details </button>
    </div>
    `;

    setTimeout(function () {
      document.getElementById(`${index}`).onclick = function () {
        note.noteAlert();
      };
    }, 200);
  });
}
