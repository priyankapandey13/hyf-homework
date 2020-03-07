const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	Returns all meals +	GET request + GET api/meals/

const getAllMeal = function (request, response){
  console.log("Returns all meal with GET request");    // for checking the request type

    // Operation : Returns all meals
    pool.query('SELECT * FROM meal', function(error, results, fields) {
        if (error) {
          console.log(error);    // throw error;
        }
      return response.json(results);
    });

}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	Adds a new meal +	POST request + api/meals/

const insertMeal = function(request, response){
  console.log("A new meal is added with POST request ");

  const {title, description, location, when, max_reservations, price, created_date} = request.body;
  const values ={
    title : title,
    description : description,
    location : location,
    when : when,
    max_reservations : max_reservations,
    price : price,
    created_date : created_date
  };
  console.log(values);
  
    // Operation :  Adds a new meal
    pool.query('INSERT INTO meal SET ?', values, function(error, results, fields) {
      if (error) {
        console.log(error);    // throw error;
      }
    return response.json(results);
  });
 
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	// Returns meal by id +	GET request + api/meals/2

const returnMealById = function(request, response){
  console.log("Returns meal by id with GET request");

  const values = request.params.id;
  console.log(values);
  
    // Operation :  select column where id is given
    pool.query('SELECT * FROM meal WHERE id = ?', values, function(error, results, fields) {
      if (error) {
        console.log(error);    // throw error;
      }
    return response.json(results);
  });
 
}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	// Updates the meal by id +	PUT request + api/meals/2


const updateMealById = function(request, response){
  console.log("Updates meal by id with PUT request");

  // const values = request.params.id;
  const idval = request.params.id;
  const values = request.body;
  const {title, description, location, when, max_reservations, price, created_date} = values;
  
  // console.log(request.body);
  
    // Operation :  select column where id is given
    pool.query('UPDATE meal SET ? WHERE id = ?', [values, idval], function(error, results, fields) {
      if (error) {
        console.log(error);    // throw error;
      }
    return response.json(results);
  });
 
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	// Deletes the meal by id +	DELETE request + meals/2


const deleteMealById = function (request, response){
  // for looking the request type
      console.log("Deletes the meal by id with DELETE request");

      const idval = request.params.id;
      // const values = request.body;
  
      // Operation : Delete meals where id is given
      pool.query('DELETE FROM meal WHERE id = ?', idval, function(error, results, fields) {
          if (error) {
            console.log(error);    // throw error;
          }
        return response.json(results);
      });
  
  }


// +++++++++++++++++++++++++++++++++++++++++	// Get meals that has a price smaller than maxPrice + api/meals?maxPrice=50


const MealMaxPrice = function(request, response){
  console.log("Get meals by maxPrice with GET request");

  const values = request.params.maxPrice;
  console.log(values);
  
    // Operation :  select column where id is given
    pool.query('SELECT * FROM meal WHERE price < ?', values, function(error, results, fields) {
      if (error) {
        console.log(error);    // throw error;
      }
    return response.json(results);
  });
 
}


// +++++++++++++++++++++++++++++++++++++++++	// Get meals that still has available reservations + api/meals?availableReservations=true

const MealWithReservation = function(request, response){

  const values = request.query.availableReservations; // true
  // const currentdate =
  console.log(values);
  
    // Operation :  select column where id is given

    if(values === 'true'){              
      pool.query('SELECT *, meal.max_reservations, reservation.number_of_guests from meal join reservation on meal.id = reservation.meal_id where max_reservations > number_of_guests', function(error, results, fields) {
          if (error) {
            console.log(error);    // throw error;
          }
        // return response.send("This works");
        const leftusers = Object.number_of_guests - Object.max_reservations;
        return response.json(results);
        // return response.json(leftusers);
      });
    }
    else{
      console.log(`There is no reservation left`);
    }
 
}


// +++++++++++++++++++++++++++++++++++++++++	// Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
//  + api/meals?title=Yellow%20lentils%20soup
// MealWithTitle

const MealWithTitle = function(request, response){
  console.log("Get meals with matching title ");

  const values = request.query.title;
  console.log(values);
  
    // Operation :  select column where id is given
    pool.query('SELECT * FROM meal WHERE title = ?', values, function(error, results, fields) {
      if (error) {
        console.log(error);    // throw error;
      }
    return response.json(results);
  });
 
}

// +++++++++++++++++++++++++++++++++++++++++	// Get meals that has been created after the date + api/meals?createdAfter=2019-04-05



const MealAfterDate = function(request, response){

  const values = request.query.createdAfter;
  console.log(values);
  
    // Operation :  select column where id is given
    pool.query('SELECT * FROM meal WHERE created_date > ?', values, function(error, results, fields) {
      if (error) {
        console.log(error);    // throw error;
      }
    return response.json(results);
  });
 
}


// +++++++++++++++++++++++++++++++++++++++++	// Only specific number of meals + api/meals?limit=4


const MealWithLimit = function(request, response){

  const values = request.query.limit;
  console.log(values);
  
    // Operation :  select column where id is given
    pool.query('SELECT * FROM meal WHERE id < ?', values, function(error, results, fields) {
      if (error) {
        console.log(error);    // throw error;
      }
    return response.json(results);
  });
 
}





router.get("/", getAllMeal);
router.post("/", insertMeal);
router.get("/:id", returnMealById);
router.put("/:id", updateMealById);
router.delete("/:id", deleteMealById);

// ++++++++++++++++++++++++++++++++++++++++++ GET api/meals/ query parameters

router.get("/maxPrice=:maxPrice", MealMaxPrice);
router.get("/", MealWithReservation);
router.get("/", MealWithTitle);
router.get("/", MealAfterDate);
router.get("/", MealWithLimit);


module.exports = router;
