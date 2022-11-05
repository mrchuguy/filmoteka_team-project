const galleryContainerHome = document.querySelector('.gallery');
const galleryContainerLibrary = document.querySelector('.library');

// Розмітка на головну сторінку

export function renderFilmsOnHomePage(films) {
  galleryContainerHome.innerHTML = '';
  const markup = films
    .map(
      film =>
        `<div class="photo-card">
      <a class="photo" href=${film.backdrop_path} >
      <img  src=https://image.tmdb.org/t/p/w500${film.poster_path} alt="${
          film.title
        }" loading="lazy" title="${film.title}"/></a>
      <div class="info">  
      <p class="info-name">
      ${film.title}</p>
      <p class="info-genre-year">${film.genre_ids} | ${Number.parseInt(
          film.release_date
        )}</p>
      
      </div>
        </div>`
    )
    .join('');

  galleryContainerHome.insertAdjacentHTML('beforeend', markup);
}

// Розмітка на бібліотеку

export function renderFilmsOnLibraryPage(films) {
  galleryContainerLibrary.innerHTML = '';
  const markup = films
    .map(
      film =>
        `<div class="photo-card">
      <a class="photo" href=${film.backdrop_path} >
      <img  src=https://image.tmdb.org/t/p/w500${film.poster_path} alt="${
          film.title
        }" loading="lazy" title="${film.title}"/></a>
      <div class="info">
      <p class="info-name">
      ${film.title}</p>
      <p class="info-genre-year">${film.genre_ids} | ${Number.parseInt(
          film.release_date
        )} <span class="info-rating">${film.vote_average.toFixed(1)}
      </span></p>

      </div>
        </div>`
    )
    .join('');

  galleryContainerLibrary.insertAdjacentHTML('beforeend', markup);
}
