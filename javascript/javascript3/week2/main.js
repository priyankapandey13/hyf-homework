// --------------------------------------------------------------------------------   Movies exercise

let allbadmov = [];
let allbad2000 = [];
let allbadtitle2000 = [];

function getmovielist(data) {
  sessionStorage.clear();
  let selectedvalue = document.getElementById("movlist").value;
  // created an inputbox and a button for searching the gif file

  if (selectedvalue == 0) {
    alert("This can't be blank");
    document.getElementById("movselected").innerHTML = `You should select some option to see results`;
    document.getElementById("movresult").innerHTML = ``; 

  } else if (selectedvalue == "allbad") {

    console.log(`This is the selected value: ${selectedvalue}`);
    
      data.filter(element => {
      if (element.rating < 5) {
        allbadmov.push(element);
      }
      
    });
    document.getElementById("totalmovies").innerHTML = `Total no of movies shown : ${allbadmov.length}`;
    document.getElementById("movselected").innerHTML = `you have selected option no 1`;
    document.getElementById("movresult").innerHTML = showtabulardata(allbadmov);

  } else if (selectedvalue == "allbad2000") {
    // Created an array of bad movies since year 2000
    console.log(selectedvalue);

    data.map(element=>{
      (element.rating < 5 && element.year < 2000) ? (allbad2000.push(element)) : false ;
    })
    // console.log(`Total no of bad movies since year 2000: ${allbad2000.length}`);
    
    document.getElementById("totalmovies").innerHTML = `Total no of movies shown : ${allbad2000.length}`;
    document.getElementById("movselected").innerHTML = `you have selected option no 2`; 
    document.getElementById("movresult").innerHTML = showtabulardata(allbad2000);


  } else if (selectedvalue == "allbadtitle2000") {

    // Created an array of bad movies since year 2000
    console.log(selectedvalue);

    data.filter(element=>{
      (element.rating < 5 && element.year < 2000) ? (allbadtitle2000.push(element.title)) : false;
    })

    document.getElementById("totalmovies").innerHTML = `Total no of movies shown : ${allbadtitle2000.length}`;
    document.getElementById("movselected").innerHTML = `you have selected option no 3`;
    document.getElementById("movresult").innerHTML = showlisting(allbadtitle2000);
  }
}

function fetchmoviedata() {
  fetch(
    `https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`
  )
    // getting all the data out thru api

    .then(response => response.json())
    .then(data => {
      getmovielist(data);
      
    });
}



function showtabulardata(inputarray) { // function for tabular format

  let html = "<table border='1|1' width='100%'>";
  for (let i = 0; i < inputarray.length; i++) {

    html += "<tr>";
    html += "<td>" + inputarray[i].title + "</td>";
    html += "<td>" + inputarray[i].year + "</td>";
    html += "<td>" + inputarray[i].rating + "</td>";
    html += "<td>" + inputarray[i].votes + "</td>";
    html += "<td>" + inputarray[i].running_times + "</td>";

    html += "</tr>";
  }

  html += "</table>";
  return html;
}

function showlisting(inputdata) { // function for listing format

  let html = "<ul>";
  for (let i = 0; i < inputdata.length; i++) {

    html += "<li>" + inputdata[i] + "</li>";
  }

  html += "</ul>";
  return html;
}


document.getElementById("movlist").addEventListener("change", fetchmoviedata);











// --------------------------------------------------------------------------------   Promise that resolves after set time

// Create a function that has one parameter: resolveAfter. Calling this function will return a promise that resolves after the resolveAfter seconds has passed.
// Use the makeUpYourOwnFunctionName to log out the string I am called asynchronously after 6 seconds.

resolvedpromise(6);

function resolvedpromise(resolveAfter) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`I am called asynchronously after ${resolveAfter} seconds.`);
    }, resolveAfter * 1000);
  });
}








// --------------------------------------------------------------------------------   Rewrite time 

// Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.
// So instead of using setTimeout and navigator.geolocation.getCurrentPosition
// with callbacks, use it as a promise.

// -------------------------------------------------------------- setTimeout

let setTimeoutPromise = new Promise((resolve, reject) => {
   
  setTimeout( function() {
    resolve("3 seconds")  
  }, 3000) 
}) 

setTimeoutPromise.then((successMessage) => {
  console.log("Called after " + successMessage) 
});





// -------------------------------------------------------------- getCurrentLocation (navigator.geolocation.getCurrentPosition)


// const status = document.querySelector('#location');
// const mapLink = document.querySelector('#location');
  
  
  
//   function myloc(){
    
//     return new Promise((resolve, reject)=>{
//       navigator.geolocation.getCurrentPosition((position)=>{
//             resolve(`Here is latitude : ${position.coords.latitude}   Here is longitude : ${position.coords.longitude}`)
            
//       }, reject) 

//     }).then((pos) => {

//       mapLink.textContent = (`${pos}`);     

//     }).catch(reject => {
//       status.textContent = `Unable to retrieve your location`;
//       });
//     }

// myloc()


//================================================ conversion into async function


// async function myloc(){
    
//   try {
//     const pos = await new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition((position) => {
//         resolve(`Here is latitude : ${position.coords.latitude}   Here is longitude : ${position.coords.longitude}`);
//       }, reject);
//     });
//     mapLink.textContent = (`${pos}`);
//   }
//   catch (reject) {
//     status.textContent = `Unable to retrieve your location`;
//   }
// }

// myloc()




// --------------------------------------------------------------------------------   Fetching and waiting

// Only using promises

//     Fetch some data from an api.
//     After that data has been fetched, wait 3 seconds
//     Log out the data from the api
//     Optional Now do all of these things using chaining

const API_link = `https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`;

const apiPromise = new Promise(function(resolve) {
  fetch(API_link)
    .then(response => response.json())
    .then(data => {
      setTimeout(() => {
        // console.log(data);
      }, 3000);
    });
});

// using chaining

name();

function name() {
  fetch(API_link)
    .then(response => response.json())
    .then(data => {
      setTimeout(() => {
        callingfunction(data);
      }, 3000);
    });
}

function callingfunction(item) {
  // console.log(item);
}
