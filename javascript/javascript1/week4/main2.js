// ------------------------------------------------------------------------ talk to me


let monthName = ["January", "february", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let personal =[
  {name : "priyanka", favorite_dish : "lasagne"}
];
// name : "priyanka", favorite_dish : "lasagne"
let todo =[
    {}
];
//1:"Fishing", 1:"singing in the shower",
let calendar = [
    {evedate: " 1/12/2019 ", name: "Lunch " },
    {evedate: " 4/12/2019 ", name: "Dinner " },
    {evedate: " 6/12/2019 ", name: "bike ride " },
    {evedate: " 9/12/2019 ", name: "game Night " },
]
let answer;
let usrName;
let message;
// for trimstring function
let countstr , countstartstr, countendstr, smallstr, finalstr;
//
// for weekdays
let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";


  let artharr = ["+","-","*","/","%"]

// getReply("Hello my name is priyanka");
// getReply("What is my name");
// getReply("Add fishing to my todo");
// getReply("Remove fishing from my todo");
// getReply("Add singing in the shower to my todo");
// getReply("What is on my todo?");
// getReply("My favourite dish is lasagne");
// getReply("What is my favourite dish");
// getReply("What day is it today?");


// getReply("Set a timer for 4 minutes");


// getReply("what is 13 + 3");
// getReply("Add Bike ride the 6/12/2019 to my calendar"); 
// getReply("What am I doing this week?");

let statement = [];
let askboxval = document.getElementById("askbox");
statement.push(askboxval.options[askboxval.selectedIndex].value);

function getReply(){
   console.log(statement)
    let question = statement[0].toLowerCase();
    console.log(`Your question is : ${question}`)
    if(question.startsWith("hello my name"))
            {
                usrName = trimstring(question,"Hello my name is",""); // It gives me the username from the input statement
                // console.log(usrName)
                if(usrName && !personal[0].name) // if name is not already there then put name
                {
                    personal.push({"name" : usrName})  // Pushing the details of the user here + Name
                    console.log(`Nice to meet you ${usrName}`);
                    return personal; // Return the personal user list
                    
                }else if(personal[0].name === usrName){
                
                    console.log(`Welcome again ${personal[0].name}`)
                }
                // else{
                //     console.log("im inside : " + question)
                // }

            }else if(question.includes("what is my name")){
                if(personal[0].name){
                    message = trimstring(question,"what is","");
                    console.log(` ${message} is ${personal[0].name}`);
                }else if(!personal[0].name)  // if name is not there then tell there is no match
                    {
                        console.log(`You did not tell your name`);
                        // noAnswer(statement);
                    }

            }
            
            else if(question.includes("add") && question.includes("todo"))  //if question contains the "add" or "todo" word then go inside
            {
                message = trimstring(question,"Add","to my todo");
                todo.push(message);
                console.log(`Added ${message}to my todo`)
                console.log(todo)
            }
            else if(question.includes("remove") && question.includes("todo"))  //if question contains the "remove" or "todo" word then go inside
            {
                message = trimstring(question,"Remove","from my todo");
                todo.pop(message);
                console.log(`Removed ${message} from my todo list`)
                // console.log(message) // just to check the value which has been deleted
                console.log(todo)
            }
            else if(question.includes("what") && question.includes("todo?"))
            {
                console.log(todo)
            }
           else if(question.includes("my favourite dish is "))
           {
                message = trimstring(question,"my favourite dish is","") 
                personal.push({favorite_dish : message});
                console.log(`My favourite dish is ${message}`)
                
           }else if(question.includes("what") && question.includes("my favourite dish"))
           {
                // console.log("hi here dish");
               if(personal[0].favorite_dish) // to check if it already exists
               {
                   console.log(`Your favorite dish is ${personal[0].favorite_dish}`)
               
               }
               else if(!personal[0].favorite_dish)
               {
                console.log(`Please do tell`)
               }
           }
           else if(question.includes("what day") && question.includes("today")){
                let day = new Date();
                let today = weekday[day.getDay()];
                console.log(`Today is ${today}`);
           }
          
           else if(question.startsWith(`set a timer for`) && question.includes("minutes"))
           { // this code needs to be reviewed, it does the countdown but from a given date not given minutes 
                message = trimstring(question,"set a timer for","");
                todo.pop(message)
               
            let countertime = parseInt(message.split(" ")[0]);
            // let timeunit = message.split(" ")[1];
            let result = timer(countertime);         
            // console.log(result);
            }
            else if(question.includes("add") && question.includes("to my calendar"))
            {
                //Add Bike ride the 6/12/2019 to my calendar
                message = trimstring(question,"Add","to my calendar");
                let name = message.split("the")[0];
                let evedate = message.split("the")[1];
                console.log(`${name} added to your calendar`)
                myevents(name, evedate);
                calendar.push({evedate , name});
                console.log(calendar)
              
            }
            else if(question.includes("what") && question.includes("doing this week"))
            {
                //This week you have 1 event: Bike ride the 6. of Dec 2019?
                let day = new Date();
                let today = day.getDay();
                // Leftdays of a week would always be from today till saturday
                for(let x=today; x<weekday.length; x++) // i ran this loop from today till the coming saturday
                {
                    if(calendar[x].name)
                    {
                        let eventname = calendar[x].name;
                        let eventdate = calendar[x].evedate;
                        console.log(`Events this week are ${eventname} on ${eventdate}`);
                        // console.log("Hi here")

                    }else{
                        console.log("There are no events in this week.")
                    }

                }
                
            }
            else if(question.includes("+")||("-")||("*")||("/")||("%"))
            {
                // message = trimstring(question,"what is","")
                // let result = eval(message); 
                // console.log(result)
                // return result;

                // let x = message.split(artharr[0])[0];
                // let y = question.split(artharr[0])[1];
                // let operator = (question.split(" ")).splice(3, 1);
                // if(x>y)
                // {
                //     result = eval(x + operator + y);
                // }else{
                //     result = eval(y + operator + x);
                // }

            } 
            else{
                console.log(`it does nt work`);
                // noAnswer(statement);
               
            }

        }


        
        function trimstring(fullstr, startstr, endstr){
            // this function will trim my string from start and end depending upon the given value
            countstartstr = startstr.length + 1;
            countendstr = endstr.length + 1;
            smallstr = fullstr.slice(countstartstr);
            if(countendstr > 2){
                countendstr = smallstr.search(endstr);
                finalstr = smallstr.slice(0, countendstr);
            }else if(countendstr <= 1)
            {    
                finalstr = smallstr;
            }
                return(finalstr)
        }

        //  trimstring("Set a timer for 4 minutes", "Set a", "");
        
        


    


// Counter function which takes time and 


function timer(countertime){
   let timerval = 0;
   let date = new Date();
let countDownDate = date.setMinutes(date.getMinutes()+countertime);

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo5").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
return timerval
}





  function myevents(name, evedate) { // 19/11/2012
    let eventdate = evedate.split("/")[0];
    let evemonth = evedate.split("/")[1]
    let eveyear = evedate.split("/")[2]
    let dateformat = `${eventdate} of ${monthName[evemonth]} ${eveyear}`;

    console.log(dateformat)
     return dateformat ;
  }

