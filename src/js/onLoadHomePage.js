import ApiService from './fetch-api';

const POPULAR = 1;
const SEARCH = 2;

let currentPage = POPULAR;

const onLoadHomePage = () => {
  const newApi = new ApiService();
  if (currentPage === 1) {
    console.log('load popular');
    newApi.findTrending().then(response => {
      console.log(response.data);
    });
    //render movies
    //init pagination
  } else if (currentPage === 2) {
    console.log('load search');
    //fetch search movies
    //render movies
    //init pagination
  }
};

onLoadHomePage();
