import ApiService from './fetch-api';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import paginationOptions from './paginationOptions';
//import renderFilmsOnHomePage from './render-films';

const newApi = new ApiService();

const onLoadHomePage = () => {
  newApi.findTrending().then(response => {
    /* Render movies */
    console.log(response.data.results);

    /* Pagination */
    initPagination(true, response.data.total_results);
  });
};

const onLoadSearchPage = q => {
  newApi.searchQuery = q;
  newApi.findByKeyword().then(response => {
    /* Render movies */
    console.log(response.data.results);

    /* Pagination */
    initPagination(false, response.data.total_results);
  });
};

const initPagination = (isPopularFilms, totalResult) => {
  paginationOptions.totalItems = totalResult;
  const paginationBoxEl = document.querySelector('#tui-pagination-container');
  const pagination = new Pagination(paginationBoxEl, paginationOptions);

  /* Response new page */
  pagination.on('afterMove', evt => {
    newApi.page = evt.page;
    if (isPopularFilms)
      newApi.findTrending().then(response => {
        /* Render movies */
        console.log(response.data.results);
      });
    else
      newApi.findByKeyword().then(response => {
        /* Render movies */
        console.log(response.data.results);
      });
  });
};

onLoadHomePage();
//onLoadSearchPage('car');
export default onLoadSearchPage;
