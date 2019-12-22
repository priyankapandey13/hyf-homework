// Global Variables





// ------------------------------------------------------------------------ Warmup array exercises 1
// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.


// setTimeout((item) => {
//     console.log(`Called after 2.5 seconds`);
// }, 2500);


    

// ------------------------------------------------------------------------ Warmup array exercises 2
// Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out 
// the stringToLog after delay seconds. Call the function you have created with some different arguments. 


function getCalled(delay, stringToLog){

    setTimeout(() => {console.log(stringToLog);}, delay);

}
// getCalled(1000, `I am here after 1 second`);
// getCalled(2000, `I am here after 2 second`);
// getCalled(3000, `I am here after 3 second`);


// ------------------------------------------------------------------------ Warmup array exercises 3
// Create a button in html. When clicking this button, use the function you created in the previous task to 
// log out the text: Called after 5 seconds 5 seconds after the button is clicked.



// const btnAction = document.querySelector("button");
// btnAction.addEventListener('click', getCalled(5000, `5 seconds after the button is clicked.`));


// ------------------------------------------------------------------------ Warmup array exercises 4
// Create two functions and assign them to two different variables. One function logs out Earth, the other 
// function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. 
// The only thing the third function should do is call the provided parameter function. Try call the third 
// function once with the Earth function and once with the Saturn function.

function earthlogger(){
    console.log(`Earth`);
}
function saturnlogger(){
    console.log(`Earth`);
}

// let funcSaturn = () => console.log(`Saturn`);
function planetLogFunction(item)
{
    console.log(item);
}


// planetLogFunction(earthlogger);
// planetLogFunction(saturnlogger);
// planetLogFunction(`Here`);


// ------------------------------------------------------------------------ Warmup array exercises 5
// Create a button with the text called "Log location". When this button is clicked the location 
// (latitude, longitude) of the user should be logged out using this browser api

const btnarea = document.querySelector(`main`);
const btnlocation = document.createElement("button");
const divlocation = document.createElement("div");
const plocation = document.createElement("p");
btnarea.appendChild(btnlocation);
btnarea.appendChild(divlocation);
btnarea.appendChild(plocation);
btnlocation.innerHTML = 'Log location';



// function getlocation() {

//     function success(position) {
//       const latitude  = position.coords.latitude;
//       const longitude = position.coords.longitude;
  
//       plocation.textContent = '';
//       divlocation.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//       divlocation.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
//     }
  
//     function error() {
//         plocation.textContent = 'Unable to retrieve your location';
//     }
  
//     if (!navigator.geolocation) {
//         plocation.textContent = 'Geolocation is not supported by your browser';
//     } else {
//         plocation.textContent = 'Locating…';
//       navigator.geolocation.getCurrentPosition(success, error);
//     }
  
//   }
  
// btnlocation.addEventListener('click', getlocation);




// ------------------------------------------------------------------------ Warmup array exercises 6
// Optional Now show that location on a map using fx the Google maps api


let map, infoWindow;


// const mapcontainer = document.createElement("div");
// btnarea.appendChild(mapcontainer);
// mapcontainer.setAttribute('id', 'map');



// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 6
//   });
//   infoWindow = new google.maps.InfoWindow;

//   // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };

//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Location found.');
//       infoWindow.open(map);
//       map.setCenter(pos);
//     }, function() {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//                         'Error: The Geolocation service failed.' :
//                         'Error: Your browser doesn\'t support geolocation.');
//   infoWindow.open(map);
// }





// ------------------------------------------------------------------------ Warmup array exercises 7


function runAfterDelay(delay, callback){
    setTimeout(() => {
        callback();
    }, delay*1000);
}
runAfterDelay(4, function(){
    console.log(`Should be logged after 4 seconds`);
    
});



// ------------------------------------------------------------------------ Warmup array exercises 8( Not done )

// Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. 
// If a double click has been detected, log out the text: "double click!"

function Knowdblclick(event){
    document.addEventListener('dblclick', function(){alert("double click");}, true);
}
// Knowdblclick(); // Just for double without 0.5 time variable





function makeDoubleClick(doubleClickCallback, singleClickCallback) {
    var clicks = 0, timeout;
    return function() {
        clicks++;
        if (clicks == 1) {
            singleClickCallback && singleClickCallback.apply(this, arguments);
            timeout = setTimeout(function() { clicks = 0; }, 500);
        } else {
            timeout && clearTimeout(timeout);
            doubleClickCallback && doubleClickCallback.apply(this, arguments);
            clicks = 0;
        }
    };
}

var singleClick = function(){ console.log('single click') };
var doubleClick = function(){ console.log('double click') };
// document.addEventListener('click', makeDoubleClick(doubleClick, singleClick));





// ------------------------------------------------------------------------ Warmup array exercises 9
    // Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, 
    // logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call 
    // the logFunnyJoke function that should log out a funny joke. And vice versa.

    let joke;
    
    function logFunnyJoke(){
        joke = "Good Joke is here";
    }
    function logBadJoke(){
        joke = "Bad Joke is here";
    }

    function jokeCreator(shouldTellFunnyJoke, FunnyJoke, BadJoke){
        if(shouldTellFunnyJoke === true)
            {
                logFunnyJoke();
                console.log(joke);
                
            }
            else{
                logBadJoke();
                console.log(joke);
            }
    }

    // jokeCreator(true, logFunnyJoke(), logBadJoke());


// ------------------------------------------------------------------------ Function as a variable (Not completed)


// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.


fun1=()=>{console.log(`Hi fun1 content`);}
fun2=()=>{console.log(`Hi fun2 content`);}
fun3=()=>{console.log(`Hi fun3 content`);}
const fun4=()=>{console.log(`Hi fun4 content`);}  // Create a function as a const and try creating a function normally. Call both functions.
fun5=()=>{console.log(`Hi fun5 content`);}  // Create an object that has a key whose value is a function. Try calling this function

const funArray = [fun1(), fun2(), fun3(), fun4(),{work : fun5()}];

funArray.forEach(element => {

    console.log(element);
    
});





