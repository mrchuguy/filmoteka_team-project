import { loadAllMovie } from './local-storage';
import { renderFilmsOnLibraryPage } from './render-films';
import { spinnerToggle, hideSpinner } from './spinner';

const removeNotify = () => {
  const notify = document.querySelector('.notify-lib');
  if (notify) notify.remove();
};

const clearLibrary = () => {
  const galleryContainerLibrary = document.querySelector('.library-box');
  galleryContainerLibrary.innerHTML = '';
};

const addNotify = type => {
  const mainPage = document.querySelector('main');
  const markup = `
  <p class="notify-lib">
    ${type} movies library is empty
  </p>`;
  removeNotify();
  mainPage.insertAdjacentHTML('afterbegin', markup);
};

const loadWatched = () => {
  removeNotify();
  const watchedMovie = loadAllMovie('WATCHED');
  if (watchedMovie.length > 0) {
    renderFilmsOnLibraryPage(watchedMovie);
  } else {
    clearLibrary();
    addNotify('Watched');
  }
};

const loadQueue = () => {
  removeNotify();
  const queuedMovie = loadAllMovie('QUEUE');
  if (queuedMovie.length > 0) {
    renderFilmsOnLibraryPage(queuedMovie);
  } else {
    clearLibrary();
    addNotify('Queued');
  }
};

loadWatched();

export { loadWatched, loadQueue };
