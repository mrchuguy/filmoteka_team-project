import settings from './settings';
import axios from 'axios';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  get querry() {
    return this.searchQuery;
  }
  set querry(newSearchQuery) {
    this.searchQuery = newSearchQuery;
  }

  findTrending() {
    return axios
      .get(
        `${settings.BASE_URL}/trending/movie/day?api_key=${settings.API_KEY}`,
        {
          params: {
            page: `${this.page}`,
          },
        }
      )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error);
      });
  }
  findById(id) {
    return axios
      .get(`${settings.BASE_URL}/movie/${id}?api_key=${settings.API_KEY}`, {})
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  findByKeyword() {
    return axios
      .get(
        `${settings.BASE_URL}/search/movie?api_key=${settings.API_KEY}&language=en-US&query=${this.searchQuery}&include_adult=false`,
        {
          params: {
            page: `${this.page}`,
          },
        }
      )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  getMovieGenres() {
    return axios
      .get(
        `${settings.BASE_URL}/genre/movie/list?api_key=${settings.API_KEY}`,
        {}
      )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }
}

// newApi.findTrending().then(response => {
//         response.data
//?????????????? ?????????? ?? 20 ???????????????????????????????? ??????????????

//     })

// newApi.findById(55).then(response => {
//         response.data
// ???????????? ?????????? ?? ????55

//     })
// }

//  newApi.querry = e.currentTarget.elements.searchQuery.value.trim()
//     newApi.findByKeyword().then(response => {
//         response.data
//         ???????????? ?????????? ???? ???????????????? ????????????

//     })

//    newApi.getMovieGenres().then(response => {
//         response.data.genres
//          ?????????????? ?????????? ?? 19 ?????????????? -  ???????????? ?????? ???????????? ????????

//                 0 {  id: 27, name: "Horror"}
//                 1{ id: 12, name: 'Adventure' },  ?? ?? ??.

//     })

// newApi.findById(28).then(response => {
//     response.data.backdrop_path
//     const poster = settings.BASE_IMG_URL + response.data.backdrop_path
//     console.log(poster)
// ?????????????? , ?????? ???????????????? ???????????? ?? ???????????? ID28

// })
