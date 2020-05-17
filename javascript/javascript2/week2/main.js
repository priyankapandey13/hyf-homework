//Global variables

let result1;
let result2;
let result3;
let tag;
let times = 0;
let good = 0;
let avg = 0;
let bad = 0;
let newarray = [];
let newarray1 = [];
let arraywithtags = [];

// ------------------------------------------------------------------------ Warmup array exercises

// Example code from exercise
let numbers = [1, 2, 3, 4];
let newNumbers = [];
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers[i] = numbers[i] * 2;
//     }
// }

// console.log("The doubled numbers are", newNumbers); // [2, 6]

// filter + map
console.log(
  `=========================================================== With Filter and map`
);
let newarr = numbers.filter((item) => item % 2 !== 0);
newNumbers = newarr.map((x) => x * 2);

console.log("The doubled numbers are", newNumbers); // [2, 6]
console.log(`===========================================================`);

// ===================================================================================================================  Working with movies

const movies = [
  { title: "'71", year: 2014, rating: 7.2, votes: 41702, running_times: 5940 },
  {
    title: "'71 summers",
    year: 2014,
    rating: 7.2,
    votes: 41702,
    running_times: 5940,
  },
  {
    title: "'A' gai wak alien",
    year: 1983,
    rating: 7.4,
    votes: 11942,
    running_times: 6300,
  },
  {
    title: "'Breaker' Morant surfer",
    year: 1980,
    rating: 7.9,
    votes: 10702,
    running_times: 6420,
  },
  {
    title: "'Crocodile' Dundee II",
    year: 1988,
    rating: 5.5,
    votes: 47180,
    running_times: 6480,
  },
  {
    title: "(500) Days of Summer of 2009",
    year: 2009,
    rating: 7.7,
    votes: 412368,
    running_times: 5700,
  },
  {
    title: "*batteries not included",
    year: 1987,
    rating: 6.6,
    votes: 25636,
    running_times: 6360,
  },
  {
    title: " tu vivrai nel terrore! L'aldilà",
    year: 1981,
    rating: 6.9,
    votes: 16484,
    running_times: 5220,
  },
  {
    title: "Truth and justice for all.",
    year: 1979,
    rating: 7.4,
    votes: 25408,
    running_times: 7140,
  },
  { title: "10", year: 1979, rating: 6, votes: 13152, running_times: 7320 },
  {
    title: "10 Cloverfield Lane",
    year: 2016,
    rating: 7.2,
    votes: 216151,
    running_times: 6240,
  },
  {
    title: "10 Items or Less then 10",
    year: 2006,
    rating: 2.7,
    votes: 13342,
    running_times: 4920,
  },
  {
    title: "10 Things I Hate About You",
    year: 1999,
    rating: 7.2,
    votes: 247070,
    running_times: 5820,
  },
];

// ===================================================================================================================  No 1 + 2 :
let shorttitle = [];

shorttitle = movies.filter((item) => item.title.length <= 10);
longtitle = movies.filter((item) => item.title.length > 10);
console.log("Short titled movies are : ");
console.log(shorttitle);
console.log("Long titled movies are : ");
console.log(longtitle);

// ===================================================================================================================  No 3 :
// 1980-1989 (including both the years)
console.log(
  `=========================================================== Movies between 1980-1989 year`
);
let moviebetween = movies.filter(
  (item) => item.year >= 1980 && item.year <= 1989
);
console.log(moviebetween);

// ===================================================================================================================  No 4 :

// Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

console.log(
  `=========================================================== Created tag for rating`
);
let result = movies.map(function (item) {
  item.rating = Math.floor(item.rating);
  if (item.rating >= 7) tag = `Good` /*, console.log(tag)*/;
  else if (item.rating >= 4 && item.rating < 7)
    tag = `Average` /*, console.log(tag)*/;
  else if (item.rating < 4) tag = `Bad` /*, console.log(tag)*/;
  newarray = Object.assign({ tag }, item);
  // console.log(newarray)
  return newarray;
});

// ===================================================================================================================  No 5 :
// Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
console.log(
  `===========================================================movies rated higher than 6`
);
let moviename = [];
let movratings = [];
const higherthen6 = movies
  .filter((item) => item.rating > 6)
  .map((item) => item.rating);

popularMovies(movies);
function popularMovies(item) {
  for (let i = 0; i < item.length; i++) {
    if (item[i].rating > 6) moviename.push(item[i].title);
  }
}

// console.log(higherthen6);
console.log(`Popular movies with more then 6 ratings are : ${moviename}`);

// ===================================================================================================================  No 6 : count the total number of movies

// Count the total number of movies containing any of following keywords:
// Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer,
// 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
let i = 0;
movies.map(
  (gettotalsearch = (item) => {
    let smalltitle = item.title.toLowerCase();
    if (
      smalltitle.includes(`surfer`) ||
      smalltitle.includes(`alien`) ||
      smalltitle.includes(`benjamin`)
    )
      i = i + 1 /*, console.log(title)*/;
    // console.log(title)
    return i;
  })
);
console.log(
  `The total number of movies containing Surfer, Alien or Benjamin are ${i}`
);

// ===================================================================================================================  No 7 +8

// Create an array of movies where a word in the title is duplicated.
// Fx "Star Wars: The Clone Wars" the word Wars is duplicated.

console.log(
  `=========================================================== word in the title is duplicated`
);

let movTitle = [];
let duplicateWordArray = [];
let duplicateAllWordArray = [];
for (let i = 0; i < movies.length; i++) {
  // console.log(isDuplicate);
  for (let j = 0; j < movies.length; j++) {
    if (i !== j) {
      const a1 = movies[i].title.split(" ");
      const a2 = movies[j].title.split(" ");
      const duplicate = a1.filter((element) => a2.includes(element));
      if (duplicate.length > 0) {
        if (duplicateWordArray.indexOf(duplicate[0]) === -1) {
          duplicateWordArray.push(duplicate[0]);
        }
        for (let k = 0; k < duplicate.length; k++) {
          duplicateAllWordArray.push(duplicate[k]);
        }
      }
    }
  }
}

console.log("duplicate count: ", duplicateWordArray); //Ans 1

let obj = {};
for (let i = 0; i < duplicateAllWordArray.length; i++) {
  if (!obj[duplicateAllWordArray[i]]) {
    obj[duplicateAllWordArray[i]] = 1;
  } else {
    obj[duplicateAllWordArray[i]]++;
  }
}

let max = 0;
let maxCount = "";
for (let key in obj) {
  if (obj[key] > max) {
    max = obj[key];
    maxCount = key + " have max count " + max;
  }
}
console.log(maxCount);

// ===================================================================================================================  No 9

// Calculate the average rating of all the movies using reduce. Optional

console.log(
  `=========================================================== Calculate the average rating`
);

let average =
  movies.reduce((avgRating, val) => avgRating + val.rating, 0) / movies.length;
console.log(Math.round(average));

// ===================================================================================================================  No 10

//Count the total number of Good, Average and Bad movies using reduce. Optional

console.log(
  `=========================================================== Count total of Good, Average and Bad movies`
);

let results = movies.map((item) => {
  item.rating = Math.floor(item.rating); // let result
  if (item.rating >= 7) (tag = `Good`), good++;
  else if (item.rating >= 4 && item.rating < 7) (tag = `Average`), avg++;
  else if (item.rating < 4) (tag = `Bad`), bad++;
  newarray1 = Object.assign({ tag }, item);
  arraywithtags.push(newarray1);
  return newarray1;
});
// console.log(arraywithtags);

let comments = arraywithtags.reduce((item, val) => {
  if (val.tag === `Good`) result1 = `${val.tag} movies are ${good}`;
  else if (val.tag === `Average`) result2 = `${val.tag} movies are ${avg}`;
  else if (val.tag === `Bad`) result3 = `${val.tag} movies are ${bad}`;
  return `${result1}\n${result2}\n${result3}`;
});

console.log(comments);
