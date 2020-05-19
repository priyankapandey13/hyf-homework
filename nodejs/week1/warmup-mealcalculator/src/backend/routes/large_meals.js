// Respond with the json for all the meals (including it's reviews) that can fit lots of people
const mealsArray = require("../data/meals.json");
const reviewsArray = require("../data/reviews.json");

const getLargemeals = function (request, response) {
  const mealreviewsArray = mealsArray.filter((mealitem) => {
    if (mealitem.maxNumberOfGuests >= 10) {
      mealitem.reviews = reviewsArray.filter(
        (element) => mealitem.id === element.mealId
      );
      return mealitem;
    } else {
      return;
    }
  });
  response.json(mealreviewsArray);
};
module.exports = getLargemeals;
