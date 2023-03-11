import { galleryItems } from "./gallery-items.js";

const imageContainer = document.querySelector(".gallery");
const imagesMarkup = createImagesModalMarkup(galleryItems);
imageContainer.insertAdjacentElement("beforeend", imagesMarkup);
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

console.log(galleryItems);

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
