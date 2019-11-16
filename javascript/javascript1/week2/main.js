// Copy your getFullname function here

// function getFullname(fName, sirName){ 
//     let fullName;  
//     let useFormalName = document.getElementById("checkbox");
//   fName = document.getElementsByClassName("firstname")[0].value;
//   sirName = document.getElementsByClassName("lastname")[0].value;
//         if (useFormalName.checked === true && fName && sirName){
//             alert('Enjoy your ticket with a formal name')
//             fullName = 'Lord ' + fName + ' ' + sirName;
           
//         }else if (useFormalName.checked === true && !fName && !sirName){
//             fullName = 'We would require a firstname and lastname to make a ticket with formal name';
//             alert(fullName)
           
//         }else if (useFormalName.checked == true && !fName){
//             fullName = 'We would require a firstname to make a ticket with formal name';
//             alert(fullName)
           
//         }else if (useFormalName.checked == true && !sirName){
//             fullName = 'We would require a sirname to make a ticket with formal name';
//             alert(fullName)
            
//         }else if (useFormalName.checked != true && !fName && !sirName){
//             fullName = 'You can not print tickets, Please fill up the form';
//             alert(fullName)
            
//         }else if (useFormalName.checked != true && !fName){
//             fullName = 'We would require a firstname to make a ticket';
//             alert(fullName)
            
//         }else if (useFormalName.checked != true && !sirName){
//             fullName = 'We would require a sirname to make a ticket';
//             alert(fullName)
            
//         }else if (useFormalName.checked != true){
//             alert('Enjoy your ticket with a formal name')
//             fullName = fName + ' ' + sirName;
            
//         }else {
//             alert('there is an error')
           
//         }
//          console.log(fullName)
//             return (fullName)
// }
  




// You dont neew to understand this just yet :)
// const firstnameInput = document.querySelector('main input.firstname');
// const lastnameInput = document.querySelector('main input.lastname');
// const useFormalNameInput = document.querySelector('main input[name="use-formal-name"]');
// const boardingcardButton = document.querySelector("main button");
// const boardingcard = document.querySelector("main div.boardingcard");
// const fullnameElement = document.querySelector("main div.boardingcard .fullname");

// boardingcardButton.addEventListener("click", () => {
//     const firstname = firstnameInput.value;
//     const lastname = lastnameInput.value;
//     const useFormalName = useFormalNameInput.checked;
    
//     const fullname = getFullname(firstname, lastname, useFormalName);
    
//     fullnameElement.innerHTML = fullname;
//     boardingcard.classList.remove('hidden');
// });





//  -------------------------------------------------- Event function starts from here 





function getEventWeekday(){
var d = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let result = d.getDay();


let inptval = document.getElementById("ids").value;

// let final = inptval + result;
//document.getElementById("demo").innerHTML = result;
console.log(inptval);
console.log(result);
return;
}



// ---------------------------------------------------------Need to merge this and the one down below--------------------------------------------------------------



// const today = new Date();
// const totalWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let weekDay = today.getDay();
// let nextEventweekDay;

// function getEventWeekDay (eventDay) {
//    nextEventweekDay = totalWeekDays [(eventDay + weekDay) % 7 ];
//     // console.log(eventDay)
//     console .log (nextEventweekDay);
//     return nextEventweekDay;
//   }

// getEventWeekDay (1)
// //  console .log (`The event will be on:  ${nextEventweekDay}`);



// ---------------------------------------------------------------------------------------------------------------------------------
//                            Weather wear code


// const clothesToWear = temp(4);
// // console.log(clothesToWear);
// function temp(inpttemp){
//     if(inpttemp <= 0 )
//     {
//         console.log("Do not go outside it is cozy inside");

//     }else if(inpttemp <= 5 )
//     {
//         console.log("You should wear a heavy jacket zip it up");

//     }else if(inpttemp <= 10 )
//     {
//         console.log("You should wear a light jacket with a pair of jeans");

//     }else if(inpttemp <= 17 )
//     {
//         console.log("shorts and a t-shirt");
//     }
//     else if(inpttemp <= 22 )
//     {
//         console.log("It's hot outside, do not forget sunglasses and sunscreen")
//     }
//     else{
//         console.log("Theres an error")
//     }
    
// }






// ---------------------------------------------------------------------------------------------------------------------------------
//                            Student manager



// const class07Students = ["student01", "student02", "student03", "student04", "student05"];
// function addStudentToClass(newStudentName) {
//     // You write code here
//     class07Students.push("newStudentName");
//     console.log(class07Students);


//     let result = class07Students.find(newStudentName);
//     console.log("Its here" + result);

//     // if(class07Students.find(newStudentName) = true){
//     //     console.log("This student already exists" + class07Students.find(newStudentName));
//     // }
//     // else{
//     //     console.log("Keep on adding");
//     // }
//     return;

// }


// function getNumberOfStudents() {
//     // You write code here class07Studentsno
//    let i = class07Students.length + 1 ;
    
//     if(i <= 6)
//     {
//         console.log("Total no of students in class 07 are : " + i);
//     }else if(i > 6){
//         console.log("Can not add more students to the class 07, Please try in another class");
//     }
//     return;
// }

// getNumberOfStudents();
// addStudentToClass("priyanka");










// -------------------------------------Candy helper--------------------------------------------------------


function addCandy(candyType , weight){
    // const candyTypes = ["Sweet","Chocolate","Toffee","Chewing-gum"]
    // const candyWeight = ["0.5","0.7","1.1","0.03"]
    candyTypes = candyTypes.push(candyType);
    candyWeight = candyWeight.push(weight);
    let boughtCandyPrices = candyWeight *     here the comparisons for the input candy with

    console.log(candyTypes + " " + candyWeight);
}

addCandy('sweet', 20);