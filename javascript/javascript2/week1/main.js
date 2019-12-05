// ------------------------------------------------------------------------ Find the shortest word


const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];


// getshortest (); // returns 'ø'

function getshortest (){ // This function will get the shortest word in the given array
    let x;
    let numstring = []
    let result;
    let lowestno;
for(let i=0; i<danishWords.length;i++) 
{
    x = danishWords[i].split("").length;  // splitting each word from the danishWord array and storing it in x
    numstring.push(x);      
    numstring.sort()        
    lowestno = numstring[0]     // After sorting the numstring the first number will always be the shortest so that become the lowestno.
    if(danishWords[i].length === lowestno)  // The lowest no is equals to the length of the lowest no in the danishword array so i got the lowest word here
    {
        result = danishWords[i]
    }
}

console.log(danishWords)
console.log(`The smallest word in the Danishword array is ${result}`)
}


// ------------------------------------------------------------------------ Difference between median and average



const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

// getaverage()

function getaverage()
{
    let x = []
    x = housePrices.sort(); 
    let result = housePrices[0];
    // sort gives the same list in ascending orderand the first one will be 
    // the average no because its the least no preasent in each number
    console.log(result)
}



// ------------------------------------------------------------------------ Spirit animal name generator

animals=[
    "The fullmoon wolf",
    "Beautiful Butterfly",
    "Creative Spider",
    "Wise Owl",
    "The Hummingbird",
    "The Hawk",
    "The Grasshopper",
    "Soaring Eagle",
    "The Raven",
    "Ladybird beetle"]


function inputval()
{//Benjamin - The fullmoon wolf.
    let name = document.getElementById("askbox").value;
    let spirit = Math.floor(Math.random() * 10);
    let content = `${name} - ${animals[spirit]}.`
    
    document.getElementById("show").innerHTML = content ;
    document.getElementById('fogbg').style.display = 'block';

    console.log(content)
}

function inputAnimal()
{
    let animalName = document.getElementById("inputbox").value;
    if(!animalName){
        console.log(`text box is empty, please write new animal name`);
    }else{
    animals.push(animalName)
    console.log(`New animal name ${animalName} is added to the spirit animal list`)
    console.log(animals)
}

}



// A user select that she only wants to generate a spirit animal when the input is hovered.


// Math.floor(Math.random() * 10);
// what if i want to add a div to show message// askbox.appendChild(liname);