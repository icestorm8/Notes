var chooseFile = document.getElementById("choose-file");
var imgPreview = document.getElementById("img-preview");
function previewImg(input) {
    input.style.display = "block";
    imgPreview.innerHTML = "<img id=\"previewImageDisplay\" width=\"300\" src=\"".concat(input.value, "\" />");
    var image = document.getElementById("previewImageDisplay");
    image.onerror = function () {
        alert("image src isn't valid! please remove or replace");
        imgPreview.innerHTML = "";
        input.value = "";
    };
}
