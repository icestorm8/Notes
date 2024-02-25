function openNoteDisplay(noteId) {
    var index = notes.findIndex(function (note) { return note.id === noteId; });
    if (index > -1) {
        // if found
        var modal = document.getElementById("modal-display-note");
        var titleSpan = document.getElementById("title");
        var contentBox = document.getElementById("content");
        var creationDateSpan = document.getElementById("creation-date-display");
        var imageDisplay = document.getElementById("image");
        // DISPLAY BASIC SHARED NOTE PROPERTIES
        creationDateSpan.innerHTML = notes[index].creationDate;
        titleSpan.innerHTML = notes[index].title;
        imageDisplay.src = notes[index].imageSrc; // not working for now
        var additinalDataDiv = document.getElementById("additional-data-display");
        contentBox.innerHTML = ""; // clear
        additinalDataDiv.innerHTML = ""; // clear
        var note;
        switch (notes[index].constructor.name) {
            case "MeetingNote":
                note = notes[index];
                contentBox.innerHTML = note.content;
                additinalDataDiv.innerHTML += "\n          <span>place: ".concat(note.place, "</span>\n          <span>time: ").concat(note.meetingHour, "</span>\n        ");
                break;
            case "toDoNote":
                note = notes[index];
                var content = createListFromTextArea(note.content);
                content.map(function (line) {
                    // for now - doesn't save checked status
                    contentBox.innerHTML += "<input type=\"checkbox\">".concat(line, "<br>");
                });
                contentBox.innerHTML += "<span>Due to: ".concat(note.dueDate, "</span>");
                break;
            case "SportNote":
                note = notes[index];
                contentBox.innerHTML = note.content;
                additinalDataDiv.innerHTML += "\n          <span>place: ".concat(note.place, "</span>\n          <span>time: ").concat(note.hourOfEvent, "</span>\n          <span>date of event: ").concat(note.dateOfEvent, "</span>\n          <span> needed equipment: </span>\n          <div id=\"equipment-list\"></div>\n        ");
                var eqList = document.getElementById("equipment-list");
                eqList.innerHTML = ""; // clear
                if (note.neededEquipment.length > 0) {
                    note.neededEquipment.map(function (item) {
                        eqList.innerHTML += "<li>".concat(item, "</li>");
                    });
                    // display items in a list
                }
                else {
                    eqList.innerHTML += "<span>no equipment needed</span>";
                }
                break;
        }
        modal.style.display = "block"; // display
    }
    // else
}
