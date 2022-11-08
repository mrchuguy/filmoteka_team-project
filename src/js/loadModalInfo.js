import ApiService from './fetch-api';
import { spinnerToggle, hideSpinner } from './spinner';
import { renderFilmsModalPage } from './modalInfo';

const infoMovieApi = new ApiService();

const loadModalInfo = id => {
  spinnerToggle();
  infoMovieApi.findById(id).then(response => {
    renderFilmsModalPage(response.data);
    hideSpinner();
  });
};

export default loadModalInfo;
