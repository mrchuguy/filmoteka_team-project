import { loadWatched, loadQueue } from './onLoadLibraryPage';

//-----refs------///

const refs = {
  watchedBtn: document.querySelector('.watched'),
  queueBtn: document.querySelector('.queue'),
  library: document.querySelector('.library'),
  modal: document.querySelector('.backdrop-info'),
  modalBtnClose: document.querySelector('.modal__btn-close'),
};

refs.watchedBtn.addEventListener('click', watchedClick);
refs.queueBtn.addEventListener('click', queueClick);

function watchedClick() {
  refs.watchedBtn.classList.add('current-button');
  refs.queueBtn.classList.remove('current-button');
  loadWatched();
}

function queueClick() {
  refs.queueBtn.classList.add('current-button');
  refs.watchedBtn.classList.remove('current-button');
  loadQueue();
}
