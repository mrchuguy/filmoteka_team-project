//-----imports------//
import { notifyOptions, WARNING_MESSAGE } from './notifyOptions';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import onLoadSearchPage from './onLoadHomePage';

//-----refs------///

const refs = {
  searchInput: document.querySelector('input'),
  searchBtn: document.querySelector('.submit-button'),
  watchedBtn: document.querySelector('.watched'),
  queueBtn: document.querySelector('.queue'),
  gallery: document.querySelector('.gallery'),
};
//-----------------------------------------//
console.log(refs.gallery);

let searchValue = '';

//---------eventLisners------------//

refs.searchInput.addEventListener('input', inputValue);
refs.searchBtn.addEventListener('click', submitSearch);
refs.searchBtn.addEventListener('click', submitSearch);
refs.gallery.addEventListener('click', onGalleryCard);

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
  console.log('currenttarget:', event.currentTarget);
  console.log('target:', event.target);
}
