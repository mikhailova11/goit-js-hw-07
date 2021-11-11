import { galleryItems } from './gallery-items.js';
// Change code below this line

const galerryContainer = document.querySelector('.gallery');
const galerryMarkup = createGalleryItemMarkup(galleryItems);

galerryContainer.addEventListener('click', onGalerryContainerClick);


galerryContainer.insertAdjacentHTML('beforeend', galerryMarkup);

function createGalleryItemMarkup(images) {
    return images
    .map(({preview, original, description}) => {
        return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">>
                <img 
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </div>
        `;
    })
    .join('');
}

function onGalerryContainerClick(evt){
    
    if(!evt.target.classList.contains('gallery__link')){
        return;
    }

}

