// ---------------------------------------------------------------Program 1 : Item array removal
console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++  Item array removal  +++++++++++++++++++++++++++++++++++++++++++++++++`);


const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

  do {
    delete names.nameToRemove;
    console.log(`${names} is deleted`);
  } while (names == nameToRemove);
  
  

  // ------------------------------------------------------------------Program2 : When will we be there??
console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++  When will we be there??  +++++++++++++++++++++++++++++++++++++++++++++++++`);

  
let travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelInfo(destinationDistance, speed){
let travelTime = destinationDistance / speed;
let fullhours = Math.floor(travelTime);
let travelmins = Math.floor((travelTime - fullhours) * 60);
console.log(`The time should be  ${fullhours} hours and ${travelmins} Minutes`);
return;
  }
travelInfo(432, 50)


// ---------------------------------------------------------Series duration of my life
console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++  Series duration of my life  +++++++++++++++++++++++++++++++++++++++++++++++++`);

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
for(let i=0; i<seriesDurations.length; i++)
{
  totalEach = (seriesDurations[i].days)*0.00273790926 + (seriesDurations[i].hours)*0.000114079553 + (seriesDurations[i].minutes)*0.000114079553/60 ;
  console.log(`${seriesDurations[i].title} took ${(totalEach).toFixed(3)} of my life.`);
  totalAll = totalAll + totalEach;
}

console.log(`total years spent: ${(totalAll).toFixed(3)}`);
let percentage = (totalAll / 80)*100;  //  percentage of total years out of 80 years life
console.log(`In total that is ${(percentage).toFixed(3)} of my life.`);




// ---------------------------------------------------------My favorite songs
console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++  My favorite songs  +++++++++++++++++++++++++++++++++++++++++++++++++`);




const songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks',
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters',
},
{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee',
},
{
  songId: 4,
  title: 'When is enough too little',
  artist: 'The spies girls',
},
{
  songId: 5,
  title: 'When is enough too little',
  artist: 'kitty girls',
},
{
  songId: 6,
  title: 'When is enough too little',
  artist: 'Vanom',
},
];


//----------------- SOme global array's
const songIdIndexArray=[];  //      It gives the array of the Id of the songs which are duplicated 


const searchResult =[];
const mysongindex =[];
const myPlaylist =[{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee',
},]; 


console.log(songDatabase); // Original 




console.log(`// ---------------------------------------------------  Adding Song`);

function addSongToDatabase (song)  
{
  songDatabase.push(song);
  console.log(songDatabase); // Why can't i print with content using ${}
}
addSongToDatabase({
  songId: 7,
  title: 'Dummy content 01',
  artist: 'Dummy artist 01'
});

// ------------------------------------------------------------------------------------------------------------------------getSongByTitle
console.log(`// ---------------------------------------------------  Searching song  ( When is enough too little ) by title`);
function getSongByTitle(songname){
      let j=0;
      searchResult[0]=-1;

  for(let i=0; i<songDatabase.length;i++)
  {
    if(songDatabase[i].title == songname)
    {
    let songIdIndex = songDatabase[i].songId; 
    searchResult[j] = songIdIndex;
    j++;
    songIdIndexArray.push(songIdIndex);  // Pushing the value of the duplicating song index here
    if(j<1){
      console.log("This can not be true");
    }else{
      console.log(` Song you are searching for is : ${songname}`);
    }
  }
}
//    It should return the song that match the title parameter.
return searchResult;
}




// ------------------------------------------------------------------------------------------------------------------------addSongToMyPlaylist

function addSongToMyPlaylist (selectedsong){  
  
  for(i=0; i<myPlaylist.length; i++)
  {
  if(selectedsong == myPlaylist[i].title)
{
  console.log(`To avoid duplicacy it cannot be inserted, already stored`);
}else{
  const mysongindex = getSongByTitle(selectedsong);
  console.log(`But First the argument of getSongByTitle on line 220 should be commented, it should be blank before passing the new argument.`);
  console.log(mysongindex);
  addSong(mysongindex);
  return;
}
}
}


// ------------------------------------------------------------------------------------------------------------------------add Song to myplaylist
function addSong(songindexinfo)
{
  myPlaylist.push(songDatabase[songindexinfo-1]);
  console.log(myPlaylist);
  console.log(`-----------------------------------------------------------------------------------------------`);
}


// ---------------------------------------------------------Improving our application optional
getSongByTitle("When is enough too little");
console.log(searchResult);

console.log(`// ---------------------------------------------------  Add Song To MyPlaylist by title`);
addSongToMyPlaylist(' 3 nails in wood');








// ---------------------------------------------------------Smart-ease Notepad
console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++  Smart-ease Notepad  +++++++++++++++++++++++++++++++++++++++++++++++++`);


const notes= []; // empty arry variable
let formattedNotes= [];

 // Function
function addNote(id, content){// has two parameter "content " and  "id"
  notes.push({id, content}); // push an object to the notes array
  console.log(notes);
}

//object inside notes // has two keys: content and id, value of the keys should be the value of the corresponding parameters.

function getNoteFromId(id)// Create a function with 1 parameter "id"
{
  for(let i= 0; i<addNote.length; i++)
  {
    if(id == notes[i].id)
    {
      let getNote = notes[i].content;
      console.log(`The note on the ID : ${i}  is : ${getNote}`); // when calling it should return the relevent note
    }else{
      console.log(`You did not input a proper value`); //If no id is specified or if the id is not a number, log out an error string. Hint: Use a for loop.
    }
  }
console.log(notes);  // Get all notes
}

function logOutNotesFormatted()
{
  for(let i= 0; i<addNote.length; i++)
  {
    formattedNotes = notes[i].content;
    console.log(`The note with id: ${i}, has the following note text: ${formattedNotes}`);
  }
}

//  I should add a reminder to notes // +++++++++++++++++++++++++++++++++++++++++++++++++++---------------------------------        Unique feature


addNote(01,"Bring Grocery");
addNote(02,"Do homework");
addNote(03,"Complete assignment");
addNote(04,"Attend classes");

getNoteFromId("-1");

logOutNotesFormatted();




// ---------------------------------------------------------CactusIO-interactive
console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++  CactusIO-interactive  +++++++++++++++++++++++++++++++++++++++++++++++++`);




const activities= []; // Variable name - that stores all activities of the day
let phoneLimitperapp = 130;
function addActivity(date, activity, duration) // Function with parameter "date"= string, "activity"= string and "duration"= Number
{
activities.push({date, activity, duration}); // pushed one object that contains all the features
console.log(activities);
}




function showStatus() // show my Status and return "You have added 3 activities. They amount to 78 min. of usage"
{let activityTimeCount= 0;
  let i=0;
  for(i=0; i<activities.length; i++){

if(i< 0){
  console.log("Add some activities before calling showStatus"); // If activities is empty, Add some activities before calling showStatus
}else{

  activityTimeCount = activityTimeCount + activities[i].duration;
}
}
console.log(`You have added ${i} activities. They amount to ${activityTimeCount} min. of usage`);

let totalTime = phoneLimitperapp*i;
console.log(`Total time limit of using smartphone for you is ${totalTime}`);
if(totalTime<=activityTimeCount){
console.log(`You have reached your limit, no more smartphoning for you!"`);
}else{
  console.log(`You have left ${totalTime-activityTimeCount} minutes out of total time`);
}
return;
}

// ++++++++++++++++++++++++++++++++++++++----------------------------------------------------- Extra feature//



addActivity('23/7-18', 'Youtube', 30);
addActivity('23/7-18', 'facebook', 60);
addActivity('23/7-18', 'Netflix', 120);

showStatus(activities);