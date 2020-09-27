//Respond with the json for a random meal (including it's reviews)

const mealsArray = require("../data/meals.json");
const reviewsArray = require("../data/reviews.json");

const getmeals = function (request, response) {
  const mealsreviewsArray = mealsArray.map((mealitem) => {
    mealitem.reviews = reviewsArray.filter(
      (element) => mealitem.id === element.mealId
    );
    return mealitem;
  });

  response.json(mealsreviewsArray);
};

module.exports = getmeals;
