import { renderGenres } from './renderGenres';

// Розмітка на головну сторінку

export function renderFilmsOnHomePage(films) {
  const galleryContainerHome = document.querySelector('.gallery');
  galleryContainerHome.innerHTML = '';
  const markup = films
    .map(
      film =>
        `<li class="gallery__item" data-id="${film.id}">
              <a class="gallery__link" href="">
                <div class="gallery__link--wrap">
                  <img class="gallery__overlay" src=${nullOrNot(
                    film.poster_path
                  )}
                   alt="${film.title}" loading="lazy"  />
                </div>
                <div class="info">
                  <p class="info-name"> ${film.title}</p>
                  <p class="info-genre-year">${renderGenres(
                    film.genre_ids
                  )} | ${Number.parseInt(film.release_date)}</p>
                </div>
              </a>
            </li>`
    )
    .join('');

  galleryContainerHome.insertAdjacentHTML('beforeend', markup);
}

// Розмітка на бібліотеку

export function renderFilmsOnLibraryPage(films) {
  const galleryContainerLibrary = document.querySelector('.library-box');
  galleryContainerLibrary.innerHTML = '';
  const markup = films
    .map(
      film =>
        `<li class="gallery__item" data-id="${film.id}">
              <a class="gallery__link" href="">
              <div class="gallery__link--wrap">
              <img class="gallery__overlay" src=${nullOrNot(film.poster_path)}
               alt="${film.title}" loading="lazy"  />
            </div>
                <div class="info">
                  <p class="info-name"> ${film.title}</p>
                  <p class="info-genre-year">${film.genres
                    .map(genre => genre.name)
                    .join(', ')} | ${Number.parseInt(
          film.release_date
        )} <span class="info-rating">${film.vote_average.toFixed(1)}
      </span></p>
                </div>
              </a>
            </li>`
    )
    .join('');

  galleryContainerLibrary.insertAdjacentHTML('beforeend', markup);
}

function nullOrNot(pic) {
  if (pic === null) {
    return 'https://billuchi.com/wp-content/themes/barberry/images/placeholder.jpg';
  } else {
    return `https://image.tmdb.org/t/p/w500${pic}`;
  }
}
