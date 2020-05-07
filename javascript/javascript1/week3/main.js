// ---------------------------------------------------------------Program 1 : Item array removal
// console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++  Item array removal  +++++++++++++++++++++++++++++++++++++++++++++++++`);


// const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
// const nameToRemove = 'Ahmad';

// const newarray = names.filter(item=>item !== nameToRemove)
// console.log(newarray);
  

//   // ------------------------------------------------------------------Program2 : When will we be there??
// console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++  When will we be there??  +++++++++++++++++++++++++++++++++++++++++++++++++`);

  
// const travelInformation = {
//   speed: 50,
//   destinationDistance: 432,
// };

// function travelInfo(destinationDistance, speed){
//   let travelTime = destinationDistance / speed;
//   let fullhours = Math.floor(travelTime);
//   let travelmins = Math.floor((travelTime - fullhours) * 60);
//   // console.log(`The time should be  ${fullhours} hours and ${travelmins} Minutes`);    It can be done as below line
//   return `The time should be  ${fullhours} hours and ${travelmins} Minutes`
// }

// console.log(travelInfo(432, 50));




// // const travelTime = notThisFunctionName(travelInformation);
// // console.log(travelTime); // 4 hours and 42 minutes




// // ---------------------------------------------------------Series duration of my life
// console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++  Series duration of my life  +++++++++++++++++++++++++++++++++++++++++++++++++`);

// const seriesDurations = [
//   {
//     title: 'Game of thrones',
//     days: 3,
//     hours: 1,
//     minutes: 0,  
//   },
//   {
//     title: 'Sopranos',
//     days: 3,
//     hours: 14,
//     minutes: 0,
//   },
//   {
//     title: 'The Wire',
//     days: 2,
//     hours: 12,
//     minutes: 0,
//   }
// ]


// let totalEach = 0;
// let totalAll = 0;
// for(let i=0; i<seriesDurations.length; i++)
// { // I am converting everythinh into years here (Days, hours and minutes into years).
//   //for days to years: (seriesDurations[i].days)*0.00273790926;
//   //for hours to years: (seriesDurations[i].hours)*0.000114079553
//   //for minutes to years : (seriesDurations[i].minutes)*0.000114079553/60
//   totalEach = (seriesDurations[i].days)*0.00273790926 + (seriesDurations[i].hours)*0.000114079553 + (seriesDurations[i].minutes)*0.000114079553/60 ;
//   console.log(`${seriesDurations[i].title} took ${(totalEach).toFixed(3)} of my life.`);
//   totalAll = totalAll + totalEach;
// }

// console.log(`total years spent: ${(totalAll).toFixed(3)}`);
// let percentage = (totalAll / 80)*100;  //  percentage of total years out of 80 years life
// console.log(`In total that is ${(percentage).toFixed(3)} of my life.`);



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
  title: 'Too good to go',
  artist: 'kitty girls',
},
{
  songId: 6,
  title: 'When its too rough',
  artist: 'Vanom',
},
];



// updated code starts from here

const updatedpubliclist = songDatabase;
const privateplaylist=[];

function getPublicList(){
  console.log("Hi im here");
  let allpublicsongs = songDatabase.map(item=> "</br>" + item.title )
  document.getElementById("allpublicsongs").innerHTML = allpublicsongs;
}
let searchedsong;

function searchSongName(){
  const songname = document.getElementById("searchmusic").value;
  const songlowercasename = songname.toLowerCase();
  searchedsong = songDatabase.filter(item=> ((item.title).toLowerCase()).includes(songlowercasename))
  return searchedsong;  
}

function assemblesearch() {
  searchSongName();
  const songstring = searchedsong.map(item=>`</br> ${item.title}, By : ${item.artist}
  <a href='#' onclick='addtoPrivateLib()' alt='Add to personal playlist'> <img src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_playlist_add_48px-512.png' alt='Add'/></a>`)
  document.getElementById("searchedSongslist").innerHTML = songstring;
  return songstring;
}



function addNewSongName() {
  const newsongname = document.getElementById("newsongname").value;
  const newsongartist = document.getElementById("newsongartist").value;
  let count = songDatabase.length;

  updatedpubliclist.push({songId: count+1,
    title: newsongname,
    artist: newsongartist,})

  const newsong =`Your song "${newsongname}" is successfully saved to playlist <img src='https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_playlist_add_check_48px-512.png'  alt='Success'>`;
  document.getElementById("savedSong").innerHTML=newsong;
}


function getUpdatedPubliclist(event){
  let allupdatedpublicsongs = updatedpubliclist.map(item=> "</br>" + item.title)
  document.getElementById("allpublicsongs").innerHTML = allupdatedpublicsongs;
}


function getPrivateList(){
  let allPrivatesongs = privateplaylist.map(item=> `</br>${item.title}`)
  console.log(allPrivatesongs);
  if(allPrivatesongs.length === 0) {
    document.getElementById("privatelist").innerHTML="There are no songs to show here, add some new."; 
  }else{
    document.getElementById("privatelist").innerHTML = ` ${allPrivatesongs}`;
  }
   
}

function addtoPrivateLib() {
  searchSongName();
  const searchOnlyObjects = searchedsong.map(item=> privateplaylist.push(item))
  document.getElementById("addedSuccess").innerHTML=`Successfully added into your personal playlist </br>
     You can search songs below`;
}

function getPrivateSearch(){
  const songname = document.getElementById("searchPrivatemusic").value;
  const songlowercasename = songname.toLowerCase();
  searchedsong = privateplaylist.filter(item=> ((item.title).toLowerCase()).includes(songlowercasename))
  const songstring = searchedsong.map(item=>`</br> ${item.title}, By : ${item.artist}
  <a href='#' onclick='deletefromPrivateLib()' alt='Delete from personal playlist'> <img src='https://banner2.cleanpng.com/20180329/dyq/kisspng-computer-icons-icon-design-delete-button-5abcecfee7b8e6.5542925815223308789491.jpg' alt='Add'/></a>`)
  document.getElementById("searchedPrivateSongslist").innerHTML = songstring;

}

function deletefromPrivateLib(){
  
  const todeletesong = document.getElementById("searchPrivatemusic").value;
  const deletetrack = privateplaylist.filter(item=> !(item.title).includes(todeletesong) )

  document.getElementById("privatelist").innerHTML= '';
  document.getElementById("privatelist").innerHTML= deletetrack.map(item=> `</br> ${item.title}`);
  document.getElementById("searchedPrivateSongslist").innerHTML=``;
}

// code ends here //


// ---------------------------------------------------------Smart-ease Notepad
// console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++  Smart-ease Notepad  +++++++++++++++++++++++++++++++++++++++++++++++++`);


// const notes= []; // empty arry variable
// let formattedNotes= [];

//  // Function
// function addNote(id, content){// has two parameter "content " and  "id"
//   notes.push({id, content}); // push an object to the notes array
//   console.log(notes);
// }

// //object inside notes // has two keys: content and id, value of the keys should be the value of the corresponding parameters.

// function getNoteFromId(id)// Create a function with 1 parameter "id"
// {
//   for(let i= 0; i<addNote.length; i++)
//   {
//     if(id == notes[i].id)
//     {
//       let getNote = notes[i].content;
//       console.log(`The note on the ID : ${i}  is : ${getNote}`); // when calling it should return the relevent note
//     }else{
//       console.log(`You did not input a proper value`); //If no id is specified or if the id is not a number, log out an error string. Hint: Use a for loop.
//     }
//   }
// console.log(notes);  // Get all notes
// }

// function logOutNotesFormatted()
// {
//   for(let i= 0; i<addNote.length; i++)
//   {
//     formattedNotes = notes[i].content;
//     console.log(`The note with id: ${i}, has the following note text: ${formattedNotes}`);
//   }
// }

// //  I should add a reminder to notes // +++++++++++++++++++++++++++++++++++++++++++++++++++---------------------------------        Unique feature


// addNote(01,"Bring Grocery");
// addNote(02,"Do homework");
// addNote(03,"Complete assignment");
// addNote(04,"Attend classes");

// getNoteFromId("-1");

// logOutNotesFormatted();




// // ---------------------------------------------------------CactusIO-interactive
// console.log(`+++++++++++++++++++++++++++++++++++++++++++++++++  CactusIO-interactive  +++++++++++++++++++++++++++++++++++++++++++++++++`);




// const activities= []; // Variable name - that stores all activities of the day
// let phoneLimitperapp = 130;
// function addActivity(date, activity, duration) // Function with parameter "date"= string, "activity"= string and "duration"= Number
// {
// activities.push({date, activity, duration}); // pushed one object that contains all the features
// console.log(activities);
// }




// function showStatus() // show my Status and return "You have added 3 activities. They amount to 78 min. of usage"
// {let activityTimeCount= 0;
//   let i=0;
//   for(i=0; i<activities.length; i++){

// if(i< 0){
//   console.log("Add some activities before calling showStatus"); // If activities is empty, Add some activities before calling showStatus
// }else{

//   activityTimeCount = activityTimeCount + activities[i].duration;
// }
// }
// console.log(`You have added ${i} activities. They amount to ${activityTimeCount} min. of usage`);

// let totalTime = phoneLimitperapp*i;
// console.log(`Total time limit of using smartphone for you is ${totalTime}`);
// if(totalTime<=activityTimeCount){
// console.log(`You have reached your limit, no more smartphoning for you!"`);
// }else{
//   console.log(`You have left ${totalTime-activityTimeCount} minutes out of total time`);
// }
// return;
// }

// // ++++++++++++++++++++++++++++++++++++++----------------------------------------------------- Extra feature//



// addActivity('23/7-18', 'Youtube', 30);
// addActivity('23/7-18', 'facebook', 60);
// addActivity('23/7-18', 'Netflix', 120);

// showStatus(activities);