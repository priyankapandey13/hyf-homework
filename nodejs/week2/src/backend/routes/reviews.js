const express = require('express');
const router = express.Router()
const ReviewsArray = require('../data/reviews.json');



router.get('/reviews', (req, res)=>{
        
// ===================================================================================  for id :  /reviews?id=2
      const givenid = req.query.id;
      
        let reviewscount = Object.keys(ReviewsArray).length;
        const calledreviews = ReviewsArray.filter(item => {
                if(reviewscount < givenid){
                    return ("This review does not exist");
                 }
                else{
                    return item.id == givenid;
                }
        });
        
        
        if (req.query.id) {
        res.send(calledreviews);

        }else if (req.originalUrl == "/reviews") {
        res.send(ReviewsArray);

        }else {
        res.send("Please insert the correct format");
        }

        
});

module.exports = router;