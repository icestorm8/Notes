var chooseFile = document.getElementById("choose-file");
var imgPreview = document.getElementById("img-preview");
function previewImg(input) {
    input.style.display = "block";
    imgPreview.innerHTML = "<img width=\"300\" src=\"".concat(input.value, "\" />");
}
