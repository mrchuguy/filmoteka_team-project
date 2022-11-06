import ApiService from './fetch-api';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import paginationOptions from './paginationOptions';
import { renderFilmsOnHomePage } from './render-films';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { spinnerToggle, hideSpinner } from './spinner';
import { notifyOptions, ERROR_MESSAGE } from './notifyOptions';

const newApi = new ApiService();

export const windowScroll = () => {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const hideSpinnerAfterLoad = () => {
  const lastImage =
    document.querySelector('.gallery').lastElementChild.firstElementChild
      .firstElementChild;
  lastImage.onload = function () {
    hideSpinner();
  };
};

const onLoadHomePage = () => {
  spinnerToggle();
  newApi.findTrending().then(response => {
    /* Render movies */
    renderFilmsOnHomePage(response.data.results);

    /* Pagination */
    initPagination(true, response.data.total_results);

    hideSpinnerAfterLoad();
  });
};

const onLoadSearchPage = q => {
  newApi.searchQuery = q;
  spinnerToggle();
  newApi.findByKeyword().then(response => {
    if (response.data.total_results > 0) {
      /* Render movies */
      renderFilmsOnHomePage(response.data.results);

      /* Pagination */
      initPagination(false, response.data.total_results);
    } else {
      Notify.failure(ERROR_MESSAGE, notifyOptions);
      hideSpinner();
    }
    hideSpinnerAfterLoad();
  });
};

const initPagination = (isPopularFilms, totalResult) => {
  paginationOptions.totalItems = totalResult;
  const paginationBoxEl = document.querySelector('#tui-pagination-container');
  const pagination = new Pagination(paginationBoxEl, paginationOptions);

  pagination.on('beforeMove', spinnerToggle);

  /* Response new page */
  pagination.on('afterMove', evt => {
    newApi.page = evt.page;
    windowScroll();
    if (isPopularFilms)
      newApi.findTrending().then(response => {
        /* Render movies */
        renderFilmsOnHomePage(response.data.results);
        hideSpinnerAfterLoad();
      });
    else
      newApi.findByKeyword().then(response => {
        /* Render movies */
        renderFilmsOnHomePage(response.data.results);
        hideSpinnerAfterLoad();
      });
  });
};
onLoadHomePage();

export default onLoadSearchPage;
