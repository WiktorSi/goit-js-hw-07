import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
    const galleryItem = `<div class = "gallery__item"><a class="gallery__link" href="${item.original}"><img class = "gallery__image" src="${item.preview}" data-source = "${item.original}" alt="${item.description}"</a></div>`
    gallery.insertAdjacentHTML('beforeend', galleryItem);
})
console.log(galleryItems);

gallery.addEventListener('click', (event) => {
    event.preventDefault();
    const source = event.target.dataset.source;
    if (event.target.nodeName !== 'IMG')
        return;
   
        
        const instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`,
        {
            onCLose: (instance) => {
                gallery.removeEventListener("keydown", handleKeypress);
            }
        });
        
        function handleKeypress (event) {
             if (event.key === 'Escape') {
                 instance.close();
             }
         }
        gallery.addEventListener("keydown", handleKeypress); 
        
            instance.show();  
        }
)