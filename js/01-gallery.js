import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery')
const makrupGallery = createGallaryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", makrupGallery)



galleryContainer.addEventListener('click', onClickUrlBigImage);


function createGallaryCardsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item" href = "${original}">
            <a class="gallery__link" >
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

function onClickUrlBigImage(e) {
    e.preventDefault()
    if (e.target.nodeName !== 'IMG') {
        return
    }
    let source = e.target.dataset.source;
    // console.log(source);
    // return source;

    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`)
    instance.show()

}




