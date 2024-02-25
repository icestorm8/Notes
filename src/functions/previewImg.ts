const chooseFile: HTMLInputElement = document.getElementById(
  "choose-file"
) as HTMLInputElement;
const imgPreview: HTMLDivElement = document.getElementById(
  "img-preview"
) as HTMLDivElement;


function previewImg(input: HTMLInputElement) {
  input.style.display = "block";
  imgPreview.innerHTML = `<img width="300" src="${input.value}" />`;
}
