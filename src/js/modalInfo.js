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
      <ul class="modal_detail-ul">
  <li>
<ul class="modal_detail-ul1">
<li class="modal_detail-ul1-li">Vote / Votes</li>
<li class="modal_detail-ul1-li">Popularity</li>
<li class="modal_detail-ul1-li">Original Title</li>
<li class="modal_detail-ul1-li">Genre</li>
</ul>
  </li>
  <li>
  <ul class="modal_detail-ul2">
  <li class="modal_detail-ul2-li"><span>${film.vote_average}</span> / ${film.vote_count}</li>
  <li class="modal_detail-ul2-li">${film.popularity}</li>
  <li class="modal_detail-ul2-li">${film.original_title}</li>
  <li class="modal_detail-ul2-li">${film.genres.name}</li>
</ul>
</li>
</ul>
      </div>
      <p class="modal_about">About</p>
      <p class="modal_about-text">${film.overview}</p>
      <div class="modal_button">
        <button type="button" class="button-watch btn">
          ADD TO WATCHED
        </button>
        <button type="button" class="button-queue btn">
          ADD TO QUEUE
        </button>
      </div>
    </div>`;

  const childArr = [...modalInfo.children];
  for (let i = 0; i < childArr.length; i++) {
    if (i > 0) childArr[i].remove();
  }
  modalInfo.insertAdjacentHTML('beforeend', modalMarkup);
}