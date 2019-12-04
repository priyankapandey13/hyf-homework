// ------------------------------------------------------------------------ talk to me

// let personal = [];
// let todos = [
//         {ques : "Add fishing to my todo", ans : "Fishing added to todo list"},
// ];

// function getReply(question){
//     let answer;
//     let general = [
//             {ques : "Hello my name is Priyanka", ans : "Nice to meet you Priyanka"},
//             {ques : "What is my name" , ans : "You did not tell your name"},
//             {ques : "What is my occupation" , ans : "Your occupation is computers"},
//             {ques : "Add fishing to my todo" , ans :  "Fishing added to todo list"},
//     ];


//     question = document.getElementById("askbox").value;
  
    

//     for(let i=0; i<general.length; i++)
//         {
//             if(question === general[i].ques)
//             {
//                 console.log(general[i].ans);
//                 // personal.push(general[i].ques, general[i].ans)
//                 personal.push({ques : general[i].ques, ans : general[i].ans})
//                 console.log(personal)
//             }
//             else{
//                 // console.log(`inside else`);
//             }
//         }




//     return(answer)  
// }



//=======================++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const general =[
//     {ques : "Hello my name is username", ans : "Nice to meet you username"},
//     {ques : "What is my name" , ans : "You did not tell your name"},
    // {ques : "What is my occupation" , ans : "Your occupation is computers"},
    // {ques : "Add fishing to my todo" , ans :  "Fishing added to todo list"},
    // {ques : "Add singing in the shower to my todo" , ans :  "singing in the shower added to todo list"},
    // {ques : "Remove fishing from my todo" , ans :  "Removed fishing  from todo list"},
    // {ques : "What is on my todo?" , ans :  "Here is your todo list"},
    // {ques : "What day is it today?" , ans :  "Today is "},
    // {ques : "what is 3 + 3" , ans :  "It will be "},
    // {ques : "What is my favorite dish" , ans :  "My favorite dish is lasagne"},
    // {ques : "Set a timer for 4 minutes" , ans :  "Timer is set for "},
    // {ques : "Add Bike ride the 3/5/2019 to my calendar" , ans :  "Bike ride is added to the calendar"},
    // {ques : "What am I doing this week?" , ans :  "This week"},
// ]

const general =[
    {ques : "Hello my name is priyanka", ans : "Nice to meet you priyanka"},
    {ques : "What is my name" , ans : "You did not tell your name"},
    {ques : "Add fishing to my todo" , ans :  "Fishing added to todo list"},
    {ques : "Add singing in the shower to my todo" , ans :  "singing in the shower added to todo list"},
    {ques : "Remove fishing from my todo" , ans :  "Removed fishing  from todo list"},
    {ques : "What is on my todo?" , ans :  "Here is your todo list"},
    // + {ques : "What day is it today?" , ans :  "Today is "},
    // + {ques : "what is 3 + 3" , ans :  "It will be "},
    {ques : "What is my favorite dish" , ans :  "My favorite dish is lasagne"},
    // {ques : "Set a timer for 4 minutes" , ans :  "Timer is set for "},
    // {ques : "Add Bike ride the 3/5/2019 to my calendar" , ans :  "Bike ride is added to the calendar"},
    // {ques : "What am I doing this week?" , ans :  "This week"},
]
let personal =[
    {name : "priyanka", favorite_dish : "lasagne"}
];
let todo =[
    {1:"singing in the shower",}
];
let events = []
let answer;
let usrName;
let message;



// getReply("Hello my name is priyanka");
// getReply("What is my name");
// getReply("Add fishing to my todo");
// getReply("Add singing in the shower to my todo");
// getReply("Remove fishing from my todo");
// getReply("What is on my todo?");
// getReply("My favorite dish is lasagne");
getReply("Set a timer for 4 minutes");



function getReply(statement){
    // console.log(personal.name)
    let question = statement.toLowerCase();
    console.log(`Your question is : ${question}`)
    if(question.startsWith("hello my name is"))
            {
                // console.log(`start with is working`);
                usrName = question.slice(17 , 25); // It gives me the username from the input statement
                if(personal.name) // if name is not already there then put name
                {
                    personal.push({"name" : usrName})  // Pushing the details of the user here + Name
                    console.log(`Nice to meet you ${usrName}`);
                    return personal; // Return the personal user list
                }else{
                
                    console.log(`Welcome again ${personal[0].name}`)
                }

            }else if(question.includes("what is my name")){
                message = question.slice(8, 20);
                console.log(` ${message} is ${personal[0].name}`);
            }
            else if(!personal[0].name)  // if name is not there then tell there is no match
            {
                console.log(`You did not tell your name`);
                // noAnswer(statement);
            }
            else if(question.includes("add") && question.includes("todo"))  //if question contains the "add" or "todo" word then go inside
            {
                let getmessage = question.slice(4)
                count = getmessage.search(" to my todo");
                message = getmessage.slice(0, count);
                todo.push(message);
                console.log(`add fishibg ti my todo`)
                // console.log(message)    // just to check the value which has been added
                console.log(todo)
            }
            else if(question.includes("remove") && question.includes("todo"))  //if question contains the "remove" or "todo" word then go inside
            {
                let getmessage = question.slice(6)
                count = getmessage.search(" from my todo");
                message = getmessage.slice(0, count);
                todo.pop(message);
                console.log(`Removed fishing from my todo list`)
                // console.log(message) // just to check the value which has been deleted
                console.log(todo)
            }
            else if(question.includes("what") && question.includes("todo?"))
            {
                console.log(todo[0])
            }
           else if(question.includes(" My favorite dish is "))
           {
                message = question.slice (20);
                personal.push({favorite_dish : message});
                console.log(personal)
           }else if(question.includes("what") && question.includes("my favorite dish"))
           {
               if(personal[0].favorite_dish) // to check if it already exists
               {
                   console.log(`Your favorite dish is ${personal[0].favorite_dish}`)
               }
               else if(!personal[0].favorite_dish)
               {
                console.log(`Can you please tell again`)
               }
           }else if(question.includes(`set a timer for`))
           { // this code needs to be reviewed, it does the countdown but from a given date not given minutes 
            let getmessage = question.slice(16)
            count = getmessage.search(" from my todo");
            message = getmessage.slice(0, count);
            todo.pop(message);
            console.log(message)
            //    console.log(`hi im here`)
            // let time;



// Right now it is getting the fixed date internally i have to input value from getreply function

// a function needs to build which will confirm that the input time is hrs/ mins/ seconds and do further counter functioning
            


           }
            else{
                console.log(`it does nt work`);
                // noAnswer(statement);
               
            }

            // console.log(personal);
  function noAnswer(statement)
  {
    for(let i = 0; i < general.length; i++)
    {
        if(question === general[i].ques.toLowerCase()) // it checks that the statement matched with the array
        { 
            console.log(`i am here again`)
        }
        else{
            console.log(`i am inside else and the count is ` + i)
            // console.log(general[i].ques)
        }
    }
  }
  


// for timer and calander
function currenttime(){
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
    
}


            // console.log(`${question}  It matches with   ${general[i].ques}`)     
            // if(question.startsWith("hello my name is"))
            // {
            //     console.log(`start with is working`);
                
            // }else{
            //     console.log(`it does nt work`);
            // }



}
        
    
    
    
    
        // answer = getReply.filter(message => {
            //     return creature[0] === "Hello my name is";
            //   });
            //  console.log(message);






















// ------------------------------------------------------------------------ function for speech to voice




// $(function(){
//     $('button.say').on('click', function(e){
//       e.preventDefault();
//       var text= $('input[name="text"]').val()
//       text = encodeURIComponent(text);
//       console.log(text);
//       var url = "https://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=" + text + "&tl=en";
  
  
//       $('audio').attr('src', url).get(0).play();
//     });
//   });







