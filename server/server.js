// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var nodemailer = require('nodemailer');

// Create our Express application
var app = express();

// Use environment defined port or 4000
var port = process.env.PORT || 4000;

//Allow CORS so that backend and frontend could pe put on different servers
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
};
app.use(allowCrossDomain);

// Use the body-parser package in our application
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    next(); // make sure we go to the next routes and don't stop here
});


/* CONTACT */
var contactRoute = router.route('/contact');

contactRoute.post(function(req, res) {
 var contact = {};
 console.log(req.body.name);
 contact.name = req.body.name;
 contact.company = req.body.company;
 contact.phone = req.body.phone;
 contact.email = req.body.email;
 contact.address = req.body.address;
 contact.zip = req.body.zipcode;
 contact.hear_about_us = req.body.refer;
 contact.contact_back = req.body.contactreq;
 contact.questions = req.body.form;

   // create reusable transporter object using the default SMTP transport
 var transporter = nodemailer.createTransport({
   service: 'Gmail',
   auth: {
     user: 'associatestest@gmail.com',
     pass: 'mattlyisabanana'
   }
 });
 
 // setup e-mail data with unicode symbols
 var mailOptions = {
     from: '"Koch & Associate 👥" <associatestest@gmail.com>', // sender address
     to: 'matthewly@gmail.com, aphamx.mail@gmail.com', // list of receivers
     subject: 'Contact Us Message from'+contact.name, // Subject line
     text: 'From: '+contact.name+' , from the company'+' '+contact.company+' '+contact.phone+' '+contact.email+' '+contact.address+' '+contact.zipcode  // plaintext body
 };
 
 // send mail with defined transport object
 transporter.sendMail(mailOptions, function(error, info){
     if(error){
         return console.log(error);
     }
     console.log('Message sent: ' + info.response);
 });

 // res.status(200).json({ message: 'Emailed!', "data":[{'name': contact.name, 'company': contact.company,
 //  'email': contact.email, 'phone': contact.phone, 'email': contact.email, 'address': contact.address, 
 //  'zip': contact.zip, 'hear_about_us': contact.hear_about_us, 'contact_back': contact.contact_back, 
 //  'questions': contact.questions}] });

    res.status(200).json({ message: 'Emailed!'});

});


// All our routes will start with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Server running on port ' + port);