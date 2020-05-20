const express = require('express')
const app = express()


const meals = require("./routes/meals.js")
const reservations = require("./routes/reservations.js")
const reviews = require("./routes/reviews.js")


app.get('/', (req ,res, next)=>{
    res.send('Hello world')
    next()
})

app.use((req, res, next)=>{
    console.log(`At : ${new Date().toLocaleString()} request received for path : ${req.url}`)
    next()
  })


  app.get('/meals', meals)
  app.get('/reservations', reservations)
  app.get('/reviews', reviews)
  
  
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Is running on ', PORT);
    
})



