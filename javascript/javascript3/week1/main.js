// ====================================================================================================== Find a cool API

// Find a cool api and explain how it works and what kind of json data the api responds with.
// Is it an array, an object, a string. How is the data structure.
// Is it fx an array of objects or how is it structured.

// ====================================================================================================== Weather app

const API_KEY = "4c030262d17b5f16a57f1a288881aabb";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
let cityname;
let leti;
let longi;

// The chosen city
// Temperature
// Icon for the weather type
// Wind speed
// How clowdy it is
// When sunrise and sunset is
// Optional a map showing where the city is located

const txtbox = document.createElement("input");
txtbox.type = "text";
txtbox.placeholder = "Enter city name...";

const wthrbtn = document.createElement("input");
wthrbtn.type = "button";
wthrbtn.value = "Get Weather";

//  Fetch weather data from a city

function datacallback(data1) {
  if (!txtbox.value) {
    // txtbox.value = localStorage.getItem(txtbox.value);
    alert(`Please write a city name it can not be blank`);

    // }else if(typeof(Storage) !== "undefined")    // ***************************************Code for local storage
    // {
    //     // Store
    //     localStorage.setItem("cityname", "Copenhagen");
    //     // Retrieve
    //     txtbox.value = localStorage.getItem("cityname");
  } else {
    document.getElementById(
      "citycontainer"
    ).innerHTML = `City Name : ${data1.name}<br>
    Temperature : ${data1.main.temp}<br>
    Weather type : ${data1.weather[0].main} <img src="http://openweathermap.org/img/wn/${data1.weather[0].icon}@2x.png" width="30px" height="30px"> <br> 
    wind speed : ${data1.wind.speed} m/s<br>
    Cloudy : ${data1.clouds.all} m/s<br>
    Sunrise : ${data1.sys.sunrise} m/s<br>
    Sunset : ${data1.sys.sunset} m/s<br>
    
    Coordinates : longitude - ${data1.coord.lon}, latitude - ${data1.coord.lat}<br>`;
  }
}

function getdata() {
  cityname = txtbox.value;
  console.log(cityname);
  fetch(`${weatherUrl}q=${cityname}&appid=${API_KEY}`)
    //    https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}
    // Get the list of all weather aspects
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      datacallback(data);

      (leti = data.coord.lat), (longi = data.coord.lon);
      initMap(leti, longi);
      return data;
    });
}

wthrbtn.setAttribute("onClick", "getdata()");

document.getElementById("weatherbox").appendChild(txtbox);
document.getElementById("weatherbox").appendChild(wthrbtn);

// ---------------------------------------------------------------------------Optional a map showing where the city is located

function initMap(x, y) {
  let myLatLng = { lat: x, lng: y };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: myLatLng,
  });

  let marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Hello World!",
  });

  marker.setMap(map);
}

// Your feature here

// --------------------------------------------------------------------------- Use my current position optional

const btnlocation = document.createElement("input");
btnlocation.type = "button";
btnlocation.value = "Use current location";

const plocation = document.createElement("p");

document.getElementById("weatherbox").appendChild(btnlocation);
document.getElementById("weatherbox").appendChild(plocation);

function getlocationdata(poslati, poslongi) {
  fetch(`${weatherUrl}lat=${poslati}&lon=${poslongi}&appid=${API_KEY}`)
    // Get the list of all weather aspects
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      txtbox.value = data.name; // sets name of the city in ytextbox
      datacallback(data);
      initMap(poslati, poslongi);
      return data;
    });
}

function getlocation() {
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    plocation.textContent = "";

    getlocationdata(latitude, longitude);
    //   initMap(latitude, longitude)
// ====================================================================================================== Find a cool API

// Find a cool api and explain how it works and what kind of json data the api responds with.
// Is it an array, an object, a string. How is the data structure.
// Is it fx an array of objects or how is it structured.

// ====================================================================================================== Weather app

const API_KEY = "4c030262d17b5f16a57f1a288881aabb";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
let cityname;
let leti;
let longi;

// The chosen city
// Temperature
// Icon for the weather type
// Wind speed
// How clowdy it is
// When sunrise and sunset is
// Optional a map showing where the city is located

const txtbox = document.createElement("input");
txtbox.type = "text";
txtbox.placeholder = "Enter city name...";

const wthrbtn = document.createElement("input");
wthrbtn.type = "button";
wthrbtn.value = "Get Weather";

//  Fetch weather data from a city

function datacallback(data1) {
  if (!txtbox.value) {
    // txtbox.value = localStorage.getItem(txtbox.value);
    alert(`Please write a city name it can not be blank`);

    // }else if(typeof(Storage) !== "undefined")    // ***************************************Code for local storage
    // {
    //     // Store
    //     localStorage.setItem("cityname", "Copenhagen");
    //     // Retrieve
    //     txtbox.value = localStorage.getItem("cityname");
  } else {
    document.getElementById(
      "citycontainer"
    ).innerHTML = `City Name : ${data1.name}<br>
    Temperature : ${data1.main.temp}<br>
    Weather type : ${data1.weather[0].main} <img src="http://openweathermap.org/img/wn/${data1.weather[0].icon}@2x.png" width="30px" height="30px"> <br> 
    wind speed : ${data1.wind.speed} m/s<br>
    Cloudy : ${data1.clouds.all} m/s<br>
    Sunrise : ${data1.sys.sunrise} m/s<br>
    Sunset : ${data1.sys.sunset} m/s<br>
    
    Coordinates : longitude - ${data1.coord.lon}, latitude - ${data1.coord.lat}<br>`;
  }
}

function getdata() {
  cityname = txtbox.value;
  console.log(cityname);
  fetch(`${weatherUrl}q=${cityname}&appid=${API_KEY}`)
    //    https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}
    // Get the list of all weather aspects
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      datacallback(data);

      (leti = data.coord.lat), (longi = data.coord.lon);
      initMap(leti, longi);
      return data;
    });
}

wthrbtn.setAttribute("onClick", "getdata()");

document.getElementById("weatherbox").appendChild(txtbox);
document.getElementById("weatherbox").appendChild(wthrbtn);

// ---------------------------------------------------------------------------Optional a map showing where the city is located

function initMap(x, y) {
  let myLatLng = { lat: x, lng: y };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: myLatLng,
  });

  let marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Hello World!",
  });

  marker.setMap(map);
}

// Your feature here

// --------------------------------------------------------------------------- Use my current position optional

const btnlocation = document.createElement("input");
btnlocation.type = "button";
btnlocation.value = "Use current location";

const plocation = document.createElement("p");

document.getElementById("weatherbox").appendChild(btnlocation);
document.getElementById("weatherbox").appendChild(plocation);

function getlocationdata(poslati, poslongi) {
  fetch(`${weatherUrl}lat=${poslati}&lon=${poslongi}&appid=${API_KEY}`)
    // Get the list of all weather aspects
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      txtbox.value = data.name; // sets name of the city in ytextbox
      datacallback(data);
      initMap(poslati, poslongi);
      return data;
    });
}

function getlocation() {
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    plocation.textContent = "";

    getlocationdata(latitude, longitude);
    //   initMap(latitude, longitude)
    return latitude, longitude;
  }

  function error() {
    plocation.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    plocation.textContent = "Geolocation is not supported by your browser";
  } else {
    plocation.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

btnlocation.addEventListener("click", getlocation);

//

// if (localStorage.clickcount) {
//     localStorage.clickcount = Number(localStorage.clickcount) + 1;
//   } else {
//     localStorage.clickcount = 1;
//   }
//   document.getElementById("result").innerHTML = "You have clicked the button " +
//   localStorage.clickcount + " time(s).";

//  +++++++++++++++++++++++++++++++++++++++   Giphy api