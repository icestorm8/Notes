function resetForm(): void {
  document.getElementById("additional-data").innerHTML = "";

  // reseting the image preview too..
  var preview: HTMLImageElement = document.getElementById(
    "img-preview"
  ) as HTMLImageElement;

  if (preview.innerHTML != "") {
    preview.innerHTML = "";
  }

  var modal: HTMLDivElement = document.getElementById(
    "create-note"
  ) as HTMLDivElement;

  modal.style.background =
    "linear-gradient(to bottom right,rgb(241, 241, 241), rgb(237, 241, 255))";
  // catch form to reset it
  var form: HTMLFormElement = document.forms["form"];
  form.reset();
  // hide it (the modal its in)
  hideForm();

  // catch edit btn to change - only if i want to get out of edit mode each time i create new note or try to
  
}

function hideForm(): void {
  document.getElementById("modal-create-note").style.display = "none";
}
