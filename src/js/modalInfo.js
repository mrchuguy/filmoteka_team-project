const modalInfo = document.querySelector('.modal-info');
export function renderFilmsModalPage(film) {
  const modalMarkup = `
  <div class="img-thumb">
    <img
        src="https://image.tmdb.org/t/p/w500${film.poster_path}"
        alt="${film.title}" loading="lazy" title="${film.title}"
        class="modal_img"
    />
  </div>
    <div class="modal_info">
      <h2 class="modal_title">${film.title}</h2>
      <div class="modal_detail">
      <ul class="modal__movie-info">
      <li class="movie__info-item">
        <span class="movie__info-title">Vote / Votes</span><span class="movie__info-data"><span class="votes__colored">${
          film.vote_average
        }</span><span class="vote__divide">/</span> ${film.vote_count}</span>
      </li>
      <li class="movie__info-item">
        <span class="movie__info-title">Popularity</span><span class="movie__info-data">${
          film.popularity
        }</span>
      </li>
      <li class="movie__info-item">
        <span class="movie__info-title">Original Title</span><span class="movie__info-data original-title">${
          film.original_title
        }</span>
      </li> 
      <li class="movie__info-item">
        <span class="movie__info-title">Genre</span><span class="movie__info-data">${film.genres
          .map(genre => genre.name)
          .join(', ')}</span>
      </li>
    </ul>
      </div>
      <p class="modal_about">About</p>
      <p class="modal_about-text">${film.overview}</p>
      <div class="modal_button">
        <button type="button" class="button-watch btn" data-type data-id="${
          film.id
        }"></button>
        <button type="button" class="button-queue btn" data-type data-id="${
          film.id
        }"></button>
        <button type="button" class="button-youtube btn" data-type data-id="${
          film.id
        }">TRAILER</button>
      </div>
    </div>`;

  const childArr = [...modalInfo.children];
  for (let i = 0; i < childArr.length; i++) {
    if (i > 0) childArr[i].remove();
  }
  modalInfo.insertAdjacentHTML('beforeend', modalMarkup);
}
