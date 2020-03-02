const express = require("express");
const app = express()





app.get('/',(req, res, next)=>{
    res.send("Hi index page");
})

// /search?q=priyanka

app.get('/search', (req, res, next)=>{
    res.send(`You have searched for ${req.query.q}`);
})




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ exercise 1 part1

// GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).


app.get('/numbers/add?first=:first&second=:second', function (req, res) {
    response = {
      result: parseInt(req.query.first) + parseInt(req.query.second),
   };
   res.send(response);
})
// localhost:4000/numbers/add?first=2&second=5


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ exercise 1 part2

// GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).

// localhost:4000/numbers/multiply/2/5
app.get('/numbers/multiply/:first/:second', function (req, res) {
    response = {
      result: parseInt(req.params.first) * parseInt(req.params.second),
   };
   res.send(response);
})







app.listen(4000,()=>{
    console.log('port is running');
})