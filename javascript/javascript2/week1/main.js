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

    spiritImg =[
        "images/wolf.jpg",
        "images/Butterfly.jpg",
        "images/Spider.jpg",
        "images/Owl.jpg",
        "images/Hummingbird.jpg",
        "images/Hawk.jpg",
        "images/Grasshopper.jpg",
        "images/Eagle.jpg",
        "images/Raven.jpg",
        "images/Ladybirdbeetle.jpg"        
    ]

function inputval()
{//Benjamin - The fullmoon wolf.
    let name = document.getElementById("askbox").value;

    if(!name){
       console.log(`Please enter a name, this can not be empty`)
       document.getElementById("showmsz").innerHTML += "Hey! This field is blank. Let's write a name here.";
       document.getElementById("fogbg").style.display = 'block';   
       document.getElementById("showmsz").style.display = 'block';
    }else{

    let spirit = Math.floor(Math.random() * 10);
    console.log(spirit)
    let content = `${name} - ${animals[spirit]}.`
    let imglink = `${spiritImg[spirit]}`
    document.getElementById("show").innerHTML = content ;
    document.getElementById("animalbox").style.backgroundImage = `URL(${imglink})`  ;
    document.getElementById("fogbg").style.display = 'block';
    document.getElementById("animalbox").style.display = 'block';
    document.getElementById("show").style.display = 'block';
    console.log(content)
    }
    sessionStorage.clear();
}



// why it doesn't work but when i put code directly on the html page it works
function close()
{
    document.getElementById('displaybox').style.display = 'none';
    sessionStorage.clear();
}




function inputAnimal()
{
    let animalName = document.getElementById("inputbox").value;
    if(!animalName){
        

        document.getElementById("showmsz").innerHTML += "Hey! You forgot to write a new animal name." ;
        document.getElementById('fogbg').style.display = 'block';
        document.getElementById(`animalbox`).style.display = 'none';
        document.getElementById(`show`).style.display = 'none';
        document.getElementById(`showmsz`).style.display = 'block';
        sessionStorage.clear();
        
    }else{
        animals.push(animalName)
        console.log(`New animal name ${animalName} is added to the spirit animal list`)
        document.getElementById("fogbg").style.display = 'block';
        // document.getElementById("animalbox").style.display = 'block';
        document.getElementById("show").style.display = 'block';
        document.getElementById("show").innerHTML += `New Spirit animal : ${animalName} is added to the spirit animal list`;

        console.log(animals)
        sessionStorage.clear();
}

}



// Select options

function getOption(){
    let optionval = document.getElementById("options").value;
    if (optionval == 1)
    {
        console.log("Hi you have selected the press button option")
        console.log(optionval)
        // document.getElementById(`optselection`).innerText = optionval;
        // document.getElementById(`optselection`).innerHTML += optionval;
        document.getElementById(`addanimal`).disabled = false;
        document.getElementById(`addanimal`).className = "";
        document.getElementById(`inputbox`).removeAttribute("onchange", "inputAnimal()");
        sessionStorage.clear();
        

    }else if (optionval == 2){
        console.log("Hi you have selected the hoverbox option")
        console.log(optionval)
        document.getElementById(`addanimal`).disabled = true;
        document.getElementById(`addanimal`).className = "disable";
        document.getElementById(`inputbox`).setAttribute("onchange", "inputAnimal()");
        sessionStorage.clear(); 
        // onchange="myFunction()
        // inputAnimal();
    }

}
//     let askboxval = document.getElementById("askbox");
// statement.push(askboxval.options[askboxval.selectedIndex].value);


// onchange="myFunction()" // if user is using keyboard and press enter or with mouse clicks outside
// onmouseup="mUp(this)" // if user is using mouse and after pressing to click when she relese the key

// A user select that she only wants to generate a spirit animal when the input is hovered.


// Math.floor(Math.random() * 10);
// what if i want to add a div to show message// askbox.appendChild(liname);