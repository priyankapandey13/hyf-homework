const express = require('express');
// const app = express();
const router = express.Router()

const mealsArray = require('../data/meals.json');

     
// ++++++++++++++++++++++++ Testing for combining the whole meal search commands into one ++++++++++++++++++++++++  

router.get('/meals', (req, res)=>{
        
// ===================================================================================  for id :  /meals?id=2
      const givenid = parseInt(req.query.id);
      
        let mealscount = Object.keys(mealsArray).length;
        const calledmeal = mealsArray.filter(item => {
                return item.id == givenid;
        });

// ===================================================================================  for title : /meals/title=:title
// /meals?title=dish2        
        
        const matchtitle = req.query.title;
        const Titleresult = mealsArray.filter(item=>{
        return item.title.includes(matchtitle); // Checking the title with case insensitivity
        // return item.title.toLowerCase().includes(matchtitle.toLowerCase()); // Checking the title with case insensitivity but it is disturbing other functions
        })


// ===================================================================================  for price  : /meals?maxPrice=90
        const maxprice = parseInt(req.query.maxPrice);
        const Priceresult = mealsArray.filter(item=>{
          return item.price <= maxprice; 
        })
      
//         // res.json(Priceresult);
      
      
// ===================================================================================  for created after : meals?createdAfter=2019/10/07 01:00

        const CreatedAfter = req.query.createdAfter;
        const createdaftermeal = mealsArray.filter(item=>{
               return (item.createdAt > CreatedAfter);      
        
        })

// ===================================================================================  for limit : api/meals?limit=4
        const mealno = parseInt(req.query.limit);
        const limitedmeal = mealsArray.filter(item=> {
                return mealsArray.indexOf(item)<mealno;
        })



        
        
        if (req.query.id && mealscount >= givenid) {
        res.send(calledmeal);

        }else if (req.query.id && mealscount < givenid) {  // wanted to do it like this || req.query.id == 0 for value"0". But not working 
        res.status(400).send(`There is no meal with id : ${req.query.id}`);

        }else if (req.query.title) {
        res.json(Titleresult);

        }else if (req.query.maxPrice) {
        res.json(Priceresult);

        }else if (req.query.createdAfter) {
        res.json(createdaftermeal);

        }else if (req.query.limit) {
        res.json(limitedmeal);

        }else if (req.originalUrl == "/meals") {
        res.send(mealsArray);
        
        }else {
        res.send("Please insert the correct format");
        }

        
});

module.exports = router;