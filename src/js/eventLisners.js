//-----imports------//
import { notifyOptions, WARNING_MESSAGE } from './notifyOptions';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import onLoadSearchPage from './onLoadHomePage';
import loadModalInfo from './loadModalInfo';

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
  teamBackdrop: document.querySelector('.backdrop__modal'),
  teamModalCloseBtn: document.querySelector('.footer__modal-icons'),
  teamName: document.querySelector('.footer__block'),
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
refs.teamModalCloseBtn.addEventListener('click', modalClose);

//-------------Functions----------------------//

function inputValue(e) {
  searchValue = e.target.value;
}

function submitSearch(event) {
  event.preventDefault();
  if (searchValue === '') {
    Notify.failure(WARNING_MESSAGE, notifyOptions);
  } else {
    onLoadSearchPage(searchValue);
  }
}

export function onGalleryCard(event) {
  event.preventDefault();
  const id = event.target.parentNode.parentNode.parentNode.dataset.id;
  if (event.target.parentNode.parentNode.parentNode.tagName !== 'LI') {
    return;
  }
  loadModalInfo(id);
  document.addEventListener('keydown', clickCloseModal);
  refs.backdrop.classList.toggle('is-hidden');
  refs.body.style.overflow = 'hidden';
}

export function modalClose(e) {
  e.preventDefault();
  if (e.target === refs.modalBtnClose) {
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
