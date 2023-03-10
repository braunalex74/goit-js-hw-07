import { galleryItems } from "./gallery-items.js";

const imageContainer = document.querySelector(".gallery");
const imagesMarkup = createImagesModalMarkup(galleryItems);
imageContainer.insertAdjacentElement("beforeend", imagesMarkup);

function createImagesModalMarkup(galleryItems) {
  return galleryItems.map(({ preview, original }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" data-source="large-image.jpg" alt="Image description"/>
    </a>
  </div>`;
  });
}

console.log(galleryItems);
