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
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            `;
        })
        .join('');
}


function onClickUrlBigImage(e) {
    e.preventDefault()
    if (e.target.nodeName !== 'IMG') {
        return
    }

    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
        alertErrorMessage: 'Изображение не найдено, простите сейчас загрузим следующее изображение'

    });
    gallery.on('show.simplelightbox', function () {

    });

}




