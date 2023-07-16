// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector('.gallery');

const markup = galleryItems
    .map(element => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
    <img class="gallery__image" src="${element.preview}" alt="${element.description}"/></a>
    </li>`
    })
    .join("")

ulEl.insertAdjacentHTML('afterbegin', markup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
})
