import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galerryContainer = document.querySelector('.gallery');
const galerryMarkup = createGalleryItemMarkup(galleryItems);

galerryContainer.insertAdjacentHTML('beforeend', galerryMarkup);

function createGalleryItemMarkup(images) {
    return images
    .map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" /> 
        </a>
        `;
    })
    .join('');
}