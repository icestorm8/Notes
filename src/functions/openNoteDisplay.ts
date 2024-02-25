function openNoteDisplay(noteId: number) {
  const index = notes.findIndex((note) => note.id === noteId);
  if (index > -1) {
    // if found
    var modal: HTMLDivElement = document.getElementById(
      "modal-display-note"
    ) as HTMLDivElement;

    var titleSpan: HTMLSpanElement = document.getElementById(
      "title"
    ) as HTMLSpanElement;

    var contentBox: HTMLDivElement = document.getElementById(
      "content"
    ) as HTMLDivElement;

    var creationDateSpan: HTMLSpanElement = document.getElementById(
      "creation-date-display"
    ) as HTMLSpanElement;

    var imageDisplay: HTMLImageElement = document.getElementById(
      "image"
    ) as HTMLImageElement;

    // DISPLAY BASIC SHARED NOTE PROPERTIES
    creationDateSpan.innerHTML = notes[index].creationDate;
    titleSpan.innerHTML = notes[index].title;

    imageDisplay.src = notes[index].imageSrc; // not working for now

    var additinalDataDiv: HTMLDivElement = document.getElementById(
      "additional-data-display"
    ) as HTMLDivElement;

    contentBox.innerHTML = ""; // clear
    additinalDataDiv.innerHTML = ""; // clear
    var note;
    switch (notes[index].constructor.name) {
      case "MeetingNote":
        note = notes[index] as MeetingNote;
        contentBox.innerHTML = note.content;
        additinalDataDiv.innerHTML += `
          <span>place: ${note.place}</span>
          <span>time: ${note.meetingHour}</span>
        `;
        break;
      case "toDoNote":
        note = notes[index] as toDoNote;
        let content: string[] = createListFromTextArea(note.content);

        content.map((line) => {
          // for now - doesn't save checked status
          contentBox.innerHTML += `<input type="checkbox">${line}<br>`;
        });
        contentBox.innerHTML += `<span>Due to: ${note.dueDate}</span>`;
        break;
      case "SportNote":
        note = notes[index] as SportNote;
        contentBox.innerHTML = note.content;
        additinalDataDiv.innerHTML += `
          <span>place: ${note.place}</span>
          <span>time: ${note.hourOfEvent}</span>
          <span>date of event: ${note.dateOfEvent}</span>
          <span> needed equipment: </span>
          <div id="equipment-list"></div>
        `;

        var eqList: HTMLDivElement = document.getElementById(
          "equipment-list"
        ) as HTMLDivElement;
        eqList.innerHTML = ""; // clear

        if (note.neededEquipment.length > 0) {
          note.neededEquipment.map((item) => {
            eqList.innerHTML += `<li>${item}</li>`;
          });
          // display items in a list
        } else {
          eqList.innerHTML += "<span>no equipment needed</span>";
        }

        break;
    }
    modal.style.display = "block"; // display
  }

  // else
}
