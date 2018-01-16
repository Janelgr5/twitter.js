const express = require( 'express' );
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const app = express(); // creates an instance of an express application

app.use(morgan('combined'))
app.use("/", routes);
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

// app.get('/', function(req, res){
//     // res.send('Hello World!');
//     const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//     res.render( 'index', {title: 'Hall of Fame', people: people} );
//     next();
// });

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

app.listen(3000, () => console.log('Example app listening on port 3000!'))

