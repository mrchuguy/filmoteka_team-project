import { renderGenres } from './renderGenres';

const galleryContainerHome = document.querySelector('.gallery');
const galleryContainerLibrary = document.querySelector('.library');

// Розмітка на головну сторінку

export function renderFilmsOnHomePage(films) {
  galleryContainerHome.innerHTML = '';
  console.log(films);
  const markup = films
    .map(
      film =>
        `<li class="gallery__item" data-id="${film.id}">
              <a class="gallery__link" href="">
                <div class="gallery__link--wrap">
                <div class="gallery__img-background">
                  <img src="https://image.tmdb.org/t/p/w500${nullOrNot(
                    film.poster_path
                  )}" alt="${film.title}" loading="lazy"  />
                 
                  <img class="gallery__overlay" src="https://image.tmdb.org/t/p/w500${nullOrNot(
                    film.poster_path
                  )}" alt="${film.title}" loading="lazy"  />
                </div>
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
  galleryContainerLibrary.innerHTML = '';
  const markup = films
    .map(
      `<li class="gallery__item" data-id="${film.id}">
              <a class="gallery__link" href="">
                <div class="gallery__link--wrap">
                <div class="gallery__img-background">
                  <img src="https://image.tmdb.org/t/p/w500${nullOrNot(
                    film.poster_path
                  )}" alt="${film.title}" loading="lazy"  />
                 
                  <img class="gallery__overlay" src="https://image.tmdb.org/t/p/w500${nullOrNot(
                    film.poster_path
                  )}" alt="${film.title}" loading="lazy"  />
                </div>
                </div>
                <div class="info">
                  <p class="info-name"> ${film.title}</p>
                  <p class="info-genre-year">${renderGenres(
                    film.genre_ids
                  )} | ${Number.parseInt(
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

function nullOrNot(p) {
  if (p !== null) {
    return p;
  } else {
    console.log('Нет картинки :( что делать');
  }
}
