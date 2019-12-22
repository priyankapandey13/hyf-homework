





// ------------------------------------------------------------------------ The fastest presser in this realm

// Create an input and a button in html. When the button is clicked, get the value of the input. This value will be the amount of time the game should run.

// Global Variables
let sValue=0;
let lValue=0;
let countdown;
let totalTime;
let canvBox;
let div;




function mainfunc(){
    totalTime = document.getElementById("timebox").value;
    totalTime == 0 || totalTime == null ?  alert("Please insert some value for time ") : getvalues(totalTime) 
}



function getvalues(timeval){
    document.getElementById("timer").innerHTML = timeval;
    

    let x =setInterval(function(){
    
        timeval=timeval-1;
        document.getElementById("timer").innerHTML = timeval;
        // console.log(timeval);
    
        if (timeval < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "TIME IS UP ";
          }
    
    }, 1000);

    keypresswinner(timeval);  
}





// const clickarea = document.querySelector('section');
function keypresswinner(getTime){

    document.addEventListener('keydown', (event) => {
        var x = event.which || event.keyCode;
        
        (x===83) ?  sValue = sValue+1 : `return`;
        (x===76) ?  lValue = lValue+1 : `return`;
        document.querySelector(".sContainer p").innerHTML = sValue;
        document.querySelector(".lContainer p").innerHTML = lValue;
        
    // console.log(lValue);
        
    });
    announcement(getTime);
    return sValue, lValue, getTime;
}

// announcement of winner



function announcement(tTime){
    // console.log(timeval);
    // totalTime = document.getElementById("timebox").value;
    let timeout= tTime*1000 ;
    let announceTimer = timeout+2000;
    // console.log(announceTimer);
    setTimeout(function(){
    
    document.getElementById(`mszDisplayBox`).style.display = `flex`;
    if(sValue !==0 || lValue !==0) 
    {
         if(sValue>lValue) {
            showmsz = "S presser is the winner";
            // canvBox = document.querySelector(".sContainer section"); 
            // div = document.createElement("canvas");
            // document.getElementsByTagName("canvas").id = "my-canvas";
            // canvBox.appendChild(div); // it is adding two canvas at one time without id ?? // It also doesn't work for two canvas containers in diff locations??
            
        }
         else if(sValue<lValue) {
            showmsz = "L presser is the winner";
             // canvBox = document.querySelector(".sContainer section");
            // div = document.createElement("canvas");
            // document.getElementsByTagName("canvas").id = "my-canvas";
            // canvBox.appendChild(div);
    }
    else if(sValue===lValue) showmsz = "It's a draw, you both won";
    
    document.getElementById(`my-canvas`).style.display = `block`;
    document.getElementById(`mszBody`).innerHTML = showmsz;  
    }
    else{
        showmsz = "You have to press keys to play";
        // document.getElementById(`my-canvas`).style.display = `block`;
    document.getElementById(`mszBody`).innerHTML = showmsz;  
        } 
     
    }, announceTimer);


    sessionStorage.clear();
}






// For confetti 

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();







function close()
{
    document.getElementById('mszDisplayBox').style.display = 'none';
    sessionStorage.clear();
}




// Extra feature added like popup and counter 

// 1) antiquewhite/bisque
// 2) blueviolet
// burlywood
// cadetblue
// coral
// cornflowerblue
// darkcyan
// darkgray
// darkkhaki
// darkseagreen
// lightblue
// lightcoral
// lightsteelblue
