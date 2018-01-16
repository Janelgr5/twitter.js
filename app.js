const express = require( 'express' );
const morgan = require('morgan');
const app = express(); // creates an instance of an express application

app.use(morgan('combined'))

// app.use(function(req, res, next) {
//     //req.method: verb, req.url: route
//     console.log(req.method, req.url);
//     console.log(res.statusCode);
//     next();
// })

// app.use("/special/", function(req, res, next){
//     console.log(req.method, req.url);
//     console.log(res.statusCode);
//     next();
// })

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

