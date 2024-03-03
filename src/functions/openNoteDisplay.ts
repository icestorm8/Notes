function openNoteDisplay(noteId: number): void {
  const index = notes.findIndex((note) => note.id === noteId);
  if (index > -1) {
    // if found
    var modal: HTMLDivElement = document.getElementById(
      "modal-display-note"
    ) as HTMLDivElement;

    var displayedNote: HTMLDivElement = document.getElementById(
      "display-note"
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

    let imageDisplay: HTMLImageElement = document.getElementById(
      "image"
    ) as HTMLImageElement;

    displayedNote.className = `modal ${notes[index].constructor.name}`;

    // DISPLAY BASIC SHARED NOTE PROPERTIES
    creationDateSpan.innerHTML = notes[index].creationDate;
    titleSpan.innerHTML = notes[index].title;

    // hide broken image icon if source is empty or bad
    imageDisplay.style.display = "block";
    imageDisplay.src = notes[index].imageSrc; // not working for now
    imageDisplay.onerror = () => {
      imageDisplay.style.display = "none";
    };

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
          <span><span class="property-title">place</span> ${note.place}</span>
          <span><span class="property-title">time</span> ${note.meetingHour}</span>
        `;
        break;
      case "toDoNote":
        note = notes[index] as toDoNote;
        let content: string[] = createListFromTextArea(note.content);

        content.map((line) => {
          // for now - doesn't save checked status
          contentBox.innerHTML += `<input type="checkbox">${line}<br>`;
        });
        additinalDataDiv.innerHTML += `<span><span class="property-title">Due to</span> ${note.dueDate}</span>`;
        break;
      case "SportNote":
        note = notes[index] as SportNote;
        contentBox.innerHTML = note.content;
        additinalDataDiv.innerHTML += `
          <span><span class="property-title">place</span>${note.place}</span>
          <span><span class="property-title">time</span> ${note.hourOfEvent}</span>
          <span><span class="property-title">date of event</span> ${note.dateOfEvent}</span>
          <div id="equipment">
          <span class="property-title">needed equipment</span>
            <div id="equipment-list"></div>
          </div>
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
