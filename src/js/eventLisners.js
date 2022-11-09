//-----imports------//
import { notifyOptions, WARNING_MESSAGE } from './notifyOptions';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import onLoadSearchPage from './onLoadHomePage';
import loadModalInfo from './loadModalInfo';
import { WATCHED } from './local-storage';
import { QUEUE } from './local-storage';
import { saveMovie } from './local-storage';
import { loadMovie } from './local-storage';
//-----refs------///

const refs = {
  body: document.querySelector('body'),
  searchInput: document.querySelector('input'),
  searchBtn: document.querySelector('.submit-button'),
  watchedBtn: document.querySelector('.button-watch'),
  queueBtn: document.querySelector('.button-queue'),
  gallery: document.querySelector('.gallery'),
  filmCard: document.querySelectorAll('.photo-card'),
  modal: document.querySelector('.modal-info'),
  backdrop: document.querySelector('.backdrop-info'),
  modalBtnClose: document.querySelector('.material-icons'),
  teamBtn: document.querySelector('.modal__open'),
  modalTeam: document.querySelector('.backdrop__modal'),
};
//-----------------------------------------//
let searchValue = '';

//---------eventLisners------------//

refs.searchInput.addEventListener('input', inputValue);
refs.searchBtn.addEventListener('click', submitSearch);
refs.gallery.addEventListener('click', onGalleryCard);
refs.backdrop.addEventListener('click', clickCloseModal);
refs.modalBtnClose.addEventListener('click', modalClose);
refs.teamBtn.addEventListener('click', footerOpen);

//-------------Functions----------------------//

function inputValue(e) {
  searchValue = e.target.value;
  console.log(searchValue);
}

function submitSearch(event) {
  event.preventDefault();
  if (searchValue === '') {
    Notify.failure(WARNING_MESSAGE, notifyOptions);
  } else {
    onLoadSearchPage(searchValue);
  }
}

function onGalleryCard(event) {
  event.preventDefault();
  const id = event.target.parentNode.parentNode.parentNode.dataset.id;
  document.addEventListener('keydown', clickCloseModal);
  if (event.target.parentNode.parentNode.parentNode.tagName !== 'LI') {
    return;
  }
  loadModalInfo(id);
  refs.backdrop.classList.toggle('is-hidden');
  refs.body.style.overflow = 'hidden';
}

function modalClose(e) {
  console.log(e);
  e.preventDefault();
  document.removeEventListener('keydown', clickCloseModal);
  refs.backdrop.classList.toggle('is-hidden');
  refs.body.style.overflow = 'visible';
}

function clickCloseModal(e) {
  e.preventDefault();
  if (e.target === refs.backdrop || e.key === 'Escape') {
    refs.backdrop.classList.toggle('is-hidden');
    document.removeEventListener('keydown', clickCloseModal);
    refs.body.style.overflow = 'visible';
  }
}

function footerOpen(e) {
  e.preventDefault();
  refs.modalTeam.classList.toggle('is-hidden');
}
