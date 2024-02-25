const chooseFile: HTMLInputElement = document.getElementById(
  "choose-file"
) as HTMLInputElement;
const imgPreview: HTMLDivElement = document.getElementById(
  "img-preview"
) as HTMLDivElement;

function getImgData(): void {
  const files = chooseFile.files[0];
  if (files) {
    const fileReader = new FileReader();
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
