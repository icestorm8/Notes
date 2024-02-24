function toggleEditMode(element) {
  var buttonText = element.innerText;
  if (buttonText == "turn on edit mode") {
    element.innerText = "turn off edit mode";
    displayNotes(true);
  } else {
    element.innerText = "turn on edit mode";
    displayNotes(false);
  }
}
