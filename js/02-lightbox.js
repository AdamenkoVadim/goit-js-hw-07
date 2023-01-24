import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const getGallery = document.querySelector('.gallery');
const marcapGallery = markGalery(galleryItems);

getGallery.insertAdjacentHTML('afterbegin', marcapGallery);

function markGalery(elem) {
    
    return elem.map(({ preview, original, description }) => {
			return `<li>
                  <a class="gallery__item" href="${original}">
                     <img
                       class="gallery__image"
                       src="${preview}"
                       alt="${description}"   
                       />
                       </a>
                       </li> `;  })	.join("");
}

new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });

