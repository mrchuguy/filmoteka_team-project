//-----imports------//
import { notifyOptions, WARNING_MESSAGE } from './notifyOptions';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import onLoadSearchPage from './onLoadHomePage';
import loadModalInfo from './loadModalInfo';

//-----refs------///

const refs = {
  searchInput: document.querySelector('input'),
  searchBtn: document.querySelector('.submit-button'),
  watchedBtn: document.querySelector('.watched'),
  queueBtn: document.querySelector('.queue'),
  gallery: document.querySelector('.gallery'),
  filmCard: document.querySelectorAll('.photo-card'),
  modal: document.querySelector('.modal-info'),
  backdrop: document.querySelector('.backdrop-info'),
  modalBtnClose: document.querySelector('.material-icons'),
};
//-----------------------------------------//
let searchValue = '';

//---------eventLisners------------//

refs.searchInput.addEventListener('input', inputValue);
refs.searchBtn.addEventListener('click', submitSearch);
refs.gallery.addEventListener('click', onGalleryCard);
refs.backdrop.addEventListener('click', clickCloseModal);
refs.modalBtnClose.addEventListener('click', modalClose);

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
  console.log(event.target.parentNode.parentNode.parentNode.dataset.id);
  if (event.target.parentNode.parentNode.parentNode.tagName !== 'LI') {
    return;
  }
  loadModalInfo(event.target.parentNode.parentNode.parentNode.dataset.id);

  refs.backdrop.classList.toggle('is-hidden');
}

function modalClose(e) {
  console.log(e);
  e.preventDefault();
  refs.backdrop.classList.toggle('is-hidden');
}

function clickCloseModal(e) {
  if (e.target === refs.backdrop) {
    refs.backdrop.classList.toggle('is-hidden');
  }
}
