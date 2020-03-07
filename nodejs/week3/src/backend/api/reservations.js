const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	Returns all reservations 	GET api/reservations/

const getReservations = function (request, response){

  console.log("Returns all reviews with GET request");    // for checking the request type

  // Operation : Returns all meals
  pool.query('SELECT * FROM reservation', function(error, results, fields) {
    if (error) {
      console.log(error);    // throw error;
    }
    return response.json(results);
  });

}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	Adds a new reservation +	POST request + api/reservations/

const addreservation = function(request, response){
  console.log("A new reservation is added with POST request");

  const {number_of_guests, meal_id, created_date} = request.body;
  const values ={
    number_of_guests : number_of_guests,
    meal_id : meal_id,
    created_date : created_date
  };
  console.log(values);
  
    // Operation :  Adds a new reservation
    pool.query('INSERT INTO reservation SET ?', values, function(error, results, fields) {
      if (error) {
        console.log(error);    // throw error;
      }
      console.log(`Affected rows : ${results.affectedRows}`);
    return response.json(results);
  });
  
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	// Returns reservation by id 	GET api/reservations/2

const returnReservationsById = function(request, response){
  console.log("Returns reservation by id with GET request");

  const values = request.params.id;
  console.log(values);
  
  // Operation :  select column where id is given
  pool.query('SELECT * FROM reservation WHERE id = ?', values, function(error, results, fields) {
    if (error) {
      console.log(error);    // throw error;
    }
   return response.json(results);
  });
 
}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	//  Updates the reservation by id +	PUT request + api/reservation/2


const updateReservationsById = function(request, response){
  console.log("Updates the reservation by id with PUT request");

  const idval = request.params.id;
  const values = request.body;
  const {number_of_guests, meal_id, created_date} = values;
  
    // Operation :  select column where id is given
    pool.query('UPDATE reservation SET ? WHERE id = ?', [values, idval], function(error, results, fields) {
      if (error) {
        console.log(error);    // throw error;
      }
    console.log(`Affected rows : ${results.affectedRows}`);
    return response.json(results);
  });
 
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	//  Deletes the reservation by id +	DELETE request + reservation/2


const deleteReservationsById = function (request, response){
      console.log("Deletes the reservation by id with DELETE request");
      const idval = request.params.id;
      
      // Operation : Delete meals where id is given
      pool.query('DELETE FROM reservation WHERE id = ?', idval, function(error, results, fields) {
          if (error) {
            console.log(error);    // throw error;
          }
        console.log(`Affected rows : ${results.affectedRows}`);
        return response.json(results);
      });
  
  }




router.get("/", getReservations);      // Returns all reservations  +  GET api/reservations/
router.post("/", addreservation);      // Adds a new reservation + POST api/reservations/
router.get("/:id", returnReservationsById);      // Returns reservation by id + GET api/reservations/2
router.put("/:id", updateReservationsById);      // Updates the reservation by id + PUT api/reservations/2
router.delete("/:id", deleteReservationsById);      // Deletes the reservation by id + DELETE api/reservations/2



module.exports = router;
