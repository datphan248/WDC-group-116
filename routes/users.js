var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//Google Sign-in Verification
//Commented out as we cannot implement it without our routes complete - but this code should work, it is based on Lecture 10

// const CLIENT_ID = '186202105193-e1gugmmcjdqd168mn3hr2a09ijnkebgg.apps.googleusercontent.com';

// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client('186202105193-e1gugmmcjdqd168mn3hr2a09ijnkebgg.apps.googleusercontent.com');

// router.post('/google_account', function(req, res, next) {

//     if ('user' in req.body) {

//         if (req.body.user in users) {
//             if (users[req.body.user] == req.body.pass) {
//                 req.session.user = req.body.user;
//                 res.send(req.session.user);
//             }
//             else {
//                 res.sendStatus(401);
//             }
//         }
//         else {
//             res.sendStatus(401);
//         }
//     }

//     else if ('token' in req.body) {

//             async function verify() {
//             const ticket = await client.verifyIdToken({
//                     idToken: req.body.token,
//                     audience: '186202105193-e1gugmmcjdqd168mn3hr2a09ijnkebgg.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
//           // Or, if multiple clients access the backend:
//           //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//             });

//                 const payload = ticket.getPayload();
//                 const userid = payload['sub'];
//                 // If request specified a G Suite domain:
//                 req.session.user = payload['email'];
//                 res.send(req.session.user);

//             }

//     verify().catch(function(){res.sendStatus(401)});

//     }

// });


module.exports = router;