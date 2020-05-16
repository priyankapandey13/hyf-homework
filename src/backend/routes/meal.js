// Respond with the json for a random meal (including it's reviews)

const mealsArray = require("../data/meals.json");
const reviewsArray = require("../data/reviews.json");

const length = reviewsArray.length;

const getmeal = function (request, response) {

        const randomnum = Math.floor(Math.random() * length) ;

        const mealreviewsArray = mealsArray.map(mealitem=>{
                
                mealitem.reviews = reviewsArray.filter(element => mealitem.id === element.mealId ) 
                return mealitem;
        })
        

    response.json(mealreviewsArray[randomnum]);
}

module.exports = getmeal;



// const randomnum = Math.floor(Math.random() * length) + 1 ;


