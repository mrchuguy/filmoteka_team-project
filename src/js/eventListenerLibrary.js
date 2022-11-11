import { loadWatched, loadQueue } from './onLoadLibraryPage';
import loadModalInfo from './loadModalInfo';
//-----refs------///

const refs = {
  body: document.querySelector('body'),
  watchedBtn: document.querySelector('.watched'),
  queueBtn: document.querySelector('.queue'),
  library: document.querySelector('.library'),
  modal: document.querySelector('.backdrop-info'),
  modalBtnClose: document.querySelector('.modal__btn-close'),
  gallery: document.querySelector('.gallery'),
  backdrop: document.querySelector('.backdrop-info'),
};

refs.watchedBtn.addEventListener('click', watchedClick);
refs.queueBtn.addEventListener('click', queueClick);
refs.gallery.addEventListener('click', onLibraryCard);
refs.modalBtnClose.firstElementChild.addEventListener('click', modalClose);

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

function onLibraryCard(e) {
  e.preventDefault();
  const id = e.target.parentNode.parentNode.parentNode.dataset.id;
  if (e.target.parentNode.parentNode.parentNode.tagName !== 'LI') {
    return;
  }
  loadModalInfo(id);
  refs.backdrop.classList.toggle('is-hidden');
  refs.body.style.overflow = 'hidden';
}

function modalClose(e) {
  e.preventDefault();
  refs.backdrop.classList.toggle('is-hidden');
  refs.body.style.overflow = 'visible';
}
