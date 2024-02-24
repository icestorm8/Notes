function deleteById(id: number) {
  const objWithIdIndex = notes.findIndex((note) => note.id === id);
  if (objWithIdIndex > -1) {
    
    notes.splice(objWithIdIndex, 1);
  }

  displayNotes(true); // re display the notes after edit
}
