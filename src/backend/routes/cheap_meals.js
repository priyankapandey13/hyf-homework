// Respond with the json for all the meals (including it's reviews) 
// that are cheap (you define what a cheap meal is)

const mealsArray = require("../data/meals.json");
const reviewsArray = require("../data/reviews.json");
// const reservationsArray = require("../data/reservations.json");


const getcheapmeal = function(request, response){
    
    const mealreviewsArray = mealsArray.map(mealitem=>{
        if(mealitem.price <= 50){
            mealitem.reviews = reviewsArray.filter(element => mealitem.id === element.mealId)
               return mealitem;
            }else{
                return
                }

    })
    response.json(mealreviewsArray);
}
module.exports = getcheapmeal;



