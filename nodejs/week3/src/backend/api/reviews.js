const express = require("express");
const router = express.Router();
const pool = require("./../database");



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	Returns all reviews +	GET request + api/reviews/

const getreviews = function (request, response){

    console.log("Returns all reviews with GET request");  // for checking the request type

    // Operation : Returns all meals
    pool.query('SELECT * FROM review', function(error, results, fields) {
        if (error) {
          console.log(error);    // throw error;
        }
      return response.json(results);
    });

}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	Adds a new review +	POST request + api/reviews/

const addreview = function(request, response){
  console.log("A new review is added with POST request ");

  const {title, description, meal_id, stars, created_date} = request.body;
  const values ={
    title: title,
    description: description,
    meal_id: meal_id,
    stars: stars,
    created_date: created_date
  };
  console.log(values);
  
  
  
    // Operation :  Adds a new review
    pool.query('INSERT INTO review SET ?', values, function(error, results, fields) {
      if (error) {
        console.log(error);    // throw error;
      }
      console.log(`Added rows : ${results.affectedRows}`);
    return response.json(results);
  });
  
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	//  Returns review by id +	GET request + api/reviews/2

const returnreviewsById = function(request, response){
  console.log("Returns reviews by id with GET request");

  const values = request.params.id;
  console.log(values);
  
    // Operation :  select column where id is given
    pool.query('SELECT * FROM review WHERE id = ?', values, function(error, results, fields) {
      if (error) {
        console.log(error);    // throw error;
      }
    return response.json(results);
  });
 
}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	//  Updates the review by id +	PUT request + api/review /2


const updatereviewsById = function(request, response){
  console.log("Updates the review by id with PUT request");

  const idval = request.params.id;
  const values = request.body;
  const {number_of_guests, meal_id, created_date} = values;
  
    // Operation :  select column where id is given
    pool.query('UPDATE review SET ? WHERE id = ?', [values, idval], function(error, results, fields) {
      if (error) {
        console.log(error);    // throw error;
      }
    console.log(`Updated rows : ${results.affectedRows}`);
    return response.json(results);
  });
 
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++	// 	Deletes the review by id +	DELETE request + review/2


const deletereviewsById = function (request, response){
      console.log("Deletes the review by id with DELETE request");
      const idval = request.params.id;
      
      // Operation : Delete meals where id is given
      pool.query('DELETE FROM review WHERE id = ?', idval, function(error, results, fields) {
          if (error) {
            console.log(error);    // throw error;
          }
        console.log(`Deleted rows : ${results.affectedRows}`);
        return response.json(results);
      });
  
  }




router.get("/", getreviews);      // Returns all reviews  +  GET api/reviews/
router.post("/", addreview);      // Adds a new review + POST api/reviews/
router.get("/:id", returnreviewsById);      // Returns review by id + GET api/reviews/2
router.put("/:id", updatereviewsById);      // Updates the review by id + PUT api/reviews/2
router.delete("/:id", deletereviewsById);      // Deletes the review by id + DELETE api/reviews/2



module.exports = router;
