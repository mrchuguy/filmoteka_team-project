import * as basicLightbox from 'basiclightbox';
import { trailer } from './loadModalInfo';
import settings from './settings';

export function creatLink() {
  trailer.addEventListener('click', () => {
    drawModalForTrailler(trailer.dataset.id);
  });
}

function drawModalForTrailler(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${settings.API_KEY}&language=en-US`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const id = data.results[0].key;
      const instance = basicLightbox.create(`
  <iframe src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
      instance.show();
      modalClBtTrailer(instance);
    })
    .catch(error => {
      console.log(error);
    });
}

function modalClBtTrailer(instance) {
  const modalBox = document.querySelector('.basicLightbox--iframe');
  modalBox.insertAdjacentHTML(
    'afterbegin',
    `<button
        type="button"
        class="modal_btn-close"
        data-action="close-lightbox"
        ></button>
    `
  );
  const modalCloseBtn = document.querySelector('.modal_btn-close');
  modalCloseBtn.addEventListener('click', () => instance.close());
}

//export default { renderFilmsModalPage }
