const modalInfo = document.querySelector('.modal-info');
export function renderFilmsModalPage(film) {
  const modalMarkup = `<img
      src=https://image.tmdb.org/t/p/w500${film.poster_path} 
      alt="${film.title}" loading="lazy" title="${film.title}
      class="img"
      width="375"
      height="478"
    />
    <div class="modal_info">
      <h2 class="modal_title">${film.title}</h2>
      <div class="modal_detail">
      <ul class="modal_detail-ul">
  <li>
<ul class="modal_detail-ul1">
<li>Vote / Votes</li>
<li>Popularity</li>
<li>Original Title</li>
<li>Genre</li>
</ul>
  </li>
  <li>
  <ul class="modal_detail-ul2">
  <li>${film.vote_average}/${film.vote_count}</li>
  <li>${film.popularity}</li>
  <li>${film.original_title}</li>
  <li>${film.genre_ids}</li>
</ul>
</li>
</ul>
      </div>
      <p class="modal_about">опис</p>
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
