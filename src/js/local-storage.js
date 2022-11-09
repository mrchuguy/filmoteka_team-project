const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export const loadAllMovie = key => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      save(key, []);
      return [];
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export function saveMovie(key, value) {
  let getList = loadAllMovie(key);
  getList.push(value);
  save(key, getList);
}

export function checkMovieInStorage(key, id) {
  let getList = loadAllMovie(key);
  return getList.some(item => item.id === id);
}

export function loadMovie(key, id) {
  let getList = loadAllMovie(key);
  return getList.find(item => item.id === id);
}

export function deleteMovie(key, id) {
  let getList = loadAllMovie(key);
  let newList = getList.filter(item => item.id != id);
  save(key, newList);
}
