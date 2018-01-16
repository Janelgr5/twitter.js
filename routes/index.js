const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.use(express.static('public'))

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
  next();
});

//to test put firstname%20lastname
router.get('/users/:name', function(req, res) {
    // var name = ;
    var list = tweetBank.find( {name: req.params.name} );
    res.render( 'index', { tweets: list } );
  });

// router.get("/stylesheets/style.css", function(req, res, next){
//     // res.sendFile("/stylesheets/style.css", {root: _dirname + "/../public/"})
//     next();
// })

module.exports = router;