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

const mealRoute = require("./routes/meal.js");
app.get('/meal', mealRoute);


// for Cheap_meals

const cheapmealRoute = require("./routes/cheap_meals.js");
app.get('/cheap-meals', cheapmealRoute);


// for meals

const mealsRoute = require("./routes/meals.js");
app.get('/meals', mealsRoute);


// for large_meals

const largemealsRoute = require("./routes/large_meals.js");
app.get('/large-meals', largemealsRoute);


// for reservations

const reservationsRoute = require("./routes/reservations.js");
app.get('/reservations', reservationsRoute);


// for reservation

const reservationRoute = require("./routes/reservation.js");
app.get('/reservation', reservationRoute);



app.listen(4000,()=>{
  console.log(`Listening`);
  
});