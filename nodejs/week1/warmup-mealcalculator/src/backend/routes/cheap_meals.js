// Respond with the json for all the meals (including it's reviews) 
// that are cheap (you define what a cheap meal is)

const mealsArray = require("../data/meals.json");
const reviewsArray = require("../data/reviews.json");


const getcheapmeal = function(request, response){
    
    const mealreviewsArray = mealsArray.map(mealitem=>{
        
        if(mealitem.price <= 10){
            mealitem.reviews = reviewsArray.filter(element => mealitem.id === element.mealId)
               return mealitem;
        }else{
            // const message =`There is no cheap meal to show`;
            //   return message;
            }

    })
    
    if(getcheapmeal && getcheapmeal.length){
        const message =`There is no cheap meal to show`;
        return message;
    }else{
        response.json(mealreviewsArray);
    }

    
    
}
module.exports = getcheapmeal;



