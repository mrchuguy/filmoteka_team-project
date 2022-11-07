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
  modalInfo.insertAdjacentHTML('beforeend', modalMarkup);
}

const film = {
  adult: false,
  backdrop_path: '/sjQExPPTzO68ZAXABKpmPP9bavI.jpg',
  belongs_to_collection: null,
  budget: 40000000,
  genres: [
    { id: 9648, name: 'Mystery' },
    { id: 53, name: 'Thriller' },
    { id: 35, name: 'Comedy' },
  ],
  homepage: 'https://searchlightpictures.com/see-how-they-run/',
  id: 766475,
  imdb_id: 'tt13640696',
  original_language: 'en',
  original_title: 'See How They Run',
  overview:
    'In the West End of 1950s London, plans for a movie version of a smash-hit play come to an abrupt halt after a pivotal member of the crew is murdered. When world-weary Inspector Stoppard and eager rookie Constable Stalker take on the case, the two find themselves thrown into a puzzling whodunit within the glamorously sordid theater underground, investigating the mysterious homicide at their own peril.',
  popularity: 129.242,
  poster_path: '/g0M3tqfHF7vWNbAf7CaoFeJxcSB.jpg',
  production_companies: [
    {
      id: 5654,
      logo_path: '/b7vmFp8iNIY9Djmvie3yzSKeg5l.png',
      name: 'DJ Films',
      origin_country: 'GB',
    },
    {
      id: 127929,
      logo_path: '/fCB4AVYvxxDvqumgYqsN6ehyN3G.png',
      name: 'Searchlight Pictures',
      origin_country: 'US',
    },
  ],
  production_countries: [
    { iso_3166_1: 'GB', name: 'United Kingdom' },
    { iso_3166_1: 'US', name: 'United States of America' },
  ],
  release_date: '2022-09-09',
  revenue: 18941169,
  runtime: 98,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' },
    { english_name: 'Italian', iso_639_1: 'it', name: 'Italiano' },
  ],
  status: 'Released',
  tagline: 'The greatest murder ever staged.',
  title: 'See How They Run',
  video: false,
  vote_average: 6.684,
  vote_count: 215,
};

renderFilmsModalPage(film);
