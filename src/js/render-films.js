import ApiService from './fetch-api';

const films = [
  {
    adult: false,
    backdrop_path: '/osC9foMjZxtd3fbUrwn86BzM9En.jpg',
    id: 766475,
    title: 'See How They Run',
    original_language: 'en',
    original_title: 'See How They Run',
    overview:
      'In the West End of 1950s London, plans for a movie version of a smash-hit play come to an abrupt halt after a pivotal member of the crew is murdered. When world-weary Inspector Stoppard and eager rookie Constable Stalker take on the case, the two find themselves thrown into a puzzling whodunit within the glamorously sordid theater underground, investigating the mysterious homicide at their own peril.',
    poster_path: '/r3rpSAi2yukZwr9H2km0WKGODWo.jpg',
    media_type: 'movie',
    genre_ids: [9648, 53, 35],
    popularity: 65.94,
    release_date: '2022-09-09',
    video: false,
    vote_average: 6.8,
    vote_count: 175,
  },
  {
    adult: false,
    backdrop_path: '/3UJWmxfZB71Kynf26G8HjstOeJH.jpg',
    id: 829280,
    title: 'Enola Holmes 2',
    original_language: 'en',
    original_title: 'Enola Holmes 2',
    overview:
      'Now a detective-for-hire like her infamous brother, Enola Holmes takes on her first official case to find a missing girl, as the sparks of a dangerous conspiracy ignite a mystery that requires the help of friends — and Sherlock himself — to unravel.',
    poster_path: '/tegBpjM5ODoYoM1NjaiHVLEA0QM.jpg',
    media_type: 'movie',
    genre_ids: [12, 80, 28, 9648],
    popularity: 154.071,
    release_date: '2022-11-04',
    video: false,
    vote_average: 8.4,
    vote_count: 5,
  },
  {
    adult: false,
    backdrop_path: '/7zQJYV02yehWrQN6NjKsBorqUUS.jpg',
    id: 724495,
    title: 'The Woman King',
    original_language: 'en',
    original_title: 'The Woman King',
    overview:
      'The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.',
    poster_path: '/438QXt1E3WJWb3PqNniK0tAE5c1.jpg',
    media_type: 'movie',
    genre_ids: [28, 18, 36],
    popularity: 428.45,
    release_date: '2022-09-15',
    video: false,
    vote_average: 7.457,
    vote_count: 211,
  },
  {
    adult: false,
    backdrop_path: '/ev0PWpXvWWoWsg69hOcXjZs2Ayn.jpg',
    id: 882598,
    title: 'Smile',
    original_language: 'en',
    original_title: 'Smile',
    overview:
      "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
    poster_path: '/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg',
    media_type: 'movie',
    genre_ids: [27, 9648, 53],
    popularity: 938.656,
    release_date: '2022-09-23',
    video: false,
    vote_average: 6.764,
    vote_count: 373,
  },
  {
    adult: false,
    backdrop_path: '/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg',
    id: 49046,
    title: 'All Quiet on the Western Front',
    original_language: 'de',
    original_title: 'Im Westen nichts Neues',
    overview:
      'Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.',
    poster_path: '/2IRjbi9cADuDMKmHdLK7LaqQDKA.jpg',
    media_type: 'movie',
    genre_ids: [28, 18, 36, 10752],
    popularity: 616.253,
    release_date: '2022-10-07',
    video: false,
    vote_average: 7.914,
    vote_count: 399,
  },
  {
    adult: false,
    backdrop_path: '/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg',
    id: 361743,
    title: 'Top Gun: Maverick',
    original_language: 'en',
    original_title: 'Top Gun: Maverick',
    overview:
      'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.',
    poster_path: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    media_type: 'movie',
    genre_ids: [28, 18],
    popularity: 903.397,
    release_date: '2022-05-24',
    video: false,
    vote_average: 8.345,
    vote_count: 4541,
  },
  {
    adult: false,
    backdrop_path: '/b8RHwK3wxn4aHmtj946rBKANo74.jpg',
    id: 944864,
    title: 'The Takeover',
    original_language: 'nl',
    original_title: 'The Takeover',
    overview:
      "Self-proclaimed ethical hacker Mel Bandison's life is turned upside down when she stops a data breach on a high-tech self-driving bus that also happens to shut down an international criminal network. She then becomes a target and is framed with a deepfake video that “shows” that she murders someone.",
    poster_path: '/i6bqxo8o0yYDUUaQtkHaism8Bkr.jpg',
    media_type: 'movie',
    genre_ids: [28, 80, 53],
    popularity: 76.985,
    release_date: '2022-11-01',
    video: false,
    vote_average: 5.769,
    vote_count: 26,
  },
  {
    adult: false,
    backdrop_path: '/e3GJaLTXrKzFAMB2kIQtzgadBHw.jpg',
    id: 595586,
    title: 'Causeway',
    original_language: 'en',
    original_title: 'Causeway',
    overview:
      'A US soldier suffers a traumatic brain injury while fighting in Afghanistan and struggles to adjust to life back home in New Orleans. When she meets local mechanic James, the pair begin to forge an unexpected bond.',
    poster_path: '/bUzKIqFIS05Ss31zRTfZfHJIgDP.jpg',
    media_type: 'movie',
    genre_ids: [18],
    popularity: 26.138,
    release_date: '2022-10-28',
    video: false,
    vote_average: 7,
    vote_count: 4,
  },
  {
    adult: false,
    backdrop_path: '/rjavWnFQpxiZ18BA2PZpsBPmhl0.jpg',
    id: 744114,
    title: 'My Policeman',
    original_language: 'en',
    original_title: 'My Policeman',
    overview:
      'In the late 1990s, the arrival of elderly invalid Patrick into Marion and Tom’s home triggers the exploration of seismic events from 40 years previous: the passionate relationship between Tom and Patrick at a time when homosexuality was illegal.',
    poster_path: '/7TJQmxsfC4LELFzxJmLQyTKvGxe.jpg',
    media_type: 'movie',
    genre_ids: [18, 10749],
    popularity: 75.708,
    release_date: '2022-10-21',
    video: false,
    vote_average: 6.7,
    vote_count: 14,
  },
  {
    adult: false,
    backdrop_path: '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
    id: 436270,
    title: 'Black Adam',
    original_language: 'en',
    original_title: 'Black Adam',
    overview:
      'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
    poster_path: '/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg',
    media_type: 'movie',
    genre_ids: [28, 14, 878],
    popularity: 3774.767,
    release_date: '2022-10-19',
    video: false,
    vote_average: 6.897,
    vote_count: 835,
  },
  {
    adult: false,
    backdrop_path: '/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg',
    id: 505642,
    title: 'Black Panther: Wakanda Forever',
    original_language: 'en',
    original_title: 'Black Panther: Wakanda Forever',
    overview:
      'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
    poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    media_type: 'movie',
    genre_ids: [28, 12, 878],
    popularity: 570.411,
    release_date: '2022-11-09',
    video: false,
    vote_average: 8.333,
    vote_count: 9,
  },
  {
    adult: false,
    backdrop_path: '/8hSx5b4YfD2dzvGtrE6mdXF0xrZ.jpg',
    id: 928344,
    title: 'Weird: The Al Yankovic Story',
    original_language: 'en',
    original_title: 'Weird: The Al Yankovic Story',
    overview:
      'Exploring every facet of ‘Weird Al’ Yankovic’s life, from his meteoric rise to fame with early hits like ‘Eat It’ and ‘Like a Surgeon’ to his torrid celebrity love affairs and famously depraved lifestyle, this biopic takes audiences on a truly unbelievable journey through Yankovic’s life and career, from gifted child prodigy to the greatest musical legend of all time.',
    poster_path: '/qcj2z13G0KjaIgc01ifiUKu7W07.jpg',
    media_type: 'movie',
    genre_ids: [35, 10402, 18],
    popularity: 22.014,
    release_date: '2022-09-08',
    video: false,
    vote_average: 6.6,
    vote_count: 5,
  },
  {
    adult: false,
    backdrop_path: '/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg',
    id: 76600,
    title: 'Avatar: The Way of Water',
    original_language: 'en',
    original_title: 'Avatar: The Way of Water',
    overview:
      'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
    poster_path: '/2bNZNeHyP6sTB98jIucvhJYF5fn.jpg',
    media_type: 'movie',
    genre_ids: [878, 28, 12],
    popularity: 828.903,
    release_date: '2022-12-14',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: '/2SEGjVLy7fYbovIyDR7IntH1jT2.jpg',
    id: 913290,
    title: 'Barbarian',
    original_language: 'en',
    original_title: 'Barbarian',
    overview:
      'In town for a job interview, a young woman arrives at her Airbnb late at night only to find that it has been mistakenly double-booked and a strange man is already staying there. Against her better judgement, she decides to stay the night anyway, but soon discovers that there is much more to be afraid of in the house than the other guest.',
    poster_path: '/idT5mnqPcJgSkvpDX7pJffBzdVH.jpg',
    media_type: 'movie',
    genre_ids: [27, 9648, 53],
    popularity: 782.047,
    release_date: '2022-09-08',
    video: false,
    vote_average: 7.017,
    vote_count: 503,
  },
  {
    adult: false,
    backdrop_path: '/vTDsdu7RoaMQhvyL6073spQMjQW.jpg',
    id: 979924,
    title: 'On the Line',
    original_language: 'en',
    original_title: 'On the Line',
    overview:
      "A host takes a call, where an unknown person threatens to kill the showman's entire family on air. To save loved ones, the radio host will have to play a survival game and the only way to win is to find out the identity of the criminal.",
    poster_path: '/3KxRYXBsKROhhQUjycKPOxktCAy.jpg',
    media_type: 'movie',
    genre_ids: [53],
    popularity: 37.869,
    release_date: '2022-10-31',
    video: false,
    vote_average: 6.2,
    vote_count: 19,
  },
  {
    adult: false,
    backdrop_path: '/ulyR4pWVMRtVcanoassVbmgfEPT.jpg',
    id: 800939,
    title: 'Ticket to Paradise',
    original_language: 'en',
    original_title: 'Ticket to Paradise',
    overview:
      'A divorced couple teams up and travels to Bali to stop their daughter from making the same mistake they think they made 25 years ago.',
    poster_path: '/1tzERH50P5c2mFWtLbgixzLZS1L.jpg',
    media_type: 'movie',
    genre_ids: [35, 10749],
    popularity: 296.171,
    release_date: '2022-09-08',
    video: false,
    vote_average: 6.877,
    vote_count: 208,
  },
  {
    adult: false,
    backdrop_path: '/y4XBYLldCLuNLVeObTndfAaUrc3.jpg',
    id: 896485,
    title: 'Overdose',
    original_language: 'fr',
    original_title: 'Overdose',
    overview:
      'Captain Sara Bellaiche, from Toulouse Judiciary Police branch, is investigating a go-fast linked to the murder of two teenagers, an investigation led by Richard Cross, from the Paris Criminal Brigade. Forced to collaborate in order to find the murderer and stop the bloody go-fast, Sara and Richard are both thrown in a breathless race against the clock on the roads of Spain and France.',
    poster_path: '/lucCmx1bOshDHKP8cBnuSaSc3Lg.jpg',
    media_type: 'movie',
    genre_ids: [28, 80, 53],
    popularity: 29.702,
    release_date: '2022-11-04',
    video: false,
    vote_average: 8,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: '/rBINWYnecAHfpjYiAYaK0jlsXtp.jpg',
    id: 496331,
    title: 'Brahmāstra Part One: Shiva',
    original_language: 'hi',
    original_title: 'ब्रह्मास्त्र पहला भाग: शिवा',
    overview:
      'The story of Shiva – a young man on the brink of an epic love, with a girl named Isha. But their world is turned upside down when Shiva learns that he has a mysterious connection to the Brahmāstra... and a great power within him that he doesn’t understand just yet - the power of Fire.',
    poster_path: '/x61qdvHIsr9U53FwoLVDQqAGur0.jpg',
    media_type: 'movie',
    genre_ids: [28, 12, 14],
    popularity: 25.885,
    release_date: '2022-09-09',
    video: false,
    vote_average: 5.5,
    vote_count: 19,
  },
  {
    adult: false,
    backdrop_path: '/rV0xrSgkOQj2EpiG8n16VHHJeg3.jpg',
    id: 541134,
    title: 'The Good Nurse',
    original_language: 'en',
    original_title: 'The Good Nurse',
    overview:
      'Suspicious that her colleague is responsible for a series of mysterious patient deaths, a nurse risks her own life to uncover the truth in this gripping thriller based on true events.',
    poster_path: '/rSq6cq0LCcbro10jbEaPTEb3WmW.jpg',
    media_type: 'movie',
    genre_ids: [18, 80, 9648],
    popularity: 552.186,
    release_date: '2022-10-19',
    video: false,
    vote_average: 7.15,
    vote_count: 324,
  },
  {
    adult: false,
    backdrop_path: '/zt6sKnx9dEiRCb7oVMlfmmMGJMO.jpg',
    id: 718930,
    title: 'Bullet Train',
    original_language: 'en',
    original_title: 'Bullet Train',
    overview:
      "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
    poster_path: '/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg',
    media_type: 'movie',
    genre_ids: [28, 35, 53],
    popularity: 1407.749,
    release_date: '2022-07-03',
    video: false,
    vote_average: 7.516,
    vote_count: 2153,
  },
];

const galleryContainerHome = document.querySelector('.gallery');
const galleryContainerLibrary = document.querySelector('.library');

// Розмітка на головну сторінку

export function renderFilmsOnHomePage() {
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
      <p class="info-genre-year">${transformGenre(
        film.genre_ids
      )} | ${Number.parseInt(film.release_date)}</p>
      
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

// Функція отримання-переводу жанрів з запиту

export async function transformGenre(ids) {
  try {
    const apiService = new ApiService();
    const fetchedGenres = await apiService.getMovieGenres();
    const arrayOfGenres = fetchedGenres.data.genres;

    let currentFilmGenres = [];

    arrayOfGenres.forEach(item => {
      if (ids.includes(item.id)) {
        currentFilmGenres.push(item.name);
      }
    });

    console.log(currentFilmGenres.join(', '));
    return currentFilmGenres.join(', ');
  } catch {
    error => console.log(error);
  }
}
