import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const gallery = document.querySelector('.gallery');
console.log(gallery);
// const itemsMarkup = createGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', createMarkupItems(galleryItems));
gallery.addEventListener('click', onImgClick)


function createMarkupItems(arr) {
    
    return arr.map(({ preview, original, description }) => `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
     data-source = "${original}"
        alt="${description}" 
    />
  </a>
    `)
        .join('')
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});
