const express = require('express');
const router = express.Router()
const ReservationsArray = require('../data/reservations.json');



router.get('/reservations', (req, res)=>{
        
// ===================================================================================  for id :  /reservations?id=2
      const givenid = req.query.id;
      
        let reservationcount = Object.keys(ReservationsArray).length;
        const calledreservation = ReservationsArray.filter(item => {
                if(reservationcount < givenid){
                    return ("This meal does not exist");
                 }
                else{
                    return item.id == givenid;
                }
        });
        
        
        if (req.query.id) {
        res.send(calledreservation);

        }else if (req.originalUrl == "/reservations") {
        res.send(ReservationsArray);

        }else {
        res.send("Please insert the correct format");
        }

        
});

module.exports = router;