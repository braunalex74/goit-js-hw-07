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
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>
    </div>`;
    })
    .join("");
}

const loghtbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

function onImageClick(event) {
  event.preventDefault();
  const imageDataSet = event.target.dataset.source;
  if (!imageDataSet) {
    return;
  }
  instance.element().querySelector("img").src = imageDataSet;
  instance.show();
}

console.log(galleryItems);
