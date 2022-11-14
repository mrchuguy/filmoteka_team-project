import ApiService from './fetch-api';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import paginationOptions from './paginationOptions';
import { renderFilmsOnHomePage } from './render-films';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { spinnerToggle, hideSpinner } from './spinner';
import { notifyOptions, ERROR_MESSAGE } from './notifyOptions';
import { genres } from './renderGenres';

const newApi = new ApiService();
let lastPage = null;

const windowScroll = () => {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const onLoadHomePage = () => {
  spinnerToggle();
  newApi.findTrending().then(response => {
    /* Render movies */
    while (genres.length === 0) {}
    renderFilmsOnHomePage(response.data.results);
    lastPage = Math.ceil(response.data.total_results / 20);
    /* Pagination */
    initPagination(true, response.data.total_results);

    hideSpinner();
  });
};

const onLoadSearchPage = q => {
  newApi.searchQuery = q;
  newApi.page = 1;
  spinnerToggle();
  newApi.findByKeyword().then(response => {
    if (response.data.total_results > 0) {
      /* Render movies */
      renderFilmsOnHomePage(response.data.results);

      lastPage = Math.ceil(response.data.total_results / 20);
      /* Pagination */
      initPagination(false, response.data.total_results);
    } else {
      Notify.failure(ERROR_MESSAGE, notifyOptions);
      hideSpinner();
    }
    hideSpinner();
  });
};

const changePaginationStyle = page => {
  if (page === 1) {
    document.querySelector('.tui-first').classList.add('is-hidden');
    document.querySelector('.tui-prev').classList.add('is-hidden');
  } else {
    document.querySelector('.tui-first').classList.remove('is-hidden');
    document.querySelector('.tui-prev').classList.remove('is-hidden');
  }

  if (page === lastPage) {
    document.querySelector('.tui-last').classList.add('is-hidden');
    document.querySelector('.tui-next').classList.add('is-hidden');
  } else {
    document.querySelector('.tui-last').classList.remove('is-hidden');
    document.querySelector('.tui-next').classList.remove('is-hidden');
  }
};

const initPagination = (isPopularFilms, totalResult) => {
  const paginationBoxEl = document.querySelector('#tui-pagination-container');
  if (totalResult > 20) {
    paginationOptions.totalItems = totalResult;
    const pagination = new Pagination(paginationBoxEl, paginationOptions);
    changePaginationStyle(1);
    pagination.on('beforeMove', spinnerToggle);

    /* Response new page */
    pagination.on('afterMove', evt => {
      newApi.page = evt.page;
      changePaginationStyle(evt.page);
      windowScroll();
      if (isPopularFilms)
        newApi.findTrending().then(response => {
          /* Render movies */
          renderFilmsOnHomePage(response.data.results);
          hideSpinner();
        });
      else
        newApi.findByKeyword().then(response => {
          /* Render movies */
          renderFilmsOnHomePage(response.data.results);
          hideSpinner();
        });
    });
  } else {
    paginationBoxEl.innerHTML = '';
  }
};
onLoadHomePage();

export default onLoadSearchPage;
