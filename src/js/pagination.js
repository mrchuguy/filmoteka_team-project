import Pagination from 'tui-pagination';
import axios from 'axios';
import 'tui-pagination/dist/tui-pagination.min.css';

const params = {
  key: '30688451-760a190d43b2b36afa0e2975a',
  q: 'car',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: 1,
  per_page: 20,
};

const paginationOptions = {
  totalPages: 1,
  totalItems: 60,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
  template: {
    page: '<a href="#" class="tui-page-btn-custom">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn-custom tui-is-selected-custom">{{page}}</strong>',
    moveButton:
      '<a id="{{type}}" href="#" class="tui-page-btn-custom tui-{{type}}">' +
      '<span class="tui-ico-{{type}}"></span>' +
      '</a>',
    disabledMoveButton:
      '<span id="{{type}}" class="tui-page-btn-custom tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn-custom tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const paginationBoxEl = document.querySelector('#tui-pagination-container');
//const pagination = new Pagination(paginationBoxEl, paginationOptions);

// pagination.on('beforeMove', evt => {
//   const { page } = evt;
//   params.page = page;

//   fetchImages()
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error.message));

// });

const fetchImages = async () => {
  const response = await axios.get('https://pixabay.com/api/', { params });
  return response;
};
