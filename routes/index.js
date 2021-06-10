var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'login' });
});

var user = {
  first_name: document.getElementById('firstname').value,
  last_name: document.getElementById('lastname').value,
  date_of_birth: document.getElementById('birthdate').value,
  email: document.getElementById('email').value,
  mobileNumber: document.getElementById('mob_number').value,
  accountCreationTime: new Date(),
};

router.post('/', function(req, res, next) {
  console.log("test")
});



module.exports = router;
