const addNotify = type => {
  const library = document.querySelector('div.library');
  const markup = `
  <p class="notify-lib">
    ${type} movies library is empty
  </p>`;
  library.innerHTML = markup;
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
