const express = require("express");
const app = express();





app.get("/", (request, response) => {
  response.send(`
    <body>
        <h1>Index page </h1>
        <p>Im inside index</p>
    </body>
  `);
});


// for meal page

const mealRouter = require("./routes/meal.js");
app.get('/meal', mealRouter);


// for Cheap_meals

const cheapmealRouter = require("./routes/cheap_meals.js");
app.get('/Cheap_meals', cheapmealRouter);


// for meals

const mealsRouter = require("./routes/meals.js");
app.get('/meals', mealsRouter);


// for large_meals

const largemealsRouter = require("./routes/large_meals.js");
app.get('/large_meals', largemealsRouter);


// for reservations

const reservationsRouter = require("./routes/reservations.js");
app.get('/reservations', reservationsRouter);


// for reservation

const reservationRouter = require("./routes/reservation.js");
app.get('/reservation', reservationRouter);



app.listen(4000,()=>{
  console.log(`Listening`);
  
});