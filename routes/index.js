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

// router.get("/stylesheets/style.css", function(req, res, next){
//     // res.sendFile("/stylesheets/style.css", {root: _dirname + "/../public/"})
//     next();
// })

module.exports = router;