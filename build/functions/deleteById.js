function deleteById(id) {
    var objWithIdIndex = notes.findIndex(function (note) { return note.id === id; });
    alert(objWithIdIndex);
    if (objWithIdIndex > -1) {
        alert(objWithIdIndex);
        notes.splice(objWithIdIndex, 1);
    }
    displayNotes(true); // re display the notes after edit
}
