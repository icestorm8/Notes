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
  if (notes.length == 0) {
    notesDiv.innerHTML += "<h3>0 notes where found...</h3>";
    return;
  }
  notes.map((note, index) => {
    notesDiv.innerHTML += `
        <div onclick="openNoteDisplay(${note.id})" class="box-note ${
      note.constructor.name
    }" >
          <div class="note">

          <!-- head -->
            <div class="box-head">
              <div class="note-title">
                <span>${note.title}</span>
              </div>
              <i style="display:${
                editMode ? "block" : "none"
              }" onclick="(() => deleteById(${
      note.id
    }))()" class="fa-solid fa-xmark"></i>
            </div>

            <!-- body -->
            <div class="note-body">
              <span>${note.content}</span>
             
            </div>
            
          </div>
        </div>
      `;
  });
}
