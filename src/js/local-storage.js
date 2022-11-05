const WATCHED = "watched"
const QUEUE = "queue"


//у функцію передаємо першим парметром - ID фільму, 
//другим - ОБЄКТ сам фільм, 
//третім - константу потрібного списку
function saveMovie(key, value, constName) {
  try {
    value.list=constName
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState );
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

function loadMovie (key){
  try {
    const serializedState = localStorage.getItem(key);
    console.log(typeof(serializedState))
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

//у функцію передаємо - константу потрібного списку
// ретурн відфільтрований масив об`єктів переглянутих або в черзі

function loadAllMovie(constName) {
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
