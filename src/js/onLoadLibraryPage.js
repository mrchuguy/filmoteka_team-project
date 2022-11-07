const addNotify = type => {
  const mainPage = document.querySelector('main');
  const markup = `
  <p class="notify-lib">
    ${type} movies library is empty
  </p>`;
  const notify = document.querySelector('.notify-lib');
  if (notify) notify.remove();
  mainPage.insertAdjacentHTML('afterbegin', markup);
};

const loadWatched = () => {
  //request watched movies
  if (false) {
    console.log('Watched');
  } else {
    addNotify('Watched');
  }
};

const loadQueue = () => {
  if (false) {
    console.log('Queued');
  } else {
    addNotify('Queued');
  }
};

loadWatched();

export { loadWatched, loadQueue };
