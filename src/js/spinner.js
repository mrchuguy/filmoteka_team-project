import spinner from 'jsspin';

let spinner = new Spinner();
 
spinner.start();
 
setTimeout(function(){
  spinner.stop();
},5000);

