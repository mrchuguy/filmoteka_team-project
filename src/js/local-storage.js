export const WATCHED = "watched"
export const QUEUE = "queue"


//у функцію передаємо першим парметром - ID фільму, 
//другим - ОБЄКТ сам фільм, 
//третім - константу потрібного списку або watched або queue
export function saveMovie(key, value, constName) {
  try {
    value.list=constName
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState );
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

export function loadMovie (key){
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

//у функцію передаємо - константу потрібного списку або WATCHED  або QUEUE
// ретурн відфільтрований масив об`єктів, в залежності, що передали аргументом
//в constName, це або переглянуті або в фільми черзі

export function loadAllMovie() {
 let arrayMovie = []
  try {
   for(let key in localStorage) 
   {
     if (!localStorage.hasOwnProperty(key)) 

     { continue; }
     let serializedState = localStorage.getItem(key);
     serializedState = JSON.parse(serializedState);
     if (serializedState.list===constName) {
       arrayMovie.push(serializedState)
     }
   }
return arrayMovie  
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

// функція перевіряє за ID фільму наявність або відсутність фільму в локал сторедж
// функція повертає 3 варіанти відповіді
// варіант 1 повертає фолс коли фільму немає в watched і немає в queue
// варіант 2 повертає watched  - фільм з таким ID знайдений у списку watched
// варіант 3 повертає queue

export function checkMovieInStorage(ID){
  try {
    let result = false
   for(let key in localStorage) 
   {
     if (!localStorage.hasOwnProperty(key)) 
     { continue; }
     let serializedState = localStorage.getItem(key);
     serializedState = JSON.parse(serializedState);
     if (serializedState.id === ID) {
      result = serializedState.list
     }
   }
 return result
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};