var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Patient = mongoose.model('Patient'); //experimental
var Appointment = mongoose.model('Appointment');
var Billing = mongoose.model('Billing');
var Employee = mongoose.model('Employee')

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {

  // if(!req.body.name || !req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  // New Blank Patient
  var patient = new Patient(); //experimental
  
  patient.user_name = req.body.email;
  patient.first_name = " ";
  patient.id_number = " ";
  patient.last_name = " ";
  patient.phone_number = " ";
  patient.street = " ";
  patient.city = " ";
  patient.state = " ";
  patient.zip_code = " ";
  patient.email_address = req.body.email;
  patient.visit_history = " ";

  patient.save(function(err) {
    console.log(err)
  });

  // New Blank Appointment
  var appointment = new Appointment();
  
  appointment.user_name = req.body.email;
  appointment.app_date = " ";
  appointment.app_time = " ";
  appointment.app_location = " "

  appointment.save(function(err) {
    console.log(err)
  });

  // New Blank Billing
  var billing = new Billing();
  
  billing.user_name = req.body.email;
  billing.balance_due = 0;
  
  billing.save(function(err) {
    console.log(err)
  });


  // New Blank Employee
  var employee = new Employee();
  
  employee.user_name = req.body.email;
  employee.employee_status = false;
  
  employee.save(function(err) {
    console.log(err)
  });


  var user = new User();

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);

  user.save(function(err) {
    console.log(err)
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });

};

module.exports.changePassword = function(req, res) {
  console.log('I made it here')
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        user.setPassword(req.body.password);

        user.save(function(err) {
        console.log(err)
        var token;
        token = user.generateJwt();
        res.status(200);
        res.json({
        "token" : token
    });
  });
      });
  }

};

module.exports.login = function(req, res) {

  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};