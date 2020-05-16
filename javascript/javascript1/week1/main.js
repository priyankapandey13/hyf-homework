console.log(`--------------------------------------------------------------------  Age-ify (A future age calculator))`);
//   Age-ify (A future age calculator)

const yearOfBirth = 1987;
let yearFuture = 2019;
let age = yearFuture - yearOfBirth;
console.log(age);
console.log(`You will be ${age} years old in ${yearFuture}`);
// Extra variable to show the message on the html page
let result1 = `You will be ${age} years old in ${yearFuture}`;




console.log(`--------------------------------------------------------------------  Goodboy-Oldboy (A dog age calculator)`);
// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017 ;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = false ;
let dogYear;

if(shouldShowResultInDogYears)
{
    dogYear = dogYearFuture - dogYearOfBirth;
    console.log(`Your dog will be ${dogYear}, human years old in ${dogYearFuture}`)
}
else{
    dogYear = (dogYearFuture - dogYearOfBirth) * 7;
    console.log(`Your dog will be ${dogYear}, dog years old in ${dogYearFuture}`)
}


console.log(`--------------------------------------------------------------------  Housey pricey (A house price estimator)`);
// Housey pricey (A house price estimator)

const width = 8;
const length = 10;
const height = 10;
const gardenSizeInM2 = 100;
const housegivenPrice = 2500000;
const volumeInMeters = width * length * height;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
console.log(housePrice);

let result2;
if(housePrice === housegivenPrice)
{
    result2 = `You are paying ${housePrice} for your house which is just perfect.`;
    console.log(result2)
}
if(housePrice > housegivenPrice){
    result2 = `You are paying ${housePrice} for your house which is cheaper for a house like this you should buy it.`;
    console.log(result2)
}
else{
    result2 = `You are paying ${housePrice} for your house it is expensive do not buy it.`;
    console.log(result2)
}



// Ez Namey (Startup name generator) Optional 
let firstWords = ["Easy", "Awesome", "Corporate","Money","Professional","Creative","Idea","Pool","Hub","Solution"]
let secondWords = ["Solution", "Hub", "Pool","Idea","Creative","Professional","Money","Corporate","Awesome","Easy"]
const randomNumber1 = Math.floor(Math.random() * 10) + 0;
const randomNumber2 = Math.floor(Math.random() * 10) + 0;
let startupName = firstWords[randomNumber1] + ' ' + secondWords[randomNumber2];
console.log(startupName);