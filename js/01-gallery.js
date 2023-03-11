import { galleryItems } from "./gallery-items.js";

const imageContainer = document.querySelector(".gallery");
const imagesMarkup = createImagesModalMarkup(galleryItems);
imageContainer.insertAdjacentHTML("beforeend", imagesMarkup);
imageContainer.addEventListener("click", onImageClick);

function createImagesModalMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
      </a>
    </div>`;
  });
}

function onImageClick(event) {
  const isImageEl = event.target.classList.contains("gallery__image");
  if (!isImageEl) {
    return;
  }

  const currentActiveImage = document.querySelector(".gallery.gallery__image");
  if (currentActiveImage) {
    currentActiveImage.classList.remove("gallery__image");
  }
}

console.log(customElements);

// document.querySelector(".gallery").onclick = () => {
//   basicLightbox
//     .create(
//       `
//         <div class="gallery__item">
//             <a class="gallery__link" href="${original}">
//               <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
//             </a>
//         </div>
// 	    `
//     )
//     .show();
// };
