

export function saveMovie(key, value) {
  try {
    let getList = localStorage.getItem(key);
    let movie = JSON.stringify(value);
    if (getList === null || !getList || getList ==="[]"){ 
      getList = `[${movie}]`
    } 
    else {
      getList = `${getList.slice(0, -1)}, ${movie}]`
    }
    localStorage.setItem(key, getList );
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};


 export function loadAllMovie(key) {
   try {
     getList = localStorage.getItem(key);
     getList = JSON.parse(getList);
  } catch (error) {
     console.error("Get state error: ", error.message);
  }
};


 

export function checkMovieInStorage(key, id){
  try {
    let getList = localStorage.getItem(key);
    getList = JSON.parse(getList);
    return getList.some(item => item.id === id)   
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};



 export function loadMovie (key, id){
  try {
    let getList = localStorage.getItem(key);
    getList = JSON.parse(getList);
   return getList.find(item => item.id === id)
    }
   catch (error) {
    console.error("Get state error: ", error.message);
  }
};

 

 export function deleteMovie (key, id){
   try {
    let getList = localStorage.getItem(key);
    getList = JSON.parse(getList);
    let newList =  getList.filter(item => item.id !== id)
    newList = JSON.stringify(newList); 
    newList = `${newList}`
    localStorage.setItem(key, newList);  
    }catch (error) {
    console.error("Get state error: ", error.message);
  }
};
