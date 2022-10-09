import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery')
const makrupGallery = createGallaryCardsMarkup(galleryItems);



galleryContainer.addEventListener('click', onClickUrlBigImage);
galleryContainer.insertAdjacentHTML("afterbegin", makrupGallery)


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
    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`, {
        onClose: () => {
            window.removeEventListener("keydown", onEscapeClose)
        }
    })
    instance.show();


    window.addEventListener("keydown", onEscapeClose);

    function onEscapeClose(e) {
        if (e.code === "Escape") {
            instance.close();
            window.removeEventListener("keydown", onEscapeClose);
        }
    }
}

