import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const liTag = document.createElement("li");
  liTag.classList.add("gallery__item");
  gallery.append(liTag);
  const aTag = document.createElement("a");
  aTag.classList.add("gallery__link");
  aTag.href = image.original;
  liTag.append(aTag);
  const imgTag = document.createElement("img");
  imgTag.classList.add("gallery__image");
  imgTag.src = image.preview;
  imgTag.dataset.source = image.original;
  imgTag.alt = image.description;
  aTag.append(imgTag);
});

gallery.addEventListener("click", openImage);

function openImage(event) {
  const clickedOnImage = event.target;
  console.dir(clickedOnImage);
  // debugger;
  if (clickedOnImage.tagName === "IMG") {
    console.log("ai apasat pe imagine");
    event.preventDefault();
    const originalImage = basicLightbox.create(
      `
    <img src=${clickedOnImage.dataset.source}>`
    );
    originalImage.show();
  }
}
