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
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
      </a>
    </div>`;
    })
    .join("");
}

// const instatce = basicLightbox.create(
//   `<img width='1280' heigth='auto' src=''>`,
//   {
//     onShowImage: (instance) => {
//       window.addEventListener("click", onClick);
//     },
//     onCloseImage: (instance) => {
//       window.removeEventListener("click", onClick);
//     },
//   }
// );

const instance = basicLightbox.create(
  `<img width='1280' heigth='auto' src=''>`,
  {
    onShowImage: (instance) => {
      window.addEventListener("click", onImageClick);
    },
    onCloseImage: (instance) => {
      window.removeEventListener("keydown", onEscapePress);
    },
  }
);

function onImageClick(event) {
  event.preventDefault();
  const imageDataSet = event.target.dataset.source;
  if (!imageDataSet) {
    return;
  }
  instance.element().querySelector("img").src = imageDataSet;
  instance.show();
}

function onEscapePress(event) {
  if (event.code !== "Escape") {
    return;
  }
  instance.close();
}

console.log(onImageClick);
