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

const searchResult =[];

const myPlaylist =[];
const songIdIndexArray =[];

// ---------------------------------------------------  adding song



function addSongToDatabase (song)  
{
  songDatabase.push(song);
  //The type of song should be an object with the same keys as the songs in the songDatabase array.
}
addSongToDatabase({
  songId: 7,
  title: 'Dummy content 01',
  artist: 'Dummy artist 01'
});

//const searchResult = [];
function getSongByTitle(songname){
  console.log("----before for loop");
  let j=0;
  searchResult[0]=-1;
for(let i=0; i<songDatabase.length;i++)
{
  // console.log(songDatabase[1].title);
  if(songDatabase[i].title == songname)
  {
    console.log(` Song you are searching for is : ${songDatabase[i].title}`);
    let songIdIndex = songDatabase[i].songId;  // why if i assign let to songIdIndex it 
    console.log(` Song index for this song is  ${songIdIndex}`);  
     searchResult[j]= songIdIndex;
     j++;
  }else{
    // let overlappingfrequency =
    // let overlappingfrequency = overlappingfrequency + 1; 
    console.log("I am here in else.song not found");
    //searchResult;
  }
  
}
console.log("exited for loop");
//    It should return the song that match the title parameter.
return searchResult;
}



function addSongToMyPlaylist (selectedsong){
  
  const mysongindex = getSongByTitle(selectedsong);

  if(mysongindex[0]<0)
  {
     console.log("Song is not in database");

  }
  else
  {
    
    // console.log(getSongByTitle(selectedsong));
    
    let k=mysongindex.length;
    console.log("we have " + k + " search results for the song");
    console.log(mysongindex[0]);
    
  }
  


// here i got the index no of the object + and now i will push the relative object into new array;
  //const enterSongs = [];
  //enterSongs = songDatabase[mysongindex[0]];


  //addSong(enterSongs);
  addSong(mysongindex[0]);
}


function addSong(songindexinfo)
{
  myPlaylist.push(songDatabase[songindexinfo-1]);
  console.log(myPlaylist);
}




// songIdIndexArray[0]= songIdIndexArray + songIdIndex;     // for collecting the matching song indexes
//      console.log(songIdIndexArray);




console.log("// ---------------------------------------------------  Searching song  When is enough by title");

getSongByTitle("When is enough too little");
console.log(`-----------------------------------------------------------------------------------------------`);
console.log("-Adding song 3 nails in wood-----------------");




addSongToMyPlaylist('3 nails in wood');
console.log(songDatabase);


// ---------------------------------------------------------Improving our application optional