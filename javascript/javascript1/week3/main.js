// ---------------------------------------------------------------Program 1 : Item array removal


// const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
// const nameToRemove = 'Ahmad';

//   do {
//     delete names.nameToRemove;
//     console.log(`${names} is deleted`);
//   } while (names == nameToRemove);
    


  // ------------------------------------------------------------------Program2 : When will we be there??


let travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelInfo(destinationDistance, speed){
let travelTime = destinationDistance / speed;
let fullhours = Math.floor(travelTime);
let travelmins = Math.floor((travelTime - fullhours) * 60);
// console.log("The time should be " + fullhours + "hours and " + travelmins + " Minutes");
return;
  }

travelInfo(432, 50)




// -------------------------------------------------------------------------------------
// function myFunction(arg) {
//   // alert(arg.var1 + ' ' + arg.var2 + ' ' + arg.var3);
//   console.log(arg.var1 + ' ' + arg.var2 + ' ' + arg.var3);
// }

// myFunction ({ var1: "Option 1", var2: "Option 2", var3: "Option 3" });





// ---------------------------------------------------------Series duration of my life



const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,  
  },
  {
    title: 'Sopranos',
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: 'The Wire',
    days: 2,
    hours: 12,
    minutes: 0,
  }
]


let totalEach = 0;
let totalAll = 0;
// let daystohrs = 0;
for(let i=0; i<seriesDurations.length; i++)
{
  // console.log("HI here");
  totalEach = (seriesDurations[i].days)*0.00273790926 + (seriesDurations[i].hours)*0.000114079553 + (seriesDurations[i].minutes)*0.000114079553/60 ;
  // totallife = (totallife + seriesDurations.days) * 8 ;
  // console.log(totallife);
  console.log(totalEach);

  totalAll = totalAll + totalEach;
}

console.log("total: ", totalAll);




// ---------------------------------------------------------My favorite songs



// const songDatabase = [{
//   songId: 1,
//   title: 'My baby',
//   artist: 'Soggy socks',
// },
// {
//   songId: 2,
//   title: '3 nails in wood',
//   artist: 'The carpenters',
// },
// {
//   songId: 3,
//   title: 'Blacker than black',
//   artist: 'Instant coffee',
// },
// {
//   songId: 4,
//   title: 'When is enough too little?',
//   artist: 'The spies girls',
// },
// ];

// function function1(){
//   let mystring = songDatabase[1].artist;
//   console.log(mystring);
// }




// const myPlaylist = [];

// function addSongToDatabase(songId, title, artist)
// {
//   for(i=0; i<=songDatabase.length; i++){
//    songDatabase = "songId :" + songId + ", title" + title  + ", artist: " + artist ;
//    console.log(songDatabase)
//   }
// }

// addSongToDatabase({});




// function myFunction(arg) {
//   alert(arg.var1 + ' ' + arg.var2 + ' ' + arg.var3);
// }

// myFunction ({ var1: "Option 1", var2: "Option 2", var3: "Option 3" });

