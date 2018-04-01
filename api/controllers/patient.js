var mongoose = require('mongoose');
var User = mongoose.model('User');
var Patient = mongoose.model('Patient');

module.exports.profileRead = function(req, res) {
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
          if(err) {
              res.status(401).json({"message" : "UnauthorizedError: no matching record"});
              return;
          }
          Patient.findOne({'email_address':user.email},
            'first_name last_name id_number phone_number street city state zip_code email_address', 
            function(err, patient) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                res.status(200).json(patient);
          })
      });
  }

};

// /* Experimental
module.exports.profileWrite = function(req, res) {  
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
          if(err) {
              res.status(401).json({"message" : "UnauthorizedError: no matching record"});
              return;
          }
          Patient.findByIdAndUpdate(
          {
            'email_address':user.email},
          {
            $set: { 'first_name': req.body.first_name},
          },
          {
            new: true
          },
            function(err, patient) {
                if(err) {
                    res.status(404).json({"message" : "No record found"});
                    return;
                }
                res.status(200).json(patient);
          })
      });
  }
};
// */