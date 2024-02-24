function checkAlerts(notes: Note[]): void {
  notes.map((note) => {
    note.noteAlert();
  });
}

var notesDiv: HTMLDivElement = document.getElementById(
  "notes"
) as HTMLDivElement;

function displayNotes(editMode: boolean): void {
  notesDiv.innerHTML = ""; // empty
  if (editMode) {
    notes.map((note, index) => {
      notesDiv.innerHTML += `
        <div class="box-note ${note.constructor.name}">
          <div class="note">
  
            <div class="note-title">
              <span>${note.title}</span>
            </div>
            <div class="note-body">
              <span>${note.content}</span>
            </div>
            <button id="${index}"> alert details </button>
            
            <button class="delete" onclick="(() => deleteById(${note.id}))()">X</button>
            </div>
        </div>
      `;

      setTimeout(function () {
        document.getElementById(`${index}`).onclick = function () {
          note.noteAlert();
        };
      }, 200);
      console.log(note);
    });
  } else {
    notes.map((note, index) => {
      notesDiv.innerHTML += `
        <div class="box-note ${note.constructor.name}">
          <div class="note">
  
            <div class="note-title">
              <span>${note.title}</span>
            </div>
            <div class="note-body">
              <span>${note.content}</span>
            </div>
            <button id="${index}"> alert details </button>
            
          </div>
        </div>
      `;

      setTimeout(function () {
        document.getElementById(`${index}`).onclick = function () {
          note.noteAlert();
        };
      }, 200);
      console.log(note);
    });
  }
}
