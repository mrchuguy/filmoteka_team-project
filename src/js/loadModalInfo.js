import ApiService from './fetch-api';
import { spinnerToggle, hideSpinner } from './spinner';
import { renderFilmsModalPage } from './modalInfo';

const infoMovieApi = new ApiService();
let watchedBtn = null;
let queueBtn = null;

const checkLocalSrorage = id => {
  //checkMovieInStorage("WATCHED", id);
  if (true) {
    watchedBtn.dataset.type = 'delete';
  } else {
    watchedBtn.dataset.type = 'add';
  }
  //checkMovieInStorage("QUEUE", id);
  if (true) {
    queueBtn.dataset.type = 'delete';
  } else {
    queueBtn.dataset.type = 'add';
  }
};

const loadModalInfo = id => {
  spinnerToggle();
  infoMovieApi.findById(id).then(response => {
    renderFilmsModalPage(response.data);

    watchedBtn = document.querySelector('.button-watch');
    queueBtn = document.querySelector('.button-queue');
    //перевірка на присутність фільму у сховищі (назначення data-type)
    checkLocalSrorage();
    //навішування слухача подій
    hideSpinner();
  });
};

export default loadModalInfo;
