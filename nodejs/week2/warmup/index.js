const express = require("express");
const app = express()
const PORT = 4000;




app.get('/',(req, res, next)=>{
    res.send("Hi index page");
    next();
})

// /search?q=priyanka

app.get('/search', (req, res, next)=>{
    res.send(`You have searched for ${req.query.q}`);
    next();
})



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ exercise 1 part1

// GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).

app.get('/numbers/add', function (req, res) {
    response = {
      result: parseInt(req.query.first) + parseInt(req.query.second),
   };
   res.send(response);
})
// localhost:4000/numbers/add?first=2&second=5  => "result": 7


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ exercise 1 part2

// GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).

// localhost:4000/numbers/multiply/2/5  => "result": 10
app.get('/numbers/multiply/:first/:second', function (req, res) {
    response = {
      result: parseInt(req.params.first) * parseInt(req.params.second),
   };
   res.send(response);
})



app.listen(PORT,()=>{
    console.log('${PORT} Port is running');
})
