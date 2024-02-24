var chooseFile = document.getElementById("choose-file");
var imgPreview = document.getElementById("img-preview");
function getImgData() {
    var files = chooseFile.files[0];
    if (files) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            imgPreview.style.display = "block";
            imgPreview.innerHTML = '<img src="' + this.result + '" />';
        });
    }
}
chooseFile.addEventListener("change", function () {
    getImgData();
});
