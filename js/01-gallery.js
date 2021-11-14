import { galleryItems } from './gallery-items.js';
// Change code below this line

const galerryContainer = document.querySelector('.gallery');
const galerryMarkup = createGalleryItemMarkup(galleryItems);
let openOriginalImage;

galerryContainer.insertAdjacentHTML('beforeend', galerryMarkup);

galerryContainer.addEventListener('click', onGalerryContainerClick);

galerryContainer.addEventListener('keydown', onPressEscToCloseImage);


function createGalleryItemMarkup(images) {
    return images
    .map(({preview, original, description}) => {
        return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
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

function onGalerryContainerClick(event){
    
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    openOriginalImage = basicLightbox.create(`
		<img src="${event.target.dataset.source}" width="1280" height="900">
	`)
    openOriginalImage.show()
}

function onPressEscToCloseImage(event) {
    if (event.code !== 'Escape') {
        return;
      }
      openOriginalImage.close();
  }
