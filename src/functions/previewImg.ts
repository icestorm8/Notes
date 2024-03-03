const chooseFile: HTMLInputElement = document.getElementById(
  "choose-file"
) as HTMLInputElement;
const imgPreview: HTMLDivElement = document.getElementById(
  "img-preview"
) as HTMLDivElement;

function previewImg(input: HTMLInputElement) {
  input.style.display = "block";
  imgPreview.innerHTML = `<img id="previewImageDisplay" width="300" src="${input.value}" />`;
  const image: HTMLImageElement = document.getElementById(
    "previewImageDisplay"
  ) as HTMLImageElement;
  image.onerror = () => {
    alert("image src isn't valid! please remove or replace");
    imgPreview.innerHTML = "";
    input.value = "";
  };
}
