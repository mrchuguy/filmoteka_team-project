import { loadWatched, loadQueue } from './onLoadLibraryPage';
import loadModalInfo from './loadModalInfo';
import { loadWatched, loadQueue } from './onLoadLibraryPage';
//-----refs------///

const refs = {
  body: document.querySelector('body'),
  watchedBtn: document.querySelector('.watched'),
  currentBtn: document.querySelector('.watched.current-button'),
  queueBtn: document.querySelector('.queue'),
  library: document.querySelector('.library'),
  modal: document.querySelector('.backdrop-info'),
  modalBtnClose: document.querySelector('.modal__btn-close'),
  gallery: document.querySelector('.gallery'),
  backdrop: document.querySelector('.backdrop-info'),
  teamBtn: document.querySelector('.modal__open'),
  teamBackdrop: document.querySelector('.backdrop__modal'),
  teamModalCloseBtn: document.querySelector('.footer__modal-icons'),
  teamName: document.querySelector('.footer__block'),
};

refs.watchedBtn.addEventListener('click', watchedClick);
refs.queueBtn.addEventListener('click', queueClick);
refs.gallery.addEventListener('click', onLibraryCard);
refs.modalBtnClose.firstElementChild.addEventListener('click', modalClose);
refs.backdrop.addEventListener('click', clickCloseModal);
refs.teamBtn.addEventListener('click', footerOpen);
refs.teamModalCloseBtn.addEventListener('click', modalClose);

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
  document.addEventListener('keydown', clickCloseModal);
  const id = e.target.parentNode.parentNode.parentNode.dataset.id;
  if (e.target.parentNode.parentNode.parentNode.tagName !== 'LI') {
    return;
  }
  loadModalInfo(id);
  refs.backdrop.classList.toggle('is-hidden');
  refs.body.style.overflow = 'hidden';
}

//-------Copy from eventLisners---------//

function modalClose(e) {
  e.preventDefault();
  if (e.target === refs.modalBtnClose.firstElementChild) {
    checkActiveBtn();
    document.removeEventListener('keydown', clickCloseModal);
    refs.backdrop.classList.toggle('is-hidden');
    refs.body.style.overflow = 'visible';
  } else if (e.target === refs.teamModalCloseBtn) {
    document.removeEventListener('keydown', footerClose);
    refs.teamBackdrop.classList.toggle('is-hidden');
    refs.body.style.overflow = 'visible';
    refs.teamName.classList.toggle('is-hidden');
  }
}

function clickCloseModal(e) {
  e.preventDefault();
  if (e.target === refs.backdrop || e.key === 'Escape') {
    checkActiveBtn();
    refs.backdrop.classList.toggle('is-hidden');
    document.removeEventListener('keydown', clickCloseModal);
    refs.body.style.overflow = 'visible';
  }
}

function footerOpen(e) {
  e.preventDefault();
  document.addEventListener('keydown', footerClose);
  refs.teamBackdrop.classList.toggle('is-hidden');
  refs.body.style.overflow = 'hidden';
  setTimeout(() => {
    refs.teamName.classList.toggle('is-hidden');
  }, 600);
  refs.teamBackdrop.addEventListener('click', footerClose);
}

function footerClose(e) {
  if (e.target === refs.teamBackdrop || e.key === 'Escape') {
    e.preventDefault();
    refs.teamBackdrop.classList.toggle('is-hidden');
    document.removeEventListener('keydown', footerClose);
    refs.teamName.classList.toggle('is-hidden');
    refs.teamBackdrop.removeEventListener('click', footerClose);
  }
  refs.body.style.overflow = 'visible';
}

function checkActiveBtn() {
  if (refs.watchedBtn.className === 'watched current-button') {
    loadWatched();
  } else {
    loadQueue();
  }
}
