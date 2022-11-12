
import * as basicLightbox from 'basiclightbox';

import loadModalInfo, { trailer } from './loadModalInfo';
import settings from './settings';

export function creatLink() {
  trailer.addEventListener('click', () => {
  drawModalForTrailler(trailer.dataset.id);

console.log(trailer.dataset.id);
})}

  function drawModalForTrailler(id) {
    
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${settings.API_KEY}&language=en-US`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const id = data.results[0].key;
        const instance = basicLightbox.create(`
  <iframe width="560" height="315" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
        instance.show();
        modalClBtTrailer(instance);
console.log(data);
      })
      .catch(() => {
        const instance = basicLightbox.create(`
    <iframe width="560" height="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);

        instance.show();
        modalClBtTrailer(instance);
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
    `,
    );
    const modalCloseBtn = document.querySelector(
      '.modal_btn-close',
    );
    modalCloseBtn.addEventListener('click', () => instance.close());
    }
  
    //export default { renderFilmsModalPage }
