import ApiService from './fetch-api';
import { spinnerToggle, hideSpinner } from './spinner';
import { renderFilmsModalPage } from './modalInfo';
import { checkMovieInStorage, saveMovie, deleteMovie } from './local-storage';
import { creatLink } from './trailer';


const infoMovieApi = new ApiService();
let watchedBtn = null;
let queueBtn = null;
export let trailer = null;

const checkLocalSrorage = id => {
  if (checkMovieInStorage('WATCHED', id)) {
    watchedBtn.dataset.type = 'delete';
  } else {
    watchedBtn.dataset.type = 'add';
  }
  if (checkMovieInStorage('QUEUE', id)) {
    queueBtn.dataset.type = 'delete';
  } else {
    queueBtn.dataset.type = 'add';
  }
};

const watchedBtnHandler = () => {
  const type = watchedBtn.dataset.type;
  watchedBtn.blur();
  if (type === 'add') {
    infoMovieApi.findById(watchedBtn.dataset.id).then(response => {
      saveMovie('WATCHED', response.data);
    });
    watchedBtn.dataset.type = 'delete';
  } else {
    deleteMovie('WATCHED', watchedBtn.dataset.id);
    watchedBtn.dataset.type = 'add';
  }
};

const queueBtnHandler = () => {
  const type = queueBtn.dataset.type;
  queueBtn.blur();
  if (type === 'add') {
    infoMovieApi.findById(queueBtn.dataset.id).then(response => {
      saveMovie('QUEUE', response.data);
    });
    queueBtn.dataset.type = 'delete';
  } else {
    deleteMovie('QUEUE', queueBtn.dataset.id);
    queueBtn.dataset.type = 'add';
  }
};

const loadModalInfo = id => {
  spinnerToggle();
  infoMovieApi.findById(id).then(response => {
    renderFilmsModalPage(response.data);

    watchedBtn = document.querySelector('.button-watch');
    queueBtn = document.querySelector('.button-queue');
    trailer = document.querySelector('.button-youtube');
    creatLink();
    
    //перевірка на присутність фільму у сховищі (назначення data-type)
    checkLocalSrorage(response.data.id);
    //навішування слухача подій
    watchedBtn.addEventListener('click', watchedBtnHandler);
    queueBtn.addEventListener('click', queueBtnHandler);

    hideSpinner();
  });
 
};


export default loadModalInfo;
