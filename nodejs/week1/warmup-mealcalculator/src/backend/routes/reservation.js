// Respond with the json for a random reservation
const getreservationsArray = function (request, response) {
  const reservationsArray = require("../data/reservations.json");
  const length = reservationsArray.length; // getting the length of the array here
  const randomnum = Math.floor(Math.random() * length); // getting random number here
  response.json(reservationsArray[randomnum]);
};

module.exports = getreservationsArray;
