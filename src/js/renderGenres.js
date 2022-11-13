import ApiService from './fetch-api';

const fetchGenres = new ApiService();

export let genres = [];

const initGenres = () => {
  fetchGenres.getMovieGenres().then(response => {
    genres = response.data.genres;
  });
};

export const renderGenres = arrGenresId => {
  const suitableGenres = arrGenresId.map(
    genreId => genres.filter(genre => genre.id === genreId)[0].name
  );

  if (suitableGenres.length > 3) {
    suitableGenres.splice(2, suitableGenres.length - 2);
    suitableGenres.push('Other');
  }

  const genresString = suitableGenres.join(', ');
  return genresString;
};

initGenres();
