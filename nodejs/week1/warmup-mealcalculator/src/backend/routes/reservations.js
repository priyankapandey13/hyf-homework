// Respond with the json for all reservations



const getmeal = function (request, response) {

        const reservationsArray = require("../data/reservations.json");
        response.json(reservationsArray);
        
}

module.exports = getmeal;



