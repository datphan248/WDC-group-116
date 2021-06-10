var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
  res.redirect('/login');
});

/* GET signup */
// router.get('/signup', function(req, res, next) {


// });

/* POST register_user */
router.post('/register_user', function(req, res, next) {

    if (req.body !== null) {
        res.send(req.body);
        res.end();
    }
    else {
        res.sendStatus(400);
    }
});

/* POST register_venue_manager */
router.post('/register_venue_manager', function(req, res, next) {

    if (req.body !== null) {
          res.send(req.body);
          res.end();
    }
    else {
          res.sendStatus(400);
    }

});

/* POST register_venue */
router.post('/register_venue', function(req, res, next) {

    if (req.body !== null) {
          res.send(req.body);
          res.end();
    }
    else {
          res.sendStatus(400);
    }

});



module.exports = router;
