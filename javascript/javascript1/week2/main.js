
// ------------------------------------------------------------------------ Smart-ease - Goes Global!

function getFullname(fName, sirName){ 
    let fullName;  
    let useFormalName = document.getElementById("checkbox");
  fName = document.getElementsByClassName("firstname")[0].value;
  sirName = document.getElementsByClassName("lastname")[0].value;
        if (useFormalName.checked && fName && sirName){
            alert('Enjoy your ticket with a formal name')
            fullName = 'Lord ' + fName + ' ' + sirName;
           
        }else if (useFormalName.checked && !fName && !sirName){
            fullName = 'We would require a firstname and lastname to make a ticket with formal name';
            alert(fullName)
           
        }else if (useFormalName.checked && !fName){
            fullName = 'We would require a firstname to make a ticket with formal name';
            alert(fullName)
           
        }else if (useFormalName.checked && !sirName){
            fullName = 'We would require a sirname to make a ticket with formal name';
            alert(fullName)
            
        }else if (!useFormalName.checked && !fName && !sirName){
            fullName = 'You can not print tickets, Please fill up the form';
            alert(fullName)
            
        }else if (!useFormalName.checked && !fName){
            fullName = 'We would require a firstname to make a ticket';
            alert(fullName)
            
        }else if (!useFormalName.checked && !sirName){
            fullName = 'We would require a sirname to make a ticket';
            alert(fullName)
            
        }else if (!useFormalName.checked){
            alert('Enjoy your ticket')
            fullName = fName + ' ' + sirName;
            
        }else {
            alert('there is an error')
           
        }
         console.log(fullName)
            return (fullName)
}
  




// You dont neew to understand this just yet :)
const firstnameInput = document.querySelector('main input.firstname');
const lastnameInput = document.querySelector('main input.lastname');
const useFormalNameInput = document.querySelector('main input[name="use-formal-name"]');
const boardingcardButton = document.querySelector("main button");
const boardingcard = document.querySelector("main div.boardingcard");
const fullnameElement = document.querySelector("main div.boardingcard .fullname");

boardingcardButton.addEventListener("click", () => {
    console.log("hello")
    const firstname = firstnameInput.value;
    const lastname = lastnameInput.value;
    const useFormalName = useFormalNameInput.checked;
    
    const fullname = getFullname(firstname, lastname, useFormalName);
    
    fullnameElement.innerHTML = fullname;
    boardingcard.classList.remove('hidden');
});


console.log('-------------------------------------------------------------------------------------------------');


//  -------------------------------------------------- Event application starts from here 



const today = new Date();
const totalWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weekDay = today.getDay();
let nextEventweekDay;

getEventWeekDay1(1);
function getEventWeekDay1 (eventDay) {
  //  const eventDay = document.getElementsByClassName("inptdays")[0].value;   // If i try to input value by the textbox on submit why it skips the sunday
  
  nextEventweekDay = totalWeekDays[(eventDay+weekDay)%7];
  weekDayToday = totalWeekDays[weekDay];
  console.log("Today is : " + weekDayToday);  
  console.log("next Event is on " + nextEventweekDay);
  console.log("EventDay is " + eventDay);
  document.getElementById("result").innerHTML = "Next event is on " + nextEventweekDay;
  return nextEventweekDay;
  }


  console.log('-------------------------------------------------------------------------------------------------');
// ---------------------------------------------------------------------------------------------------------------------------------
//                            Weather wear code


const clothesToWear = temp(-1); 
function temp(inpttemp){
    if(inpttemp <= 0 )
    {
        console.log("Do not go outside it is cozy inside");

    }else if(inpttemp <= 5 )
    {
        console.log("You should wear a heavy jacket zip it up");

    }else if(inpttemp <= 10 )
    {
        console.log("You should wear a light jacket with a pair of jeans");

    }else if(inpttemp <= 17 )
    {
        console.log("shorts and a t-shirt");
    }
    else if(inpttemp <= 22 )
    {
        console.log("It's hot outside, do not forget sunglasses and sunscreen");
    }
    else{
        console.log("Stay inside it's really hot outside");
    }
    
}




console.log('-------------------------------------------------------------------------------------------------');

// ---------------------------------------------------------------------------------------------------------------------------------
//                            Student manager



const class07Students = ["st01", "st02", "st03", "st04", "st05", "st06"];
console.log("Initially total no of students in class 07 were : " + class07Students.length);

addStudentToClass("Queen");

function addStudentToClass(newStudentName) {
        if(!newStudentName){
            console.log("It has been already here");
            return;
        }else if(newStudentName.toLowerCase()  === 'queen'){
            class07Students.push(newStudentName);
            console.log(`New student name is added into arrey the name is : ` +  class07Students[class07Students.length-1]);
            console.log(class07Students);
        } else if(class07Students.includes(newStudentName)){
            console.log("The value in array is duplicated");
        } else if(class07Students.length > 5){
            console.log("Class is full, please try next year");
        }else if(class07Students.length <= 5)
        {
            class07Students.push(newStudentName);
            console.log(`New student name is added into arrey the name is : ` +  class07Students[class07Students.length-1]);
            console.log(class07Students);
        } else{
            console.log("error here");
        }
    return;
}


console.log('-------------------------------------------------------------------------------------------------');

// -------------------------------------Candy helper--------------------------------------------------------


let boughtcandies = [
    ['Chocolate', '75.7'],
    ["Toffee",'81.1']       
      ]
      let boughtcandyprices = 0;
      addCandy('Sweet', 200)
      
    function addCandy(candyType , weight){        
        boughtcandies.push([candyType, weight]);
        console.log(boughtcandies);
        for(let i=0; i<=boughtcandies.length; i++)
            {  
                boughtcandyprices = Math.floor(boughtcandyprices + boughtcandies[i][i+1]);
                return;
            }
        }


    let amountToSpend = Math.round(Math.random() * 100);
    console.log("The amount to Spend on candies is : " + amountToSpend + "    ||    The boughtcandyprices : " + boughtcandyprices);
    canBuyMoreCandy(20);
    function canBuyMoreCandy(){
        if(amountToSpend > boughtcandyprices) {
            console.log("You can buy more, so please do!");
            return true;
        }else{
            console.log("Enough candy for you!");
            return false; 
        }
// returns a boolean type if the user can buy more candy using the boughtCandy array.
}
