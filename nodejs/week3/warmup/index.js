const express = require("express");
const app = express()
const PORT = 4000;

// for req.body part
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/',(req, res, next)=>{
    res.send("Hi im index page");
    next();
})


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ exercise 1 => Calculator using :param

// localhost:4000/calculator/Addition?param1=2&param2=4

app.get('/calculator/:operator', function (req, res, next) {
    const getnumbers = Object.values(req.query);
    const allValues = [].concat.apply([],getnumbers);
    const AllValuesInInt = allValues.map(Number);
    console.log(`allValues: ${getnumbers}`);


let operationval, responses
    
    if (req.params.operator === 'Addition'){
        operationval = AllValuesInInt.reduce( (accumulator, currentValue) => accumulator + currentValue);
       responses = (`Choosen operator is : ${req.params.operator}, 
                    Parameters are : ${AllValuesInInt} 
                    The result is : ${operationval}`);

    }else if (req.params.operator === 'Subtraction'){
        operationval = AllValuesInInt.reduce( (accumulator, currentValue) => accumulator - currentValue);
        responses = (`Choosen operator is : ${req.params.operator}, 
                    Parameters are : ${AllValuesInInt} 
                    The result is : ${operationval}`);

    }else if (req.params.operator === 'Multiplication'){
        operationval = AllValuesInInt.reduce( (accumulator, currentValue) => accumulator * currentValue);
        responses = (`Choosen operator is : ${req.params.operator}, 
                    Parameters are : ${AllValuesInInt} 
                    The result is : ${operationval}`);

    }else if (req.params.operator === 'Division'){
        operationval = AllValuesInInt.reduce( (accumulator, currentValue) => accumulator / currentValue);
        responses = (`Choosen operator is : ${req.params.operator}, 
                    Parameters are : ${AllValuesInInt} 
                    The result is : ${operationval}`);
    }
   res.send(responses);

   next();
})



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ exercise 2 => Calculator using :req.body

// Going to calculator?firstParam=1&secondParam=2&secondParam=4 with the key division in the req.body set to division should respond with 0.125

// req.body
// {
// 	"method":"Addition"
// }
// request : localhost:4000/calculator?firstParam=1&secondParam=2


app.post('/calculator', function (req, res, next) {

    console.log(req.query); // { param1: 2, param2: 3, param3: 4 }

    const getnumbers = Object.values(req.query);
    const allValues = [].concat.apply([],getnumbers);
    const AllValuesInInt = allValues.map(Number);

    console.log(AllValuesInInt); // [ 1, 2, 4 ]
    console.log(req.body.method); // Addition
    

let operationval;
    
    if (req.body.method === 'Addition'){
        operationval = AllValuesInInt.reduce( (accumulator, currentValue) => accumulator + currentValue);
        res.send(`Choosen operator is : ${req.params.operator}, 
                Parameters are : ${AllValuesInInt} 
                The result is : ${operationval}`);

    }
    else if (req.body.method === 'Subtraction'){
        operationval = AllValuesInInt.reduce( (accumulator, currentValue) => accumulator - currentValue);
        res.send(`Choosen operator is : ${req.params.operator},
                Parameters are : ${AllValuesInInt} 
                The result is : ${operationval}`);

    }else if (req.body.method === 'Multiplication'){
        operationval = AllValuesInInt.reduce( (accumulator, currentValue) => accumulator * currentValue);
        res.send(`Choosen operator is : ${req.params.operator}, 
                Parameters are : ${AllValuesInInt} 
                The result is : ${operationval}`);

    }else if (req.body.method === 'Division'){
        operationval = AllValuesInInt.reduce( (accumulator, currentValue) => accumulator / currentValue);
        res.send(`Choosen operator is : ${req.params.operator}, 
                Parameters are : ${AllValuesInInt} 
                The result is : ${operationval}`);
    }
})


app.listen(PORT,()=>{
    console.log(`${PORT} port is running`);
})