import { galleryItems } from "./gallery-items.js";

const imageContainer = document.querySelector(".gallery");
const imagesMarkup = createImagesModalMarkup(galleryItems);
imageContainer.insertAdjacentHTML("beforeend", imagesMarkup);
imageContainer.addEventListener("click", onImageClick);

function createImagesModalMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </div>`;
    })
    .join("");
}

console.log(galleryItems);
