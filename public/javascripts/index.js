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

/* POST signup */
router.post('/signup', function(req, res, next) {
    if ("first_name" in req.body && "last_name" in req.body && "date_of_birth" in req.body && "email" in req.body && "password" in req.body && "mobileNumber" == req.body) {
        users.push(req.body);
        res.send(users);
        res.end();
    } else {
        res.sendStatus(400);
    }
    console.log("test");
});


module.exports = router;
