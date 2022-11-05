//import ApiService from './fetch-api';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const paginationBoxEl = document.querySelector('#tui-pagination-container');

const paginationOptions = {
  totalItems: 20,
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

export default paginationOptions;
