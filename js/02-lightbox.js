import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
    const galleryItem = `<div><a class="gallery__item" href="${item.original}"><img class = "gallery__image" src="${item.preview}" alt="${item.description}"</a></div>`
    gallery.insertAdjacentHTML('beforeend', galleryItem);
})


    const lightbox = new SimpleLightbox('.gallery a', { 
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
 });
