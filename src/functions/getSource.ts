function getSource(noteId: number) {
  var file: HTMLInputElement = document.getElementById(
    "choose-file"
  ) as HTMLInputElement;

  const files = file.files[0];

  if (files) {
    const fileReader = new FileReader();
    var source = "";
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      return; // fix this later, can't figure it out yet
    });
  } else {
    return " ";
  }
}
