function toggleEditMode(): void {
  var editBtn: HTMLButtonElement = document.getElementById(
    "editBtn"
  ) as HTMLButtonElement;

  if (editBtn.value == "on") {
    editBtn.value = "off";
    displayNotes(false);
  } else {
    editBtn.value = "on";
    displayNotes(true);
  }
}
