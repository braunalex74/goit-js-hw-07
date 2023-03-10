import { galleryItems } from "./gallery-items.js";

const imageContainer = document.querySelector(".gallery");
const imagesMarkup = createImagesModalMarkup(galleryItems);
imageContainer.insertAdjacentElement("beforeend", imagesMarkup);

function createImagesModalMarkup(galleryItems) {
  return galleryItems.map(({ preview, original }) => {
    return ``;
  });
}

console.log(galleryItems);
