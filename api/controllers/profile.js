var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        res.status(200).json(user);
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
      .findByIdAndUpdate(
          
            req.payload._id
          ,
          {
            $set: { 'name': req.body.name},
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
  }
};
// */