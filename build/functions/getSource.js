function getSource(noteId) {
    var file = document.getElementById("choose-file");
    var files = file.files[0];
    if (files) {
        var fileReader = new FileReader();
        var source = "";
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            return; // fix this later, can't figure it out yet
        });
    }
    else {
        return " ";
    }
}
